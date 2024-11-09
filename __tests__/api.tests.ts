import * as API from '../src/api'
import * as Mock from '../mocks'
/**
 * We don't want to actually test the api - just test that the methods fetch with the correct parameters
 */
global.fetch = jest.fn((url: string) =>
    Promise.resolve({
        json: () => Promise.resolve(Mock.API[url]),
    }),
) as jest.Mock;
describe('API Methods fetch correct data', () => {
    test('getUsers', async () => {
        const users = await API.getUsers(Mock.endpoint)
        expect(users).toEqual(Mock.userArray)
    })
    test('getUsersByUsername', async () => {
        const user = await API.getUserByUsername(Mock.username, Mock.endpoint)
        expect(user).toEqual(Mock.user)
    })
    test('getUsersById', async () => {
        const user = await API.getUserById(Mock.userId, Mock.endpoint)
        expect(user).toEqual(Mock.user)
    })
    test('getSets', async () => {
        const sets = await API.getSets(Mock.endpoint)
        expect(sets).toEqual(Mock.sets)
    })
})