import React from 'react'
import { ArrowDownRight } from 'lucide-react'
import Img from '../../assets/images/w1.png'

const Hero = () => {
    const data = [
        {
            name: "Mirakle",
            service: ["Web Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We partnered with Mirakle, a premium hygiene and food products brand, to develop their business from start to end. Our end-to-end services included company registration, legal compliance, brand development, marketing strategy, social media management, content creation, promotions, collaborations, e-commerce platform support, and sales optimization ensuring Mirakle’s products reached the right audience, built strong brand visibility, and achieved measurable business growth.",
        },
        {
            name: "Life Plus",
            service: ["App Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We partnered with Mirakle, a premium hygiene and food products brand, to develop their business from start to end. Our end-to-end services included company registration, legal compliance, brand development, marketing strategy, social media management, content creation, promotions, collaborations, e-commerce platform support, and sales optimization ensuring Mirakle’s products reached the right audience, built strong brand visibility, and achieved measurable business growth.",
        }
    ]

    return (
        <>
            <section className='max-w-6xl mx-auto px-5  pt-20'>
                <div className="flex items-center justify-between md:py-10 py-5 border-b">
                    <h1 className='lg:text-6xl md:text-5xl text-3xl  font-semibold'>Portfolio </h1>
                    <div className='border rounded-full'>
                        <ArrowDownRight size={44} className='bg-black text-white p-2 m-2 rounded-full' />
                    </div>
                </div>
                <div>
                    <p className='md:text-4xl my-3 text-xl tracking-wider font-extralight'>We've helped businesses grow for the past 12 years. From small time, family owned businesses to Silicon Valley giants - our marketing and design teams have empowered both of these worlds.</p>
                </div>
                {data.map((d, idx) => (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 " key={idx}>
                        <div className={` ${idx % 2 == 0 ? 'md:order-1' : 'md:order-2'} `}>
                            <img src={Img} alt="image" className='w-full h-full object-cover' />
                        </div>

                        <div className={`space-y-4 md:col-span-2 ${idx % 2 == 0 ? 'md:order-2' : 'md:order-1'} `} >
                            <h1 className='text-3xl uppercase font-semibold '>
                                {d.name}
                            </h1>
                            <p className='text-xl tracking-wide font-light text-justifyy'>{d.desc}</p>
                            {/* <Button name="Learn more" /> */}
                            
                        </div>

                        <div className='flex flex-wrap items-center gap-2 border-b pb-5 md:col-span-3 order-3' >
                            {d.service.map((i, id) => (
                                <p key={id} className='border font-light px-3 py-1 rounded-3xl w-fit bg-white'>{i}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Hero
