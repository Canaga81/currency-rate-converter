const amountInput = document.getElementById('amount');
const firstOption = document.getElementById('firstCurrencyOption');
const secondOption = document.getElementById('secondCurrencyOption');
const resultInput = document.getElementById('result');
const exchangeBtn = document.getElementById('exchangeBtn');

const currency = new Currency();

runEvents();

function runEvents () {

    exchangeBtn.addEventListener('click', exchange);

}

function exchange () {
    
    const amountNumber = Number(amountInput.value.trim());
    
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amountNumber, firstOptionValue, secondOptionValue).then((result) => {
        resultInput.value = result.toFixed(3);
    });
    
}