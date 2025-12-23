import React from 'react'
import { Marquee } from '../ui/marquee'
import L1 from '../../assets/partners/cfa.png'
import L2 from '../../assets/partners/jaya_tv.png'
import L3 from '../../assets/partners/cfs.png'
import L4 from '../../assets/partners/razerpay.png'
import L5 from '../../assets/partners/whats.png'
import L6 from '../../assets/partners/phone.png'
import L7 from '../../assets/partners/SHIPYARI.png'
import L8 from '../../assets/partners/ktv.png'
import L9 from '../../assets/partners/shprkt.png'
import L10 from '../../assets/partners/sun_tv.png'

const Logos = () => {

    const partners = [
        { id: 1, img: L1, name: "Logo1" },
        { id: 2, img: L2, name: "Logo2" },
        { id: 3, img: L3, name: "Logo3" },
        { id: 4, img: L4, name: "Logo4" },
        { id: 5, img: L5, name: "Logo5" },
        { id: 6, img: L6, name: "Logo6" },
        { id: 7, img: L7, name: "Logo7" },
        { id: 8, img: L8, name: "Logo8" },
        { id: 9, img: L9, name: "Logo9" },
        { id: 10, img: L10, name: "Logo10" },
    ]

    return (
        <>
            <section className='relative'>
                <div className=" w-full absolute z-10 inset-0 bg-linear-to-r  from-[#fffefa] via-transparent to-[#fffefa]"> </div>
                    <div className=' z-0 my-10'>
                        <Marquee>
                            {partners.map((p) => (
                                <div key={p.id}>
                                    <img src={p.img} alt={p.name} className='w-24 h-auto' />
                                </div>
                            ))}
                        </Marquee>
                    </div>
               
            </section>
        </>
    )
}

export default Logos
