// Write a JavaScript program to find the largest of three given integers.
function largestNumber(a,b,c){
    return (a>b && a>c)?a:(b>c)?b:c;
}
console.log(largestNumber(2,3,4));
console.log(largestNumber(4,3,2));
console.log(largestNumber(2,5,3));

