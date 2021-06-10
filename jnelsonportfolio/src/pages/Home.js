import React from "react";
import Navheader from "../components/Navbar/Nav";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import "../css/Home.css";


function Home(){
   return (
       <>     
  <Navheader/>

  <About/>
  {/* skills icons component */}

  {/* component which has clickable images to portfolio and contact pages */}

  <Footer/> 
   </>)
}

export default Home;