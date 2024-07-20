import { Box, Typography } from '@mui/material'
import React from 'react'

const TeamCart = ({ desc, fullName, image, job }) => {
    return (
        <Box
            sx={{
                background: 'rgba(255, 255, 255, 0.10)',
                boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.14)',
                height: '521px',
                width: '310px',
                boxSizing: 'border-box',
                borderRadius: '16px',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    background: 'radial-gradient(88.14% 84.05% at 50% 0%, #068488 0%, rgba(6, 132, 136, 0.00) 100%)',
                    height: '288px',
                    width: '100%',
                    pt: '30.6px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '1px dashed rgba(6,132,136,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: '104px',
                            height: '104px',
                            border: '2px solid #068488',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            borderRadius: '50%'
                        }}
                    >

                        <img src={image} />
                    </Box>
                </Box>
                <Typography
                    sx={{
                        mt: '24px',
                        mb: '4px',
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        textAlign: 'center',

                    }}
                >
                    {fullName}
                </Typography>
                <Typography
                    sx={{
                        color: '#00C5CC',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        textAlign: 'center',

                    }}
                >
                    {job}
                </Typography>
            </Box>
                <Typography
                    sx={{
                        position:'relative',
                        top:'-3rem',
                        px:'24px',
                        mt:'24px',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        textAlign: 'left',
                    }}
                >
                    {desc}
                </Typography>

        </Box>
    )
}

export default TeamCart