import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Youtube } from 'react-feather';



const Foot = () => (

  <div className="main-footer">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <h4>Links</h4>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <ul className="list-unstyled">
              <li><a href="https://www.vodafone.gr/vodafone-ellados/idryma-vodafone/">Ίδρυμα Vodafone</a></li>
              <li><a href="http://perpato.gr/">Σύλλογος Ατόμων με Κινητικά <br></br> Προβλήματα και Φίλων «Περπατώ»</a></li>
              <li><a href="https://www.facebook.com/syllogosperpato/"> <Facebook></Facebook> «Περπατώ»</a></li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-6">
            <ul className="list-unstyled">
              <span></span>
              <li><a href="https://www.oseka.gr/">ΟΣΕΚΑ</a></li>
              <li><a href="http://irodikos.gr">Αθλητικός Σύλλογος Ατόμων <br></br>με Αναπηρία «Hρόδικος»</a> </li>
              <li><a href="https://www.facebook.com/irodikos"> <Facebook></Facebook> «Hρόδικος»</a> </li>
              <li><a href="https://socialhackersacademy.org">Social Hackers Academy</a></li>
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
          <p style={{ fontSize: "medium" }}>
            &copy;{new Date().getFullYear()} D4D App - All Rights Reserved.
         </p>
        </div>

      </div>
    </div>
  </div>
)

export default Foot;