/*
Write a JavaScript program to find the smallest round number not less than a given value.

Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600. */

function nearest_round_number(num) {
    while (num % 10) {
        num++;
    }
    return num;
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));
