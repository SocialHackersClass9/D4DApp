import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import trainingImage from '../../../assets/training2.jpg';

const Styles = styled.div`
.jumbo {
    background:url(${trainingImage}) no-repeat fixed bottom;
    background-size:cover;
    color:#efefef;
    height:250px;
    position:relative;
    z-index: -2;
    
}
 .overlay {
     background-color: #000;
     opacity: 0.4;
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0 ;
     z-index:-1;
 }

.text {
    text-align:center;
}

`

const Jumbotron = () => (


    <Styles>
        <div>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container className="text">
                <h1>Welcome to D4D</h1>
                <p>Find your coach and start training today</p>
            </Container>
        </Jumbo>
        </div>
    </Styles>
)

export default Jumbotron;