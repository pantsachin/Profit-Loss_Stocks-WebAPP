var unitCostPrice = document.querySelector("#stockPrice");

var quantityOfStocks = document.querySelector("#quantityOfStocks");

var presentCostPrice = document.querySelector("#currentPrice");

var btnCalculate = document.querySelector("#buttonCalculate");

var absoluteVal = document.querySelector("#profitOrLossAbs");
var percentageVal = document.querySelector("#profitLossPercentage");

function calculator() {
  var a = unitCostPrice.value;
  var b = quantityOfStocks.value;
  var c = presentCostPrice.value;
  console.log(a);

  var profitLossAbsolute = (c - a) * b;

  var profitLossPercentage = ((c - a) / a) * 100;

  if (profitLossAbsolute > 0) {
    absoluteVal.innerText = "Your profit is: " + profitLossAbsolute;
  } else {
    absoluteVal.innerText = "Your loss is: " + profitLossAbsolute;
  }

  if (profitLossPercentage > 0) {
    percentageVal.innerText =
      "Your profit percentage is: " + profitLossPercentage + "%";
  } else {
    percentageVal.innerText =
      "Your loss percentage is: " + profitLossPercentage + "%";
  }
}

btnCalculate.addEventListener("click", calculator);
