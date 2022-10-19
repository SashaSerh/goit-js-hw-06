const btnDscr = document.querySelectorAll('button')[0];
const btnIncrem = document.querySelectorAll('button')[1];

let counterValue = 0;
btnDscr.addEventListener('click', (event) => {
    counterValue = counterValue - 1;
    const valueEl = document.querySelector('span');
    valueEl.textContent = counterValue;
});

btnIncrem.addEventListener('click', (event) => {
    counterValue += 1;
    const valueEl = document.querySelector('span');
    valueEl.textContent = counterValue;
});