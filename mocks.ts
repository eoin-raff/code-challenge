export const userArray = {
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
export const username = 'brickfan35'
export const userId = '6d6bc9f2-a762-4a30-8d9a-52cf8d8373fc'
export const setName = ''
export const setId = 's'
export const user = {
    "id": userId,
    "username": username,
    "location": "UKY",
    "brickCount": 1413
}
export const endpoint = `mockUrl`
export const sets = {
    "Sets": [
        {
            "id": "040f11ab-e301-4724-bacd-50841816e06b",
            "name": "alien-spaceship",
            "setNumber": "497XX",
            "totalPieces": 1050
        },
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
export const API = {
    [`${endpoint}/api/users`]: userArray,
    [`${endpoint}/api/user/by-username/${username}`]: user,
    [`${endpoint}/api/user/by-id/${userId}`]: user,
    [`${endpoint}/api/sets`]: sets,
    [`${endpoint}/api/set/by-name/${setName}`]: undefined,
    [`${endpoint}/api/set/by-id/${setId}`]: undefined,
    [`${endpoint}/api/colours`]: undefined,

}