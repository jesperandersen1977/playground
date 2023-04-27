const { constants } = require("buffer");

// object property shorthand
const name = 'Andrew';
const userAge = '27';

const user = {
    name,
    age: userAge,
    location: 'philidelphia'
}
console.log(user);

// Object destructuring

const product = {
    label: 'red NoteBook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;
/* 
const { label: productLabel, stock, rating = 5/*only becomes 5 if not defined } = product;
console.log(productLabel);
console.log(rating); */

// during deconstruction be make this {} by default so we don't get any errora when function is called empty
const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
}

 transaction('order', product);
// transaction('order');