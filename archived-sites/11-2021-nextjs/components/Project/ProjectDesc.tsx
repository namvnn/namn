import { ProjectProp } from "../../pages/projects/[slug]";
import styles from "../../styles/Project.module.scss";
import Back from "./Back";
import Image from "next/image";

const ProjectDesc: React.FC<ProjectProp> = ({ project, error }) => {
  return (
    <div className={styles["project-desc"]}>
      {error ? (
        <div className={styles["error-project"]}>
          <Back />
        </div>
      ) : (
        <>
          <section className={styles["project-main-image"]}>
            <img src={project?.image} alt={`Screenshot of ${project?.title}`} />
            <span></span>
          </section>

          <section className={styles["info"]}>
            <h1 className={styles["title"]}>{project?.title}</h1>
            <div className={styles["logo"]}>
              <img src={project?.logo} alt="Logo" />
            </div>
            <p className={styles["description"]}>
              Description: <span>{project?.description}</span>
            </p>
            <p className={styles["date"]}>
              Year: <span>{project?.date}</span>
            </p>
            <p className={styles["collab"]}>
              Collaborate with: <span>{project?.collab}</span>
            </p>
            <p className={styles["programming-language"]}>
              Programming Languages: <span>{project?.programmingLanguage}</span>
            </p>
            <p className={styles["technologies"]}>
              Technologies: <span>{project?.technologies}</span>
            </p>
            <p className={styles["tags"]}>
              Tags:{" "}
              {project?.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </p>
            <div className={styles["links"]}>
              <a
                href={project?.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>REPO LINK</span>
              </a>
              {project?.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default ProjectDesc;
