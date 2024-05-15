import "./style.css";
import { toDoItem } from "./todoItem";
import { todoList } from "./todoList";

for (let i = 0; i < 3; i++) {
  const title = "Lorem Ipsum";
  const description = "Lorem Ipsum...";
  const date = Date.now();
  const priority = "medium";

  const item = toDoItem(title, description, date, priority);
}
