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

        await page.waitForTimeout(1200)
        for (let i = 0; i < 25; i++) {
            await page.evaluate(() => {
                window.scrollBy(0, window.innerHeight);
            });
            await page.waitForTimeout(1200)
        }
        const data = await page.evaluate(() => {
            const trs = Array.from(document.querySelectorAll('tr')).map(y => [...Array.from(y.querySelectorAll('td')).map(x => x.textContent)]);

            return trs;
        })


        console.log(data)

        await browser.close()

    } catch (error) {
        console.log(error)
    }
}

crawl()