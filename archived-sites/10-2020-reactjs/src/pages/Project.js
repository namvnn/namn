import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ProjectGrid from "../components/ProjectGrid";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <NavBar />
        <ProjectGrid />
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Projects;
