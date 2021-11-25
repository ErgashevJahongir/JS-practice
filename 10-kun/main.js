const secondMil = document.querySelector(".second-hand");
const minutsMil = document.querySelector(".min-hand");
const hoursMil = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = Math.ceil((seconds / 60) * 360);
    secondMil.style.transform = `rotate(${secondsDeg + 90}deg)`;
    const minuts = now.getMinutes();
    const minutsDeg = Math.floor((minuts / 60) * 360);
    minutsMil.style.transform = `rotate(${minutsDeg + 90}deg)`;
    const hour = now.getHours();
    const hourDeg = Math.floor((hour / 12) * 360);
    hoursMil.style.transform = `rotate(${hourDeg + 90}deg)`;
    console.log(seconds);
    // console.log(secondsDeg);
}

setInterval(setDate, 1000);
