import User from '../src/classes/user'
import { user, set } from '../mocks'

describe('User', () => {
    test('is constructed correctly', () => {
        const { id, username, location, brickCount, collection } = user
        const testUser = new User(user)
        expect(testUser.id).toBe(id)
        expect(testUser._username).toBe(username)
        expect(testUser._location).toBe(location)
        expect(testUser._brickCount).toBe(brickCount)
        expect(testUser._collection).toBe(collection)
    })

})