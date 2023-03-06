const inputFieldEl = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputText = inputFieldEl.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = event.currentTarget.value);
});
