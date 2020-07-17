var mr= prompt("Enter your marks");
console.log("Using control statement");
var gr;
if(mr<=100 || mr>=90){
    gr='A+';
}
if(mr<90 || mr>=80){
    gr='A';
}
if(mr<80 || mr>=70){
    gr='B+';
}
if(mr<70 || mr>=60){
    gr='B';
}
if(mr<60 || mr>=50){
    gr='C+';
}
if(mr<50 || mr>=40){
    gr='C';
}
if(mr<40 ){
    gr='D';
}


console.log(`Marks are ${mr} and Grade is ${gr}`);