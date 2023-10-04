// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
function divideByInteger(num,d){
    if(num === 1){
        return num;
    }else{
        while(num %d===0){
            num /= d;
        }
        return num;
    }
}
console.log(divideByInteger(12,6));
console.log(divideByInteger(13,13));

