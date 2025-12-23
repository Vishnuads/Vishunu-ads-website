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

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 py-10'>
                        <div>
                            <h1 className='md:text-3xl text-2xl font-extralight tracking-wide md:leading-10'>We are a globally recognized boutique design agency, crafting strategic, high-quality solutions that amplify brand values. Our agile, independent team blends strategy, design, and innovation to deliver impactful results.</h1>
                            <br />
                            <h1 className='md:text-3xl text-2xl font-extralight tracking-wide md:leading-10'>We are a globally recognized boutique design agency, crafting strategic, high-quality solutions that amplify brand values. Our agile, independent team blends strategy, design, and innovation to deliver impactful results.</h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={MD} alt="Rajesh Sir MD" className='h-auto w-80' />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10">
                        <div>
                            <h1 className='flex items-center  gap-2 uppercase'> <Dot size={52} />
                                <span className='text-gray-500 tracking-wider'>Want to work with us?</span> </h1>
                        </div>
                        <div>
                            <h1 className='pb-4 md:text-2xl text-xl leading-9'>We’re a tight-knit crew of friends and hardcore creatives who take our work seriously - but never ourselves. If you’re driven, passionate, and ready to grow alongside a team that values both craft and camaraderie, we’d love to meet you.</h1>
                            <Button name="get in touch"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
