const puppeteer = require('puppeteer')

async function crawl() {
    try {
        const URL = "https://pancakeswap.finance/farms";

        const browser = await puppeteer.launch()

        const page = await browser.newPage()

        await page.goto(URL)

        const data = await page.content()

        console.log(data)

        await browser.close()

    } catch (error) {
        console.log(error)
    }
}

crawl()