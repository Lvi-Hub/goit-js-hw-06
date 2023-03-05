const inputFieldEl = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputText = inputFieldEl.addEventListener(inputFieldEl, (event) => {
  output.textContent = event.currentTarget.value;
});

console.log(output);

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
