import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

const fontFamily = 'Suprime'

const headCellStyle = {
    color: '#fff',
    fontFamily: `${fontFamily}`,
    fontWeight: 700,
    fontSize: { xs: '13px', sm: '14px', md: '16px', lg: '18px', xl: '20px' },
    fontStyle: 'normal',
    border: 'none'
}
const bodyCellStyle = {
    color: '#fff',
    fontFamily: `${fontFamily}`,
    fontWeight: 500,
    fontSize: { xs: '12px', sm: '13px', md: '14px', lg: '16px', xl: '18px' },
    fontStyle: 'normal',
    height: '52px',
    borderCollapse: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const rows = [
    { id: 1, name: 'Week 1', info1: 'Day 1', info2: 'Day 2', info3: 'August 3', info4: 'August 4', info5: '9:30 AM - 1:30 PM', info6: '9:30 AM - 1:30 PM' },
    { id: 2, name: 'Week 2', info1: 'Day 3', info2: 'Day 4', info3: 'August 10', info4: 'August 11', info5: '9:30 AM - 1:30 PM', info6: '9:30 AM - 1:30 PM' },
    { id: 2, name: 'Week 3', info1: 'Day 5', info2: 'Day 6', info3: 'August 17', info4: 'August 18', info5: '9:30 AM - 1:30 PM', info6: '9:30 AM - 1:30 PM' },
    { id: 2, name: 'Week 4', info1: 'Day 7', info2: 'Day 8', info3: 'August 26', info4: 'August 27', info5: '9:30 AM - 1:30 PM', info6: '9:30 AM - 1:30 PM' },
    // Add more row objects as needed
];


export default function BasicTable() {
    return (
        <TableContainer
            sx={{
                border: '1px solid #068488',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'transparent',
                maxWidth:800
            }}
            component={Paper}>
            <Table
                sx={{
                    minWidth: 300,
                    borderRadius: '16px',


                }}
                aria-label="simple table"
            >
                <TableHead
                    sx={{
                        borderRadius: '16px',
                        background: '#068488',
                        height: '63px'
                    }}>
                    <TableRow>
                        <TableCell
                            sx={headCellStyle}
                            align='center'>WEEK</TableCell>
                        <TableCell
                            sx={headCellStyle}

                            align="center">SESSION</TableCell>
                        <TableCell
                            sx={headCellStyle}

                            align="center">DATE</TableCell>
                        <TableCell
                            sx={headCellStyle}

                            align="center">TIME</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{
                    borderRadius: '16px',
                }}>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell
                                sx={{
                                    background: 'rgba(6, 132, 136, 0.60)',
                                    borderBottom: '1px solid #068488', borderRight: '1px solid #068488',
                                    height: '72px'
                                }}
                            >
                                <Typography textAlign='center' variant="body1" sx={headCellStyle}>{row.name}</Typography>
                            </TableCell>
                            <TableCell padding='none' sx={{
                                borderBottom: '1px solid #068488', borderRight: '1px solid #068488',
                                height: '104px'
                            }}>
                                <Typography textAlign='center' variant="body2" sx={{ ...bodyCellStyle }}>{row.info1}</Typography>
                                <Typography textAlign='center' variant="body2" sx={{ background: 'rgba(6, 132, 136, 0.10)', ...bodyCellStyle }}>{row.info2}</Typography>
                            </TableCell>
                            <TableCell padding='none' sx={{
                                borderBottom: '1px solid #068488', borderRight: '1px solid #068488',
                                height: '104px'
                            }}>
                                <Typography textAlign='center' variant="body2" sx={{ ...bodyCellStyle }}>{row.info3}</Typography>
                                <Typography textAlign='center' variant="body2" sx={{ background: 'rgba(6, 132, 136, 0.10)', ...bodyCellStyle }}>{row.info4}</Typography>
                            </TableCell>
                            <TableCell padding='none' sx={{
                                borderBottom: '1px solid #068488', borderRight: '1px solid #068488', borderBottomRightRadius: '16px',
                                height: '104px'
                            }}>
                                <Typography textAlign='center' variant="body2" sx={{ ...bodyCellStyle }}>{row.info5}</Typography>
                                <Typography textAlign='center' variant="body2" sx={{ background: 'rgba(6, 132, 136, 0.10)', ...bodyCellStyle }}>{row.info6}</Typography>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}