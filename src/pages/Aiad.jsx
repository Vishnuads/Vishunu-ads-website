import React from 'react'
import '../components/AIAD/ai.css'
import AiHero from '../components/AIAD/AiHero'
import AiService from "../components/AIAD/AiService";
import AiWork from "../components/AIAD/AiWork";
import AiShoot from "../components/AIAD/AiShoot";
import AiWhy from '../components/AIAD/AiWhy';
import AiVision from "../components/AIAD/AiVision";
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import SplashCursor from '@/components/ui/SplashCursor';

const Aiad = () => {
    return (
        <>
        
            <Navbar/>
            {/* <SplashCursor/> */}
            <AiHero />
            <AiService />
            <AiShoot />
            <AiWork />
            <AiWhy />
            {/* <AiVision /> */}
            <Footer/>
        </>
    )
}

export default Aiad
