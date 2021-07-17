const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", changeName);

function changeName(event) {
  event.currentTarget.value.trim() === ""
    ? (nameOutput.textContent = "незнакомец")
    : (nameOutput.textContent = event.currentTarget.value);
}
