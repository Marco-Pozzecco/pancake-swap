const puppeteer = require('puppeteer')

async function crawl() {
    const cardSelector = '.sc-eecfaa46-0'

    try {
        const URL = "https://pancakeswap.finance/farms";

        const browser = await puppeteer.launch()

        const page = await browser.newPage()

        await page.goto(URL)

        await page.waitForSelector(cardSelector)

        const data = await page.evaluate( (sel) => {
            const cards = [...document.querySelectorAll(sel)];
            console.log(cards)
            return cards;
        }, cardSelector)

        console.log(data)

        await browser.close()

    } catch (error) {
        console.log(error)
    }
}

crawl()