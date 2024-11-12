import { useState } from 'react'
import LoginForm from './components/LoginForm'
import UserDisplay from './components/UserDisplay'
import { AuthContext } from './context/AuthContext'
import User from './classes/user'
import { Box, Button, Container, Typography } from '@mui/material'

function App() {

  const [user, setUser] = useState<User>()

  return (
    <>
      <AuthContext.Provider value={user}>
        <Box component='header' sx={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: '#ffd502', color: '#2c2c2c', fontFamily: 'Cera Pro, sans-serif' }}>
          <Container sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
            <Typography variant='h3'>Welcome to your collection overview{user ? `, ${user.username}!` : '!'}</Typography>
            {user && <Button sx={{ marginLeft: 'auto' }} variant='contained' onClick={() => setUser(undefined)}>Log Out</Button>}
          </Container>
        </Box>
        <Box>
          <Container>
            {user ? <UserDisplay /> : <LoginForm setUser={setUser} />}
          </Container>
        </Box>
      </AuthContext.Provider >
    </>

  )
}

export default App
