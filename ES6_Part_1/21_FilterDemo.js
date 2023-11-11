// Write a JavaScript program to get every nth element in a given array.
let arrayFilter=(arr,i)=>{
    return arr.filter((item,index)=> index % i == i-1);
};
console.log(arrayFilter([1,2,3,4,5],2));
console.log(arrayFilter([1,2,3,4,5],3));


