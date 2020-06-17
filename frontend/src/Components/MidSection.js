import React from 'react';
import styled from 'styled-components';
import Paralympics from '../assets/paralympics.jpg';

const Styles = styled.div`
.jumbo {
    background:url(${Paralympics}) no-repeat fixed bottom;
    background-size:cover;
    color:#efefef;
    height:250px;
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

`

const MidSection = () => (


    <Styles>
        
        <div className="jumbo container-fluid">
            <div className="overlay"></div>
        </div>
        
    </Styles>
)

export default MidSection;