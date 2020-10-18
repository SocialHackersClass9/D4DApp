import React from 'react';
import Logo from '../assets/d4d.jpg';
import Coach from '../assets/coaches.jpg';
import Sports from '..//assets/sports.jpg';
import Styled from 'styled-components';

const Images = Styled.img`
height:250px;
margin-top: 50px;
margin-bottom:10px;

`


const ThreeColumnSection = () => (
    <div className="container-fluid">
        <div className="row text-center">
            <div className="col-xs-12 col-sm-12 col-md-4">
                <Images src={Coach} style={{ borderRadius: "20px" }}></Images>
                <a href="/search" ><h3>Coaches</h3></a>
                <p className="text-center">Find and choose your coach among the best from all over the country!</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
                <Images src={Logo} style={{ borderRadius: "20px" }}></Images>
                <a href="/about"><h3>What is D4D?</h3></a>
                <p className="text-center">Learn more about<br></br> our organisation!</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
                <Images src={Sports} style={{ borderRadius: "20px" }}></Images>
                <a href="SportParalympics"><h3>Sports</h3></a>
                <p className="text-center">Try different sports and choose what you like the most!</p>
            </div>
        </div>
    </div >

)

export default ThreeColumnSection;