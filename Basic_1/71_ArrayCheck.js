// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
function arrayCheck(arr){
    return (arr[0]===1 || arr[arr.length-1]===1)?true:false;
}
console.log(arrayCheck([1,2,3,4,5]));
console.log(arrayCheck([2,3,4,5,1]));
console.log(arrayCheck([2,3,4,5]));

