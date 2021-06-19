import React from "react";
import profilePic from "../../assets/images/jnelprofilepic.jpg";
import "./style.css";

function About (){
    return(
    <main className="container content">
      <div className="row">
        <article className="col-sm-12 col-md-8 col-lg-8 window">
          <h1 className="pageTitles">About Me</h1>
          <hr></hr>
          <img src={profilePic} className="img-fluid rounded-circle" alt="Jennifer Nelson" id="jnel"></img>
            <p>As a full-stack software developer with a strong
              background in healthcare revenue cycle leadership, it's safe to say
              that I have a passion for designing applications that work well with
              people. I hope to use my new skills to create dynamic, user-friendly, and efficient
              applications in either the health care or education fields.</p>
            <p>I live in Minnesota with my spouse, daughter, and puppy. When not at my code editor, I enjoy hiking,
              skiing, <a id="dragonBoat"href="https://www.hornetwatersports.com/blogs/news/beginners-guide-to-dragon-boat-racing">dragonboat racing</a>, and learning new coding languages.</p>
             
        </article>
      </div>
    </main>
       
        
    );
}

export default About;