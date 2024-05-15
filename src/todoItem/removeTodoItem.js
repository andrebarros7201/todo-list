import { displayProjects } from "../displayProjects";
const removeTodoItem = (projectList, project, todoItem) => {
  project.todoItems.splice(project.todoItems.indexOf(todoItem), 1);
  displayProjects(projectList);
};

export { removeTodoItem };
