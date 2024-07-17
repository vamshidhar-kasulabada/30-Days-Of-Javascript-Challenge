// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = 22;
let b = 12;
let c = 49;

let max;
let min;

if (a > b && a > c) {
    max = a;
    if (b < c) {
        min = b;
    } else {
        min = c;
    }
} else if (b > a && b > c) {
    max = b;
    if (a < c) {
        min = a;
    } else {
        min = c;
    }
} else {
    max = c;
    if (a < b) {
        min = a;
    } else {
        min = b;
    }
}

console.log(`Max: ${max}`)
console.log(`Min: ${min}`)
