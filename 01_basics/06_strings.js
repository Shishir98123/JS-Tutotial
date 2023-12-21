const name = "shishir";
const repoCount = 50;

console.log(name + repoCount + " Value ");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("shishir-sk-com");
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.charAt(3));
console.log(gameName.indexOf("s"));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const newStringOne = "   shishir   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com";
console.log(url.replace('google', 'facebook'));

console.log(url.includes('google'));

console.log(gameName.split('-'));



