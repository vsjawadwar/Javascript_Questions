// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  
function checkRange(a,b,c){
    if((a>=50 && a <=99) || (b>=50 && b<=99) || (c>=50 && c<=99)){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkRange(50,52,54));
console.log(checkRange(2,49,6));