console.log("Methods of Array");
// copyWithin() : Copies array elements within the array, to and from specified positions 
console.log("copyWith() method");
var A1=[29,34,62,25];
console.log(A1);
A1.copyWithin(2,1);
console.log("After Copy A1[2] in A1[1]");
console.log(A1);

//fill() : Fill the elements in an array with a static value
console.log("fill() method");

A1.fill(0);
console.log(A1);

//forEach()	: Calls a function for each array element.
console.log("forEach() method");
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
    console.log(item+" : "+index);
}
