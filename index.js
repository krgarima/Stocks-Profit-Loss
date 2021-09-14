const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const calculateBtn = document.querySelector('#calculate-button');
const outputMessage1 = document.querySelector('#output-message1');
const outputMessage2 = document.querySelector('#output-message2');

function ProfitLossCalculator(initial, current, quantity) {

    if (initial < current) {
        const profit = current - initial;
        const percentageProfit = (profit / initial) * 100;
        outputMessage1.innerText = "Your Profit is "+profit+ " and Profit percentage is "+percentageProfit;
        outputMessage2.innerText="";
        
    } else if (initial > current) {
        const loss = initial - current;
        const percentageLoss = (loss / initial) * 100;
        outputMessage2.innerText = "Your Loss is "+loss+ " and Loss percentage is "+percentageLoss;
        outputMessage1.innerText="";
    } else
    outputMessage1.innerText = "No profit or Loss. Better luck next time";
}

function valueSubmit() {
    var inp = Number(initialPrice.value);
    var cur = Number(currentPrice.value);
    var numStocks = Number(stocksQuantity.value);
    ProfitLossCalculator(inp, cur, numStocks)
}


calculateBtn.addEventListener("click", valueSubmit);