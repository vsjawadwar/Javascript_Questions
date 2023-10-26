// Write a JavaScript program to check whether all the digits in a given number are the same or not.
function sameDigitNumber(num){
    let arr=num.toString().split('')
    for(let i=0;i<arr.length;i++){
        if(arr[0]!= arr[i]){
            return false;
        }
    }
    return true;
}
console.log(sameDigitNumber(123));
console.log(sameDigitNumber(222));