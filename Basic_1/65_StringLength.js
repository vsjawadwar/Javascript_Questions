// Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
function stringLength(str){
    return (str.length < 6)?" String Length must be greater than 6": (str.substring(str.length - 6, str.length)=="script")? "String ends with script":"String doesn't ends with script";
}
console.log(stringLength('Javascript'));
console.log(stringLength('script'));
console.log(stringLength('Javalanguage'));