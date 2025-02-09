import React from "react";
import { Link } from "react-router-dom";
import NamLogo from "../assets/logo/Nam.svg";

const NavBar = () => {
  const toggleNav = (e) => {
    const navbarMenu = document.querySelector("#nav-links");
    const burger = document.querySelector("#burger");
    burger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  };
  return (
    <nav
      className="navbar p-5 is-white is-fixed-top special-box-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      {/* Logo and Burger */}
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            src={NamLogo}
            alt="Nam Logo"
            style={{ transform: "scale(1.2)" }}
            className="logo px-6"
          />
        </Link>
        <Link
          role="button"
          className="navbar-burger burger"
          id="burger"
          to="#"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>

      {/* Page Links */}
      <div className="navbar-menu mt-3" id="nav-links">
        <div className="navbar-end">
          <Link
            className="navbar-item is-uppercase mx-3 has-text-grey btn"
            to="/"
            onClick={toggleNav}
          >
            About Me
          </Link>
          <Link
            className="navbar-item is-uppercase mx-3 has-text-grey btn"
            to="/projects"
            onClick={toggleNav}
          >
            Projects
          </Link>
          <Link
            className="navbar-item is-uppercase mx-3 has-text-grey btn"
            to="/resume"
            onClick={toggleNav}
          >
            Resume
          </Link>
          <Link
            className="navbar-item is-uppercase mx-3 has-text-grey btn"
            to="/contact"
            onClick={toggleNav}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
