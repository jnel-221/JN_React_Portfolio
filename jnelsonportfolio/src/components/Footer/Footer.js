import React from "react";
import {Navbar} from "react-bootstrap";
import "./style.css"

function Footer() {
  return (
    <>
    <Navbar fixed="bottom" className="justify-content-center">
      <footer className="footer">
        <div className="container">
          <span id="gitHub" className="m-1 p-3">
            <a href="https://github.com/jnel-221" className="social-icon">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </span>
          |
          <span id="linkedIn" className="m-1 p-3">
            <a
              href="https://www.linkedin.com/in/jennifer-nelson-aa3a2ba7/"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </span>
          <span>&copy; Copyright 2021 JNelson</span>
        </div>
      </footer>
      </Navbar>
    </>
  );
}

export default Footer;
