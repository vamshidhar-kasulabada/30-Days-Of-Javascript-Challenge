/* Tasks/Activities: */

/**  Activity 1 : Variable Decleration **/

/***  Task 1 : Declare a variable using var, assign it a number, and log the value to the console. ***/
var age = 22
console.log(age)

/***  Task 2 : Declare a variable using let , assign it a string, and log the value to the console. ***/
let myName = "vamshidhar"
console.log(myName)

/** Activity 2: Constant Declaration **/
/*** Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console. ***/
const chaiIsPower = true
console.log(chaiIsPower)

/** Activity 3: Data Types **/

/*** Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. ***/

let num = 22
let myEnergy = "chai"
let codingIsFun = true
let user = {
    name: "vamshidhar",
    age: 22,
}
let randomValues = [22, 33, 44, 55, 66]
console.log(typeof num)
console.log(typeof myEnergy)
console.log(typeof codingIsFun)
console.log(typeof user)
console.log(typeof randomValues)

/** Activity 4: Reassigning Variables **/
/*** Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console. ***/

let someVariable = 0
console.log(`Initial value: ${someVariable}`)
someVariable = 22
console.log(`Value for reassigning: ${someVariable}`)

/** Activity 5: Understanding const **/
/*** Task 6: Try reassigning a variable declared with const and observe the error. ***/

const PI = 3.14
//PI = 2.22; //TypeError: Assignment to constant variable.

/* Feature Request: */

/** 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console**/

// primitive
let someNumber = 49
let someBoolean = true;
let someString = "charAurCode"
let someUndefined = undefined;
let someNull = null;
let someSymbol = Symbol("key1")
let someBigInt = 1234567891234365343n;

// non-primitive
let someObject = {
    someKey1 : "someKey1Value",
    someKey2 : false,
}
let someArray = [3,4,5,6,7,10];

console.log(`Value: ${someNumber}, type: ${typeof someNumber}`)
console.log(`Value: ${someBoolean}, type: ${typeof someBoolean}`)
console.log(`Value: ${someString}, type: ${typeof someString}`)
console.log(`Value: ${someUndefined}, type: ${typeof someUndefined}`)
console.log(`Value: ${someNull}, type: ${typeof someNull}`) // type of null is object, this is a bug in the language
console.log(`Value: ${someSymbol.toString()}, type: ${typeof someSymbol}`)
console.log(`Value: ${someBigInt}, type: ${typeof someBigInt}`)
console.log(`Value: ${someObject}, type: ${typeof someObject}`)
console.log(`Value: ${someArray}, type: ${typeof someArray}`)

/** 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to **/

let canReassignLet = false;
canReassignLet = true;

const canReassignConst = false;
//canReassignConst = true; //TypeError: Assignment to constant variable.

/*
Achievement:
By the end of these activities, you will:
• Know how to declare variables using var, let, and const .
• Understand the different data types in JavaScript.
• Be able to use the typeof operator to identify the data type of a variable.
• Understand the concept of variable reassignment and the immutability of const variables.
*/
