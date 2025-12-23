import React from 'react'
import { ArrowDownRight, Dot } from 'lucide-react'
import Button from '../ui/Button'
import Img from '../../assets/images/w1.png'
 
const Hero = () => {
    return (
        <>
            <section className='max-w-6xl mx-auto px-5 min-h-screen pt-20'>
                <div className="flex items-center justify-between py-10 border-b">
                    <h1 className='lg:text-6xl md:text-5xl text-3xl  font-semibold'>Portfolio </h1>
                    <div className='border rounded-full'>
                        <ArrowDownRight size={44} className='bg-black text-white p-2 m-2 rounded-full' />
                    </div>
                </div>
                <div>
                    <p className='md:text-4xl my-3 text-xl tracking-wider font-extralight'>We've helped businesses grow for the past 12 years. From small time, family owned businesses to Silicon Valley giants - our marketing and design teams have empowered both of these worlds.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 border-b">
                    <div>
                        <img src={Img} alt="image" className='w-full h-full object-cover' />
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-3xl font-semibold '>Mirakle</h1>
                        <div className='flex flex-wrap items-center gap-2'>
                        <p className='border px-3 py-1 rounded-3xl w-fit'>Marketing</p>
                        <p className='border px-3 py-1 rounded-3xl w-fit'>Video Production</p>
                         <p className='border px-3 py-1 rounded-3xl w-fit'>Digital Design</p>
                        </div>
                        <p className='text-xl tracking-wide font-light'>We provide end-to-end digital solutions to help brands grow online. From result-driven digital marketing and engaging video production to modern web development, eye-catching social media posters, and complete social media handling—we craft strategies and visuals that connect your brand with the right audience and deliver measurable impact.</p>
                        <Button name="Learn more"/>
                    </div>
                </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 border-b">
                    
                    <div className='space-y-5'>
                        <h1 className='text-3xl font-semibold '>Life Plus Ayurveda</h1>
                        <div className='flex flex-wrap items-center gap-2'>
                        <p className='border px-3 py-1 rounded-3xl w-fit'>Marketing</p>
                        <p className='border px-3 py-1 rounded-3xl w-fit'>Video Production</p>
                         <p className='border px-3 py-1 rounded-3xl w-fit'>Digital Design</p>
                        </div>
                        <p className='text-xl tracking-wide font-light'>We provide end-to-end digital solutions to help brands grow online. From result-driven digital marketing and engaging video production to modern web development, eye-catching social media posters, and complete social media handling—we craft strategies and visuals that connect your brand with the right audience and deliver measurable impact.</p>
                        <Button name="Learn more"/>
                    </div>
                    <div>
                        <img src={Img} alt="image" className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
