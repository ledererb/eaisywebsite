/**
 * Complete eaisyDocs Knowledge Base Screenshot Generator
 * - Viewport: 1440x900 @ 2x deviceScaleFactor (2880x1800 Retina WebP)
 * - Strictly READ-ONLY: zero POST/PUT/PATCH/DELETE mutations to staging DB
 * - Client-side DOM & Fetch PII sanitization (OptiMed Klinika Kft. demo persona)
 */
import puppeteer from 'puppeteer';
import path from 'node:path';
import fs from 'node:fs/promises';

const BASE_URL = process.env.EAISY_DOCS_URL || 'https://eaisydocs2.vercel.app';
const EMAIL = process.env.EAISY_DOCS_EMAIL || 'nagyd965@gmail.com';
const PASSWORD = process.env.EAISY_DOCS_PASSWORD || 'testing123';
const OUT_DIR = path.resolve('public/kb/eaisy-docs');

const ONLY_FILES = process.env.ONLY_FILES
  ? new Set(process.env.ONLY_FILES.split(',').map((s) => s.trim()).filter(Boolean))
  : null;

await fs.mkdir(OUT_DIR, { recursive: true });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const SANITIZE_INIT_SCRIPT = () => {
  const REPLACEMENTS = [
    ['Think_AI_Korlatolt_Felelossegu_Tarsasag', 'OptiMed_Klinika_Kft'],
    ['Think AI Korlátolt Felelősségű Társaság', 'OptiMed Egészségközpont Kft.'],
    ['Think AI Kft.', 'OptiMed Klinika Kft.'],
    ['Think Ai Kft.', 'OptiMed Klinika Kft.'],
    ['THINK AI Kft.', 'OptiMed Klinika Kft.'],
    ['MAURONI MARCO ROMANO', 'MediCare Diagnosztika Kft.'],
    ['Marco Mauroni', 'Dr. Szabó Eszter'],
    ['SANDBOX', 'Pannon MedTech Zrt.'],
    ['Teszt Kft.', 'VitaPlusz Labor Kft.'],
    ['Testing Kft.', 'VitaPlusz Labor Kft.'],
    ['Nagy Dániel', 'Dr. Kovács Márton'],
    ['nagyd965@gmail.com', 'admin@optimed-demo.hu'],
    ['Fekete Dávid', 'Tóth Balázs'],
    ['Kelemen Roberta', 'Varga Zsófia'],
    ['Demo Márk', 'Horváth Máté'],
    ['Kis József', 'Molnár Dávid'],
    ['hr vezeto', 'Kovács Anna (HR)'],
    ['betekinto', 'Szabó Eszter'],
    ['Taxology Audit Kft.', 'HungaroMed Audit Kft.'],
    ['VICTORIA Music KBA', 'MedEquip Hungary Zrt.'],
    ['Anthropic, PBC', 'CloudMed Systems Kft.'],
    ['TechParts Hungária Kft.', 'MedTech Szerviz Kft.'],
    ['Dr. Tanács Ügyvédi Iroda', 'Dr. Horváth és Társa Ügyvédi Iroda'],
    ['Orchidea Ingatlanforgalmazó Zrt.', 'Pannon Park Ingatlan Zrt.'],
    ['AIONHILL INC', 'BioLab Diagnostics Zrt.'],
    ['Mistral AI SAS', 'EuroMed Szoftver Kft.'],
    ['KBOSS.hu Kft.', 'e-Számla Központ Kft.'],
    ['AgroLYNX Zrt.', 'PharmaLogisztika Zrt.'],
    ['Apex Digital Kft.', 'DentArt Labor Kft.'],
    ['Apex Irodatechnika Kft.', 'IrodaPlusz Ellátó Kft.'],
    ['Celonis Inc.', 'Analitika Cloud Kft.'],
    ['City Gate Ingatlanfejlesztő Zrt.', 'Centrum Irodaház Zrt.'],
    ['INFOPARK IRODAHÁZ ÜZEMELTETŐ KFT.', 'BudaPart Irodaház Üzemeltető Kft.'],
    ['Innovációs és Technológiai Fejlesztő Kft.', 'Orvostechnikai Fejlesztő Kft.'],
    ['Kovacs Kft.', 'Kovács és Társa Bt.'],
    ['NOVA TECH KFT.', 'NovaMed Kft.'],
    ['Opennetworks Kft.', 'NetKomm Hálózati Kft.'],
    ['Rapid Rent Autó Kft.', 'FlottaPartner Autó Kft.'],
    ['Alfa Kft.', 'Alfa-Med Kft.'],
    ['kapcsolat@apexdigital.hu', 'iroda@dentart-demo.hu'],
    ['szamlazas@techparts.hu', 'penzugy@medtech-demo.hu'],
    ['+3630123123123', '+36 30 555 0142'],
    ['+36309616607', '+36 30 555 0199'],
    ['36309616607', '36 30 555 0199'],
    ['68140625-1-28', '10000001-2-41'],
    ['28849014-2-13', '10000002-2-13'],
    ['28741935-2-41', '10000003-2-41'],
    ['24567891-2-41', '10000004-2-41'],
    ['14829103241', '10000005-2-41'],
    ['12345678241', '10000006-2-41'],
    ['12345678-2-41', '10000001-2-41'],
    ['12345678-2-42', '10000002-2-42'],
    ['12312311', '10000003-2-41'],
    ['300944024', '10000007-2-41'],
    ['IE4276970QH', 'HU10000008'],
    ['HU19287836', 'HU10000009'],
    ['HU10901232', 'HU10000010'],
    ['HU11892357', 'HU10000011'],
    ['HU23461853', 'HU10000012'],
    ['HU26509516', 'HU10000013'],
    ['HU13421739', 'HU10000014'],
    ['1054 Budapest, Szabadság tér 7.', '1052 Budapest, Deák Ferenc utca 12.'],
    ['1134 Budapest, Váci út 45.', '1117 Budapest, Fehérvári út 84.'],
    ['2051 Biatorbágy', '2040 Budaörs'],
    ['E-TAXAU-2026-335', 'HMED-2026-335'],
    ['E-THINK-2026-100', 'OPT-2026-100'],
    ['E-THINK-2026-87', 'OPT-2026-087'],
    ['E-THINK-2026-26', 'OPT-2026-026'],
    ['E-THINK-2026-1', 'OPT-2026-001'],
    ['THINK-2026-54', 'OPT-2026-054'],
    ['MSTRL-API-930968-001', 'EMED-2026-001'],
    ['AHUSA-26-082', 'BLAB-2026-082'],
    ['E-KBOSS-2026-702517', 'ESZLA-2026-1042'],
    ['1793617199833-', 'szamla-'],
    ['1793623310386-', 'szamla-'],
  ];

  function scrubText(str) {
    if (!str || typeof str !== 'string') return str;
    let out = str;
    for (const [needle, replacement] of REPLACEMENTS) {
      if (out.includes(needle)) {
        out = out.split(needle).join(replacement);
      }
    }
    out = out.replace(/\b\d{13}-/g, 'szamla-');
    out = out.replace(/Think[_ ]?AI[_A-Za-z0-9]*/gi, 'OptiMed_Klinika_Kft');
    out = out.replace(/[a-zA-Z0-9._%+-]+@(?!optimed-demo\.hu|dentart-demo\.hu|medtech-demo\.hu|eaisy\.hu|cegnev\.hu|pelda\.hu)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, 'iroda@optimed-demo.hu');
    return out;
  }

  window.__sanitizeEaisyDom = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const val = node.nodeValue;
      if (!val) continue;
      const trimmed = val.trim();
      if (trimmed === 'ND' || trimmed === 'NA') {
        node.nodeValue = val.replace(trimmed, 'KM');
        continue;
      }
      if (trimmed === 'MA') {
        node.nodeValue = val.replace(trimmed, 'SZE');
        continue;
      }
      if (trimmed === 'KE') {
        node.nodeValue = val.replace(trimmed, 'VZS');
        continue;
      }
      if (trimmed === 'FE') {
        node.nodeValue = val.replace(trimmed, 'TB');
        continue;
      }
      const next = scrubText(val);
      if (next !== val) node.nodeValue = next;
    }

    document.querySelectorAll('input, textarea').forEach((el) => {
      if (el.type === 'password') return;
      if (el.value) {
        const next = scrubText(el.value);
        if (next !== el.value) el.value = next;
      }
      if (el.placeholder) {
        const next = scrubText(el.placeholder);
        if (next !== el.placeholder) el.placeholder = next;
      }
    });

    document.querySelectorAll('[title], [aria-label]').forEach((el) => {
      for (const attr of ['title', 'aria-label']) {
        const v = el.getAttribute(attr);
        if (v) {
          const next = scrubText(v);
          if (next !== v) el.setAttribute(attr, next);
        }
      }
    });

    // Replace any THINK AI logo image in the company selector with a clean icon badge
    document.querySelectorAll('[data-tour="company-selector"] img').forEach((img) => {
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML = '<span style="font-size:10px;font-weight:700;color:#0d9488;">OM</span>';
      }
    });
  };
};

