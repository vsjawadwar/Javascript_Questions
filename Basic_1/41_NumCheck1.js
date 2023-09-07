// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
function numCheck(a,b,c){
     return ((a===b)&&(b==c)&&(a===c))? 30 : ((a===b)||b===c||a===c)?40:20;
}
console.log(numCheck(10,10,20));
console.log(numCheck(10,10,10));
console.log(numCheck(10,20,30));
console.log(numCheck(10,20,10));