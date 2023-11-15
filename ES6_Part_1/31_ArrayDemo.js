// Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.

const newArray=(arr)=>(arr.length > 1 ? arr.slice(1,arr.length):arr);
console.log(newArray([2,3,4,5,6,7]));
console.log(newArray([7]));
