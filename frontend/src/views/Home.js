import React from 'react';
import Navigation from '../Components/Navigation';
import Carousel from '../Components/Carousel';
import ThreeColumnSection from '../Components/ThreeColumnSection';
import MidSection from '../Components/MidSection';
import Inspirational from '../Components/Inspirational';
import GDPRPolicy from '../Components/GDPR';


const home = () => (
    <div className="container-fluid">
        <GDPRPolicy />
        <Navigation />
        <Carousel />
        <ThreeColumnSection />
        <MidSection />
        <Inspirational />
    </div>
);
export default home;