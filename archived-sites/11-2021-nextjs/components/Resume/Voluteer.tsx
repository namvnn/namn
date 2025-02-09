import volunteer from "../../data/volunteer";
import styles from "../../styles/Resume.module.scss";
import Button from "../Button";

const VolunteerList = () => {
  return (
    <div className={styles["volunteer"]}>
      <div className={styles["title-resume"]}>
        <Button text={"Volunteer"} />
      </div>
      <section className={styles["voluteer-list"]}>
        {volunteer?.map((volunteerItem, index) => {
          return (
            <div className={styles["volunteer-detail"]}>
              <div className={styles["back-border"]}></div>
              <div className={styles["volunteer-item"]}>
                <div className={styles["vol-title-date"]}>
                  <h1>{volunteerItem.title}</h1>
                  <span>
                    {volunteerItem.startDate} - {volunteerItem.endDate}
                  </span>
                </div>
                <div className={styles["vol-company-location"]}>
                  <h2>{volunteerItem.company}</h2>
                  <span>{volunteerItem.location}</span>
                </div>
                <div>
                  <Description descriptionItems={volunteerItem.description} />
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
    <ul className={styles["vol-description"]}>
      {descriptionItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default VolunteerList;
