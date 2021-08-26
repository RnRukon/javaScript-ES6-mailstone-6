const friend = ['Tom Hanks', 'Tom brady', 'Tom solaiman'];
const fLengths = friend.map(friend => friend.length);

// console.log(fLengths);

const products = [
    { name: 'water bottle', price: '50', color: 'yellow' },
    { name: 'mobil phone', price: '15000', color: 'black' },
    { name: 'smart watch', price: '3000', color: 'black' },
    { name: 'sticky note', price: '30', color: 'pink' },
    { name: 'water glass', price: '5', color: 'white' },
]
const productName = products.map(product => product.name);
// console.log(productName);
const productPrice = products.map(product => product.price);
// console.log(productPrice);

// products.map(product => console.log(product));
products.forEach(product => console.log(product));