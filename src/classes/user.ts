import { UserData, Brick, SetData, SetSummary, Piece, BrickVariant } from '../../types'
import convertBricksToPieces from '../utils/convertBricksToPieces'
import getAllUserDetails from '../utils/getAllUserDetails'
import getPieceWithColorFromSet from '../utils/getPieceWithColorFromSet'
import getUniqueColorAlternatives from '../utils/getUniqueColorAlternatives'
import userCanBuildSet from '../utils/userCanBuildSet'


type AlternativePiecesMap = Record<string, Piece[]>
type AlternativeColorsMap = Record<string, number[]>


export default class User {

    private _id: string
    private _username: string
    private _location: string
    private _brickCount: number
    private _collection: Array<Brick>

    constructor({ id, username, location, brickCount, collection }: UserData) {
        this._id = id
        this._username = username
        this._location = location
        this._brickCount = brickCount
        this._collection = collection
    }

    get id() { return this._id }
    get username() { return this._username }
    get location() { return this._location }
    get brickCount() { return this._brickCount }
    get collection() { return this._collection }

    hasPiece = ({ part: { designID, material }, quantity }: Piece) => {
        // does the user's collection contain the correct type of brick?
        const matchingPiece = this._getMatchingPieceFromCollection(designID)
        if (!matchingPiece) return false

        // does the user have the correct color of that brick?
        const matchingVariant = this._getMatchingVariant(matchingPiece, material)
        if (!matchingVariant) return false

        //does the user have enough of the brick in that color?
        if (matchingVariant.count < quantity) return false

        return true
    }
    hasPieceInDifferentColour({ part: { designID }, quantity }: Piece): Piece[] {
        // does the user's collection contain the correct type of brick?
        const matchingBrick = this._getMatchingPieceFromCollection(designID)
        if (!matchingBrick) return []

        const pieces = convertBricksToPieces([matchingBrick])

        //return al l pieces with sufficient quantity regardless of colour
        const filteredPieces = pieces.filter((myPiece) => { return myPiece.quantity >= quantity })
        return filteredPieces

    }
    canBuildSet = (set: SetData) => {
        return userCanBuildSet(this, set)
    }
    getMyCollectionAndOtherCollectionsAsPieces = async (): Promise<[Piece[], Piece[][]]> => {
        const details = await getAllUserDetails()

        const initial: Brick[][] = []
        const allCollections: Brick[][] = details.reduce((accumulator, currentDetails) => {
            //skip the current user
            if (currentDetails.id === this.id) return accumulator
            return [...accumulator, currentDetails.collection]
        }, initial)


        //pieces are easier to compare than bricks, so convert both userCollection and allUsersCollections to pieces
        const myCollection = convertBricksToPieces(this.collection)
        const otherUsersCollections = allCollections.map(collection => convertBricksToPieces(collection))
        return [myCollection, otherUsersCollections]
    }

    canColourSwapSet = (set: SetData,): Record<string, number> | null => {
        let missingPieces: Piece[] = []
        const canBuild = userCanBuildSet(this, set, (_set, pieces) => missingPieces = [...pieces])
        //no need to colour swap if you can build it already
        if (canBuild || missingPieces.length === 0) return null

        const alternativeColors: AlternativeColorsMap = missingPieces.reduce((accumulator, currentPiece) => {
            //find pieces that I have in another color
            const alts = this.hasPieceInDifferentColour(currentPiece)
            const initial: number[] = []
            const altColors: number[] = alts.reduce((acc, current) => { return [...acc, current.part.material] }, initial)

            return { ...accumulator, [currentPiece.part.designID]: altColors }
        }, {})

        return getUniqueColorAlternatives(alternativeColors)
    }

    private _getMatchingPieceFromCollection = (id: string): Brick | undefined => {
        const matchingPiece = this._collection.find(({ pieceId }) => {
            return pieceId === id
        })
        return matchingPiece
    }
    private _getMatchingVariant = ({ variants }: Brick, material: number): BrickVariant | undefined => {
        const matchingVariant = variants.find(({ color }) => {
            return material.toString() === color

        })
        return matchingVariant
    }


}


