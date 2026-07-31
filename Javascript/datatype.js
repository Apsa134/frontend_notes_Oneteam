// Datatypes
//number
let a = 12
console.log(a)
let n4 = 'something here too' / 2;
console.log(n4)

let n3 = Infinity;
console.log(n3)

//string
let name = "Apsa"
console.log(name)
//can written inside the double cots and single cots
let s3 = `can embed ${name}`;
console.log(s3);

//boolean
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

//null
let age = null;
console.log(age)//it shows null vcalue

//undefined
let x;
console.log(x)//it shows that it is defined doesnot show any error

//symbol

let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);

//BigInt
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);

//Non primitive
//object
let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)
//array
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);