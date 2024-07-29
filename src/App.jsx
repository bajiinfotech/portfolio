import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Header/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import { useEffect } from 'react';
import './Responsive/Mobile.css'



function App() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/services' element={<ServicesPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
