// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 
let i=j=0;
for(i =2;i<20;i++){
    for(j=2;j<i;j++){
        if(i % j == 0){
            break;
        }
    }
    if(i == j){
        console.log(i);
    }
}