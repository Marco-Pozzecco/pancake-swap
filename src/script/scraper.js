const { Scraper, Root, DownloadContent, OpenLinks, CollectContent } = require('nodejs-web-scraper');

export default async function scrape () {

    const config = {
        baseSiteUrl: "https://pancakeswap.finance/farms",
        startUrl: "https://pancakeswap.finance/farms",
        concurrency: 1
    }

    const scraper = new Scraper(config);

    const root = new Root(); // Fetch dello startUrl ed inizia lo scraping

    console.log("The Root: ", root);
    
    // sc-eecfaa46-0 e` la classe della card
    const card = new CollectContent('.sc-eecfaa46-0', { getAllItems: true})

    console.log("A Card: ", card);

    // Scraping tree

    root.addOperation(card);

    // start scraper

    await scraper.scrape(root);

    const cards = card.getData();

    console.log("Cards: ", cards);
}

scrape();