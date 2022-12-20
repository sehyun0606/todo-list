const loginForm =  document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = ("username");
const HIDDEN_CLASSNAME = ("hidden")

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
    localStorage.setItem(USERNAME_KEY, username);
}
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
if(savedUsername == null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername)
}