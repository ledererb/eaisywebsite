import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

const OUT_DIR = path.resolve("public/kb/eaisy-hr");
fs.mkdirSync(OUT_DIR, { recursive: true });

const BASE_URL = "https://eaisydocs2.vercel.app";

async function sanitizeDom(page) {
  await page.evaluate(() => {
    const replacements = [
      // Company & Tenant names
      [/Think AI Kft\./gi, "Orion-Minta Kft."],
      [/THINK AI Kft\./gi, "Orion-Minta Kft."],
      [/ThinkAI Management/gi, "Orion Menedzsment"],
      [/Think AI/gi, "Orion-Minta Kft."],
      [/THINK AI/gi, "Orion-Minta Kft."],
      [/MAURONI MARCO ROMANO/gi, "Orion-Minta Kft."],
      [/thinkai\.hu/gi, "orion-minta.hu"],

      // Real & Test Employee Names (longest first)
      [/Flotta Kezelő Józsi/gi, "Tóth Gábor"],
      [/Nagy Dániel Teszt/gi, "Szabó Márton"],
      [/Nagy Dániel/gi, "Kovács Anna"],
      [/Nagy Daniel/gi, "Kovács Anna"],
      [/Dániel Nagy/gi, "Kovács Anna"],
      [/Daniel Nagy/gi, "Kovács Anna"],
      [/Kelemen Roberta/gi, "Kiss Réka"],
      [/Fekete Dávid/gi, "Horváth Dávid"],
      [/Varga Bálint/gi, "Molnár Bálint"],
      [/Brian Corner/gi, "Németh Balázs"],
      [/Kis József/gi, "Farkas Péter"],
      [/Kis Mária/gi, "Szabó Ilona"],
      [/\bhr vezeto\b/gi, "Varga Eszter"],

      // Emails, phones, addresses, tax & social security IDs
      [/nagyd965@gmail\.com/gi, "kovacs.anna@orion-minta.hu"],
      [/nagyd965/gi, "kovacs.anna"],
      [/\+36\s*30\s*961\s*6607/g, "+36 30 555 0199"],
      [/\+36309616607/g, "+36 30 555 0199"],
      [/Budapest\s*,\s*Kossuth Lajos utca 21\./gi, "1134 Budapest, Váci út 45."],
      [/1995\.\s*10\.\s*20\./g, "1994. 04. 15."],
      [/Adójel:\s*123123/gi, "Adójel: 8421593072"],
      [/TAJ:\s*123123/gi, "TAJ: 089 451 230"],
      [/123123/g, "842159307"],
      [/Adójel:\s*-\s*·\s*TAJ:\s*-/g, "Adójel: 8421904512 · TAJ: 089 451 230"],
      [/Adójel:\s*-/g, "Adójel: 8421904512"],
      [/TAJ:\s*-/g, "TAJ: 089 451 230"],

      // Test strings & empty roles polish
      [/Rendelj meg 10 darab autót\./gi, "Flottakezelési SLA és ügyfélelégedettségi cél teljesítése (98%)"],
      [/Flottakezelő álláshírdetés/gi, "Junior Flottakezelő Munkatárs"],
      [/Flotta kezelő/gi, "Medior Flottakezelő"],
      [/Nincs rövid összefoglaló megadva ehhez a pozícióhoz\./g, "Vállalati gépjárműpark teljes körű műszaki, biztosítási és szervizadminisztrációja."],
      [/Nincs beállítva/g, "Pénzügyi elemző"],
      [/Nincs besorolva/g, "Pénzügy"],
      [/Nincs munkakör/g, "Szoftverfejlesztő"],
      [/Nincs beosztás/g, "Pénzügyi elemző"],
      [/Nincs megadva/g, "Pénzügyi elemző"],
      [/Nincs részleg/g, "Pénzügy"],
      [/elozetes_munkaba_allasi/g, "Előzetes munkába állási"],

      // Generic email & phone fallback
      [/[a-zA-Z0-9._%+-]+@(?!orion-minta\.hu|pelda\.hu)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "hr@orion-minta.hu"],
    ];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);

    const avatarMap = {
      ND: "KA",
      NA: "KA",
      FK: "TG",
      FL: "TG",
      BC: "NB",
      BR: "NB",
      KJ: "FP",
      FD: "HD",
      FE: "HD",
      VB: "MB",
      VA: "MB",
      KE: "KR",
      HV: "VE",
    };

    for (const node of nodes) {
      let val = node.nodeValue;
      if (!val || !val.trim()) continue;
      const trimmed = val.trim();

      if (avatarMap[trimmed]) {
        node.nodeValue = val.replace(trimmed, avatarMap[trimmed]);
        continue;
      }

      // Replace "HR" inside circular avatar badges (for "hr vezeto" -> "Varga Eszter" -> "VE")
      if (trimmed === "HR" && node.parentElement) {
        const cls = (node.parentElement.className || "") + " " + (node.parentElement.parentElement?.className || "");
        if (cls.includes("rounded-full") || cls.includes("avatar")) {
          node.nodeValue = val.replace("HR", "VE");
          continue;
        }
      }

      // Replace standalone "Teszt" provider label on IDP page
      if (trimmed === "Teszt") {
        node.nodeValue = val.replace("Teszt", "Orion Akadémia");
        continue;
      }

      let changed = false;
      for (const [regex, rep] of replacements) {
        if (regex.test(val)) {
          val = val.replace(regex, rep);
          changed = true;
        }
      }
      if (changed) node.nodeValue = val;
    }

    // Sanitize inputs & textareas
    document.querySelectorAll("input, textarea").forEach((el) => {
      if (el.type === "password") return;
      let val = el.value;
      if (val) {
        for (const [regex, rep] of replacements) {
          val = val.replace(regex, rep);
        }
        el.value = val;
      }
      if (el.name === "pozicio" && !el.value) el.value = "HR Vezető";
      if (el.name === "ceg_neve" && !el.value) el.value = "Orion-Minta Kft.";
    });

    // Replace company logo image inside company selector so "THINK AI" graphic never leaks
    document.querySelectorAll('[data-tour="company-selector"] img').forEach((img) => {
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML =
          '<span style="font-weight:700;font-size:11px;color:#0f766e;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#ccfbf1;border-radius:6px;">OM</span>';
      }
    });

    // Replace any real uploaded user avatar photos inside <main> with clean initials badge ("VE")
    document.querySelectorAll("main img").forEach((img) => {
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML =
          '<span style="font-weight:700;font-size:12px;color:#0f766e;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#ccfbf1;border-radius:9999px;">VE</span>';
      }
    });

    // Clean up /hr/payroll table cells (Munkakör column & Adójel/TAJ subtitle)
    if (window.location.pathname.includes("/hr/payroll")) {
      const rows = Array.from(document.querySelectorAll("main table tbody tr"));
      rows.forEach((tr, idx) => {
        const tds = tr.querySelectorAll("td");
        if (tds[0]) {
          tds[0].querySelectorAll("p, span, div").forEach((el) => {
            if (el.children.length === 0 && el.textContent.includes("Adójel:")) {
              el.textContent = `Adójel: 84215930${idx + 1} · TAJ: 089 451 23${idx}`;
            }
          });
        }
        if (tds[1]) {
          tds[1].querySelectorAll("p, span, div").forEach((el) => {
            if (el.children.length === 0 && el.textContent.trim() === "-") {
              el.textContent = "Pénzügyi elemző";
            }
          });
        }
      });
    }

    // Populate realistic executive metrics on /hr/reports if empty ("-" / "0")
    if (window.location.pathname.includes("/hr/reports")) {
      const kpiReplacements = ["7 fő", "6.8 FTE", "2.4%", "1 120 óra", "48 óra"];
      let kpiIdx = 0;
      document.querySelectorAll("main h3, main .text-2xl, main .text-3xl, main p, main div, main span").forEach((el) => {
        if (el.children.length === 0 && el.textContent.trim() === "-" && kpiIdx < kpiReplacements.length) {
          el.textContent = kpiReplacements[kpiIdx++];
        }
      });

      const rows = Array.from(document.querySelectorAll("main table tbody tr"));
      const kshRowData = [
        ["Szellemi foglalkozású (FEOR 1-4)", "5", "4.80", "+1", "0", "864"],
        ["Fizikai foglalkozású (FEOR 5-9)", "2", "2.00", "0", "0", "352"],
        ["Összesen", "7", "6.80", "+1", "0", "1 216"],
      ];
      rows.forEach((tr, rIdx) => {
        const cells = Array.from(tr.querySelectorAll("td"));
        if (kshRowData[rIdx] && cells.length >= 6) {
          for (let c = 1; c < 6; c++) {
            cells[c].textContent = kshRowData[rIdx][c];
          }
        }
      });
    }
  });
}

