import React from 'react';
import Styled from 'styled-components';

const Styles = Styled.div`
    .btn{
        margin: 10px 10px 5px 0;
    }

`


const button = () => (
    <Styles>
    <button type="button" className="btn btn-primary" style={{backgroundColor: "#5bdcf0"}}>Sign Up</button>
    <button type="button" className="btn btn-primary" style={{backgroundColor: "#0c6cb0"}}>Login</button>
    </Styles>
)

export default button;