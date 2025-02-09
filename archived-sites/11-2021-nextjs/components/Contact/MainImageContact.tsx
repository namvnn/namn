import MainImage from "../MainImage";
import styles from "../../styles/Contact.module.scss";

const MainImageContact = () => {
  return (
    <div className={styles["main-image-container"]}>
      <MainImage>
        <div className={styles["page-title"]}>
          <h1>CONTACT</h1>
        </div>
      </MainImage>
    </div>
  );
};

export default MainImageContact;
