import React from "react";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import{Link} from "react-router-dom";
import Footer from "../components/Footer";


function Home(){
   return (
       <>
       {/* Top Navbar */}
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Jennifer Nelson</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  

  {/* navbar as footer */}
  <Navbar fixed="bottom">
  <Footer/>
  {/* <Nav.Link href="https://github.com/jnel-221">Github</Nav.Link>
  <Nav.Link href="https://www.linkedin.com/in/jennifer-nelson-aa3a2ba7/">Linked-in</Nav.Link>
  <span>&copy; Copyright 2020 JNelson</span> */}
  </Navbar>
   </>)
}

export default Home;