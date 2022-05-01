const userForm = document.getElementById("user-form");
const enterName = document.querySelector(".enter-name");
const greeting = document.getElementById("greeting");
const greetingContainer = document.querySelector(".greeting__container");

const USER_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onSubmit(event) {
    event.preventDefault();
    const userName = enterName.value;
    localStorage.setItem(USER_KEY, userName);
    userForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(userName);
}

function paintGreeting(userName) {
    greeting.innerText = `Hello ${userName}!`;
    greetingContainer.style.display = "flex";
}

const savedUserName = localStorage.getItem(USER_KEY);
if (savedUserName === null) {
    userForm.classList.remove(HIDDEN_CLASSNAME);
    userForm.addEventListener("submit", onSubmit);
} else {
    paintGreeting(savedUserName);
}
