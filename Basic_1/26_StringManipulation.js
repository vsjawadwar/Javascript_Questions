// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 
function positionChange(str){
    if(str === null || str === undefined){
        return "Not valid string"
    }
    else if(str.length <= 1){
        return str;
    }
    else{
        let temp=str.substring(1,str.length-1);
        let front=str.charAt(str.length-1);
        let back=str.charAt(0);
        return front + temp + back;
    }
}
console.log(positionChange('Vishal'));
console.log(positionChange('Sai'));
console.log(positionChange('Sa'));
console.log(positionChange('a'));
console.log(positionChange(null));

