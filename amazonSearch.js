const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();

  // Go to Amazon
  await page.goto("https://www.amazon.in");
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 sec

  // Step 1: Select category from dropdown
  await page.select("#searchDropdownBox", "search-alias=electronics");
  await new Promise(resolve => setTimeout(resolve, 1500)); // wait 1.5 sec

  // Step 2: Type "laptop" in search bar
  await page.type("#twotabsearchtextbox", "laptop", { delay: 150 }); 
  await new Promise(resolve => setTimeout(resolve, 1500)); // wait 1.5 sec

  // Step 3: Click search button
  await page.click("#nav-search-submit-button");
  await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 sec

  // Step 4: Wait for search results to load
  await page.waitForSelector(".s-main-slot");
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 sec

  

  // Keep results open for 10 sec
  console.log("search done");
  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
})();
