import Set from '../src/classes/set'
import { set } from '../mocks'

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
})