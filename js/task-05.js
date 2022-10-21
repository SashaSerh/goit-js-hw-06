
const inputRef = document.querySelector("#name-input")
const outputRef = document.querySelector("#name-output")
inputRef.addEventListener("input", (event) => {
  const inputValue = event.target.value;
   outputRef.disabled = !event.target.checked;
    outputRef.textContent = `${inputValue}`;
  
});

// inputRef.addEventListener("change", (event) => {
   
//   });