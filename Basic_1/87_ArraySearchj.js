// Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
function arraySearch(arr1,arr2){
const isSame=(arr1.length == arr2.length) && arr1.every((currentElement)=>{
    if(arr2.indexOf(currentElement) > -1){
        return (currentElement = arr2[arr2.indexOf(currentElement)]);
    }
});
return isSame;
}
console.log(arraySearch([1,2,3,4,5,6],[5,4,3,1,2]));