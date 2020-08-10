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
                    <div className="d-flex justify-content-around">
                        <Button variant="primary" href="/student_sign_up" size="lg">
                            User
                    </Button>
                        <Button variant="primary" href="/instructors_registration" size="lg">
                            Instructor
                    </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default UserRegister;