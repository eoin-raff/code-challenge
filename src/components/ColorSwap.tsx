import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import getAllSetDetails from '../utils/getAllSetDetails'
import userCanBuildSet, { MissingPiecesCallback } from '../utils/userCanBuildSet'
import { Piece, SetData } from '../../types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { List, ListItem } from '@mui/material'

const ColorSwap = () => {
    const user = useContext(AuthContext)
    const [allSets, setAllSets] = useState<SetData[]>([])
    const [nonBuildableSets, setNonBuildableSets] = useState<SetData[]>([])

    const [missingPieces, setMissingPieces] = useState<Record<string, Piece[]>>({})
    const handleMissingPieces: MissingPiecesCallback = (set, pieces) => {
        setMissingPieces(previous => { return { ...previous, [set.name]: pieces } })
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
    if (!user) return <></>
    return (
        <Box>
            <Typography variant='h4'>You are missing pieces for {nonBuildableSets.length} sets.</Typography>
            <Typography variant='h4'>But you might be able to build these sets with different colours:.</Typography>
            <List>
                {nonBuildableSets
                    .map(set => {
                        const [canSwap, alts] = user.canColourSwapSet(set)
                        return <ListItem key={set.id}>
                            {set.name}, {canSwap.toString()}
                        </ListItem>
                    })
                }
            </List>
            {/* {Object.keys(missingPieces).map(name => {
                return <>
                    <Typography variant='h6'>{name}</Typography>
                    {missingPieces[name].map(piece => {
                        const alternativeColors = user.hasPieceInDifferentColour(piece)
                        return <Typography>You have enough of this type in {alternativeColors.length} different colors</Typography>
                    })}
                </>
            })} */}
        </Box>
    )
}

export default ColorSwap