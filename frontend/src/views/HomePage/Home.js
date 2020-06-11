import React from 'react';

import Navigation from './Navigation/Navigation';
import Jumbotron from './Jumbotron/Jumbotron';
import Content from './ContentHome/ContentHome';
import MidSection from './Jumbotron/MidSection';
import Inspirational from './ContentHome/Inspirational';
import Footer from './Footer/Footer';

const home = () => (
    <div>
        <Navigation />
        <Jumbotron />
        <Content />
        <MidSection />
        <Inspirational />

        <Footer />
        

    </div>
); 
export default home;