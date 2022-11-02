const output = document.querySelector("#output-box");
const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const curPrice = document.querySelector("#current-price");

const showBtn = document.querySelector("#show-btn");

showBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(curPrice.value);

  calcProfitAndLoss(ip, qty, curr);
}

function calcProfitAndLoss(intial, quantity, current) {
  if (intial > current) {
    var loss = (intial - current) * quantity;
    var lossPercent = (loss / intial) * 100;

    output.innerText = `Hey the loss is ${loss} and the percent is ${lossPercent}% ☹️`;
  } else if (current > intial) {
    var profit = (current - intial) * quantity;
    var profitPercent = (profit / intial) * 100;

    output.innerText = `Hey the profit is ${profit} and the percent is ${profitPercent}% 🥳🥳`;
  } else {
    output.innerText = `No Pain No gain, no gain no pain!! 💪💪`;
  }
}
