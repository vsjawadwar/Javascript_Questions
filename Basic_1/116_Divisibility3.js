/*
Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. 
For a string "2*0", the output should be : ["210", "240", "270"] 
*/
function divisibilityCheck(str){
let arr=[];
let sum=0;
let position=-1;
let num=str.split("");
// console.log(num);
    for(let i=0;i<num.length;i++){
        if(num[i]=='#'){
            position=i;
        }
    }
    for(let i=0;i<num.length;i++){
        if(i !== position){
            sum+=num[i];
        }
    }
    for(let i=0;i<10;i++){
        if((sum + i)%3 == 0){
            num[position]=i;
            arr.push(num.join(''));
        }
    }
    return arr;
}
console.log(divisibilityCheck('2#0'));