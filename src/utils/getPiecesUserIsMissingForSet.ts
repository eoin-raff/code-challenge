import { Piece } from "../../types";
import compareUserPiecesToSet from "./compareUserPiecesToSet";

const getPiecesUserIsMissingForSet = (usersPieces: Array<Piece>, setsPieces: Array<Piece>): Array<Piece> => {

    const newArray = setsPieces.filter((setPiece) => {
        const foundPiece = usersPieces.find((userPiece) => {
            compareUserPiecesToSet(userPiece, setPiece)
        })
        if (!foundPiece) return setPiece
    })

    return newArray
}

export default getPiecesUserIsMissingForSet