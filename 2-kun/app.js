let kitoblarOlami = [
    {
        img: `SaodatAsri.png`,
        name: "Ey Farzand",
        qiymati: "33000 so'm",
    },
    {
        img: "Diqqat.png",
        name: "Diqqat",
        qiymati: "39000 so'm",
    },
    {
        img: "Dunyoni tebratgan 7 buyuk shaxs.png",
        name: "Dunyoni tebratgan 7 buyuk shaxs",
        qiymati: "22000 so'm",
    },
    {
        img: "Duo kitobi.png",
        name: "Duo kitobi",
        qiymati: "35000 so'm",
    },
    {
        img: `Ibtidoiy islomiya.png`,
        name: "Ibtidoiy islomiya",
        qiymati: "23000 so'm",
    },
    {
        img: "Imom A'zam.png",
        name: "Imom A'zam",
        qiymati: "25000 so'm",
    },
    {
        img: "Mufassal tajvid.jpeg",
        name: "Mufassal tajvid",
        qiymati: "20000 so'm",
    },
    {
        img: "Peshonamdagi nur.png",
        name: "Peshonamdagi nur",
        qiymati: "50000 so'm",
    },
    {
        img: `Ilim olish sirlari.jpeg`,
        name: "Ilim olish sirlari",
        qiymati: "33000 so'm",
    },
    {
        img: "SaodatAsri.png",
        name: "Saodat Asri",
        qiymati: "25000 so'm",
    },
    {
        img: "Super hayot.png",
        name: "Super hayot",
        qiymati: "45000 so'm",
    },
    {
        img: "Yuqumlilik.png",
        name: "Yuqumlilik",
        qiymati: "29000 so'm",
    },
];

const kitoblar = document.querySelector(".kitoblar");
const container = document.querySelector(".container");

for (let i = 0; i < kitoblarOlami.length; i++) {
    let kitob = document.createElement("div");
    kitob.classList.add("kitob");

    let img = document.createElement("img");
    img.src = kitoblarOlami[i].img;
    img.alt = kitoblarOlami[i].name;
    kitob.appendChild(img);

    let maqova = document.createElement("h3");
    maqova.textContent = kitoblarOlami[i].name;
    kitob.appendChild(maqova);

    let p = document.createElement("p");
    p.textContent = kitoblarOlami[i].qiymati;
    kitob.appendChild(p);

    let belgi = document.createElement("div");
    belgi.classList.add("belgi");

    let minus = document.createElement("span");
    minus.classList.add("minus");
    minus.textContent = "-";
    belgi.appendChild(minus);

    let par = document.createElement("p");
    par.classList.add("salom");
    par.innerHTML = "0";
    belgi.appendChild(par);

    let plus = document.createElement("span");
    plus.classList.add("plus");
    plus.textContent = "+";
    belgi.appendChild(plus);

    kitob.appendChild(belgi);
    kitoblar.appendChild(kitob);

    minus.addEventListener("click", function () {
        if (parseInt(par.textContent) > 0) {
            par.textContent = parseInt(par.textContent) - 1;
        }
    });
    plus.addEventListener("click", function () {
        if (parseInt(par.textContent) >= 0) {
            par.textContent = parseInt(par.textContent) + 1;
        }
    });
}

let button = document.createElement("button");
button.type = "button";
button.textContent = "Buyurtma berish";
kitoblar.appendChild(button);

let jamiPulDiv = document.createElement("div");
jamiPulDiv.classList.add("jamiPul");

let ul = document.createElement("ul");
let tr = document.createElement("tr");
ul.appendChild(tr);

let kitobNomi = document.createElement("th");
kitobNomi.textContent = "Kitob nomi";
tr.appendChild(kitobNomi);

let kitobSoni = document.createElement("th");
kitobSoni.textContent = "Kitob soni";
tr.appendChild(kitobSoni);

let kitobNarxi = document.createElement("th");
kitobNarxi.textContent = "Kitob narxi";
tr.appendChild(kitobNarxi);
jamiPulDiv.appendChild(ul);

let jamiPul = document.createElement("h3");
// jamiPulDiv.appendChild(jamiPul);

let x = document.createElement("i");
x.classList.add("bi");
x.classList.add("bi-x-circle");
jamiPulDiv.appendChild(x);

let text = document.createElement("h4");
// container.appendChild(jamiPulDiv);
// jamiPulDiv.appendChild(text);

container.appendChild(jamiPulDiv);

x.addEventListener("click", function () {
    jamiPulDiv.style.top = "-50%";
    kitoblar.classList.remove("opacity");
    xarid.textContent = "";

    let tr = document.createElement("tr");
    ul.appendChild(tr);

    let kitobNomi = document.createElement("th");
    kitobNomi.textContent = "Kitob nomi";
    tr.appendChild(kitobNomi);

    let kitobSoni = document.createElement("th");
    kitobSoni.textContent = "Kitob soni";
    tr.appendChild(kitobSoni);

    let kitobNarxi = document.createElement("th");
    kitobNarxi.textContent = "Kitob narxi";
    tr.appendChild(kitobNarxi);
    jamiPulDiv.appendChild(ul);

    text.textContent = "";
    jamiPul.textContent = "";

    if (summa > 0) {
        ul.style.display = "block";
        jamiPul.textContent = summa + " so'm";
        text.textContent = "Haridingiz uchun rahmat :)";
        jamiPulDiv.appendChild(jamiPul);
    } else {
        text.textContent = "Hali sizga yoqadigan kitob topilmadimi :( ";
        ul.style.display = "none";
        jamiPulDiv.appendChild(text);
        tr.textContent = "";
    }
});

// let trKitob = document.createElement("tr");
// let tdNom = document.createElement("td");
// trKitob.appendChild(tdNom);

// let tdSon = document.createElement("td");
// trKitob.appendChild(tdSon);

// let tdNarx = document.createElement("td");
// trKitob.appendChild(tdNarx);

// ul.appendChild(trKitob);
let xarid = [];
let summa;
button.addEventListener("click", function () {
    let sum = 0;

    for (let j = 0; j < kitoblarOlami.length; j++) {
        let pul = kitoblarOlami[j].qiymati;
        pul = parseInt(pul.split(" ")[0]);

        par = document.querySelectorAll(".salom")[j];

        let trKitob = document.createElement("tr");
        let tdNom = document.createElement("td");
        trKitob.appendChild(tdNom);

        let tdSon = document.createElement("td");
        trKitob.appendChild(tdSon);

        let tdNarx = document.createElement("td");
        trKitob.appendChild(tdNarx);

        if (parseInt(par.textContent) > 0) {
            tdNom.textContent = kitoblarOlami[j].name;

            tdSon.textContent = parseInt(par.textContent);

            tdNarx.textContent = kitoblarOlami[j].qiymati;

            sum += parseInt(par.textContent) * pul;
            ul.appendChild(trKitob);
            xarid = ul;
        }
        summa = sum;
    }

    kitoblar.classList.add("opacity");
    jamiPulDiv.style.top = "50%";
    jamiPulDiv.style.transition = "0.5s all ease";

    if (sum > 0) {
        ul.style.display = "block";
        jamiPul.textContent = sum + " so'm";
        text.textContent = "Haridingiz uchun rahmat :)";
        jamiPulDiv.appendChild(jamiPul);
        jamiPulDiv.appendChild(text);
    } else {
        text.textContent = "Hali sizga yoqadigan kitob topilmadimi :( ";
        ul.style.display = "none";
        jamiPulDiv.appendChild(text);
    }
});
