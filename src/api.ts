import { User, GetUsers, GetData } from '../types'
const LEGO_ENDPOINT = `https://d16m5wbro86fg2.cloudfront.net`

// returns a list of users in the catalogue
export const getUsers: GetUsers = async (API_ENDPOINT = LEGO_ENDPOINT) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/api/users`)
        return response.json()
    } catch (error) {
        console.warn('Error getting users')
        return { Users: [] }
    }
}

//returns a summary of a single user
export const getUsersByUsername: GetData<User> = async (username, API_ENDPOINT = LEGO_ENDPOINT) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/api/user/by-username/${username}`)
        return response.json()
    } catch (error) {
        console.warn('Error getting user with name ', username)
        return {}
    }

}

// return the full data for a single user
export const getUsersByID = async (id: string, API_ENDPOINT = LEGO_ENDPOINT) => {
    return fetch(`${API_ENDPOINT}/api/user/by-id/${id}`)
}

// returns a list of the sets in the catalogue
export const getSets = async (API_ENDPOINT = LEGO_ENDPOINT) => {
    return fetch(`${API_ENDPOINT}/api/sets`)
}
//returns a summary of a single set
export const getSetsByName = async (name: string, API_ENDPOINT = LEGO_ENDPOINT) => {
    return fetch(`${API_ENDPOINT}/api/set/by-name/${name}`)
}
// returns the full data for a single set
export const getSetsById = async (id: string, API_ENDPOINT = LEGO_ENDPOINT) => {
    return fetch(`${API_ENDPOINT}/api/set/by-id/${id}`)
}

//returns the full list of colours available
export const getColors = async (API_ENDPOINT = LEGO_ENDPOINT) => {
    return fetch(`${API_ENDPOINT}/api/colors`)
}
