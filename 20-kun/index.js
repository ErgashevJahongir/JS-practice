const searchBtn = document.querySelector("#search-btn");
const mealList = document.querySelector("#meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.querySelector("#recipe-close-btn");

searchBtn.addEventListener("click", getMealList);

mealList.addEventListener("click", getMealRecipe);

recipeCloseBtn.addEventListener("click", () => {
    mealDetailsContent.parentElement.classList.remove("showRecipe");
});

document.addEventListener("DOMContentLoaded", function () {
    searchBtn.addEventListener("keyup", function (e) {
        console.log(e);
        if (e.keyCode === 13) {
            e.preventDefault();
            getMealList();
        }
    });
});

function getMealList() {
    let searchInputText = document.querySelector("#search-input").value.trim();
    fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`
    )
        .then((respone) => respone.json())
        .then((data) => {
            // console.log(data);
            let html = "";
            if (data.meals) {
                data.meals.forEach((meal) => {
                    html += `
                    <div class="meal-item" id='${meal.idMeal}'>
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
                });
                mealList.classList.remove("notFound");
                // console.log(html);
                mealList.innerHTML = html;
            } else {
                mealList.innerHTML = "Sorry, we didn't find any meal!";
                mealList.classList.add("notFound");
            }
        });
}

function getMealRecipe(e) {
    console.log(e);
    e.preventDefault();
    if (e.target.classList.contains("recipe-btn")) {
        let mealItem = e.target.parentElement.parentElement;
        console.log(mealItem.dataset.id);
        fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.id}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                mealRecipeModal(data.meals);
            });
    }
}

function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let htmls = `
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}
        </p>
    </div>
    <div class="recipe-meal-img">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    </div>
    <div class="recipe-link">
        <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
    `;
    mealDetailsContent.innerHTML = htmls;
    mealDetailsContent.parentElement.classList.add("showRecipe");
}

let arr = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
];
let n = 3,
    m = 3,
    k = 0,
    b;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        // console.log(arr[i][j] + ` arr[${i}][${j}]  =  b`);
        b = arr[i][j];
        let sum = 0;
        let katta = 0;
        let kichik = 0;
        for (let f = 0; f < m; f++) {
            sum = sum + arr[i][f];
        }
        console.log(sum - b + " sum yigindi " + arr[i][j] + " = b");
        for (let g = 0; g < n; g++) {
            if (i > g && arr[g][j] < b) {
                katta++;
            }
            if (i < g && arr[g][j] > b) {
                kichik++;
            }
        }
        // console.log(katta);
        // console.log(i);
        // console.log(kichik);
        // console.log(m - 1 - i);
        if (b > sum - b && i == katta && m - 1 - i == kichik) {
            k++;
        }
        // console.log(k);
    }
}

console.log(k + " k ning qiymati");
