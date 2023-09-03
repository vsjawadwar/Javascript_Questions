// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function stringManipulation(str){
if (str.length <=1){
    return str;
}
else{
    return str.charAt(0)+str+str.charAt(0);
}
}
console.log(stringManipulation('a'));
console.log(stringManipulation('Vishal'));
console.log(stringManipulation('Sai'));