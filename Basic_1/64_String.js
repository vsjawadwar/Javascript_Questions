// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.  
function stringAlter(str1,str2){
    if(str1.length === str2.length){
        return str1 + str2 ; 
    }else {

    
    let m= (str1.length < str2.length)?str1.length:str2.length;
    return str1.substring(str1.length-m) + str2.substring(str2.length-m);
    }
}
console.log(stringAlter('Sai',"Ram"));
console.log(stringAlter('JaySh',"riRamRamRam"));
