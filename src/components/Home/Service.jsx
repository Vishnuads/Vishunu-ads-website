import { Dot } from 'lucide-react'
import React from 'react'
import ServiceCard from './ServiceCard'



const Service = () => {
    return (
        <>
            <section className='relative py-20 max-w-6xl mx-auto pb-10 overflow-hidden'>
                <div className="text-center  pb-10 border-b">
                    <p className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'><Dot /> what we offer?</p>
                    <h1 className=' text-6xl'>Services</h1>
                    <p className='md:text-2xl px-5 text-xl  tracking-wide font-extralight md:w-[68%] pt-10  mx-auto text-center'>Our team brings developers, designers, strategists, and analysts together to craft seamless digital experiences. We don’t cut corners - every product is built with precision, staying true to its original vision. </p>
                </div>
            </section>
            <ServiceCard/>

        </>
    )
}

export default Service
