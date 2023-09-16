// Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
function arrayCheck(arr){
let max=(arr[0] > arr[arr.length-1])?arr[0]:arr[arr.length-1];
    for(let i=0;i<arr.length;i++){
        arr[i]=max;
    }
    return arr;
}
console.log(arrayCheck([10,20,30,40,50]));