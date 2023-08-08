import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Navlinks from '../components/Navlinks'
import Contactusdetails from '../components/servicesdetails/Contactusdetails'

const Contactus = () => {
  return (
    <div className="bg-white">
    <Navbar/>
    <Navlinks/>
    <Contactusdetails/>
  <Footer/>
</div>
  )
}

export default Contactus