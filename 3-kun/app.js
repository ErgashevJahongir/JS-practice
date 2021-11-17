let sanoqTugma = document.querySelector(".sanoq");
const resetTugma = document.querySelector(".qayta");
let input = document.querySelector("input");

sanoqTugma.addEventListener("click", function () {
    input.value = parseInt(input.value) + 1;
});

resetTugma.addEventListener("click", function () {
    input.value = 0;
});
