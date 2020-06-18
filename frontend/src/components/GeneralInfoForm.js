import React, { Component } from "react"
import './GeneralInfoForm.css';


class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: "",
      birtdate: "",
      disabilityInfo: "",
      streetNumber: "",
      street: "",
      zip: "",
      municipality: "",
      city: "",
      country: "",
      areaCode: "",
      phone: "",
      email: '',
      username: "",
      password: "",
      firstNameError: '',
      lastNameError: "",
      birtdateError: "",
      streetNumberError: "",
      streetError: "",
      zipError: "",
      municipalityError: "",
      cityError: "",
      countryError: "",
      areaCodeError: "",
      phoneError: "",
      emailError: '',
      usernameError: "",
      passwordError: "",
    };
  }

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value }, () => {
      this.validateFirstName();
    });
  };
  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value }, () => {
      this.validateLastName();
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };
  validateFirstName = () => {
    const { firstName } = this.state;
    this.setState({
      firstNameError:
        firstName.length > 3 ? null : 'Name must be longer than 3 characters'
    });
  }
  validateLastName = () => {
    const { lastName } = this.state;
    this.setState({
      lastNameError:
        lastName.length > 2 ? null : 'Name must be longer than 2 characters'
    });
  }
  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 2 ? null : 'Email must be longer than 3 characters'
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email } = this.state;
    alert(`Your state values: \n 
            firstName: ${firstName} \n 
            lastName: ${lastName} \n
            email: ${email}`);
  };
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
                  className={`form-control ${this.state.firstNameError ? 'is-invalid' : ''}`}
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                  onBlur={this.validateFirstName} />
                <div className='invalid-feedback'>{this.state.firstNameError}</div>
              </div>
              <div className="form-row">
                <input type="text"
                  name="lastName"
                  id="lastName"
                  className={`form-control ${this.state.lastNameError ? 'is-invalid' : ''}`}
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                  onBlur={this.validateLastName} />
                <div className='invalid-feedback'>{this.state.lastNameError}</div>

              </div>
              <div className="form-row">
                <input type="text"
                  name="birthdate"
                  className="birthdate"
                  id="birthdate"
                  placeholder="Birthdate" required />
              </div>
              <div className="form-row">
                <select className="custom-select" required>
                  <option value="">Disability</option>
                  <option value="intellectualDis">Intellectual Disabilities</option>
                  <option value="physicalDis">Physical Disabilities</option>
                  <option value="sensoryDis">Sensory Disabilities</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down" />
                </span>
              </div>
              <div className="form-row">
                <input type="text"
                  name="disabilityInfo"
                  className="disabilityInfo"
                  id="disabilityInfo"
                  placeholder="Additional Information about Disability  " />
              </div>

              <div className="form-row">
                <div className="form-row justify-content-center">
                  <p>Sports of interest</p>
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
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  onBlur={this.validateEmail} />
                <div className='invalid-feedback'>{this.state.emailError}</div>

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
export default GeneralInfoForm