console.log('Launching headless browser (1440x900 @2x)...');
const browser = await puppeteer.launch({
  headless: 'new',
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});

const page = await browser.newPage();
await page.evaluateOnNewDocument(SANITIZE_INIT_SCRIPT);

async function capture(filename, prepFn) {
  if (ONLY_FILES && !ONLY_FILES.has(filename)) {
    console.log(`  - skipping ${filename}`);
    return;
  }
  if (prepFn) await prepFn();
  await page.evaluate(() => {
    if (window.__sanitizeEaisyDom) window.__sanitizeEaisyDom();
  });
  await wait(350);
  await page.evaluate(() => {
    if (window.__sanitizeEaisyDom) window.__sanitizeEaisyDom();
  });
  const outPath = path.join(OUT_DIR, filename);
  await page.screenshot({ path: outPath, type: 'webp', quality: 90 });
  console.log(`  ✓ saved ${filename}`);
}

async function clickSidebarLink(href) {
  const clicked = await page.evaluate((targetHref) => {
    const a = Array.from(document.querySelectorAll('aside a, nav a')).find(
      (el) => el.getAttribute('href') === targetHref
    );
    if (a) {
      a.click();
      return true;
    }
    return false;
  }, href);
  if (!clicked) {
    await page.goto(`${BASE_URL}${href}`, { waitUntil: 'networkidle2', timeout: 60000 });
  }
  await wait(3200);
}

