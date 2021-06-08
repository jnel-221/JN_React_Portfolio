import React from "react";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import{Link} from "react-router-dom";
import Footer from "../components/Footer";
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
  {/* about component */}
  {/* skills icons component */}
  {/* component which has clickable images to portfolio and contact pages */}

  {/* navbar as footer */}
  <Navbar fixed="bottom" className="justify-content-center">
  <Footer/>
  </Navbar>
   </>)
}

export default Home;