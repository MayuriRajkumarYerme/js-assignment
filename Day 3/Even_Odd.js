function check(num){
    if(num%2==0){
        console.log(`The number Entered is ${num} and Number is Even.`);
    }
    else
    {
        console.log(`The number Entered is ${num} and Number is Odd.`);
    }
}

var n=prompt("Enter a Number");
check(n);