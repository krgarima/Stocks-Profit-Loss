const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const calculateBtn = document.querySelector('#calculate-button');
const outputMessage1 = document.querySelector('#output-message1');
const outputMessage2 = document.querySelector('#output-message2');

calculateBtn.addEventListener("click", valueSubmit);

function ProfitLossCalculator(initial, current, quantity) {

    //console.log(initial + " " + current + " " + quantity);
    if (initial < current) {
        const profit = initial - current;
        const percentageProfit = (profit / initial) * 100;
    } else if (initial > current) {
        const loss = initial - current;
        const percentageLoss = (loss / initial) * 100;
    } else
        console.log("no p n l");
}

function valueSubmit() {
    var inp = Number(initialPrice.value);
    var cur = Number(currentPrice.value);
    var numStocks = Number(stocksQuantity.value);
    ProfitLossCalculator(inp, cur, numStocks)
}