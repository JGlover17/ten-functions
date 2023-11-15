"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// Question 1
function  isTrue(input) {
   return input === true;
}
// Question 2
function isFalse(input) {
    return input === false;
}
// Question 3
function not(input) {
    return !input;
}
// Question 4
function addOne(input) {
    // Convert the input to a number
    let numericInput = Number(input);

    // Check if the conversion resulted in a valid number
    if (!isNaN(numericInput)) {
        return numericInput + 1;
    } else {
        return NaN;
    }
}
// Question 5
function isEven(input) {
    // Convert the input to a number if it's a string
    let number = typeof input === 'string' ? Number(input) : input;

    // Check if the number is an even number
    return typeof number === 'number' && !isNaN(number) && number % 2 === 0;
}
// Question 6
function isIdentical(a, b) {
    return a === b;
}
// Question 7
function isEqual(a, b) {
    return a == b;
}
// Question 8
function or(a, b) {
    return a || b;
}
//Question 9
function and(a, b) {
    return a && b;
}
//Question 10
function concat(a, b) {
    return String(a) + String(b);
}
