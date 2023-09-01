// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function substringAdd(str,position){
    let s1=str.substring(0,position);
    let s2=str.substring(position+1,str.length);
    return s1+s2;
}
console.log(substringAdd("Vishul",5));
console.log(substringAdd("aVishal",0));
console.log(substringAdd("Vishala",6));
