const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemEl = document.querySelector(`#ingredients`);

ingredients.forEach((elemet) => {
  const list = document.createElement("li");
  list.textContent = elemet;
  list.classList.add("item");
  itemEl.append(list);
});
