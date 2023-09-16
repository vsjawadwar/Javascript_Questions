// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function arraySum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(arraySum([10,20,30]));