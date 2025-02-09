import Head from "next/head";
import Email from "../../components/Contact/Email";
import MainImageContact from "../../components/Contact/MainImageContact";
import Social from "../../components/Contact/Social";
import SEO from "../../components/SEO";
import styles from "../../styles/Contact.module.scss";
const Contact = () => {
  return (
    <>
      <SEO
        title="Contact | Developer | Nam Nguyen"
        description="My email and other social media accounts to contact me for open collaboration"
      />
      <div className={styles["contact"]}>
        <MainImageContact />
        <section className="container">
          <Email />
          <Social />
        </section>
      </div>
    </>
  );
};

export default Contact;
