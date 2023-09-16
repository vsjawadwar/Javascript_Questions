// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3. 
function arrayCheck(arr){
    return (arr.length !== 2)? false : (arr[0]==1 ||arr[0]==3 ||arr[1]==1|| arr[1]==3)?true:false;
}
console.log(arrayCheck([10,20]));
console.log(arrayCheck([1,3]));
console.log(arrayCheck([3,1]));
console.log(arrayCheck([1,2,4]));