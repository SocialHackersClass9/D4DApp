import React from 'react';

import Navigation from '../Components/Navigation';
import Carousel from '../Components/Carousel';
import ThreeColumnSection from '../Components/ThreeColumnSection';
import MidSection from '../Components/MidSection';
import Inspirational from '../Components/Inspirational';
import Footer from '../Components/Footer';

const home = () => (
    <div>
        <Navigation />
        <Carousel />
        <ThreeColumnSection />
        <MidSection />
        <Inspirational />

        <Footer />
        

    </div>
); 
export default home;