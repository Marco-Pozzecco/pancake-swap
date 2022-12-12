const { Scraper, Root, DownloadContent, OpenLinks, CollectContent } = require('nodejs-web-scraper');

async function scrape() {

    const config = {
        baseSiteUrl: "https://pancakeswap.finance/farms",
        startUrl: "https://pancakeswap.finance/farms",
        concurrency: 1
    }

    const scraper = new Scraper(config);

    const root = new Root(); // Fetch dello startUrl ed inizia lo scraping

    // getElementContent
    function getElementContent(element) {
        return element.textContent
    }

    // sc-eecfaa46-0 e` la classe della card
    const card = new CollectContent('.sc-eecfaa46-0', { name: "card", getElementContent })

    const tableRow = new CollectContent(".sc-a2a3a72d-1", { name: "table-row"})

    const title = new CollectContent('h1.sc-c56ebc7d-0', {name: "title"})
    
    
    // Scraping tree
    root.addOperation(card);
    root.addOperation(tableRow);
    root.addOperation(title);

    // start scraper
    await scraper.scrape(root);

    const cards = card.getData();
    const row = tableRow.getData();
    const titles = title.getData();

    console.log("Cards: ", cards);
    console.log("Rows Data: ", row);
    console.log(titles);
}

scrape();