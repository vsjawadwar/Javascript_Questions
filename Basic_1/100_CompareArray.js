// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers. 
function arrayElements(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i]) == -1){
            return false;
        }
    }
    return true;
}
console.log(arrayElements([1,3,2],[2,3,1]));
console.log(arrayElements([1,3,2,9],[2,3,1,3,4]));
