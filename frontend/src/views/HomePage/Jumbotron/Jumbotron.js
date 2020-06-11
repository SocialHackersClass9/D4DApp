import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import trainingImage from '../../../assets/training2.jpg';
import Button from '../ButtonLogin/Button';

const Styles = styled.div`

.jumbo {
    background:url(${trainingImage}) no-repeat;
    background-size:cover;
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
    padding-top:50px;
    
}

.login{
    magin:0;
    padding:0;
    display:flex;
    position:relative;
    align-items: center;
    
}

`


const Jumbotron = () => (


    <Styles>
        
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container className="text">
                <h1>Welcome to D4D</h1>
                <p>Find your coach and start training today</p>
                <Button />
            </Container>
            <Container className="login">
           
                
            </Container>
            
           
        </Jumbo>
      
        
    </Styles>
    
)

export default Jumbotron;