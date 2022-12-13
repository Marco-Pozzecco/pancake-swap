const puppeteer = require('puppeteer')

async function crawl() {
    const cardSelector = '.sc-a2a3a72d-1'

    try {
        const URL = "https://pancakeswap.finance/farms";

        const browser = await puppeteer.launch({
            headless: false
        })

        const page = await browser.newPage()

        await page.goto(URL)

        await page.waitForSelector(cardSelector)
        
        const data = await page.$$(cardSelector)

        // const data = await page.evaluate( sel => {
        //     const cards = document.querySelectorAll(sel);
        //     console.count("cards")
        //     return cards;
        // }, cardSelector)
        
        data.forEach( async (el) => {
            const HTML_El = await el.getProperties()
            console.log(HTML_El)
        })

        console.log(data)

        await browser.close()

    } catch (error) {
        console.log(error)
    }
}

crawl()