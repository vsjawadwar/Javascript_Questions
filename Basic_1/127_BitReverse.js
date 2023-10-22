// Write a JavaScript program to reverse the order of bits in a integer.
/*
Step1: Convert the number into binary
Step2: Convert the number into 8 bit unsigned
Step3: Reverse the number 
Step4: Convert it into decimal
*/
function bitReverse(num){
    let binary=num.toString(2).split("");
    let str_length=binary.length;
        for(let i=0;i<8-str_length;i++){
            binary.unshift(0);
        }
        return parseInt(binary.reverse().join(""),2);

}
console.log(bitReverse(14));