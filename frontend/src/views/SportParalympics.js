import React, { useState } from "react";
import styled from "styled-components";
import "./sportParalympics.css";
// import ReadMoreReact from 'read-more-react';

const Styles = styled.div`
  padding: 10px;
`;

function SportParalymics() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        <ul className="details-ul ">
          <br />
          <br />
          <h6>Badminton</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>

          <br />
          <h6>Cricket</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>

          <br />
          <h6>Bowling</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>

          <br />
          <h6>Boxing</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>

          <br />
          <h6>Curling</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>

          <br />
          <h6>Tennis</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>

          <br />
          <h6>Skateboarding</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>

          <br />
          <h6>Surfing</h6>
          <li>Four years later, competitors from Holland joined the Games,</li>
        </ul>
      </p>
    </div>
  );

  const [readMoreHistory, setReadMoreHistory] = useState(false);
  const extraContent1 = (
    <div>
      <p className="extra-content">
        <ul className="details-ul1 ">
          <br />
          <br />
          Four years later, competitors from Holland joined the Games, and the
          international movement, now known as the Paralympic Movement, was
          born. Paralympic Games. In 1948, Sir Ludwig Guttmann organised a
          sports competition involving World War II veterans with a spinal
          cord-related injury in Stoke Mandeville, England
        </ul>
      </p>
    </div>
  );

  const linkName = readMore ? "Read less  " : " More Details... ";

  const linkNameHistory = readMoreHistory
    ? "Read less  "
    : " More about PARALYMIC... ";
  return (
    <Styles className="container-fluid">
      <h1>PARALYMIC SPORTS</h1>
      <div className="images">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKtJJFvg8Q4qCfwajyb-kLtddWquz9r7nw3g&usqp=CAU"
          alt="sports"
        />
      </div>

      <div className="row">
        <div
          className="history col-xs-10 col-sm-12 col-md-12"
          style={{ paddingBottom: "100px" }}
        >
          <h1>HISTORY OF PARALYMIC</h1>
          <h3>❝ SPORTS ❞</h3>
          <br />
        
            Paralympic Games. In 1948, Sir Ludwig Guttmann organised a sports
            competition involving World War II veterans with a spinal
            cord-related injury in Stoke Mandeville, England. Four years later,
            competitors from Holland joined the Games, and the international
            movement, now known as the Paralympic Movement, was born.
            <div className="App">
              <a
                className="read-more-link"
                onClick={() => {
                  setReadMoreHistory(!readMoreHistory);
                }}
              >
                <h2 className="linkk">{linkNameHistory}</h2>
              </a>
              {readMoreHistory && extraContent1}
            </div>
         
          <br />
          <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}
      <div>
        <div className="row">
          <div
            className="history col-xs-8 col-sm-8 col-md-8 pr-20px"
            style={{ paddingBottom: "100px" }}
          >
            <h1 className="summer">SUMMER </h1>
            <br />

            <p className="summer">Paralympic Games sports details</p>
           
            <table>
               <tbody>
              <tr>
                <th> Sports 1</th>
                <th> Sports 2</th>
                <th> Sports 3</th>
              </tr>
              <tr>
                <td>rafting</td>
                <td>rafting</td>
                <td>rafting</td>
              </tr>

              <tr>
                <td>canoeing</td>
                <td>canoeing</td>
                <td>canoeing</td>
              </tr>

              <tr>
                <td>bobsleigh</td>
                <td>bobsleigh</td>
                <td>bobsleigh</td>
              </tr>

              <tr>
                <td>kayaking</td>
                <td>kayaking</td>
                <td>kayaking</td>
              </tr>

              <tr>
                <td>Lois</td>
                <td>Lois</td>
                <td>Lois</td>
              </tr>
              <tr>
                <td>Joe</td>
                <td>Joe</td>
                <td>Joe</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Cleveland</td>
                <td>Cleveland</td>
              </tr>
              <br />
              
                <div className="App">
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <h2 className="linkk">{linkName}</h2>
                  </a>
                  {readMore && extraContent}
                </div>
             
              
               </tbody>

            </table>
           
            <br />
            <hr
              style={{ paddingTop: "50px", borderTop: "1px solid black" }}
            ></hr>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}
      

        <div className="row">
          <div
            className="history col-xs-8 col-sm-8 col-md-8 pr-20px"
            style={{ paddingBottom: "100px" }} >
              
            <h1 className="summer">WINTER PAR:SPORTS </h1>
            <br />
            <p className="summer">Paralympic winter sports details</p>
            <br />
            <hr
              style={{ paddingTop: "50px", borderTop: "1px solid black" }}
            ></hr>
          </div>
        </div>
      
    </Styles>
  );
}

export default SportParalymics;
