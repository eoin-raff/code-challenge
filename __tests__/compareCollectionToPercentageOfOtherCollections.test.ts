import compareCollectionToPercentageOfOtherCollections from '../src/utils/compareCollectionToPercentageOfOtherCollections'
import { Piece } from '../types'

describe('compareCollectionToPercentageOfOtherCollections', () => {
    test('should return my whole collection if there is only one user who shares the whole thing', async () => {
        const myCollection: Piece[] = [
            { part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 2 },
        ]
        const otherCollections: Piece[][] = [[
            { part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 2 },
        ]]

        const result = compareCollectionToPercentageOfOtherCollections(myCollection, otherCollections)
        expect(result[0]).toEqual({ part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 2 })
    })
    test('should return an empty array if no users can build it', async () => {
        const myCollection: Piece[] = [
            { part: { designID: 'a', material: 1, partType: 'rigid' }, quantity: 2 },
        ]
        const otherCollections: Piece[][] = [[
            { part: { designID: 'b', material: 1, partType: 'rigid' }, quantity: 2 },
        ]]

        const result = compareCollectionToPercentageOfOtherCollections(myCollection, otherCollections)
        expect(result.length).toBe(0)
    })
    test('should return a partial quantity if I have more than 50% of users', async () => {
        const myCollection: Piece[] = [
            { part: { designID: 'b', material: 1, partType: 'rigid' }, quantity: 10 },
        ]
        const otherCollections: Piece[][] = [
            [
                { part: { designID: 'b', material: 1, partType: 'rigid' }, quantity: 10 },
            ],
            [
                { part: { designID: 'b', material: 1, partType: 'rigid' }, quantity: 5 },
            ],
            [
                { part: { designID: 'b', material: 1, partType: 'rigid' }, quantity: 2 },
            ],
        ]

        const result = compareCollectionToPercentageOfOtherCollections(myCollection, otherCollections)
        expect(result.length).toBe(1)
        expect(result[0].quantity).toBe(5)
    })
    test('should return a my quantity if others users have more than me', async () => {
        const myCollection: Piece[] = [
            { part: { designID: 'b', material: 1, partType: 'rigid' }, quantity: 5 },
        ]
        const otherCollections: Piece[][] = [
            [
                { part: { designID: 'b', material: 1, partType: 'rigid' }, quantity: 10 },
            ],
        ]

        const result = compareCollectionToPercentageOfOtherCollections(myCollection, otherCollections)
        expect(result.length).toBe(1)
        expect(result[0].quantity).toBe(5)
    })

})