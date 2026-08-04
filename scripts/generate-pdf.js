import puppeteer from "puppeteer";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

// Read the resume config file to get the PDF filename
const configPath = resolve(rootDir, "src/config/resumeConfig.ts");
const configContent = readFileSync(configPath, "utf8");

// Extract PDF filename from config using regex
const pdfFilenameMatch = configContent.match(/pdfFilename:\s*['"]([^'"]+)['"]/);
const pdfFilename = pdfFilenameMatch ? pdfFilenameMatch[1] : "resume.pdf";

async function createPdf(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  const savePath = `./public/${pdfFilename}`;
  await page.pdf({
    path: savePath,
    scale: 0.888, // Adjust scale as much as you'd want depending on your resume size, and make it fit into A4
    printBackground: true
  });
  await browser.close();
  console.log(`PDF generated successfully. Saved in: ${savePath}`);
}

// ponytail: spins its own throwaway vite dev server (instead of assuming one is already
// running on :3000) so VITE_PDF_GEN reaches vite.config.ts and hides the devtools plugin
// + download FAB. Also sidesteps port 3000 being taken by an unrelated local process —
// the actual bound port is parsed from vite's own stdout.
function startVite() {
  const viteBin = resolve(rootDir, "node_modules/.bin/vite");
  const child = spawn(viteBin, ["--host"], { cwd: rootDir, env: process.env });

  return new Promise((resolvePort, reject) => {
    let out = "";
    const onData = (chunk) => {
      out += chunk.toString();
      const match = out.match(/Local:\s+https?:\/\/localhost:(\d+)/);
      if (match) {
        child.stdout.off("data", onData);
        resolvePort({ child, url: `http://localhost:${match[1]}` });
      }
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", (chunk) => process.stderr.write(chunk));
    child.once("exit", (code) => reject(new Error(`vite exited early (code ${code})`)));
    setTimeout(() => reject(new Error("vite did not report a ready URL within 20s")), 20000);
  });
}

const { child, url } = await startVite();
try {
  await createPdf(url);
} finally {
  child.kill();
}
