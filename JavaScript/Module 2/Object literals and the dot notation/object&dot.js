

//CREATING AN OBJECT WITH PROPERTIES KEY AND THIER PROPERTIES VALUES

//1)

var table = {
    leg:3,
    color:"brown",
    priceUSD:100,
}
console.log(table);
console.log(table.color);

//ADD OPERATORS USING DOT NOTATION
table.design="unique";
console.log(table)

//CHANGE AND UPDATE PROPERTIES
table.design="Medium";
console.log(table)



//ALTERNATIVE WAY OF BUILDING OBJECTS

//2)

var house = {}

house.rooms = 4;
house.color = "pink";
house.priceUSD = 125;

console.log(house)

//BY USING NOT NOTATION WE CAN ADD ANOTHER key PROPERTY USING THE SAME VALUE NAME


var house1 = {}

house1.rooms =4;
house1.color = "pink";
house1.priceUSD = 525;
console.log(house1)




