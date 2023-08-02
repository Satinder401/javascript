//currency exchange calculator with functional programming:-
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.3;

function convertCurrency(amount, rate){
  return amount * rate;
}
currencyTwo = convertCurrency(currencyOne,  exchangeRate);
console.log(currencyTwo);
