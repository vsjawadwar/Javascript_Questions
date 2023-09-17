// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
function charReplacement(str){
let arr=str.split("");
for(let i=0;i<arr.length;i++){
    let n= arr[i].charCodeAt() - 'a'.charCodeAt();
    n=(n+1)%26;
    arr[i]=String.fromCharCode(n + 'a'.charCodeAt());
}
return arr.join();
}
console.log(charReplacement("Vishal"));