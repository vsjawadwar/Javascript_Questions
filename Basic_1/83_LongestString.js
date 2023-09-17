// Write a JavaScript program to find the longest string from a given array of strings.
function largestString(arr){
let max=arr[0].length;
arr.map(e => max=Math.max(max,e.length));
let result=arr.filter(e => e.length == max);
return result;
}
console.log(largestString(['a','b','c','abc','ba']));