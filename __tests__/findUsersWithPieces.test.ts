import findUsersWithPieces from '../src/utils/findUsersWithPieces'
import { GetData, GetUsers, Piece, UserData, UserSummary } from '../types'

const userWithoutManyBricks: UserSummary = {
    id: 'a',
    username: 'no-bricks',
    location: 'UKY',
    brickCount: 1
}
const userWithWrongBricks: UserSummary = {
    id: 'b',
    username: 'wrong-bricks',
    location: 'UKY',
    brickCount: 10
}
const userWithCorrectBricks: UserSummary = {
    id: 'c',
    username: 'mr-helpful',
    location: 'UKY',
    brickCount: 10
}
const mockGetUsers: GetUsers = () => Promise.resolve({
    Users: [
        userWithoutManyBricks,
        userWithWrongBricks,
        userWithCorrectBricks
    ]
})
const mockUserDatabase: { [keys: string]: UserData } = {
    'a': {
        ...userWithoutManyBricks, collection: [{
            "pieceId": "3710",
            "variants": [
                {
                    "color": "155",
                    "count": 1
                },
            ]
        },]
    },
    'b': {
        ...userWithWrongBricks, collection: [{
            "pieceId": "3005",
            "variants": [
                {
                    "color": "155",
                    "count": 10
                },
            ]
        },]
    },
    'c': {
        ...userWithCorrectBricks, collection: [{
            "pieceId": "3710",
            "variants": [
                {
                    "color": "155",
                    "count": 10
                },
            ]
        },]
    }
}
const mockGetUserByID: GetData<UserData> = (id) => Promise.resolve(mockUserDatabase[id])

const mockSetPieces: Piece[] = [{
    part: {
        designID: "3710",
        material: 155,
        partType: 'rigid'

    },
    quantity: 10
},]

describe('findUsersWithPieces', () => {
    test('should return the correct user', async () => {
        const result = await findUsersWithPieces(mockSetPieces, { getUsers: mockGetUsers, getUserById: mockGetUserByID })

        expect(result.length).toBe(1)
        expect(result[0].username).toBe('mr-helpful')
    })
})