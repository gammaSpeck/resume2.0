import puppeteer from "puppeteer";

async function createPdf(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.pdf({
    path: "./public/madhu-km-resume.pdf",
    scale: 0.906, // Adjust scale as much as you'd want depending on your resume size, and make it fit into A4
    printBackground: true,
  });
  await browser.close();
}

const URL = "http://localhost:3000";
createPdf(URL);
