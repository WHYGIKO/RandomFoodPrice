let users = {};

for (let i = 1; i <= 10; i++) {
    let name = prompt(`Ismingizni kiriting: `, "User").trim();
    let age = +prompt(`Yoshingizni kiriting: `, "30").trim();

    if (!name) name = "User";
    if (!age || isNaN(age)) age = 30;
    
    users[i] = {
        name: name,
        age: age
    };
}

for (let id in users) {
    console.log(`Foydalanuvchi ${id}`);
    console.log(`Ismingiz: ${users[id].name}`);
    console.log(`Yoshingiz: ${users[id].age}`);
}

console.log(users);