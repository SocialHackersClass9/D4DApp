import React from 'react';
import Navigation from '../Components/Navigation';
import Carousel from '../Components/Carousel';
import ThreeColumnSection from '../Components/ThreeColumnSection';
import MidSection from '../Components/MidSection';
import Inspirational from '../Components/Inspirational';
import CookieConsentAlert from './CookieConsent';

const home = () => (
    <div className="container-fluid">
        <CookieConsentAlert />
        <Navigation />
        <Carousel />
        <ThreeColumnSection />
        <MidSection />
        <Inspirational />
    </div>
)


export default home;