const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");
const number = document.querySelector("#value");

let counterValue = Number(number.textContent);

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement(event) {
  counterValue -= 1;
  number.textContent = counterValue;
}

function increment(event) {
  counterValue += 1;
  number.textContent = counterValue;
}
