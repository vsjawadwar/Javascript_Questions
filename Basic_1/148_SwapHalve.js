// Write a JavaScript program to swap two halves of a given array of integers of even length.  
function swapHalve(arr){
    if(arr.length%2==0){
        for(let i=0;i<arr.length/2;i++){
            let temp=arr[i];
            arr[i]=arr[i+arr.length/2];
            arr[i+arr.length/2]=temp;
        }
        return arr;
    }else{
        return `Array is not even length.`;
    }
}
console.log(swapHalve([1,2,3,4,5,6,7,8]));