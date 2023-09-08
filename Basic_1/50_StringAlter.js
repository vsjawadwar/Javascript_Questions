// Write a JavaScript program to capitalize the first letter of each word in a given string. 
function stringAlter(str){
    let s=str.split(" "); //String is converted in an array
    for(let i=0;i<s.length;i++){
        s[i]=s[i][0].toUpperCase()+s[i].substring(1); //Converting arrays each elements first cgaracter capital
    }
    return s.join(" "); //Array is converted into string
}
console.log(stringAlter("jay shree ram"));