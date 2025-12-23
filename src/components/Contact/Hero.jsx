import React from 'react'
import { ArrowDownRight, Dot } from 'lucide-react'

const Hero = () => {
    

    return (
        <section className='min-h-screen pt-20'>
            <div className="md:max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between py-10 border-b">
                    <h1 className='lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-semibold'>Contact</h1>
                    <div className='border rounded-full'>
                        <ArrowDownRight size={44} className='bg-black text-white p-2 m-2 rounded-full' />
                    </div>
                </div>

                <div className=' py-10'>
                    <div>
                        <h1 className='md:text-3xl text-2xl font-extralight tracking-wide md:leading-10'> <strong>
                            Have an idea?</strong> We're always looking for passionate clients and talented professionals to join us in creating impactful work. Whether you have a bold vision you want to bring to life or expertise to contribute, let’s collaborate and make something great together.</h1>
                        <br />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
                    <div>
                        <h1 className='flex items-center  gap-2 uppercase'> <Dot size={52} />
                            <span className='text-gray-500 tracking-wider'>Get in touch</span> </h1>
                    </div>
                    <div className='border p-5 col-span-2'>
                        <form action="" className='space-y-5 text-black'>
                            <input
                                id='name'
                                name='name'
                                placeholder='Name*'
                                className='border-b w-full p-3 '
                                type="text" />

                            <input
                                id='email'
                                name='email'
                                placeholder='Email*'
                                className='border-b w-full p-3'
                                type="email" />

                            <input
                                id='phone'
                                name='phone'
                                placeholder='Phone'
                                className='border-b w-full p-3'
                                type="text" />

                            <textarea name="mes" id="mes" placeholder='Message' className='border-b w-full p-3'></textarea>
                            <div>
                                <button type='submit' className='px-8 py-2 border rounded-full'> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
               

            </div>
        </section>
    )
}

export default Hero
