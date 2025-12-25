import React from 'react'
import Button from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

const Details = ({ details }) => {
    return (
        <>
           
                <div className='max-w-6xl mx-auto px-5 md:pt-30 pt-20'>
                     {details.sub.map((s, idx) => (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-10 border-b px-5 pb-5"  key={idx}>
                        <div className='space-y-6'>
                            <div> <h1 className='text-2xl mb-3'>{s.head}</h1> </div>
                            {/* <div> <p className=' text-gray-500 mb-3'>Company Registration Made Simple</p></div> */}


                            {/* <Button link="/contact" name="Register Today" className="hidden md:flex" /> */}
                        </div>
                        <div className=''>
                            {/* <p className='text-lg mb-5'>We help entrepreneurs and businesses legally establish their company with all mandatory registrations under Indian law. Our experts guide you at every step—from documentation to final approval—ensuring accuracy, speed, and compliance.</p> */}
                            <p className='text-lg mb-5'>{s.para}</p>

                            {/* <div className='my-4'>
                            <ul className='list-disc'>
                                <li>
                                    <strong>ROC (Registrar of Companies) Registration </strong> <br />
                                    <span className='text-gray-500'> Register your Private Limited, LLP, One Person Company, or Partnership firm with the Ministry of Corporate Affairs.</span>
                                </li>
                                <br />
                                <li><strong> GST Registration</strong><br />
                                    <span className='text-gray-500'>   Mandatory GST registration for businesses to collect and remit taxes seamlessly.</span>
                                </li>
                                <br />
                                <li> <strong>MSME / Udyam Registration</strong>  <br />
                                    <span className='text-gray-500'>  Get government recognition to unlock subsidies, tax benefits, and easier loan approvals.</span>
                                </li>
                                <br />
                            </ul>
                        </div> */}
                            <div className='space-y-6'>
                                <p className='flex items-center gap-2 mb-2'> <CheckCircle /> Legally recognized business </p>
                                <p className='flex items-center gap-2 mb-2'> <CheckCircle /> Compliance with government regulations </p>
                                <p className='flex items-center gap-2 mb-2'> <CheckCircle /> Eligibility for tax benefits & funding </p>
                                <p className='flex items-center gap-2 mb-2'> <CheckCircle /> Faster approvals with expert handling </p>
                            </div>
                            {/* <Button link="/contact" name="Register Today" className="block mt-5" /> */}
                        </div>
                    </div>
))}
                    {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-20 border-b px-5 pb-5">
                        <div className='space-y-6'>
                            <div> <h1 className='text-2xl mb-3'>Trademark, Design & Copyright Registration</h1> </div>
                            <div> <p className=' text-gray-500 mb-3'>Protect What Makes Your Brand Unique</p></div>
                            <Button link="/contact" name="Product Your Brand" className='hidden md:flex' />
                        </div>
                        <div className=''>
                            <p className='text-lg mb-5'>Your ideas deserve to be protected. We secure your brand identity and creative work so it remains distinctly yours.</p>

                            <div className='my-4'>
                                <ul className='list-disc'>
                                <li>
                                    <strong>Trademark Registration</strong> <br />
                                    <span className='text-gray-500'>Secure your brand name, logo, tagline, or symbol.</span>
                                </li>
                                <br />
                                <li><strong> Design Registration</strong><br />
                                    <span className='text-gray-500'> Protect the visual appearance of your products.</span>
                                </li>
                                <br />
                                <li> <strong>Copyright Registration</strong>  <br />
                                    <span className='text-gray-500'> Safeguard creative works such as content, music, videos, software, and designs.</span>
                                </li>
                                <br />
                            </ul>
                                <div className=''>
                                    <p className='flex items-center gap-2 mb-2'> <CheckCircle /> Exclusive ownership rights </p>
                                    <p className='flex items-center gap-2 mb-2'> <CheckCircle />Legal protection against infringement </p>
                                    <p className='flex items-center gap-2 mb-2'> <CheckCircle /> Increased brand credibility </p>
                                    <p className='flex items-center gap-2 mb-2'> <CheckCircle /> Long-term business security </p>
                                </div>
                            </div>
                            <Button link="/contact" name="Product Your Brand" className="block md:hidden" />
                        </div>

                    </div> */}

                </div>
            
        </>
    )
}

export default Details
