// Write a JavaScript program to find the number of inversions of a given array of integers.

// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
function inversionCheck(arr){
let counter=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                counter++;
            }
        }
    }
    return counter;
}
console.log(inversionCheck([1,2,3,4,5]));
console.log(inversionCheck([5,4,3,2,1]));