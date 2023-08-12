import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Routers from '../router/Routers'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
    <CustomNavbar />
    <div className='h-screen'>
        <Routers />
    </div>
    <Footer />
    </>
  )
}

export default Layout