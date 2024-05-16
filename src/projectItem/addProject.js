import { addProjectForm } from "./addProjectForm";

const addProject = (projectList) => {
  const topDiv = document.querySelector("#top");

  const buttonAddProject = document.createElement("button");
  buttonAddProject.textContent = "Add Project";
  buttonAddProject.classList.add("button-add-project");
  buttonAddProject.addEventListener("click", () => {
    addProjectForm(projectList);
  });

  topDiv.appendChild(buttonAddProject);
};

export { addProject };