async function waitForPageReady(page, extraMs = 2400) {
  await new Promise((r) => setTimeout(r, extraMs));
  await page
    .waitForFunction(() => document.querySelectorAll(".animate-pulse").length === 0, { timeout: 4000 })
    .catch(() => {});
  await sanitizeDom(page);
  await new Promise((r) => setTimeout(r, 350));
}

async function capture(page, filename) {
  await sanitizeDom(page);
  const fullPath = path.join(OUT_DIR, filename);
  await page.screenshot({
    path: fullPath,
    type: "webp",
    quality: 92,
  });
  console.log(`Saved: ${filename}`);
}

const ONLY = process.argv.slice(2);
function shouldCapture(filename) {
  if (ONLY.length === 0) return true;
  return ONLY.some((filter) => filename.includes(filter));
}

async function main() {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  const emailSelector = 'input[type="email"], input[name="email"]';
  const passSelector = 'input[type="password"], input[name="password"]';

  if (shouldCapture("hr-01-login.webp")) {
    console.log("Navigating to /login?module=hr...");
    await page.goto(`${BASE_URL}/login?module=hr`, { waitUntil: "networkidle2", timeout: 60000 });
    await waitForPageReady(page, 2200);
    await page.waitForSelector(emailSelector, { timeout: 15000 });
    await page.click(emailSelector, { clickCount: 3 });
    await page.type(emailSelector, "kovacs.anna@orion-minta.hu");
    await page.click(passSelector, { clickCount: 3 });
    await page.type(passSelector, "••••••••••••");
    await capture(page, "hr-01-login.webp");
  }

  // Perform real login on fresh /login?module=hr
  console.log("Logging in with real credentials...");
  await page.goto(`${BASE_URL}/login?module=hr`, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  await page.waitForSelector(emailSelector, { timeout: 15000 });
  await page.type(emailSelector, "nagyd965@gmail.com");
  await page.type(passSelector, "testing123");
  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: "networkidle2", timeout: 60000 }).catch(() => {}),
  ]);
  await waitForPageReady(page, 3000);

  // Switch company to Think AI Kft. (sanitized to Orion-Minta Kft.)
  const companyBtn = await page.$('[data-tour="company-selector"] button');
  if (companyBtn) {
    await companyBtn.click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.evaluate(() => {
      const target = Array.from(document.querySelectorAll("button")).find(
        (b) => b.innerText && b.innerText.includes("Think AI")
      );
      if (target) target.click();
    });
    await waitForPageReady(page, 3000);
  }

  const routes = [
    ["hr-02-portal-overview.webp", "/hr", 2800],
    ["hr-03-self-profile.webp", "/hr/self-service/profile", 2500],
    ["hr-04-self-documents.webp", "/hr/self-service/documents", 2500],
    ["hr-05-self-time.webp", "/hr/self-service/time", 3800],
    ["hr-06-self-goals-idp.webp", "/hr/self-service/idp", 2500],
    ["hr-07-self-payroll.webp", "/hr/self-service/payroll", 2800],
    ["hr-08-self-career.webp", "/hr/self-service/career", 2500],
    ["hr-09-admin-directory.webp", "/hr/admin", 2800],
    ["hr-10-employee-360.webp", "/hr/employee/033c787d-5436-44bb-a2b8-30a27b34db45", 2800],
    ["hr-11-organization.webp", "/hr/organization", 2800],
    ["hr-12-time-roster.webp", "/hr/time", 2800],
  ];

  for (const [file, route, waitMs] of routes) {
    if (!shouldCapture(file)) continue;
    console.log(`Capturing ${route} -> ${file}...`);
    await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle2", timeout: 60000 });
    await waitForPageReady(page, waitMs);
    await capture(page, file);
  }

  if (shouldCapture("hr-13-payroll.webp")) {
    console.log("Capturing /hr/payroll...");
    await page.goto(`${BASE_URL}/hr/payroll`, { waitUntil: "networkidle2", timeout: 60000 });
    await waitForPageReady(page, 2500);
    await page.evaluate(() => {
      const prevBtn =
        document.querySelector('button[aria-label*="Előző"], button[title*="Előző"]') ||
        Array.from(document.querySelectorAll("main button")).find((b) => b.querySelector("svg.lucide-chevron-left"));
      if (prevBtn) prevBtn.click();
    });
    await new Promise((r) => setTimeout(r, 1200));
    await page.evaluate(() => {
      const prevBtn =
        document.querySelector('button[aria-label*="Előző"], button[title*="Előző"]') ||
        Array.from(document.querySelectorAll("main button")).find((b) => b.querySelector("svg.lucide-chevron-left"));
      if (prevBtn) prevBtn.click();
    });
    await waitForPageReady(page, 2500);
    await capture(page, "hr-13-payroll.webp");
  }

  const tailRoutes = [
    ["hr-14-compliance.webp", "/hr/compliance", 2800],
    ["hr-15-performance.webp", "/hr/performance", 2800],
    ["hr-16-recruitment-lifecycle.webp", "/hr/recruitment", 2800],
    ["hr-17-onboarding-offboarding.webp", "/hr/onboarding", 2500],
  ];

  for (const [file, route, waitMs] of tailRoutes) {
    if (!shouldCapture(file)) continue;
    console.log(`Capturing ${route} -> ${file}...`);
    await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle2", timeout: 60000 });
    await waitForPageReady(page, waitMs);
    await capture(page, file);
  }

  if (shouldCapture("hr-18-reports.webp")) {
    console.log("Capturing /hr/reports...");
    await page.goto(`${BASE_URL}/hr/reports`, { waitUntil: "networkidle2", timeout: 60000 });
    await waitForPageReady(page, 2500);
    await page.evaluate(() => {
      const kshTab = Array.from(document.querySelectorAll('[role="tab"], button')).find(
        (b) => b.innerText && b.innerText.includes("KSH Riport")
      );
      if (kshTab) kshTab.click();
    });
    await waitForPageReady(page, 2000);
    await capture(page, "hr-18-reports.webp");
  }

  if (shouldCapture("hr-19-audit.webp")) {
    console.log("Capturing /hr/audit...");
    await page.goto(`${BASE_URL}/hr/audit`, { waitUntil: "networkidle2", timeout: 60000 });
    await waitForPageReady(page, 2800);
    await capture(page, "hr-19-audit.webp");
  }

  await browser.close();
  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
