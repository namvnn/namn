import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleNavOpen = () => {
    let hamburger = document.querySelector("nav .hamburger-btn");
    let navBar = document.querySelector("nav .nav-bar");
    let blurBackground = document.querySelector("nav .blur-background");
    if (open) {
      setOpen(!open);
      hamburger.classList.remove("open");
      navBar.classList.remove("open");
      blurBackground.classList.remove("open");
    } else {
      setOpen(!open);
      hamburger.classList.add("open");
      navBar.classList.add("open");
      blurBackground.classList.add("open");
    }
  };
  return (
    <>
      <header>
        <Link to="home" spy={true} smooth={true} offset={0} duration={1000}>
          Home
        </Link>
        <Link to="me" spy={true} smooth={true} offset={-70} duration={1000}>
          Me
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Projects
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={-70} duration={1000}>
          Skills
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Education
        </Link>
      </header>
      {/* On Mobile */}
      <nav>
        <div className="blur-background"></div>
        <div className="hamburger-btn" onClick={handleNavOpen}>
          <div className="hamburger"></div>
        </div>
        <div className="nav-bar">
          <div className="icon" onClick={handleNavOpen}>
            <IoMdClose className="icon-close" />
          </div>
          <Link to="home" spy={true} smooth={true} offset={0} duration={1000}>
            Home
          </Link>
          <Link to="me" spy={true} smooth={true} offset={-70} duration={1000}>
            Me
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Skills
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Education
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
