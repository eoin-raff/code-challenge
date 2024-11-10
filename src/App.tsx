import { useState } from 'react'
import { UserData } from '../types'
import './App.css'
import LoginForm from './components/LoginForm'
import UserDisplay from './components/UserDisplay'

function App() {

  const [user, setUser] = useState<UserData | undefined>(undefined)

  return (
    <>
      {user ? <UserDisplay user={user} /> : <LoginForm setUser={setUser} />}
    </>

  )
}

export default App
