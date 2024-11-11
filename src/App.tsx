import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import UserDisplay from './components/UserDisplay'
import { AuthContext } from './context/AuthContext'
import User from './classes/user'

function App() {

  const [user, setUser] = useState<User>()

  return (
    <>
      <AuthContext.Provider value={user}>
        {user ? <UserDisplay /> : <LoginForm setUser={setUser} />}
      </AuthContext.Provider>
    </>

  )
}

export default App
