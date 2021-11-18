const tozalash = document.querySelector(".tozalash");
let input = document.querySelector("input");
let ayirish = document.querySelector(".ayirish"),
    qoshish = document.querySelector(".qoshish"),
    kopaytirish = document.querySelector(".kopaytr"),
    bolish = document.querySelector(".bulish"),
    teng = document.querySelector(".teng"),
    butun = document.querySelector(".butun"),
    raqam = document.querySelectorAll(".raqam");

// let amal;
let son;

input.value = "0";

for (let i = 0; i < raqam.length; i++) {
    raqam[i].addEventListener("click", function () {
        if (son == undefined) {
            son = raqam[i].textContent;
            input.value = son;
        } else {
            son = son + `${raqam[i].textContent}`;
            input.value = son;
        }
    });
}

tozalash.addEventListener("click", function () {
    input.value = "0";
    son = "";
});

qoshish.addEventListener("click", function () {
    if (!(input.value == "0")) {
        if (
            (son.endsWith("+ ") ||
                son.endsWith("- ") ||
                son.endsWith("* ") ||
                son.endsWith("/ ")) &&
            son.split(" ").length <= 3
        ) {
            son = son.replace("/", "+");
            son = son.replace("-", "+");
            son = son.replace("*", "+");
            son = son.replace("+", "+");
            input.value = son;
        } else {
            son = son + " + ";
            input.value = son;
        }
    }
});

ayirish.addEventListener("click", function () {
    if (!(input.value == "0")) {
        if (
            (son.endsWith("+ ") ||
                son.endsWith("- ") ||
                son.endsWith("* ") ||
                son.endsWith("/ ")) &&
            son.split(" ").length <= 3
        ) {
            son = son.replace("/", "-");
            son = son.replace("-", "-");
            son = son.replace("*", "-");
            son = son.replace("+", "-");
            input.value = son;
        } else {
            son = son + " - ";
            input.value = son;
        }
    }
});

kopaytirish.addEventListener("click", function () {
    if (!(input.value == "0")) {
        if (
            (son.endsWith("+ ") ||
                son.endsWith("- ") ||
                son.endsWith("* ") ||
                son.endsWith("/ ")) &&
            son.split(" ").length <= 3
        ) {
            son = son.replace("/", "*");
            son = son.replace("-", "*");
            son = son.replace("*", "*");
            son = son.replace("+", "*");
            input.value = son;
        } else {
            son = son + " * ";
            input.value = son;
        }
    }
});

bolish.addEventListener("click", function () {
    if (!(input.value == "0")) {
        // console.log(son.split(" ").length <= 3);
        if (
            (son.endsWith("+ ") ||
                son.endsWith("- ") ||
                son.endsWith("* ") ||
                son.endsWith("/ ")) &&
            son.split(" ").length <= 3
        ) {
            console.log(son.split(" "));
            son = son.replace("/", "/");
            son = son.replace("-", "/");
            son = son.replace("*", "/");
            son = son.replace("+", "/");
            input.value = son;
            console.log(son.split(" "));
        } else {
            son = son + " / ";
            input.value = son;
            console.log(son.split(" "));
            // console.log(son.split(" ").length <= 3);
        }
    }
});

butun.addEventListener("click", function () {
    son = son + ".";
    input.value = son;
});

teng.addEventListener("click", function () {
    // input.value = eval(input.value);
    // console.log(input.value);
    // console.log(input.value);
    amal = input.value.split(" ");
    // console.log(amal);
    let kop = input.value.match(` * `).length;
    console.log(son);
    console.log(kop);
    let kopay = 0;
    son = son.toString();

    for (var i = 0; i < amal.length; i++) {
        if (amal[i] == "*") {
            kopay++;
        }
    }
    for (let j = 0; j < kopay; j++) {
        let a, b, index;
        index = amal.indexOf("*");
        console.log(index);
        a = amal[index - 1];
        console.log(a);
        b = amal[index + 1];
        console.log(b);
        amal.splice(index - 1, 1);
        // son.substr(index - 1, 1);
        // console.log(typeof son);
        // console.log(son);
        amal.splice(index, 1);
        // son.substr(index, 1);
        // console.log(son);
        amal[index - 1] = `${a * b}`;
        // son.replace("*", `${a * b}`);
        console.log(amal);
    }

    let bol = 0;
    for (let i = 0; i < amal.length; i++) {
        if (amal[i] == "/") {
            bol++;
        }
    }
    for (let j = 0; j < bol; j++) {
        let a, b, index;
        // console.log(son);
        index = amal.indexOf("/");
        console.log(index);
        a = amal[index - 1];
        console.log(a);
        b = amal[index + 1];
        console.log(b);
        amal.splice(index - 1, 1);
        amal.splice(index, 1);
        amal[index - 1] = `${parseInt(a) / parseInt(b)}`;
        console.log(amal);
    }

    let ayr = 0;
    for (let i = 0; i < amal.length; i++) {
        if (amal[i] == "-") {
            ayr++;
        }
    }
    for (let j = 0; j < ayr; j++) {
        let a, b, index;
        // console.log(son);
        index = amal.indexOf("-");
        console.log(index);
        a = amal[index - 1];
        console.log(a);
        b = amal[index + 1];
        console.log(b);
        amal.splice(index - 1, 1);
        amal.splice(index, 1);
        amal[index - 1] = `${a - b}`;
        console.log(amal);
    }

    let qush = 0;
    for (let i = 0; i < amal.length; i++) {
        if (amal[i] == "+") {
            qush++;
        }
    }
    for (let j = 0; j < qush; j++) {
        let a, b, index;
        // console.log(son);
        index = amal.indexOf("+");
        console.log(index);
        a = amal[index - 1];
        console.log(a);
        b = amal[index + 1];
        console.log(b);
        amal.splice(index - 1, 1);
        amal.splice(index, 1);
        amal[index - 1] = `${parseInt(a) + parseInt(b)}`;
        console.log(amal);
    }

    input.value = amal.toString();
    son = amal.toString();
});
