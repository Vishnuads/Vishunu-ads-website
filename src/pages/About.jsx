import Approach from '@/components/About/Approach'
import Hero from '@/components/About/Hero'
import Logos from '@/components/About/Logos'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const About = () => {
    return (
        <>
            <div className="bg-[#fffefa]">
                <Navbar />
                <Hero />
                <Logos />
                <Approach />
                <Footer />
            </div>
        </>
    )
}

export default About
