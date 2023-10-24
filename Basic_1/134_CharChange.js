// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 
function changeChar(str){
str.toLowerCase();
let result=[];
    for(let i=0;i<str.length;i++){
        let charOrder= str.charCodeAt(i)-'a'.charCodeAt(0);
        let changeChar=25-charOrder + 'a'.charCodeAt(0);
        result.push(String.fromCharCode(changeChar));
    }
    return result.join('');
}
console.log(changeChar('abcXyz'));