// Write a JavaScript program to get the largest even number from an array of integers.
function largestEven(arr){
let max=0;
let index=0;
    for(let i=0;i<arr.length;i++){
        let temp=0;
        if(arr[i]%2==0){
            temp=arr[i];
           if(temp > max){
            max=temp;
           } 
        }
    }
    return `Maximum number in the array is ${max}`;
}
console.log(largestEven([1,2,3,4,5,6,7,8,22,10]));