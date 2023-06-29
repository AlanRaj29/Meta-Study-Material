/***THREE SPECIFIC BUILT- IN METHODS IN ARRAYS ARE
 *  1)forEach 2)filter 3)map
 */

//1)forEach() method:
//Arrays in JavaScript come with a handy method that allows you to loop over each of their members.

const fruits = ["Kiwi", "mango", "apple"];

function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

/* the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:*/

//Anonymous function - (no function name)

const veggies = ["onion", "garlic", "potato"]

veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`)
});

//Arrow function - (no func and no func name)

var veggie = ["onion", "garlic", "potato"]

veggie.forEach( (veggie,index) => {
  console.log(`${index}. ${veggie}`)
});

//2)filter()

/**Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned. */
/**The forEach() will not work on the cоde because.- The return value of the function Is ignored by the forEach(). 
 * - the forEach() is doesn't expect the callback function to return anything.-> It just Execute the function for each element in the array and don't Return. So the value is: undefined.
*/

const nums = [0, 10 ,20 , 30 , 40 , 50];
var a = nums.filter( (num) => {
  return num > 20
})
console.log(a)

//3)map()

/**Finally, there's a very useful map method. 

This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.  
*/

var a = [0, 10, 20, 30, 40, 50].map( (num) => {
  return num/10;
})
console.log(a)
