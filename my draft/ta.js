let cart = [
    {name: "Shirt", price: 1200, quantity: 2},
    {name: "Pants", price: 1800, quantity: 1},
    {name: "Socks", price: 150, quantity: 3},
];

let totalItems = 0;
let totalBill = 0;

for (let item of cart) {
    totalItems += item.quantity;
    totalBill += item.price * item.quantity;
}

console.log(`Total Items: ${totalItems} pcs`);
console.log(`Total Bill: ${totalBill} BDT`);