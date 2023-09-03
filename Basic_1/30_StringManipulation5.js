// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
function checkJava(str){
    if(str.substring(10,4)==="Script"){
        return str.substring(0,4) +str.substring(10,str.length);
    }
    else{
        return str;
    }
}
console.log(checkJava('Java'));
console.log(checkJava('JavaScript'));