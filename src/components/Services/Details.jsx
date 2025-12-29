import React from 'react'
import Button from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'
import FAQ from '../ui/FAQ'

const Details = ({ details }) => {
    return (
        <>

            <div className='max-w-6xl mx-auto px-5 '>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:my-20 my-10">

                    {details.sub.map((s, idx) => (
                        <div key={idx} className="border px-5 py-4 bg-white transition-all duration-500 ease-in-out hover:shadow-xl">
                            {/* <p className='border rounded-full px-4 py-2 w-fit mb-3'>{d.id}</p> */}
                            <h1 className='text-xl font-semibold mb-2'>{s.head}</h1>
                            <p className='text-gray-400 text-sm'>{s.para}</p>
                        </div>
                    ))}
                </div>

                <FAQ qna={details} />

            </div>

        </>
    )
}

export default Details
