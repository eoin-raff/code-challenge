import convertBricksToPieces from '../src/utils/convertBricksToPieces'

describe('convertBricksToPieces', () => {
    test('should correctly convert types', () => {

        const bricks = [
            {
                pieceId: '1',
                variants: [
                    { color: '1', count: 5 },
                    { color: '2', count: 2 }
                ]
            },
            {
                pieceId: '2',
                variants: [
                    { color: '1', count: 5 },
                    { color: '2', count: 2 }
                ]
            },
            {
                pieceId: '3',
                variants: [
                    { color: '1', count: 5 },
                    { color: '2', count: 2 }
                ]
            },
        ]

        const expectedResult = [
            {
                part: {
                    designID: '1',
                    material: 1,
                    partType: 'rigid'
                }, quantity: 5
            },
            {
                part: {
                    designID: '1',
                    material: 2,
                    partType: 'rigid'
                }, quantity: 2
            },
            {
                part: {
                    designID: '2',
                    material: 1,
                    partType: 'rigid'
                }, quantity: 5
            },
            {
                part: {
                    designID: '2',
                    material: 2,
                    partType: 'rigid'
                }, quantity: 2
            },
            {
                part: {
                    designID: '3',
                    material: 1,
                    partType: 'rigid'
                }, quantity: 5
            },
            {
                part: {
                    designID: '3',
                    material: 2,
                    partType: 'rigid'
                }, quantity: 2
            },
        ]

        const result = convertBricksToPieces(bricks)

        expect(result).toEqual(expectedResult)
    })
})