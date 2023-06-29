//oop


// var purshase1 = {
//     shoesPrice : 100,
//     stateTax : 1.2,
//     totalPrice : function(){
//         var calculation = purshase1.shoesPrice * purshase1.stateTax;
//         console.log("Total Price:",calculation)
//     }
// }
// console.log(purshase1.shoesPrice)
// console.log(purshase1.stateTax)
// purshase1.totalPrice()


// var purshase2 = {
//     shoesPrice : 500,
//     stateTax : 1.2,
//     totalPrice : function(){
//         var calculation = purshase2.shoesPrice * purshase2.stateTax;
//         console.log("Total Price:",calculation)
//     }
// }
// console.log(purshase2.shoesPrice)
// console.log(purshase2.stateTax)
// purshase2.totalPrice()


var purshase1 = {
    shoesPrice : 100,
    stateTax : 1.2,
    totalPrice : function(){
        var calculation = this.shoesPrice * this.stateTax;
        console.log("Total Price:",calculation)
    }
}
console.log(purshase1.shoesPrice)
console.log(purshase1.stateTax)
purshase1.totalPrice()


var purshase2 = {
    shoesPrice : 500,
    stateTax : 1.2,
    totalPrice : function(){
        var calculation = this.shoesPrice * this.stateTax;
        console.log("Total Price:",calculation)
    }
}
console.log(purshase2.shoesPrice)
console.log(purshase2.stateTax)
purshase2.totalPrice()