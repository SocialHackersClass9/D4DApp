import React from "react"
import './Profil.css';


function Photoinfo() {
    return (
        
        
<div className="contact1">
        <div className="container-contact1">
        <div className="image">
        <div className="circle-1" />
        <div className="circle-2" />
        <img src="https://100dayscss.com/codepen/jessica-potter.jpg" width={200} height={200} alt="Jessica Potter" />
      </div>
          <form className="contact1-form validate-form">
            <span className="contact1-form-title">
              Instructor's Profile
            </span>
           <div>FIRST NAME:</div> <br></br>
           <div>LAST NAME:</div> <br></br>
           <div>EMAIL:</div> <br></br>
           <div>SPECIALITY:</div> <br></br>
           <div>LOCATION:</div> <br></br>
           </form>
        </div>
      </div>
      
    );
  }

export default Photoinfo