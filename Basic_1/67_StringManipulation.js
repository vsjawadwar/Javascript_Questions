// Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
function stringCheck(str){
    if(str.charAt(0)=='P' && str.charAt(str.length-1)=='P'){
        return str.substring(1,str.length-1);
    }else{
        return "String does not starts and ends with P";
    }
}
console.log(stringCheck("PoojaP"));
console.log(stringCheck("Pooja"));