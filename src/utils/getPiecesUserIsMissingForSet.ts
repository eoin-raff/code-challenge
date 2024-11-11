import { Piece } from "../../types";
import compareUserPiecesToSet from "./compareUserPiecesToSet";

const getPiecesUserIsMissingForSet = (usersPieces: Array<Piece>, setsPieces: Array<Piece>): Array<Piece> => {

    const initial: Piece[] = []
    const newArray = setsPieces.reduce((accumulator, currentPiece) => {
        let newQuantity = currentPiece.quantity
        const foundPiece = usersPieces.find((userPiece) => {
            const [isValid, message] = compareUserPiecesToSet(userPiece, currentPiece)
            if (message === 'InsufficientQuantity') { newQuantity = currentPiece.quantity - userPiece.quantity }
            if (isValid) return userPiece
        })
        if (!foundPiece) {
            return [...accumulator, {
                part: currentPiece.part,
                quantity: newQuantity
            }]
        }
        return [...accumulator]
    }, initial)

    return newArray
}

export default getPiecesUserIsMissingForSet