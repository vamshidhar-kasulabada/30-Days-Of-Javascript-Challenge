/* Activity 1: Function Declaration */

/** Task 1: Write a function to check if a number is even or odd and log the result to the console. **/

function evenOrOdd(num){
    if(num %2==0){
        console.log(`${num} is Even`)
    }else{
        console.log(`${num} is Odd`)
    }
}
evenOrOdd(2)

/** • Task 2: Write a function to calculate the square of a number and return the result. **/

function findSquare(num){
    return num*num;
}
let n = 5;
let square = findSquare(n);
console.log(`Square of ${n} is: ${square}`)

/* Activity 2: Function Expression */
/** Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. **/

let sum = function(a,b){
    console.log(`sum is: ${a+b}`)
}
sum(3,4)

/** Task 4: Write a function expression to concatenate two strings and return the result. **/

let concat = function(a,b){
    return a+b;
}
console.log(`${concat("vamshidhar ", "kasulabada")}`)

/* Activity 3: Arrow Functions */
/** Task 5: Write an arrow function to calculate the sum of two numbers and return the result. **/

let add = (a,b)=> a+b;

/** Write an arrow function to check if a string contains a specific character and return a boolean value. **/

let fun = (str,target)=>{
    return str.includes(target)
}
console.log(fun("vamshidhar","dhar"))

/* Activity 4: Function Parameters and Default Values */
/** Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. **/

function product(a, b = 1){
    return a*b;
}
console.log(product(2))
console.log(product(2,4))

/** Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. **/

function greet(name, age = 18){
    return `Welcome ${name}, your age is ${age}`
}

/* 5: Higher-Order Functions */
/** Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times. **/

function callNTimes(fn,n){
    for(let i = 1; i<=n; i++){
        fn(`functions called with: ${i}`);
    }
}

function myFun(a){
    console.log(a)
}

callNTimes(myFun, 5)

/** Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. **/

function add2(a){
    return a+2;
}
function add5(a){
    return a+5;
}
function someFun(fun1, fun2, value){
    return fun2(fun1(value))
}
console.log(someFun(add2, add5, 7))
