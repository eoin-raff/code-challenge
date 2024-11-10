import Set from '../src/classes/set'
import User from '../src/classes/user'
import { user, set } from '../mocks'

describe('Set', () => {
    test('is constructed correctly', () => {
        const { id, name, setNumber, totalPieces, pieces } = set
        const testSet = new Set(set)
        expect(testSet.id).toBe(id)
        expect(testSet.name).toBe(name)
        expect(testSet.setNumber).toBe(setNumber)
        expect(testSet.totalPieces).toBe(totalPieces)
        expect(testSet.pieces).toBe(pieces)
    })

    describe('userCanBuildSet', () => {
        test('returns false if user has fewer pieces than the set requires', () => {
            const testUser = new User({ ...user, brickCount: 5 })
            const testSet = new Set({ ...set, totalPieces: 10 })
            const result = testSet.userCanBuild(testUser)
            expect(result).toBe(false)
        })
    })


})