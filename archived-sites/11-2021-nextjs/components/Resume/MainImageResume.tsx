import MainImage from "../MainImage";
import styles from "../../styles/Resume.module.scss";

const MainImageResume = () => {
  return (
    <div className={styles["main-image-container"]}>
      <MainImage>
        <div className={styles["page-title"]}>
          <h1>RESUME</h1>
        </div>
      </MainImage>
    </div>
  );
};

export default MainImageResume;
