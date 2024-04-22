let str = "Krypton";
let newStr = `Hi ! My Name is ${str}`;
// console.log(newStr);

let gameChanger = new String("Kryptonian kaisa hai bhai");

// console.log(gameChanger.__proto__);
// console.log(gameChanger.charAt(2));
// console.log(gameChanger.indexOf("t"));

const newString = gameChanger.substring(0, 2);
console.log(newString);

// console.log(gameChanger.length);
const anotherString = gameChanger.slice(-10, 4);
console.log(anotherString);

const newStr1 = "   Nishant    ";
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://nishant.com/nishant%20karkar";
console.log(url.replace("%20", "-"));
console.log(url.includes("nishant"));

const changeStr = "Nishant-Fc-karekr";
console.log(changeStr.split("")); //this need when you break down the string and convert into array
console.log(changeStr.split("", 3)); //this need when the array conversion and how much element you want so second prameter is for limit

console.log(gameChanger.split(" - "));
