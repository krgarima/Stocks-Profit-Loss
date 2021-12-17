const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const calculateBtn = document.querySelector('#calculate-button');
const outputMessage = document.querySelector('#output-message');

outputMessage.innerText="₹0";

function ProfitLossCalculator(initial, current, quantity) {

    if (initial < current) {
        const profit = (current - initial)*stocksQuantity.value;
        const percentageProfit = (profit / (initial*stocksQuantity.value)) * 100;
        outputMessage.innerText = "Your profit is ₹" + profit + " and profit percentage is " + percentageProfit+"%";
        document.body.style.backgroundColor = "#AAFF00";
 
    } else if (initial > current) {
        const loss = (initial - current)*stocksQuantity.value;
        const percentageLoss = (loss / (initial*stocksQuantity.value)) * 100;
        outputMessage.innerText = "Your loss is ₹" + loss + " and loss percentage is " + percentageLoss+"%";
        document.body.style.backgroundColor = "red";
    } else
        outputMessage.innerText = "No profit or Loss. Better luck next time";
}


function valueSubmit() {
    var inp = Number(initialPrice.value);
    var cur = Number(currentPrice.value);
    var numStocks = Number(stocksQuantity.value);

    if ((inp) && (cur) && (numStocks)) {
        if ((inp > 0) && (cur > 0) && (numStocks > 0)) {
            ProfitLossCalculator(inp, cur, numStocks)
        } else {
            outputMessage1.innerText = null;
            outputMessage2.innerText = "Entered value is negative!";
        }
    } else {
        outputMessage1.innerText = null;
        outputMessage2.innerText = "Enter value in all the fields!";
    }
}

calculateBtn.addEventListener("click", valueSubmit);