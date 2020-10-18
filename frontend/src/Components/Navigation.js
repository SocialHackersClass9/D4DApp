import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import './Navigation.css';
import Logo from '../assets/d4d.jpg';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';

const NavigationBar = () => (


    <Navbar className="navbar" collapseOnSelect expand='lg' fixed="top" >
        <Navbar.Brand href='/'>
            <img
                width="80"
                height="70"
                src={Logo}
                alt="logo"
                className="d-inline-block align-top">
            </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">

                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/search">Search Instructor</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/paralympics">Paralympics Sports</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/gdpr">GDPR Policy</Nav.Link></Nav.Item>
                <Nav.Item> <UserLogin /></Nav.Item>
                <Nav.Item> <UserRegister /></Nav.Item>
                {/*  <Nav.Item><h4>GR/EN</h4></Nav.Item> */}

            </Nav>
        </Navbar.Collapse >
    </Navbar >

);

export default NavigationBar;