import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ data }) => {
    return (
        <>
            <section>
                <div className='max-w-6xl mx-auto px-5 md:pt-30 pt-20'>
                    <div className="  py-4 flex items-center justify-center ">
                        <div className='w-[80%] mx-auto text-center md:space-y-16 space-y-5'>
                            <h1 className='text-2xl md:text-4xl lgt:text-6xl tracking-wide  '>{data.title}</h1>
                            <div>
                                <p className='text-gray-500 my-5  text-lg md:px-10'>{data.desc}</p>
                            </div>
                            <div className="md:flex-row flex flex-col items-center justify-center gap-4 ">
                                <Link to="/contact">
                                    <button className='bg-black text-white hover:bg-white cursor-pointer hover:text-black px-4 py-2 border rounded-3xl transition-all duration-300'>Get Free Consultation </button>
                                </Link>

                                <Link to="/contact">
                                    <button className='bg-white text-black hover:bg-black cursor-pointer hover:text-white px-4 py-2 border rounded-3xl transition-all duration-300'>Register Your Company</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero
