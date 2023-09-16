// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3. 
function checkArray(arr){
    return (arr.length !==2)?false:(arr[0]===1||arr[0]===3||arr[1]===1||arr[1]===3)?false:true;
}
console.log(checkArray([1,2,3]));
console.log(checkArray([1,2]));
console.log(checkArray([2,5]));
console.log(checkArray([2,3]));