import React from 'react'
import Navbar from '../components/Navbar'
import Navlinks from '../components/Navlinks'
import Banner from '../components/Banner'
import CustomerFeedback from '../components/servicespages/CustomerFeedbacklp'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className="bg-white">
        <Navbar/>
        <Navlinks/>
        <Banner/>
        <CustomerFeedback/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home