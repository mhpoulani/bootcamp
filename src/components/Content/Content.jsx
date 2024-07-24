import { Box } from '@mui/material'
import React from 'react'
import EhealthPlatform from './EhealthPlatform'
import OurTeam from './OurTeam'
import Courses from './Courses/Courses'
import TimeTable from './TimeTable/TimeTable'

const Content = () => {
  return (
    <Box>
       <EhealthPlatform/>
       <OurTeam/>
       <Courses/>
       <TimeTable/>

    </Box>
  )
}

export default Content