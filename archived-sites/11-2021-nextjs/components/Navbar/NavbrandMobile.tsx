import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const NavbrandMobile = () => {
  return (
    <div className={styles["nav-brand-mobile"]}>
      <Link href="/">
        <a>
          <img src="/images/personal/bee.svg" alt="bee illustration"/>
        </a>
      </Link>
    </div>
  );
};
export default NavbrandMobile;
