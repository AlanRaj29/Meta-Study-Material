// //1)Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".


// const bicycle = {
//     bell: function(){
//         return "Ring, ring! Watch out, please!"
//     }
// }
// const door = {
//     bell: function(){
//         return "Ring, ring! Come here, please!"
//     }
// }
// bicycle.bell();
// door.bell();
// function ringTheBell(thing){
//     console.log(thing.bell())
// }
// ringTheBell(bicycle);
// ringTheBell(door);


// //2)concat() method

// "abc".concat("def")
// ["abc"].concat(["abc"])//using array([] list means array)
// ["abc"]+["abc"]

//3)polymorphism using class

class Bird{
    useWings(){
        console.log("Flying")
    }
}
class Eagle extends Bird{
    useWings(){
        super.useWings()
        console.log("Barely flapping")
    }
}
class Penguin extends Bird{
    useWings(){
        console.log("Diving1")
    }
}
var baldEagle = new Eagle()
var KingPenguin = new Penguin();
baldEagle.useWings();
KingPenguin.useWings();