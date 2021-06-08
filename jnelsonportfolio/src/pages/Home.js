import React from "react";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import{Link} from "react-router-dom";
import About from "../components/About";
import Footer from "../components/Footer/Footer";
import resume from "../images/jennifer_nelson_full_stack_resume.pdf";
import "../css/Home.css"


function Home(){
   return (
       <>
       {/* Top Navbar */}
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
  {/* about component */}
  <About/>
  {/* skills icons component */}
  {/* component which has clickable images to portfolio and contact pages */}

  {/* navbar as footer */}
  <Navbar fixed="bottom" className="justify-content-center">
  <Footer/>
  </Navbar>
   </>)
}

export default Home;