//how to use the object data structure to complete a specific task. This task is to convert an object to an array:

const result = [];
const drone = {
  speed: 500,
  color: "red",
};
const dronekeys = Object.keys(drone);
dronekeys.forEach((key) => {
  result.push(key, drone[key]);
});
console.log(result);

//1)Working with Maps in JavaScript

/**A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
 */

let bestBoxers = new Map();
bestBoxers.set(1 ,"The champion");
bestBoxers.set("Two", "The Runner-up");
bestBoxers.set(3, "The Third place");
console.log(bestBoxers)
//To get a specific value, you need to use the get() method. For example:  
bestBoxers.get(1)


/**2) The Set constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.
*/

var repetiveFruirs = ["apple", "pear", "apple", "pear", "plum", "apple"];
var uniqueFruits = new Set(repetiveFruirs);
console.log(uniqueFruits)





//Other data structures in JavaScript
/**Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

Some more advanced data structures are:

//1)Queues

//2)Linked lists (singly-linked and doubly-linked)

//3)Trees

//4)Graphs*/