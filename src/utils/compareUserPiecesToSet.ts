import { Piece } from "../../types";

/**
 * A function to determine if the piece a user has is valid for the set
 * @param userPiece The pieces that the user owns
 * @param setPiece The pieces that the set requires
 * @returns true if the user has the same or higher quantity of the piece required by the set
 */
const compareUserPiecesToSet = (userPiece: Piece, setPiece: Piece) => {

    if (userPiece.part.designID !== setPiece.part.designID) return false
    if (userPiece.part.material !== setPiece.part.material) return false
    if (userPiece.quantity < setPiece.quantity) return false

    return true
}

export default compareUserPiecesToSet