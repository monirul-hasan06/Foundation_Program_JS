let user = {
    name : "Shafayet",
    age : 25,
    address : "Dhaka",
};

console.log(user.name);

console.log(user.age);

delete user.address

user.address = {
    city : "Rajshahi",
    area : "Upashahor",
}

console.log(user);
console.log(Object.entries(user));

