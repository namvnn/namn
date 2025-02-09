import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Navbar.module.scss";

const NavListMobile = () => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <div className={styles["nav-item-list-mobile"]}>
      <div
        className={isActive ? styles["hamburger-active"] : styles["hamburger"]}
        onClick={() => setActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={
          isActive
            ? styles["nav-items-mobile-active"]
            : styles["nav-items-mobile"]
        }
      >
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
    </div>
  );
};
export default NavListMobile;
