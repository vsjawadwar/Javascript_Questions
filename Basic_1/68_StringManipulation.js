// Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.
function stringManipulation(str,n){
    if(str.length<n){
        return `${str} is less than ${n}`;
    }else{
        return str.substring(0,n)+str.substring(str.length-n,str.length);
    }
}
console.log(stringManipulation("Vishal",7));
console.log(stringManipulation("Vishal",4));
