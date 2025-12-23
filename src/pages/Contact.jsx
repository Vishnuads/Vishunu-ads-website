import Faq from '@/components/Contact/Faq'
import Hero from '@/components/Contact/Hero'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="bg-[#fffefa]">
        <Navbar/>
        <Hero/>
        <Faq/>
        <Footer/>

    </div>
      
    </>
  )
}

export default Contact
