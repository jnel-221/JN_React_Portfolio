import React from "react";
import Navheader from "../components/Navbar/Nav";
import About from "../components/About/About";
// import Projects from "../components/Projects/Projects";
// import Launchpad from "../components/Launchpad/Launchpad";
import Skills from "../components/skills/Skills";
import Footer from "../components/Footer/Footer";
import "../css/Home.css";


function Home(){
   return (
       <>     
  <Navheader/>

  <About/>
  {/* <Projects className="mx-5"/> */}
  {/* <Launchpad/> */}
  {/* skills icons component */}
  <Skills />
  {/* component which has clickable images to portfolio and contact pages */}

  <Footer/> 
   </>)
}

export default Home;