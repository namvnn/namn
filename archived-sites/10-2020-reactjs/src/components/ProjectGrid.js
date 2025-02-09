import React from "react";
import Project from "./Project";
import projects from "../assets/projects/project-info.js";

const ProjectGrid = () => {
  return (
    <div className="project-grid container">
      {projects.projects.map((project, index) => (
        <Project
          key={index}
          link={project.link}
          imagePath={project.thumbnail}
          title={project.title}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
