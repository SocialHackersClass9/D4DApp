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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const baseUrl = process.env.REACT_APP_API_URL;
  const login = baseUrl + "/login";
  const googleLogin = baseUrl + "/auth/google";
  const facebookLogin = baseUrl + "/auth/facebook";

  return (
    <Styles>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            action={login}
            method="POST"
            enctype="application/x-www-form-urlencoded"
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>

          <div style={{ marginTop: "1%" }}>
            <a
              href={googleLogin}
              class="btn"
              style={{ color: "white", backgroundColor: "#dd4b39" }}
            >
              <i class="fa fa-google fa-fw"></i>Log In with Google
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
