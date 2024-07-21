import { Box, Typography } from '@mui/material'
import React from 'react'

const CoursePlanCart = ({ number, title, titleColor }) => {
    return (
        <Box
            sx={{
                height: '314px',
                width: '316px',
                background: 'rgba(25, 42, 52, 0.70)',
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.54)',
                border: '1px solid #192A34',
                borderRadius: '8px',
                py: '16px',
                px: '12px'
            }}
        >
            <Box
                sx={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
                    pb: '14px'
                }}
            >

                <Typography
                    sx={{
                        fontSize: '16px',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        color: '#fff',
                        textAlign: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        gap: 1
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            color: '#fff',
                            textAlign: 'center',
                        }}
                    >
                        Session
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            color: '#fff',
                            textAlign: 'center',
                        }}
                    >

                        {number}
                    </Typography>
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        color: `${titleColor}`,
                        textAlign: 'center'
                    }}
                >
                    {title}
                </Typography>
            </Box>

            <Box sx={{ mt: '14px' }}>
                {number === 5 && (
                    <>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >
                            Introduction to React.js and its Ecosystem
                            Setting Up a React Project with Create React App
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'

                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Fase Reviewing of Java Script, HTML, CSS
                        </Typography>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500,
                                mt: '16px'
                            }}
                        >React Component Basics</Typography>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >JSX and Component Lifecycle</Typography>
                        <Typography
                            sx={{
                                mt: '24px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Functional and Class Components</Typography>
                        <Typography
                            sx={{

                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Props and State Management</Typography>
                    </>
                )}
                {number === 1 && (
                    <>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >
                            Overview of Full-Stack Development
                        </Typography>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >
                            Introduction to Django, PostgreSQL, & React.js
                        </Typography>
                        <Typography
                            sx={{
                                mt: '2px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Fast Reviewing of Python essentials
                        </Typography>
                        <Typography
                            sx={{
                                mt: '24px',
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >
                            Setting Up the Development Environment
                        </Typography>
                        <Typography
                            sx={{
                                mt: '2px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Installing Python, Django, PostgreSQL, and Node.js
                        </Typography>
                        <Typography
                            sx={{
                                mt: '2px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Installing Python, Django, PostgreSQL, and Node.js
                        </Typography>
                        <Typography
                            sx={{
                                mt: '24px',
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >
                            Version Control with Git and GitHub
                        </Typography>
                        <Typography
                            sx={{
                                mt: '2px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Basic Git Commands
                        </Typography>
                        <Typography
                            sx={{
                                mt: '2px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Creating and Managing Repositories
                        </Typography>
                    </>
                )
                }
                {
                    number === 2 && (
                        <>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Introduction to Django Framework
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Creating a Django Project and Application
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Django Project Structure
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Django Models and Migrations
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Basic CRUD Operations with Django Admin
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '24px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Creating Models</Typography>
                            <Typography
                                sx={{

                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Running Migrations</Typography>
                        </>
                    )
                }
                {
                    number === 3 && (
                        <>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Introduction to PostgreSQL <br />
                                Setting Up and Configuring PostgreSQL <br />
                                Connecting Django to PostgreSQL <br />
                                Database Migrations and Management <br />
                                Querying the Database with Django ORM <br />
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '24px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Fast Reviewing of SQL Essentials
                            </Typography>
                        </>
                    )
                }
                {
                    number === 4 && (
                        <>
                            <Typography
                                sx={{
                                    mb: '24px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Introduction to RESTful APIs
                            </Typography>
                            <Typography
                                sx={{
                                    nmt: '24px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Django REST Framework (DRF)

                            </Typography>
                            <Typography
                                sx={{
                                    nmt: '24px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >

                                Testing APIs with Postman
                            </Typography>

                            <Typography
                                sx={{
                                    mt: '40px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Setting Up DRF
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Creating Serializers
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Building API Views and Endpoints
                            </Typography>

                        </>)
                }

                {
                    number === 6 && (
                        <>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                State Management with Hooks <br />
                                React Router for Single Page Applications (SPA) <br />
                                Form Handling and Validation<br />

                            </Typography>
                            <Typography
                                sx={{
                                    mt: '30px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                useState, useEffect, and Custom Hooks
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Setting Up React Router
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Creating and Navigating Routes
                            </Typography>
                        </>
                    )
                }
                {number === 7 && (
                    <>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >
                            Introduction to Axios for HTTP Requests <br />
                            Fetching Data from Django APIs <br />
                            State Management with Redux (Optional)<br />

                        </Typography>
                        <Typography
                            sx={{
                                mt: '30px',
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 500
                            }}
                        >
                            Handling Authentication and Authorization

                        </Typography>
                        <Typography
                            sx={{
                                mt: '24px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            JWT Tokens
                        </Typography>
                        <Typography
                            sx={{
                                mt: '2px',
                                display: 'flex',
                                gap: 1,
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: 400,
                                alignItems: 'center',
                                pl: '5px'
                            }}
                        >
                            <Box
                                sx={{
                                    height: '3px',
                                    width: '3px',
                                    background: '#fff',
                                    borderRadius: '100px'
                                }}
                            ></Box>
                            Protecting Routes in React
                        </Typography>
                    </>
                )}
                {
                    number === 8 && (
                        <>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Preparing Django for Production <br />
                                Deploying PostgreSQL Databases<br />

                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Setting Up Gunicorn and Nginx
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Configuring Environment Variables
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '16px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Deploying React Applications

                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Building React for Production
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Deploying to Platforms like Heroku, AWS, or Vercel
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '16px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}
                            >
                                Best Practices and Final Project Review
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Code Reviews and Optimization
                            </Typography>
                            <Typography
                                sx={{
                                    mt: '2px',
                                    display: 'flex',
                                    gap: 1,
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    alignItems: 'center',
                                    pl: '5px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '3px',
                                        width: '3px',
                                        background: '#fff',
                                        borderRadius: '100px'
                                    }}
                                ></Box>
                                Final Project Presentation and Q&A
                            </Typography>
                        </>
                    )
                }
            </Box>
        </Box>
    )
}

export default CoursePlanCart