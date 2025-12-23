import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Details from '@/components/Services/Details'
import Hero from '@/components/Services/Hero'

import React from 'react'

const SingleService = () => {
    return (
        <>

            <section className='min-h-screen  bg-[#fffefa]'>
                <Navbar />
                <Hero />
                <Details />
                <Footer />
            </section>

        </>
    )
}

export default SingleService
