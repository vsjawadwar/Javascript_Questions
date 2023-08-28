// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function tripleSum(a,b){
    return (a===b)?(a+b)*3:(a+b);
}
console.log(tripleSum(4,4));
console.log(tripleSum(4,5));
console.log(tripleSum(2,2));