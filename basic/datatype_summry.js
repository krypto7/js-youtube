/* 
Primitve DataType: 
    its a call by value, means whenever you copy the primitive datatype variable the you copy the variable with 
    value.

    there are 7 primitive datatypes in js
    Number,
    String,
    undefiined,
    symbole,
    boolean,
    null,
    Bigint

reference Datatype:
    its also call as a call by reference whenver we copy the the reference datatype it will not copied by value but
    it copies its reference

    Array , Objects, Functions

    for example if you clone arr1 as arr2 then if you make changes in arr2 , arr1 also changes
*/

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id); ===> Symbol(123)
// console.log(anotherId); ===> Symbol(123)
// console.log(id === anotherId); ===> false

// Array

const heros = ["Ronaldo", "Messi", "Neymar"];

const myObj = {
  name: "Nishant",
  age: 22,
};

function HelloWorld() {
  console.log("Hello World");
}

// console.log(typeof heros);  ===> Object
// console.log(typeof myObj);  ===> Object
// console.log(typeof HelloWorld); ===> Function
