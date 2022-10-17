const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form input");

function onSubmit() {
  const username = loginInput.value;
  console.log(username);
}

loginForm.addEventListener("submit", onSubmit);
