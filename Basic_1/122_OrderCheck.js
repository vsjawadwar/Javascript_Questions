// Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence. 
/*
function sequenceCheck(arr){
    let seq=arr[0]<arr[1];
    console.log(seq);
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(seq== false){
            if(arr[i]>arr[j]){
                return "Array is not strictly increasing or decresing";
            }
        }else{
            if(arr[i]<arr[j]){
                return "Array is not strictly increasing or decreasing";
            }
        }
    
        }
    }
    return "Success";
}

console.log(sequenceCheck([1,2,3]));
console.log(sequenceCheck([3,2,1]));

*/
function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-3, -2, -1]))

