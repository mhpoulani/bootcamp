import { Box } from '@mui/material'
import React from 'react'
import bgOurTeam from '../../assets/images/bgImageOurTeam.svg'
import sogandProf from '../../assets/images/sogandProf.jpg'
import mohammadProf from '../../assets/images/mohammadProf.jpg'
import TeamCart from './TeamCart'
export const OurTeam = () => {
  const fontFamily = 'Suprime'

  const teamMembers = [
    {
      fullName: 'Sougand Salehi',
      job: 'Frontend Developer',
      image: sogandProf,
      desc: "Sougand Salehi is an 8th-semester student at Sharif University of Technology who has successfully completed two internships at VILAB laboratory in EPFL. Sougand's interests lie in the field of AI, Personalization, and Data Analysis, and she is scheduled to present her paper on 'Personalization in Generative Models' at the ECCV international conference in October. Sougand recently joined the professional international team at Vitruevin Shield, working on biosignals and frontend."

    },
    {
      fullName: 'Negar Askari',
      job: 'Frontend Developer',
      image: null,
      desc: 'Negar Askari, a silver medalist in the national physics olympiad and an 8th - semester student at Sharif University, had valuable experience in bioinformatics laboratories under the supervision of distinguished professors before joining Vitruevin Shield.Negar has been working full- time professionally on processing vital signals and frontend for over ten months.'

    },
    {
      fullName: 'Mohammad hossein Poulani',
      job: 'Frontend Developer',
      image: mohammadProf,
      desc: 'Mohammadhossein Poulani graduated from Mazandaran University of Science and Technology in 2023 and, after completing training courses and internships, with great effort and perseverance, he became a frontend developer at Vitruevin Shield. He now has nearly 10 months of international professional experience.'
    },
    {
      fullName: 'Reza Rafifar',
      job: 'Backend Developer',
      image: null,
      desc: "Reza Rafifar holds a bachelor's degree in Computer Engineering from Amol University of Innovative Technologies. Reza started programming in 2018 (before entering university) and managed to enter the job market after a year of effort. Reza has four years of experience working in international companies and has been a senior backend programmer at Vitruevin Shield for a year now."
    },
  ]
  return (
    <Box
      id='team'
      sx={{
        background: `url(${bgOurTeam}) lightgray 0px -0.597px / 100% 111.458% no-repeat`,

        height: { xs: 'auto', xl: '810px' },
        py: { xs: '24px', xl: '0' },
        backgroundSize: 'cover',
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
      <Box
        sx={{
          zIndex: 1300,
          fontSize: '32px',
          fontWeight: 700,
          color: '#fff',
          textAlign: 'center',
          pt: '64px',
          fontFamily: `${fontFamily}`,


        }}
      >
        OUR TEAM
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          mt: '54px',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        {
          teamMembers.map((item, index) => {
            return (

              <TeamCart key={index} desc={item.desc} image={item.image} fullName={item.fullName} job={item.job} />
            )
          })
        }
      </Box>
    </Box >
  )
}
export default OurTeam
