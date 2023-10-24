// Write a JavaScript program to find the number of even digits in a given integer. 
function evenIntegers(num){
let numArr=num.toString().split("");
//given number is converted into string then converted into an array.
let sum=0;
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]%2==0){
            sum+=1;
        }
    }
    return `${num} has ${sum} even integers`;
}
console.log(evenIntegers(567));