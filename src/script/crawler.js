const puppeteer = require('puppeteer')
const fs = require('fs')

async function crawl() {
    const cardSelector = '.sc-a2a3a72d-1'

    try {
        const URL = "https://pancakeswap.finance/farms";

        const browser = await puppeteer.launch({
            headless: true
        })

        const page = await browser.newPage()

        await page.goto(URL)

        await page.waitForTimeout(1200)
        for (let i = 0; i < 25; i++) {
            await page.evaluate(() => {
                window.scrollBy(0, window.innerHeight);
            });
            await page.waitForTimeout(500)
        }
        const data = await page.evaluate(() => {
            const trs = Array.from(document.querySelectorAll('tr')).map(y => [...Array.from(y.querySelectorAll('td')).map(x => x.textContent)]);

            return trs;
        })

        // Process data
        const json = JSON.stringify(data.map( row => {
            return {
                financialInstrument: row[0],
                earned: "Earned",
                amount: 0,
                apr: row[2].match(/\d+\.\d+%|\d+\,\d+%|\d+%/g),
                details: "Details"
            }
        }))
        
        // Writing to file
        fs.writeFile("src/_data/scraper/scraperResult.json", json, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("file written successfully in src/_data/scraper/")
            }
        })

        // Closing the puppeteer instance
        await browser.close()

    } catch (error) {
        console.log(error)
    }
}

crawl()