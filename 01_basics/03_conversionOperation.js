//let score = "abc333";
//score = null;
//score = undefined;
score = true;

console.log(score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true;  0 => false
// "" => false
// "shishir" => true

let someNumber = 44;
let changedToString = String(someNumber);
console.log(changedToString);
console.log(typeof changedToString);


// ********************* OPERATIONS ******************* //

let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
//console.log(2%3);

let str1 = "hello";
let str2 = "shishir";

let str3 = str1 + str2;
console.log(str3);

//console.log ("1" + 2);
//console.log (1 + "2");
//console.log("1" + 2 + 3);
//console.log(1 + 3 + "4");

//console.log((3 + 4) * 5 / 3);

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

