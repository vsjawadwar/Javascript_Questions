// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
function absoluteTripleDifference(a){
    return (a>=19)?(a-19)*3:(19-a);
}
console.log(absoluteTripleDifference(19));
console.log(absoluteTripleDifference(20));
console.log(absoluteTripleDifference(8));
console.log(absoluteTripleDifference(21));

