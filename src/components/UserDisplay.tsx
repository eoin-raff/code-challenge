import { useContext } from 'react'
import SetsOverview from './SetsOverview'
import User from '../classes/user'
import { AuthContext } from '../context/AuthContext'


const UserDisplay = () => {
    const user = useContext(AuthContext)
    if (!user) return <></>
    const { username, brickCount } = user
    const currentUser = new User(user)
    return (
        <>
            <h1>Welcome {username}</h1>
            <p>You have {brickCount} pieces!</p>

        </>
    )
}

export default UserDisplay

