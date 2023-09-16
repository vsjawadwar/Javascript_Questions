// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
function arrayOperation(arr){
return (arr.length < 1)? false : ([arr[0],arr[arr.length - 1]]);
}
console.log(arrayOperation([10,20,30,40]));
console.log(arrayOperation([]));