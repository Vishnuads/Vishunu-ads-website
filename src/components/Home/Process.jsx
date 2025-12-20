import React from 'react'
import { Dot } from 'lucide-react'
import P1 from '../../assets/images/process/1.png'
import P2 from '../../assets/images/process/2.png'
import P3 from '../../assets/images/process/3.png'
import P4 from '../../assets/images/process/4.png'

const Process = () => {

    const process = [
        {
            id: 1,
            title: "Discover & Define",
            desc: "Every great brand starts with a conversation. We understand your vision, shape your story, and build a strategic roadmap that defines who you are and where you’re headed.",
            img: P1
        },
        {
            id: 2,
            title: "Create & Build",
            desc: "From legal setup to brand identity, we transform your idea into a complete brand. We design your visuals, voice, and product crafting every detail to reflect your purpose.",
            img: P2
        },
        {
            id: 3,
            title: "Launch & Amplify",
            desc: "We bring your brand into the spotlight through powerful ads, compelling content, influencer collaborations, and a bold marketing launch that creates instant traction.",
            img: P3
        },
        {
            id: 4,
            title: "Grow & Expand",
            desc: "With strong digital marketing and global distribution support, we take your brand beyond borders—turning local presence into worldwide recognition.",
            img: P4
        }
    ]

    return (
        <>
            <section className='relative py-10 max-w-6xl mx-auto min-h-screen overflow-hidden'>
                <div className="text-center  pb-10">
                    <p className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'><Dot />
                        How we work</p>
                    <h1 className=' md:text-7xl text-4xl'>Process</h1>
                </div>
                <p className=' text-xl font-light md:w-[60%] text-center mx-auto  px-5'>To ensure a seamless and effortless briefing on your side we have set up a simple and efficient process that will help us get started working together as quickly as possible</p>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20 px-5'>
                    {process.map((p) => (
                        <div key={p.id} className='border bg-white hover:shadow-xl transition-all duration-400'>
                            <img src={p.img} alt={p.title} />
                            <div className=" px-5 py-4 ">
                                <p className='border rounded-full px-4 py-2 w-fit mb-3'>{p.id}</p>
                                <h1 className='text-xl font-semibold mb-2'>{p.title}</h1>
                                <p className=' text-sm text-gray-500'>{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Process
