// Write a JavaScript program to check whether a given number exists in the range 40..10000.  
// For example 40 presents in 40 and 4000
function numberRange(a){
return (a>=40 && a<=4000)?"Within a range":"Not in range";
}
console.log(numberRange(41));
console.log(numberRange(4001));
console.log(numberRange(-1));