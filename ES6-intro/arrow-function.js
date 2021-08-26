// function declaration

function add(num1, num2) {
    return num1 + num2;
}

// function expression

console.log(add(12, 24));
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

//function expression (anonymous);

const ass3 = function (num1, num2) {
    return num1 + num2;
};

//arrow function
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(12, 13);
console.log(sum4);