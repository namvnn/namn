import styles from "../../styles/Resume.module.scss";
import Head from "next/head";
import MainImageResume from "../../components/Resume/MainImageResume";
import WorkExperience from "../../components/Resume/WorkExperience";
import Skills from "../../components/Resume/Skills";
import EducationList from "../../components/Resume/Education";
import VolunteerList from "../../components/Resume/Voluteer";
import SEO from "../../components/SEO";

const Resume = () => {
  return (
    <>
      <SEO
        title="Resume | Developer | Nam Nguyen"
        description="My web-based resume includes professional experiences, technical skills, education, volunteer and others"
      />

      <div className={styles["resume"]}>
        <MainImageResume />
        <section className="container">
          <WorkExperience />
          <Skills />
          <EducationList />
          <VolunteerList />
        </section>
      </div>
    </>
  );
};

export default Resume;
