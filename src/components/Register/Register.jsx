import { Box } from '@mui/material'
import React from 'react'
import BgRegistration from '../../assets/images/BgRegistration.svg'
const Register = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${BgRegistration}) lightgray 50% / cover no-repeat`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
    <Box></Box>
    </Box>
  )
}

export default Register