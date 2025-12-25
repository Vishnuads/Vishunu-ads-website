import { Dot } from 'lucide-react'
import React from 'react'
import Button from '../ui/Button'
import W1 from '../../assets/images/w1.png'
import W2 from '../../assets/images/w2.png'
import W3 from '../../assets/images/w3.png'
import W4 from '../../assets/images/w4.png'
import MovingArrow from '../ui/MovingArrow'
import { motion } from 'framer-motion'


const Works = () => {

    const works = [
        { img: W1, name: "Lévrière Passion", desc: "Luxury cosmetics that redefine elegance, empowering women with timeless beauty and sophistication" },
        { img: W2, name: "GiftGrove", desc: "Handcrafted gift packaging that transforms every present into a beautifully curated experience" },
        { img: W3, name: "Vermeer Paints", desc: "Exquisite vintage-inspired paints crafted for artists who demand depth, richness, and true heritage" },
        { img: W4, name: "Ember & Oak", desc: "Bold craft beer rooted in tradition, brewed with passion, and designed for true connoisseurs" }
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
                <div className="grid md:grid-cols-2 px-5 gap-6 my-10">
                    {works.map((work, idx) => (
                        <div className='h-full w-full my-5' key={idx}>
                            <img src={work.img} alt="works" className=' object-cover md:h-120 h-80' />
                            <h1 className='text-4xl my-4 font-light'>{work.name}</h1>
                            <p className='text-lg my-4 font-extralight'>{work.desc}</p>
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
