const todoForm = document.getElementById("todo-form");
const whatTodo = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todo";

let toDos = [];

function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const button = event.target;
    button.innerHTML = `<i class="fa-solid fa-check"></i>`;
    const li = button.parentElement;
    li.classList.add("fade-away");
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
    setTimeout(() => li.remove(), 1000);
}

let countTasks = 1;
function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.classList.add("delete-btn");
    li.classList.add("todo-item");

    li.id = newTodo.id;
    span.innerText = `${countTasks}. ${newTodo.text}`;
    button.innerHTML = `<i class="fa-regular fa-square"></i>`;

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    countTasks++;

    button.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = whatTodo.value;
    whatTodo.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);
if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    toDos = parsedTodo;
    toDos.forEach((todo) => paintTodo(todo));
}

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

if (hours === 0 && minutes === 0 && seconds === 0) countTasks = 1;
