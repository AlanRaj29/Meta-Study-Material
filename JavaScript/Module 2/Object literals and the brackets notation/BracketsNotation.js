
var house2 = {}

house2["room"] = 4;
house2["color"] = "red";
house2["priceUSD"] = 12000;
console.log(house2)


//COMBINATION OF DOT AND BRACKETS NOTATION OR COMBINATION OF BOTH BY UPDATE PROPERTIES

var car = {}

car.color = "red";
car["color"] = "green";
car["speed"] = 300;
car.speed = 420;
console.log(car)
car["number of doors"] = 4;
console.log(car)
car["2018"] = 1901;
console.log(car)


//BRACKET NOTATION CAN EVALUATE BUT DOT NOTATION CANNOT

var key = ["speed","altitude","color"];
var drone = {
    speed : 100 ,
    altitude : 5500,
    color : "red",
}
for(i = 0 ; i<key.length; i++){
    console.log(drone[key[i]])
}
