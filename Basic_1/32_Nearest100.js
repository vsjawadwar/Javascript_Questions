function nearestHundred(a,b){
    if(a != b){
        let x=Math.abs(100-a);
        let y=Math.abs(100-b);
        if(x<y){
            return a;
        }
        else if(y<x){
            return b;
        }
        else{
            return 0;
        }
    }
}
console.log(nearestHundred(90,-91));
console.log(nearestHundred(10,11));
console.log(nearestHundred(20,60));