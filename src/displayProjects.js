const displayProjects = (projectList) => {
  const contentDiv = document.querySelector("#main");

  projectList.forEach((element) => {
    //Div for each project
    const divProject = document.createElement("div");
    divProject.classList.add("project");

    //Top div inside the project
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

    //Middle div inside the project
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

    //Create a row for each todoItem inside the project
    element.todoItems.forEach((todoItem) => {
      const rowTodoItem = document.createElement("div");
      rowTodoItem.classList.add("todo-item");

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

      rowTodoItem.appendChild(itemTitle);
      rowTodoItem.appendChild(itemDesc);
      rowTodoItem.appendChild(itemDate);
      rowTodoItem.appendChild(itemPriority);

      bottomDiv.appendChild(rowTodoItem);
    });

    //Append each div to a container div
    divProject.appendChild(topDiv);
    divProject.appendChild(middleDiv);
    divProject.appendChild(bottomDiv);

    //Append that container div to the main div
    contentDiv.appendChild(divProject);
  });
};

export { displayProjects };
