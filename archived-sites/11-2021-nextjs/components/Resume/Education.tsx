import education, { Education } from "../../data/education";
import styles from "../../styles/Resume.module.scss";
import Button from "../Button";

const EducationList = () => {
  return (
    <div className={styles["education"]}>
      <div className={styles["title-resume"]}>
        <Button text={"Education"} />
      </div>
      <section className={styles["education-list"]}>
        {education?.map((educationItem: Education, index) => {
          return (
            <div className={styles["education-detail"]} key={index}>
              <div className={styles["back-border"]}></div>
              <div className={styles["education-item"]}>
                <div className={styles["edu-title-date"]}>
                  <h1>{educationItem.title}</h1>
                  <span>
                    {educationItem.startDate} - {educationItem.endDate}
                  </span>
                </div>
                <div className={styles["edu-school-location"]}>
                  <h2>{educationItem.school}</h2>
                  <span>{educationItem.location}</span>
                </div>
                <div>
                  <Description descriptionItems={educationItem.description} />
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
    <ul className={styles["edu-description"]}>
      {descriptionItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default EducationList;
