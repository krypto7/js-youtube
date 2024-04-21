let score = null;

// console.log(typeof score);

let convertToNumber = Number(score); // convert string into the number
// console.log(typeof convertToNumber);
// console.log(convertToNumber);
// console.log("nan type", typeof NaN);

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0

let checkNumber = "";

let booleanConvert = Boolean(checkNumber);
// console.log(booleanConvert);
// console.log(typeof booleanConvert);

// 1 => true ; 0 => false;
//"" => false;
//"krypton" => true

let temp = 33;
let convertIntoStr = String(temp);
// console.log(convertIntoStr);
// console.log(typeof convertIntoStr);

let value = 33;
let negValue = -value;
// console.log(negValue);
// console.log(typeof negValue);

// **************************Operations***********************

// console.log(3+3);
// console.log(3 * 3);
// console.log(3 / 3);
// console.log(3 ** 3);
// console.log(3 % 3);

let str1 = "Hello";
let str2 = " krypton";

// console.log(str1 + str2); ===> Hellp krypton

// console.log("1" + 2); ===> 12
// console.log("1" - 2); ===> -1
// console.log(1 + "2"); ===> 12
// console.log(1 + 2 + "2"); ===> 32
// console.log("1" + 2 + 2); ===> 122

// console.log(+true); ===> 1
// console.log(+"");  ===> 0

let x = 3;
const y = x++;
let a = 3;
const b = ++a;
// console.log(x, y); ===> 4,3
// console.log(a, b); ===> 4,4
