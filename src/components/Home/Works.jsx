import { Dot } from 'lucide-react'
import React from 'react'
import Button from '../ui/Button'
import W1 from '../../assets/clients/mirak-home.png'
import W2 from '../../assets/clients/lifep-home.png'
import W3 from '../../assets/clients/glow-home.png'
import W4 from '../../assets/clients/skc-home.png'
import MovingArrow from '../ui/MovingArrow'
import { motion } from 'framer-motion'

const Works = () => {

    const works = [
        { img: W1, name: "Mirakle", desc: <>Premium Hygiene & Food Products  End-to-end Brand & Growth Partner
        </> },
        { img: W2, name: "Life Plus Ayurveda", desc: <>Empowering Ayurveda businesses with branding, marketing, SEO, social, and video.</> },
        { img: W3, name: "GlowbyNJK", desc: <>Comprehensive digital solutions ensuring GlowbyNJK shines in competitive beauty.</> },
        { img: W4, name: "Skandaguru Chits", desc: <>Reliable financial brand growth through branding, social, SEO, and promotions.</> }
    ]
    return (
        <>
            <section
                
                className='relative pt-20 max-w-6xl mx-auto min-h-screen overflow-hidden'>
                <div className="text-center border-b pb-6">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3
                        }}
                        viewport={{once : true}}
                        className='tracking-widest font-extralight py-4 flex items-center justify-center'><Dot /> SHOWCASE</motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3
                        }}
                        viewport={{once : true}}
                        className=' text-6xl'>Our Works</motion.h1>
                </div>
                <div className="grid md:grid-cols-4 px-5 gap-6 my-10">
                    {works.map((work, idx) => (
                        <div className='h-full w-full my-4' key={idx}>
                            <img src={work.img} alt="works" className=' object-cover grayscale-0' />
                            <h1 className='text-2xl my-4 font-light'>{work.name}</h1>
                            <p className='text-lg  font-extralight'>{work.desc}</p>
                            {/* <Button name="Learn More" /> */}
                        </div>
                    ))}
                </div>

            </section>
            <div className="flex justify-center   overflow-hidden">
                <MovingArrow label="view all work" link="/projects" />
            </div>


        </>
    )
}

export default Works
