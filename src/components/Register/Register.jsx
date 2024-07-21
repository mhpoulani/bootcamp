import { Box, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import BgRegistration from '../../assets/images/BgRegistration.svg'
import registerLogo from '../../assets/images/registerLogo.svg'
import TextFiled from './TextFiled'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate=useNavigate()
  const fontFamily = 'Suprime'
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')

  const inputs = [
    {
      lable: 'First Name ',
      placeHolder: 'Your First Name',
      value: firstName,
      setValue: setFirstName,
      type: 'text',
      inputName: 'firstName',

    },
    {
      lable: 'Last Name ',
      placeHolder: 'Your Last Name',
      value: lastName,
      setValue: setLastName,
      type: 'text',
      inputName: 'lastName',

    },
    {
      lable: 'Email ',
      placeHolder: 'Your Email',
      value: email,
      setValue: setEmail,
      type: 'text',
      inputName: 'email',

    },
    {
      lable: 'Phone Number ',
      placeHolder: 'Your Phone Number',
      value: phoneNumber,
      setValue: setPhoneNumber,
      type: 'text',
      inputName: 'phoneNumber',

    },
    {
      lable: 'City ',
      placeHolder: 'Your City',
      value: city,
      setValue: setCity,
      type: 'text',
      inputName: 'city',

    },
  ]
  return (
    <Box
      sx={{
        pt: { xs: '24px', md: '0' },
        background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${BgRegistration}) lightgray 50% / cover no-repeat`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: { xs: '20px', md: '0' }


      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md:'50%',lg: '60%', xl: '65%' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
          boxSizing: 'border-box',

        }}
      >
        <Box>
          <img src={registerLogo} alt="" />
        </Box>
        <Typography
          sx={{
            color: '#f1f1f1',
            fontSize: '32px',
            fontWeight: 700,
            fontFamily: `${fontFamily}`
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '32px',
            fontWeight: 500,
            fontFamily: `${fontFamily}`
          }}
        >
          The Professional Full-Stack Bootcamp
        </Typography>
        <Typography
          sx={{
            color: '#7AFBFF',
            fontSize: '18px',
            fontWeight: 400,
            fontFamily: `${fontFamily}`

          }}
        >
          Mastery in Web Development with Django, PostgreSQL, and React.js
        </Typography>
      </Box>
      <Box
        sx={{
          background: 'rgba(31, 31, 31, 0.70)',
          boxShadow: '-4px 0px 36px 0px rgba(0, 0, 0, 0.25)',
          height: '100%',
          width: { xs: '100%', md: '50%',lg:'40', xl: '35%' },
          px: { xs: '40px', md: '20px', xl: '80px' },
          pt: { xs: '40px', md: '20px', xl: '80px' },
          pb: { xs: '20px', md: '10px', xl: '80px' },
          boxSizing: 'border-box',

        }}
      >
        <Box
          sx={{
            px: { xs: '14px', md: '24px' },
            pt: { xs: '14px', md: '24px' },
            pb: { xs: '14px', md: '24px' },
            height: '100%',
            boxSizing: 'border-box',

          }}
        >
          <Box >
            <Typography
              sx={{
                textAlign: 'center',
                color: '#00F0F8',
                fontSize: '32px',
                fontWeight: 700,
                fontFamily: `${fontFamily}`

              }}
            >
              Join Us
            </Typography>
            <Box
              sx={{
                mt: '30px'
              }}
            >
              {
                inputs.map((value, index) => {
                  return (
                    <Box key={index} sx={{ mt: '16px' }}>

                      <TextFiled value={value.value} setValue={value.setValue} placeholder={value.placeHolder} lable={value.lable} inputname={value.inputName} />
                    </Box>
                  )
                })
              }
            </Box>
            <Box sx={{ mt: '30px' }}>
              <Button
              onClick={()=>navigate('/inforMationForPayment')}
                sx={{
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: `${fontFamily}`,
                   background:'#068488',
                   boxShadow:' 0px 4px 4px 0px rgba(0, 0, 0, 0.16)',
                   borderRadius:'8px' ,
                   height:'46px',
                   width:'100%',
                   textTransform:'none'
                }}
              >
                Register Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Register