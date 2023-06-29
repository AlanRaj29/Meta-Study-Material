// var shop = 100;
// var stateTax = 1.1;
// function totalPrice(price,tax){
//     return price*tax;
// }
// var toPay = totalPrice(shop,stateTax);
// console.log(toPay) 

var currencyOne = 100;
// var currencyTwo = 0;
var exchangeRate = 1.2;
function convertCurrency(amount,rate){
    return amount*rate;
}
var currencyTwo = convertCurrency(currencyOne,exchangeRate);
console.log(currencyTwo)