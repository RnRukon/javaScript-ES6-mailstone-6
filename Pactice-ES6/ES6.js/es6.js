//No.1 কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

// const

//const দিয়ে ডিগ্লার করা variable কে reassign করা যায় না।

// const name = 'Rukon Uddin';
// name = 'Rukon Uddin Sikdar';
// console.log(name);

// let
// let দিয়ে ডিক্লার করা variable কে reassign বার variable  এর মান চেঞ্জ করা যায়।
/*
let fatherName = 'Abbus Sattar';
fatherName = 'Abdus Sattar Sikdar';
// console.log(fatherName);

// No.2 টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

const student = { name: 'Rukon Uddin', class: 13, Id: '245531', section: 'honours' }
const myClass = student.class;
const myId = student.Id;
const section = student.section;

const myAddress = `
My name is ${name}.My Fathers name ${fatherName}.Im study class of the ${myClass} and my class section ${section};
`
console.log(myAddress); */

//No.(3-1)--একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

//Arrow function----

/* const arrowFunction = number => number / 5;
const number = arrowFunction(100);
console.log(number); */

//No.(3-2)--তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

/* const arrowFunction = (num1, num2) => {
    const sumNum1 = num1 + 2;
    const sunNum2 = num2 + 2;
    const multiplication = sumNum1 * sunNum2;
    return multiplication;
}

console.log(arrowFunction(10, 20)); */
/* const arrowFunction = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log(arrowFunction(10, 20));
 */


//No.(3-3) এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
/* const arrowFunction = (num1, num2, num3) => num1 * num2 * num3;
console.log(arrowFunction(10, 10, 10));
 */

//No.(3-4)এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// const arrowFunction = (num1, num2) => {
//     const num1Sum = num1 + 2;
//     const num2Sum = num2 + 2;
//     const multiplication = num1Sum * num2Sum;
//     return multiplication;
// }
// console.log(arrowFunction(10, 10));

// No.4-----[হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

//No.4-5 [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

// No.5অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 


// const number = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const multiFunction = number.map(n => n * 5);

// console.log(multiFunction);


/* const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
 */



// No.6-- [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

// const number = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const oddFunction = number.filter(n => n % 2);

// console.log(oddFunction);


// No.7---- একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

/* const products = [
    { name: 'phone', price: 50000, model: 'samsung j5 prime' },
    { name: 'Monitor', price: 5000, model: 'AOC 22 inch' },
    { name: 'dex top', price: 5000, model: 'cor is raison 3' },
    { name: 'KeyBoard', price: 1000, model: 'A-Tech' },
    { name: 'headphone', price: 1300, model: 'HAVIT I66' }
]; */

/* const findFunction = products.map(product => product);
console.log(findFunction); */
// ----------------------------------
/* const findFunction = products.map(product => product.name);
console.log(findFunction);
 */
// ----------------------------------

/* const findFunction = products.filter(product => product);
console.log(findFunction); */
// ----------------------------------

/* const findFunction = products.find(product => product);
console.log(findFunction); */
// ----------------------------------

/* const findFunction = products.find(product => product.price);
console.log(findFunction); */
// ----------------------------------

/* const findFunction = products.find(product => product.price == 5000);
console.log(findFunction); */

// ----------------------------------

// products.find(product => console.log(product.price));






/* const numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const forEachFunction = numbers.forEach(number => number);
console.log(forEachFunction);
 */

/* const friends = ['Rukon', 'Rufiq', 'Liton', 'Delwar'];
const findName = friends.find(names => names.length === 5);
console.log(findName); */


// No. 8--সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 


/* const fish = { id: 58, name: 'king Hilsha', price: 9000, phone: '01755555555', address: 'chandpur', dress: 'silver' };


const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id;
console.log(phone, price, dress, id);
 */
/* const product = { name: 'phone', price: 50000, model: 'samsung j5 prime' };

// const name = product.name;
// console.log(name);

const { name, price, model } = product;
console.log(name, price, model);
 */

/* const products =
    { company: 'robi', employee: 100, anotherCompany: { company: 'artel', employee: 200, anotherCompany2: { company: 'RFL', employee: 300 } } }
    ;
const { company } = products.anotherCompany.anotherCompany2;
console.log(company);
 */


// No.9-----[চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

/* const friends = ['Rukon', 'Rufiq', 'Liton', 'Delwar'];
[a, b, c] = friends;
var three = c;
console.log(c); */

/* const friends = ['Rukon', 'Rufiq', 'Liton', 'Delwar'];
[a, b, c, ...rest] = friends;
var three = rest;
console.log(rest);
 */



//No.10---. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

/* const defaultParameter = (num1, num2, num3 = 7) => num1 + num2 + num3;
const result = defaultParameter(10, 10);
console.log(result);
 */




var data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};



// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 


// const company = {
//     name: 'GP',
//     ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
//     web: {
//         work: 'website development',
//         employee: 22,
//         frameWork: 'react',
//         tech: {
//             first: 'html',
//             second: 'css',
//             third: 'js',
//         }

//     }
// }

// console.log(company?.web?.tech);
// console.log(company?.ceo?.tech);