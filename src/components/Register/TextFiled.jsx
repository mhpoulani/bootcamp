import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PhoneNumberUtil } from 'google-libphonenumber';

const TextFiled = ({ value, placeholder, inputname, type, setValue, lable, lablerequierd, setRequierd, requierd }) => {
    const fontFamily = 'Suprime'
    const f14 = '14px'
    const [helper, setHelper] = useState('')
    const phoneUtil = PhoneNumberUtil.getInstance()
    const isPhoneValid = (phone) => {
        try {
            return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
        } catch (error) {
            return false;
        }
    };
    return (
        <Box>
            <Typography
                sx={{
                    color: '#e1e1e1',
                    fontSize: '12px',
                    fontFamily: `${fontFamily}`,
                    fontWeight: 500,
                    pl: '4px',
                    mb: '8px'
                }}
            >
                {lable}*
            </Typography>
            <TextField

                autoComplete="off"
                autoFocus
                error={helper !== '' ? true : false}
                sx={{
                    width: '100%',
                    '& fieldset': {
                        borderRadius: { xs: '5px', sm: '8px' },
                        height: '52px',
                        border: '1px solid #fff',



                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        borderRadius: { xs: '5px', sm: '8px' },

                    },
                    '& input': {
                        fontFamily: `${fontFamily}`,
                        p: '0!important',
                        height: '52px',
                        px: '24px!important',
                        fontSize: `${f14}`,
                        background: `rgba(22, 22, 22, 0.60)`,
                        color: '#ffffff'
                    },
                    '& input::placeHolder': { fontFamily: `${fontFamily}`, color: `#A6A6A6`, fontSize: `${f14}`, fontWeight: 400 },
                    // '& label': {
                    //     marginTop: (them) => them.spacing(-0.5),
                    //     color: `${c595959}!important`,
                    //     fontSize: { xs: `${f14}` },
                    //     fontWeight: 500,
                    //     fontFamily: 'Inter',
                    //     background: `${cfcfcfc}`,


                    // },
                }}

                value={value}
                placeholder={placeholder}
                name={inputname}
                type={type}
                onChange={(event) => {
                    if (inputname === 'lastName') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setRequierd({ ...requierd, lastName: false })
                                setHelper('last name is invalid')

                            }
                        }, 0);
                        if (!/^\s*([A-Za-z]{1,}(|[-']|))+[A-Za-z]+\.?\s*$/.test(event.target.value)) {
                            setRequierd({ ...requierd, lastName: false })
                            setHelper('last name is invalid')

                        }

                        else {
                            setValue(event.target.value)
                            setRequierd({ ...requierd, lastName: true })
                            setHelper('')

                        }
                    }
                    setValue(event.target.value)

                    if (inputname === 'firstName') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setRequierd({ ...requierd, firstName: false })
                                setHelper('first name is invalid')

                            }
                            else {
                                if (!/^\s*([A-Za-z]{1,}(|[-']|))+[A-Za-z]+\.?\s*$/.test(event.target.value)) {
                                    setRequierd({ ...requierd, firstName: false })
                                    setHelper('first name is invalid')

                                }
                                else {
                                    setValue(event.target.value)
                                    setRequierd({ ...requierd, firstName: true })
                                    setHelper('')

                                }
                            }
                        }, 0);


                    }
                    if (inputname === 'phoneNumber') {
                        if (isPhoneValid(event.target.value) !== false) {
                            setHelper('')
                            setRequierd({ ...requierd, phoneNumber: true })
                            setValue(event.target.value)

                        }
                        else {
                            setHelper('phone number is invalid')
                            setRequierd({ ...requierd, phoneNumber: false })
                            setValue(event.target.value)
                        }
                    }
                    if (inputname === 'email') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setHelper('email is invalid')
                                setRequierd({ ...requierd, email: false })
                            }
                            if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
                                setHelper('email is invalid')
                                setRequierd({ ...requierd, email: false })
                            }
                            else {
                                setValue(event.target.value);
                                setRequierd({ ...requierd, email: true })
                                setHelper('')
                            }
                        }, 0);
                    }
                    if (inputname === 'city') {
                        setTimeout(() => {
                            if (event.target.value.length === 0) {
                                setHelper('city is invalid')
                                setRequierd({ ...requierd, city: false })
                                setValue(event.target.value);
                            }
                        }, 0);
                        if (!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(event.target.value)) {
                            setHelper('city is invalid')
                            setRequierd({ ...requierd, city: false })
                            setValue(event.target.value);
                        }
                        else {
                            setHelper('')
                            setRequierd({ ...requierd, city: true })
                            setValue(event.target.value);
                        }
                    }
                }}

            />
        </Box>
    )
}

export default TextFiled