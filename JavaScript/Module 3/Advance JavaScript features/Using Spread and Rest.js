/**Join arrays, objects using the rest operator
Using the spread operator, it's easy to concatenate arrays:
 */

const fruits = ["apple", "pear", "plum"]
const berries = ["blueberry", "strawberry"]
const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries)



//It's also easy to join objects: 

const flying = {wings : 2}
const car = {wheels : 4}
const flyingCar = {...flying, ...car}
console.log(flyingCar)




/**Add new members to arrays without using the push() method
Here's how to use the spread operator to easily add one or more members to an existing array:
 */

let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"]
console.log(veggies)


/***Convert a string to an array using the spread operator
Given a string, it's easy to spread it out into separate array items:
 */

const greeting = "Hello"
const arrayOfChars = [...greeting]
console.log(arrayOfChars)


/***Copy either an object or an array into a separate one
Here's how to copy an object into a completely separate object, using the spread operator. 
*/

const car1 = {
    speed : 200,
    color : "red"
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

//You can copy an array into a completely separate array, also using the spread operator, like this:

const fruits1 = ["apples", "pears"]
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)