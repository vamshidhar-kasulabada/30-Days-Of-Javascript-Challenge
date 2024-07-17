// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 1500;
let leap = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            leap = true;
        }
    } else {
        leap = true;
    }
}

/*
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    leap = true;
}
*/

console.log(`${year}: ${leap}`)
