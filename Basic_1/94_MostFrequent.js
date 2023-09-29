// Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
function mostFrequent(arr){
let m=0;
let mf=0;
let item=null;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]==arr[j]){
                m++;
            }
            if(m>mf){
                mf=m;
                item=arr[i];
            }
        }
        m=0;
    }
    return item;
}
console.log(mostFrequent([1,2,2,2,3,4,4,5,5,5]));