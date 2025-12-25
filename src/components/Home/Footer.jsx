import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'

const Footer = () => {
    return (
        <>

            <section className='bg-[#fffefa] '>
                <div className='md:max-w-6xl mx-auto px-5 pt-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-5 ">
                        <div className='mb-3'>
                            <p className='text-gray-400 mb-2'>Get in Touch</p>
                            <Link to="mailto:contact@vishnuads.com" target="_blank">
                                <h1 className='flex items-center font-light gap-2 md:text-4xl text-2xl mb-2'> <span className='h-4 w-4 rounded-full bg-black border-2 '></span>
                                    contact@vishnuads.com
                                </h1>
                            </Link>
                            <p className='md:text-4xl text-2xl font-light'>(+91) 85318 18181</p>

                        </div>
                        <div>
                            <div className="grid md:grid-cols-3">
                                <div className='mb-3 '>
                                    <p className='text-gray-400 mb-2 '>Our Address</p>
                                    <p className='leading-7'>9, David Towers, 5th Floor, Ashoknagar Main Road, Kodambakkam, Chennai, Tamil Nadu 600024
                                        India</p>
                                </div>
                                <div className="col-span-1 md:col-span-2 grid grid-cols-2">
                                    <div className='md:flex justify-center mb-3 '>
                                        <div className='space-y-3'>
                                            <p className='text-gray-400 mb-2'>Follow us</p>
                                            <p><Link>Instagram</Link></p>
                                            <p> <Link>LinkedIn</Link> </p>
                                            <p>X</p>
                                            <p>Facebook</p>
                                        </div>
                                    </div>
                                    <div className='md:flex justify-center mb-3 '>
                                        <div className='space-y-3'>
                                            <p className='text-gray-400 mb-2'>Menu</p>
                                            <p> <Link to="/"> Home</Link> </p>
                                            <p><Link to="/projects"> Projects</Link></p>
                                            <p><Link to="/about"> About</Link></p>
                                            <p><Link to="/"> Blog</Link></p>
                                            {/* <p><Link> Contact</Link></p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className='lg:text-[170px] md:text-[100px] sm:text-[52px] text-[44px] tracking-wider text-center'>VISHNU ADS</h1>
                </div>
            </section>

        </>
    )
}

export default Footer
