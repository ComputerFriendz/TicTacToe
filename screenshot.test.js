const puppeteer = require('puppeteer');
const ScreenTest = require('puppeteer-screenshot-tester');

describe("screenshot test", () => {
it("Test if site is active", (async () => {
  const tester = await ScreenTest();
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('http://localhost:5000');
  await page.screenshot({path: 'screenshot.png'});
  const result = await tester(page, 'screenshot.png');
  await browser.close();
  expect(result).toBe(true);
}))
  
});
