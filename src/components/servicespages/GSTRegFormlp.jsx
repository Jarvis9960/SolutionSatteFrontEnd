import React from "react";
import Navbar from "../Navbar";
import Navlinks from "../Navlinks";
import Footer from "../Footer";
import GSTregdetails from "../servicesdetails/GSTregdetails";

const GSTRegFormlp = () => {
  return (
    <>
      <Navbar />
      <Navlinks />
      <GSTregdetails/>
      <Footer/>
    </>
  );
};

export default GSTRegFormlp;
