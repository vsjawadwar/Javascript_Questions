// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
function maxDiff(arr){
let max=0;
let temp=0;
//As we are substracting every next element in array the condition needs to be arr.length - 1 
    for(let i=0;i<arr.length-1;i++){
        temp=Math.abs(arr[i]-arr[i+1]);
        max=Math.max(max,temp);
    }
    return max;
}
console.log(maxDiff([1,2,3,8,9]));
console.log(maxDiff([1,2,3,18,9]));
console.log(maxDiff([13,2,3,8,9]));