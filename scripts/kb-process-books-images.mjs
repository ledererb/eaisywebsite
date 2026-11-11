import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR =
  process.env.EAISYBOOKS_SCREENSHOTS_DIR ||
  path.resolve(__dirname, "../../eaisybooks felhasznaloi kezikonyv/screenshots");
const OUT_DIR = path.resolve(__dirname, "../public/kb/eaisy-books");

fs.mkdirSync(OUT_DIR, { recursive: true });

// Screenshots that have the eaisyBill top-left company selector pill
const BILL_SIDEBAR_NUMS = new Set([
  3, 8, 9, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 37, 39, 40, 43, 44, 45,
]);

// Screenshots that have the eaisyBooks top-left company selector card
const BOOKS_COMPANY_SIDEBAR_NUMS = new Set([
  7, 10, 13, 33, 34, 35, 36, 38, 42,
]);

// Helper to sample RGB pixel at logical (1440x900) coordinate (lx, ly)
function makeSampler(rawBuf, width, height, channels) {
  return (lx, ly) => {
    const px = Math.min(width - 1, Math.max(0, Math.round((lx / 1440) * width)));
    const py = Math.min(height - 1, Math.max(0, Math.round((ly / 900) * height)));
    const idx = (py * width + px) * channels;
    const r = rawBuf[idx];
    const g = rawBuf[idx + 1];
    const b = rawBuf[idx + 2];
    return `rgb(${r}, ${g}, ${b})`;
  };
}

