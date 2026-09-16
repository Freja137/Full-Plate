// Ændring af portioner af en servering
const buttons = document.querySelectorAll(".portions button");
const portionNumber = document.querySelector(".portions span");

const minusButton = buttons[0];
const plusButton = buttons[1];

let portions = Number(portionNumber.textContent);

minusButton.addEventListener("click", function () {
    if (portions > 1) {
        portions--;
        portionNumber.textContent = portions;
    }
});

plusButton.addEventListener("click", function () {
    portions++;
    portionNumber.textContent = portions;
});

