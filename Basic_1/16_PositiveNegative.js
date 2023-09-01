// Write a JavaScript program to check two given integers whether one is positive and another one is negative.
function positiveNegative(a,b){
    if((a<0 && b>0)||(a>0 && b<0))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(positiveNegative(-5,5));
console.log(positiveNegative(5,5));
console.log(positiveNegative(-4,-3));
console.log(positiveNegative(-4,10));
console.log(positiveNegative(-10,10));
