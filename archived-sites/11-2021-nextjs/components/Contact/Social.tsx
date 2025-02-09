import { ReactElement } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import styles from "../../styles/Contact.module.scss";

interface SocialItem {
  url: string;
  icon: ReactElement;
}
const links: SocialItem[] = [
  {
    url: "https://www.linkedin.com/in/vnngu/",
    icon: <FaLinkedin className={styles["social-icon"]} />,
  },
  {
    url: "https://github.com/nnfunny",
    icon: <FaGithub className={styles["social-icon"]} />,
  },
  {
    url: "https://www.instagram.com/nam.viet.nguyen/",
    icon: <FaInstagram className={styles["social-icon"]} />,
  },
  {
    url: "https://www.facebook.com/vnngu/",
    icon: <FaFacebook className={styles["social-icon"]} />,
  },
  {
    url: "https://twitter.com/namnguyenDev",
    icon: <FaTwitter className={styles["social-icon"]} />,
  },
];

const Social = () => {
  return (
    <ul className={styles["social"]}>
      {links.map((link: SocialItem, index: number) => {
        return (
          <li key={index}>
            <div></div>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
