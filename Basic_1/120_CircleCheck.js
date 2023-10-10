/*
Write a JavaScript program to check if a point lies strictly inside the circle.
Input:
Center of the circle (x, y)
Radius of circle: r
Point inside a circle (a, b)
*/
function pointCheckInCircle(a,b,x,y,r){
let distantPoint=(a-x)*(a-x)+(b-y)*(b-y);
r*=r;
return distantPoint < r ? true : false;
}
console.log(pointCheckInCircle(0,0,2,4,6));
console.log(pointCheckInCircle(0,0,6,8,6));
