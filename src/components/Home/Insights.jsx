
import React from 'react'
import Button from '../ui/Button'
import B1 from '../../assets/images/blogs/01.png'
import B2 from '../../assets/images/blogs/002.jpg'
import B3 from '../../assets/images/blogs/3.png'
import Ballpit from '../Ballpit'
import fb from '../../assets/logos/fb.png'
import ins from '../../assets/logos/ins.png'
import tel from '../../assets/logos/tele.png'
import lin from '../../assets/logos/lin.png'
import meta from '../../assets/logos/meta.png'
import lik from '../../assets/logos/lik.png'
import mail from '../../assets/logos/mail.png'
import mes from '../../assets/logos/mes.png'
import thu from '../../assets/logos/thu.png'
import wh from '../../assets/logos/wh.png'
import yt from '../../assets/logos/ytw.png'
import { Link } from 'react-router-dom'

const Insights = () => {

    const posts = [
        {
            id: 1,
            title: "The Transformative Power of AI in Digital Marketing by 2026",
            date: "Jan 2, 2026",
            img: B1,
            link: '/blog-post-1'
        },
        {
            id: 2,
            title: "Understanding Google's Latest Algorithm Updates in 2025",
            date: "Dec 13, 2025",
            img: B2,
            link: '/blog-post-2'
        },
        // {
        //     id: 3,
        //     title: "The Psychology of Converting Websites",
        //     date: "Jan 7, 2025",
        //     img: B3
        // }
    ]

    return (
        <>
            <section className='relative  px-5 pb-56  overflow-x-hidden ' id="blog">
                <div className="md:max-w-6xl mx-auto ">
                    <div className="flex items-center justify-between  pb-10">
                        <h1 className=' md:text-7xl text-4xl' >Insights</h1>
                        <Button name="all articals" />
                    </div>
                    <div className="grid md:grid-cols-3  grid-cols-1 gap-6">
                        {posts.map((p) => (
                            <Link to={`/blog${p.link}`}>
                                <div key={p.id} className=''>
                                    <img src={p.img} alt="blog imgs" className='mb-2 object-cover h-80 w-full' />
                                    <p className='text-gray-500 text-sm'>{p.date}</p>
                                    <h1 className='font-semibold  my-2 '>{p.title}</h1>

                                    <p className='text-sm flex items-center gap-1'>Read More </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <Ballpit
                    className="absolute inset-0 pointer-events-none z-0 "
                    // count={50}
                    gravity={0.5}
                    friction={1}
                    wallBounce={0.9}
                    // followCursor={false}
                    size0={1}
                    minSize={1}
                    maxSize={1.5}
                    icons={[fb, ins, tel, yt, lin, meta, lik, mail, mes, thu, wh]}
                />

            </section>



        </>
    )
}

export default Insights
