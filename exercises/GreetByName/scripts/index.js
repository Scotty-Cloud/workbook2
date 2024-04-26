"use strict";


function init() {
  const greetBtn = document.getElementById("greetBtn");

  greetBtn.onclick = onGreetBtnClicked;
}

function onGreetBtnClicked() {
  const name = document.getElementById("nameField").value;

  alert(`Hello, ${name}!`);
}
window.onload = init;