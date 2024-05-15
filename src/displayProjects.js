const displayProjects = (projectList) => {
  const contentDiv = document.querySelector("#main");

  projectList.forEach((element) => {
    const divProject = document.createElement("div");
    divProject.classList.add("project");

    const topDiv = document.createElement("div");
    topDiv.classList.add("top-div");

    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = `${element.title}`;

    topDiv.appendChild(projectTitle);

    const addTodoItem = document.createElement("button");
    addTodoItem.classList.add("add-todo-item");
    addTodoItem.textContent = "Add Todo Item";

    topDiv.appendChild(addTodoItem);

    const divTodoItems = document.createElement("div");
    divTodoItems.classList.add("div-todo-items");

    element.todoItems.forEach((todoItem) => {
      const divTodoItem = document.createElement("div");
      divTodoItem.classList.add("todo-item");

      const itemTitle = document.createElement("h3");
      itemTitle.classList.add("item-title");
      itemTitle.textContent = `${todoItem.title}`;

      const itemDesc = document.createElement("p");
      itemDesc.classList.add("item-desc");
      itemDesc.textContent = `${todoItem.description}`;

      const itemDate = document.createElement("p");
      itemDate.classList.add("item-date");
      itemDate.textContent = `${todoItem.date}`;

      const itemPriority = document.createElement("p");
      itemPriority.classList.add("item-priority");
      itemPriority.textContent = `${todoItem.priority}`;

      divTodoItem.appendChild(itemTitle);
      divTodoItem.appendChild(itemDesc);
      divTodoItem.appendChild(itemDate);
      divTodoItem.appendChild(itemPriority);

      divTodoItems.appendChild(divTodoItem);
    });

    divProject.appendChild(topDiv);
    divProject.appendChild(divTodoItems);

    contentDiv.appendChild(divProject);
  });
};

export { displayProjects };
