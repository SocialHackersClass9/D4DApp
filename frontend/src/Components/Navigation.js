import React from 'react';
import { Nav, NavBar, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from'../assets/accountlogo.png';
import UserStatus from './UserStatus';
import { Link } from 'react-router-dom';


const Styles = styled.div`
.navbar {
    background-color:rgba(33, 33, 33,0.8);
}

navbar-brand, .navbar-nav .nav-link {
    color: white;
    font-size:23px;
    font-weight:600;
    padding-left:50px;
    text-align:center;

    &:hover {
        color:#0F4D99;
        
    }
}


`;

const NavigationBar = () =>(
    <Styles>
        <Navbar expand='lg' fixed="top" bg="">
            <Navbar.Brand href='/'><img width="60" height="40" src={Logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Paralympics Sports</Nav.Link></Nav.Item> 
                    <Nav.Item><Nav.Link href="/contact">Announcements</Nav.Link></Nav.Item>              
                </Nav>
            </Navbar.Collapse>
            <UserStatus />
            <h4>GR/EN</h4>
        </Navbar>
    </Styles>
)

export default NavigationBar;