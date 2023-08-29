// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function rangeCheck(a){
return (Math.abs(100-a)<=20) || (Math.abs(400-a)<=20);
}
console.log(rangeCheck(30));
console.log(rangeCheck(100));
console.log(rangeCheck(130));
console.log(rangeCheck(530));

