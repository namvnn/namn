import styles from "../styles/Home.module.scss";
import Head from "next/head";
import MainImageHome from "../components/Home/MainImageHome";
import Introduction from "../components/Home/Introduction";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import { useEffect, useState } from "react";
import CatRainbow from "../components/CatRainbow";
import SEO from "../components/SEO";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      <SEO
        title="Home | Developer | Nam Nguyen"
        description="Web Developer &amp; Front-end Develop (React). Love building programs that make people's lives eaiser. Computer Science Enthusiast &amp; Art Enthusiast (pixel, 3D model, illustration)"
      />

      <div className={styles["home"]}>
        {loading ? (
          <div className="loader">
            <CatRainbow />
          </div>
        ) : (
          <>
            <MainImageHome />
            <Introduction />
            <FeaturedProjects />
          </>
        )}
      </div>
    </>
  );
}
