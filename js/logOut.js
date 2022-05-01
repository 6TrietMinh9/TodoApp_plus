const logoutBtn = document.querySelector(".log-out__button");

function logoutAccount() {
    localStorage.clear();
    location.reload();
}
logoutBtn.addEventListener("click", logoutAccount);
