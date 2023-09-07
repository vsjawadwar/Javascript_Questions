// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function numCheck(a,b,c){
    if(a<0 || b<0 || c<0){
        return "Sorry we need non negative numbers";
    }
    else if((a%10===b%10)&&(a%10===c%10)){
        return "All three has same rightmost digit";
    }else if((a%10===b%10)||(a%10===c%10)||(b%10===c%10)){
        return "Two digits have same rightmost digit";
    }else{
        return "All numbers are different";
    }
}
console.log(numCheck(12,12,12));
console.log(numCheck(12,12,14));
console.log(numCheck(12,13,14));
console.log(numCheck(10,17,27));
