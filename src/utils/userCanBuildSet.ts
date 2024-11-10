import { SetData } from "../../types"
import User from "../classes/user"

const userCanBuildSet = (user: User, set: SetData): boolean => {

    /**
     * before doing an expensive search, check how many pieces the user has.
     * If they have fewer pieces than the set requires, then they definitely can't build it
     */

    if (set.totalPieces > user._brickCount) return false

    /**
     * if there are enough pieces, then find out if they have the right pieces, and the right quantity of each
     */

    const missingPieces = []
    set.pieces.forEach((piece) => {
        const userHasPiece = user.hasPiece(piece)
        if (!userHasPiece) {
            missingPieces.push(piece)
        }
    })

    if (missingPieces.length > 0) return false

    return true
}

export default userCanBuildSet