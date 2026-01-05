import { ArrowDownRight, Dot } from 'lucide-react'
import React from 'react'
import MD from '../../assets/images/MD-color.png'
import Button from '../ui/Button'

const Hero = () => {
    return (
        <>
            <section className='min-h-screen pt-20'>
                <div className="md:max-w-6xl mx-auto px-5">
                    <div className="flex items-center justify-between py-10 border-b">
                        <h1 className='lg:text-6xl md:text-5xl text-3xl font-semibold'>About </h1>
                        <div className='border rounded-full'>
                            <ArrowDownRight size={44} className='bg-black text-white p-2 m-2 rounded-full' />
                        </div>
                    </div>

                    <div className=' md:py-10 py-5'>
                        <div className="">

                            {/* Intro */}
                            <h1 className="md:text-xl text-lg font-light tracking-wide">
                               Vishnu Ads & Ventures is a results-driven digital marketing and branding agency with 12+ years of industry expertise, helping businesses build a strong digital presence and achieve measurable growth. We specialize in SEO, performance marketing, brand strategy, AI-powered content, and high-performance web solutions that enhance visibility, credibility, and conversions. By combining data-driven strategy, creativity, and advanced technology, we empower brands to scale sustainably in a competitive digital landscape.
                            </h1>

                            <br />

                            {/* Services Overview */}
                            {/* <h1 className="md:text-xl text-lg font-light tracking-wide">
                                We create AI-powered video editing and visual storytelling solutions that deliver high-impact content for social media, advertising, and brand campaigns, ensuring faster turnaround and maximum engagement. Our promotion and brand collaboration services connect businesses with the right creators and platforms to amplify reach and trust. We also design high-performance websites and e-commerce platforms that blend elegant design with seamless functionality. By integrating strategy, creativity, technology, and AI, we empower brands for long-term success in a competitive digital landscape.
                            </h1> */}
                            <br />
                        </div>

                        {/* <div className='flex items-center justify-center'>
                            <img src={MD} alt="Rajesh Sir MD" className='h-auto w-80' />
                        </div> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
                        <div>
                            <h1 className='flex items-center  gap-4 uppercase'> <span className='w-2 h-2 bg-black rounded-full'></span>
                                <span className='text-gray-800 md:text-2xl text-xl tracking-wider'>RAJESH RAVINDRAN</span>
                            </h1>
                            <p className='text-gray-500 tracking-wider'>  Founder & Managing Director</p>
                        </div>
                        <div className='col-span-2'>
                            <h1 className='pb-4 md:text-xl text-lg md:leading-9'>The visionary behind our Team, with roots in Coimbatore, Rajesh began his advertising journey in 2006. He has promoted over 280 movies and partnered with 40+ brands, building a strong presence in the advertising and film industries. His leadership and industry insight paved the way for strategic alliances within the advertising and marketing community, enabling meaningful collaborations with agencies, media partners, and brand stakeholders.</h1>
                            <q> <span className='text-xl font-light'>The spark behind our wildest ideas. If you can dream it, He can make it happen </span></q>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
                        <div>
                            <h1 className='flex items-center  gap-4 uppercase'> <span className='w-2 h-2 bg-black rounded-full'></span>
                                <span className='text-gray-800 md:text-2xl text-xl tracking-wider'>SANGEETHA PRIYA</span> </h1>
                            <p className='text-gray-500 tracking-wider '> Co-Founder & Director</p>
                        </div>
                        <div className='col-span-2'>
                            <h1 className='pb-4 md:text-xl text-lg md:leading-9'>A seasoned digital strategist with a strong foundation in software engineering, Priya brings extensive experience working with leading brands across India. As a key force behind Vishnu Ads & Ventures’ digital initiatives, she drives innovative marketing strategies, oversees the agency’s digital presence, and enhances audience engagement across platforms. Through seamless collaboration with internal teams and strategic partners, she delivers high-impact digital solutions that strengthen brand performance and elevate client success.</h1>
                            <q> <span className='text-xl font-light'>Where technology meets strategy, she transforms ideas into impactful digital experiences </span></q>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
