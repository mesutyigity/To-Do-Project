// *selector

const input = document.getElementById("todo-input");
const btn = document.querySelector("#todo-btn");
const ul = document.querySelector("#todo-ul");

//*

btn.addEventListener("click", () => {
  e.preventDefault();
  const li = document.createElement("li");
  ul.prepend(li);
  const i = document.createElement("i");
  li.appendChild(i);
  console.log(i);
  i.className = "fa-solid fa-trash-can -text-danger";
  i.type = "button";
  console.log(li);

  li.textContent = input.value;
  input.value = "";
});
