import Link from "next/link";
import styles from "../../styles/Project.module.scss";

const Back = () => {
  return (
    <div className={styles["back"]}>
      <Link href="/projects">
        <a>BACK TO PROJECTS</a>
      </Link>
      <div></div>
    </div>
  );
};

export default Back;
