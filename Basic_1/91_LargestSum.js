// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.
function largestSum(arr,k){
    let sum=0;
    arr.sort(function(a,b){
        return a-b;
    });
for(let i=arr.length-k;i<arr.length;i++){
    sum+=arr[i];
}
return sum;
}
console.log(largestSum([1,2,3,4,5],3));