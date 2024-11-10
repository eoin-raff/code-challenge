import { useEffect, useState } from 'react'
import { SetData } from '../../types'
import getAllSetDetails from '../utils/getAllSetDetails'
import userCanBuildSet from '../utils/userCanBuildSet'
import User from '../classes/user'

interface SetsOverviewProps {
    user: User,
}
const SetsOverview = ({ user
}: SetsOverviewProps) => {
    const [sets, setSets] = useState<Array<SetData> | undefined>(undefined)
    const [buildableSets, setBuildableSets] = useState<Array<SetData> | undefined>(undefined)
    useEffect(() => {
        (async () => {
            const allSetDetails = await getAllSetDetails()
            setSets(allSetDetails)
        })()
    }, [])

    const handleClick = () => {
        const buildableSets = sets?.filter(set => userCanBuildSet(user, set))
        setBuildableSets(buildableSets)
    }
    return (
        <>
            {buildableSets && buildableSets.length > 0 && <>
                <h2>You can build these sets with your current pieces:</h2>

                {buildableSets.map(set => <p>{set.name}</p>)}
            </>}
            {sets ? <button onClick={handleClick}>What sets can I build?</button> : <p>sets are loading...</p>}
        </>
    )
}

export default SetsOverview