// Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer. 
function sumOfCubes(num){
let sum=0;
let i=1;
    while(i<=num){
        // sum+=Math.pow(i,3);
        sum+=(i*i*i)
        i+=1;
    }
return sum;
}
console.log(sumOfCubes(4));