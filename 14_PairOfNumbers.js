// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function compare(a,b){
    if(a === 50 || b===50){
        return true;
    }
    else if(a+b===50){
        return true;
    }
    return false;
}
console.log(compare(50,2));
console.log(compare(0,2));
console.log(compare(40,10));
console.log(compare(2,50));