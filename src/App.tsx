import { useState } from 'react'
import { UserData } from '../types'
import './App.css'
import LoginForm from './components/LoginForm'
import UserDisplay from './components/UserDisplay'
import { AuthContext } from './context/AuthContext'
import User from './classes/user'

function App() {

  const [user, setUser] = useState<User | undefined>(undefined)

  return (
    <>
      <AuthContext.Provider value={user}>
        {user ? <UserDisplay user={user} /> : <LoginForm setUser={setUser} />}
      </AuthContext.Provider>
    </>

  )
}

export default App
