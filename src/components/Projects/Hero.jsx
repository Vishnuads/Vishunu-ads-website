import React, { useState } from 'react'
import { ArrowDownRight } from 'lucide-react'
import Img from '../../assets/images/w1.png'
import Mirakle from '../../assets/clients/logo.png'
import NJK from '../../assets/clients/njk.png'
import LP from '../../assets/clients/life plus .jpg'
import SKAN from '../../assets/clients/skand.png'
import Rus from '../../assets/clients/RUSHIKAA .png'
import Vilo from '../../assets/clients/vilo.png'
import {
    CodeIcon,
    ArticleIcon,
    ShareNetworkIcon,
    VideoCameraIcon,
    HandshakeIcon,
    ShoppingCartIcon,
    TrendUpIcon,
    FileTextIcon,
    FingerprintIcon
} from "@phosphor-icons/react";

const Hero = () => {

    const [isOpen, setIsOpen] = useState(0)
    const data = [
        {
            img: Mirakle,
            name: "Mirakle",
            service: [
                { i: CodeIcon, name: "Web Development" },
                { i: HandshakeIcon, name: "Promotions & Collaborations" },
                { i: ArticleIcon, name: "Content-Based SEO" },
                { i: ShoppingCartIcon, name: "E-commerce Platform Support" },
                { i: TrendUpIcon, name: "Sales Optimization" },
                { i: ShareNetworkIcon, name: "Social Media Marketing" },
                { i: VideoCameraIcon, name: "Corporate Video Making" },
                { i: FileTextIcon, name: "Legal & Company Registration" },
                { i: FingerprintIcon, name: "Branding & Digital Identity" }
            ],
            desc: "We helped Mirakle grow from setup to scale with legal, branding, marketing, and e-commerce solutions. Our strategies improved brand visibility, audience reach, and business growth.",
        },
        {
            img: LP,
            name: "Life Plus Ayurveda",
            service: [
                { i: FingerprintIcon, name: "Branding & Digital Identity" },
                { i: ShareNetworkIcon, name: "Social Media Marketing" },
                { i: CodeIcon, name: "Web Development" },
                { i: VideoCameraIcon, name: "Corporate Video Making" },
                { i: ArticleIcon, name: "Content-Based SEO" },

            ],
            desc: "We supported LifePlus Ayurveda with end-to-end growth—from company registration and brand identity to digital marketing, content, and promotions. Our strategy strengthened brand trust, audience reach, and positioned them as a credible Ayurvedic care brand.",
        },
        {
            img: NJK,
            name: "GlowbyNJK",
            service: [
                { i: CodeIcon, name: "Web Development" },
                { i: HandshakeIcon, name: "Promotions & Collaborations" },
                { i: ArticleIcon, name: "Content-Based SEO" },
                { i: ShoppingCartIcon, name: "E-commerce Platform Support" },
                { i: TrendUpIcon, name: "Sales Optimization" },
                { i: ShareNetworkIcon, name: "Social Media Marketing" },
                { i: VideoCameraIcon, name: "Corporate Video Making" },
                { i: FingerprintIcon, name: "Branding & Digital Identity" }
            ],
            desc: "We partnered with GlowbyNJK, a premium beauty and skincare brand, to deliver end-to-end growth. Through branding, website development, digital marketing, and campaigns, we boosted visibility, engagement, and measurable results.",
        },
        {
            img: Vilo,
            name: "Vilo",
            service: [
                { i: CodeIcon, name: "Web Development" },
                { i: HandshakeIcon, name: "Promotions & Collaborations" },
                { i: ArticleIcon, name: "Content-Based SEO" },
                { i: ShoppingCartIcon, name: "E-commerce Platform Support" },
                { i: TrendUpIcon, name: "Sales Optimization" },
                { i: ShareNetworkIcon, name: "Social Media Marketing" },
                { i: VideoCameraIcon, name: "Corporate Video Making" },
                { i: FileTextIcon, name: "Legal & Company Registration" },
                { i: FingerprintIcon, name: "Branding & Digital Identity" }
            ],
            desc: "We partnered with Vilo, a premium shoe care brand, to deliver end-to-end growth. From legal setup and branding to digital marketing, e-commerce, and sales optimization, we boosted visibility, engagement, and measurable results.",
        },
        {
            img: Rus,
            name: "Amirtha Rushikaa",
            service: [
                { i: CodeIcon, name: "Web Development" },
                { i: HandshakeIcon, name: "Promotions & Collaborations" },
                { i: ArticleIcon, name: "Content-Based SEO" },
                { i: ShoppingCartIcon, name: "E-commerce Platform Support" },
                { i: TrendUpIcon, name: "Sales Optimization" },
                { i: ShareNetworkIcon, name: "Social Media Marketing" },
                { i: VideoCameraIcon, name: "Corporate Video Making" },
                { i: FileTextIcon, name: "Legal & Company Registration" },
                { i: FingerprintIcon, name: "Branding & Digital Identity" }
            ],
            desc: "We partnered with Amirtha Rushikaa, a premium food products brand, to deliver end-to-end growth. From legal setup and branding to digital marketing, e-commerce, and sales optimization, we helped build strong market presence and audience trust.",
        },
        {
            img: SKAN,
            name: "Skandaguru Chit Funds",
            service: [
                { i: CodeIcon, name: "Web Development" },
                { i: HandshakeIcon, name: "Promotions & Collaborations" },
                { i: ArticleIcon, name: "Content-Based SEO" },
                { i: ShoppingCartIcon, name: "E-commerce Platform Support" },
                { i: TrendUpIcon, name: "Sales Optimization" },
                { i: ShareNetworkIcon, name: "Social Media Marketing" },
                { i: VideoCameraIcon, name: "Corporate Video Making" },
                { i: FileTextIcon, name: "Legal & Company Registration" },
                { i: FingerprintIcon, name: "Branding & Digital Identity" }
            ],
            desc: "We partnered with Skandaguru Chit Funds, a trusted financial services company, to strengthen their brand positioning and digital presence. Our compliance-friendly approach built customer trust, credibility, and wider market reach.",
        }
    ]

    const toggle = (idx) => {
        setIsOpen((prev) => (prev === idx ? null : idx));
    }

    return (
        <>
            <section className='max-w-6xl mx-auto px-5  pt-20'>
                <div className="flex items-center justify-between md:py-10 py-5 border-b">
                    <h1 className='lg:text-6xl md:text-5xl text-3xl  font-semibold'>Portfolio </h1>
                    <div className='border rounded-full'>
                        <ArrowDownRight size={44} className='bg-black text-white p-2 m-2 rounded-full' />
                    </div>
                </div>
                <div>
                    <p className='md:text-4xl my-3 text-xl tracking-wider font-extralight'>Our project reflects our commitment to excellence, brand integrity, and measurable results—designed to position our clients ahead in an increasingly competitive market.</p>
                </div>
                {/* {data.map((d, idx) => (
                    <div className=" grid grid-cols-1 md:grid-cols-4 md:gap-5 py-10 " key={idx}>
                         <div className={`flex items-center justify-between ${idx % 2 == 0 ? 'md:order-1' : 'md:order-2'} `}>
                            
                            <img src={d.img} alt="image" className='w-fit h-24 object-contain' />
                         </div>

                         <div className={`space-y-4 md:col-span-3 ${idx % 2 == 0 ? 'md:order-2' : 'md:order-1'} `} >
                             <h1 className='text-3xl uppercase font-semibold '>
                                 {d.name}
                             </h1>
                             <p className='text-xl tracking-wide font-light text-justifyy'>{d.desc}</p>
                            
                         </div>
                         <div className=" md:col-span-4 order-3 ">
                             <p className='text-xl mb-5'>Service we Provide :</p>
                             <div className='flex flex-wrap  gap-2 border-b pb-5  order-3' >
                                
                                 {d.service.map((i, id) => (
                                    <div key={id} className='flex items-center gap-2 bg-white  font-light overflow-hidden border p-2 w-fit '>
                                           <img className=" w-10 h-auto " src={i.i}  />
                                         <p className=' '>{i.name}</p>
                                      
                                     </div>
                                ))}

                             </div>
                         </div>
                        
                     </div>
                ))} */}

                <div className="relative my-20">
                    <div className="flex flex-wrap  gap-2  z-10 ">
                        {data.map((d, idx) => (
                            <button
                                key={idx}
                                onClick={() => toggle(idx)}
                                className={`px-5 py-2 text-md uppercase  transition-all shadow-gray-200 
                                ${isOpen === idx
                                        ? 'bg-white border md:border-b-0 text-black'
                                        : 'bg-gray-100 border  border-gray-200 text-gray-400'
                                    }`}
                            >
                                {d.name}
                            </button>
                        ))}
                    </div>
                    {data.map((d, idx) => (
                        isOpen == idx &&
                        <div key={idx} className='border space-y-3  bg-white p-5'>
                            <img src={d.img} alt="img" className='h-26 w-auto my-3' />
                            <p className='font-extralight text-lg md:text-xl'>{d.desc}</p>
                            <p className='mt-5'>Services Provided </p>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pb-5 order-3 md:px-10 px-4' >
                                {d.service.map((i, id) => {
                                    const Icon = i.i;
                                    return (
                                        <div key={id} className='flex items-center justify-center md:gap-4 gap-2 bg-white  overflow-hidden border px-2  py-3 w-full '>
                                            {/* <img className=" w-10 h-auto " src={i.i} /> */}
                                            <Icon size={26} />
                                            <p className=' text-sm'>{i.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Hero
