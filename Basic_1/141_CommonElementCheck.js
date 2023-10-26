// Write a JavaScript program to find the number of elements in both arrays.
function commonElementCheck(arr1,arr2){
let counter=0;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]===arr2[i]){
            counter+=1;
        }
    }
    return counter;
}
console.log(commonElementCheck([2,4,6,8],[2,4,6,8]));
console.log(commonElementCheck([2,4,6,8],[2,4,6,10]));
