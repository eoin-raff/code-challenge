import getPiecesUserIsMissingForSet from '../src/utils/getPiecesUserIsMissingForSet'

describe('getPiecesUserIsMissingForSet', () => {
    test('should return an array of missing pieces', () => {
        const setPieces = [
            {
                "part": {
                    "designID": "11211",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 18
            },
            {
                "part": {
                    "designID": "36840",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 10
            },
            {
                "part": {
                    "designID": "36840",
                    "material": 155,
                    "partType": "rigid"
                },
                "quantity": 11
            }]
        const userPieces = [

            {
                "part": {
                    "designID": "11211",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 18
            },]
        const expectedResult = [{
            "part": {
                "designID": "36840",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "36840",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 11
        }]

        const result = getPiecesUserIsMissingForSet(userPieces, setPieces)

        expect(result).toContainEqual(expectedResult[0])
        expect(result).toContainEqual(expectedResult[1])

    })
})