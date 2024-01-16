import React from 'react'
import Navbar from '../components/Navbar'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import Courses from './pages/Courses'
import Events from './pages/Events'
import Publication from './pages/Publication'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Footer from '../components/Footer'
import Financialmodeling from './pages/Financialmodeling'
import Dsbootcamp from './pages/Dsbootcamp'
import Upskill from './pages/Upskill'
const App = () => {
  return (
    <>
    <Navbar/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/courses" element={ <Courses/> } />
        <Route path="/events" element={ <Events/> } />
        <Route path="/publications" element={ <Publication/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/financial-modeling" element={ <Financialmodeling/> } />
        <Route path="/dsbootcamp" element={ <Dsbootcamp/> } />
        <Route path="/upskill-kp" element={ <Upskill/> } />
      </Routes>
      
    
    </>
  )
}

export default App
