import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Box, Button, Container, Paper, Slider, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { BrickVariant, SetData } from '../../types';
import VariantSelector from './VariantSelector';



function CustomBuildOverview(props) {
  return (<Box component='aside' sx={{
    gridArea: 'sidebar',
    position: 'fixed',
    top: 100,
    left: 0,
    bottom: 0,
    maxWidth: '0.25vw'
  }}>
    Custom Build Overview:
    name: {props.customSet.name}
    totalPieces: {props.customSet.totalPieces}
  </Box>);
}





const CustomBuild = () => {
  const user = useContext(AuthContext)
  const [customSet, setCusomSet] = useState<SetData>({
    id: '',
    name: '',
    setNumber: '',
    totalPieces: 0,
    pieces: []

  })
  if (!user) return <></>


  return (<Box sx={{
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateAreas: `"sidebar main main main"`,
  }}>
    <CustomBuildOverview customSet={customSet}></CustomBuildOverview>
    <Box component={'section'} sx={{ gridArea: 'main' }}>
      <Container maxWidth='md' >
        The user megabuilder99 is interested in creating a new custom build but they want to make sure other people could complete it with their current inventories. What is the largest collection of pieces they should restrict themselves to if they want to ensure that at least 50% of other users could complete the build?

        <Typography variant='h2'>Create Custom Build</Typography>
        <Typography>You have {user.brickCount} total bricks</Typography>
        {user.collection.map(({ pieceId, variants }) => {
          return <Accordion key={pieceId}>
            <AccordionSummary>
              Brick #{pieceId}
            </AccordionSummary>
            <AccordionDetails>
              {variants.map((variant) => {
                return <VariantSelector {...variant} handleSelect={(num) => { alert(`added ${num} of ${variant.count} bricks of color #${variant.color}`) }} />
              })}
            </AccordionDetails>
          </Accordion>
        })}
      </Container>
    </Box>
  </Box >
  )
}

export default CustomBuild