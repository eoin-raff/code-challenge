import React, { useContext, useEffect, useState } from 'react'
import { Piece, SetData } from '../../types'
import { AuthContext } from '../context/AuthContext'
import userCanBuildSet from '../utils/userCanBuildSet'
import convertBricksToPieces from '../utils/convertBricksToPieces'
import compareUserPiecesToSet from '../utils/compareUserPiecesToSet'
import { get } from 'react-hook-form'
import getPiecesUserIsMissingForSet from '../utils/getPiecesUserIsMissingForSet'

interface SingleSetOverviewProps {
    set: SetData
}

const SingleSetOverview = ({ set }: SingleSetOverviewProps) => {
    const user = useContext(AuthContext)

    const [canBuildSet, setCanBuildSet] = useState(false)
    const [missingPieces, setMissingPieces] = useState<Piece[]>([])

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
        </div >
    )
}

export default SingleSetOverview

