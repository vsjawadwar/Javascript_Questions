// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

const sum=(arr)=>{
    return arr.reduce((accumulator,currentIndex)=>{return accumulator + currentIndex},0);
}

console.log(sum([2,4,6,8,10]));