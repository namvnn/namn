import styles from "../../styles/Projects.module.scss";
import CardProject from "../CardProject";
import Bouncer from "../Bouncer";
import useFetchProject, { FetchedProjects } from "../../hooks/useFetchProject";

interface ProjectGrid {
  keyword: string;
}

const ProjectGrid: React.FC<ProjectGrid> = ({ keyword }) => {
  const [projects, loading]: FetchedProjects = useFetchProject(keyword);
  return (
    <div className={styles["project-grid"]}>
      {loading ? (
        <div className={styles["loader-placeholder"]}>
          <Bouncer />
        </div>
      ) : projects?.length !== 0 ? (
        <>
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
        </>
      ) : (
        <div className={styles["not-found"]}>
          Sorry. I could not find projects with "{keyword}"
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
