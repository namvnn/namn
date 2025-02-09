import React from "react";
import Me from "./BodyItems/Me";
import Skills from "./BodyItems/Skills";
import Education from "./BodyItems/Education";
import Projects from "./BodyItems/Projects";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="body-container">
      <div className="container">
        <Me />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
