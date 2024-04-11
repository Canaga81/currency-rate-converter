class Currency {

    constructor () {

        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lNQKSnyGDvpxdQdUyEyTdUj1SeAyeP8SuPNmiUMW&base_currency=";

    }

    async exchange (amountNumber, firstCurrency, secondCurrency) {

        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangedResult = amountNumber * result.data[secondCurrency];

        return exchangedResult;

    }

}