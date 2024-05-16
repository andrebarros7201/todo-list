import { addTodoItem } from "./addTodoItem";

const displayForm = (projectList, project) => {
  const main = document.querySelector("#main");

  const form = document.createElement("dialog");
  form.classList.add("form-add-todo-item");

  const buttonClose = document.createElement("button");
  buttonClose.classList.add("form-button-close");
  buttonClose.textContent = "Close";
  buttonClose.addEventListener("click", () => {
    form.close();
  });

  const title = document.createElement("h2");
  title.classList.add("form-title");
  title.textContent = `Add ToDo to ${project.title}`;

  const labelTitle = document.createElement("label");
  labelTitle.textContent = "ToDo Title";
  labelTitle.setAttribute("for", "title");

  const inputTitle = document.createElement("input");
  inputTitle.id = "title";

  const labelDesc = document.createElement("label");
  labelDesc.textContent = "Description";
  labelDesc.setAttribute("for", "description");

  const inputDesc = document.createElement("input");
  inputDesc.id = "description";

  const labelDate = document.createElement("label");
  labelDate.textContent = "Due Date";
  labelDate.setAttribute("for", "date");

  const inputDate = document.createElement("input");
  inputDate.id = "date";
  inputDate.setAttribute("type", "date");

  const labelPriority = document.createElement("label");
  labelPriority.textContent = "Priority";
  labelPriority.setAttribute("for", "priority");

  const inputPriority = document.createElement("select");
  inputPriority.id = "priority";

  const optionHigh = document.createElement("option");
  optionHigh.setAttribute("value", "High");
  optionHigh.textContent = "High";

  const optionMedium = document.createElement("option");
  optionMedium.setAttribute("value", "Medium");
  optionMedium.textContent = "Medium";

  const optionLow = document.createElement("option");
  optionLow.setAttribute("value", "Low");
  optionLow.textContent = "Low";

  const buttonSubmit = document.createElement("button");
  buttonSubmit.textContent = "Submit";
  buttonSubmit.classList.add("form-button-submit");
  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    addTodoItem(
      projectList,
      project,
      inputTitle.value,
      inputDesc.value,
      inputDate.value,
      inputPriority.value
    );
    form.close();
  });

  inputPriority.appendChild(optionHigh);
  inputPriority.appendChild(optionMedium);
  inputPriority.appendChild(optionLow);

  form.appendChild(buttonClose);
  form.appendChild(title);

  form.appendChild(labelTitle);
  form.appendChild(inputTitle);

  form.appendChild(labelDesc);
  form.appendChild(inputDesc);

  form.appendChild(labelDate);
  form.appendChild(inputDate);

  form.appendChild(labelPriority);
  form.appendChild(inputPriority);

  form.appendChild(buttonSubmit);

  main.appendChild(form);

  form.showModal();
};

const addTodoItemForm = (projectList, project) => {
  displayForm(projectList, project);
};

export { addTodoItemForm };
