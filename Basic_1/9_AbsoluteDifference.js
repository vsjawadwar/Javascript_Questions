// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
function differentiator(a){
return (a>=13)?a-13:(13-a)*2;
}
console.log(differentiator(13));
console.log(differentiator(14));
console.log(differentiator(7));