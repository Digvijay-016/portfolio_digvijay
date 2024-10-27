import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logod.jpeg'; // Make sure the path is correct.

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="https://drive.google.com/file/d/1zQSiWdBYr7XcGZrVixfFPemd9cW02SyC/view?usp=sharing" className="navbar-brand-animated">
          <img 
            src={logo} 
            alt="Digvijay Logo"
            style={{ 
              width: '40px', 
              height: '40px', 
              marginRight: '8px', 
              borderRadius: '50%',   
              objectFit: 'cover'     
            }}
          />
          Digvijay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#intro_section">About</Nav.Link>
            <Nav.Link href="#education_section">Education</Nav.Link>
            <Nav.Link href="#skills_section">Skills</Nav.Link>
            <Nav.Link href="#projects_section">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



