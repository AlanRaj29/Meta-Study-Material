  const top7 = [
    "The CoCitylosseum ",
    "Trevi Fountain",
    "The Vatican ",
    "Trevi Fountain",
    "The Pantheon",
    "Piazza Venezia",
    "The Palatien Hill"
]

const [] = top7
const [first, second, third, ...secondVisit] = top7
console.log(secondVisit)
console.log(top7[3])
console.log(first) 


//using function

function addTaxToPrice(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrice(1.1, 46,89, 35, 79)
console.log(shoppingCart)