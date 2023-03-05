const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemEl = document.querySelector(`#ingredients`);
const arrayLi = [];

ingredients.forEach((elemet) => {
  const list = document.createElement("li");
  list.textContent = elemet;
  list.classList.add("item");
  arrayLi.push(list);
});
itemEl.append(...arrayLi);
console.log(...arrayLi);
