import React from "react";
import apis from '../apis.js';
import { Form, Button } from "react-bootstrap";
import "./Instructors_registration/Instructors_registration.css";

export default class StudentRegistration extends React.Component {
	constructor(props) {
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
		this.setState({
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
			<div className="sepNav">
				<form id='form'>
					<div className="form-container">
						<h1 className="mb-5">Personal Information</h1>
						<br />

						{/* 	To be added: disabilities, sports, location, age, gender + validation */}
						<Form onSubmit={this.handleSubmit}>
							<Form.Group controlId="formName">
								<Form.Label>
									First Name
						</Form.Label>
								<Form.Control
									size="lg"
									type="text"
									placeholder="John"
									name="first_name"
									value={data.first_name}
									required
									onChange={this.handleChange} />
								<Form.Label>
									Last Name
						</Form.Label>
								<Form.Control
									size="lg"
									type="text"
									placeholder="Doe"
									name="last_name"
									value={data.last_name}
									required
									onChange={this.handleChange} />
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>
									Email address
						</Form.Label>
								<Form.Control
									size="lg"
									type="email"
									placeholder="johndoe@example.com"
									name="email"
									value={data.email}
									required
									onChange={this.handleChange} />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>
									Password
						</Form.Label>
								<Form.Control
									size="lg"
									type="password"
									placeholder="Password"
									name="password"
									value={data.password}
									required
									onChange={this.handleChange} />
							</Form.Group>

							<Form.Group controlId="formPhone">
								<Form.Label>
									Phone number
						</Form.Label>
								<Form.Control
									size="lg"
									type="textarea"
									placeholder="+30 6912345678"
									name="phone"
									value={data.phone}
									required
									onChange={this.handleChange} />
							</Form.Group>

							<Form.Group controlId="formDetails">
								<Form.Label>
									Details
						</Form.Label>
								<Form.Control
									size="lg"
									as="textarea"
									rows="5"
									placeholder="Some words about yourself"
									name="details"
									value={data.details}
									required
									onChange={this.handleChange} />
							</Form.Group>

							<Button
								variant="primary"
								type="submit">
								Register
  					</Button>
							{" "}
							<Button
								variant="warning"
								onClick={this.handleCancel} >
								Reset Form
  					</Button>
						</Form>
					</div>
				</form>
			</div >
		)
	}
}
