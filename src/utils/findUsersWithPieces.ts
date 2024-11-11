import { GetData, GetUsers, Piece, SetData, UserData } from "../../types"
import User from "../classes/user"
import * as API from "./api"
import userCanBuildSet from "./userCanBuildSet"

interface FindUsersAPI {
    getUsers: GetUsers,
    getUserById: GetData<UserData>
}

const findUsersWithPieces = async (pieces: Piece[], { getUsers, getUserById }: FindUsersAPI = API) => {
    const users: UserData[] = []
    const totalPiecesCount = pieces.reduce((accumulator, currentPiece) => { return accumulator + currentPiece.quantity }, 0)
    const { Users: allUsers } = await getUsers()
    //exclude users who have fewer pieces than required before doing expensicve lookups
    const usersWithEnoughPieces = allUsers.filter(({ brickCount }) => brickCount >= totalPiecesCount)

    const piecesAsSetData: SetData = {
        id: 'missing-pieces',
        name: 'missing-pieces',
        setNumber: '',
        totalPieces: totalPiecesCount,
        pieces
    }

    for await (const userData of usersWithEnoughPieces.map(user => getUserById(user.id))) {
        const user = new User(userData)
        if (userCanBuildSet(user, piecesAsSetData)) {
            users.push(userData)
        }
    }

    return users

}

export default findUsersWithPieces