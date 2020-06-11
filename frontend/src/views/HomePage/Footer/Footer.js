import React from 'react';
import styled from 'styled-components';
import {Facebook , Twitter, Youtube} from 'react-feather';

const FooterContainer = styled.footer`
 .footer-middle {
    background-color : #18181a;
    padding-top: 3rem;
    color: white;

  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li {
    margin-top: 10px;
  }

  ul li a {
    color: grey;
  }
  
  ul li a:hover {
    color: lightgrey;
  }
`


const Foot = () => (
   
    <FooterContainer className="main-footer">
      <div className="footer-middle">
      <div className="container">
       <div className="row">
         <div className="col-md-3 col-sm-6">
           <h4>Lorem ipsum</h4>
           <ul className="list-unstyled">
             <li>Lorem ipsum</li>
             <li>Lorem ipsum</li>
             <li>Lorem ipsum</li>
             <li>Lorem ipsum</li>
           </ul>
         </div>

         <div className="col-md-3 col-sm-6">
           <h4>Lorem ipsum</h4>
           <ul className="list-unstyled">
             <li><a href="/">Lorem ipsum</a></li>
             <li><a href="/">Lorem ipsum</a></li>
             <li><a href="/">Lorem ipsum</a></li>
             <li><a href="/">Lorem ipsum</a></li>
           </ul>
         </div>

         <div className="col-md-3 col-sm-6">
           <h4>Lorem ipsum</h4>
           <ul className="list-unstyled">
             <li><a href="/">Lorem ipsum</a></li>
             <li><a href="/">Lorem ipsum</a></li>
             <li><a href="/">Lorem ipsum</a></li>
             <li><a href="/">Lorem ipsum</a></li>
           </ul>
         </div>

         <div className="col-md-3 col-sm-6">
           <h4>Social Media</h4>
           <ul className="list-unstyled">
             <li><a href="/"><Facebook></Facebook> Facebook</a></li>
             <li><a href="/"><Twitter /> Twitter</a></li>
             <li><a href="/"><Youtube /> Youtube</a></li>
           </ul>
         </div>

       </div>
       <div className="footer-bottom">
         <p className="text-xs-center">
           &copy;{new Date().getFullYear()} D4D App - All Rights Reserved.
         </p>
       </div>
      </div>
      </div>
    </FooterContainer>


)

export default Foot;