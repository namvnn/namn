import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Social from "../components/Social";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact">
        <h1 className="xin-chao has-text-grey">G'day!</h1>
        <Social />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
