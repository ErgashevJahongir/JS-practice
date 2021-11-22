const keyingi = document.querySelector(".right-btn");
const oldingi = document.querySelector(".left-btn");
let bulim = document.querySelectorAll(".sec");
let slide = document.querySelectorAll(".slide");
let slideSon = slide.length;
let qism = 0;

keyingi.addEventListener("click", function () {
    if (qism < 3) {
        qism++;
        slide[qism - 1].classList.remove("active");
        bulim[qism - 1].classList.remove("active");
        slide[qism].classList.add("active");
        bulim[qism].classList.add("active");
    } else {
        qism = 0;
        slide[slideSon - 1].classList.remove("active");
        bulim[slideSon - 1].classList.remove("active");
        slide[qism].classList.add("active");
        bulim[qism].classList.add("active");
    }
});

oldingi.addEventListener("click", function () {
    if (qism > 0) {
        qism--;
        slide[qism + 1].classList.remove("active");
        bulim[qism + 1].classList.remove("active");
        slide[qism].classList.add("active");
        bulim[qism].classList.add("active");
    } else {
        qism = 3;
        slide[0].classList.remove("active");
        bulim[0].classList.remove("active");
        slide[qism].classList.add("active");
        bulim[qism].classList.add("active");
    }
});

let tan = 0;
for (let i = 0; i < 4; i++) {
    bulim[i].addEventListener("click", function () {
        qism = i;
        slide[tan].classList.remove("active");
        bulim[tan].classList.remove("active");
        slide[qism].classList.add("active");
        bulim[qism].classList.add("active");
        tan = i;
    });
}

let palySlider;

let repeater = () => {
    palySlider = setInterval(function () {
        if (qism < 3) {
            qism++;
            slide[qism - 1].classList.remove("active");
            bulim[qism - 1].classList.remove("active");
            slide[qism].classList.add("active");
            bulim[qism].classList.add("active");
        } else {
            qism = 0;
            slide[slideSon - 1].classList.remove("active");
            bulim[slideSon - 1].classList.remove("active");
            slide[qism].classList.add("active");
            bulim[qism].classList.add("active");
        }
    }, 8000);
};

repeater();

sec.addEventListener("mouseover", () => {
    clearInterval(palySlider);
});

sec.addEventListener("mouseout", () => {
    repeater();
});
