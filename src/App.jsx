import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { Box } from '@mui/material'
import Footer from './components/Footer/Footer'
import { Routes, Route, Outlet } from "react-router-dom";
import Register from './components/Register/Register';
import InformationForcash from './components/Register/InformationForcash';

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
      <Routes>
        <Route path="/" element={<Dashboard />}
          children={
            <Route path='/' element={<Content />} />
          } />
        <Route path="/register" element={<Register />} />
        <Route path="/inforMationForPayment" element={<InformationForcash />} />
      </Routes>
    </Box>
  )
}

export default App
