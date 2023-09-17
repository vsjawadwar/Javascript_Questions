// Write a JavaScript program to find the types of a given angle.
// Types of angles:
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.
function angle(deg){
    if(deg >= 0 && deg <90){
        return `Acute Angle: Degree of angle is ${deg}`;
    }else if(deg == 90){
        return `Right Angle: Degree of angle is ${deg}`;
    }else if(deg >90 && deg<180){
        return `Obtuse Angle: Degree of angle is ${deg}`;
    }else if(deg == 180){
        return `Straight Angle: Degree of angle is ${deg}`;
    }else{
        return `Invalid Degree ${deg}`;
    }
}
console.log(angle(90));
console.log(angle(9));
console.log(angle(160));
console.log(angle(180));
console.log(angle(-90));

