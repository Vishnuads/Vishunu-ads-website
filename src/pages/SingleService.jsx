import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Details from '@/components/Services/Details'
import Hero from '@/components/Services/Hero'
import React from 'react'
import { useParams } from 'react-router-dom'
import { serviceData } from '@/components/serviceData'

const SingleService = () => {

    const { name } = useParams();
    const service = serviceData[name];

    return (
        <>
            <section className='min-h-screen  bg-[#fffefa]'>
                <Navbar />
                <Hero data={service}/>
                <Details details={service}/>
                <Footer />
            </section>

        </>
    )
}

export default SingleService
