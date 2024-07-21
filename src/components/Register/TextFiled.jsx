import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const TextFiled = ({ value,placeholder,inputname,type,setValue,lable}) => {
    const fontFamily='Suprime'
    const f14='14px'
    return (
        <Box>
            <Typography
            sx={{
                color:'#e1e1e1',
                fontSize:'12px',
                fontFamily:`${fontFamily}`,
                fontWeight:500,
                pl:'4px',
                mb:'8px'
            }}
            >
                {lable}*
            </Typography>
            <TextField
                autoComplete="organization"
                autoFocus
                sx={{
                    width: '100%',
                    '& fieldset': {
                        borderRadius: { xs: '5px', sm: '8px' },
                        height: '52px',
                        background:`rgba(22, 22, 22, 0.60)`,
                        border:'1px solid #fff',



                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        borderRadius: { xs: '5px', sm: '8px' },

                    },
                    '& input': { fontFamily: 'Inter', p: '0!important', height: '52px', px: '24px!important', fontSize: `${f14}` ,color:'#ffffff'},
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
                onChange={(e)=>{
                    setValue(e.target.value)
                }}

            />
        </Box>
    )
}

export default TextFiled