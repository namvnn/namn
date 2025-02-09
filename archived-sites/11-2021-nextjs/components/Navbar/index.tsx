import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";
import NavbrandDesktop from "./NavbrandDesktop";
import NavbrandMobile from "./NavbrandMobile";
import NavListDesktop from "./NavListDesktop";
import NavListMobile from "./NavListMobile";

const Navbar = () => {
  return (
    <nav className={styles["nav-container"]}>
      <NavbrandDesktop />
      <NavbrandMobile />
      <NavListDesktop />
      <NavListMobile/>
    </nav>
  );
};
export default Navbar;
