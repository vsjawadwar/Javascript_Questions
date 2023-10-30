// Write a JavaScript program to compute the sum of all the digits that occur in a given string.
function integerSum(str){
let sum=0;
let arr=str.split("");
    for(let i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
            sum+=Number.parseInt(arr[i]); //string number is converted into a number
        }
    }
    return sum;
}
console.log(integerSum('Vishal123'));