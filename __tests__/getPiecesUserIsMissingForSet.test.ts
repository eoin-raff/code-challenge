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
            },
            {
                "part": {
                    "designID": "36840",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 10
            },
        ]
        const expectedResult = {
            "part": {
                "designID": "36840",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 11
        }

        const result = getPiecesUserIsMissingForSet(userPieces, setPieces)

        expect(result[0]).toEqual(expectedResult)

    })

    test('should return the difference in quantity if a user has some of the correct pieces', () => {
        const setPieces = [
            {
                "part": {
                    "designID": "11211",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 20
            }]
        const userPieces = [
            {
                "part": {
                    "designID": "11211",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 15
            }]
        const expectedResult =
        {
            "part": {
                "designID": "11211",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 5
        }

        const result = getPiecesUserIsMissingForSet(userPieces, setPieces)

        expect(result[0]).toEqual(expectedResult)
    })
})