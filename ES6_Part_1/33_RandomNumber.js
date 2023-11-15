// Write a JavaScript program to generate a random number in the specified range.

const randomNumber=(range)=>{
    return Math.round(Math.random()*range);
}
console.log(randomNumber(5));