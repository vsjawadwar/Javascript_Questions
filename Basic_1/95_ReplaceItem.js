// Write a JavaScript program to replace all numbers with a specified number in an array of integers.
function replaceItem(arr,oldValue,newValue){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==oldValue){
            arr[i]=newValue;
        }
    }
    return arr;
}
console.log(replaceItem([1,2,3,2,4,2,5],2,'Vishal'));