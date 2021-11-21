const section = document.querySelector("section");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
    console.log(toggle.innerHTML);
    section.classList.toggle("dark");
    if (toggle.innerHTML.trim() == `<i class="bi bi-moon"></i>`) {
        toggle.innerHTML = "";
        toggle.innerHTML = '<i class="bi bi-sun"></i>';
    } else if (toggle.innerHTML.trim() == `<i class="bi bi-sun"></i>`) {
        toggle.innerHTML = "";
        toggle.innerHTML = '<i class="bi bi-moon"></i>';
    }
});
// toggle.onclick = function () {

// };
