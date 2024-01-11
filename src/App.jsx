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
      </Routes>
      
    
    </>
  )
}

export default App
