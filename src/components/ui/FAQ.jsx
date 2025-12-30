import React, { useState } from 'react'
import { Dot, Minus, Plus } from 'lucide-react'


const FAQ = ({ qna }) => {

    const [isOpen, setIsOpen] = useState(null);

    const toggle = (index) => {
        setIsOpen((prev) => (prev === index ? null : index));
    };

    return (
        <div className='max-w-6xl mx-auto px-5 pb-10'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
                <div>
                    <h1 className='flex items-center  gap-2 uppercase'> <Dot size={52} />
                    <span className='text-gray-500 tracking-wider'>faq</span></h1>
                </div>
                <div className='col-span-2'>
                    {qna.qa.map((q) => {
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

export default FAQ
