const buttonEl = document.querySelector(".change-color");
const bodyStyleEl = document.querySelector("body");
const textEl = document.querySelector(".color");

buttonEl.addEventListener("click", (event) => {
  const changeColor = getRandomHexColor();
  bodyStyleEl.style.color = changeColor;
  textEl.textContent = changeColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
