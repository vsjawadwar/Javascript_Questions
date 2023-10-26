// Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15. 
function numCheck(num){
return (num >= 15)? num : `${num} is less than 15`
}
console.log(numCheck(15));
console.log(numCheck(16));
console.log(numCheck(14));
