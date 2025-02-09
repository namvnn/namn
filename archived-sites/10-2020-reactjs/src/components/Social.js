import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Social = () => {
  return (
    <>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/nam-nguyen-cs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nnfunny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nam.viet.nguyen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className="social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/vietnam.nguyen.186"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/namnguyenDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
