import React from 'react'
import { Marquee } from '../ui/marquee'
import L1 from '../../assets/clients/buy_happy.png'
import L2 from '../../assets/clients/herbocare.png'
import L3 from '../../assets/clients/kolors.png'
import L4 from '../../assets/clients/naga.png'
import L5 from '../../assets/clients/naptol.png'
import L6 from '../../assets/clients/sk.png'
import L7 from '../../assets/clients/tele_one.png'
import L8 from '../../assets/clients/v_care.png'
import L9 from '../../assets/clients/vlcc.png'


const Logo = () => {

    const clients = [
        { id: 1, img: L1, name: "buy-happy" },
        { id: 2, img: L2, name: "herbo-care" },
        { id: 3, img: L3, name: "kolors" },
        { id: 4, img: L4, name: "naga" },
        { id: 5, img: L5, name: "naptol" },
        { id: 6, img: L6, name: "sk" },
        { id: 7, img: L7, name: "tele-one" },
        { id: 8, img: L8, name: "vcare" },
        { id: 9, img: L9, name: "vlcc" }
    ]

    return (
        <>
         <h1 className='md:max-w-6xl px-5 mx-auto text-xl md:text-3xl lg:text-4xl mt-10 '>Our Clients</h1>
            <section className='relative mb-10 md:max-w-6xl mx-auto overflow-hidden'>
               
                <div className=" w-full absolute z-10 inset-0 bg-linear-to-r  from-[#fffefa] via-transparent to-[#fffefa]"> </div>
                    <div className=' z-0 my-10'>
                        <Marquee>
                            {clients.map((c) => (
                                <div key={c.id}>
                                    <img src={c.img} alt={c.name} className='w-24 h-auto' />
                                </div>
                            ))}
                        </Marquee>
                    </div>
               
            </section>
        </>
    )
}

export default Logo
