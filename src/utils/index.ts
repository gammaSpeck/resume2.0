import puppeteer from "puppeteer";

export async function createPdf(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" }); // URL where
  const buffer = await page.pdf({
    scale: 0.906, // Adjust scale as much as you'd want depending on your resume size, and make it fit into A4
    printBackground: true,
  });
  await browser.close();

  return buffer;
}
