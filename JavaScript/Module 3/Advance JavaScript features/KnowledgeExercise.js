// This line declares a constant variable named meal and assigns it an array with three elements: "soup", "steak", and "ice cream"
const meal = ["soup", "steak", "ice cream"]
// This line declares a variable named starter and assigns it the value of the first element of the meal array using array destructuring
// Array destructuring is a syntax that allows you to unpack values from arrays into distinct variables
// The square brackets on the left side of the assignment indicate that you are destructuring an array
// The variable name inside the brackets corresponds to the element at the same index in the array on the right side
let [starter] = meal;
// This line prints the value of starter to the console, which is "soup"
console.log(starter);



