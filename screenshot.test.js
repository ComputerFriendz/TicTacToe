const puppeteer = require('puppeteer');
const ScreenTest = require('puppeteer-screenshot-tester');

describe("screenshot test", () => {
it("Test if site is active", (async () => {
  const tester = await ScreenTest();
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://floating-depths-40711.herokuapp.com/');
  //let baseUrl = 'https://floating-depths-40711.herokuapp.com/'
  //await page.goto(baseUrl, {"waitUntil" : "networkidle0"});
  const result = await tester(page, 'screenshot.png');
  //await page.screenshot({path: 'screenshot.png'});
  await browser.close();
  expect(result).toBe(true);
  //jest.setTimeout(10000);
}))
});

