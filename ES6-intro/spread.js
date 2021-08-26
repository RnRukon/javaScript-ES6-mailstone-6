const numbers = [12, 22, 55, 47, 88, 21];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(12, 55, 87, 111, 62);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);


const numbers2 = [124, ...numbers, 200];

numbers.push(100);
console.log(numbers);
console.log(numbers2);


