import { useEffect, useState } from 'react'
import { SetData } from '../../types'
import getAllSetDetails from '../utils/getAllSetDetails'
import userCanBuildSet from '../utils/userCanBuildSet'
import User from '../classes/user'
import SetLookup from './SetLookup'
import SingleSetOverview from './SingleSetOverview'

interface SetsOverviewProps {
    user: User,
}
const SetsOverview = ({ user
}: SetsOverviewProps) => {

    const [currentSet, setCurrentSet] = useState<SetData | undefined>(undefined)
    const [allSets, setAllSets] = useState<Array<SetData> | undefined>(undefined)
    const [buildableSets, setBuildableSets] = useState<Array<SetData> | undefined>(undefined)
    useEffect(() => {
        (async () => {
            const allSetDetails = await getAllSetDetails()
            setAllSets(allSetDetails)
        })()
    }, [])

    const handleClick = () => {
        const buildableSets = allSets?.filter(set => userCanBuildSet(user, set))
        setBuildableSets(buildableSets)
    }
    return (
        <>
            <p>Look for a specific set:</p>
            <SetLookup setSet={setCurrentSet} />
            {currentSet && <SingleSetOverview set={currentSet} />}
            {buildableSets && buildableSets.length > 0 && <>
                <h2>You can build these sets with your current pieces:</h2>

                {buildableSets.map(set => <p>{set.name}</p>)}
            </>}
            {allSets ? <button onClick={handleClick}>What sets can I build?</button> : <p>sets are loading...</p>}
        </>
    )
}

export default SetsOverview


