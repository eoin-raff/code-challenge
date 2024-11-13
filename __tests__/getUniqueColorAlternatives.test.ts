import getUniqueColorAlternatives from '../src/utils/getUniqueColorAlternatives'

describe('getUniqueColorAlternatives', () => {
    test('should return a valid solutin in a basic case', () => {
        const pieces1 = {
            "piece1": [1, 2],
            "piece2": [2, 3],
            "piece3": [1, 3]
        };

        const result = getUniqueColorAlternatives(pieces1);
        expect(result).toEqual({ piece1: 1, piece2: 2, piece3: 3 })
    })
    test('should return null if there is no valid swap', () => {
        const pieces1 = {
            "piece1": [1, 2],
            "piece2": [1, 2],
            "piece3": [1, 2]
        };

        const result = getUniqueColorAlternatives(pieces1);
        expect(result).toBe(null)
    })
})