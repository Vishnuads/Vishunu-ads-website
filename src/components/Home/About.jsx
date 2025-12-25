import React from 'react'
import { Dot } from 'lucide-react'
import { motion } from 'framer-motion'


const About = () => {
    return (
        <>
            <section
                className='relative pt-20 max-w-6xl mx-auto  overflow-hidden'>
                <div className="text-center  pb-10">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3
                        }}
                        viewport={{once : true}}
                        className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'> About us <Dot /></motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3
                        }}
                        viewport={{once : true}}
                        className=' md:text-6xl text-4xl'>Who We Are?</motion.h1>
                </div>

                <p className='md:text-3xl text-xl font-extralight md:w-[85%] mx-auto tracking-wide md:leading-10 px-5'>At Vishnu Ads, we don’t just create ads — we build experiences that
                    engage and drive results. With over 18+ years of experience, we
                    specialize in transforming ideas into memorable campaigns. Whether
                    you're a startup or an established brand, our tailor-made solutions are
                    designed to help you succeed in an ever-evolving marketplace.</p>
            </section>

        </>
    )
}

export default About
