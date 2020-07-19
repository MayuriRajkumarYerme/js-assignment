var s=prompt("Enter Total sales made by you during the year");
var c;
if(s>=0 || s<=5000){
    c=(s*2)/100;
}
else if(s>5000 || s<=10000){
    c=(s*5)/100;
}
else if(s>10000 || s<=20000){
    c=(s*7)/100;
}
else if(s>20000){
    c=(s*10)/100;
}

console.log("Commission earned by you is "+c +".");