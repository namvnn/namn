import Head from "next/head";
import { useEffect, useState } from "react";
import CatRainbow from "../../components/CatRainbow";
import MainImageProjects from "../../components/Projects/MainImageProjects";
import ProjectGrid from "../../components/Projects/ProjectGrid";
import Searchbar from "../../components/Projects/Searchbar";
import SEO from "../../components/SEO";
import styles from "../../styles/Projects.module.scss";

const Projects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      <SEO title="Projects | Developer | Nam Nguyen" description="My portfolio consists of my projects developed in my free time" />

      {/* Main */}
      <div className={styles["projects"]}>
        {loading ? (
          <div className="loader">
            <CatRainbow />
          </div>
        ) : (
          <>
            <MainImageProjects />
            <section className="container">
              <div className={styles["search-bar"]}>
                <Searchbar setKeyword={setKeyword} />
              </div>
              <ProjectGrid keyword={keyword} />
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
