import * as API from '../src/api'
import * as Mock from '../mocks'
global.fetch = jest.fn((url: string) =>
    Promise.resolve({
        json: () => Promise.resolve(Mock.API[url]),
    }),
) as jest.Mock;

describe('Testing api calls', () => {
    test('getUsers', async () => {
        const users = await API.getUsers(Mock.endpoint)
        expect(users).toEqual(Mock.userArray)
    })
    test('getUsersByUsername', async () => {
        const user = await API.getUserByUsername(Mock.username, Mock.endpoint)
        expect(user).toEqual(Mock.user)
    })
    test('getUsersById', async () => {
        const user = await API.getUserById(Mock.id, Mock.endpoint)
        expect(user).toEqual(Mock.user)
    })
})