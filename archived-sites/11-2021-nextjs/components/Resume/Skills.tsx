import skills, { Skill } from "../../data/skills";
import Button from "../Button";
import styles from "../../styles/Resume.module.scss";

const Skills = () => {
  return (
    <div className={styles["skills"]}>
      <div className={styles["title-resume"]}>
        <Button text={"Skills"} />
      </div>
      <section className={styles["skills-list"]}>
        <div className={styles["back-border"]}></div>
        <div className={styles["skills-detail"]}>
          {skills?.map((skill: Skill, index) => {
            return (
              <div className={styles["skill"]} key={index}>
                <h1>{skill.name}</h1>
                <p>{skill.list}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
