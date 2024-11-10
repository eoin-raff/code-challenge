import { Piece, SetData } from "../../types"

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
}