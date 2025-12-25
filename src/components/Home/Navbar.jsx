import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/vishnu_ads_logo.png'
import Button from '../ui/Button'
import Hamburger from '../ui/Hamburger'
import FlipText from '../ui/FlipText'
import { HashLink } from 'react-router-hash-link';


function Navbar() {

    const navLinks = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Projects", link: "/projects" },
        { id: 3, name: "Services", link: "/#service" },
        { id: 4, name: "About", link: "/about" },
        { id: 5, name: "Blog", link: "/#blog" },
        { id: 6, name: "AI Film", link: "/aiad-film" },

    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className='z-50 fixed right-0  w-full bg-transparent backdrop-blur-xl'>
                {/* Desktop */}
                <div className="h-fit  w-full p-3 py-4 hidden lg:block">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <Link to={"/"}>
                            <img src={Logo} alt="VA Logo" className='w-auto md:h-14 h-8 ' />
                        </Link>

                        <div className="flex items-center justify-between gap-8">
                            {navLinks.map((nav) => (
                                <div key={nav.id}>
                                    <HashLink smooth to={nav.link}>
                                        <FlipText name={nav.name} />
                                    </HashLink>
                                </div>
                            ))}
                        </div>
                        <div>
                            <Button name="Contact" link="/contact" />
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="relative w-full h-fit p-3 pb-8 bg-[#fffefa] lg:hidden ">
                    <div className="relative flex items-center px-4 h-16">

                        <Link
                            to="/"
                            target="_blank"
                            className=""
                        >
                            <img
                                src={Logo}
                                alt="VA Logo"
                                className={`h-10 transition-all absolute top-5 duration-500 ease-in-out ${isOpen ? 'translate-y-80  -translate-x-1/2 left-1/2 ' : 'translate-y-0 left-5'
                                    }`}
                            />
                        </Link>
                        <div className="ml-auto">
                            <Hamburger toggle={toggleMenu} isOn={isOpen} />
                        </div>

                    </div>


                    {/* Animated Menu */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-1/2 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <ul className="flex flex-col items-center justify-center gap-3 pt-5 pb-10">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`uppercase transform transition-all duration-500 ease-in-out ${isOpen
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-5 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <Link to={nav.link}>{nav.name}</Link>
                                </li>
                            ))}
                            <li
                                className={`uppercase transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100'
                                    : 'translate-y-5 opacity-0'}`}
                                style={{ transitionDelay: '500ms' }}
                            >
                                <Link to="/contact">  Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default Navbar