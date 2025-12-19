import { motion } from 'framer-motion'
import { Dot } from 'lucide-react'
import React, { useRef } from 'react'

const Testimonials = () => {

    const scrollRef = useRef(null)

    const test = [
        { id: 1, review: "1 Transition from traditional marketing to a digital-focused approach. Vishnu Ads made the shift seamless, guiding us through the entire process and elevating our marketing campaigns with ease.", name: "Mirakle" },
        { id: 2, review: "2 Transition from traditional marketing to a digital-focused approach. Vishnu Ads made the shift seamless, guiding  us through the entire process and elevating our marketing campaigns with ease.", name: "Life Plus" },
        { id: 3, review: "3 Transition from traditional marketing to a digital-focused approach. Vishnu Ads made the shift seamless, guiding us through the entire process and elevating our marketing campaigns with ease.", name: "Mirakle" }

    ]

    return (
        <>
            <section className='test  mb-20 relative h-[150vh] '>
                <div className='absolute inset-0  bg-linear-to-b from-black/90 via-black/10 to-black/10'></div>
                <div className=' text-white  absolute inset-0 '>
                    <div className="text-center  py-10">
                        <p className='tracking-widest font-extralight py-4 flex items-center uppercase justify-center'><Dot />
                            testimonials</p>
                        <h1 className=' md:text-7xl text-4xl'>Hear it from our clients</h1>
                    </div>
                    <div ref={scrollRef} className="relative overflow-y-scroll h-screen  no-scrollbar ">
                        <div className='flex flex-col items-center justify-center gap-4 pt-20  w-full px-5 max-h-screen'>
                            {test.map((t, index) => {
                                const isFirst = index === 0
                                return (
                                    <motion.div
                                        key={t.id}
                                        className="absolute w-90 h-40 bg-black/10 backdrop-blur-xl rounded-xl p-4 "
                                        style={{
                                            zIndex: test.length - index,
                                        }}
                                        initial={{
                                            y: 20 * index,
                                            scale: isFirst ? 1 : 1 - index * 0.01,
                                            opacity: isFirst ? 1 : 0.8,
                                        }}
                                        whileInView={{
                                            y: 170 * index,
                                            scale: 1,
                                            opacity: 1,
                                        }}
                                        // viewport={{
                                        //     root: scrollRef,
                                        //     once: true,
                                        //     amount: 0.8,
                                        // }}
                                        transition={{
                                            duration: 1.8,
                                            ease: "easeInOut",
                                            delay: 0.45,
                                        }}
                                    >
                                        <p className="text-sm font-light">{t.review}</p>
                                        <div className="flex items-center gap-3 pt-3">
                                            <div className="bg-green-300 rounded-full p-2 text-red-950">MK</div>
                                            <p>{t.name}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Testimonials
