// Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.  
function lessThan20(a,b,c){
    return (a>=20 &&(a<b || a<c)) || (b>=20 &&(b<a || b<c)) || (c>=20 &&(c<a && c<b));
}
console.log(lessThan20(23,45,10));
console.log(lessThan20(23,23,10));
console.log(lessThan20(21,66,75));