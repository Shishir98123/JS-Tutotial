// Numbers
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// Maths

console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.8));
console.log(Math.min(2,4,7,8));
console.log(Math.max(2,4,7,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 1;
const max = 5;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);


