import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import getAllSetDetails from '../utils/getAllSetDetails'
import userCanBuildSet, { MissingPiecesCallback } from '../utils/userCanBuildSet'
import { Piece, SetData } from '../../types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const ColorSwap = () => {
    const user = useContext(AuthContext)
    const [allSets, setAllSets] = useState<SetData[]>([])
    const [nonBuildableSets, setNonBuildableSets] = useState<SetData[]>([])

    const [missingPieces, setMissingPieces] = useState<Record<string, Piece[]>>({})
    const handleMissingPieces: MissingPiecesCallback = (set, pieces) => {
        console.log('callback')
        const tmp = { ...missingPieces }
        tmp[set.name] = pieces
        setMissingPieces(tmp)
    }
    useEffect(() => {
        if (!user) return
        (async () => {
            const allSetDetails = await getAllSetDetails()
            const nonBuildableSets = allSetDetails?.filter(set => !userCanBuildSet(user, set, handleMissingPieces))
            setNonBuildableSets(nonBuildableSets)
            setAllSets(allSetDetails)
        })()
    }, [])
    // WIP
    return (
        <Box>
            <Typography>If don't mind using different colours, you could build the following sets:</Typography>
            {Object.keys(missingPieces).map(name => {
                return <Typography>{name}</Typography>
            })}
        </Box>
    )
}

export default ColorSwap