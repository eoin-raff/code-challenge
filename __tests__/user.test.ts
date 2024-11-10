import User from '../src/classes/user'
import { user, set } from '../mocks'

describe('User', () => {
    test('is constructed correctly', () => {
        const { id, username, location, brickCount, collection } = user
        const testUser = new User(user)
        expect(testUser.id).toBe(id)
        expect(testUser._username).toBe(username)
        expect(testUser._location).toBe(location)
        expect(testUser._brickCount).toBe(brickCount)
        expect(testUser._collection).toBe(collection)
    })
    describe('.hasPiece()', () => {
        test('returns false if no matching piece ID is in collection', () => {
            const testCollection = [{
                "pieceId": "3710",
                "variants": [
                    {
                        "color": "155",
                        "count": 9
                    },
                ]
            }]
            const testUser = new User({
                ...user, collection: testCollection
            })
            const testPiece = {
                "part": {
                    "designID": "63864",
                    "material": 2,
                    "partType": "rigid"
                },
                "quantity": 6
            }
            const userHasPiece = testUser.hasPiece(testPiece)

            expect(userHasPiece).toBe(false)
        })
        test('returns false if the matching piece is of the wrong color', () => {
            const testCollection = [{
                "pieceId": "3710",
                "variants": [
                    {
                        "color": "155",
                        "count": 9
                    },
                ]
            }]
            const testPiece = {
                "part": {
                    "designID": "3710",
                    "material": 2,
                    "partType": "rigid"
                },
                "quantity": 6
            }
            const testUser = new User({
                ...user, collection: testCollection
            })
            const userHasPiece = testUser.hasPiece(testPiece)

            expect(userHasPiece).toBe(false)
        })
        test('returns false if the user does not have enough pieces of the correct color', () => {
            const testCollection = [{
                "pieceId": "3710",
                "variants": [
                    {
                        "color": "155",
                        "count": 9
                    },
                ]
            }]
            const testPiece = {
                "part": {
                    "designID": "3710",
                    "material": 155,
                    "partType": "rigid"
                },
                "quantity": 10
            }
            const testUser = new User({
                ...user, collection: testCollection
            })

            const userHasPiece = testUser.hasPiece(testPiece)

            expect(userHasPiece).toBe(false)
        })
        test('returns true if all conditions are met', () => {
            const testCollection = [{
                "pieceId": "3710",
                "variants": [
                    {
                        "color": "2",
                        "count": 10
                    },
                    {
                        "color": "155",
                        "count": 9
                    },
                ]
            }]
            const testUser = new User({
                ...user, collection: testCollection
            })
            const testPiece = {
                "part": {
                    "designID": "3710",
                    "material": 2,
                    "partType": "rigid"
                },
                "quantity": 6
            }
            const userHasPiece = testUser.hasPiece(testPiece)

            expect(userHasPiece).toBe(true)
        })
    })

})