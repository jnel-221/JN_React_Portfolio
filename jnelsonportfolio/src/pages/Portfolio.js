import React from "react";
import Navheader from "../components/Nav";
import Footer from "../components/Footer/Footer";
import "../utils/projects.json";

function Portfolio() {
  return (
    <>
      <Navheader />
      <div>Hello Portfolio World!</div>
      {/* project contents generate here */}
      <Footer />
    </>
  );
}

export default Portfolio;
