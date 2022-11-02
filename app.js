const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
}

loginButton.addEventListener("submit", onLoginSubmit);
