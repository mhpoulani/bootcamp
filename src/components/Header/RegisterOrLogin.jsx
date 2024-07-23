import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BgRegistration from '../../assets/images/BgRegistration.svg'
import registerLogo from '../../assets/images/registerLogo.svg'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const RegisterOrLogin = () => {
    const navigate = useNavigate()
    const fontFamily = 'Suprime'
    return (
        <Box
            sx={{
                background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${BgRegistration}) lightgray 50% / cover no-repeat`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight:'100vh',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
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
                    width: { xs: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    minHeight:'100vh',
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
                        fontFamily: `${fontFamily}`
                    }}
                >
                    The Professional Full-Stack Bootcamp
                </Typography>
                <Typography
                    sx={{
                        color: '#7AFBFF',
                        fontSize: { xs: '12px', sm: '16px', md: '18px' },
                        fontWeight: 400,
                        fontFamily: `${fontFamily}`

                    }}
                >
                    Mastery in Web Development with Django, PostgreSQL, and React.js
                </Typography>
                <Box sx={{
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex',
                    mt: '32px',
                    gap: '16px',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center'

                }}>
                    <Button
                        onClick={() => navigate('/login')}

                        sx={{
                            fontFamily: `${fontFamily}`,
                            textTransform: 'none',
                            borderRadius: "8px",
                            fontSize: '16px',
                            fontWeight: 700,
                            background: '#068488',
                            color: '#fff',
                            width: '275px',
                            height: '46px'
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => navigate('/register')}
                        sx={{
                            fontFamily: `${fontFamily}`,
                            textTransform: 'none',
                            borderRadius: "8px",
                            fontSize: '16px',
                            fontWeight: 700,
                            border: '1px solid #068488',
                            color: '#00C5CC',
                            width: '275px',
                            height: '46px'

                        }}
                    >
                        Sign-Up
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default RegisterOrLogin