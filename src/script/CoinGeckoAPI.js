export class CoinGeckoAPI {
  URL = "https://api.coingecko.com/api/v3/";

  async fetchHystoricalDataUNIX(start_date, coin, vs_currency) {
    const BaseURL = this.URL;
    const today = Math.round(Date.now() / 1000); // today in seconds UNIX format

    const response = await fetch(`${BaseURL}coins/${coin}/market_chart/range?vs_currency=${vs_currency}&from=${start_date}&to=${today}`).then((res) => res.json());

    return response;
  }

  // days_range -> n di gg indietro
  // interval -> string can be omitted
  async fetchHystoricalData(days_range, interval, coin, vs_currency) {
    let response;

    if (interval) {
      response = await fetch(`${this.URL}coins/${coin}/market_chart?vs_currency=${vs_currency}&days=${days_range}&interval=${interval}`);
    } else {
      response = await fetch(`${this.URL}coins/${coin}/market_chart?vs_currency=${vs_currency}&days=${days_range}`);
    }

    return response;
  }
}
