import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import uniLogo from '../../assets/images/uniLogo.svg'
import webIcon from '../../assets/images/webIcon.svg'
import emailIcon from '../../assets/images/emailIcon.svg'
import locIcon from '../../assets/images/locIcon.svg'
import QRCode from '../../assets/images/QRCode.svg'
import locImage from '../../assets/images/locImage.svg'
import posterP from '../../assets/images/posterP.png'
import posterE from '../../assets/images/posterE.png'
import fanavariNovinLogo from '../../assets/images/fanavariNovinLogo.svg'
import azadUniLogo from '../../assets/images/azadUniLogo.svg'
import {saveAs} from 'file-saver'

const Footer = () => {
  const FontFamily = 'Suprime'

  return (
    <Box sx={{ pt: '56px', pb: '40px', px: '80px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',gap:'16px' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid #181818' }}>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: `${FontFamily}`,
              mb: '16px'
            }}
          >Partners </Typography>
          <Box sx={{display:'flex',gapL:1}}>
            <img src={fanavariNovinLogo} alt="" />
            <img src={azadUniLogo} alt="" />
          </Box>


        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  borderRight: '1px solid #181818' }}>
          <Box>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: `${FontFamily}`,
                mb: '18px'
              }}
            >
              Bootcamp Poster
            </Typography>

              <Typography onClick={() => saveAs(posterE)}
                sx={{
                  fontFamily: `${FontFamily}`,
                  color: '#00C5CC',
                  fontSize: '12px',
                  fontWeight: 400,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >English
              </Typography>

              <Typography onClick={() => saveAs(posterP)}
                sx={{
                  fontFamily: `${FontFamily}`,
                  color: '#00C5CC',
                  fontSize: '12px',
                  fontWeight: 400,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >Farsi</Typography>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #181818' }} >
          <Typography
            sx={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: `${FontFamily}`,
              mb: '16px'
            }}
          >Get in Touch </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

            <img src={webIcon} alt="" />

            <Typography
              sx={{ color: '#d9d9d9', fontSize: '12px', fontWeight: 400, fontFamily: `${FontFamily}` }}
            >
              bootcamp.vitruvianshield.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: '10px' }}>

            <img src={emailIcon} alt="" />

            <Typography
              sx={{ color: '#d9d9d9', fontSize: '12px', fontWeight: 400, fontFamily: `${FontFamily}` }}
            >
              bootcamp@vitruvianshield.com
            </Typography>
          </Box>
          <a href='https://www.google.com/maps/place/Islamic+Azad+University,+Amol+Branch/@36.4044616,52.4179107,17z/data=!3m1!4b1!4m6!3m5!1s0x3f8f9424028dcbe3:0xf54ae667750d35ec!8m2!3d36.4044616!4d52.4179107!16s%2Fg%2F1pv0v540?entry=ttu'>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

              <img src={locIcon} alt="" />

              <Typography
                sx={{ color: '#d9d9d9', fontSize: '12px', fontWeight: 400, fontFamily: `${FontFamily}` }}
              >
                Amol - University Side Street - Islamic Azad University, Ayatollah Amoli Branch
              </Typography>
            </Box>
          </a>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #181818' }} >
          <Typography
            sx={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: `${FontFamily}`,
              mb: '16px'
            }}
          >Azad University Location </Typography>
          <Box sx={{ cursor: 'pointer' }}>
            <a href="https://www.google.com/maps/place/Islamic+Azad+University,+Amol+Branch/@36.4044616,52.4179107,17z/data=!3m1!4b1!4m6!3m5!1s0x3f8f9424028dcbe3:0xf54ae667750d35ec!8m2!3d36.4044616!4d52.4179107!16s%2Fg%2F1pv0v540?entry=ttu">

              <img src={locImage} alt="" />
            </a>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: `${FontFamily}`,
              mb: '16px'
            }}
          >
            Scan It
          </Typography>
          <Box sx={{
            border: '1px dashed rgba(255, 255, 255, 0.10)',
            borderRadius: '8px',
            px: '10px',
            py: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={QRCode} alt="" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '40px' }}>
        <Typography
          sx={{
            color: '#a6a6a6',
            fontSize: '12px',
            fontWeight: 300
          }}
        >
          Copyright: Vitruvian Shield
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer