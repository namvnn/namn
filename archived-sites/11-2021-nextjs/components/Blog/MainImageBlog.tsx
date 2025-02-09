import MainImage from "../MainImage";
import styles from "../../styles/Blog.module.scss"

const MainImageBlog = () => {
  return (  
    <div className={styles["main-image-container"]}>
      <MainImage>
        <div className={styles["page-title"]}>
          <h1>BLOG</h1>
        </div>
      </MainImage>
    </div>
  );
}
 
export default MainImageBlog;