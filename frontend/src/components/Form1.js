import React from "react"
import './Form1.css';


function Form() {
    return (
        <div className="page-content">
        <div className="form-v10-content">
          <form className="form-detail" action="#" method="post" id="myform">
            <div className="form-left">
              <h2>General Infomation</h2>
              
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" name="first_name" id="first_name" className="input-text" placeholder="First Name" required />
                </div>
                <div className="form-row form-row-2">
                  <input type="text" name="last_name" id="last_name" className="input-text" placeholder="Last Name" required />
                </div>
              </div>

              <div className="form-row">
                <select name="title">
                  <option className="option" value="title">Location</option>
                  <option className="option" value="businessman">Athens</option>
                  <option className="option" value="reporter">Attiki</option>
                  <option className="option" value="secretary">Province</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down" />
                </span>
              </div> 

              <div className="form-row">
                <select name="position">
                  <option value="position">Sports of interest</option>
                  <option value="director">Football</option>
                  <option value="manager">Basketball</option>
                  <option value="employee">Volleyball</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down" />
                </span>
              </div>
              <div className="form-row">
                <input type="text" name="company" className="company" id="company" placeholder="Birthday" required />
              </div>
              <div className="form-group">
              <div className="form-row form-row-3">
                  <select name="employees">
                    <option value="employees">Gender</option>
                    <option value="trainee">Male</option>
                    <option value="colleague">Female</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down" />
                  </span>
                </div>
                <div className="form-row form-row-4">
                  <select name="employees">
                    <option value="employees">Disability</option>
                    <option value="trainee">Intellectual Disabilities</option>
                    <option value="colleague">Mental Illness</option>
                    <option value="associate">Physical Disabilities</option>
                    <option value="associate">Sensory Disabilities</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down" />
                  </span>
                </div>
              </div>
            </div>
            <div className="form-right">
              <h2>Contact Details</h2>
              <div className="form-row">
                <input type="text" name="street" className="street" id="street" placeholder="Street + Nr" required />
              </div>
              <div className="form-row">
                <input type="text" name="additional" className="additional" id="additional" placeholder="Μunicipality" required />
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" name="zip" className="zip" id="zip" placeholder="Zip Code" required />
                </div>
                <div className="form-row form-row-2">
                  <select name="City">
                    <option value="place">Place</option>
                    <option value="Street">Street</option>
                    <option value="District">District</option>
                    <option value="City">City</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down" />
                  </span>
                </div>
              </div>
              <div className="form-row">
                <select name="country">
                  <option value="country">Country</option>
                  <option value="Vietnam">Greece</option>
                  <option value="Malaysia">Iran</option>
                  <option value="India">Turkey</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down" />
                </span>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" name="code" className="code" id="code" placeholder="Code +" required />
                </div>
                <div className="form-row form-row-2">
                  <input type="text" name="phone" className="phone" id="phone" placeholder="Phone Number" required />
                </div>
              </div>
              <div className="form-row">
                <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Your Email" />
              </div>
              <div className="form-checkbox">
                <label className="container"><p>I do accept the <a href="#" className="text">Terms and Conditions</a> of your site.</p>
                  <input type="checkbox" name="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="register" defaultValue="Register Badge" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default Form