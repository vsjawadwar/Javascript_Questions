// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function numCheck(a,b){
    if(a===8 || b === 8){
        return "There is 8 in either a or b";
    }
    else if((a + b) === 8){
        return "Sum is 8";
    }else if(Math.abs(a-b)===8){
        return "Substraction is 8";
    }else{
        return "Every condition fails";
    }
}
console.log(numCheck(8,10));
console.log(numCheck(10,8));
console.log(numCheck(4,4));
console.log(numCheck(24,16));
console.log(numCheck(16,16));



