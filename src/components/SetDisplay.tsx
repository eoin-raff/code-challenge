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
    useEffect(() => {
        (async () => {
            const allSetDetails = await getAllSetDetails()
            setSets(allSetDetails)
        })()
    }, [])

    return (
        <>
            <div>SetDisplay</div>
            {sets && sets.map((set) => {
                const canBuild = userCanBuildSet(user, set)
                return <div key={set.id}>
                    <p>{set.name}</p>
                    {canBuild ? <p color='green'>you can build this set!</p> : <p color='red'>sorry, you're missing pieces</p>}
                </div>
            })}
        </>
    )
}

export default SetsOverview