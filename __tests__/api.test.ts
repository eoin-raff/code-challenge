import * as API from '../src/utils/api'
import * as Mock from '../mocks'

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
        expect(user).toEqual(Mock.userSummary)
    })
    test('getUsersById', async () => {
        const user = await API.getUserById(Mock.userId, Mock.endpoint)
        expect(user).toEqual(Mock.user)
    })
    test('getSets', async () => {
        const sets = await API.getSets(Mock.endpoint)
        expect(sets).toEqual(Mock.setSummaryList)
    })
    test('getSetByName', async () => {
        const sets = await API.getSetByName(Mock.setName, Mock.endpoint)
        expect(sets).toEqual(Mock.setSummary)
    })
    test('getSetById', async () => {
        const sets = await API.getSetById(Mock.setId, Mock.endpoint)
        expect(sets).toEqual(Mock.set)
    })
    test('getColours', async () => {
        const sets = await API.getColours(Mock.endpoint)
        expect(sets).toEqual(Mock.colours)
    })
})