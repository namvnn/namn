import Link from "next/link";
import { useEffect, useState } from "react";
import { Project, Projects } from "../../data/projects/projectInfo";
import styles from "../../styles/Home.module.scss";
import CardProject from "../CardProject";
const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  useEffect(() => {
    const fetchedData = async () => {
      const data: Project[] = (await import("../../data/projects/featuredProject"))
        .default;
      setProjects(data);
    };
    fetchedData();
  }, []);
  return (
    <section className={styles["featured-projects"]}>
      <h1>Featured Projects</h1>
      <section>
        {projects?.map((project, index) => {
          return (
            <CardProject
              key={index}
              image={project.thumbnail}
              title={project.title}
              description={project.shortDesc}
              alt={project.title}
              link={project.link}
            />
          );
        })}
      </section>
    </section>
  );
};

export default FeaturedProjects;
