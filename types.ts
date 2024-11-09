type Location = "ADL" |
    "BJX" |
    "BJX" |
    "CYR" |
    "FIH" |
    "SUB" |
    "UKY"

export type User = {
    id: string,
    username: string,
    location: Location,
    brickCount: number
}

export type GetUsers = (API_ENDPOINT?: string) => Promise<{
    Users: Array<User>
}>

export type GetData<T> = (identifier: string, API_ENDPOINT: string) => Promise<T>