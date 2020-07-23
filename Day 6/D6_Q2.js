var y=prompt("Enter number to get Multiplication table ");
var i;
document.write(`<h3>Input is ${y}<br>Output is:</h3>`)
for(i=1;i<=10;i++){
    document.write(`<h3>${y} x ${i} = ${y*i}<br></h3>`);
}