// Write a JavaScript program to create a new string without the first and last characters of a given string.
function stringManipulation(str){
    return str.substring(1,str.length-1);
}
console.log(stringManipulation('Vishal'));