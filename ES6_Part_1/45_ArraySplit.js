// Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

function divideArray(arr){
let arr1=[];
let arr2=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]==true){
        arr1.push(arr[i]);
    }else{
        arr2.push(arr[i]);
    }
}
console.log(arr1);
console.log(arr2);
}
divideArray([false,true,1,' ','']);