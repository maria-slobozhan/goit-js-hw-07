const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const createEl = (elements) => {
  return elements.map((el) => {
    const ingredientsEl = document.createElement("li");
    ingredientsEl.textContent = el;
    return ingredientsEl;
  });
};
const items = createEl(ingredients);
ingredientsList.append(...items);
