import { GetSetsAPI, SetData, SetSummary } from "../../types"
import { getSetById, getSets } from "./api"

const defaultAPI: GetSetsAPI = {
    getSets,
    getSetById
}

const getAllSetDetails = async ({ getSets, getSetById }: GetSetsAPI = defaultAPI): Promise<Array<SetData>> => {
    const { Sets: setSummaries }: { Sets: Array<SetSummary> } = await getSets()
    const ids = getAllSetIds(setSummaries)
    const sets = await Promise.all(ids.map(id => getSetById(id)))
    return sets
}

export const getAllSetIds = (setSummaries: SetSummary[]): Array<string> => {
    let initialValue: Array<string> = []
    const setIds: Array<string> = setSummaries.reduce((accumulator, currentSet) => {
        accumulator.push(currentSet.id)
        return accumulator

    }, initialValue)
    return setIds
}

export default getAllSetDetails