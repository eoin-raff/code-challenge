import { Part, Piece } from "../../types"

export const compareCollectionToPercentageOfOtherCollections = (myCollection: Piece[], usersCollections: Piece[][], percentage = 0.5): Piece[] => {
    const threshold = usersCollections.length * percentage

    const partToLabel = (part: Part): string => `${part.designID}_${part.material}`

    // iterate over other collections
    const partOccuranceCount: Record<string, number> = {} //how many times a part appears in otherUsersCollections
    const howManyOfEachPartUsersHave: Record<string, number[]> = {} //what quantity of each part each user has

    usersCollections.forEach(collection => {
        collection.forEach(({ part, quantity }) => {
            const partId = partToLabel(part)
            if (!partOccuranceCount[partId]) {
                partOccuranceCount[partId] = 0
                howManyOfEachPartUsersHave[partId] = []

            }
            partOccuranceCount[partId]++
            howManyOfEachPartUsersHave[partId].push(quantity)
        }
        )
    })

    // iterate my own collection, and see which parts are shared by 50% of other users
    const result = myCollection.map(({ part, quantity }) => {
        const partId = partToLabel(part)
        if (!partOccuranceCount[partId]) return null //if nobody has this part, then I don't want it
        if (partOccuranceCount[partId] < threshold) return null //if less than 50% of users have the piece, then we don't want it!

        //find how how many of each part 50% of users have, to a maximum of how many I have.
        // sort the list, find the median, and return the smaller value of the median or my count for that part
        const quantityList = howManyOfEachPartUsersHave[partId].sort((a, b) => a - b)
        const medianIndex = Math.floor(quantityList.length / 2)
        const median = quantityList[medianIndex]

        return { part, quantity: Math.min(quantity, median) }

    })

    //@ts-ignore //normally don't do this but don't have time to figure out why its still typing result as possible null
    const filteredResult: Piece[] = result.filter(item => item != null)

    return filteredResult
}


export default compareCollectionToPercentageOfOtherCollections

/**
 * TODO: currently has a bug that i'm not sure how to handle
 * 
 * pieces are considered separately from users
 * 
 * e.g. I have a collection with parts '123' and '456'
 * userA has part 123
 * userB has part 456
 * 
 * if I return both, then neither userA or B can build the set
 * in this example, assuming that the quantity is the same I could return either,
 * but I think the complexity is greater when considering a full set and multiple users
 * so that solution wouldn't be generally applicable
 * 
 */