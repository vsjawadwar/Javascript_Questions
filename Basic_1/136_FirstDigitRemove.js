// Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character. 
// console.log("Vishal".indexOf('i'));
// console.log(Number.isInteger('s'));

function firstNumRemove(str){
    // for(let i=0;i<str.length;i++){
    //     if(!(str[i].isNaN())){
    //         return str.slice(i);
    //     }
    // }
    // return `${str} does not have any number`;
    return str.replace(/[0-9]/,'$')
}
console.log(firstNumRemove('Vis1234'));