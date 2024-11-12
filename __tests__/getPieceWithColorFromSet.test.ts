import getPieceWithColorFromSet from '../src/utils/getPieceWithColorFromSet'
describe('getPieceWithColorFromSet', () => {
    test('should return undefined if there is no piece of that color', () => {
        const testSet = {
            id: 'testSet1',
            name: 'first test set',
            setNumber: '1',
            totalPieces: 20,
            pieces: [{
                "part": {
                    "designID": "11211",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 20
            },]
        }
        const color = 1

        expect(getPieceWithColorFromSet(testSet, color)).toBe(undefined)
    })
    test('should return the first piece that is found in a set with that color', () => {
        const testSet = {
            id: 'testSet1',
            name: 'first test set',
            setNumber: '1',
            totalPieces: 10,
            pieces: [
                {
                    "part": {
                        "designID": "11211",
                        "material": 5,
                        "partType": "rigid"
                    },
                    "quantity": 5
                },
                {
                    "part": {
                        "designID": "12345",
                        "material": 5,
                        "partType": "rigid"
                    },
                    "quantity": 5
                },
            ]
        }
        const color = 5

        expect(getPieceWithColorFromSet(testSet, color)).toEqual({
            "part": {
                "designID": "11211",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 5
        })
    })
})