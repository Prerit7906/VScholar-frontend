// src/App.js
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
// import Career from './pages/Career'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {
  return (
    <div className="div">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/career" element={<Career />} /> */}
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
