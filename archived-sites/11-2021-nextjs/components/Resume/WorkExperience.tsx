import Button from "../Button";
import experiences, { Experience } from "../../data/workExp";
import styles from "../../styles/Resume.module.scss";

const WorkExperience = () => {
  return (
    <div className={styles["work-experiences"]}>
      <div className={styles["title-resume"]}>
        <Button text={"Work Experience"} />
      </div>
      <section>
        {experiences?.map((experience: Experience, index) => {
          return (
            <div key={index} className={styles["experience"]}>
              <div className={styles["back-border"]}></div>
              <div className={styles["exp-detail"]}>
                <div className={styles["exp-title-date"]}>
                  <h1>{experience.title}</h1>
                  <span>
                    {experience.startDate} - {experience.endDate}
                  </span>
                </div>
                <div className={styles["exp-company-location"]}>
                  <h2>{experience.company}</h2>
                  <span>{experience.location}</span>
                </div>
                <div>
                  <Description descriptionItems={experience.description} />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

interface DescriptionProp {
  descriptionItems: string[];
}
const Description: React.FC<DescriptionProp> = ({ descriptionItems }) => {
  return (
    <ul className={styles["exp-description"]}>
      {descriptionItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default WorkExperience;
