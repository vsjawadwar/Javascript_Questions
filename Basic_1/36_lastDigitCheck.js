// Write a JavaScript program that checks whether the last digit of three positive integers is the same.  
function lastDigitCheck(a,b,c){
    if(a<0 || b<0 || c<0)
    {
        return false;
    }
    return a%10 == b%10 && b%10 == c%10 && a%10==c%10;
}
console.log(lastDigitCheck(10,20,30));
console.log(lastDigitCheck(22,12,2));
console.log(lastDigitCheck(0,10,20));
console.log(lastDigitCheck(-1,21,11));