/* Tasks/Activities: */

/** Activity 1: Arithmetic Operations **/

/*** Task 1: Write a program to add two numbers and log the result to the console. ***/
let a = 2;
let b = 4;
console.log(`Result of ${a} + ${b} is ${a + b}`);

/*** Task 2: Write a program to subtract two numbers and log the result to the console. ***/
let c = 10;
let d = 5;
console.log(`Result of ${c} - ${d} is ${c - d}`);

/*** Task 3: Write a program to multiply two numbers and log the result to the console. ***/

let e = 6;
let f = 9;
console.log(`Result of ${e} * ${f} is ${e * f}`);

/*** Task 4: Write a program to divide two numbers and log the result to the console***/
let g = 10;
let h = 5;
console.log(`Result of ${g} / ${h} is ${g / h}`);

/*** Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console. ***/
let num1 = 27;
let num2 = 11;
let remainder = 27 % 11;
console.log(`Remainder when ${num1} / ${num2} is: ${remainder}`);

/** Activity 2: Assignment Operators **/

/*** Task 6: Use the += operator to add a number to a variable and log the result to the console. ***/

let number = 5;
number += 5;
console.log(`number is ${number}`);

/*** Task 7: Use the -= operator to subtract a number from a variable and log the result to the console. ***/

let n = 10;
n -= 7;
console.log(`number is ${n}`);

/** Activity 3: Comparison Operators **/
let n1 = 5;
let n2 = 15;
/*** Task 8: Write a program to compare two numbers using > and < and log the result to the console. ***/

console.log(n1 > n2);
console.log(n1 < n2);

/*** Task 9: Write a program to compare two numbers using >= and <= and log the result to the console. ***/

console.log(n1 >= n2);
console.log(n1 <= n2);

/*** Task 10: Write a program to compare two numbers using == and === and log the result to the console. ***/

console.log(n1 == n2);
console.log(n1 === n2);

/** Activity 4: Logical Operators **/

/*** Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. ***/

console.log(10 < 20 && "s" > "a");

/*** Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console. ***/
console.log(10 > 20 || "s" > "a");

/*** Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console. ***/

console.log(!(10 > 20 || "s" > "a"));

/** Activity 5: Ternary Operator **/
/*** Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console. ***/

let someNum = -23
let sign = (someNum > 0 ) ? "positive" : "negative"
console.log(`The number is ${sign}`)

/* Feature Request: */

/** 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results. **/
let n3 = 20
let n4 = 10

console.log(`Addition: ${n3+n4}`)
console.log(`Subtraction: ${n3-n4}`)
console.log(`Multiplication: ${n3*n4}`)
console.log(`Division: ${n3/n4}`)
console.log(`Remainder: ${n3%n4}`)


/** 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results. **/

let someNum1 = 20
let someNum2 = 10

console.log(someNum1 > someNum2 && someNum1 > 0)
console.log(someNum1 < someNum2 || someNum1 > 0)
console.log(!(someNum1==someNum2))



/** 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result **/

let someNum3 = 0
let sign1 = (someNum3 > 0 ) ? "positive" : (someNum3<0) ? "negative" : "neither positive nor negative"
console.log(`The number is ${sign1}`)
