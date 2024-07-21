import { Box, Button, Typography } from '@mui/material'
import React, { useRef } from 'react'
import BgRegistration from '../../assets/images/BgRegistration.svg'

const InformationForcash = () => {
    const fontFamily = 'Suprime'
    const inputEl = useRef(null);

    const information = [
        {
            key: 'Bank',
            value: 'Meli Bank'
        },
        {
            key: 'Account owner',
            value: 'Vahid Khazaei Nezhad'
        },
        {
            key: 'Account number',
            value: '0110103791001'
        },
        {
            key: 'Cart number',
            value: '6037-9971-2023-2120'
        },
        {
            key: 'iBank',
            value: 'IR39-0170-0000-0011-0103-7910-01'
        },
        {
            key: 'Amount',
            value: '45,000,000 Rials'
        },
    ]
    const onChangeHandler = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        console.log(file);


    }
    return (
        <Box
            sx={{

                background: `linear-gradient(180deg, rgba(31, 31, 31, 0.72) 0%, rgba(31, 31, 31, 0.18) 12.5%), url(${BgRegistration}) lightgray 50% / cover no-repeat`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: 'auto', md: '600px' },
                minWidth: { xs: 'auto', md: '600px' },


            }}
        >
            <Box
                sx={{
                    background: 'rgba(31, 31, 31, 0.70)',
                    px: { xs: '0px', md: '64px' },
                    pt: { xs: '20px', md: '56px' },
                    pb: { xs: '20px', md: '40px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    minHeight: { xs: 'auto', md: '266px' },
                    minWidth: { xs: 'auto', md: '472px' },

                }}
            >
                <Typography
                    sx={{
                        color: '#00C5CC',
                        fontFamily: `${fontFamily}`,
                        fontSize: { xs: '28px', },
                        fontWeight: 700,
                        textAlign: 'center'
                    }}
                >
                    Thank you for registering!
                </Typography>
                <Typography
                    sx={{
                        color: '#d9d9d9',
                        fontFamily: `${fontFamily}`,
                        fontSize: { xs: '18px', },
                        fontWeight: 400,
                        textAlign: 'center'
                    }}
                >
                    Your information has been saved.
                </Typography>
                <Box
                    sx={{
                        mt: '32px',
                        background: 'rgba(17, 17, 17, 0.35)',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.30)',
                        borderTop: '1px solid rgba(0, 0, 0, 0.30)',
                        borderRadius: '8px',
                        py: '32px',
                        px: { xs: '10px', md: '24px' },
                        minWidth: { xs: 'auto', md: '472px' }
                    }}
                >
                    {
                        information.map((value, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        mb: '14px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: `${fontFamily}`,
                                            width: '40%',
                                            fontSize: '14px',
                                            color: '#d9d9d9',
                                            fontWeight: 400,
                                            whiteSpace: 'nowrap',
                                            minWidth: '120px'


                                        }}
                                    >{value.key}</Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: `${fontFamily}`,
                                            color: '#fff',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            whiteSpace: 'nowrap',


                                        }}
                                    >{value.value}</Typography>

                                </Box>
                            )
                        })
                    }
                </Box>
                <Box sx={{
                    mt: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    px: '54px'
                }}>
                    <Typography
                        sx={{
                            fontFamily: `${fontFamily}`,
                            whiteSpace: 'nowrap',
                            color: '#fff',
                            fontSize: { xs: '16px' },
                            fontWeight: 400,
                            mb: '16px'
                        }}
                    >
                        Now, please upload the payment proof as an image.
                    </Typography>


                    <input
                        ref={inputEl}
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="raised-button-file" style={{width:'100%'}} >
                        <Button variant="raised" component="span"
                            sx={{
                                textTransform: 'none',
                                background: '#068488',
                                boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.16)',
                                color: '#fff',
                                fontSize: { xs: '16px' },
                                fontWeight: 700,
                                width: '100%',
                                borderRadius: '8px'
                            }}>
                            Upload
                        </Button>
                    </label>
                </Box>
            </Box>

        </Box>
    )
}

export default InformationForcash