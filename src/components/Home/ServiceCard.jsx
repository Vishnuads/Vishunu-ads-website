import React from 'react'
import { ContainerScroll, CardSticky } from "../cards-stack"
import S1 from '../../assets/images/services/2.png'
import S2 from '../../assets/images/services/1.png'
import S3 from '../../assets/images/services/3.png'
import S4 from '../../assets/images/services/4.png'
import S5 from '../../assets/images/services/5.png'
import S6 from '../../assets/images/services/6.png'
import { Link } from 'react-router-dom'


const ServiceCard = () => {

    const services = [
        {
            id: 1,
            title: "Company Registration & Legal Solutions",
            description: "We provide hassle-free company registration, compliance, and legal support to help businesses start and operate smoothly. From startups to growing enterprises, our expert solutions ensure legal clarity, compliance, and long-term business security.",
            tags: ["ROC, GST, MSME Registration", "Trademark & Copyright Registration"],
            img: S1
        },
        {
            id: 2,
            title: "Brand & Creative",
            description: "We build powerful brand identities through strategic branding, graphic design, ad shoots, and video content creation. Our creative solutions help businesses stand out, connect with their audience, and drive lasting brand recognition.",
            tags: ["Branding & Design", "Graphic Designing", "Ad Shoots", "Video Content Creation"],
            img: S2
        },
        {
            id: 3,
            title: "Digital & Tech",
            description: "We provide advanced digital solutions including website and app development, CRM & ERP support, WhatsApp chatbot integration, and analytics. Our intelligent tech strategies help businesses optimize operations, improve customer engagement, and scale with confidence.",
            tags: ["Website & App Development", "CRM & ERP Support", "WhatsApp Chatbot Integration", "Strategy & Analytics"],
            img: S3
        },
        {
            id: 4,
            title: "Media & Outdoor",
            description: "We deliver strategic media planning and high-impact outdoor advertising including television, FM radio, outdoor promotions, and movie promotions.",
            tags: ["Television & FM Ad Releases", "Outdoor Promotion", "Television Channel Setup", "Movie Promotion"],
            img: S4
        },
        {
            id: 5,
            title: "Events & Production",
            description: "We plan and execute impactful events, brand activations, and end-to-end production with seamless coordination and execution.",
            tags: ["Company Registration", "Event Management", "Infrastructure Setup & Training", "Product Distribution Across Globe"],
            img: S5
        },
        {
            id: 6,
            title: "Marketing & Growth",
            description: "We drive business growth through result-oriented digital marketing, sales support, PR, and media outreach. From brand awareness to franchise expansion, our strategies are built to increase visibility, leads, and long-term revenue.",
            tags: ["Digital Marketing", "Sales & Marketing Support", "PR & Media Outreach", "Franchise Management"],
            img: S6
        }
    ]
    return (
        <>
            <section className="min-h-screen">
                <div className="container mx-auto px-6 xl:px-12">

                    <ContainerScroll className="relative  space-y-8">
                        {services.map((s, idx) => (
                            <CardSticky
                                key={idx}
                                index={idx}
                                incrementY={20}
                                className="will-change-transform"
                            >
                                <Link to={`/service/${s.title.replace(/\s+/g,'-').toLowerCase()}`}>
                                <div className=" border border-stone-200 bg-white p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                                        {/* <Link to={`/service/${s.title.replace(/\s+/g,'-').toLowerCase()}`}> */}
                                            <div className="order-2 md:order-1 flex flex-col space-y-4 justify-between ">
                                                <p className='border rounded-full px-4 py-2 w-fit'>{s.id}</p>
                                                {/* <Link to={`/service/${s.title.replace(/\s+/g,'-').toLowerCase()}`}> */}
                                                <div>
                                                    <h2 className=" md:text-5xl text-xl flex items-center mb-3 font-extralight tracking-tight text-stone-900">
                                                         {s.title}
                                                    </h2>
                                                    <h3 className="text-sm text-gray-500 font-light w-[95%]">
                                                        {s.description}
                                                    </h3>
                                                </div>
                                                {/* </Link> */}
                                                <div className='flex flex-wrap items-center gap-2 w-full'>
                                                    {s.tags.map((t, idx) => (
                                                        <span
                                                            key={idx}
                                                            className='border px-3 py-1 text-sm rounded-2xl whitespace-nowrap '>{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        {/* </Link> */}
                                        <div className='order-1 md:order-2 mx-auto mb-3 md:mb-0'>
                                            <img src={s.img} alt={s.title} className='md:h-100' />
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </CardSticky>
                        ))}

                        <div className="h-80"></div>
                    </ContainerScroll>

                </div>
            </section>
        </>
    )
}

export default ServiceCard
