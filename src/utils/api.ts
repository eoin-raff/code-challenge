import { UserSummary, GetUsers, GetData, UserData, GetSets, SetSummary, SetData, Colour } from '../../types'

const PROD_ENDPOINT = `https://d16m5wbro86fg2.cloudfront.net`

const getDataFromApi = async (url: string, errorMessage = 'Error') => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.warn(errorMessage)
        return error
    }
}
// returns a list of users in the catalogue
export const getUsers: GetUsers = async (API_ENDPOINT = PROD_ENDPOINT) => {
    return getDataFromApi(`${API_ENDPOINT}/api/users`)
}

//returns a summary of a single user
export const getUserByUsername: GetData<UserSummary> = async (username, API_ENDPOINT = PROD_ENDPOINT) => {
    return getDataFromApi(`${API_ENDPOINT}/api/user/by-username/${username}`)
}

// return the full data for a single user
export const getUserById: GetData<UserData> = async (id: string, API_ENDPOINT = PROD_ENDPOINT) => {
    return getDataFromApi(`${API_ENDPOINT}/api/user/by-id/${id}`)
}

// returns a list of the sets in the catalogue
export const getSets: GetSets = async (API_ENDPOINT = PROD_ENDPOINT) => {
    return getDataFromApi(`${API_ENDPOINT}/api/sets`)
}
//returns a summary of a single set
export const getSetByName: GetData<SetSummary> = async (name: string, API_ENDPOINT = PROD_ENDPOINT) => {
    return getDataFromApi(`${API_ENDPOINT}/api/set/by-name/${name}`)
}
// returns the full data for a single set
export const getSetById: GetData<SetData> = async (id: string, API_ENDPOINT = PROD_ENDPOINT) => {
    return getDataFromApi(`${API_ENDPOINT}/api/set/by-id/${id}`)
}

//returns the full list of colours available
export const getColours = async (API_ENDPOINT = PROD_ENDPOINT): Promise<{ colours: Colour[], disclaimer: string }> => {
    return getDataFromApi(`${API_ENDPOINT}/api/colours`)
}
