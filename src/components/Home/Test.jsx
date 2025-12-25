import { motion, useScroll, useTransform } from "framer-motion"
import { Dot } from 'lucide-react'
import React, { useRef } from 'react'

const Test = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const test = [
        {
            id: 1, review: " Transition from traditional marketing to a digital-focused approach. Vishnu Ads made the shift seamless, guiding us through the entire process and elevating our marketing campaigns with ease.", name: "Mirakle",
            profile: "MK"
        },
        {
            id: 2, review: " As an Ayurveda hospital unfamiliar with television advertising, we struggled to understand how to reach the right audience. Vishnu Ads guided us with strategic slot planning and targeted placements, helping us increase visibility and boost our sales.", name: "Life Plus Ayush Vaidyasala", profile: "LP"
        },
        {
            id: 3, review: "We had a vision to create our own satellite channel and Vishnu Ads guided us through the entire process, helping us turn that vision into reality.", name: "Life Plus Ayush Vaidyasala", profile: "LP"
        },
        {
            id: 4, review: "As an Ayurveda hospital with limited digital marketing knowledge, our online presence was weak. Vishnu Ads transformed it by strategizing effective ad campaigns, creating impactful social media videos, and managing our platforms helping us build a strong and credible digital presence.", name: "Life Plus Ayush Vaidyasala",
            profile: "LP"
        },
        {
            id: 5, review: " We are an FMCG company, and Vishnu Ads created a highly creative and user-friendly website for us. It not only strengthened our brand awareness but also helped boost our product sales.", name: "Life Plus Ayush Vaidyasala", profile: "LP"
        },
        {
            id: 6, review: "We are a hygiene care brand, and Vishnu Ads created a highly creative and functional website for us. They also helped promote our products across all social media platforms, significantly enhancing our online reach and customer engagement.", name: "Life Plus Ayush Vaidyasala", profile: "LP"
        }
    ]

    return (
        <>
            <section ref={ref} className='test  mb-20 relative min-h-[240vh] md:min-h-[250vh] lg:min-h-[260vh] '>
                <div className='absolute inset-0  bg-linear-to-b from-black/90 via-black/10 to-black/10'></div>
                <div className=' text-white  absolute inset-0 '>
                    <div className="text-center  py-10">
                        <p className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'><Dot />
                            testimonials</p>
                        <h1 className=' md:text-7xl text-4xl'>Hear  it from our clients</h1>
                    </div>
                    <div className="relative  no-scrollbar">
                        <div className='flex flex-col items-center justify-center gap-2 absolute top-0  w-full px-5 '>
                            {test.map((t, index) => {
                                const start = index / test.length
                                const end = start / test.length
                                const y = useTransform(scrollYProgress, [start, end], [0.5, 1])
                                // const op = 1 - index * 0.12
                                // const opacity = useTransform( scrollYProgress, [0, 0.5],    [op, 1]  )
                                const sc = (100 - (index * 4)) / 100;
                                const scale = useTransform(scrollYProgress, [0, `0.${index}`], [sc, 1])

                                return (
                                    <motion.div
                                        key={t.id}
                                        className={` md:w-100  sticky bottom-24 bg-black/10 backdrop-blur-xl rounded-xl p-4 `}
                                        style={{
                                            y,
                                            scale,
                                            zIndex: test.length - index,
                                        }} >
                                        <p className="text-md font-light">{t.review}</p>
                                        <div className="flex items-center gap-3 pt-3">
                                            <div className="bg-green-300 rounded-full px-3 py-2 text-red-950">{t.profile}</div>
                                            <p>{t.name}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Test
