import { Box, Typography } from '@mui/material'
import React from 'react'
import bgFooter from '../../../assets/images/bgFooter.svg'
import CoursePlanCart from './CoursePlanCart'

const Courses = () => {
  const fontFamily = 'Suprime'

  const courses = [

    {
      id: 1,
      title: 'Introduction to Full-Stack Development',
      titleColor: '#00C5CC'

    },
    {
      id: 2,
      title: 'Django Basics and Project Setup',
      titleColor: '#5DE2AE'
    },
    {
      id: 3,
      title: 'PostgreSQL Integration with Django',
      titleColor: '#F9F871'
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Django',
      titleColor: '#8FEC97'
    },
    {
      id: 5,
      title: 'Introduction to React.js',
      titleColor: '#A7ACF6'

    },
    {
      id: 6,
      title: 'Advanced React.js Concepts',
      titleColor: '#BC6ACC'

    },
    {
      id: 7,
      title: 'Integrating Frontend and Backend',
      titleColor: '#FF8946'

    },
    {
      id: 8,
      title: 'Deployment and Best Practices',
      titleColor: '#E070BB'

    },


  ]
  return (
    <Box
      id='courses'
      sx={{
        background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${bgFooter}) lightgray 50% / cover no-repeat`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: { xs: 'auto', xl: '800px' },
        py: '40px',
        px: '100px'
      }}
    >
      <Typography
        sx={{
          fontSize: '32px',
          color: '#fff',
          fontWeight: 700,
          lineHeight: 'normal',
          textAlign: 'center',
          pt: '20px',
          fontFamily: `${fontFamily}`,

        }}
      >
        COURSE PLAN
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '13px',
          flexWrap: 'wrap'
        }}
        mt='24px'>
        {
          courses.map((item, index) => {
            return (

              <CoursePlanCart key={index} number={item.id} title={item.title} titleColor={item.titleColor} />
            )
          })
        }
      </Box>
    </Box>
  )
}

export default Courses