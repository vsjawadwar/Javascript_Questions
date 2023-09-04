// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function rangeCheck(a,b){
    if((a>=40 && b<=60) || (a>=70 && b <=100)){
        return "Within Range";
    }
    else{
        return "Not in range";
    }
}
console.log(rangeCheck(40,60));
console.log(rangeCheck(70,102));
console.log(rangeCheck(71,75));
