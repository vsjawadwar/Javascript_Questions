// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
function numCheck(a,b,c){
    if(c>b && b>a){
        return `${a}, ${b}, ${c} are in increasing mode Stict Mode`;
    }
    else if(c>b){
        return `Soft Mode`;
    }
    else{
        return "Undefined";
    }
}
console.log(numCheck(1,2,3));
console.log(numCheck(10,2,3));
console.log(numCheck(3,2,1));