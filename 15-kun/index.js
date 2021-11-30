// // ====== Callback function =========

// const users = [
//     { name: "Bexruz", firstName: "Xolmatov" },
//     { name: "Bahtiyor", firstName: "Eragshev" },
//     { name: "Azizbek", firstName: "Sunnatov" },
// ];

// function getUsers() {
//     setTimeout(() => {
//         let resalt = "";
//         users.forEach((user) => {
//             resalt += `<li>${user.name} ${user.firstName}</li>`;
//         });
//         document.body.innerHTML = resalt;
//     }, 1000);
// }

// // getUsers();

// function addUser(user, callback) {
//     setTimeout(() => {
//         console.log(user);
//         users.push(user);
//         callback();
//     }, 2000);
// }

// addUser({ name: "Jahongir", firstName: "Ergashev" }, getUsers);

// // ======= promise ========

// const users1 = [
//     { name: "Bexruz", firstName: "Xolmatov" },
//     { name: "Bahtiyor", firstName: "Eragshev" },
//     { name: "Azizbek", firstName: "Sunnatov" },
// ];

// function getUsers() {
//     setTimeout(() => {
//         let resalt = "";
//         users1.forEach((user) => {
//             resalt += `<li>${user.name} ${user.firstName}</li>`;
//         });
//         document.body.innerHTML = resalt;
//     }, 1000);
// }

// function addUser(user) {
//     return new Promise((resolve, rejact) => {
//         setTimeout(() => {
//             console.log(user);
//             users1.push(user);

//             const error = true;

//             if (!error) {
//                 resolve();
//                 console.log("Hammasi to'gri ishladi :)");
//             } else {
//                 rejact("Nimadir xato bo'ldi :( ");
//             }
//         }, 2000);
//     });
// }

// addUser({ name: "Jahongir", firstName: "Ergashev" })
//     .then(getUsers)
//     .catch((err) => (document.body.innerHTML = err));

// ========= Async =========

const users1 = [
    { name: "Bexruz", firstName: "Xolmatov" },
    { name: "Bahtiyor", firstName: "Eragshev" },
    { name: "Azizbek", firstName: "Sunnatov" },
];

function getUsers() {
    setTimeout(() => {
        let resalt = "";
        users1.forEach((user) => {
            resalt += `<li>${user.name} ${user.firstName}</li>`;
        });
        document.body.innerHTML = resalt;
    }, 1000);
}

function addUser(user) {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            console.log(user);
            users1.push(user);

            const error = false;

            if (!error) {
                resolve();
                console.log("Hammasi to'gri ishladi :)");
            } else {
                rejact("Nimadir xato bo'ldi :(");
            }
        }, 2000);
    });
}

async function result() {
    await addUser({ name: "Jahongir", firstName: "Ergashev" });

    getUsers();
}

result();
