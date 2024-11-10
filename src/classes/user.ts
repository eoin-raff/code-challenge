import { UserData, Brick, SetData, SetSummary, Piece, BrickVariant } from '../../types'
export default class User {
    _id: string
    _username: string
    _location: string
    _brickCount: number
    _collection: Array<Brick>

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

        //TODO: Strech goal - what colors does the user have that they could replace the piece with?

        return true
    }

    _getMatchingPieceFromCollection = (id: string): Brick | undefined => {
        const matchingPiece = this._collection.find(({ pieceId }) => {
            return pieceId === id
        })
        return matchingPiece
    }
    _getMatchingVariant = ({ variants }: Brick, material: number): BrickVariant | undefined => {
        const matchingVariant = variants.find(({ color }) => {
            return material.toString() === color

        })
        return matchingVariant
    }
    _collectionHasPieceVariantInSufficientQuantity = (id: string, material: number, quantity: number): boolean => { return true }

}