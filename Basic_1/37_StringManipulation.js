// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  
function stringManipulation(str){
    if(str.length < 3){
        return str.toUpperCase();
    }
    else{
        return str.slice(0,3).toLowerCase() + str.substring(3,str.length);
    }
}
console.log(stringManipulation("VISHAL"));
console.log(stringManipulation("SAI"));
console.log(stringManipulation("hi"));

