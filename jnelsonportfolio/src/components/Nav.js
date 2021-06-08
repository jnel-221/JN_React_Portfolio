import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import{Link} from "react-router-dom";
import resume from "../images/jennifer_nelson_full_stack_resume.pdf";

function Navheader (){

    return(
        <>
<Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/" id="title">Jennifer Nelson</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link href={resume} download="Jennifer Nelson Resume">Download Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    )
}

export default Navheader;