const category = document.querySelectorAll(".item");
const categoryName = document.querySelectorAll("h2");
const itemsList = document.querySelectorAll(".item ul");

const countCategories = (element) => `В списке ${element.length} категории.`;
console.log(countCategories(category));

const categoryResult = category.forEach((item) =>
  console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов:${item.querySelectorAll("li").length} `)
);
