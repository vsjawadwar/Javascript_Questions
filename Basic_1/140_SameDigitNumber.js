// Write a JavaScript program to check whether all the digits in a given number are the same or not.
function sameDigitNumber(num){
/*
Method 1: 
    let arr=num.toString().split('')
    for(let i=0;i<arr.length;i++){
        if(arr[0]!= arr[i]){
            return false;
        }
    }
    return true;
Method 2:
*/

let digit=num % 10;
    while(num){
        if(num % 10 !== digit) return false;
        num=Math.floor(num / 10);
    }
    return true;
}
console.log(sameDigitNumber(123));
console.log(sameDigitNumber(222));