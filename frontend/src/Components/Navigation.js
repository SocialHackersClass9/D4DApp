import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/d4d.jpg';
import UserStatus from './UserStatus';


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

const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg' fixed="top" bg="">
            <Navbar.Brand href='/'><img width="80" height="70" src={Logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/search">Search Instructor</Nav.Link></Nav.Item>

                    <Nav.Item><Nav.Link href="/SportParalympics">Par-sports</Nav.Link></Nav.Item> 
                    <Nav.Item><Nav.Link href="/contact">Announcements</Nav.Link></Nav.Item>              
                    <Nav.Item><Nav.Link href="/student_sign_up">SignUp</Nav.Link></Nav.Item>              
{/* 
                    <Nav.Item><Nav.Link href="/paralympics">Paralympics Sports</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/student_sign_up">Student SignUp</Nav.Link></Nav.Item> */}

                </Nav>
            </Navbar.Collapse>
            <UserStatus />
            <h4>GR/EN</h4>
        </Navbar>
    </Styles>
)

export default NavigationBar;
