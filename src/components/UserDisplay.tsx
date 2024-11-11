import React from 'react'
import { UserData } from '../../types'
import SetsOverview from './SetDisplay'
import User from '../classes/user'

interface UserDisplayProps {
    user: User
}

const UserDisplay = ({ user }: UserDisplayProps) => {
    const { username, brickCount } = user
    const currentUser = new User(user)
    return (
        <>
            <h1>Welcome {username}</h1>
            <p>You have {brickCount} pieces!</p>
            <SetsOverview user={currentUser} />
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </>
    )
}

export default UserDisplay