// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  
function numCheck(a,b){
    return (a===15 || b===15)? true : (a + b === 15 || Math.abs(a-b) === 15)? true:false;
}
console.log(numCheck(15,20));
console.log(numCheck(20,15));
console.log(numCheck(7,8));
console.log(numCheck(45,330));