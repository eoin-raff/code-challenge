import { useContext, useEffect, useState } from 'react'
import { SetData } from '../../types'
import getAllSetDetails from '../utils/getAllSetDetails'
import userCanBuildSet from '../utils/userCanBuildSet'
import { AuthContext } from '../context/AuthContext'
import { CircularProgress, List, ListItem, Typography } from '@mui/material'


const BuildableSets = () => {

    const user = useContext(AuthContext)

    const [allSets, setAllSets] = useState<Array<SetData> | undefined>(undefined)
    const [buildableSets, setBuildableSets] = useState<Array<SetData> | undefined>(undefined)
    useEffect(() => {
        if (!user) return
        (async () => {
            const allSetDetails = await getAllSetDetails()
            const buildableSets = allSets?.filter(set => userCanBuildSet(user, set))
            setBuildableSets(buildableSets)
            setAllSets(allSetDetails)
        })()
    }, [])

    if (!user) return <></>

    return (
        <>
            <Typography variant='h5'>You can build these sets with your current pieces:</Typography>
            {buildableSets && buildableSets.length > 0 ? <List>
                {buildableSets.map(set => <ListItem key={set.id}>{set.name}</ListItem>)}
            </List> :
                <CircularProgress />}
        </>
    )
}

export default BuildableSets


