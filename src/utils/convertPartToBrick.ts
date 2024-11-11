import { Piece, Brick } from "../../types";

const convertPieceToBrick = ({ part: { designID, material }, quantity }: Piece): Brick => {
    return {
        pieceId: designID,
        variants: [
            {
                color: material.toString(),
                count: quantity
            }
        ]
    }
}

export default convertPieceToBrick