import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import { Share2 } from 'lucide-react'
import React from 'react'
import Img from '../assets/images/blogs/1.png'
import { Marquee } from '@/components/ui/marquee'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
  return (
    <>
      <section className='bg-[#fffefa] '>
        <Navbar />
        <div className="md:max-w-6xl mx-auto pt-30 min-h-screen px-5">
          <div className='border-b'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold tracking-wide leading-14 '>Why Minimalist Design is More Powerful?</h1>
            <div className='flex items-center justify-between my-5'>
              <p className='text-gray-400 text-xl '>Feb 12, 2025</p>
              <p className='flex items-center gap-2 underline'> Share <span className='border rounded-full p-2'><Share2 size={16} /></span>  </p>
            </div>
          </div>
          <div className='my-5 h-100'>
            <img src={Img} alt="Image " className='w-full h-full object-cover' />
          </div>

          <div>
            <h1 className='text-xl'>Minimalism isn’t just a design trend - it’s a strategic approach that makes brands more memorable, efficient, and engaging.</h1>

            <div className='my-10'>
              <h1 className='text-3xl py-5 '>Why Minimalism Works</h1>
              <ol className='list-decimal px-5 '>

                <li className='text-xl mb-2'>
                  Reduces Cognitive Load – Simple designs make information easier to process and understand.
                </li>
                <li className='text-xl mb-2'>Improves Brand Recognition – A clean, focused identity is easier to remember.</li>
                <li className='text-xl mb-2'>Enhances User Experience – Less clutter means a more seamless and enjoyable interaction.</li>
                <li className='text-xl mb-2'>Creates a Premium Feel – Luxury brands thrive on minimal aesthetics—clean space signifies confidence and exclusivity.</li>
              </ol>
            </div>
          </div>

          <div className='my-10 relative group '>
            <div className="absolute inset-0 bg-linear-to-r from-[#fffefa] via-transparent to-[#fffefa] group-hover:z-0 z-10"></div>
            <Link to="/" className="">
              <Marquee className="cursor-pointer">
                <div className="pointer-events-auto flex items-center gap-5">

                  <strong>Next Article</strong>
                  <span className="md:text-2xl text-xl font-light">
                    The Psychology of Converting Websites
                  </span>

                  <img src={Img} alt="img" className="h-30 w-30 object-cover" />
                </div>
              </Marquee>
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default SingleBlog
