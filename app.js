// // *selector

// const input = document.getElementById("todo-input");
// const btn = document.querySelector("#todo-btn");
// const ul = document.querySelector("#todo-ul");

// //*

// btn.addEventListener("click", () => {
//   e.preventDefault();
//   const li = document.createElement("li");
//   ul.prepend(li);
//   const i = document.createElement("s");
//   li.appendChild(i);
//   console.log(i);
//   i.className = "fa-solid fa-trash-can -text-danger";
//   i.type = "button";
//   console.log(li);

//   li.textContent = input.value;
//   input.value = "";
// });

// *selector

const todoInput = document.querySelector("#todo-input");
const addTaskButton = document.querySelector("#todo-btn");
const todosContainer = document.querySelector(".todos");

//*

const toggleComplete = (event) => {
  const { parentElement } = event.currentTarget;
  const isCompleted = [...parentElement.classList].some(
    (className) => className === "completed"
  );
  if (!isCompleted) event.currentTarget.innerText = "Todo";
  else {
    event.currentTarget.innerText = "Complete";
  }
  event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (event) => {
  todosContainer.removeChild(event.currentTarget.parentElement);
};

const renderTodoItem = (todoText) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todoItem");

  const completeButton = document.createElement("button");
  completeButton.classList.add("completeButton");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", toggleComplete);
  todoItemElement.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "Delete";
  deleteButton, addEventListener("click", removeItem);
  todoItemElement.appendChild(deleteButton);

  const textElement = document.createElement("p");
  textElement.innerText = todoText;
  textElement.classList.add("todoText");
  todoItemElement.appendChild(textElement);

  todosContainer.appendChild(todoItemElement);
  todoInput.value = "";
  todoInput.focus();
};
const addTask = () => {
  if (todoInput.value === "") {
    alert("Input bos olamaz");
  } else {
    renderTodoItem(todoInput.value);
  }
};
addTaskButton.addEventListener("click", addTask);
