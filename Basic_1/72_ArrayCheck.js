// Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length.
function arrayCheck(arr){
return (arr[0]===arr[arr.length-1])?true:false;
}
console.log(arrayCheck([10,20,30,4,10]));
console.log(arrayCheck([1,2,4,5]));