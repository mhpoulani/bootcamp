import { Box, Typography } from '@mui/material'
import React from 'react'
import BasicTable from './Table'
import bgTimeTable from '../../../assets/images/bgTimeTable.svg'
import PinIcon from '../../../assets/images/PinIcon.svg'
import iconPeriodRegisteration from '../../../assets/images/iconPeriodRegisteration.svg'
import iconClassStart from '../../../assets/images/iconClassStart.svg'
import iconEventPlace from '../../../assets/images/iconEventPlace.svg'
const TimeTable = () => {
    const fontFamily = 'Suprime'

    const pinData = [
        {
            mt: '0px',
            icon: iconPeriodRegisteration,
            title: 'Registration Period:',
            content: 'From July 22 to July 29.'
        },
        {
            mt: '32px',
            icon: iconClassStart,
            title: 'Classes Start:',
            content: 'August 3rd'
        },
        {
            mt: '32px',
            icon: iconEventPlace,
            title: 'Event Place',
            content: 'The central site, Faculty of Amol university of modern technologies'
        },
    ]

    return (
        <Box
            sx={{
                pt: { xs: '24px', md: '40px', },
                px: { xs: '10px', sm: '50px', md: '20px', lg: '40px', xl: '139px' },
                pb: { xs: '20px', sm: '30px', md: '40px', lg: '70px', xl: '90px' },
                background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${bgTimeTable}) lightgray 50% / cover no-repeat`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(10px)',


            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0,0, 0.9)',
                    zIndex: -1
                }}
            ></Box>
            <Typography
                sx={{
                    fontFamily: `${fontFamily}`,
                    color: '#fff',
                    fontSize: { xs: '20px', sm: '24px', md: '28px', xl: '32px' },
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: { xs: '20px', sm: '25px', md: '30px', lg: '40px', xl: '48px' }
                }}
            >
                Time Table
            </Typography>
            <Box
                sx={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: '50px', md: '20px', lg: '30px', xl: '56px' },
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
  

                    <BasicTable />
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        px: { xs: '12px', sm: '24px', md: '28px', lg: '32px' },
                        py: { xs: '20px', sm: '32px', md: '36px', lg: '40px' },
                        width: { xs: '100%', md: '40%', lg: '40%', xl: '30%' },
                        background: 'rgba(31, 31, 31, 0.90)',
                        borderRadius: '16px',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        position: 'relative',
                        maxWidth:400

                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: { xs: '-3%', sm: '-3%' ,},
                            right: { xs: '2%', sm: '-1%',lg:'-3%' },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: '50px', sm: '55px' ,lg:'63px'},
                                height: { xs: '50px', sm: '55px',lg:'63px' },
                            }}
                        >

                            <img src={PinIcon} alt="" />
                        </Box>
                    </Box>
                    <Box>
                        {
                            pinData.map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            mt: `${item.mt}`,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px'
                                        }}
                                    >

                                        <Box sx={{
                                            display: 'flex',
                                            gap: '8px'
                                        }}>
                                            <img src={item.icon} alt="" />
                                            <Typography
                                                sx={{
                                                    color: '#00C5CC',
                                                    fontSize: { xs: '13px', sm: '14px', md: '16px', lg: '18px' },
                                                    fontFamily: `${fontFamily}`,
                                                    fontWeight: 700
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
                                                fontFamily: `${fontFamily}`,
                                                fontWeight: 500
                                            }}
                                        >
                                            {item.content}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TimeTable