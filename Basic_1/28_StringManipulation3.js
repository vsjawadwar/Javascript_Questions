// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function stringManupulation(str){
    if(str.length < 3){
        return "Invalid String";
    }
    else{
        return str.substring(str.length-3,str.length) + str + str.substring(str.length-3,str.length); 
    }
}
console.log(stringManupulation('Vishal'));
console.log(stringManupulation('Vishu'));
console.log(stringManupulation('Sai'));
console.log(stringManupulation('AB'));


