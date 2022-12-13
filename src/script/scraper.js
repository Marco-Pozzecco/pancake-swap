const { Scraper, Root, DownloadContent, OpenLinks, CollectContent } = require('nodejs-web-scraper');

async function scrape() {

    const config = {
        baseSiteUrl: "https://pancakeswap.finance",
        startUrl: "https://pancakeswap.finance/farms",
        delay: 5000,
    }

    const scraper = new Scraper(config);

    const root = new Root(); // Fetch dello startUrl ed inizia lo scraping

    let content;
    // getElementContent
    function getElementContent(elementContent, pageAddress) {
        console.log(elementContent, pageAddress)
        content.push(elementContent)
    }


    // sc-eecfaa46-0 e` la classe della card
    const card = new CollectContent('div.sc-3a5c8d1f-1', { name: "card", contentType: 'html', getElementContent: getElementContent })
    const images = new DownloadContent('img.sc-8ebf47af-0', { filePath: '../resources/scraper/'})

    const tableRow = new CollectContent(".sc-a2a3a72d-1", { name: "table-row"})
    
    const title = new CollectContent('h1.sc-c56ebc7d-0', {name: "title"})
        
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
    const row = tableRow.getData();
    const titles = title.getData();

    // console.log(card);
    console.log("Cards: ", cards);
    console.log("Images: ", images)
    // console.log("Rows Data: ", row);
    // console.log(elementContent);

    return content
}

scrape()
