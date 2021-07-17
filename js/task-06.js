const validationInput = document.querySelector("#validation-input");
const valideInputLength = Number(validationInput.getAttribute("data-length"));
console.log(valideInputLength);

const validateInput = (event) => {
  if (event.target.value.length > valideInputLength) {
    validationInput.classList.add("invalid") ||
      validationInput.classList.replace("valid", "invalid");
  } else
    validationInput.classList.replace("invalid", "valid") ||
      validationInput.classList.add("valid");
};

validationInput.addEventListener("blur", validateInput);
