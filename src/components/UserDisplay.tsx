import { useContext } from 'react'
import SetsOverview from './SetDisplay'
import User from '../classes/user'
import { AuthContext } from '../context/AuthContext'


const UserDisplay = () => {
    const user = useContext(AuthContext)!
    const { username, brickCount } = user
    const currentUser = new User(user)
    return (
        <>
        
            <h1>Welcome {username}</h1>
            <p>You have {brickCount} pieces!</p>

            <SetsOverview user={currentUser} />
        </>
    )
}

export default UserDisplay

