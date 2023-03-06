const inputSizeEl = document.querySelector("#font-size-control");
const outputTextSizeEL = document.querySelector("#text");

inputSizeEl.addEventListener("input", (event) => {
  outputTextSizeEL.style.fontSize = `${event.target.value}px`;
});
