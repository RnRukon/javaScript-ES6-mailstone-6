function add(num1, num2 = 0) {

    // Option.1

    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    // option. 2

    // num2 = num2 || 0;

    const total = num1 + num2;
    return total;
}
const sum = add(100, 200);
console.log(sum);

function fullName(first, last = "Sikdar") {
    const name = first + " " + last;
    return name;
}
console.log(fullName("Rukon", "Uddin"));