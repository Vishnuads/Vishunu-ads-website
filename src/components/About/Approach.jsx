import { Dot } from 'lucide-react'
import React from 'react'
import Button from '../ui/Button'


const Approach = () => {
    return (
        <div className='max-w-6xl mx-auto px-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10">
                <div>
                    <h1 className='flex items-center  gap-2 uppercase'> <Dot size={52} />
                        <span className='text-gray-500 tracking-wider'>our approach</span> </h1>
                </div>
                <div>
                    <h1 className='pb-4 md:text-2xl text-xl leading-9'>We are a globally recognized boutique design agency, crafting strategic, high-quality solutions that amplify brand values. Our agile, independent team blends strategy, design, and innovation to deliver impactful results.</h1>
                    {/* <Button name="get in touch" /> */}
                </div>
            </div>

        </div>
    )
}

export default Approach
