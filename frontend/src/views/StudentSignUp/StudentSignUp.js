import React from "react";
import apis from '../../apis.js';
import {Form, Button} from "react-bootstrap";

export default class StudentSignUp extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			user_name: "",
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			phone: "",
			details: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

  handleChange(e) {
    const name = e.target.getAttribute("name");
    this.setState({
      [name]: e.target.value
    });
  }

	handleSubmit(e) {
	e.preventDefault();
	apis.post('/register/student', this.state)
      .then(resp => resp.json())
      .catch(err => console.error(err));
  }


	handleCancel(e) {
    e.preventDefault();
		this.setState ({
			user_name: "",
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			phone: "",
			details: ""
		})
  }

	render() {
		let data = this.state
		return (
			<Form onSubmit={this.handleSubmit} className="m-5 p-5">
				<Form.Group controlId="formName">
    			<Form.Label>First Name</Form.Label>
    			<Form.Control type="text" placeholder="John" name="first_name" value={data.first_name} onChange={this.handleChange} />
    			<Form.Label>Last Name</Form.Label>
    			<Form.Control type="text" placeholder="Doe" name="last_name" value={data.last_name} onChange={this.handleChange} />
  			</Form.Group>

				<Form.Group controlId="formBasicEmail">
    			<Form.Label>Email address</Form.Label>
    			<Form.Control type="email" placeholder="johndoe@example.com" name="email" value={data.email} onChange={this.handleChange} />
  			</Form.Group>
		
		  	<Form.Group controlId="formBasicPassword">
    			<Form.Label>Password</Form.Label>
    			<Form.Control type="password" placeholder="Password" name="password" value={data.password}  onChange={this.handleChange} />
  			</Form.Group>
		  	<Form.Group controlId="formPhone">
    			<Form.Label>Phone</Form.Label>
    			<Form.Control type="number" placeholder="+306999999123" name="phone" value={data.phone} onChange={this.handleChange} />
  			</Form.Group>
		  	<Form.Group controlId="formDetails">
    			<Form.Label>Details</Form.Label>
    			<Form.Control as="textarea" rows="5" placeholder="Hi I am a.." name="details" value={data.details} onChange={this.handleChange} />
  			</Form.Group>

  			<Button variant="primary" type="submit">
	    		Register
  			</Button>
  			{" "}
				<Button variant="warning" onClick={this.handleCancel} >
	    		Rest Form
  			</Button>
			</Form>
		)
	}
}
