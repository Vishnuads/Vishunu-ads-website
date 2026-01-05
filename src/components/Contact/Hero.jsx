import React, { useState } from 'react'
import { ArrowDownRight, Dot } from 'lucide-react'

const Hero = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({});
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyhsrc2-QK5tY7RRKHCoGsYTCk0Y0d33beEyEqzM_tCtqCsS-7W48aN6hS5NELiJ9DLYA/exec';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({});
    }

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is Required";

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }
        if (!formData.message.trim()) newErrors.message = "Message is Required";

        setError(newErrors);
        return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            // console.log("Success");
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
            setSuccess(true)
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <section className='relative '>
            <div className="md:max-w-6xl mx-auto px-5 pt-20">
                <div className="flex items-center justify-between py-10 border-b">
                    <h1 className='lg:text-6xl md:text-5xl text-3xl  font-semibold'>Contact</h1>
                    <div className='border rounded-full'>
                        <ArrowDownRight size={44} className='bg-black text-white p-2 m-2 rounded-full' />
                    </div>
                </div>

                <div className=' py-10'>
                    <div>
                        <h1 className='md:text-3xl text-2xl font-extralight tracking-wide md:leading-10'>
                            <b>Vishnu Ads & Ventures</b>, we are always seeking visionary businesses and professionals who share our passion for growth, innovation, and excellence. If you are interested in exploring <b>strategic partnerships, collaborations, or joint ventures</b>, we’d love to hear from you.</h1>
                        <br />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
                    <div>
                        <h1 className='flex items-center  gap-2 uppercase'> <Dot size={52} />
                            <span className='text-gray-500 tracking-wider'>Get in touch</span> </h1>

                    </div>
                    <div className='border p-5 col-span-2'>
                        <form onSubmit={handleSubmit} className='space-y-5 text-black'>
                            <div>
                                <input
                                    id='name'
                                    name='name'
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='border-b w-full p-3 '
                                    type="text" />

                                {error.name && <p className="text-red-500 text-xs mt-1">{error.name}</p>}
                            </div>
                            <div>
                                <input
                                    id='email'
                                    name='email'
                                    placeholder='Email '
                                    onChange={handleChange}
                                    value={formData.email}
                                    className='border-b w-full p-3'
                                    type="email" />

                                {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
                            </div>
                            <div>
                                <input
                                    id='phone'
                                    name='phone'
                                    placeholder='Phone'
                                    onChange={handleChange}
                                    value={formData.phone}
                                    className='border-b w-full p-3'
                                    type="text" />
                                {error.phone && <p className="text-red-500 text-xs mt-1">{error.phone}</p>}
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id="message"
                                    onChange={handleChange}
                                    placeholder='Message'
                                    value={formData.message}
                                    className='border-b w-full p-3'>
                                </textarea>

                                {error.message && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                            </div>

                            <div className='md:flex items-center gap-5'>
                                <button type='submit' disabled={loading} className='px-8 py-2 border cursor-pointer rounded-full'>
                                    {loading ? 'Submitting...' : 'Submit'}  </button>
                                {success &&
                                    <>
                                        <h1 className='text-center mt-5 md:mt-0'> ✅ Thank you For Submitting the Form. Our team will contact you soon.</h1>

                                    </>
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            {/* {success &&
                <>
                    <h1>Thank you For Submitting the Form</h1>
                    <p>Our team will contact you soon.</p>
                </>
            } */}
        </section>
    )
}

export default Hero
