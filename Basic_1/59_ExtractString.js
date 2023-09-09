// Write a JavaScript program to extract the first half of a even string.
function extractString(str){
    return (str.length % 2 === 0)? str.slice(0,str.length/2):"String length is not even";
}
console.log(extractString('Vishal'));
console.log(extractString('Visha'));
