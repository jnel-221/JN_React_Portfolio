import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <span id="gitHub" className="m-1 p-3">
            <a href="https://github.com/jnel-221" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
          </span>
          |
          <span id="linkedIn" className="m-1 p-3">
            <a
              href="https://www.linkedin.com/in/jennifer-nelson-aa3a2ba7/"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </span>
          <span>&copy; Copyright 2020 JNelson</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
