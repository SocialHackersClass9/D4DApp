import React from 'react';
import Logo from '../assets/d4d.jpg';
import Coach from '../assets/coaches.jpg';
import Sports from '..//assets/sports.jpg';
import Styled from 'styled-components';

const Images = Styled.img`
height:250px;

margin: 20px;

`


const ThreeColumnSection = () => (
    <div className="container-fluid">
        <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-3">
                <Images src={Coach} style={{ borderRadius: "20px" }}></Images>
                <h3>Coaches</h3>
                <p>Find and choose your coach among the best from all over the country!</p>
                <a href="/search" >Search for instructors near you</a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <Images src={Logo} style={{ borderRadius: "20px" }}></Images>
                <h3>What is D4D?</h3>
                <p>Learn more about our organisation!</p>
                <a href="/about">Read more about D4D here</a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <Images src={Sports} style={{ borderRadius: "20px" }}></Images>
                <h3>Sports</h3>
                <p>Try different sports and choose what you like the most!</p>
                <a href="SportParalympics">Learn about Paralympics</a>
            </div>
        </div>
    </div>

)

export default ThreeColumnSection;