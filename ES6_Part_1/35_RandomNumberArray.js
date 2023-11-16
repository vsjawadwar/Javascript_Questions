// Write a JavaScript program to get an array of given n random integers in the specified range.

const newRandomNumbersArray=(size,range)=>{
    let arr=[];
    for(let i=0;i<size;i++){
        arr[i]=Math.floor(Math.random()*range);
    }
    return arr;
}
console.log(newRandomNumbersArray(5,5));
console.log(newRandomNumbersArray(6,6));
