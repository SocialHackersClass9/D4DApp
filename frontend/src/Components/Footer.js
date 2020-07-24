import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Youtube } from 'react-feather';

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
        <h4>Links</h4>
        <div className="row">

          <div className="col-md-3 col-sm-6 d-flex align-items-center">

            <ul className="list-unstyled">
              <li><a href="https://www.vodafone.gr/vodafone-ellados/idryma-vodafone/">Ίδρυμα Vodafone</a></li>

              <li><a href="http://perpato.gr/">Σύλλογος Ατόμων με Κινητικά Προβλήματα και Φίλων «Περπατώ»</a></li>
              <li><a href="https://www.facebook.com/syllogosperpato/"> <Facebook></Facebook> «Περπατώ»</a></li>



            </ul>
          </div>

          <div className="col-md-3 col-sm-6 d-flex align-items-center">

            <ul className="list-unstyled">
              <li><a href="https://socialhackersacademy.org">Social Hackers Academy</a></li>
              <li><a href="https://www.oseka.gr/">ΟΣΕΚΑ</a></li>
              <li><a href="http://irodikos.gr">Αθλητικός Σύλλογος Ατόμων με Αναπηρία «Hρόδικος»</a> </li>
              <li><a href="https://www.facebook.com/irodikos"> <Facebook></Facebook> «Hρόδικος»</a> </li>

            </ul>

          </div>

          <div className="col-md-3 col-sm-6">

            <ul className="list-unstyled">
              <li><a href="/">Χορηγός</a></li>
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
  </FooterContainer >


)

export default Foot;