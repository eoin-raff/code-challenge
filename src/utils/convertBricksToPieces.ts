import { Brick, Piece } from "../../types";

const convertBricksToPieces = (bricks: Brick[]): Piece[] => {
    const pieces: Piece[] = []

    bricks.forEach(({ pieceId, variants }) => {
        variants.forEach(({ color, count }) => {
            const piece: Piece = {
                part: {
                    designID: pieceId,
                    material: Number(color),
                    partType: 'rigid' //no way of inferring this, but all examples in the API are rigid
                },
                quantity: count
            }
            pieces.push(piece)
        })
    })
    return pieces
}

export default convertBricksToPieces