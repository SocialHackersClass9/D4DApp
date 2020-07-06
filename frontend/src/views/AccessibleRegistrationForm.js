import React, { Component } from "react"
import './AccessibleRegistrationForm.css';


class AccessibleRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      first_name: '',
      last_name: "",
      year_of_birth: "",
      gender: "",
      phone: "",
      email: '',
      user_name: "",
      password: "",

    };
  }

  render() {
    return (
      <div className="page-content">
        <div className="form-v10-content">
          <form className="form-detail" onSubmit={this.handleSubmit} action="#" method="post" id="myform">
            <div className="form-left">
              <div className="form-row justify-content-center">
                <h2>General Infomation</h2>
              </div>

              <div className="form-row">
                <input type="text"
                  name="firstName"
                  id="firstName"
                  className='firstName'
                  placeholder="First Name"
                  value={this.state.firstName}
                  required />
              </div>
              <div className="form-row">
                <input type="text"
                  name="lastName"
                  id="lastName"
                  className="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  required />
              </div>
              <div className="form-row">
                <input type="text"
                  name="birthdate"
                  className="birthdate"
                  id="birthdate"
                  placeholder="Birthdate" required />
              </div>


              <div className="form-row">
                <select className="form-control" id="disability">
                  <option selected>Choose your disability</option>
                  <option value="intellectualDis">Intellectual Disabilities</option>
                  <option value="physicalDis">Physical Disabilities</option>
                  <option value="sensoryDis">Sensory Disabilities</option>
                </select>
              </div>
              <div className="form-row">
                <input type="text"
                  name="disabilityInfo"
                  className="disabilityInfo"
                  id="disabilityInfo"
                  placeholder="Additional Information" />
              </div>

              <div className="form-row">
                <div className="form-row justify-content-center">
                  <h3>Sports of interest</h3>
                </div>
              </div>
            </div>

            <div className="form-right">
              <div className="form-row justify-content-center">
                <h2>Contact Details</h2>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text"
                    name="streetNumber"
                    id="streetNumber"
                    className="input-text"
                    placeholder="Str. Number" required />
                </div>
                <div className="form-row form-row-2">
                  <input type="text"
                    name="street"
                    className="street"
                    id="street"
                    placeholder="Street Name" required />
                </div>
              </div>
              <div className="form-row">
                <input type="text"
                  name="zip"
                  className="zip"
                  id="zip"
                  placeholder="Zip Code" required />
              </div>
              <div className="form-row">
                <input type="text"
                  name="municipality"
                  className="municipality"
                  id="municipality"
                  placeholder="Μunicipality" required />
              </div>
              <div className="form-row">
                <input type="text"
                  name="city"
                  className="city"
                  id="city"
                  placeholder="City" required />
              </div>
              <div className="form-row">
                <input type="text"
                  name="country"
                  className="country"
                  id="country"
                  placeholder="Country" required />
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text"
                    name="areaCode"
                    className="areaCode"
                    id="areaCode"
                    placeholder="Code +" required />
                </div>
                <div className="form-row form-row-2">
                  <input type="text"
                    name="phone"
                    className="phone"
                    id="phone"
                    placeholder="Phone Number" required />
                </div>
              </div>
              <div className="form-row">
                <input type="text"
                  name="email"
                  id="email"
                  className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                  required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                  placeholder="Your Email"
                />


              </div>
              <div className="form-row">
                <input type="text"
                  name="username"
                  id="username"
                  className="input-text"
                  placeholder="Username" />
              </div>
              <div className="form-row">
                <input type="text"
                  name="password"
                  id="password"
                  className="input-text"
                  placeholder="Password" />
              </div>
              <div className="form-checkbox">
                <label className="container">
                  <p>I do accept the
                  <a href="#" className="text"> Terms and Conditions </a>
                  of your site.</p>
                  <input type="checkbox"
                    name="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="register" defaultValue="Register Badge" />
              </div>
            </div>
          </form>
        </div>
      </div >

    );
  }
}
export default AccessibleRegistrationForm