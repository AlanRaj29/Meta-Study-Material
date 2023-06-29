//HOW TO DESIGN OBJECTS AS COMBINATIONS OF DATA AND FUNCTIONALITY.
//AN OBJECT CONSISTS OF KEY-VALUE PAIRS, KNOWN AS PROPERTIES.
//ADD NEW KEY-VALUE PAIRS TO EXISTING OBJECTS USING THE DOT NOTATION AND THE ASSIGNMENT OPERATOR. 

//1)

var car = {}
car.color = "red";
console.log(car)

//Anonymous function(no function name)
car.turnkey = function(){//If the function is a property of an object, it is then referred to as a method. 
    //This is a function that can be accessed only through the JavaScript object that it is a member of.JavaScript.
    console.log("engine run")
}
console.log(car)

//2)constructor function:A constructor function is a function that is used to create objects of the same type

var car = {}
car.mileage = 18;
car.color = "yellow";
console.log(car);

car.turnkey = function(){
    console.log("engine running");
}
car.lightson = function(){
    console.log("the light are on");
}
console.log(car);
car.lightson();
car.turnkey();