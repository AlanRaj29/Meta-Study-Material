//1)push() method

var fruits = [];
fruits.push("Apple");
fruits.push("pear");
console.log(fruits);
fruits.pop();
console.log(fruits)



//2)Araary using function


function arrayBuilder(one ,two , three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder("Apple","Orange","Mongo")


//3)Insert of console we use return

function arrayBuilder(one,two,three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    
    return one ;

}
var simplearr =arrayBuilder("Apple","Orange","dongo");
console.log(simplearr);