import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const NavListDesktop = () => {
  return (
    <ul className={styles["nav-item-list-desktop"]}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  );
};
export default NavListDesktop;
