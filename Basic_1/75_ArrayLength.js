// Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
function newArray(arr,arr1){
    if(arr.length !== 3 && arr1.length !== 3){
        return "Enter the array with exact length of 3";
    }else{
        return ([arr[1],arr1[1]]);
    }
}
console.log(newArray([10,20,30],[10,20,30]));