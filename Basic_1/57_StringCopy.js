// Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.
function stringCopy(str,n){
    return (str.length < 0)?false:str.repeat(n);
}
console.log(stringCopy('Jay Shree Ram',7));