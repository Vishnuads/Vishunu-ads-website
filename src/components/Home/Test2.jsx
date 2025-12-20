import { motion, useScroll, useTransform } from "framer-motion"
import { Dot } from 'lucide-react'
import React, { useRef } from 'react'

const Test2 = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const test = [
        {
            id: 1, 
            review: "Transition from traditional marketing to a digital-focused approach. Vishnu Ads made the shift seamless, guiding us through the entire process and elevating our marketing campaigns with ease.", 
            name: "Mirakle",
            profile: "MK"
        },
        {
            id: 2, 
            review: "As an Ayurveda hospital unfamiliar with television advertising, we struggled to understand how to reach the right audience. Vishnu Ads guided us with strategic slot planning and targeted placements, helping us increase visibility and boost our sales.", 
            name: "Life Plus Ayush Vaidyasala", 
            profile: "LP"
        },
        {
            id: 3, 
            review: "We had a vision to create our own satellite channel and Vishnu Ads guided us through the entire process, helping us turn that vision into reality.", 
            name: "Life Plus Ayush Vaidyasala", 
            profile: "LP"
        },
        {
            id: 4, 
            review: "As an Ayurveda hospital with limited digital marketing knowledge, our online presence was weak. Vishnu Ads transformed it by strategizing effective ad campaigns, creating impactful social media videos, and managing our platforms helping us build a strong and credible digital presence.", 
            name: "Life Plus Ayush Vaidyasala",
            profile: "LP"
        },
        {
            id: 5, 
            review: "We are an FMCG company, and Vishnu Ads created a highly creative and user-friendly website for us. It not only strengthened our brand awareness but also helped boost our product sales.", 
            name: "Life Plus Ayush Vaidyasala", 
            profile: "LP"
        },
        {
            id: 6, 
            review: "We are a hygiene care brand, and Vishnu Ads created a highly creative and functional website for us. They also helped promote our products across all social media platforms, significantly enhancing our online reach and customer engagement.", 
            name: "Life Plus Ayush Vaidyasala", 
            profile: "LP"
        }
    ]

    return (
        <section ref={ref} className='relative h-[300vh] bg-black'>
            <div className='sticky top-0 h-screen overflow-hidden'>
                <div className="text-center text-white py-10">
                    <p className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'>
                        <Dot />testimonials
                    </p>
                    <h1 className='md:text-7xl text-4xl'>Hear it from our clients</h1>
                </div>
                
                <div className="relative h-full px-5">
                    {test.map((t, index) => {
                        const totalCards = test.length;
                        const cardIndex = totalCards - 1 - index; // Reverse for proper stacking
                        
                        // Each card starts revealing at different scroll progress
                        const start = cardIndex * 0.15;
                        const end = start + 0.2;
                        
                        // Y position: starts off-screen bottom, moves to bottom-10
                        const y = useTransform(
                            scrollYProgress,
                            [start, end],
                            ["100vh", `calc(100vh - ${(cardIndex * 24) + 40}px)`]
                        );
                        
                        return (
                            <motion.div
                                key={t.id}
                                className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20"
                                style={{
                                    y,
                                    zIndex: index,
                                }}
                            >
                                <p className="text-white text-sm md:text-base font-light leading-relaxed">
                                    {t.review}
                                </p>
                                <div className="flex items-center gap-3 pt-4">
                                    <div className="bg-green-300 rounded-full w-10 h-10 flex items-center justify-center text-black font-semibold">
                                        {t.profile}
                                    </div>
                                    <p className="text-white font-medium">{t.name}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Test2