// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
const prompt=require('prompt-sync')();
const randomNumber=Math.ceil(Math.random()*10);
// console.log(randomNumber);
var guessNumber=null;
do
{
guessNumber=prompt("Guess the number... ");
if(randomNumber === guessNumber)
{
    console.log("Correct Guess");
}
}while(guessNumber != randomNumber);