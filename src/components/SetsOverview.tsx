import { useContext, useEffect, useState } from 'react'
import { SetData } from '../../types'
import getAllSetDetails from '../utils/getAllSetDetails'
import userCanBuildSet from '../utils/userCanBuildSet'
import SetLookup from './SetLookup'
import SingleSetOverview from './SingleSetOverview'
import { AuthContext } from '../context/AuthContext'


const SetsOverview = () => {

    const user = useContext(AuthContext)
    if (!user) return <></>

    const [allSets, setAllSets] = useState<Array<SetData> | undefined>(undefined)
    const [buildableSets, setBuildableSets] = useState<Array<SetData> | undefined>(undefined)
    useEffect(() => {
        (async () => {
            const allSetDetails = await getAllSetDetails()
            const buildableSets = allSets?.filter(set => userCanBuildSet(user, set))
            setBuildableSets(buildableSets)
            setAllSets(allSetDetails)
        })()
    }, [])


    return (
        <>
            {buildableSets && buildableSets.length > 0 ? <>
                <h2>You can build these sets with your current pieces:</h2>
                {buildableSets.map(set => <p>{set.name}</p>)}
            </> : <p>loading</p>}
        </>
    )
}

export default SetsOverview


