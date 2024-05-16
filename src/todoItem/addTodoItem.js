import { displayProjects } from "../displayProjects";
import { toDoItem } from "./todoItem";

const addTodoItem = (
  projectList,
  project,
  todoItemTitle,
  todoItemDesc,
  todoItemDate,
  todoItemPriority
) => {
  const item = toDoItem(
    todoItemTitle,
    todoItemDesc,
    todoItemDate,
    todoItemPriority
  );
  project.todoItems.push(item);
  displayProjects(projectList);
};

export { addTodoItem };
