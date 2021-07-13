import React from "react";
import profilePic from "../../assets/images/jnelprofilepic.jpg";
import {Link} from "react-router-dom";
import "./style.css";
import { Nav } from "react-bootstrap";

function About (){

  const linkstyle = {
    "font-family": '"Open Sans", sans-serif',
    "font-size": "16px",
    "color": "rgba(5, 51, 121)"
  }  
    return(
    <main className="container content about-padding">
      <div className="row">
        <article className="col-sm-12 col-md-8 col-lg-8 window">
          <h1 className="pageTitles">About Me</h1>
          <hr></hr>
          <img src={profilePic} className="img-fluid rounded-circle" alt="Jennifer Nelson" id="jnel"></img>
            <p>Hi, I'm Jennifer.</p> <p>I'm a full stack developer with a passion for creating systems that work well with people!</p>
         <Nav.Link as={Link} to="/resume" style={linkstyle}>View resume</Nav.Link>
        </article>
      </div>
    </main>
       
        
    );
}

export default About;