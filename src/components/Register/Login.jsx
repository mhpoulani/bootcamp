import { Box, Typography,Button } from '@mui/material'
import React, { useState } from 'react'
import BgRegistration from '../../assets/images/BgRegistration.svg'
import TextFiled from './TextFiled'
import { useAuth } from '../../context/authProvider'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const Login = () => {
    const fontFamily='Suprime'
    const [value,setValue]=useState('')
   const {login}=useAuth()
   const navigate=useNavigate()
    const handleLogin=async()=>{
        const data=await login(value)
         console.log(data.response);
         if(data.data.user){
            localStorage.setItem('token',data.data.user.image_uploaded)
            localStorage.setItem('userId',data.data.user.id)
            toast.success('Welcome')
            navigate('/')
         }
         else{
          toast.error('User not found')
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
                height: '100vh',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
                  <Box
      onClick={()=>navigate(-1)}
      sx={{
        position:'absolute',
        cursor:'pointer',
        left:'3%',
        top:'5%',
        color:'#fff'
      }}
      >
        <KeyboardBackspaceIcon color='inherit'/>
      </Box>
            <Box
                sx={{
                    pt: { xs: '20px', sm: '30px', md: '40px', xl: '56px' },
                    px: { xs: '24px', sm: '34px', md: '44px', xl: '64px' },
                    pb: { xs: '22px', sm: '32px', md: '52px', xl: '72px' },
                    borderRadius: '40px',
                    boxShadow: '-4px 0px 36px 0px rgba(0, 0, 0, 0.25)',
                    background: 'rgba(31, 31, 31, 0.70)',
                    minWidth:{xs:'300px',sm:'536px'},
                    boxSizing:'border-box'
                }}
            >
                <Typography
                    sx={{
                        color: '#00F0F8',
                        fontSize: { xs: '20px', sm: '24px', md: '28px', xl: '32px' },
                        fontFamily:`${fontFamily}`,
                        fontWeight:700,
                        textAlign:'center',
                    }}
                >
                    Login
                </Typography>
                <Box
                sx={{
                    mt:'32px',
                }}
                >
                    <TextFiled value-={value} setValue={setValue} placeholder='Your Email or hone Number ' lable='Email/ Phone Number' inputname={value.includes('@')===true?'email':'phone_number'}/>
                </Box>
                <Button
                onClick={handleLogin}
                sx={{
                    fontFamily:`${fontFamily}`,
                    color:'#fff',
                    background:'#068488',
                    borderRadius:'8px',
                    width:'100%',
                    mt:'24px',
                    height:'46px',
                    
                }}
                >
                    LOGIN
                </Button>
            </Box>
        </Box>
    )
}

export default Login