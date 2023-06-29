// //1)To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable. For example:

// var car = {
//     speed : 100,
//     color : "red"
// }
// for(var prop of car){
//     console.log(prop)
// }

// //2)Contrary to objects, arrays are iterable. For example:  

// const colors = ["red", "orange", "yellow"]
// for(var color of colors){
//     console.log(color)
// }


//3)for....of loops

var clothingItem = {
    price : 50,
    color : "beige",
    material : "cotton",
    season : "autumn"
}
for(key of Object.keys(clothingItem)){
    console.log(key, ":" , clothingItem[key])
}