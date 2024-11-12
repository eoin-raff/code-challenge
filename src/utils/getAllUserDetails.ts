import { GetUsersAPI, UserData, UserSummary } from "../../types"
import { getUserById, getUsers } from "./api"

const defaultAPI: GetUsersAPI = {
    getUsers,
    getUserById
}

const getAllUserDetails = async ({ getUsers, getUserById }: GetUsersAPI = defaultAPI): Promise<Array<UserData>> => {
    const { Users: userSummaries }: { Users: Array<UserSummary> } = await getUsers()
    const ids = getAllUserIds(userSummaries)
    const Users = await Promise.all(ids.map(id => getUserById(id)))
    return Users
}

export const getAllUserIds = (UserSummaries: UserSummary[]): Array<string> => {
    let initialValue: Array<string> = []
    const userIds: Array<string> = UserSummaries.reduce((accumulator, currentUser) => {
        accumulator.push(currentUser.id)
        return accumulator
    }, initialValue)
    return userIds
}

export default getAllUserDetails