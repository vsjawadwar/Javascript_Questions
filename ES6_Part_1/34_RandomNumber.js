// Write a JavaScript program to generate a random integer in the specified range.

const randomNumber=(min,max)=> Math.floor(Math.random()* (max - min)+1)+min;
console.log(randomNumber(2,5));