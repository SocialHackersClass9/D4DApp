import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import Logo from '../assets/d4d.jpg';
import UserStatus from './UserStatus';




/* const Styles = styled.div`
.navbar {
    background-color:rgba(33, 33, 33,0.8);
}

navbar-brand, .navbar-nav .nav-link {
    color: white;
    font-size:23px;
    font-weight:600;
    padding-left:40px;
    text-align:center;

    &:hover {
        color:#0F4D99;
        
    }
}


` */

const NavigationBar = () => (

    // <Styles>
    <Navbar collapseOnSelect expand='lg' fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href='/'><img width="80" height="70" src={Logo} alt="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/search">Search Instructor</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/paralympics">Paralympics Sports</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/gdpr">GDPR Policy</Nav.Link></Nav.Item>

                <UserStatus />
                {/* MISSING LANGUAGE FUNCTIONALITY */}
                <h4>GR/EN</h4>

            </Nav >
        </Navbar.Collapse >

    </Navbar >
    // </Styles> 

);

export default NavigationBar;