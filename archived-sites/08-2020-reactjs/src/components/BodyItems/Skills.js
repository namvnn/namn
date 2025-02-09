import React from "react";
import WebDevIcon from "../../static/web_development.svg";
import PL from "../../static/programming.svg";
import CodeEditor from "../../static/code_editor.svg";
import Others from "../../static/others.svg";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <p className="hi">Skills</p>
      <div id="skills" className="skills">
        <SkillItem
          icon={WebDevIcon}
          name={"Web Development"}
          text={
            "Build back-end by Node.js (learning Spring), and front-end by React.js"
          }
          authorLink={"www.flaticon.com/authors/srip"}
          author={"srip"}
        />
        <SkillItem
          icon={PL}
          name={"Programming Language"}
          text={"C++, Java, Python and Javascript"}
          authorLink={"www.flaticon.com/authors/srip"}
          author={"srip"}
        />
        <SkillItem
          icon={CodeEditor}
          name={"Code Editor"}
          text={"Vim and Visual Studio Code"}
          authorLink={"www.flaticon.com/authors/srip"}
          author={"srip"}
        />
        <SkillItem
          icon={Others}
          name={"Other skills"}
          text={"Final Cut Pro, self-taught, teamwork and self-management"}
          authorLink={"www.flaticon.com/authors/srip"}
          author={"srip"}
        />
      </div>
    </div>
  );
};

const SkillItem = ({ icon, name, text, authorLink, author }) => {
  return (
    <div className="skill-item">
      <div className="skill-icon">
        <img src={icon} alt="Error" style={{ color: "white" }} />
      </div>
      <div className="skill-name">{name}</div>
      <div className="description">{text}</div>
      <small>
        Icons made by{" "}
        <a href={`https://${authorLink}`} title={author}>
          {author}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </small>
    </div>
  );
};

export default Skills;
