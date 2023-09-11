// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three. 
function stringAlter(str){
    if(str.length <3)
    {
        return "String length must be greater than or equal to three";
    }
    else{
        let middlecChar = (str.length + 1)/2;
        return str.slice(middlecChar -2 , middlecChar + 1);
    }
}
console.log(stringAlter("Vishala"));