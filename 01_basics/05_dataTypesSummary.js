// Primitive Data Types

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('1234');
const anotherId = Symbol('1234');
console.log(id === anotherId); //=> false

const bigNumber = 65465465466454654646n;
console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "shishir",
    age: 22,
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello world");
}

myFunction();
