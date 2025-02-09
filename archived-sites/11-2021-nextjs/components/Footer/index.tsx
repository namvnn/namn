import styles from '../../styles/Footer.module.scss';
const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <span>&copy; 2021 Made by Nam with </span>
      <span>
        <img src="/images/icons/heart.svg" />
      </span>
    </footer>
  );
};

export default Footer;
