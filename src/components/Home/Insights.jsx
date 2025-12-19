
import React from 'react'
import Button from '../ui/Button'
import B1 from '../../assets/images/blogs/1.png'
import B2 from '../../assets/images/blogs/2.png'
import B3 from '../../assets/images/blogs/3.png'
import { ArrowRight } from 'lucide-react'

const Insights = () => {

    const posts = [
        {
            id: 1,
            title: "Why Minimalist Design is More Powerful",
            date: "Feb 12, 2025",
            img: B1
        },
        {
            id: 2,
            title: "How to Make Your Brand Unforgettable",
            date: "Jan 25, 2025",
            img: B2
        },
        {
            id: 3,
            title: "The Psychology of Converting Websites",
            date: "Jan 7, 2025",
            img: B3
        }
    ]

    return (
        <>
            <section className='md:max-w-6xl mx-auto px-5 min-h-screen'>
                <div className="flex items-center justify-between  pb-10">
                    <h1 className=' md:text-7xl text-4xl' >Insights</h1>
                    <Button name="all articals" />
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    {posts.map((p) => (
                        <div key={p.id} className=''>
                            <img src={p.img} alt="blog imgs" className='mb-2 object-cover h-80 w-full' />
                            <p className='text-gray-500 text-sm'>{p.date}</p>
                            <h1 className='font-semibold  my-3 line-clamp-1'>{p.title}</h1>
                            <p className='text-sm flex items-center gap-1'>Read More </p>
                        </div>
                    ))}
                </div>


            </section>

        </>
    )
}

export default Insights
