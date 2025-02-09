import React from "react";
import { Link } from "react-router-dom";

const Project = ({ imagePath, title, link }) => {
  return (
    <Link className="project" to={link}>
      <div className="project-image">
        <img src={imagePath} alt={title} />
      </div>
      <div className="overlay-project-image">
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Project;
