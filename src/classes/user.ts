import { UserData, Brick, SetData, SetSummary } from '../../types'
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

}