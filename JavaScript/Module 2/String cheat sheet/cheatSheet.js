
//LIST OD METHODS IN STRING CHEAT SHEET

//1)charAt()

var greet = "Hello";
var place = "World";
console.log( greet.charAt(3));//TO READ INDIVIDUAL CHARACTER AT A SPECIFIC INDEX IN A STRING


//2)concat()

console.log(greet.concat(place));//TO JOIN STRINGS
var a = "wo".concat("rl").concat("d");
console.log(a)

//3)indexof()

var a = "ho-ho-ho".indexOf("h");
console.log(a)//TO RETURN THE LOCATION OF FIRST POSITION THAT MATYCH A CHARACTER

//4)lastindexof()

var a = "ho-ho-ho".lastIndexOf("h");
console.log(a)//TO FIND OUT THE LAST MATCH

//5)split()

var a = "ho-ho-ho".split("-")
var b = "ho-ho-ho".split("h")
var c = "ho-ho-ho".split("o")
console.log(a,b,c)//CHOPS UP THE STRING INTO AN ARRAY OF SUB STRING

//6)toUpperCase()

console.log(greet.toUpperCase());

//7)toLowerCase()

console.log(greet.toLowerCase());

