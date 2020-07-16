console.log("Method of String");
//substring()	Extracts the characters from a string, between two specified indices
console.log("subString() Method");
var S1="LetsUpgrade";
var ref=S1.substring(2,5);
console.log("Original string : "+S1);
console.log("Substring : "+ref);

console.log("replace() method");
console.log("Original string : "+S1);
S1.replace("e","E");
console.log("Replaced String : "+S1);

console.log("slice() method");
var S1="LetsUpgrade";
console.log("Original string : "+S1);
var S2=S1.slice(2,6);
console.log("Sliced String"+S2);
