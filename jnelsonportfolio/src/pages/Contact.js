import React from "react";
import Navheader from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navheader />
    {/* contact sheet; placeholder for contact form */}
    <main className="container content">
        <section className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 window">
            <h1>Contact</h1>
            <hr></hr>
           <div className="mb-3">
            <p><i className="fab fa-linkedin-in mx-3"></i><a href="https://www.linkedin.com/in/jennifer-nelson-aa3a2ba7/">https://www.linkedin.com/in/jennifer-nelson-aa3a2ba7/</a></p> 
            <p><i className="fab fa-github mx-3"></i><a href="https://github.com/jnel-221">https://github.com/jnel-221</a></p> 
            <p><i className="fas fa-envelope mx-3"></i>jennifer.nelson242@gmail.com</p> 
            <p><i className="fas fa-phone-alt mx-3"></i>503-522-6905</p>
            </div>
          </div>
        </section> 
      </main> 

      {/* contact form; will replace contact sheet once it's working */}
      {/* <main className="container content">
        <section className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 window">
            <h1>Contact</h1>
            <hr></hr>
           <div className="mb-3">
              <label className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <button type="button" className="btn  btn-lg btn-style rounded-0">
              Submit
            </button>
            <hr></hr>
            <p>
              <i className="fas fa-envelope"></i> jennifer.nelson242@gmail.com |{" "}
              <i className="fas fa-phone-alt"></i>
              (503) 522-6905
            </p>
          </div>
        </section> 
      </main>  */}
      <Footer />
    </>
  );
}

export default Contact;
