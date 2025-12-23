import { Dot } from 'lucide-react'
import React from 'react'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

const Service = () => {
    return (
        <>
            <section className='relative py-20 max-w-6xl mx-auto pb-10 overflow-hidden'>
                <div className="text-center  pb-10 border-b">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.3
                        }}
                        className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'><Dot /> what we offer?</motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.3
                        }}
                        className=' text-6xl'>Services</motion.h1>
                    <p className='md:text-2xl px-5 text-xl  tracking-wide font-extralight md:w-[68%] pt-10  mx-auto text-center'>Our team brings developers, designers, strategists, and analysts together to craft seamless digital experiences. We don’t cut corners - every product is built with precision, staying true to its original vision. </p>
                </div>
            </section>
      
                <ServiceCard />
           

        </>
    )
}

export default Service
