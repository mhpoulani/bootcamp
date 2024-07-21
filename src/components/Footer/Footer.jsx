import { Box, Typography } from '@mui/material'
import React from 'react'
import uniLogo from '../../assets/images/uniLogo.svg'
import webIcon from '../../assets/images/webIcon.svg'
import emailIcon from '../../assets/images/emailIcon.svg'
import locIcon from '../../assets/images/locIcon.svg'
import QRCode from '../../assets/images/QRCode.svg'
const Footer = () => {
  const FontFamily = 'Inter'
  return (
    <Box sx={{ pt: '56px', pb: '40px', px: '80px' }}>
      <Box sx={{ display: 'flex',flexWrap:'wrap',justifyContent:'space-between' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '10%', borderRight: '1px solid #181818' }}>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: `${FontFamily}`,
              mb: '16px'
            }}
          >Partners </Typography>
          <Box>
            <img src={uniLogo} alt="" />
          </Box>


        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '15%', borderRight: '1px solid #181818' }}>
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
            <Typography
              sx={{
                fontFamily: `${FontFamily}`,
                color: '#00C5CC',
                fontSize: '12px',
                fontWeight: 400
              }}
            >English</Typography>
            <Typography
              sx={{
                fontFamily: `${FontFamily}`,
                color: '#00C5CC',
                fontSize: '12px',
                fontWeight: 400
              }}
            >Farsi</Typography>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '40%', borderRight: '1px solid #181818' }} >
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

            <img src={locIcon} alt="" />

            <Typography
              sx={{ color: '#d9d9d9', fontSize: '12px', fontWeight: 400, fontFamily: `${FontFamily}` }}
            >
              Amol - University Side Street - Islamic Azad University, Ayatollah Amoli Branch
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%', borderRight: '1px solid #181818' }} >
          <Typography
            sx={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: `${FontFamily}`,
              mb: '16px'
            }}
          >Azad University Location </Typography>

        </Box> */}
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
            border:'1px dashed rgba(255, 255, 255, 0.10)',
            borderRadius:'8px',
            px:'10px',
            py:'10px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
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