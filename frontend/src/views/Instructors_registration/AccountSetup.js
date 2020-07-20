import React, { Component } from "react";
import "./Instructors_registration.css";
import axios from "axios";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const usernameRegex = RegExp(
  /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class AccountSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
      conpassword: null,
      email: null,
      password: null,
      formErrors: {
        user_name: "",
        conpassword: "",
        email: "",
        password: ""
      },
      emails: [],
      user_names: []
    };
  }

  componentDidMount() {
    this.request();
  }

  request() {
    const url = process.env.REACT_APP_API_URL + '/instructors/used';
    axios.get(url, { 'headers': { 'key': 'd4dapplicationregistrationapigetmethod1234567890' } })
      .then(response => {
        var emailuser = response.data.emailuser;
        emailuser.map((i) => {
          this.setState({emails: [...this.state.emails, i.email] })
          this.setState({user_names: [...this.state.user_names, i.user_name] })
        })
      })
      .catch(err => {
        alert('database is offline and your registration is not going to save into out database')
      })

  }

  Continue = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      const { values: { email, password, user_name, conpassword } } = this.props;
      this.state.email = { email };
      this.state.password = { password };
      this.state.user_name = { user_name };
      this.state.conpassword = { conpassword }
      this.props.nextStep();
    }
    else {
      let formErrors = { ...this.state.formErrors };
      alert('you can not let acount setup informations empty !!!')
      formErrors.user_name = "Username can not be empty !";
      formErrors.email = "Email can not be empty !";
      formErrors.password = "Password can not  be empty !";
      formErrors.conpassword = "Confirm password can not be empty !";
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "user_name":
        if (usernameRegex.test(value)) {
          formErrors.user_name = "";
          if (value.length < 4) {
            formErrors.user_name = "minimum 3 characaters required";
          }
          else if (value.length > 17) {
            formErrors.user_name = "maximum 16 characters required";
          }
          else if (this.state.user_names.indexOf(value) > -1) {
            formErrors.user_name = "Entered Username is in use";
          } else {
            formErrors.user_name = ''
          }
        }
        else {
          formErrors.user_name = 'Enter a valid Username'
        }
        break;

      case "email":
        if (emailRegex.test(value)) {
          formErrors.email = "";
          if (this.state.emails.indexOf(value) > -1) {
            formErrors.email = "Entered E-mail is already using"
          }
        }
        else {
          formErrors.email = "Enter a vaild E-mail"
        }
        break;

      case "conpassword":
        formErrors.conpassword =
          value !== this.state.password && value.length > 0 ? "Your confirmed password should be the same whith you choosen password" : ""
        break;

      case "password":
        formErrors.password =
          value.length < 5 ? "minimum 6 characaters required" : ""
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <form id='form'>
        <div className="form-container">
          <h1 className="mb-5">Account Setup</h1>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              className={'form-control'}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              required
              onChange={this.props.inputChange('email')}
              onInput={this.handleChange}
              value={this.props.values.email}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="username"
              className={'form-control'}
              placeholder="Username"
              type="text"
              name="user_name"
              noValidate
              onChange={this.props.inputChange('user_name')}
              onInput={this.handleChange}
              value={this.props.values.user_name}
              required
            />
            {formErrors.user_name.length > 0 && (
              <span className="errorMessage">{formErrors.user_name}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
              className={'form-control'}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={this.props.inputChange('password')}
              onInput={this.handleChange}
              value={this.props.values.password}
              required
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="conpassword">Confirm Password</label>
            <input type="password"
              className={'form-control'}
              placeholder="Reenter Password"
              type="password"
              name="conpassword"
              noValidate
              onChange={this.props.inputChange('conpassword')}
              onInput={this.handleChange}
              value={this.props.values.conpassword}
              required
            />
            {formErrors.conpassword.length > 0 && (
              <span className="errorMessage">{formErrors.conpassword}</span>
            )}
          </div>

          <br />
          <button type="button" onClick={this.Continue} class="btn btn-primary btn-lg btn-block">Continue</button>
        </div>
      </form>
    );
  }
}

export default AccountSetup;
