// Write a JavaScript program to find the kth greatest element in a given array of integers.
// let a= [4,2,1,7,6];
// a.sort(function(a,b){return b-a});
// console.log(a);
//Just for the sake of the understandin how javascript sort function works and how to do sorting with numbers in descending order.

function largestNumber(arr,k){
    arr.sort(function(a,b){
        return a-b;
    });
    return arr[k-1];
}
console.log(largestNumber([5,4,3,2,1],4));

//Above problem has solved by sorting an array and find the largest kth number