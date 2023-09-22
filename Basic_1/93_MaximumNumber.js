// Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
function maxDifference(arr){
let difference=0;
let result=0;
for(let i=0;i<arr.length;i++){
    for(let k=0;k!=i && k<arr.length;k++){
        difference=Math.abs(arr[i]-arr[k]);
        result=Math.max(result,difference);
    }
}
return result;
}
console.log(maxDifference([1,2,3,4,5,7,8]));