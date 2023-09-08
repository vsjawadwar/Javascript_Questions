// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
function numCheck(a,b){
    if((a%7==0 || a%11==0) && (b%7==0 || b%11==0)){
        return false;
    }else{
        return (a%7==0 || a%11==0)||(b%7==0 || b%11==0);
    }
}
console.log(numCheck(14,21));
console.log(numCheck(14,20));
console.log(numCheck(16,20));