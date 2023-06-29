// //1)First-class functions
/**
 * It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

pass to other functions

save in a variable

return from other functions
 * 
 */

// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())


// //2)Higher-order functions

// A higher-order function is a function that has either one or both of the following characteristics:

// It accepts other functions as arguments

// It returns functions when invoked



// function addTwoNums(getNumber1,getNumber2) {
//     console.log(getNumber1() + getNumber2())
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber, getNumber)
// addTwoNums(specificNum,specificNum)
// addTwoNums(specificNum,randomNum)

//3)Pure functions and side-effects

// A pure function returns the exact same result as long as it's given the same values.
// Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.


function addTwoNums(a,b){
    console.log(a + b)
}
addTwoNums(5,7)