const validationInput = document.querySelector("#validation-input");
const valideInputLength = Number(validationInput.dataset.length);
console.log(valideInputLength);

const validateInput = (event) => {
  if (event.target.value.length !== valideInputLength) {
    validationInput.classList.add("invalid");
  } else validationInput.classList.replace("invalid", "valid");
};

validationInput.addEventListener("blur", validateInput);
