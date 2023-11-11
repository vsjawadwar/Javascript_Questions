// Write a JavaScript program to filter out non-unique values in an array.
let nonUniqueValue=(arr)=>{return arr.filter((i)=>arr.indexOf(i)===arr.lastIndexOf(i));}
console.log(nonUniqueValue([1,2,2,3,4,4,5]));
