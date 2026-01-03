import React from 'react'
import { ArrowDownRight } from 'lucide-react'
import Img from '../../assets/images/w1.png'
import Mirakle from '../../assets/clients/logo.png'
import web from '../../assets/client-serv/web.png'

const Hero = () => {
    const data = [
        {
            img: Mirakle,
            name: "Mirakle",
            service: [ {i: web, name:"Web Development"}, 
                {i:web, name:"Promotions & Collaborations"}, {i:web, name:"Content-Based SEO"}, 
                {i:web, name:"E-commerce Platform Support"},{i:web, name:"Sales Optimization"}, 
                {i:web, name:"Social Media Marketing"}, {i:web, name:"Corporate Video Making"}, 
                {i:web, name:"Legal & Company Registration"}, {i:web, name:"Branding & Digital Identity"}
            ],
            desc: "We helped Mirakle grow from setup to scale with legal, branding, marketing, and e-commerce solutions. Our strategies improved brand visibility, audience reach, and business growth.",
        },
        {
            img: Img,
            name: "Life Plus Ayurveda",
            service: ["App Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We helped LifePlus Ayurveda, a holistic Ayurvedic treatment brand, From company registration and brand identity development to digital marketing, social media campaigns, content creation, promotional strategies, and professional ad shoots, we managed every step of their business growth.Our integrated approach ensured that LifePlus Ayurveda reached the right audience, strengthened brand credibility, and showcased the effectiveness of their treatments through compelling visuals and strategic campaigns. The result is a well-positioned, trusted Ayurvedic brand that attracts patients and communicates the value of authentic, natural care.",
        },
        {
            img: Img,
            name: "GlowbyNJK",
            service: ["App Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We partnered with GlowbyNJK, a premium beauty and skincare brand, to manage their business end-to-end. Our services included branding, digital marketing, website development, social media management, SEO, SEM, SMM, promotional campaigns, collaborations, and professional ad shoots, ensuring the brand achieved maximum visibility, strong audience engagement, and measurable growth in the competitive beauty industry.",
        },
        {
            img: Img,
            name: "Vilo",
            service: ["App Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We collaborated with Vilo, a premium shoe care brand, to manage their business end-to-end, delivering a complete suite of brand development and marketing solutions. Our services encompassed Legal & Company Registration, strategic branding, digital marketing, website design and development, social media management, SEO, SEM, SMM, targeted promotions, collaborations, professional ad shoots, E- Commerce support & Sales Optimization ensuring the brand achieved maximum market visibility and consumer engagement.Our comprehensive approach helped the brand enhance its market presence, connect with the right audience, and drive measurable growth across online and offline channels.",
        },
        {
            img: Img,
            name: "Amirtha Rushikaa",
            service: ["App Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We partnered with Amirtha Rushikaa, a premium food products brand, to take their business from concept to market-ready success. Our team delivered end-to-end solutions, including Legal & Company Registration, strategic branding, digital marketing, website development, social media management, SEO, SEM, SMM, targeted promotions, collaborations, high-quality ad shoots,E- Commerce support & Sales Optimization ensuring the brand resonated with the right audience and built strong market recognition.",
        },
        {
            img: Img,
            name: "Skandaguru Chit Funds",
            service: ["App Development", "Promotions & Collaborations", "Content-Based SEO", "E-commerce Platform Support",
                "Sales Optimization", "Social Media Marketing", "Corporate Video Making", "Legal & Company Registration", "Branding & Digital Identity"
            ],
            desc: "We worked with Skandaguru Chit Funds, a trusted financial services company, to strengthen their brand presence and customer outreach in a highly regulated and competitive sector. Our scope focused on brand positioning, digital visibility, and customer trust-building, ensuring the company communicated reliability, transparency, and long-term value. Our approach emphasized clarity, compliance-friendly communication, and credibility, enabling the brand to expand its reach while maintaining customer confidence.",
        }
    ]

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
                    <p className='md:text-4xl my-3 text-xl tracking-wider font-extralight'>We've helped businesses grow for the past 12 years. From small time, family owned businesses to Silicon Valley giants - our marketing and design teams have empowered both of these worlds.</p>
                </div>
                {data.map((d, idx) => (
                    <div className=" grid grid-cols-1 md:grid-cols-4 md:gap-5 py-10 " key={idx}>
                        <div className={`flex items-center justify-between ${idx % 2 == 0 ? 'md:order-1' : 'md:order-2'} `}>
                            
                            {/* <h1 className='text-3xl uppercase font-semibold '>
                                {d.name}
                            </h1> */}
                            <img src={d.img} alt="image" className='w-fit h-24 object-contain' />
                        </div>

                        <div className={`space-y-4 md:col-span-3 ${idx % 2 == 0 ? 'md:order-2' : 'md:order-1'} `} >
                            <h1 className='text-3xl uppercase font-semibold '>
                                {d.name}
                            </h1>
                            <p className='text-xl tracking-wide font-light text-justifyy'>{d.desc}</p>
                            {/* <Button name="Learn more" /> */}

                            
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
                ))}
            </section>
        </>
    )
}

export default Hero
