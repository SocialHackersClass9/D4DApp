import React from 'react';
import styled from 'styled-components';
import trainingImage from '../assets/960.jpg';

const Styles = styled.div`

.jumbo {
    background:url(${trainingImage}) no-repeat;
    background-size: cover;
    color:#efefef;
    height:550px;
    position:relative;
    z-index: -2;
    
}
 .overlay {
     background-color: #000;
     opacity: 0.3;
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0 ;
     z-index:-1;
 }

.text {
    text-align:center;
    padding-top:150px;
    
}

.text p {
    font-size:25px;
    padding-top:20px;
}


`


const Jumbotron = () => (


    <Styles>

        <div className="jumbo container-fluid">
            <div className="overlay"></div>
            <div className="text container-fluid">
                <h1><strong>Welcome to D4D</strong></h1>
                <p><strong>Find your coach and start training today</strong></p>
            </div>



        </div>


    </Styles>

)

export default Jumbotron;