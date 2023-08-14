import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Register from '../components/Register'
import Admissions from '../components/Admissions'
import Home from '../components/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admisiones" element={<Admissions />} />
        
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routers