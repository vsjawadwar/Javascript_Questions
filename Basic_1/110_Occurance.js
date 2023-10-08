// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
function occuranceCalculate(arr,num){
let counter=0;
let index=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            index=i;
        }
    }
    if(index === -1){
        return `Array does not have ${num}`;
    }else{
        for(let i=0;i<index;i++){
            if(arr[i]%2 == 0){
                counter+=1;
            }
        }
    return `Given array has ${counter} occurences of ${num}`;
    }
}
console.log(occuranceCalculate([1,2,3,4,5,6,7,8],7));
console.log(occuranceCalculate([1,2,3,4,5,6,7,8],100));
console.log(occuranceCalculate([1,2,3,4,5,6,7,8],3));

