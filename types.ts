// export type UserLocation = "ADL" |
//     "BJX" |
//     "BJX" |
//     "CYR" |
//     "FIH" |
//     "SUB" |
//     "UKY"

type BrickVariant = {
    color: string
    count: number
}

export type Brick = {
    pieceId: string
    variants: Array<BrickVariant>
}

export type UserSummary = {
    id: string,
    username: string,
    location: string,
    brickCount: number
}
export type UserData = UserSummary & {
    collection: Array<Brick>
}

export type SetSummary = {
    id: string,
    name: string,
    setNumber: string,
    totalPieces: number
}

export type Part = {
    designID: string,
    material: number,
    partType: string 
}
export type Piece = {
    part: Part
    quantity: number
}
export type SetData = SetSummary & {
    pieces: Array<Piece>
}
export type Colour = {
    name: string
    code: number
}
export type GetUsers = (API_ENDPOINT?: string) => Promise<{
    Users: Array<UserSummary>
}>

export type GetData<T> = (identifier: string, API_ENDPOINT: string) => Promise<T>
