/*
Write a JavaScript program to check whether a given fraction is proper or not. 
Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise. */
function properFraction(num1,num2){
    return ((num1>0 && num2 > 0) && (num1 < num2)) ? "Proper Fraction" : "Improper Fraction";
}
console.log(properFraction(10,2));
console.log(properFraction(1,2));
console.log(properFraction(-1,2));
console.log(properFraction(1,12));


