// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.
function stringManipulation(str){
    return str.slice(-3)+ str.slice(0,-3);
}
console.log(stringManipulation('Vishal'));