import { SetData, Piece } from "../../types"

export const getPieceWithColorFromSet = (set: SetData, color: number): Piece | undefined => {
    return set.pieces.find(piece => piece.part.material === color)
}

export default getPieceWithColorFromSet