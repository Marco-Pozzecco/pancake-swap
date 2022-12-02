export class fetchModule {
  BaseURL = "https://api.coingecko.com/api/v3/";

  async fetchHystoricalData(start_date, coin, vs_currency) {
    const BaseURL = this.BaseURL;
    const today = Math.round(Date.now() / 1000); // today in seconds UNIX format

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${vs_currency}&from=${start_date}&to=${today}`
    ).then((res) => res.json());

    return response;
  }
}