function buildOverlaysHtml(num, sampleBg) {
  const blocks = [];

  // 1. Universal Bottom-Left Profile Box (02..45)
  if (num >= 2) {
    const isDimmed = num === 3;
    const bg = sampleBg(60, 752);
    const avatarBg = isDimmed ? "rgb(82, 87, 86)" : "#E2ECE9";
    const avatarColor = isDimmed ? "rgb(18, 24, 32)" : "#1E293B";
    const nameColor = isDimmed ? "rgb(15, 20, 28)" : "#0F172A";
    const emailColor = isDimmed ? "rgb(45, 52, 62)" : "#64748B";

    blocks.push(`
      <div style="
        position:absolute; left:14px; top:750px; width:180px; height:42px;
        background:${bg}; display:flex; align-items:center; gap:10px;
        padding-left:2px; box-sizing:border-box; overflow:hidden;
      ">
        <div style="
          width:32px; height:32px; border-radius:9999px; background:${avatarBg};
          color:${avatarColor}; font-size:12px; font-weight:500;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        ">KA</div>
        <div style="min-width:0; flex:1; line-height:1.25;">
          <div style="font-size:13.5px; font-weight:500; color:${nameColor}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            Kovács Anna
          </div>
          <div style="font-size:11.5px; font-weight:400; color:${emailColor}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            kovacs.anna@optim...
          </div>
        </div>
      </div>
    `);
  }

  // 2A. Top-Left eaisyBill Company Selector Pill
  if (BILL_SIDEBAR_NUMS.has(num)) {
    const isDimmed = num === 3;
    const bg = sampleBg(66, 114);
    const textColor = isDimmed ? "rgb(20, 26, 34)" : "#1E293B";
    blocks.push(`
      <div style="
        position:absolute; left:66px; top:115px; width:70px; height:22px;
        background:${bg}; display:flex; align-items:center;
        font-size:13.5px; font-weight:500; color:${textColor};
        white-space:nowrap; overflow:hidden;
      ">OptiMed...</div>
    `);
  }

  // 2B. Top-Left eaisyBooks Company Selector Card
  if (BOOKS_COMPANY_SIDEBAR_NUMS.has(num)) {
    const bg1 = sampleBg(42, 176);
    const bg2 = sampleBg(42, 194);
    blocks.push(`
      <div style="
        position:absolute; left:40px; top:175px; width:148px; height:18px;
        background:${bg1}; display:flex; align-items:center;
        font-size:12.5px; font-weight:700; color:#0F172A;
        white-space:nowrap; overflow:hidden;
      ">OptiMed Klinika Kft.</div>
      <div style="
        position:absolute; left:40px; top:193px; width:115px; height:15px;
        background:${bg2}; display:flex; align-items:center;
        font-size:10.5px; font-weight:400; color:#64748B;
        white-space:nowrap; overflow:hidden;
      ">12345678-2-42</div>
    `);
  }

  // 3. Per-screenshot Main Content Occurrences
  if (num === 2) {
    // 4th client card in portfolio
    const bg = sampleBg(1200, 622);
    blocks.push(`
      <div style="
        position:absolute; left:1196px; top:618px; width:174px; height:72px;
        background:${bg}; display:flex; flex-direction:column; justify-content:flex-start;
      ">
        <div style="font-size:17.5px; font-weight:700; line-height:22px; color:#0F172A;">
          OptiMed Klinika<br/>Kft.
        </div>
        <div style="font-size:12.5px; font-weight:400; color:#64748B; margin-top:4px;">
          12345678-2-42
        </div>
      </div>
    `);
  }

  if (num === 3) {
    // Modal header badge + 2 dimmed inputs
    const modalBg = sampleBg(680, 319);
    const inputBg1 = sampleBg(1050, 765);
    const inputBg2 = sampleBg(1050, 855);
    blocks.push(`
      <div style="
        position:absolute; left:666px; top:317px; width:144px; height:17px;
        background:${modalBg}; display:flex; align-items:center;
        font-size:11.5px; font-weight:500; color:#0F172A; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
      <div style="
        position:absolute; left:854px; top:756px; width:220px; height:26px;
        background:${inputBg1}; display:flex; align-items:center;
        font-size:14px; font-weight:400; color:rgb(25, 32, 42); white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
      <div style="
        position:absolute; left:854px; top:844px; width:160px; height:26px;
        background:${inputBg2}; display:flex; align-items:center;
        font-size:14px; font-weight:400; color:rgb(25, 32, 42); white-space:nowrap;
      ">HU12345678</div>
    `);
  }

  if (num === 5) {
    // Permission matrix table row
    const bg = sampleBg(310, 490);
    blocks.push(`
      <div style="
        position:absolute; left:306px; top:486px; width:195px; height:26px;
        background:${bg}; display:flex; align-items:center;
        font-size:14px; font-weight:600; color:#0F172A; white-space:nowrap;
      ">Kovács Anna</div>
    `);
  }

  if (num === 7 || num === 13 || num === 33 || num === 38) {
    // Super-title at x=322, y=180
    const bg = sampleBg(322, 180);
    blocks.push(`
      <div style="
        position:absolute; left:320px; top:180px; width:168px; height:17px;
        background:${bg}; display:flex; align-items:center;
        font-size:12.5px; font-weight:500; color:#64748B; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 8) {
    // Top 10 beszállító #1
    const bg = sampleBg(362, 513);
    blocks.push(`
      <div style="
        position:absolute; left:328px; top:514px; width:26px; height:26px;
        border-radius:9999px; background:#E0E7FF; color:#3730A3;
        font-size:10px; font-weight:700; display:flex; align-items:center; justify-content:center;
      ">MT</div>
      <div style="
        position:absolute; left:360px; top:511px; width:155px; height:18px;
        background:${bg}; display:flex; align-items:center;
        font-size:13px; font-weight:600; color:#334155; white-space:nowrap;
      ">MedTech Hungária Kft.</div>
    `);
  }

  if (num === 9) {
    // Top-right pill badge
    const bg = sampleBg(1225, 155);
    blocks.push(`
      <div style="
        position:absolute; left:1220px; top:153px; width:140px; height:20px;
        background:${bg}; display:flex; align-items:center;
        font-size:13px; font-weight:600; color:#0F172A; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 10) {
    // Super-title at x=432, y=181
    const bg = sampleBg(432, 181);
    blocks.push(`
      <div style="
        position:absolute; left:430px; top:181px; width:168px; height:19px;
        background:${bg}; display:flex; align-items:center;
        font-size:12.5px; font-weight:500; color:#64748B; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 15) {
    // Top-right 2-line company label next to building icon
    const bg = sampleBg(1165, 152);
    blocks.push(`
      <div style="
        position:absolute; left:1161px; top:156px; width:86px; height:38px;
        background:${bg}; display:flex; flex-direction:column; justify-content:center;
        font-size:12px; font-weight:600; line-height:15.5px; color:#0F172A;
      ">
        <div>OptiMed</div>
        <div>Klinika Kft.</div>
      </div>
    `);
  }

  if (num === 17) {
    const bg = sampleBg(294, 132);
    blocks.push(`
      <div style="
        position:absolute; left:292px; top:131px; width:153px; height:19px;
        background:${bg}; display:flex; align-items:center;
        font-size:13px; font-weight:500; color:#475569; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 18) {
    const bg = sampleBg(274, 134);
    blocks.push(`
      <div style="
        position:absolute; left:272px; top:133px; width:144px; height:18px;
        background:${bg}; display:flex; align-items:center;
        font-size:12px; font-weight:500; color:#475569; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 21) {
    const bg = sampleBg(324, 234);
    blocks.push(`
      <div style="
        position:absolute; left:322px; top:233px; width:147px; height:18px;
        background:${bg}; display:flex; align-items:center;
        font-size:12.5px; font-weight:700; color:#475569; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 22) {
    const bg = sampleBg(328, 150);
    blocks.push(`
      <div style="
        position:absolute; left:332px; top:150px; width:129px; height:15px;
        background:${bg}; display:flex; align-items:center;
        font-size:11.5px; font-weight:400; color:#64748B; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 24) {
    const bg1 = sampleBg(1035, 725);
    const bg2 = sampleBg(902, 750);
    const bg3 = sampleBg(1035, 819);
    const bg4 = sampleBg(902, 844);
    blocks.push(`
      <div style="
        position:absolute; left:1030px; top:726px; width:86px; height:22px;
        background:${bg1}; display:flex; align-items:center;
        font-size:13.5px; font-weight:500; color:#0F172A; white-space:nowrap;
      ">MedTech...</div>
      <div style="
        position:absolute; left:901px; top:750px; width:142px; height:18px;
        background:${bg2}; display:flex; align-items:center;
        font-size:11.5px; font-weight:400; color:#64748B; white-space:nowrap;
      ">MedTech Hungária Kft.</div>
      <div style="
        position:absolute; left:1030px; top:820px; width:86px; height:22px;
        background:${bg3}; display:flex; align-items:center;
        font-size:13.5px; font-weight:500; color:#0F172A; white-space:nowrap;
      ">MedTech...</div>
      <div style="
        position:absolute; left:901px; top:844px; width:142px; height:18px;
        background:${bg4}; display:flex; align-items:center;
        font-size:11.5px; font-weight:400; color:#64748B; white-space:nowrap;
      ">MedTech Hungária Kft.</div>
    `);
  }

  if (num === 28) {
    const bg = sampleBg(294, 122);
    blocks.push(`
      <div style="
        position:absolute; left:292px; top:121px; width:153px; height:19px;
        background:${bg}; display:flex; align-items:center;
        font-size:13px; font-weight:500; color:#475569; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 31) {
    const bg = sampleBg(350, 185);
    blocks.push(`
      <div style="
        position:absolute; left:353px; top:188px; width:265px; height:38px;
        background:${bg}; display:flex; align-items:flex-start;
        font-size:13.5px; font-weight:400; line-height:18px; color:#64748B;
      ">OptiMed Klinika Kft. — 0 eszköz (0<br/>aktív)</div>
    `);
  }

  if (num === 34) {
    const bg = sampleBg(360, 170);
    blocks.push(`
      <div style="
        position:absolute; left:355px; top:176px; width:136px; height:19px;
        background:${bg}; display:flex; align-items:center;
        font-size:12.5px; font-weight:400; color:#64748B; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 36) {
    const bg = sampleBg(420, 205);
    blocks.push(`
      <div style="
        position:absolute; left:424px; top:210px; width:500px; height:20px;
        background:${bg}; display:flex; align-items:center;
        font-size:13px; font-weight:400; color:#64748B; white-space:nowrap;
      ">OptiMed Klinika Kft. — Havi adó- és járulékbevallás (A-lap &amp; M-lapok)</div>
    `);
  }

  if (num === 39) {
    const bg = sampleBg(376, 140);
    blocks.push(`
      <div style="
        position:absolute; left:374px; top:141px; width:146px; height:19px;
        background:${bg}; display:flex; align-items:center;
        font-size:12.5px; font-weight:400; color:#64748B; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 43) {
    const bg = sampleBg(274, 134);
    blocks.push(`
      <div style="
        position:absolute; left:272px; top:133px; width:153px; height:19px;
        background:${bg}; display:flex; align-items:center;
        font-size:13px; font-weight:500; color:#475569; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  if (num === 44) {
    const bg = sampleBg(274, 112);
    blocks.push(`
      <div style="
        position:absolute; left:272px; top:111px; width:153px; height:19px;
        background:${bg}; display:flex; align-items:center;
        font-size:13px; font-weight:500; color:#475569; white-space:nowrap;
      ">OptiMed Klinika Kft.</div>
    `);
  }

  return blocks.join("\n");
}

async function main() {
  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => f.endsWith(".png"))
    .sort();

  const browser = await puppeteer.launch({
    headless: "shell",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

    await page.setContent(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1440px;
      height: 900px;
      overflow: hidden;
      font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
      position: relative;
      background: #fff;
    }
    .bg {
      position: absolute;
      inset: 0;
      width: 1440px;
      height: 900px;
      object-fit: fill;
      display: block;
    }
  </style>
</head>
<body>
  <img id="bg" class="bg" />
  <div id="overlays"></div>
</body>
</html>`,
      { waitUntil: "domcontentloaded" }
    );

    for (const file of files) {
      const num = parseInt(file.slice(0, 2), 10);
      const srcPath = path.join(SRC_DIR, file);
      const outBase =
        "books-" +
        file
          .replace(/\.png$/i, "")
          .replace(/_/g, "-") +
        ".webp";
      const outPath = path.join(OUT_DIR, outBase);

      const { data: rawBuf, info } = await sharp(srcPath)
        .raw()
        .toBuffer({ resolveWithObject: true });
      const sampleBg = makeSampler(
        rawBuf,
        info.width,
        info.height,
        info.channels
      );

      const b64 = fs.readFileSync(srcPath).toString("base64");
      const overlaysHtml = buildOverlaysHtml(num, sampleBg);

      await page.evaluate(
        async ({ dataUrl, html }) => {
          const img = document.getElementById("bg");
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = dataUrl;
          });
          document.getElementById("overlays").innerHTML = html;
        },
        { dataUrl: `data:image/png;base64,${b64}`, html: overlaysHtml }
      );

      const shotBuf = await page.screenshot({ type: "png" });
      await sharp(shotBuf).webp({ quality: 90 }).toFile(outPath);
      console.log(`✓ [${num}/45] ${file} -> public/kb/eaisy-books/${outBase}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
