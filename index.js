#!/usr/bin/env node
const puppeteer = require('puppeteer');
const embedUrl = 'https://snowflake.torproject.org/embed';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(embedUrl);
  console.log('loaded');
  page.on('console', (msg) => {
    console.log(msg.text());
  });
  setTimeout(() => {
    // wait 2s because if this is called too early, it gets double clicked for
    // some unknown reason
    page.evaluate('document.querySelector("#enabled").click()');
  }, 2000);
  setInterval(() => {
    // report on snowflake status
    page.evaluate('console.log(document.querySelector("#statustext").innerText)');
  }, 10000);
})();
