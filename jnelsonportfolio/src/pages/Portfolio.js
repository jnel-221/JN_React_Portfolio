import React from "react";
import Navheader from "../components/Navbar/Nav";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import "../css/Portfolio.css"


function Portfolio() {
  
  return (
    <>
      <Navheader />
      <main className="container content window">
      <h1 className="p">Portfolio</h1>
      <hr></hr>
      <Projects/>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
