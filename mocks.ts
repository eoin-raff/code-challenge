import { SetData, SetSummary, UserData, UserSummary } from "./types"

//#region User Mocks
export const username = 'brickfan35'
export const userId = '6d6bc9f2-a762-4a30-8d9a-52cf8d8373fc'

export const userSummary: UserSummary = {
    "id": userId,
    "username": username,
    "location": "UKY",
    "brickCount": 1413
}
export const user: UserData = {
    ...userSummary,
    "collection": [
        {
            "pieceId": "3710",
            "variants": [
                {
                    "color": "155",
                    "count": 9
                },
                {
                    "color": "152",
                    "count": 7
                },
                {
                    "color": "2",
                    "count": 8
                },
                {
                    "color": "7",
                    "count": 8
                },
                {
                    "color": "9",
                    "count": 4
                },
                {
                    "color": "5",
                    "count": 3
                },
                {
                    "color": "1",
                    "count": 6
                },
                {
                    "color": "34",
                    "count": 11
                },
                {
                    "color": "3",
                    "count": 8
                }
            ]
        },
        {
            "pieceId": "3005",
            "variants": [
                {
                    "color": "2",
                    "count": 15
                },
                {
                    "color": "155",
                    "count": 7
                },
                {
                    "color": "152",
                    "count": 9
                },
                {
                    "color": "5",
                    "count": 6
                },
                {
                    "color": "1",
                    "count": 4
                },
                {
                    "color": "9",
                    "count": 6
                },
                {
                    "color": "7",
                    "count": 2
                },
                {
                    "color": "3",
                    "count": 14
                },
                {
                    "color": "34",
                    "count": 4
                }
            ]
        },
        {
            "pieceId": "3023",
            "variants": [
                {
                    "color": "155",
                    "count": 7
                },
                {
                    "color": "2",
                    "count": 12
                },
                {
                    "color": "152",
                    "count": 8
                },
                {
                    "color": "5",
                    "count": 5
                },
                {
                    "color": "9",
                    "count": 3
                },
                {
                    "color": "1",
                    "count": 5
                },
                {
                    "color": "7",
                    "count": 3
                },
                {
                    "color": "34",
                    "count": 5
                },
                {
                    "color": "3",
                    "count": 6
                }
            ]
        },
        {
            "pieceId": "3069b",
            "variants": [
                {
                    "color": "155",
                    "count": 9
                },
                {
                    "color": "2",
                    "count": 15
                },
                {
                    "color": "152",
                    "count": 3
                },
                {
                    "color": "7",
                    "count": 9
                },
                {
                    "color": "1",
                    "count": 3
                },
                {
                    "color": "5",
                    "count": 3
                },
                {
                    "color": "9",
                    "count": 6
                },
                {
                    "color": "3",
                    "count": 9
                },
                {
                    "color": "34",
                    "count": 7
                }
            ]
        },
        {
            "pieceId": "4286",
            "variants": [
                {
                    "color": "2",
                    "count": 18
                },
                {
                    "color": "152",
                    "count": 7
                },
                {
                    "color": "155",
                    "count": 5
                },
                {
                    "color": "5",
                    "count": 5
                },
                {
                    "color": "7",
                    "count": 7
                },
                {
                    "color": "9",
                    "count": 4
                },
                {
                    "color": "1",
                    "count": 3
                },
                {
                    "color": "3",
                    "count": 8
                },
                {
                    "color": "34",
                    "count": 4
                }
            ]
        },
        {
            "pieceId": "3062b",
            "variants": [
                {
                    "color": "2",
                    "count": 14
                },
                {
                    "color": "152",
                    "count": 7
                },
                {
                    "color": "155",
                    "count": 6
                },
                {
                    "color": "7",
                    "count": 6
                },
                {
                    "color": "5",
                    "count": 5
                },
                {
                    "color": "1",
                    "count": 6
                },
                {
                    "color": "9",
                    "count": 1
                },
                {
                    "color": "3",
                    "count": 9
                },
                {
                    "color": "34",
                    "count": 8
                }
            ]
        },
        {
            "pieceId": "3001",
            "variants": [
                {
                    "color": "155",
                    "count": 11
                },
                {
                    "color": "2",
                    "count": 9
                },
                {
                    "color": "152",
                    "count": 6
                },
                {
                    "color": "9",
                    "count": 7
                },
                {
                    "color": "7",
                    "count": 9
                },
                {
                    "color": "1",
                    "count": 9
                },
                {
                    "color": "5",
                    "count": 1
                },
                {
                    "color": "34",
                    "count": 7
                },
                {
                    "color": "3",
                    "count": 5
                }
            ]
        },
        {
            "pieceId": "11211",
            "variants": [
                {
                    "color": "152",
                    "count": 7
                },
                {
                    "color": "2",
                    "count": 17
                },
                {
                    "color": "155",
                    "count": 1
                },
                {
                    "color": "5",
                    "count": 7
                },
                {
                    "color": "7",
                    "count": 4
                },
                {
                    "color": "9",
                    "count": 7
                },
                {
                    "color": "1",
                    "count": 1
                },
                {
                    "color": "34",
                    "count": 5
                },
                {
                    "color": "3",
                    "count": 3
                }
            ]
        },
        {
            "pieceId": "77232",
            "variants": [
                {
                    "color": "152",
                    "count": 8
                },
                {
                    "color": "155",
                    "count": 5
                },
                {
                    "color": "2",
                    "count": 14
                },
                {
                    "color": "1",
                    "count": 7
                },
                {
                    "color": "5",
                    "count": 4
                },
                {
                    "color": "9",
                    "count": 5
                },
                {
                    "color": "7",
                    "count": 6
                },
                {
                    "color": "3",
                    "count": 7
                },
                {
                    "color": "34",
                    "count": 1
                }
            ]
        },
        {
            "pieceId": "3004",
            "variants": [
                {
                    "color": "155",
                    "count": 3
                },
                {
                    "color": "2",
                    "count": 9
                },
                {
                    "color": "152",
                    "count": 5
                },
                {
                    "color": "9",
                    "count": 9
                },
                {
                    "color": "5",
                    "count": 8
                },
                {
                    "color": "1",
                    "count": 7
                },
                {
                    "color": "7",
                    "count": 6
                },
                {
                    "color": "34",
                    "count": 6
                },
                {
                    "color": "3",
                    "count": 9
                }
            ]
        },
        {
            "pieceId": "36840",
            "variants": [
                {
                    "color": "2",
                    "count": 15
                },
                {
                    "color": "155",
                    "count": 6
                },
                {
                    "color": "152",
                    "count": 9
                },
                {
                    "color": "9",
                    "count": 10
                },
                {
                    "color": "1",
                    "count": 6
                },
                {
                    "color": "7",
                    "count": 7
                },
                {
                    "color": "5",
                    "count": 4
                },
                {
                    "color": "34",
                    "count": 8
                },
                {
                    "color": "3",
                    "count": 6
                }
            ]
        },
        {
            "pieceId": "3795",
            "variants": [
                {
                    "color": "2",
                    "count": 15
                },
                {
                    "color": "155",
                    "count": 6
                },
                {
                    "color": "152",
                    "count": 5
                },
                {
                    "color": "9",
                    "count": 8
                },
                {
                    "color": "1",
                    "count": 7
                },
                {
                    "color": "7",
                    "count": 3
                },
                {
                    "color": "5",
                    "count": 4
                },
                {
                    "color": "34",
                    "count": 7
                },
                {
                    "color": "3",
                    "count": 6
                }
            ]
        },
        {
            "pieceId": "2431",
            "variants": [
                {
                    "color": "155",
                    "count": 8
                },
                {
                    "color": "152",
                    "count": 6
                },
                {
                    "color": "2",
                    "count": 5
                },
                {
                    "color": "9",
                    "count": 4
                },
                {
                    "color": "7",
                    "count": 9
                },
                {
                    "color": "5",
                    "count": 6
                },
                {
                    "color": "1",
                    "count": 4
                },
                {
                    "color": "3",
                    "count": 7
                },
                {
                    "color": "34",
                    "count": 3
                }
            ]
        },
        {
            "pieceId": "75523",
            "variants": [
                {
                    "color": "2",
                    "count": 11
                },
                {
                    "color": "155",
                    "count": 4
                },
                {
                    "color": "152",
                    "count": 10
                },
                {
                    "color": "5",
                    "count": 6
                },
                {
                    "color": "9",
                    "count": 3
                },
                {
                    "color": "1",
                    "count": 7
                },
                {
                    "color": "7",
                    "count": 1
                },
                {
                    "color": "3",
                    "count": 8
                },
                {
                    "color": "34",
                    "count": 5
                }
            ]
        },
        {
            "pieceId": "4070",
            "variants": [
                {
                    "color": "152",
                    "count": 6
                },
                {
                    "color": "2",
                    "count": 11
                },
                {
                    "color": "155",
                    "count": 5
                },
                {
                    "color": "1",
                    "count": 7
                },
                {
                    "color": "9",
                    "count": 9
                },
                {
                    "color": "7",
                    "count": 5
                },
                {
                    "color": "5",
                    "count": 4
                },
                {
                    "color": "3",
                    "count": 3
                },
                {
                    "color": "34",
                    "count": 10
                }
            ]
        },
        {
            "pieceId": "14719",
            "variants": [
                {
                    "color": "2",
                    "count": 12
                },
                {
                    "color": "155",
                    "count": 7
                },
                {
                    "color": "152",
                    "count": 10
                },
                {
                    "color": "7",
                    "count": 2
                },
                {
                    "color": "1",
                    "count": 8
                },
                {
                    "color": "5",
                    "count": 4
                },
                {
                    "color": "9",
                    "count": 5
                },
                {
                    "color": "3",
                    "count": 9
                },
                {
                    "color": "34",
                    "count": 10
                }
            ]
        },
        {
            "pieceId": "63864",
            "variants": [
                {
                    "color": "2",
                    "count": 10
                },
                {
                    "color": "155",
                    "count": 6
                },
                {
                    "color": "152",
                    "count": 4
                },
                {
                    "color": "5",
                    "count": 8
                },
                {
                    "color": "1",
                    "count": 4
                },
                {
                    "color": "7",
                    "count": 8
                },
                {
                    "color": "9",
                    "count": 4
                },
                {
                    "color": "3",
                    "count": 5
                },
                {
                    "color": "34",
                    "count": 8
                }
            ]
        },
        {
            "pieceId": "11477",
            "variants": [
                {
                    "color": "155",
                    "count": 6
                },
                {
                    "color": "2",
                    "count": 6
                },
                {
                    "color": "152",
                    "count": 6
                },
                {
                    "color": "7",
                    "count": 4
                },
                {
                    "color": "1",
                    "count": 10
                },
                {
                    "color": "5",
                    "count": 6
                },
                {
                    "color": "9",
                    "count": 5
                },
                {
                    "color": "3",
                    "count": 8
                },
                {
                    "color": "34",
                    "count": 2
                }
            ]
        },
        {
            "pieceId": "3029",
            "variants": [
                {
                    "color": "152",
                    "count": 9
                },
                {
                    "color": "155",
                    "count": 8
                },
                {
                    "color": "2",
                    "count": 9
                },
                {
                    "color": "5",
                    "count": 5
                },
                {
                    "color": "7",
                    "count": 1
                },
                {
                    "color": "1",
                    "count": 3
                },
                {
                    "color": "9",
                    "count": 5
                },
                {
                    "color": "34",
                    "count": 5
                },
                {
                    "color": "3",
                    "count": 4
                }
            ]
        },
        {
            "pieceId": "22888",
            "variants": [
                {
                    "color": "2",
                    "count": 13
                },
                {
                    "color": "155",
                    "count": 8
                },
                {
                    "color": "152",
                    "count": 4
                },
                {
                    "color": "9",
                    "count": 5
                },
                {
                    "color": "5",
                    "count": 5
                },
                {
                    "color": "1",
                    "count": 1
                },
                {
                    "color": "7",
                    "count": 4
                },
                {
                    "color": "34",
                    "count": 5
                },
                {
                    "color": "3",
                    "count": 7
                }
            ]
        },
        {
            "pieceId": "78221",
            "variants": [
                {
                    "color": "2",
                    "count": 11
                },
                {
                    "color": "155",
                    "count": 4
                },
                {
                    "color": "152",
                    "count": 3
                },
                {
                    "color": "1",
                    "count": 10
                },
                {
                    "color": "5",
                    "count": 11
                },
                {
                    "color": "7",
                    "count": 3
                },
                {
                    "color": "9",
                    "count": 3
                },
                {
                    "color": "34",
                    "count": 10
                },
                {
                    "color": "3",
                    "count": 9
                }
            ]
        },
        {
            "pieceId": "78231",
            "variants": [
                {
                    "color": "2",
                    "count": 10
                },
                {
                    "color": "155",
                    "count": 4
                },
                {
                    "color": "152",
                    "count": 6
                },
                {
                    "color": "9",
                    "count": 10
                },
                {
                    "color": "1",
                    "count": 6
                },
                {
                    "color": "7",
                    "count": 4
                },
                {
                    "color": "5",
                    "count": 4
                },
                {
                    "color": "3",
                    "count": 10
                },
                {
                    "color": "34",
                    "count": 6
                }
            ]
        },
        {
            "pieceId": "54200",
            "variants": [
                {
                    "color": "155",
                    "count": 3
                },
                {
                    "color": "2",
                    "count": 12
                },
                {
                    "color": "152",
                    "count": 6
                },
                {
                    "color": "9",
                    "count": 6
                },
                {
                    "color": "5",
                    "count": 7
                },
                {
                    "color": "1",
                    "count": 3
                },
                {
                    "color": "7",
                    "count": 5
                },
                {
                    "color": "3",
                    "count": 5
                },
                {
                    "color": "34",
                    "count": 4
                }
            ]
        },
        {
            "pieceId": "3024",
            "variants": [
                {
                    "color": "152",
                    "count": 2
                },
                {
                    "color": "2",
                    "count": 12
                },
                {
                    "color": "155",
                    "count": 3
                },
                {
                    "color": "7",
                    "count": 4
                },
                {
                    "color": "5",
                    "count": 13
                },
                {
                    "color": "1",
                    "count": 6
                },
                {
                    "color": "9",
                    "count": 2
                },
                {
                    "color": "34",
                    "count": 7
                },
                {
                    "color": "3",
                    "count": 5
                }
            ]
        }
    ]
}
export const userArray: { "Users": Array<UserSummary> } = {
    "Users": [
        userSummary,
        {
            "id": "353555ef-3135-4d3a-8e39-c680e1eb26d2",
            "username": "arts-n-bricks",
            "location": "FIH",
            "brickCount": 2140
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
//#endregion

//#region Set Mocks
export const setName = 'alien-spaceship'
export const setId = '040f11ab-e301-4724-bacd-50841816e06b'
export const setSummary: SetSummary = {
    "id": setId,
    "name": setName,
    "setNumber": "497XX",
    "totalPieces": 1050
}
export const set: SetData = {
    "id": "040f11ab-e301-4724-bacd-50841816e06b",
    "name": "alien-spaceship",
    "setNumber": "497XX",
    "pieces": [
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
        },
        {
            "part": {
                "designID": "75523",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "2431",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3710",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 13
        },
        {
            "part": {
                "designID": "77232",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3023",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "78221",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 13
        },
        {
            "part": {
                "designID": "11477",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3795",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "11211",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 5
        },
        {
            "part": {
                "designID": "3024",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "54200",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "4286",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "3069b",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "3001",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "3024",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "4286",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 12
        },
        {
            "part": {
                "designID": "36840",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "63864",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "3001",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "11477",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 14
        },
        {
            "part": {
                "designID": "3024",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "54200",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "4070",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "3069b",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "2431",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "63864",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "77232",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "78231",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "3004",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 4
        },
        {
            "part": {
                "designID": "11477",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "3004",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "14719",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "11211",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "22888",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 5
        },
        {
            "part": {
                "designID": "3023",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "14719",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "11477",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "4070",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "77232",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "3029",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "78231",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "78231",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "36840",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 13
        },
        {
            "part": {
                "designID": "3069b",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "14719",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3001",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "3023",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "2431",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "14719",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 13
        },
        {
            "part": {
                "designID": "78221",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3795",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3795",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "78221",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3004",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "75523",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "78221",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3005",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "3029",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3069b",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "3062b",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "3795",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "3029",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "3004",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "14719",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3710",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 14
        },
        {
            "part": {
                "designID": "22888",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "3795",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 4
        },
        {
            "part": {
                "designID": "54200",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 4
        },
        {
            "part": {
                "designID": "3005",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "4286",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "3024",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 14
        },
        {
            "part": {
                "designID": "4070",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3005",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "78231",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 15
        },
        {
            "part": {
                "designID": "3062b",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "11477",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 3
        },
        {
            "part": {
                "designID": "77232",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3001",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 15
        },
        {
            "part": {
                "designID": "3062b",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 5
        },
        {
            "part": {
                "designID": "11211",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 12
        },
        {
            "part": {
                "designID": "3710",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 12
        },
        {
            "part": {
                "designID": "4286",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "63864",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "3023",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 16
        },
        {
            "part": {
                "designID": "3004",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "78221",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 4
        },
        {
            "part": {
                "designID": "3062b",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "4070",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "2431",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 12
        },
        {
            "part": {
                "designID": "63864",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "3005",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 5
        },
        {
            "part": {
                "designID": "75523",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 9
        },
        {
            "part": {
                "designID": "54200",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 13
        },
        {
            "part": {
                "designID": "77232",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "4286",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "54200",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3069b",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 12
        },
        {
            "part": {
                "designID": "3024",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "22888",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3001",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "36840",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 5
        },
        {
            "part": {
                "designID": "3710",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 11
        },
        {
            "part": {
                "designID": "75523",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 5
        },
        {
            "part": {
                "designID": "22888",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 7
        },
        {
            "part": {
                "designID": "3029",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 4
        },
        {
            "part": {
                "designID": "78231",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 13
        },
        {
            "part": {
                "designID": "63864",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 2
        },
        {
            "part": {
                "designID": "75523",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 4
        },
        {
            "part": {
                "designID": "3710",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "2431",
                "material": 8,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "4070",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 5
        },
        {
            "part": {
                "designID": "11211",
                "material": 155,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3062b",
                "material": 9,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "3023",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 8
        },
        {
            "part": {
                "designID": "22888",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 6
        },
        {
            "part": {
                "designID": "3029",
                "material": 2,
                "partType": "rigid"
            },
            "quantity": 10
        },
        {
            "part": {
                "designID": "3005",
                "material": 5,
                "partType": "rigid"
            },
            "quantity": 8
        }
    ],
    "totalPieces": 1050
}
export const setSummaryList: { "Sets": Array<SetSummary> } = {
    "Sets": [
        setSummary,
        {
            "id": "c33d995e-d4e8-4dd3-8857-07438c29b0de",
            "name": "beach-buggy",
            "setNumber": "134XX",
            "totalPieces": 780
        },
        {
            "id": "69868eb9-e609-4724-a438-056f1ae5bcae",
            "name": "car-wash",
            "setNumber": "242XX",
            "totalPieces": 650
        },
        {
            "id": "beb08fc7-f58b-461f-adfc-1e3100578e54",
            "name": "castaway",
            "setNumber": "306XX",
            "totalPieces": 450
        },
        {
            "id": "67b0f662-eb4a-4fce-8e0d-29a776c142f2",
            "name": "coffee-bar",
            "setNumber": "625XX",
            "totalPieces": 450
        },
        {
            "id": "f47e19ee-d910-4fec-98d3-caab625a072f",
            "name": "desert-landscape",
            "setNumber": "879XX",
            "totalPieces": 700
        },
        {
            "id": "ff35863e-950f-4c43-8cab-df39e033107d",
            "name": "lunar-module",
            "setNumber": "146XX",
            "totalPieces": 780
        },
        {
            "id": "1fc89812-92c7-4360-818c-ee2e754183d0",
            "name": "lunar-new-year",
            "setNumber": "996XX",
            "totalPieces": 910
        },
        {
            "id": "e662c11f-d67b-4263-8e62-55848167b45a",
            "name": "observatory-telescope",
            "setNumber": "256XX",
            "totalPieces": 1200
        },
        {
            "id": "11aabef6-4fd1-4464-bc46-15814f01baa6",
            "name": "paris-by-night",
            "setNumber": "205XX",
            "totalPieces": 1700
        },
        {
            "id": "3d3900d3-f03d-4c3c-99ee-8e72c6f55592",
            "name": "peacock-farm",
            "setNumber": "308XX",
            "totalPieces": 690
        },
        {
            "id": "c7ff5aa5-c826-458f-92a7-b15b6baf61d3",
            "name": "treasure-caves",
            "setNumber": "343XX",
            "totalPieces": 1460
        },
        {
            "id": "7ca16979-a1be-4a39-8a68-8f8cd4d23b5a",
            "name": "tropical-island",
            "setNumber": "277XX",
            "totalPieces": 650
        },
        {
            "id": "72f3a7f6-6d2a-4b86-9cfe-44876959a782",
            "name": "undersea-monster",
            "setNumber": "430XX",
            "totalPieces": 395
        },
        {
            "id": "720b8896-7d55-4a2f-9554-dc143203017b",
            "name": "winter-wonderland",
            "setNumber": "340XX",
            "totalPieces": 800
        }
    ]
}
//#endregion

//#region Colour Mock
export const colours = {
    "colours": [
        {
            "name": "White",
            "code": 1
        },
        {
            "name": "Very Light Gray",
            "code": 49
        },
        {
            "name": "Very Light Bluish Gray",
            "code": 99
        },
        {
            "name": "Light Bluish Gray",
            "code": 86
        },
        {
            "name": "Light Gray",
            "code": 9
        },
        {
            "name": "Dark Gray",
            "code": 10
        },
        {
            "name": "Dark Bluish Gray",
            "code": 85
        },
        {
            "name": "Black",
            "code": 11
        },
        {
            "name": "Dark Red",
            "code": 59
        },
        {
            "name": "Red",
            "code": 5
        },
        {
            "name": "Rust",
            "code": 27
        },
        {
            "name": "Coral",
            "code": 220
        },
        {
            "name": "Dark Salmon",
            "code": 231
        },
        {
            "name": "Salmon",
            "code": 25
        },
        {
            "name": "Light Salmon",
            "code": 26
        },
        {
            "name": "Sand Red",
            "code": 58
        },
        {
            "name": "Reddish Brown",
            "code": 88
        },
        {
            "name": "Brown",
            "code": 8
        },
        {
            "name": "Dark Brown",
            "code": 120
        },
        {
            "name": "Dark Tan",
            "code": 69
        },
        {
            "name": "Tan",
            "code": 2
        },
        {
            "name": "Light Nougat",
            "code": 90
        },
        {
            "name": "Nougat",
            "code": 28
        },
        {
            "name": "Medium Nougat",
            "code": 150
        },
        {
            "name": "Dark Nougat",
            "code": 225
        },
        {
            "name": "Medium Brown",
            "code": 91
        },
        {
            "name": "Fabuland Brown",
            "code": 106
        },
        {
            "name": "Fabuland Orange",
            "code": 160
        },
        {
            "name": "Earth Orange",
            "code": 29
        },
        {
            "name": "Dark Orange",
            "code": 68
        },
        {
            "name": "Neon Orange",
            "code": 165
        },
        {
            "name": "Orange",
            "code": 4
        },
        {
            "name": "Medium Orange",
            "code": 31
        },
        {
            "name": "Bright Light Orange",
            "code": 110
        },
        {
            "name": "Light Orange",
            "code": 32
        },
        {
            "name": "Very Light Orange",
            "code": 96
        },
        {
            "name": "Dark Yellow",
            "code": 161
        },
        {
            "name": "Yellow",
            "code": 3
        },
        {
            "name": "Bright Light Yellow",
            "code": 103
        },
        {
            "name": "Light Yellow",
            "code": 33
        },
        {
            "name": "Light Lime",
            "code": 35
        },
        {
            "name": "Yellowish Green",
            "code": 158
        },
        {
            "name": "Neon Green",
            "code": 166
        },
        {
            "name": "Medium Lime",
            "code": 76
        },
        {
            "name": "Lime",
            "code": 34
        },
        {
            "name": "Olive Green",
            "code": 155
        },
        {
            "name": "Dark Green",
            "code": 80
        },
        {
            "name": "Green",
            "code": 6
        },
        {
            "name": "Bright Green",
            "code": 36
        },
        {
            "name": "Medium Green",
            "code": 37
        },
        {
            "name": "Light Green",
            "code": 38
        },
        {
            "name": "Sand Green",
            "code": 48
        },
        {
            "name": "Dark Turquoise",
            "code": 39
        },
        {
            "name": "Light Turquoise",
            "code": 40
        },
        {
            "name": "Aqua",
            "code": 41
        },
        {
            "name": "Light Aqua",
            "code": 152
        },
        {
            "name": "Dark Blue",
            "code": 63
        },
        {
            "name": "Blue",
            "code": 7
        },
        {
            "name": "Dark Azure",
            "code": 153
        },
        {
            "name": "Medium Azure",
            "code": 156
        },
        {
            "name": "Medium Blue",
            "code": 42
        },
        {
            "name": "Bright Light Blue",
            "code": 105
        },
        {
            "name": "Light Blue",
            "code": 62
        },
        {
            "name": "Sky Blue",
            "code": 87
        },
        {
            "name": "Sand Blue",
            "code": 55
        },
        {
            "name": "Blue-Violet",
            "code": 97
        },
        {
            "name": "Dark Blue-Violet",
            "code": 109
        },
        {
            "name": "Violet",
            "code": 43
        },
        {
            "name": "Medium Violet",
            "code": 73
        },
        {
            "name": "Light Violet",
            "code": 44
        },
        {
            "name": "Dark Purple",
            "code": 89
        },
        {
            "name": "Purple",
            "code": 24
        },
        {
            "name": "Light Purple",
            "code": 93
        }
    ],
    "disclaimer": "This is a subset of the BrickLink colour catalogue, please do not take it as complete or authoritative :)"
}
//#endregion

//#region API Mocks
export const endpoint = `mockUrl`

export const API = {
    [`${endpoint}/api/users`]: userArray,
    [`${endpoint}/api/user/by-username/${username}`]: userSummary,
    [`${endpoint}/api/user/by-id/${userId}`]: user,
    [`${endpoint}/api/sets`]: setSummaryList,
    [`${endpoint}/api/set/by-name/${setName}`]: setSummary,
    [`${endpoint}/api/set/by-id/${setId}`]: set,
    [`${endpoint}/api/colours`]: colours,

}
//#endregion