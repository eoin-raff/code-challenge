import React, { useContext, useEffect, useState } from 'react'
import { Piece, SetData, UserData } from '../../types'
import { AuthContext } from '../context/AuthContext'
import userCanBuildSet from '../utils/userCanBuildSet'
import convertBricksToPieces from '../utils/convertBricksToPieces'
import compareUserPieceToSet from '../utils/compareUsersPieceToSet'
import { get } from 'react-hook-form'
import getPiecesUserIsMissingForSet from '../utils/getPiecesUserIsMissingForSet'
import findUsersWithPieces from '../utils/findUsersWithPieces'

interface SingleSetOverviewProps {
    set: SetData
}

const SingleSetOverview = ({ set }: SingleSetOverviewProps) => {
    const user = useContext(AuthContext)

    const [canBuildSet, setCanBuildSet] = useState(false)
    const [missingPieces, setMissingPieces] = useState<Piece[]>([])
    const [helpfulUsers, setHelpfulUsers] = useState<UserData[]>([])

    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState('')

    useEffect(() => {
        if (!user) return
        setCanBuildSet(userCanBuildSet(user, set))

        if (canBuildSet) return
        const userBricksAsPieces = convertBricksToPieces(user.collection)
        setMissingPieces(getPiecesUserIsMissingForSet(userBricksAsPieces, set.pieces))

        return () => {
            setCanBuildSet(false)
            setMissingPieces([])
        }
    }, [user, set, canBuildSet])

    const userLookup = async () => {
        console.log('lookup!')
        if (isLoading || !missingPieces || missingPieces.length === 0) return
        setIsLoading(true)

        const canHelp = await findUsersWithPieces(missingPieces)
        setHelpfulUsers(canHelp)

    }

    return (
        <div>
            SingleSetOverview
            <h2>
                name: {set.name}
                pieces: {set.totalPieces}
            </h2>
            {missingPieces.length > 0 && <>
                you need this following pieces:
                {missingPieces.map(({ part: { designID, material }, quantity }, i) => {
                    return <p key={i}> {quantity} x brick#{designID} in {material}</p>
                })}</>}
            <p>Find user who can help?</p>
            <button onClick={async () => await userLookup()}>Find Users</button>
            {helpfulUsers.length > 0 && <>
                {helpfulUsers.map(user => <p key={user.id}>{user.username}</p>)}</>}
        </div >
    )
}

export default SingleSetOverview

