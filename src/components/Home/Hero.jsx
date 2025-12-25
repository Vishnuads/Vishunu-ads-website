import React from 'react'
import Banner from '../../assets/images/hero.webp'
import Button2 from '../ui/Button2'

const Hero = () => {
    return (
        <>
            <section className='min-h-screen relative w-full'>
                
                    <img src={Banner} alt="Hero Banner" className='absolute inset-0 pt-24 h-screen object-cover w-full z-0' />
                    <div className='max-w-6xl mx-auto  z-10'>
                        <p className='absolute top-40 left-10 text-white text-4xl font-extralight'>Vishnu Ads & Ventures®</p>
                    </div>
                    <div className='absolute bottom-5 left-0 z-10 w-full'>
                        <div className="md:flex items-center justify-between text-white max-w-6xl mx-auto px-6 space-y-3">
                            <div className=' w-[90%]'>
                                <h1 className='md:text-6xl text-4xl w-[80%] '>We Create Ads That
                                    Build Brands</h1>
                            </div>
                            <div className=' '>
                               <p  className='text-gray-300 pb-5 w-[70%] md:w-[80%] '> From strategy to storytelling, campaigns that
                                inspire, connect, and deliver real results.</p>
                                {/* <button className='text-white border px-3 py-2 flex w-fit items-center justify-center gap-2 uppercase rounded-full'>
                                    Get in Touch
                                    <span className='text-black rounded-full p-1 bg-white'> <ArrowUpRight /> </span>
                                </button> */}
                                <Button2 name="Get in Touch" link="/contact"/>

                            </div>
                        </div>
                    </div>

             
            </section>

        </>
    )
}

export default Hero
