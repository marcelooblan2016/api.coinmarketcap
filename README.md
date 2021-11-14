# api.coinmarketcap
JS Api for coinmarketcap (BY default polygon-ecosystem: crypto)
It displays the latest prices of coins accross polygon network.

## Installation
```bash
npm install api.coinmarketcap
```
## Usage
```bash
const ApiCoinMarketCap = require('api.coinmarketcap');

( async () => {
    let response = await ApiCoinMarketCap.getMarketPrices();

    let cryptoList = response.cryptoCurrencyList;

    console.log(cryptoList);
})();
```