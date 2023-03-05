const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemEl = document.querySelector(`#ingredients`);

ingredients.forEach((item) => {
  const heading = document.createElement("li");
  heading.textContent = item;
  itemEl.append(heading);
});
