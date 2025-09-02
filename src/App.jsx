import React from 'react'
import Header from './component/Header'
import Home from './pages/Home'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Brand from './pages/Brand'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'
import PressRelease from './pages/PressRelease'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/ourteam' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pressrelease' element={<PressRelease />} />

      </Routes>



      <Footer />


    </>
  )
}

export default App
