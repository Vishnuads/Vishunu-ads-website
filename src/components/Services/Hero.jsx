
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ data }) => {
    return (
        <>
            <section>
                <div className='max-w-6xl mx-auto px-5 md:pt-30 pt-20'>
                    <div className="py-4 border-b my-10">
                        <h1 className='text-2xl md:text-4xl lgt:text-6xl font-semibold tracking-wide'>{data.title}</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            {data.desc.map((d, idx) => (
                                <div key={idx}>
                                    <p className='font-light text-lg'>{d}</p> <br />
                                </div>
                            ))}
                        </div>
                        <div>
                            <img src={data.img} alt="Services" className='w-full h-100 object-contain'  />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Hero
