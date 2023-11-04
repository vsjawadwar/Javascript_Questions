// Write a JavaScript program to extract values at specified indexes from a specified array.
function arrayElementFind(arr1,arr2){
    let newArr=[];
    arr2.forEach((item)=>{
        if(arr1.includes(item)){
            newArr.push(item);
        }
    });
    return newArr;
}
console.log(arrayElementFind([2,4,6,8],[6,8]));