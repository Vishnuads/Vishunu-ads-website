import React from 'react'
import FAQ from '../ui/FAQ'



const Details = ({ details }) => {
    return (
        <>

            <div className='max-w-6xl mx-auto px-5 '>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:my-20 my-10">

                    {details.sub.map((s, idx) => (
                        <div key={idx} className="border px-5 py-4 bg-white transition-all duration-500 ease-in-out hover:shadow-xl">
                            <div className=' my-2 p-2 w-fit'>
                                <img src={s.img} alt="" className='w-18 h-auto  ' />
                            </div>
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
