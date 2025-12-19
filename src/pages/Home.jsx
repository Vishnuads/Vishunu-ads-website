import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '@/components/Home/Hero'
import Works from '@/components/Home/Works'
import About from '@/components/Home/About'
import Service from '@/components/Home/Service'
import Benefits from '@/components/Home/Benefits'
import Process from '@/components/Home/Process'
import Insights from '@/components/Home/Insights'
import Footer from '@/components/Home/Footer'
import Testimonials from '@/components/Home/Testimonials'
import  Parallax  from '@/components/Home/Parallax'
import Test from '@/components/Home/Test'
import Social from '@/components/Home/Social'


function Home() {
  return (
    <>
      <div className="bg-[#fffefa]">
    {/* <ParallaxHero/> */}
  
        <Navbar />
        <Hero />
        <Parallax/>
        <Works />
        <About/>
        <Service/>
        <Benefits/>
        <Process/>
        {/* <Testimonials/> */}
         <Test/>
        <Insights/>
        <Social/>
        <Footer/>
      
      
      </div>


    </>
  )
}
export default Home