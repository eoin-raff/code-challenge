import userCanBuildSet from '../src/utils/userCanBuildSet'
import { user, set } from "../mocks"
import User from "../src/classes/user"
import Set from "../src/classes/set"

describe('userCanBuildSet', () => {
    test('returns false if the user has no bricks', () => {
        const testUser = new User({ ...user, brickCount: 0 })
        const testSet = new Set({ ...set, totalPieces: 10 })
        const result = userCanBuildSet(testUser, testSet)
        expect(result).toBe(false)
    })
    test('returns false if user has fewer pieces than the set requires', () => {
        const testUser = new User({ ...user, brickCount: 5 })
        const testSet = new Set({ ...set, totalPieces: 10 })
        const result = userCanBuildSet(testUser, testSet)
        expect(result).toBe(false)
    })
    test('returns false if the user is missing a required brick', () => {
        const testUser = new User({
            ...user, brickCount: 10, collection: [{
                "pieceId": "3710",
                "variants": [
                    {
                        "color": "155",
                        "count": 9
                    },
                    {
                        "color": "5",
                        "count": 1
                    },
                ]
            }]
        })
        const testSet = new Set({
            ...set, totalPieces: 5, "pieces": [
                {
                    "part": {
                        "designID": "3710",
                        "material": 155,
                        "partType": "rigid"
                    },
                    "quantity": 4
                },
                {
                    "part": {
                        "designID": "112345",
                        "material": 155,
                        "partType": "rigid"
                    },
                    "quantity": 1
                },
            ]
        })
        const result = userCanBuildSet(testUser, testSet)
        expect(result).toBe(false)
    })
})