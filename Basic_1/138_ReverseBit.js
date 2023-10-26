// Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.
function reverseBit(num){
    let result=0;
    for(let i=0;i<16;i++){
        result=(result * 2) + (num % 2);
        num=Math.floor(num / 2);
    }
    return result;
}
console.log(reverseBit(12345));

