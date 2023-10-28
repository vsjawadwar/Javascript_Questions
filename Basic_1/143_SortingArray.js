// Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.  
// Note: Do not change the order if the lengths of two string are same.
function sortingArrayBySrtingsLength(arr){
console.log("Array Before Sort by its string lengths");
    console.log(arr);
console.log("Array after Sort by it string lengths");
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i].length>arr[j].length){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
return arr;
}
console.log(sortingArrayBySrtingsLength(['abc','b','b','cbvf','ab']));