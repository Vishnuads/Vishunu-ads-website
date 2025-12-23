import React, { useState } from 'react'
import { Dot, Minus, Plus } from 'lucide-react'


const Faq = () => {

    const [isOpen, setIsOpen] = useState(null);

    const toggle = (index) => {
        setIsOpen((prev) => (prev === index ? null : index));
    };

    const qna = [
        { id: 1, ques: "What services do you offer?", ans: " We specialize in brand identity, digital design, marketing strategy, and content creation to help businesses grow. Whether you need a full-scale rebrand or targeted marketing, we’ve got you covered." },
        { id: 2, ques: "How do you determine project pricing?", ans: "Pricing depends on the project’s scope, complexity, and timeline. The more details you provide in the contact form, the more accurate our estimate will be." },
        { id: 3, ques: "How long does a typical project take?", ans: " Timelines vary based on project size and requirements, but we always prioritize efficiency without sacrificing quality. After reviewing your needs, we’ll provide a detailed turnaround estimate." },
        { id: 4, ques: "Do you work with startups or only established brands?", ans: " We collaborate with businesses of all sizes, from startups to global brands. Whether you’re building from scratch or refining an existing brand, we’re here to help." }
    ]

    return (
        <div className='max-w-6xl mx-auto px-5 pb-10'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
                <div>
                    <h1 className='flex items-center  gap-2 uppercase'> <Dot size={52} />
                    <span className='text-gray-500 tracking-wider'>faq</span></h1>
                </div>
                <div className='col-span-2'>
                    {qna.map((q) => {
                        const open = isOpen === q.id

                        return (
                            <div key={q.id} className='border-b pb-3 mb-3'>
                                <button onClick={() => toggle(q.id)} className="transition-all duration-400 w-full">
                                    <div className='flex items-center justify-between gap-2 py-3'>
                                        <h1 className='md:text-xl text-left font-semibold'>{q.ques}</h1>
                                        <div className=' transition-all duration-500 font-extralight' style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            {open ? <Minus /> : <Plus />}
                                        </div>
                                    </div>
                                    <div className={` text-left grid transition-all duration-500  ${open ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 translate-y-10"} `} >
                                        <p className="font-light text-lg overflow-hidden">{q.ans}</p>
                                    </div>
                                </button>
                            </div>
                        )})}
                </div>
            </div>

        </div>
    )
}

export default Faq