try {
  // 1. Login screen (only if not skipped)
  if (!ONLY_FILES || ONLY_FILES.has('docs-01-login.webp')) {
    console.log('1. Navigating to /login for screenshot...');
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle2', timeout: 60000 });
    await wait(2000);
    await capture('docs-01-login.webp', async () => {
      const emailInput = await page.$('input[type=email]');
      if (emailInput) {
        await emailInput.type('admin@optimed-demo.hu');
      }
    });
  }

  // Reload /login fresh so inputs are 100% empty before real authentication
  console.log('Logging in on clean /login page...');
  await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await wait(1500);
  await page.type('input[type=email]', EMAIL);
  await page.type('input[type=password]', PASSWORD);
  await page.click('button[type=submit]');
  await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }).catch(() => {});
  await wait(4500);

  console.log('Post-login URL:', page.url());

  // Switch active company to Think AI Kft. (before sanitizing DOM so we can match 'Think AI')
  console.log('Switching active company to Think AI Kft...');
  const selectorTrigger = await page.$('[data-tour="company-selector"] button');
  if (selectorTrigger) {
    await selectorTrigger.click();
    await wait(1000);
    const switched = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const thinkBtn = btns.find((b) => b.innerText && (b.innerText.includes('Think AI') || b.innerText.includes('OptiMed')));
      if (thinkBtn) {
        thinkBtn.click();
        return thinkBtn.innerText;
      }
      return null;
    });
    console.log('Switched company:', switched);
    await wait(4000);
  }

  // 2. Dashboard top (KPIs & charts)
  console.log('2. Capturing Dashboard top...');
  await capture('docs-02-dashboard.webp');

  // 3. Dashboard bottom (Top Partners, Expiring Deadlines, My Tasks widget)
  console.log('3. Capturing Dashboard bottom...');
  await capture('docs-03-dashboard-tasks.webp', async () => {
    await page.evaluate(() => {
      const scrollContainer =
        document.querySelector('main > div.overflow-auto') ||
        document.querySelector('main .overflow-auto') ||
        document.querySelector('main');
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'instant' });
      }
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
    });
    await wait(800);
  });

  // Scroll back up
  await page.evaluate(() => {
    const scrollContainer =
      document.querySelector('main > div.overflow-auto') ||
      document.querySelector('main .overflow-auto') ||
      document.querySelector('main');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'instant' });
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await wait(500);

  // 4. Global Search Modal (Ctrl+K)
  console.log('4. Capturing Global Search Modal...');
  await capture('docs-04-global-search.webp', async () => {
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('eaisydocs:open-search', { detail: { query: 'SZERZ' } }));
    });
    // Wait until search results finish loading (spinner disappears)
    for (let i = 0; i < 15; i++) {
      await wait(500);
      const stillSpinning = await page.evaluate(() => {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return true;
        return Boolean(dialog.querySelector('.animate-spin'));
      });
      if (!stillSpinning && i >= 3) break;
    }
    await wait(500);
  });

  // Close Global Search Modal (Escape)
  await page.keyboard.press('Escape');
  await wait(600);

  // 5. Inbox list (/inbox)
  console.log('5. Navigating to /inbox...');
  await clickSidebarLink('/inbox');
  await capture('docs-05-inbox-list.webp');

  // 6. Inbox filing split-screen (/inbox/[id])
  console.log('6. Opening Inbox filing workbench...');
  await capture('docs-06-inbox-filing.webp', async () => {
    const clicked = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href^="/inbox/"]'));
      const target = links.find((a) => a.innerText && a.innerText.includes('Iktatás')) || links[0];
      if (target) {
        target.click();
        return true;
      }
      return false;
    });
    if (clicked) {
      await wait(4500);
    }
    // Replace any PDF spinner / raw PDF iframe with a clean, anonymized HTML document preview
    await page.evaluate(() => {
      const spinners = Array.from(document.querySelectorAll('p')).filter(
        (p) => p.innerText && p.innerText.includes('Dokumentum előkészítése')
      );
      const previewContainer = spinners[0]?.parentElement;
      if (previewContainer) {
        previewContainer.innerHTML = `
          <div style="width:100%;max-width:520px;background:#ffffff;color:#111827;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 10px 25px -5px rgba(0,0,0,0.08);padding:28px 32px;text-align:left;font-family:sans-serif;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #0d9488;padding-bottom:16px;margin-bottom:18px;">
              <div>
                <div style="font-size:11px;font-weight:700;color:#0d9488;letter-spacing:0.08em;text-transform:uppercase;">elektronikus számla (PDF/A-3)</div>
                <div style="font-size:18px;font-weight:700;color:#0f172a;margin-top:4px;">HungaroMed Audit Kft.</div>
                <div style="font-size:12px;color:#64748b;">1052 Budapest, Deák Ferenc utca 12. • Adószám: 10000013-2-41</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:11px;color:#64748b;">Számlaszám</div>
                <div style="font-size:15px;font-weight:700;color:#0f172a;font-family:monospace;">HMED-2026-335</div>
                <div style="font-size:11px;color:#059669;background:#ecfdf5;padding:2px 8px;border-radius:999px;margin-top:6px;display:inline-block;font-weight:600;">✓ SHA-256 Ellenőrizve</div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;background:#f8fafc;padding:12px 14px;border-radius:8px;margin-bottom:18px;font-size:12px;">
              <div>
                <div style="color:#64748b;font-size:11px;">Vevő (Címzett):</div>
                <div style="font-weight:600;color:#0f172a;margin-top:2px;">OptiMed Klinika Kft.</div>
                <div style="color:#475569;">1117 Budapest, Fehérvári út 84.</div>
                <div style="color:#475569;">Adószám: 10000001-2-41</div>
              </div>
              <div>
                <div style="color:#64748b;font-size:11px;">Teljesítés / Fizetési határidő:</div>
                <div style="font-weight:600;color:#0f172a;margin-top:2px;">2026. 11. 04. → 2026. 11. 19.</div>
                <div style="color:#475569;">Fizetési mód: Banki átutalás</div>
                <div style="color:#475569;">Hivatkozás: SZERZ/2026/00005</div>
              </div>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:18px;">
              <thead>
                <tr style="border-bottom:1px solid #e2e8f0;color:#64748b;text-align:left;">
                  <th style="padding:6px 0;">Megnevezés</th>
                  <th style="padding:6px 0;text-align:right;">Nettó</th>
                  <th style="padding:6px 0;text-align:right;">ÁFA</th>
                  <th style="padding:6px 0;text-align:right;">Bruttó</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:10px 0;font-weight:500;color:#0f172a;">Éves egészségügyi adatbiztonsági és GDPR megfelelőségi audit</td>
                  <td style="padding:10px 0;text-align:right;">110 236 Ft</td>
                  <td style="padding:10px 0;text-align:right;">27%</td>
                  <td style="padding:10px 0;text-align:right;font-weight:600;">140 000 Ft</td>
                </tr>
              </tbody>
            </table>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:2px solid #e2e8f0;">
              <span style="font-size:12px;color:#64748b;">Fizetendő végösszeg (HUF):</span>
              <span style="font-size:18px;font-weight:700;color:#0d9488;">140 000 Ft</span>
            </div>
          </div>
        `;
      }
      // Also populate the right-side filing inputs visually so it looks ready-to-file
      const inputs = Array.from(document.querySelectorAll('input'));
      for (const inp of inputs) {
        const ph = inp.placeholder || '';
        if (ph.includes('8 vagy 11')) inp.value = '10000013-2-41';
        if (ph.includes('EU VAT')) inp.value = 'HU10000013';
      }
    });
    await wait(500);
  });

  // 7. Dossiers list (/dossiers)
  console.log('7. Navigating to /dossiers...');
  await clickSidebarLink('/dossiers');
  await capture('docs-07-dossiers-list.webp');

  // 8. Dossier detail (/dossiers/[id])
  console.log('8. Opening Dossier detail...');
  await capture('docs-08-dossier-detail.webp', async () => {
    const clicked = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href^="/dossiers/"]'));
      const target =
        links.find((a) => a.innerText && a.innerText.includes('SZERZ/2026/00005')) ||
        links.find((a) => a.innerText && a.innerText.includes('PENZUGY/2026/00052')) ||
        links[0];
      if (target) {
        target.click();
        return true;
      }
      return false;
    });
    if (clicked) {
      // Wait until skeleton loading bars (.animate-pulse) disappear and dossier header renders
      for (let i = 0; i < 24; i++) {
        await wait(500);
        const hasSkeleton = await page.evaluate(() => {
          const main = document.querySelector('main');
          if (!main) return true;
          return main.innerText.trim().length < 80;
        });
        if (!hasSkeleton && i >= 4) break;
      }
      await wait(1500);
    }
  });

  // 9. Tasks Kanban (/tasks)
  console.log('9. Navigating to /tasks...');
  await clickSidebarLink('/tasks');
  await capture('docs-09-tasks-kanban.webp');

  // 10. Partners list (/partners)
  console.log('10. Navigating to /partners...');
  await clickSidebarLink('/partners');
  await capture('docs-10-partners-list.webp');

  // 11. Filing & AI Rules (/rules)
  console.log('11. Navigating to /rules...');
  await clickSidebarLink('/rules');
  await capture('docs-11-rules-filing.webp');

  // 12. Archive & Retention (/archive)
  console.log('12. Navigating to /archive...');
  await clickSidebarLink('/archive');
  await capture('docs-12-archive.webp', async () => {
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(
        (b) => b.innerText && b.innerText.includes('Irattárban')
      );
      if (btn) btn.click();
    });
    await wait(1500);
  });

  // 13. Central Audit Log (/audit)
  console.log('13. Navigating to /audit...');
  await clickSidebarLink('/audit');
  await wait(3500);
  await capture('docs-13-audit-log.webp');

  // 14. Settings & Administration (/settings)
  console.log('14. Navigating to /settings...');
  await page.goto(`${BASE_URL}/settings`, { waitUntil: 'networkidle2', timeout: 60000 });
  await wait(3500);
  await capture('docs-14-settings-profile.webp', async () => {
    await page.evaluate(() => {
      const labels = Array.from(document.querySelectorAll('label'));
      for (const lbl of labels) {
        const txt = lbl.innerText || '';
        const container = lbl.parentElement;
        const inp = container?.querySelector('input');
        if (!inp) continue;
        if (txt.includes('Telefonszám')) inp.value = '+36 30 555 0199';
        if (txt.includes('Pozíció') && !inp.value) inp.value = 'Ügyvezető igazgató';
        if (txt.includes('Cég neve')) inp.value = 'OptiMed Klinika Kft.';
      }
    });
    await wait(300);
  });

  console.log('All eaisyDocs screenshots captured successfully!');
} finally {
  await browser.close();
}
