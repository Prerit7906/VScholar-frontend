import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Career from './pages/Career'

function App() {
  return (
    <div className='div'>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='/career' element={<Career/>}/>
      </Routes>
    </div>
  )
}

export default App
