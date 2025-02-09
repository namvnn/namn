import React from "react";
import SubItem from "../components/SubItem";
import NavBar from "../components/Navbar";
import experience from "../assets/resume/experience";
import skills from "../assets/resume/skills";
import education from "../assets/resume/education";
import volunteer from "../assets/resume/volunteer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";

const Resume = () => {
  return (
    <>
      <NavBar />
      <div className="resume">
        <div className="content container">
          {/* Work Experience */}
          <div className="work-experience columns ">
            <h3 className="title column section-name">
              <span>WORK EXPERIENCE</span>
            </h3>
            <div className="experiences column is-two-thirds">
              {experience.all.map((infoExp) => (
                <SubItem item={infoExp} />
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="skills columns ">
            <h3 className="title column section-name">
              <span>SKILLS</span>
            </h3>
            <div className="experiences column is-two-thirds py-5">
              {skills.all.map((skill) => {
                return (
                  <div className="mb-4 px-4">
                    <div className="subtitle is-5 has-text-weight-medium skill-name">
                      {skill.name}
                    </div>
                    <div>{skill.list}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="education columns">
            <h3 className="title column section-name">
              <span>EDUCATION</span>
            </h3>
            <div className="experiences column is-two-thirds">
              {education.all.map((edu) => (
                <SubItem item={edu} />
              ))}
            </div>
          </div>

          {/* Volunteer */}
          <div className="volunteer columns">
            <h3 className="title column section-name">
              <span>VOLUNTEER</span>
            </h3>
            <div className="experiences column is-two-thirds">
              {volunteer.all.map((vol) => (
                <SubItem item={vol} />
              ))}
            </div>
          </div>
        </div>
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Resume;
