// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.
function maxumumSum(arr,k){
arr.sort(function(a,b){
    return a-b;
});
let sum=0;
for(let i=arr.length-k;i<arr.length;i++){
    sum+=arr[i];
}
return sum;
}
console.log(maxumumSum([1,2,3,14,5],2));
console.log(maxumumSum([2,3,5,1,6],3));
console.log(maxumumSum([9,3,5,1,7],2));

