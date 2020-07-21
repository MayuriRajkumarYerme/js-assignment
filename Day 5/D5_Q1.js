let arr=[];

while(1){
    var n=Number(prompt(`Enter a positive number, enter "0" to end`));
    if(n<0){
        continue;
    }
    if(n==0){
        break;
    }
    arr.unshift(n);
    
}
let odd = arr.filter(el=>el%2!=0);

let oddCube = arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(arr);
console.log(odd);
console.log(oddCube);
