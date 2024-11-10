import getAllSetDetails, { getAllSetIds } from '../src/utils/getAllSetDetails'
import { GetData, GetSets, SetData, SetSummary } from '../types'
import { setSummaryList } from '../mocks'
describe('getAllSetIds', () => {
    test('returns the correct values', () => {
        const testArray: SetSummary[] = [
            {
                id: 'testSet1',
                name: 'first test set',
                setNumber: '1',
                totalPieces: 20
            },
            {
                id: 'testSet2',
                name: 'second test set',
                setNumber: '2',
                totalPieces: 5
            },
            {
                id: 'testSet3',
                name: 'third test set',
                setNumber: '3',
                totalPieces: 10
            }
        ]
        const result = getAllSetIds(testArray)
        expect(result).toEqual(['testSet1', 'testSet2', 'testSet3'])
    })
})

describe('getAllSetDetails', () => {
    const mockSetSummaries: Array<SetSummary> = [{
        id: 'testSet1',
        name: 'first test set',
        setNumber: '1',
        totalPieces: 20
    },
    {
        id: 'testSet2',
        name: 'second test set',
        setNumber: '2',
        totalPieces: 5
    },
    {
        id: 'testSet3',
        name: 'third test set',
        setNumber: '3',
        totalPieces: 10
    }]
    const mockSetDetails: { [keys: string]: SetData } = {
        'testSet1': {
            id: 'testSet1',
            name: 'first test set',
            setNumber: '1',
            totalPieces: 20,
            pieces: [{
                "part": {
                    "designID": "11211",
                    "material": 5,
                    "partType": "rigid"
                },
                "quantity": 20
            },]
        },
        'testSet2': {
            id: 'testSet2',
            name: 'second test set',
            setNumber: '2',
            totalPieces: 5,
            pieces: [
                {
                    "part": {
                        "designID": "11211",
                        "material": 5,
                        "partType": "rigid"
                    },
                    "quantity": 5
                },
            ]
        },
        'testSet3': {
            id: 'testSet3',
            name: 'third test set',
            setNumber: '3',
            totalPieces: 10,
            pieces: [
                {
                    "part": {
                        "designID": "11211",
                        "material": 5,
                        "partType": "rigid"
                    },
                    "quantity": 10
                },
            ]
        }
    }
    const mockGetSets: GetSets = async () => {
        return Promise.resolve({ Sets: mockSetSummaries })

    }
    const mockGetSetsById: GetData<SetData> = async (id) => {
        return Promise.resolve(mockSetDetails[id])
    }

    test('returns an array of each set including pieces', async () => {
        const result = await getAllSetDetails({ getSets: mockGetSets, getSetById: mockGetSetsById })
        expect(result).toEqual([
            {
                id: 'testSet1',
                name: 'first test set',
                setNumber: '1',
                totalPieces: 20,
                pieces: [{
                    "part": {
                        "designID": "11211",
                        "material": 5,
                        "partType": "rigid"
                    },
                    "quantity": 20
                },]
            },
            {
                id: 'testSet2',
                name: 'second test set',
                setNumber: '2',
                totalPieces: 5,
                pieces: [
                    {
                        "part": {
                            "designID": "11211",
                            "material": 5,
                            "partType": "rigid"
                        },
                        "quantity": 5
                    },
                ]
            },
            {
                id: 'testSet3',
                name: 'third test set',
                setNumber: '3',
                totalPieces: 10,
                pieces: [
                    {
                        "part": {
                            "designID": "11211",
                            "material": 5,
                            "partType": "rigid"
                        },
                        "quantity": 10
                    },
                ]
            }
        ])
    })

})