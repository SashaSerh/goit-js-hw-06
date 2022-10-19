
const inputRef = document.querySelector("#name-input")
const outputRef = document.querySelector("#name-output")
inputRef.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  inputRef.addEventListener("change", (event) => {
    outputRef.disabled = !event.target.checked;
    outputRef.textContent = `${inputValue}`;
  });
});
