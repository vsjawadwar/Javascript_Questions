// Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.
function time(hours){
if(hours >=0 && hours <=12){
    return hours + " AM";
}else if(hours >=13 && hours <=24){
    return hours + " PM";
}else{
    return "Invalid Hours";
}
}
console.log(time(23));