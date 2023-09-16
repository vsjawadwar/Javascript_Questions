// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
function arrayRotate(arr){
    return [arr[1], arr[2], arr[0]];
}
console.log(arrayRotate([2,4,6]));