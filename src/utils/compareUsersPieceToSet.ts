import { Piece } from "../../types";

export type PieceError = 'WrongID' | "WrongColour" | "InsufficientQuantity" | "Valid"

/**
 * A function to determine if the piece a user has is valid for the set
 * @param userPiece The pieces that the user owns
 * @param setPiece The pieces that the set requires
 * @returns true if the user has the same or higher quantity of the piece required by the set
 */
const compareUserPieceToSet = (userPiece: Piece, setPiece: Piece): [boolean, PieceError] => {

    if (userPiece.part.designID !== setPiece.part.designID) return [false, 'WrongID']
    if (userPiece.part.material !== setPiece.part.material) return [false, 'WrongColour']
    if (userPiece.quantity < setPiece.quantity) return [false, 'InsufficientQuantity']

    return [true, 'Valid']
}

export default compareUserPieceToSet