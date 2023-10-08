// Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
function equality(a,b,c){
if(a!= b && a!== c && b!==c){
    return `All three numbers are different`;
}
if(a==b){return c};
if(a==c){return b};
if(b==c){return a};
}
console.log(equality(1,2,3));
console.log(equality(2,2,3));
console.log(equality(1,3,3));
console.log(equality(3,2,3));


