import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Box, Button, Slider, Typography } from '@mui/material'
import { Piece } from '../../types';
import compareCollectionToPercentageOfOtherCollections from '../utils/compareCollectionToPercentageOfOtherCollections';
import { getColours } from '../utils/api';

const CustomBuild = () => {
  const user = useContext(AuthContext)
  const [percentage, setPercentage] = useState(0.5)
  const [customSet, setCusomSet] = useState<Piece[]>([])
  const [totalPieces, setTotalPieces] = useState(0)
  const [colourLabels, setColourLabels] = useState<Record<number, string>>({})
  //TODO: Create color map on higher level at load time so there is access throughout the application
  useEffect(() => {
    (async () => {
      const colorMap: Record<number, string> = {}
      const {colours} = await getColours()
      colours.forEach(({ name, code }) => {
        colorMap[code] = name
      });
      setColourLabels(colorMap)
    })()
  }, [])

  if (!user) return <></>

  const generateSet = () => {
    (async () => {
      const [myCollection, otherCollections] = await user.getMyCollectionAndOtherCollectionsAsPieces()
      const result = compareCollectionToPercentageOfOtherCollections(myCollection, otherCollections, percentage)
      setCusomSet(result)
      setTotalPieces(result.reduce(((accumulator, currentPiece) => accumulator + currentPiece.quantity), 0))

    })()
  }


  if (!colourLabels) return <></>


  return (
    <Box>
      <Typography>I want a collection that {(percentage * 100).toFixed(0)}% of users can build</Typography>
      <Slider max={1} step={0.05} value={percentage} onChange={(_, value) => setPercentage(value as number)} />
      <Button variant='contained' onClick={() => generateSet()}>Generate!</Button>
      <Box>

        {customSet && customSet.length > 0 && <>
          <Typography>
            You can make the following set (total number of bricks = {totalPieces})
          </Typography>
          {customSet.map(piece => <Typography>{piece.quantity} x brick #{piece.part.designID} in {colourLabels[piece.part.material]}</Typography>)}

        </>}
      </Box>
    </Box>
    // <Box sx={{
    //   display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateAreas: `"sidebar main main main"`,
    // }}>
    //   <CustomBuildOverview customSet={customSet}></CustomBuildOverview>
    //   <Box component={'section'} sx={{ gridArea: 'main' }}>
    //     <Container maxWidth='md' >
    //       The user megabuilder99 is interested in creating a new custom build but they want to make sure other people could complete it with their current inventories. What is the largest collection of pieces they should restrict themselves to if they want to ensure that at least 50% of other users could complete the build?

    //       <Typography variant='h2'>Create Custom Build</Typography>
    //       <Typography>You have {user.brickCount} total bricks</Typography>
    //       {user.collection.map(({ pieceId, variants }) => {
    //         return <Accordion key={pieceId}>
    //           <AccordionSummary>
    //             Brick #{pieceId}
    //           </AccordionSummary>
    //           <AccordionDetails>
    //             {variants.map((variant) => {
    //               return <VariantSelector {...variant} handleSelect={(num) => { alert(`added ${num} of ${variant.count} bricks of color #${variant.color}`) }} />
    //             })}
    //           </AccordionDetails>
    //         </Accordion>
    //       })}
    //     </Container>
    //   </Box>
    // </Box >
  )
}

export default CustomBuild