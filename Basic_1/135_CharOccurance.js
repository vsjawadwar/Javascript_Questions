// Write a JavaScript program to remove all characters from a given string that appear more than once.
function occuranceCheck(str){
let arr=str.split("");
let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(str.indexOf(arr[i])===str.lastIndexOf(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr.join("");
}
console.log(occuranceCheck("AABCCD"));