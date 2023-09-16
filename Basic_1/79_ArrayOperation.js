// Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  
function itemCheck(arr){
if(arr.length >=0 && arr.length <=2){
    let a=0;
    let b=0;
    for(let i= 0; i<arr.length;i++){
        if(arr[i]==30){a++;}
        if(arr[i]==40){b++}
    }
    if(a==2 || b==2){return true;}else return false;
}else{
    return false;
}
}
console.log(itemCheck([1,2,3,4]));
console.log(itemCheck([30,40,30]));
console.log(itemCheck([30,30]));