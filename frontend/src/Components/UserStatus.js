import React from "react";
import { useState, useContext } from "react";
import apis from "../apis.js";
import AppContext from "../context.js";
import { Nav } from "react-bootstrap";

import { Modal, Button, Form } from "react-bootstrap";

import Styled from "styled-components";

const Styles = Styled.div`
    .btn{
        margin: 10px 10px 5px 0;
    }

    .register .btn{
        po
    }
    
`;

  
const UserStatus = () => (
  <>
    <Login />
    <Register />
  </>
);

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Styles>
      <Button variant="success" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register as</Modal.Title>
        </Modal.Header>
        <Modal.Body className="register">
          <Button href="#" variant="outline-success" size="lg" block>
            User
          </Button>
          <Button href="#" variant="outline-primary" size="lg" block>
            Coach
          </Button>
        </Modal.Body>
      </Modal>
    </Styles>
  );
};

const Login = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    email: "george@test.com",
    password: "12345",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeEmail = function (e) {
    setValues({ ...values, email: e.target.value });
  };
  const handleChangePassword = function (e) {
    setValues({ ...values, password: e.target.value });
  };
  const context = useContext(AppContext);
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(values);
    apis.post("/login", values).then((data) => {
      if (data.is_authenticated) {
        console.log(data);
        context.setContext({ user: data.user });
        setShow(false);
      } else {
        alert("User name or password is wrong. Please try again.");
      }
    });
  };
  const baseUrl = process.env.REACT_APP_API_URL;

  const googleLoginStudent = baseUrl + "/auth/google/student";
  const googleLoginInstructor = baseUrl + "/auth/google/instructor";
  const facebookLogin = baseUrl + "/auth/facebook";

  return (
    <Styles>
      {context.user == null && (
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
      )}
      {context.user != null && (
        <Nav.Item>
          <Nav.Link href="/">{context.user.user_name}</Nav.Link>
        </Nav.Item>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChangeEmail}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChangePassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div style={{ marginTop: "1%" }}>
            <a
              href={googleLoginStudent}
              class="btn"
              style={{ color: "white", backgroundColor: "#dd4b39" }}
            >
              <i class="fa fa-google fa-fw"></i>Log In with Google as Student
            </a>
            <a
              href={googleLoginInstructor}
              class="btn"
              style={{ color: "white", backgroundColor: "#dd4b39" }}
            >
              <i class="fa fa-google fa-fw"></i>Log In with Google as Instructor
            </a>
            <a
              href={facebookLogin}
              class="btn"
              style={{ backgroundColor: "#3B5998", color: "white" }}
            >
              <i class="fa fa-facebook fa-fw"></i>Log In with Facebook
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Styles>
  );
};
export default UserStatus;
