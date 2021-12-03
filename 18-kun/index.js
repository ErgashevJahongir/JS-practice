const almashtirBtn = document.querySelector(".generator_btn");
const rasmJoyi = document.querySelector(".picture");

// almashtirBtn.addEventListener("click", fetchApi);

// function fetchApi() {
//     fetch("https://api.thecatapi.com/v1/images/search")
//         .then((response) => response.json())
//         .then((data) => {
//             rasmJoyi.src = data[0].url;
//         })
//         .catch((error) => console.log("NImadir xato ketdi"));
// }

almashtirBtn.addEventListener("click", asyncApi);

async function asyncApi() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let user = await response.json();

    rasmJoyi.src = user[0].url;
}
