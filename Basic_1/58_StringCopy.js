// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
function stringCopy(str,n){
    return (str.length < 3)? false : str.slice(str.length - 3,str.length).repeat(n);
}
console.log(stringCopy('abcd',2));
console.log(stringCopy('ab',2));