const puppeteer = require('puppeteer')
const fs = require('fs')

async function crawl() {
    const cardSelector = '.sc-a2a3a72d-1'
    console.time("crawling time")

    try {
        const URL = "https://pancakeswap.finance/farms";

        const browser = await puppeteer.launch({
            headless: true,
        })

        const page = await browser.newPage()

        await page.setViewport({
            width: 1200,
            height: 1000
        })

        await page.goto(URL)

        await page.waitForTimeout(1200)
        for (let i = 0; i < 25; i++) {
            await page.evaluate(() => {
                window.scrollBy(0, window.innerHeight);
            });
            await page.waitForTimeout(500)
        }

        const data = await page.evaluate(() => {
            const trs = Array.from(document.querySelectorAll('tr')).map(y => [...Array.from(y.querySelectorAll('td')).map(x => x.innerHTML)]);

            return trs;
        })

        // Process data
        const json = JSON.stringify(data.map(row => {
            return {
                financialInstrument: row[0].match(/[A-Z]+-[A-Z]+/g),
                images: row[0].match(/\/images\/tokens\/[0-9A-Za-z]+\.png/gm),
                labels: {
                    svg: row[1].match(/<svg.+?<\/svg>/g),
                    text: row[1].match(/Core|Boosted|Stable-LP/gm)
                },
                earned: "Earned",
                amount: 0,
                apr: row[3].match(/\d+\.\d+%|\d+\,\d+%|\d+%/g),
                liquidity: row[4].match(/\$[\d\.]+/gm),
                multiplier: row[5].match(/[\d\.]+x/gm),
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
    console.timeEnd("crawling time")
}

crawl()