const targetButtonPlusEl = document.querySelector(
  'button[data-action="increment"]'
);
const targetbuttonMinusEl = document.querySelector(
  'button[data-action="decrement"]'
);
const valueEl = document.querySelector("#value");

let counterValue = 0;
targetButtonPlusEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log(`Button Incr was clicked ${counterValue}`);
});

targetbuttonMinusEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log(`Button Decr was clicked ${counterValue}`);
});
