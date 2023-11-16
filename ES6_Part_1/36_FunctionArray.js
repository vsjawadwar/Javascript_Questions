// Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.

function sum(items){
return items.reduce((acc,currentIndex)=> acc + currentIndex,0);
}
console.log(sum([2,4,6]));