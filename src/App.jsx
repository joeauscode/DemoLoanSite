import { useState } from 'react'
import './App.css'
import Homepage from './Componients/Homepage'
import Nav from './Componients/Nav'
import Footer from './Componients/Footer'
import { Routes, Route } from 'react-router-dom'
import About from './Componients/About'
import Contact from './Componients/Contact'
import Applynow from './Componients/Applynow'

function App() {


  return (
    <>
    <Nav/>
    <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/about-us' element={<About/>}/>
    <Route path='/contact-us' element={<Contact/>}/>
    <Route path='/apply-loan' element={<Applynow/>}/>
    </Routes>
   {/* <Footer/> */}
    </>
  )
}

export default App
