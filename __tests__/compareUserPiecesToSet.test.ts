import compareUserPiecesToSet from '../src/utils/compareUserPiecesToSet'

describe('comparePieces', () => {
    test('should return false for different pieces', () => {
        const userPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 5
        }
        const setPiece = {
            part: {
                designID: 'bar',
                material: 21,
                partType: 'rigid'
            },
            quantity: 7
        }

        const [result, message] = compareUserPiecesToSet(userPiece, setPiece)

        expect(result).toBe(false)
        expect(message).toBe('WrongID')
    })
    test('should return false for pieces of wrong color', () => {
        const userPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 5
        }
        const setPiece = {
            part: {
                designID: 'foo',
                material: 21,
                partType: 'rigid'
            },
            quantity: 7
        }

        const [result, message] = compareUserPiecesToSet(userPiece, setPiece)

        expect(result).toBe(false)
        expect(message).toBe('WrongColour')
    })
    test('should return false for insufficient quantity', () => {
        const userPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 5
        }
        const setPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 7
        }

        const [result, message] = compareUserPiecesToSet(userPiece, setPiece)

        expect(result).toBe(false)
        expect(message).toBe('InsufficientQuantity')
    })

    test('should return true for identical pieces', () => {
        const userPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 5
        }
        const setPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 5
        }

        const [result, message] = compareUserPiecesToSet(userPiece, setPiece)

        expect(result).toBe(true)
        expect(message).toBe('Valid')

    })
    test('should return true if the user has the same part with higher quantity', () => {
        const userPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 10
        }
        const setPiece = {
            part: {
                designID: 'foo',
                material: 1,
                partType: 'rigid'
            },
            quantity: 5
        }

        const [result, message] = compareUserPiecesToSet(userPiece, setPiece)

        expect(result).toBe(true)
        expect(message).toBe('Valid')

    })
})