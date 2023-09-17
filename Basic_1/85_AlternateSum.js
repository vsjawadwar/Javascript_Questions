// Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.
function alternateSum(arr){
let result = [0,0];
    for(let i = 0 ; i < arr.length; i++){
        if(i%2){
            result[1] += arr[i];
        }else{
            result[0] += arr[i];
        }
    }
    return result;
}
console.log(alternateSum([1,2,3,4,5,6,7,8]));