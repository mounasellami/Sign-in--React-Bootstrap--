import React from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header=() => {
  return (
    <header>
      <Navbar bg="dark" 
              variant="dark"
              sticky="top" 
              expand="lg"   //sm resposive
              collapseOnSelect>
        <Navbar.Brand>
          <img src="LogoR.B.png" //"https://avatars1.githubusercontent.com/u/6853419?s=280&v=4"
               width="40px"  
               height="40px"
          />          
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className='me-auto my-2 my-lg-0'>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Getting Started">Getting Started</Nav.Link>
            <Nav.Link href="#Components">Components</Nav.Link>
            <NavDropdown title="v2.0.3(5.1)" >
              <NavDropdown.Item className='SimpleDropdoun' href="#v2.0.3(5.1)/v1.6.1 (Bootstrap 4)">v1.6.1 (Bootstrap 4)</NavDropdown.Item>
              <NavDropdown.Item className='SimpleDropdoun'href="#v2.0.3(5.1)/v0.33.1 (Bootstrap 3)">v0.33.1 (Bootstrap 3)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>  
            <Form inline className="search justify-content-end">
              <FormControl type="search" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
            <NavDropdown title="Be with us" className='justify-content-end'>
              <NavDropdown.Item href="#Be with us/Sign in">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="#Be with us/Sign up">Sign up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Be with us/Contact Us">Contact us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> <i className="logoDiscord.svg"></i> </Nav.Link>
            <Nav.Link> <i className="logoGithub.svg"></i> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
  }
export default Header;