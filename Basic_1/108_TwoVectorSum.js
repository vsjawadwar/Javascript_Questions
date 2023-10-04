/*Write a JavaScript program to create the dot products of two given 3D vectors.

Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.*/

function sumVector(arr1,arr2){
    let sum=0;
    for(let i=0;i<3;i++){
        sum += arr1[i] * arr2[i];
    }
    return sum;
}
console.log(sumVector([1,2,3],[1,2,3]));