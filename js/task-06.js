const inputFieldEl = document.querySelector("#validation-input");
const output = document.querySelector("#validation-input");

inputFieldEl.addEventListener("focus", (event) => {
  output.classList.remove("valid", "invalid");
});

inputFieldEl.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length === Number(inputFieldEl.dataset.length)
  ) {
    output.classList.add("valid");
  } else {
    output.classList.add("invalid");
    console.log(inputFieldEl.dataset.length);
  }
});
