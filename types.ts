type Location = "ADL" |
    "BJX" |
    "BJX" |
    "CYR" |
    "FIH" |
    "SUB" |
    "UKY"

type BrickVariant = {
    color: string
    count: number
}

type Brick = {
    pieceId: string
    variants: Array<BrickVariant>
}

export type UserSummary = {
    id: string,
    username: string,
    location: Location,
    brickCount: number
}
export type User = UserSummary & {
    collection: Array<Brick>
}

export type SetSummary = {
    id: string,
    name: string,
    setNumber: string,
    totalPieces: number
}

type Part = {
    designID: string,
    material: 5,
    partType: "rigid" //currently rigid is the only part type
}
type Piece = {
    part: Part
    quantity: number
}
export type Set = SetSummary & {
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
