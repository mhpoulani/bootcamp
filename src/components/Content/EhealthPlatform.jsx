import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import bigLogo from '../../assets/images/bigLogo.svg'
const EhealthPlatform = () => {
  const fontFamily = 'Suprime'

  return (
    <Box
      id='company'
      sx={{
        height: { xs: 'auto', xl: '416px' },
        background: 'linear-gradient(90deg, rgba(31, 31, 31, 0.80) 0%, rgba(74, 74, 74, 0.80) 100%)',
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.14)',
        py: { xs: '24px', sm: '32px' },
        px: { xs: '20px', sm: '50px', md: '80px', lg: '90px', xl: '104px' },
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column-reverse', sm: 'row' }

      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '28px', sm: '30px', md: '32px', xl: '40px' },
            color: '#fff',
            fontWeight: 700,
            fontStyle: 'normal',
            fontFamily: `${fontFamily}`,
            textAlign: { xs: 'center', sm: 'left' }


          }}
        >
          Vitruvian Shield E-health platform
        </Typography>
        <Typography
          sx={{
            mt: '8px',
            fontSize: {xs:'12px',sm:'14px',md:'16px'},
            color: '#e1e1e1',
            fontWeight: 400,
            lineHeight: 'normal',
            fontStyle: 'normal',
            fontFamily: `${fontFamily}`,
            textAlign: { xs: 'center', sm: 'left' }

          }}
        >
          Vitruvian Shield is one of the progressive digital health companies whose headquarters office resides in the Biopole of Lausanne, Switzerland. Vitruvian Shield promotes a comprehensive digital health platform that combines cutting-edge sensor technology, cloud computing, and AI-powered analytics to provide a holistic approach to medical research and remote patient monitoring. The Vitruvian Shield platform collects vital signs data from wearable devices and its exclusive mobile app to empower physicians, caregivers, and researchers in their work and also make people's lives more qualified.

        </Typography>
        <Box sx={{
          mt: '24px',
          display:'flex',
          justifyContent:{xs:'center',sm:'start'}
        }}>
          <a href='https://vitruvianshield.com/'>

            <Button

              sx={{
                width: '210px',
                height: '46px',
                color: "#fff",
                textTransform: 'none',
                background: '#068488',
                borderRadius: '8px',
                fontFamily: `${fontFamily}`,

              }}
            >
              Visit our Platform
            </Button>
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img src={bigLogo} />
        <Box
          sx={{
            width: '180px',
            height: '19px',
            background: 'rgba(25, 25, 25, 0.40)',
            filter: 'blur(4.949999809265137px)',
            borderRadius: '100%'
          }}
        >

        </Box>
      </Box>
    </Box>
  )
}

export default EhealthPlatform