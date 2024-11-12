import { FC, ReactElement, ReactNode, SyntheticEvent, useState } from 'react'
import LoginForm from './components/LoginForm'
import UserDisplay from './components/UserDisplay'
import CustomBuild from './components/CustomBuild'
import { AuthContext } from './context/AuthContext'
import User from './classes/user'
import { Box, Button, Container, Typography } from '@mui/material'
import './App.css'
import BuildableSets from './components/BuildableSets'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SetLookup from './components/SetLookup'
import SingleSetOverview from './components/SingleSetOverview'

type TabId = 'USER' | 'SETS' | 'CUSTOM'
const tabLabels: Record<TabId, string> = {
  USER: 'User Overview',
  SETS: 'Set Overview',
  CUSTOM: 'Custom Sets'
}
const tabComponents: Record<TabId, FC> = {
  USER: () => <UserDisplay />,
  SETS: () => <SingleSetOverview />,
  CUSTOM: () => <CustomBuild />
}

function App() {
  const [user, setUser] = useState<User>()
  const [activeTab, setActiveTab] = useState<TabId>('USER')


  function handleTabChange(_event: SyntheticEvent<Element, Event>, value: TabId): void {
    setActiveTab(value)
  }

  return (
    <>
      <AuthContext.Provider value={user}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto',
          gridTemplateAreas: `
          "header header header header"
          "main main . sidebar"
          `
        }}>

          <Box component='header' sx={{ gridArea: 'header', backgroundColor: '#ffd502', color: '#2c2c2c', fontFamily: 'Cera Pro, sans-serif' }}>
            <Container maxWidth='md' sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
              <Typography sx={{ gridArea: 'header' }} variant='h3'>{user ? `Welcome, ${user.username}!` : 'Log in to see overview'}</Typography>
              {user ? <Button sx={{ gridArea: 'logout' }} variant='contained' onClick={() => setUser(undefined)}>Log Out</Button> :
                <LoginForm setUser={setUser} />}
            </Container>
          </Box>

          <Box sx={{ gridArea: 'main' }}>
            {user &&<TabContext value={activeTab}>
              <TabList onChange={handleTabChange}>
                {Object.keys(tabLabels).map(key => <Tab label={tabLabels[key as TabId]} value={key} />)}
              </TabList>
              {Object.keys(tabComponents).map(key => {
                const Component = tabComponents[key as TabId]
                return <TabPanel value={key}><Component /></TabPanel>
              })}
            </TabContext>}
          </Box>
          <Box sx={{ gridArea: 'sidebar' }}>
            <BuildableSets />
          </Box>
        </Box>
      </AuthContext.Provider >
    </>

  )
}

export default App
