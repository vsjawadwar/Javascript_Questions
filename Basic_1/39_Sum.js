// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
function sumCalculation(a,b){
    return ((a+b)>=50 && (a+b)<=80)?65:80;
}
console.log(sumCalculation(20,20));
console.log(sumCalculation(10,20));
console.log(sumCalculation(25,26));