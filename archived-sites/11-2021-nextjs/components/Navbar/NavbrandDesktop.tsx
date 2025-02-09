import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const NavbrandDesktop = () => {
  return (
    <div className={styles["nav-brand-desktop"]}>
      <Link href="/">
        <a>
          <img src="/images/personal/navbrand.svg" />
        </a>
      </Link>
    </div>
  );
};
export default NavbrandDesktop;
