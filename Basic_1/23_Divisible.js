// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function divisible(a){
    if(a%3===0 || a%7===0){
        return true;
    }else{
        return false;
    }
}
console.log(divisible(3));
console.log(divisible(14));
console.log(divisible(22));