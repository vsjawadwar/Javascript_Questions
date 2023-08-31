// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
function checkNumbers(a,b){
    if((a>=50 && b<=99)&&(b>=50 && b<=99)){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkNumbers(50,50));
console.log(checkNumbers(10,50));
console.log(checkNumbers(60,500));
console.log(checkNumbers(51,70));
