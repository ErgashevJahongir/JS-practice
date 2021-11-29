const api = {
    key: "24cff99753a9116c6657207db144ea76",
    baseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
        searchBox.setAttribute("placeholder", `${searchBox.value}`);
        searchBox.value = "";
    }
}

document.querySelector("body").onload = () => defaultGetResults();

function defaultGetResults() {
    fetch(`${api.baseurl}weather?q=tashkent&units=&metric&APPID=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(displayResults);
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=&metric&APPID=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);

    let shahar = document.querySelector(".joylashuv .shahar");
    shahar.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".joylashuv .sana");
    console.log(date);
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp) - 273}<span>°c</span>`;

    let havo = document.querySelector(".havo");
    havo.innerHTML = weather.weather[0].main;

    let oraliq = document.querySelector(".oraliq");
    oraliq.innerHTML = `${
        Math.round(weather.main.temp_min) - 273
    }<span>°c</span> / ${
        Math.round(weather.main.temp_max) - 273
    }<span>°c</span>`;
}

function dateBuilder(s) {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
