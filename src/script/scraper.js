const { Scraper, Root, DownloadContent, OpenLinks, CollectContent } = require('nodejs-web-scraper');

async function scrape() {

    const config = {
        baseSiteUrl: "https://pancakeswap.finance",
        startUrl: "https://pancakeswap.finance/farms",
        delay: 5000
    }

    const scraper = new Scraper(config);

    const root = new Root(); // Fetch dello startUrl ed inizia lo scraping

    
    // Defining operations
    const card = new CollectContent('td', { contentType: 'html'})
    const images = new DownloadContent('img', { filePath: '../resources/scraper/'})


    try {
        // Scraping tree
        root.addOperation(card);
        root.addOperation(images);
    
    } catch (e) {
        console.log(e)
    }

    // start scraper
    await scraper.scrape(root);

    const cards = card.getData();
    // const row = tableRow.getData();
    // const titles = title.getData();

    // console.log(card);
    console.log("Cards: ", cards);
    // console.log("Images: ", images)
    // console.log("Rows Data: ", row);
    // console.log(elementContent);
}

scrape()
