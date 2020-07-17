var mr;
mr= prompt("Enter your marks");
console.log("Using switch case");
var m=parseInt(mr/10);


switch (m) {
    case 10: 
    case 9:
        grade='A+';    
        break;

    case 8:
        grade='A';
        break;

    case 7:
        grade='B+';
        break;

    case 6:
        grade="B"
        break;

    case 5:
        grade="C+"
        break
    case 4:
        grade="C";
        break;

    case 3:
        grade="D";
        break;

    default:
        break;
}
console.log(`Your Marks are ${mr} and your Grade is ${grade}`);

