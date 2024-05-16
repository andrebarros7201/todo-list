import { displayProjects } from "../displayProjects";

const removeProject = (projectList, project) => {
  projectList.splice(projectList.indexOf(project), 1);
  displayProjects(projectList);
};

export { removeProject };
