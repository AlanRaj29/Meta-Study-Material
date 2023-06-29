// build an array and then call the items with a basic function. Using the variable keyword let

let top3 = [
    "The CoCitylosseum ",
    "Trevi Fountain",
    "The Vatican "
];

//Now I write a function that lists these three attractions. To keep it simple, I just log it into the console

function showItinerary(place1, place2, place3){
    console.log("visit :" + place1)
    console.log("The visit :" + place2)
    console.log("finish with a visit to :" + place3)
}
showItinerary()
showItinerary(top3[0],top3[1],top3[2])
showItinerary(...top3)