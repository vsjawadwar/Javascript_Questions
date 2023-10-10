// Write a JavaScript program to check if a given integer has an increasing digit sequence. 
function increasingSequenceCheck(num){
let a=num.split('');
    for(let i=0;i<a.length-1;i++){
        if(a[i]>a[i+1]){
            return false;
        }
    }
    return true;
}
console.log(increasingSequenceCheck('1234'));
console.log(increasingSequenceCheck('12434'));
