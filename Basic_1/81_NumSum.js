// Write a JavaScript program to add two digits to a given positive integer of length two.
function sumNum(num){
return num%10 + Math.floor(num/10);
}
console.log(sumNum(25));
console.log(sumNum(55));
