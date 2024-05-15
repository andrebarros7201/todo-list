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

    const middleDiv = document.createElement("div");
    middleDiv.classList.add("middle");
    const title = document.createElement("h3");
    title.textContent = "Title";

    const description = document.createElement("h3");
    description.textContent = "Description";

    const date = document.createElement("h3");
    date.textContent = "Date";

    const priority = document.createElement("h3");
    priority.textContent = "Priority";

    middleDiv.appendChild(title);
    middleDiv.appendChild(description);
    middleDiv.appendChild(date);
    middleDiv.appendChild(priority);

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("div-todo-items");

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

      bottomDiv.appendChild(divTodoItem);
    });

    divProject.appendChild(topDiv);
    divProject.appendChild(middleDiv);
    divProject.appendChild(bottomDiv);

    contentDiv.appendChild(divProject);
  });
};

export { displayProjects };
