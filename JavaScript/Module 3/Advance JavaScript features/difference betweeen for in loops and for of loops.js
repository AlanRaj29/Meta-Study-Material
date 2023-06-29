const car = {
    engine : true,
    steering : true,
    speed : "slow"
}
const sportsCar = Object.create(car)
sportsCar.speed = "fast"
console.log("The sportscas object:" , sportsCar)

for(prop in sportsCar){
    console.log(prop)
    //console.log(prop,sportsCar[prop])
}

for(prop of Object.keys(sportsCar)){
    console.log(prop + ":" + sportsCar[prop])
}