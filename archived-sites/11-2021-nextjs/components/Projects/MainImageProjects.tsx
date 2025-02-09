import MainImage from "../MainImage";
import styles from "../../styles/Projects.module.scss";

const MainImageProjects = () => {
  return (
    <div className={styles["main-image-container"]}>
      <MainImage>
        <div className={styles["page-title"]}>
          <h1>PROJECTS</h1>
        </div>
      </MainImage>
    </div>
  );
};

export default MainImageProjects;
