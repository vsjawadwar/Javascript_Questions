// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function rangeCheck(a,b){
if((a>=40 && a<=60 && b>=40 && b<=60) || (a>=70 && a<=100 && b>=70 && b<=100)){
return true;
} 
else{
    return false;
}
}
console.log(rangeCheck(41,40));
console.log(rangeCheck(41,45));
console.log(rangeCheck(61,101));
console.log(rangeCheck(71,80));


