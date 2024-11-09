import * as API from '../src/api'
describe('testing api calls', () => {
    test('getUsers', () => {
        const mockUsers = {
            "Users": [
                {
                    "id": "353555ef-3135-4d3a-8e39-c680e1eb26d2",
                    "username": "arts-n-bricks",
                    "location": "FIH",
                    "brickCount": 2140
                },
                {
                    "id": "6d6bc9f2-a762-4a30-8d9a-52cf8d8373fc",
                    "username": "brickfan35",
                    "location": "UKY",
                    "brickCount": 1413
                },
                {
                    "id": "2f10aad6-670e-4b3b-be7f-6a4ab57f232a",
                    "username": "captain-pieces",
                    "location": "SUB",
                    "brickCount": 2900
                },
                {
                    "id": "b56c4819-b6b5-422c-a023-5fdffbdf01f2",
                    "username": "dr_crocodile",
                    "location": "FIH",
                    "brickCount": 2030
                },
                {
                    "id": "506ad852-3e42-497e-a14d-99934d4df2e2",
                    "username": "green-bricks-only",
                    "location": "ADL",
                    "brickCount": 2420
                },
                {
                    "id": "220053f6-8a3a-45b1-8291-a59845c2b1df",
                    "username": "landscape-artist",
                    "location": "BJX",
                    "brickCount": 1730
                },
                {
                    "id": "d174c807-8880-4f49-866b-6e1ec6527ccf",
                    "username": "megabuilder99",
                    "location": "BJX",
                    "brickCount": 1050
                },
                {
                    "id": "2d33d4b3-70a1-4106-ad6c-5028dadc6251",
                    "username": "spaceman77",
                    "location": "UKY",
                    "brickCount": 1590
                },
                {
                    "id": "17053e30-1cfa-4c34-9f37-b541bfc6b316",
                    "username": "technical-spike",
                    "location": "FIH",
                    "brickCount": 1890
                },
                {
                    "id": "b9ccfd73-c222-4e34-a252-1fc3222bbd2f",
                    "username": "underground-bricks",
                    "location": "CYR",
                    "brickCount": 1760
                },
                {
                    "id": "7c95658e-05dd-4563-867b-095d5a1edeb5",
                    "username": "wizard13",
                    "location": "CYR",
                    "brickCount": 1405
                }
            ]
        }
        expect(API.getUsers()).toBe(mockUsers)
    })
})