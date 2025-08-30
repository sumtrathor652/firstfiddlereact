import React from 'react'
import Header from './component/header'
import Home from './pages/Home'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
            <Route path='/brand' element={<About/>}/>
      </Routes>
      <Footer />

  
    </>
  )
}

export default App
