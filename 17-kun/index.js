const hazil = document.querySelector("#hazillar");
const hazilBtn = document.querySelector("#hazilBtn");
const rasm = document.querySelector("img");

window.onload = () => {
    hazilniAlmashtir();
};

// Rasmni yuklab olishi uchun setTimeOut qo'shildi

function joke() {
    setTimeout(hazilniAlmashtir, 500);
}

hazilBtn.addEventListener("click", joke);

hazilBtn.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        // joke();
    }
});

// Async await usulida

async function hazilniAlmashtir() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    hazil.innerHTML = data.joke;
    rasm.src = `https://icanhazdadjoke.com/j/${data.id}.png`;
}

// Fetch Api usulida

// function hazilniAlmashtir() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         },
//     };
//     fetch("https://icanhazdadjoke.com/", config)
//         .then((res) => res.json())
//         .then((data) => {
//             hazil.innerHTML = data.joke;
//         });
// }
