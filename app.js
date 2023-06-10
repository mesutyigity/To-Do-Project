// *selector

const input = document.getElementById("todo-input");
const btn = document.querySelector("#todo-btn");
const ul = document.querySelector("#todo-ul");

//*
const li = document.createElement("li");
ul.prepend(li);
btn.addEventListener("click", () => {
  e.preventDefault();
  li.textContent = input.value;
});
