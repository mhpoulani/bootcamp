import { Box, Typography, Button, Container } from '@mui/material'
import React, { useState } from 'react'
import BgRegistration from '../../assets/images/BgRegistration.svg'
import registerLogo from '../../assets/images/registerLogo.svg'
import tikBigIcon from '../../assets/images/tikBigIcon.svg'
import TextFiled from './TextFiled'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useAuth } from '../../context/authProvider'


const Register = () => {
  const [id, setId] = useState(localStorage.getItem('userId'))
  const { register } = useAuth()
  const navigate = useNavigate()
  const [state, setState] = useState(1)
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
      placeHolder: '+989112223233',
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

  const [requierd, setRequierd] = useState({
    firstName: true,
    lastName: true,
    email: false,
    phoneNumber: true,
    city: true

  })
  const handleRegister = async () => {
    const information = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      city: city
    }
    toast.loading('loading')
    const result = await register(information)
    console.log(result);
    console.log(result.response);
    if (result.message === 'Registration successful') {
      toast.dismiss()
      toast.success(result.message)
      localStorage.setItem('userId', result.user.id)
      setId(result.user.id)
      setState(2)
    }
    else {
      toast.dismiss()
      console.log(result.response.data.error);
      toast.error(result.response.data.error)
    }
  }
  return (

    <Box
      sx={{
        pt: { xs: '24px', md: '0' },
        background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${BgRegistration}) lightgray 50% / cover no-repeat`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',

        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: { xs: '20px', md: '0' },
        position: 'relative'


      }}
    >
      <Box
        onClick={() => navigate(-1)}
        sx={{
          position: 'absolute',
          cursor: 'pointer',
          left: '3%',
          top: '5%',
          color: '#fff'
        }}
      >
        <KeyboardBackspaceIcon color='inherit' />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '50%', lg: '60%', xl: '65%' },

          display: { xs: `${state === 2 ? 'none' : 'flex'}`, md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          minHeight: '100vh',
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
            fontSize: { xs: '20px', sm: '24px', md: '28px', xl: '32px' },
            fontWeight: 700,
            fontFamily: `${fontFamily}`
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: '20px', sm: '24px', md: '28px', xl: '32px' },
            fontWeight: 500,
            fontFamily: `${fontFamily}`,
            textAlign: 'center'
          }}
        >
          The Professional Full-Stack Bootcamp
        </Typography>
        <Typography
          sx={{
            color: '#7AFBFF',
            fontSize: { xs: '12px', sm: '16px', md: '18px' },
            fontWeight: 400,
            fontFamily: `${fontFamily}`,
            textAlign: 'center'


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
          minHeight: '100vh',
          width: { xs: '100%', md: '50%', lg: '40', xl: '35%' },
          px: { xs: '40px', md: '20px', xl: '80px' },
          pt: { xs: '40px', md: '20px', xl: '80px' },
          pb: { xs: '20px', md: '10px', xl: '80px' },
          boxSizing: 'border-box',

        }}
      >
        {
          state === 1 ? (
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
                    fontSize: { xs: '20px', sm: '24px', md: '28px', xl: '32px' },
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

                          <TextFiled requierd={requierd} setRequierd={setRequierd} value={value.value} setValue={value.setValue} placeholder={value.placeHolder} lable={value.lable} inputname={value.inputName} />
                        </Box>
                      )
                    })
                  }
                </Box>
                <Box sx={{ mt: '30px' }}>
                  <Button
                    onClick={handleRegister}
                    disabled={!requierd.city || !requierd.email || !requierd.firstName || !requierd.lastName || !requierd.phoneNumber ? true : false}
                    sx={{
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: `${fontFamily}`,
                      background: '#068488',
                      boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.16)',
                      borderRadius: '8px',
                      height: '46px',
                      width: '100%',
                      textTransform: 'none'
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: { xs: '50px', sm: '70px', md: '90px', lg: '100px', xl: '120px' },
                pb: { xs: '120px', sm: '150px', md: '180px', lg: '200px', xl: '286px' },
                boxSizing: 'border-box',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box sx={{

              }}>
                <img src={tikBigIcon} alt="" />
              </Box>
              <Typography
                sx={{
                  fontFamily: `${fontFamily}`,
                  textAlign: 'center',
                  color: '#00C5CC',
                  fontSize: { xs: '18px', sm: '20px', md: '24px', lg: '28px' },
                  fontWeight: 700,
                  mt: '40px'
                }}
              >Thank you for registering!
              </Typography>
              <Typography
                sx={{
                  fontFamily: `${fontFamily}`,
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
                  fontWeight: 400,

                }}
              >Your information has been saved. </Typography>
              <Box
                sx={{
                  mt: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <Button
                  onClick={() => navigate(`/inforMationForPayment/${id}`)}
                  sx={{
                    fontFamily: `${fontFamily}`,
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 700,
                    background: '#068488',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.16)',
                    color: "#fff",
                    height: '46px',
                    minWidth: { xs: '300px', sm: '440px', }
                  }}
                >Proceed to Payment
                </Button>
                <Button
                  onClick={() => navigate('/')}
                  sx={{
                    fontFamily: `${fontFamily}`,
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 700,
                    border: '1px solid #00C5CC',
                    color: '#00C5CC',
                    background: 'rgba(31, 31, 31, 0.15)',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.16)'
                  }}
                >
                  Back To Home
                </Button>
              </Box>
            </Box>
          )
        }

      </Box>
    </Box>
  )
}

export default Register