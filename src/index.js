import "./style.css";
import { toDoItem } from "./todoItem";
import { project } from "./projects";
import { displayProjects } from "./displayProjects";

let projectList = [];

for (let i = 0; i < 3; i++) {
  const title = "Lorem Ipsum";
  const description = "Lorem Ipsum...";
  const date = Date.UTC(2024, 5, 15);
  const priority = "medium";

  const item = toDoItem(title, description, date, priority);

  let projectItem = project(`Project ${i + 1}`);
  projectItem.todoItems.push(item);

  projectList.push(projectItem);
}

console.log(projectList);

displayProjects(projectList);
