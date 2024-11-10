import { Piece, SetData } from "../../types"
import User from "./user"

export default class Set {
    _id: string
    _name: string
    _setNumber: string
    _totalPieces: number
    _pieces: Array<Piece>

    constructor({ id, name, setNumber, totalPieces, pieces }: SetData) {
        this._id = id
        this._name = name
        this._setNumber = setNumber
        this._totalPieces = totalPieces
        this._pieces = pieces
    }

    get id() { return this._id }
    get name() { return this._name }
    get setNumber() { return this._setNumber }
    get totalPieces() { return this._totalPieces }
    get pieces() { return this._pieces }

    public userCanBuild(user: User): boolean {

        /**
         * before doing an expensive search, check how many pieces the user has.
         * If they have fewer pieces than the set requires, then they definitely can't build it
         */

        if (this._totalPieces > user._brickCount) return false


        return true
    }
}