
//Arithematic operators
const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);

//Assignment operators
let n = 10;
n += 5;
n *= 2;
console.log(n);

//comparison operators
console.log(10 > 5);
console.log(10 === "10");

//logical operators
const a = true, b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR

//bitwise operators
const res = 5 & 1; // Bitwise AND
console.log(res);

//unary operstors
let x = 5;
let y = 10;

console.log(+x);
console.log(-x);
console.log(++y);
console.log(x++);
console.log(--x);

console.log(!x);//not 

//relational operators
const obj = { length: 10 };
console.log("length" in obj);
console.log([] instanceof Array);

//chaining operators
const obje = { name: "Aman", address: { city: "Delhi" } };
console.log(obje.address?.city);
console.log(obje.contact?.phone);

//ternary opertors
let age = 21;

const result =
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);
