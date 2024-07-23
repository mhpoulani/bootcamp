import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bgImage from '../../assets/images/bgHeader.svg'
import logo from '../../assets/images/logo.svg'
import { Link, Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))
    const [id, setId] = useState(localStorage.getItem('userId'))

    console.log(id);
    const navigate = useNavigate()
    const fontFamily = 'Suprime'
    const [headerItems, setHeaderItems] = useState(
        [
            {
                id: 1,
                name: 'Home',
                select: true,
                link: 'top'
            },
            {
                id: 2,
                name: 'Company',
                select: false,
                link: 'company',

            },
            {
                id: 3,
                name: 'Team',
                select: false,
                link: 'team'

            },
            {
                id: 4,
                name: 'Assignments',
                select: false,
                disable: true


            },

            {
                id: 5,
                name: 'Courses',

                select: false
            }
        ]
    )

    const handleClick = (id) => {
        if (id !== 4 && id !== 5 && id !== 6) {

            setHeaderItems((state) => state.map((value) => ({ ...value, select: value.id === id ? true : false })))

        }
    }
    const logOut = () => {
        localStorage.clear('token')
        setIsLogin(null)
        navigate('/')
    }

    return (
        <Box
            id='top'
            sx={{
                background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${bgImage}) lightgray 50% / cover no-repeat`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '1000px',
                width: '100%',
                boxSizing: 'border-box',
                position:'relative'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '32px',
                    pl: '64px',
                    pt: '48px',
                    position: 'fixed',
                    fontFamily: 'Inter',
                    zIndex: 1400,
                    background: 'linear-gradient(90deg, rgba(28, 27, 26, 0.80) 0%, rgba(65, 56, 56, 0.80) 100%)',
                    width:'100%',
                    pb:'17px'


                }}
            >
                <Box>
                    <img src={logo} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap:2

                }}>
                    {headerItems.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                to={item.link}
                                smooth={true}
                            >
                                <Box
                                    onClick={() => handleClick(item.id)}
                                    sx={{
                                        px: '40px',
                                        pb: '10px',
                                        cursor: 'pointer',
                                        borderBottom: `${item.select ? '2px solid #FFFFFF' : 'none'}`
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            color: `${item.id !== 5 && item.id !== 4 && item.id !== 6 ? 'rgba(255, 255, 255, 0.90)' : 'rgba(255, 255, 255, 0.60)'}`,
                                            fontSize: '18px',
                                            fontWeight: 500,
                                            fontFamily: `${fontFamily}`,

                                        }}
                                    >

                                        {item.name}
                                    </Typography>
                                </Box>
                            </Link>
                        )
                    })}
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '30%',
                    left: { xs: '15%', sm: '5%', md: '10%' }
                }}
            >
                <Box
                    sx={{
                        width: { xs: '200px', sm: '500px' },
                        height: { xs: 'auto', sm: '402px' },
                        background: 'rgba(31, 31, 31, 0.30)',
                        border: '1px solid rgba(31, 31, 31, 0.20)',
                        py: '24px',
                        px: '32px',
                        borderRadius: '8px'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '20px', sm: '24px', md: '28px', xl: '32px' },
                            color: '#fff',
                            fontWeight: 700,
                            fontFamily: `${fontFamily}`,


                        }}
                    >
                        Welcome to the Professional<br /> Full-Stack Bootcamp
                    </Typography>
                    <Typography
                        sx={{
                            color: '#e1e1e1',
                            fontWeight: 400,
                            fontSize: { xs: '12px', sm: '16px', md: '18px' },
                            mt: '16px',
                            fontFamily: `${fontFamily}`,

                        }}
                    >
                        Join our transformative full-stack development bootcamp where you'll master Django, PostgreSQL, and React.js! Dive deep into web development and equip yourself with the skills to build cutting-edge web applications. Don't miss this chance to level up your career in tech.
                    </Typography>
                    <Box
                        sx={{
                            mt: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            fontFamily: `${fontFamily}`,

                        }}
                    >
                        {isLogin !== null ? (
                            <>
                                {
                                    isLogin === 'true' ? (
                                        <Button
                                            onClick={logOut}
                                            sx={{
                                                width: '100%',
                                                textTransform: 'none',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                color: '#fff',
                                                borderRadius: '8px',
                                                height: '46px',
                                                background: '#068488',
                                                fontFamily: `${fontFamily}`,
                                            }}
                                        >
                                            Log Out
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => navigate(`/inforMationForPayment/${id}`)}
                                            sx={{
                                                width: '100%',
                                                textTransform: 'none',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                color: '#fff',
                                                borderRadius: '8px',
                                                height: '46px',
                                                background: '#068488',
                                                fontFamily: `${fontFamily}`,
                                            }}
                                        >
                                            Complete Registration
                                        </Button>
                                    )
                                }
                            </>
                        ) : (
                            <Button
                                onClick={() => navigate('/registerOrLogin')}
                                sx={{
                                    width: '100%',
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    color: '#fff',
                                    borderRadius: '8px',
                                    height: '46px',
                                    background: '#068488',
                                    fontFamily: `${fontFamily}`,

                                }}
                            >
                                Sign-Up / Login
                            </Button>
                        )}
                        <Link to="courses" smooth={true}>
                            <Button

                                sx={{
                                    width: '100%',
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    color: '#fff',
                                    borderRadius: '8px',
                                    height: '46px',
                                    background: 'rgba(31, 31, 31, 0.15)',
                                    border: '1px solid #00C5CC',
                                    mt: '8px',
                                    fontFamily: `${fontFamily}`,

                                }}
                            >
                                View Plan
                            </Button>
                        </Link>
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}

export default Header