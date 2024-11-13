import User from '../src/classes/user'
import { user, set } from '../mocks'
import { SetData } from '../types'
import { getUserById, getUserByUsername } from '../src/utils/api'

import getAllSetDetails from '../src/utils/getAllSetDetails'

describe('User', () => {
    test('is constructed correctly', () => {
        const { id, username, location, brickCount, collection } = user
        const testUser = new User(user)
        expect(testUser.id).toBe(id)
        expect(testUser.username).toBe(username)
        expect(testUser.location).toBe(location)
        expect(testUser.brickCount).toBe(brickCount)
        expect(testUser.collection).toBe(collection)
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
    describe('canColourSwapSet()', () => {
        test('should return false if the user can already build it', () => {
            const testUser = new User({
                ...user, collection: [
                    { pieceId: 'a', variants: [{ color: '1', count: 5 }, { color: '2', count: 5 }] },
                ]
            })
            const testSet: SetData = {
                name: 'testset',
                id: 'abc123',
                setNumber: '1',
                totalPieces: 5,
                pieces: [
                    { part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 5 }]
            }

            expect(testUser.canColourSwapSet(testSet)).toBe(null)
        })
        test('should return false if there is a piece the user does not have enough of in another color', () => {
            const testUser = new User({
                ...user, collection: [
                    {
                        pieceId: 'a', variants: [
                            { color: '1', count: 5 },
                            // { color: '2', count: 5 }
                        ]
                    },
                ]
            })
            const testSet: SetData = {
                name: 'testset',
                id: 'abc123',
                setNumber: '1',
                totalPieces: 5,
                pieces: [
                    { part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 5 },
                    { part: { designID: 'b', material: 2, partType: 'rigid' }, quantity: 5 }
                ]
            }

            expect(testUser.canColourSwapSet(testSet)).toBe(null)
        })
        test('should return false if the only available alts are in a color that is used already', () => {
            const testUser = new User({
                ...user, collection: [
                    {
                        pieceId: 'a', variants: [
                            { color: '2', count: 5 },
                        ]
                    },
                ]
            })
            const testSet: SetData = {
                name: 'testset',
                id: 'abc123',
                setNumber: '1',
                totalPieces: 5,
                pieces: [
                    { part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 5 },
                    { part: { designID: 'b', material: 2, partType: 'rigid' }, quantity: 5 }
                ]
            }

            expect(testUser.canColourSwapSet(testSet)).toBe(null)
        })

        test('should return true if user has enough of the same pieces in a different colour', () => {
            const testUser = new User({
                ...user, collection: [
                    { pieceId: 'a', variants: [{ color: '2', count: 5 }, { color: '3', count: 5 }] },
                    { pieceId: 'b', variants: [{ color: '2', count: 5 }] },

                ]
            })
            const testSet: SetData = {
                name: 'testset',
                id: 'abc123',
                setNumber: '1',
                totalPieces: 5,
                pieces: [
                    { part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 5 },
                    { part: { designID: 'b', material: 2, partType: 'rigid' }, quantity: 5 },
                ]
            }

            expect(testUser.canColourSwapSet(testSet)).not.toBe(null)
        })

        test('should return true if used colors can also be swapped', () => {
            const testUser = new User({
                ...user, collection: [
                    { pieceId: 'walls', variants: [{ color: '2', count: 5 }] },
                    { pieceId: 'roof', variants: [{ color: '4', count: 5 }] },
                    { pieceId: 'flag', variants: [{ color: '3', count: 5 }] },

                ]
            })
            const testSet: SetData = {
                name: 'testset',
                id: 'abc123',
                setNumber: '1',
                totalPieces: 5,
                pieces: [
                    { part: { designID: 'walls', material: 1, partType: 'rigid' }, quantity: 5 },
                    { part: { designID: 'roof', material: 2, partType: 'rigid' }, quantity: 5 },
                    { part: { designID: 'flag', material: 3, partType: 'rigid' }, quantity: 5 },
                ]
            }

            expect(testUser.canColourSwapSet(testSet)).not.toBe(null)
        })

        test('prod', async () => {

            const { id } = await getUserByUsername('dr_crocodile')
            const userData = await getUserById(id)
            const dr_crocodile = new User(userData)

            const sets = await getAllSetDetails()

        })

    })

})