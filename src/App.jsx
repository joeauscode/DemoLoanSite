import { useState } from 'react'
import './App.css'
import Homepage from './Componients/Homepage'
import Nav from './Componients/Nav'
import Footer from './Componients/Footer'
import { Routes, Route } from 'react-router-dom'
import About from './Componients/About'

function App() {


  return (
    <>
    <Nav/>
    <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/about-us' element={<About/>}/>
    </Routes>
   {/* <Footer/> */}
    </>
  )
}

export default App
