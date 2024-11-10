import Set from "../classes/set"
import User from "../classes/user"

const userCanBuildSet = (user: User, set: Set): boolean => {

    /**
     * before doing an expensive search, check how many pieces the user has.
     * If they have fewer pieces than the set requires, then they definitely can't build it
     */

    if (set._totalPieces > user._brickCount) return false
    
    return true
}

export default userCanBuildSet