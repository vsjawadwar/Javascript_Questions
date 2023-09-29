// Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 
function computeSum(arr){
let sum=0;
let difference=0;
for(let i=1;i<arr.length;i++){
    difference=Math.abs(arr[i]-arr[i-1]);
    sum+=difference;
}
return sum;
}
console.log(computeSum([1,2,3,4,5]));