const fontControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = (event) => {
  let fontSize = fontControl.value;
  text.style.fontSize = fontSize + "px";
};

fontControl.addEventListener("input", changeFontSize);
