const faker = require("faker");

console.log(`====================
WELCOME TO MY SHOP
====================`)

for(let x = 0; x < 10; x++ ){
    console.log(`${faker.commerce.productName()} is ${faker.commerce.price()}`)
}