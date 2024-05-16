import { displayProjects } from "../displayProjects";
import { project } from "./projects";

const addProjectToList = (projectList, title) => {
  projectList.push(project(title));
  displayProjects(projectList);
};

export { addProjectToList };
