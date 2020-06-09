import React from 'react';
import { Nav, NavBar, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../ButtonLogin/Button';

const Styles = styled.div`
.navbar {
    background-color: lightgrey;
}

navbar-brand, .navbar-nav .nav-link {
    color: black;

    &:hover {
        color:red;
    }
}


`;

const NavigationBar = () =>(
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>D4D</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            <Button/>
        </Navbar>
    </Styles>
)

export default NavigationBar;