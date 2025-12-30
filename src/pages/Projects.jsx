import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import CaseStudyPage from '@/components/Projects/CaseStudyPage'
import Hero from '@/components/Projects/Hero'
import Logo from '@/components/Projects/Logo'
import React from 'react'

const Projects = () => {
  return (
    <>
    <div className="bg-[#fffefa]">
        <Navbar/>
        <Hero/>
        {/* <CaseStudyPage/> */}
        <Logo/>
        <Footer/>
    </div>
      
    </>
  )
}

export default Projects
