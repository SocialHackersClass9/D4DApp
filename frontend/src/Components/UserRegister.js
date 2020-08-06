import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './Navigation.css';

const baseUrl = process.env.REACT_APP_API_URL;
const googleLogin = baseUrl + "/auth/google";
const facebookLogin = baseUrl + "/auth/facebook";

const UserRegister = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="success" onClick={handleShow}>
                Register
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register as</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Button variant="primary" type="submit" href="/student_sign_up">
                        User
                    </Button>


                    <Button variant="primary" type="submit" href="/instructors_registration">
                        Coach
                    </Button>

                </Modal.Body>
            </Modal>
        </div>
    );
};
export default UserRegister;