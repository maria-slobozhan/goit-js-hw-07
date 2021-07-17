const renderBtn = document.querySelector("button[data-action=render]");
const destroyBtn = document.querySelector("button[data-action=destroy]");
const numberEntry = document.querySelector("input");
const boxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; (i = amount); i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + "px";
    box.style.height = 30 + "px";
    box.style.backgroundColor = "tomato";
  }
  return box;
};

// const asdfb = Number(numberEntry.value);
// console.log(asdfb);

// const boxes = createBoxes();
// boxesContainer.append(boxes);

// const box = document.createElement("div");
// box.style.width = 30 + "px";
// box.style.height = 30 + "px";
// box.style.backgroundColor = "tomato";

// renderBtn.addEventListener("submit", createEl);
