// Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
function maximumNum(str){
let arr=str.split("");
arr.sort(function(a,b){
    return b-a;
});
arr.pop();
return arr.toString();
}
console.log(maximumNum("234"));
console.log(maximumNum("2345"));
