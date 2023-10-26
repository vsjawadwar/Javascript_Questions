// Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.

// Note: A round number is informally considered to be an integer that ends with one or more zeros.

function roundNumberIndex(arr){
    for(let i=arr.length-1; i>=0;i--){
        if(arr[i]%10 === 0){
           return `Round number is ${arr[i]} and its index is ${i}`;
        }
    }   
    return `Sorry given array doesn't have any round number`;
}
console.log(roundNumberIndex([2,4,6,8,10,12,14]));