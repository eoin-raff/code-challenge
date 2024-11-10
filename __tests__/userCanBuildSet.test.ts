import userCanBuildSet from '../src/utils/userCanBuildSet'
import { user, set } from "../mocks"
import User from "../src/classes/user"
import Set from "../src/classes/set"

describe('userCanBuildSet', () => {
    test('returns false if user has fewer pieces than the set requires', () => {
        const testUser = new User({ ...user, brickCount: 5 })
        const testSet = new Set({ ...set, totalPieces: 10 })
        const result = userCanBuildSet(testUser, testSet)
        expect(result).toBe(false)
    })
    test('returns false if the user has no bricks', ()=>{
        expect(true).toBe(false)
    })
    test('returns false if the user is missing a required brick', ()=>{
        expect(true).toBe(false)
    })
})