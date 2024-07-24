import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { Box, Container } from '@mui/material'
import Footer from './components/Footer/Footer'
import { Routes, Route, Outlet } from "react-router-dom";
import Register from './components/Register/Register';
import InformationForcash from './components/Register/InformationForcash';
import { Toaster } from 'react-hot-toast';
import RegisterOrLogin from './components/Header/RegisterOrLogin';
import Login from './components/Register/Login';

function App() {
  const Dashboard = () => {
    return (
      <>
        <Header />
          <Outlet />
        <Footer />
      </>
    )
  }
  return (
    <Box>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />}
          children={
            <Route path='/' element={<Content />} />
          } />
        <Route path="/register" element={<Register />} />
        <Route path="/inforMationForPayment/:id" element={<InformationForcash />} />
        <Route path="/registerOrLogin" element={<RegisterOrLogin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  )
}

export default App
