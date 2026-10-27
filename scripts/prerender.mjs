/**
 * Post-build prerender: serves `dist/` with an SPA history fallback, renders
 * every route in headless Chrome and writes fully-rendered static HTML files
 * (dist/<route>/index.html). This lets crawlers read the real content and the
 * per-route meta tags without executing JavaScript.
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const IS_VERCEL = Boolean(process.env.VERCEL);

async function launchBrowser() {
  if (IS_VERCEL) {
    // Vercel build containers can't run the stock Chrome (missing system libs),
    // so use the serverless build of Chromium instead.
    const { default: chromium } = await import("@sparticuz/chromium");
    const { default: puppeteerCore } = await import("puppeteer-core");
    chromium.setGraphicsMode = false;
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: "shell",
    });
  }
  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({
    headless: "shell",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");

const ROUTES = [
  "/",
  "/eaisy-bill",
  "/aszf",
  "/adatkezelesi-tajekoztato",
  "/eaisy-desk",
  "/eaisy-boost",
  "/eaisy-books",
  "/tudasbazis",
  "/tudasbazis/eaisy-desk",
  "/tudasbazis/eaisy-desk/bejelentkezes-navigacio-jogosultsagok",
  "/tudasbazis/eaisy-desk/munkatarsi-dashboard-napi-teendok",
  "/tudasbazis/eaisy-desk/vezetoi-analitika-es-riportok",
  "/tudasbazis/eaisy-desk/interakcios-naplo-es-ai-piszkozatok",
  "/tudasbazis/eaisy-desk/ugyfelek-360-profil-es-duplikaciok",
  "/tudasbazis/eaisy-desk/erdeklodokezeles-kanban-folyamat",
  "/tudasbazis/eaisy-desk/naptar-es-idopontfoglalasok",
  "/tudasbazis/eaisy-desk/kimeno-kampanyok-es-ai-szovegvarazslo",
  "/tudasbazis/eaisy-desk/automatikus-ertesitesek-idopont-emailek",
  "/tudasbazis/eaisy-desk/ai-tudastar-ceg-es-szolgaltatasinformaciok",
  "/tudasbazis/eaisy-desk/ugykezelesi-es-foglalasi-szabalyok",
  "/tudasbazis/eaisy-desk/rendszerbeallitasok-csapat-biztonsag-telefonia",
  "/tudasbazis/eaisy-bill",
  "/tudasbazis/eaisy-bill/szamlakiallitas-dijbekero-es-nav-szinkron",
  "/tudasbazis/eaisy-bill/ismetlodo-szamlazas-es-fizetesi-emlekeztetok",
  "/tudasbazis/eaisy-books",
  "/tudasbazis/eaisy-books/bejovo-szamlak-ai-ocr-es-koltsegkategorizalas",
  "/tudasbazis/eaisy-books/cash-flow-es-afa-elorejelzes",
  "/tudasbazis/eaisy-boost",
  "/tudasbazis/eaisy-boost/ai-tartalomnaptar-es-hirdetesoptimalizalas",
  "/privacy",
  "/eaisydesk/privacy",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".ico": "image/x-icon",
};

function serve(dist) {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let file = path.join(dist, urlPath);
    if (!file.startsWith(dist)) {
      res.writeHead(403).end();
      return;
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      file = path.join(file, "index.html");
    }
    if (!fs.existsSync(file)) {
      file = path.join(dist, "index.html"); // SPA history fallback
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
}

async function main() {
  const server = serve(DIST);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}`;

  const browser = await launchBrowser();

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(`${base}${route === "/" ? "/" : route}`, { waitUntil: "networkidle0", timeout: 60000 });
      await page.waitForSelector("#root > *", { timeout: 30000 });
      // give react-helmet-async a tick to flush head tags
      await new Promise((r) => setTimeout(r, 1500));

      const html = await page.content();
      const outDir = route === "/" ? DIST : path.join(DIST, route.slice(1));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html);
      console.log(`✓ prerendered ${route} -> ${path.relative(DIST, path.join(outDir, "index.html"))}`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
