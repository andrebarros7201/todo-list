import { addProjectToList } from "./addProjectToList";

const addProjectForm = (projectList) => {
  const main = document.querySelector("#main");

  const form = document.createElement("dialog");
  form.classList.add("form");

  const buttonClose = document.createElement("button");
  buttonClose.classList.add("form-button-close");
  buttonClose.textContent = "Close";
  buttonClose.addEventListener("click", () => {
    form.close();
  });

  const title = document.createElement("h2");
  title.classList.add("form-title");
  title.textContent = `Add Project`;

  const labelTitle = document.createElement("label");
  labelTitle.textContent = "ToDo Title";
  labelTitle.setAttribute("for", "title");

  const inputTitle = document.createElement("input");
  inputTitle.id = "title";

  const buttonSubmit = document.createElement("button");
  buttonSubmit.textContent = "Submit";
  buttonSubmit.classList.add("form-button-submit");
  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    addProjectToList(projectList, inputTitle.value);
    form.close();
  });

  form.appendChild(buttonClose);
  form.appendChild(title);

  form.appendChild(labelTitle);
  form.appendChild(inputTitle);

  form.appendChild(buttonSubmit);

  main.appendChild(form);

  form.showModal();
};

export { addProjectForm };
