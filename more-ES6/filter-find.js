const numbers = [12, 63, 5, 4, 8, 45, 12, 69, 87, 55, 2,];
const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber);
const smallNumber = numbers.filter(number => number < 20);
// console.log(smallNumber);

const products = [
    { name: 'water bottle', price: '50', color: 'yellow' },
    { name: 'mobil phone', price: '15000', color: 'black' },
    { name: 'smart watch', price: '3000', color: 'black' },
    { name: 'sticky note', price: '30', color: 'pink' },
    { name: 'sticky note', price: '34', color: 'pink' },
    { name: 'water glass', price: '5', color: 'white' },
]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);