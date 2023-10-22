// Write a JavaScript program to find the longest string in a given array.
function maxLengthString(arr){
let max=0;
let index=0;
for(let i=0;i<arr.length;i++){
    let temp=arr[i].length;
    if(temp > max){
        max=temp;
        index=i;
    }
}
return `Maximum length string is ${arr[index]} and its length is ${max}`;
}
console.log(maxLengthString(['v','vi','vish','vis','Vishal']));