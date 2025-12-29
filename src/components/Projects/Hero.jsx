import React from 'react'
import { ArrowDownRight, Dot } from 'lucide-react'
import Button from '../ui/Button'
import Img from '../../assets/images/w1.png'

const Hero = () => {
    const data = [
        {
            name: "Mirakle",
            service: ["Web Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We partnered with Mirakle, a premium hygiene and food products brand, to develop their business from start to end. Our end-to-end services included company registration, legal compliance, brand development, marketing strategy, social media management, content creation, promotions, collaborations, e-commerce platform support, and sales optimization ensuring Mirakle’s products reached the right audience, built strong brand visibility, and achieved measurable business growth.",
        }
    ]

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 ">


                    <div>
                        <img src={Img} alt="image" className='w-full h-full object-cover' />
                    </div>
                    {data.map((d, idx) => (
                        <div className='space-y-5' key={idx}>
                            <h1 className='text-3xl uppercase font-semibold '>
                                {d.name}
                            </h1>
                            <p className='text-xl tracking-wide font-light text-justifymmmj'>{d.desc}</p>
                            {/* <Button name="Learn more" /> */}
                        </div>
                    ))}

                </div>
                {data.map((item, i) => (
                <div className='flex flex-wrap items-center gap-2 border-b pb-5' key={i}>
                    {item.service.map((s, idx) => (
                        <p key={idx} className='border px-3 py-1 rounded-3xl w-fit bg-white'>{s}</p>))}
                </div>
                ))}
            </section>
        </>
    )
}

export default Hero
