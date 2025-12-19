import { Dot } from 'lucide-react'
import React from 'react'


const Benefits = () => {

    const data = [
        { id: 1, title: "Passion-Driven", desc: "Purpose-driven creative execution crafted to elevate brands, connect audiences, and convert attention into measurable outcomes." },
        { id: 2, title: "Innovation at Every Turn", desc: "We blend creativity with modern technology to deliver campaigns that break clutter and spark engagement." },
        { id: 3, title: "Data + Creativity = Impact", desc: "Insights drive our strategy while creative storytelling captures attention—this combination delivers results that matter." },
        { id: 4, title: "Your Goals Are Our Mission", desc: "We align our work with your business objectives, ensuring every deliverable supports your long-term success." },
        { id: 5, title: "Results-Focused", desc: "We measure impact, optimize performance, and ensure every rupee spent translates into meaningful brand growth." },
    ]

    return (
        <>
            <section className='relative py-20 max-w-6xl mx-auto min-h-screen overflow-hidden'>
                <div className="text-center  md:pb-20 pb-10">
                    <p className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'><Dot />
                        benefits</p>
                    <h1 className=' md:text-6xl text-4xl'>Why Choose Us?</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className='px-5 pb-5'>
                        <h1 className='md:text-4xl text-2xl w-[80%] mb-4'>We’re not here to simply follow trends. We set them.</h1>
                        <p className='text-gray-400 text-md'>Purpose-driven creative execution crafted to elevate brands, connect audiences, and convert attention into measurable outcomes.</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
                            {data.map((d) => (
                                <div key={d.id} className="border px-5 py-4 bg-white transition-all duration-500 ease-in-out hover:shadow-xl">
                                    <p className='border rounded-full px-4 py-2 w-fit mb-3'>{d.id}</p>
                                    <h1 className='text-xl font-semibold mb-2'>{d.title}</h1>
                                    <p className='text-gray-400 text-sm'>{d.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Benefits
