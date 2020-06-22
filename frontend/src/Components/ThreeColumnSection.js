import React from 'react';
import Logo from '../assets/accountlogo.png';
import Coach from '../assets/coaches.png';
import Sports from '..//assets/sports.jpg';
import Styled from 'styled-components';

const Images = Styled.img`
height:250px;
position:relative;
margin: 20px;

`


const ThreeColumnSection = () => (
    <div className="container-fluid">
        <hr style={{paddingTop:"50px"}}></hr>
        <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4" style={{paddingBottom:"100px"}}>
                <Images src={Coach} style={{borderRadius: "20px"}}></Images>
                <h3>Coaches</h3>
                <p>Find and choose your coach among the best from all over the country!</p>
                <a href="/search">See which coaches are near you...</a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <Images src={Logo}></Images>
                <h3>About D4D</h3>
                <p>Some general info about the organization...</p>
                <a href="/">Learn more...</a>
            </div>
            <div className="col-sm-12 col-md-4">
                <Images src={Sports} style={{borderRadius: "20px" , height:"250px" , width:"43np0px"}}></Images>
                <h3>Sports</h3>
                <p>Try different sports and choose what you like the most!</p>
                <a href="/">Learn more...</a>
            </div>
        </div>
    </div>
   
)

export default ThreeColumnSection;