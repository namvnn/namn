import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import projects from "../assets/projects/project-info";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const ProjectDescription = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    projects.projects.forEach((projectItem) => {
      if (projectItem.params === name) {
        setProject(projectItem);
      }
    });
  }, [name]);
  return (
    <>
      <div className="project-description">
        <NavBar />
        {/* Project */}
        {project && (
          <div className="container p-4">
            {/* Back Arrow */}
            <div className="back-to">
              <Link to="/projects">
                <IoMdArrowRoundBack />
                <span>Back to projects</span>
              </Link>
            </div>
            <div className="columns pt-5">
              {/* Project Description */}
              <div className="column">
                <p className="is-size-4 has-text-centered">{project.title}</p>
                <div className="pt-5 has-text-centered">
                  <img
                    src={project.logo}
                    style={{ height: "auto", width: "100px" }}
                    alt="logo"
                  />
                </div>
                <p className="py-5">{project.description}</p>
                <p className="py-1">
                  Year:{" "}
                  <span className="has-text-weight-semibold">
                    {project.date}
                  </span>
                </p>
                <p className="py-1">
                  Collaborate with:{" "}
                  <span className="has-text-weight-semibold">
                    {project.collab}
                  </span>
                </p>
                <p className="py-1">
                  Programming languages:{" "}
                  <span className="has-text-weight-semibold">
                    {project.programmingLanguage}
                  </span>
                </p>
                <p className="py-1">
                  Technologies:{" "}
                  <span className="has-text-weight-semibold">
                    {project.technologies}
                  </span>
                </p>
                <p className="py-1">
                  Tags:{" "}
                  <span className="has-text-weight-semibold">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag mx-1">
                        {tag}
                      </span>
                    ))}
                  </span>
                </p>
                {/* Buttons */}
                <div className="has-text-centered">
                  <a
                    className="button m-2 is-size-7"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ outlineColor: "#000" }}
                  >
                    REPO LINK
                  </a>
                  {project.liveDemo && (
                    <a
                      className="button m-2 is-size-7"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ outlineColor: "#000" }}
                    >
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>

              {/* Main Image */}
              <div className="column is-two-thirds main-image image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        )}
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default ProjectDescription;
