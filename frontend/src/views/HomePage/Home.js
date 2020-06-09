import React from 'react';

import Navigation from './Navigation/Navigation';
import Jumbotron from './Jumbotron/Jumbotron';
import Content from './ContentHome/ContentHome';
import Footer from './Footer/Footer';

const home = () => (
    <>
        <Navigation />
        <Jumbotron />
        <Content />
        <Footer />

    </>
); 
export default home;