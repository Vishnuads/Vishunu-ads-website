import React from 'react'

const Hero = () => {
    return (
        <>
            <section>
                <div className='max-w-6xl mx-auto px-5 md:pt-30 pt-20'>
                    <div className="  py-4 flex items-center justify-center ">
                        <div className='w-[80%] mx-auto text-center md:space-y-16 space-y-5'>
                            <h1 className='text-2xl md:text-4xl lgt:text-6xl tracking-wide  '>Start Your Business the Right Way — Legally & Confidently</h1>
                            <div>
                                <p className='text-gray-500 my-5  text-lg md:px-10'>From company incorporation to intellectual property protection, we handle all your legal and compliance needs so you can focus on growing your business.</p>
                            </div>
                            <div className="md:flex-row flex flex-col items-center justify-center gap-4 ">
                                <button className='bg-black text-white hover:bg-white cursor-pointer hover:text-black px-4 py-2 border rounded-3xl transition-all duration-300'>Get Free Consultation </button>
                                <button className='bg-white text-black hover:bg-black cursor-pointer hover:text-white px-4 py-2 border rounded-3xl transition-all duration-300'>Register Your Company</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero
