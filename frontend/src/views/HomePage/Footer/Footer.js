import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter } from 'react-feather';

const Styles = styled.div`
 .footer {
     background-color: black;
     width:100%;
     
     position:absolute;
     bottom: 0;
     left: 0;
 }

.list-inline{
    width: 510px;
}
`


const Foot = () => (
    <Styles>
    <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="">
                <Facebook />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </Styles>


)

export default Foot;