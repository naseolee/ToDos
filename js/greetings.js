const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const logoutButton = document.querySelector("#logout-button");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginForm.querySelector("#name").value;
    localStorage.setItem(USERNAME_KEY,userName);
    wasLoggedIn();
    paintGreetings();
}

function onLogoutSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    logoutButton.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "";
    wasLoggedIn();
}
function paintGreetings(){
    const userName = localStorage.getItem("userName");
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.querySelector("input").value = "";
    greeting.innerText = `Hello!  ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.classList.remove("hidden");
    wasLoggedIn();
}

loginForm.addEventListener("submit",onLoginSubmit);
logoutForm.addEventListener("submit",onLogoutSubmit);

if(localStorage.getItem("userName")){
    paintGreetings();
}