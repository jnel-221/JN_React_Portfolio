import React from "react";
import Navheader from "../components/Nav";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";


function Portfolio() {
  
  return (
    <>
      <Navheader />
      <div>Hello Portfolio World!</div>
      <Projects/>
      <Footer />
    </>
  );
}

export default Portfolio;
