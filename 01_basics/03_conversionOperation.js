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