import { Project } from "../data/projects/projectInfo";
import projects from "../data/projects/projectInfo";
import { useEffect, useState } from "react";

export type FetchedProjects = [Project[] | null, boolean];

function useFetchProject(keyword?: string): FetchedProjects {
  const [projectList, setProjectList] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    if (!keyword) {
      setProjectList(projects);
    } else {
      try {
        // C++ Special case
        keyword = keyword.replace(/c\+\+/gi, "cpp")

        let rgx: RegExp = new RegExp(keyword, "gi");
        let filteredProjects = projects.filter((project: Project) => {
          return (
            rgx.test(project.title) ||
            rgx.test(project.description) ||
            rgx.test(project.shortDesc) ||
            rgx.test(project.programmingLanguage) ||
            rgx.test(project.technologies) ||
            rgx.test(project.date)
          );
        });
        setProjectList(filteredProjects);
      } catch {
        setProjectList([]);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [keyword]);
  return [projectList, loading];
}
export default useFetchProject;
