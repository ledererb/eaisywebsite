import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/kb/eaisy-desk');
fs.mkdirSync(OUT_DIR, { recursive: true });

const ONLY_FILES = process.env.ONLY_FILES ? process.env.ONLY_FILES.split(',') : null;
const shouldCapture = (name) => !ONLY_FILES || ONLY_FILES.includes(name);
const CUSTOM_MASK_RULES_JSON = process.env.KB_MASK_RULES_JSON || '[]';

/**
 * Browser-side injection script:
 * 1. Overrides localStorage user/tenant info if present
 * 2. Intercepts window.fetch for all /admin/api/* and /admin/login endpoints
 *    and deterministically replaces real tenant/doctor/client PII with realistic Hungarian demo data.
 * 3. Provides window.__sanitizeEaisyDom() for final DOM sweep prior to screenshot.
 */
const INJECT_MASKING_SCRIPT = `
(() => {
  const DEMO_CLIENTS = [
    { id: 101, name: 'Kovács Anna', email: 'kovacs.anna@pelda.hu', phone: '+36 30 555 0142', status: 'aktiv', channel: 'Telefon', summary: 'Időpontfoglalás éves szakorvosi állapotfelmérésre és konzultációra.', topic: 'Időpontfoglalás — Állapotfelmérés' },
    { id: 102, name: 'Nagy Péter', email: 'nagy.peter@pelda.hu', phone: '+36 20 555 0198', status: 'uj', channel: 'E-mail', summary: 'Árajánlatot és részletes tájékoztatást kért komplex diagnosztikai csomag kapcsán.', topic: 'Árkérdés — Diagnosztikai csomag' },
    { id: 103, name: 'Szabó Eszter', email: 'szabo.eszter@pelda.hu', phone: '+36 70 555 0234', status: 'vip', channel: 'Messenger', summary: 'Sürgős panasz miatt kért soron kívüli szakorvosi időpontot holnap délelőttre.', topic: 'Sürgős megkeresés — Soron kívüli vizsgálat' },
    { id: 104, name: 'Tóth Balázs', email: 'toth.balazs@pelda.hu', phone: '+36 30 555 0311', status: 'aktiv', channel: 'WhatsApp', summary: 'Jövő heti kontroll időpontjának módosítását kérte délutáni idősávra.', topic: 'Időpontmódosítás — Kontrollvizsgálat' },
    { id: 105, name: 'Varga Zsófia', email: 'varga.zsofia@pelda.hu', phone: '+36 20 555 0456', status: 'uj', channel: 'Instagram', summary: 'Kezelési terv menetéről és részletfizetési lehetőségről érdeklődött.', topic: 'Tájékoztatás — Kezelési terv' },
    { id: 106, name: 'Horváth Máté', email: 'horvath.mate@pelda.hu', phone: '+36 30 555 0589', status: 'aktiv', channel: 'Telefon', summary: 'Teljes körű kivizsgálásra és konzultációra foglalt időpontot péntek 10:00-ra.', topic: 'Időpontfoglalás — Szakorvosi konzultáció' },
    { id: 107, name: 'Kiss Nóra', email: 'kiss.nora@pelda.hu', phone: '+36 70 555 0612', status: 'visszatero', channel: 'E-mail', summary: 'Vizsgálat utáni teendőkkel és kontroll időponttal kapcsolatban kért tanácsot.', topic: 'Szakmai kérdés — Kezelés utáni teendők' },
    { id: 108, name: 'Molnár Dávid', email: 'molnar.david@pelda.hu', phone: '+36 20 555 0745', status: 'uj', channel: 'Telefon', summary: 'Első szakorvosi konzultációra kért időpontot a jövő hétre.', topic: 'Időpontfoglalás — Első konzultáció' },
  ];

  // Optional external replacement dictionary passed via process.env.KB_MASK_RULES_JSON
  const CUSTOM_RULES = __CUSTOM_MASK_RULES__;

  const TEXT_REPLACEMENTS = [
    ...CUSTOM_RULES.map(([pattern, replacement]) => [new RegExp(pattern, 'gi'), replacement]),
  ];

  function cleanString(str) {
    if (typeof str !== 'string') return str;
    let out = str;
    for (const [regex, replacement] of TEXT_REPLACEMENTS) {
      out = out.replace(regex, replacement);
    }
    out = out.replace(/[a-zA-Z0-9._%+-]+@(?!pelda\\.hu|minta\\.hu|optimed-demo\\.hu|optimed-klinika\\.hu|thinkai\\.hu|eaisy\\.hu)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g, 'ugyfel@pelda.hu');
    out = out.replace(/(?:\\+36|06)\\s*(?:20|30|70|1)[\\s\\-]*\\d{3}[\\s\\-]*\\d{4}/g, (m) => m.includes('555') ? m : '+36 30 555 0142');
    return out;
  }

  function sanitizeInteraction(item, idx) {
    if (!item || typeof item !== 'object') return item;
    const demo = DEMO_CLIENTS[idx % DEMO_CLIENTS.length];
    const copy = { ...item };
    copy.id = 1000 + idx;
    copy.session_id = 'session_demo_' + (idx + 1);
    copy.client_id = demo.id;
    copy.participant = demo.name;
    copy.caller_name = demo.name;
    copy.client_name = demo.name;
    copy.sender_name = demo.name;
    copy.from_name = demo.name;
    copy.name = demo.name;
    copy.email = demo.email;
    copy.caller_phone = demo.phone;
    copy.phone = demo.phone;
    copy.topic = demo.topic;
    copy.summary = demo.summary;
    copy.diary_fragment = '[2026. 10. 27. 10:15] Ügyfél (' + demo.name + '): ' + demo.summary;
    copy.transcript = 'AI Asszisztens: Üdvözlöm! Az OptiMed Klinika virtuális recepciósa vagyok. Miben segíthetek?\\nÜgyfél (' + demo.name + '): ' + demo.summary + '\\nAI Asszisztens: Természetesen, máris ellenőrzöm a szabad időpontokat és rögzítem a kérést.';
    copy.transcript_turns = [
      { role: 'ai', text: 'Üdvözlöm! Az OptiMed Klinika virtuális recepciósa vagyok. Miben segíthetek?', start_s: 1 },
      { role: 'user', text: demo.summary, start_s: 6 },
      { role: 'ai', text: 'Természetesen, máris ellenőrzöm a szabad időpontokat és előkészítem a visszaigazolást.', start_s: 14 },
    ];
    if (copy.classification && typeof copy.classification === 'object') {
      copy.classification = {
        ...copy.classification,
        osszefoglalas: demo.summary,
        teendo: idx < 2 ? 'Időpont jóváhagyása' : 'Nincs teendő',
      };
    }
    copy.ai_draft_response = JSON.stringify({
      channel: 'Email',
      to_email: demo.email,
      to_name: demo.name,
      subject: 'Visszaigazolás és tájékoztatás — ' + demo.topic.replace(/^.*?—\\s*/, ''),
      body: 'Kedves ' + demo.name + '!\\n\\nKöszönjük megkeresését! Megkeresését rögzítettük rendszerünkben.\\n\\n' + demo.summary + '\\n\\nAmennyiben további kérdése merülne fel, állunk rendelkezésére!\\n\\nÜdvözlettel,\\nOptiMed Klinika Ügyfélszolgálat'
    });
    return copy;
  }

  const origFetch = window.fetch.bind(window);
  window.fetch = async function(input, init) {
    const res = await origFetch(input, init);
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    if (!url.includes('/admin/')) return res;

    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) return res;

    try {
      const cloned = res.clone();
      let data = await cloned.json();

      if (url.includes('/admin/login')) {
        if (data && typeof data === 'object') {
          data.username = data.role === 'admin' ? 'optimed_admin' : 'optimed_recepcio';
          data.full_name = data.role === 'admin' ? 'OptiMed Admin' : 'OptiMed Recepció';
          data.tenant_name = 'OptiMed Klinika';
        }
      } else if (url.includes('/admin/api/interactions/grouped')) {
        if (data && Array.isArray(data.sessions)) {
          data.sessions = data.sessions.slice(0, 8).map((s, i) => {
            const demo = DEMO_CLIENTS[i % DEMO_CLIENTS.length];
            return {
              ...s,
              session_id: 'session_demo_' + (i + 1),
              participant: demo.name,
              client_name: demo.name,
              summary: demo.summary,
              representative: sanitizeInteraction(s.representative, i),
              items: Array.isArray(s.items) ? s.items.map((it) => sanitizeInteraction(it, i)) : undefined,
            };
          });
        }
      } else if (url.includes('/admin/api/interactions')) {
        if (data && Array.isArray(data.interactions)) {
          data.interactions = DEMO_CLIENTS.map((_, i) => sanitizeInteraction(data.interactions[i] || data.interactions[0] || {}, i));
        } else if (Array.isArray(data)) {
          data = DEMO_CLIENTS.map((_, i) => sanitizeInteraction(data[i] || data[0] || {}, i));
        }
      } else if (url.includes('/admin/api/clients')) {
        const list = Array.isArray(data?.clients) ? data.clients : (Array.isArray(data) ? data : []);
        const mapped = DEMO_CLIENTS.map((d, i) => ({
          ...(list[i] || {}),
          id: d.id,
          name: d.name,
          email: d.email,
          phone: d.phone,
          status: d.status,
          source_channel: d.channel,
          tags: i % 2 === 0 ? ['Időpont', 'Aktív'] : ['Érdeklődő'],
          notes: d.summary,
          custom_data: JSON.stringify({
            name: d.name,
            email: d.email,
            phone: d.phone,
            telefonszam: d.phone,
            assigned_to: i % 2 === 0 ? 'Dr. Kovács Márton' : 'Dr. Szabó Eszter',
            tags: i % 2 === 0 ? ['ajánlatkérés', 'VIP'] : ['árkérdés'],
            forras_csatorna: d.channel,
            beszelgetes_naplo: '[2026-10-27 10:15] ' + d.summary
          })
        }));
        if (Array.isArray(data?.clients)) data.clients = mapped;
        else data = mapped;
      } else if (url.includes('/admin/api/campaigns')) {
        const demoCampaigns = [
          {
            id: 301,
            name: 'Őszi egészségügyi szűrőprogram (-15%)',
            status: 'Aktív',
            channels: ['email'],
            channel: 'email',
            client_ids: [101, 102, 103, 104, 105],
            created_at: '2026-10-20T09:30:00Z',
            processed_count: 5,
            total_count: 5,
            subject: 'Őszi komplex állapotfelmérés 15% kedvezménnyel az OptiMed Klinikán',
            content: 'Kedves Ügyfelünk! Október és november folyamán 15% kedvezménnyel várjuk éves komplex szakorvosi szűrővizsgálatunkra.',
            created_by: 'OptiMed Admin',
          },
          {
            id: 302,
            name: 'Éves kontrollvizsgálat emlékeztető',
            status: 'Vázlat',
            channels: ['email'],
            channel: 'email',
            client_ids: [106, 107, 108],
            created_at: '2026-10-25T14:15:00Z',
            processed_count: 0,
            total_count: 3,
            subject: 'Emlékeztető: esedékes éves szakorvosi kontrollvizsgálat',
            content: 'Kedves Ügyfelünk! Szeretnénk emlékeztetni, hogy elérkezett az éves kontrollvizsgálat ideje.',
            created_by: 'OptiMed Admin',
          },
        ];
        if (Array.isArray(data?.campaigns)) data.campaigns = demoCampaigns;
        else if (Array.isArray(data)) data = demoCampaigns;
      } else if (url.includes('/admin/api/business-info')) {
        data = {
          ...(data || {}),
          company_name: 'OptiMed Egészségközpont Kft.',
          business_name: 'OptiMed Egészségközpont Kft.',
          industry: 'Magánklinika és diagnosztikai központ',
          specialization: 'Belgyógyászat, kardiológia, bőrgyógyászat, szakorvosi diagnosztika, laborvizsgálatok',
          description: 'Az OptiMed Egészségközpont korszerű szakorvosi diagnosztikát, komplex állapotfelmérést és személyre szabott kezelési terveket kínál budapesti rendelőjében, várakozási idő nélkül.',
          service_description: 'Az OptiMed Egészségközpont korszerű szakorvosi diagnosztikát, komplex állapotfelmérést és személyre szabott kezelési terveket kínál budapesti rendelőjében, várakozási idő nélkül.',
          phone: '+36 1 555 0100',
          email: 'info@optimed-demo.hu',
          website: 'https://optimed-demo.hu',
          address: '1052 Budapest, Deák Ferenc utca 12. II. em.',
          parking: 'M1, M2, M3 metróval a Deák Ferenc téri megállótól 2 perc sétára; fizető parkolás a környező utcákban és az Erzsébet téri mélygarázsban.',
          sender_name: 'OptiMed Klinika',
          sender_email: 'info@optimed-demo.hu',
          locations: [
            {
              name: 'OptiMed Központi Rendelő',
              type: 'Rendelő',
              zip: '1052',
              city: 'Budapest',
              address: '1052 Budapest, Deák Ferenc utca 12. II. em.',
              street: 'Deák Ferenc utca 12.',
              floor: 'II. em. 4.',
              directions: 'M1, M2, M3 metróval a Deák Ferenc téri megállótól 2 perc sétára; parkolás az Erzsébet téri mélygarázsban.',
              parking: 'M1, M2, M3 metróval a Deák Ferenc téri megállótól 2 perc sétára; parkolás az Erzsébet téri mélygarázsban.'
            }
          ]
        };
      } else if (url.includes('/admin/api/users')) {
        if (data && Array.isArray(data.data)) {
          data.data = [
            { id: 1, username: 'optimed_admin', full_name: 'OptiMed Admin', email: 'admin@optimed-demo.hu', role: 'admin', last_login: '2026-10-27T09:15:00Z' },
            { id: 2, username: 'kovacs.anna', full_name: 'Kovács Anna', email: 'kovacs.anna@optimed-demo.hu', role: 'member', last_login: '2026-10-27T08:45:00Z' },
            { id: 3, username: 'nagy.peter', full_name: 'Nagy Péter', email: 'nagy.peter@optimed-demo.hu', role: 'member', last_login: '2026-10-26T16:20:00Z' },
            { id: 4, username: 'dr.kovacs.marton', full_name: 'Dr. Kovács Márton', email: 'kovacs.marton@optimed-demo.hu', role: 'admin', last_login: '2026-10-26T14:10:00Z' },
          ];
        }
      } else if (url.includes('/admin/api/calendar')) {
        const baseEvents = [
          { id: 501, title: 'Állapotfelmérés - Kovács Anna', start_dt: '2026-10-26T09:00:00+01:00', end_dt: '2026-10-26T09:45:00+01:00', duration_minutes: 45, attendee: 'Kovács Anna', attendee_email: 'kovacs.anna@pelda.hu', attendee_phone: '+36 30 555 0142', doctor: 'Dr. Kovács Márton', status: 'confirmed', reminder_sent: true, note: 'AI által rögzített foglalás' },
          { id: 502, title: 'Szakorvosi konzultáció - Nagy Péter', start_dt: '2026-10-27T10:30:00+01:00', end_dt: '2026-10-27T11:00:00+01:00', duration_minutes: 30, attendee: 'Nagy Péter', attendee_email: 'nagy.peter@pelda.hu', attendee_phone: '+36 20 555 0198', doctor: 'Molnár Réka', status: 'confirmed', reminder_sent: true, note: 'Első vizsgálat' },
          { id: 503, title: 'Soron kívüli vizsgálat - Szabó Eszter', start_dt: '2026-10-27T14:00:00+01:00', end_dt: '2026-10-27T14:45:00+01:00', duration_minutes: 45, attendee: 'Szabó Eszter', attendee_email: 'szabo.eszter@pelda.hu', attendee_phone: '+36 70 555 0234', doctor: 'Dr. Horváth Dániel', status: 'confirmed', reminder_sent: false, note: 'Sürgős triázs alapján' },
          { id: 504, title: 'Kontrollvizsgálat - Tóth Balázs', start_dt: '2026-10-28T11:00:00+01:00', end_dt: '2026-10-28T11:30:00+01:00', duration_minutes: 30, attendee: 'Tóth Balázs', attendee_email: 'toth.balazs@pelda.hu', attendee_phone: '+36 30 555 0311', doctor: 'Dr. Tóth Gábor', status: 'confirmed', reminder_sent: true, note: 'Kezelés utáni kontroll' },
          { id: 505, title: 'Diagnosztikai konzultáció - Varga Zsófia', start_dt: '2026-10-29T15:00:00+01:00', end_dt: '2026-10-29T15:45:00+01:00', duration_minutes: 45, attendee: 'Varga Zsófia', attendee_email: 'varga.zsofia@pelda.hu', attendee_phone: '+36 20 555 0456', doctor: 'Dr. Kovács Márton', status: 'pending', reminder_sent: false, note: '24 órás fenntartás' },
          { id: 506, title: 'Komplex szűrővizsgálat - Horváth Máté', start_dt: '2026-10-30T09:30:00+01:00', end_dt: '2026-10-30T10:15:00+01:00', duration_minutes: 45, attendee: 'Horváth Máté', attendee_email: 'horvath.mate@pelda.hu', attendee_phone: '+36 30 555 0589', doctor: 'Dr. Kiss Bence', status: 'confirmed', reminder_sent: true, note: 'Teljes státusz' },
        ];
        if (data && Array.isArray(data.events)) data.events = baseEvents;
        else data = { events: baseEvents };
      } else {
        data = JSON.parse(cleanString(JSON.stringify(data)));
      }

      return new Response(JSON.stringify(data), {
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
      });
    } catch (e) {
      return res;
    }
  };

  window.__sanitizeEaisyDom = function() {
    // 1. Clean text nodes
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (node.nodeValue && node.nodeValue.trim()) {
        const cleaned = cleanString(node.nodeValue);
        if (cleaned !== node.nodeValue) node.nodeValue = cleaned;
      }
    }
    // 2. Clean input/textarea values and placeholders
    document.querySelectorAll('input, textarea').forEach((el) => {
      if (el.value) {
        const c = cleanString(el.value);
        if (c !== el.value) el.value = c;
      }
    });
    // 3. Update avatar initials
    document.querySelectorAll('.user-avatar, .team-avatar, [class*="avatar"]').forEach((el) => {
      const t = (el.textContent || '').trim();
      if (t === 'DA') el.textContent = 'OA';
      if (t === 'DR') el.textContent = 'OR';
      if (t === 'TK') el.textContent = 'KA';
      if (t === 'FH') el.textContent = 'NP';
      if (t === 'LC') el.textContent = 'SE';
    });
    // 4. Hide cookie banner if visible
    document.querySelectorAll('.cookie-consent-banner, [class*="cookie"]').forEach((el) => {
      el.style.display = 'none';
    });
  };
})();
`;

async function snap(page, filename, { clip, fullPage = false } = {}) {
  await page.evaluate(() => {
    if (window.__sanitizeEaisyDom) window.__sanitizeEaisyDom();
  });
  await new Promise((r) => setTimeout(r, 300));
  const buf = await page.screenshot({ type: 'png', fullPage, clip });
  const outPath = path.join(OUT_DIR, filename);
  await sharp(buf).webp({ quality: 90 }).toFile(outPath);
  console.log('✓ Captured:', filename);
}

const browser = await puppeteer.launch({
  headless: 'shell',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  // ── PART 1: Admin Session ──
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.evaluateOnNewDocument(INJECT_MASKING_SCRIPT.replace('__CUSTOM_MASK_RULES__', CUSTOM_MASK_RULES_JSON));

  await page.goto('https://desk.eaisy.hu/admin', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));
  if (shouldCapture('desk-01-login.webp')) {
    await snap(page, 'desk-01-login.webp');
  }

  // Perform Admin Login
  await page.type('#login-email', process.env.KB_ADMIN_USER || 'admin_user');
  const pwInput = (await page.$('#login-password')) || (await page.$('input[type="password"]'));
  await pwInput.type(process.env.KB_ADMIN_PASS || '');
  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 4500));

  if (shouldCapture('desk-02-analytics-overview.webp') || shouldCapture('desk-03-analytics-funnel.webp') || shouldCapture('desk-18-command-palette.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/analytics', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    if (shouldCapture('desk-02-analytics-overview.webp')) await snap(page, 'desk-02-analytics-overview.webp');

    if (shouldCapture('desk-03-analytics-funnel.webp')) {
      await page.evaluate(() => {
        const main = document.querySelector('.main-content, main, .page.active') || window;
        if (main === window) window.scrollBy(0, 620);
        else main.scrollTop = 620;
        window.scrollBy(0, 620);
      });
      await new Promise((r) => setTimeout(r, 1000));
      await snap(page, 'desk-03-analytics-funnel.webp');
    }

    if (shouldCapture('desk-18-command-palette.webp')) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.keyboard.down('Control');
      await page.keyboard.press('KeyK');
      await page.keyboard.up('Control');
      await new Promise((r) => setTimeout(r, 800));
      await snap(page, 'desk-18-command-palette.webp');
      await page.keyboard.press('Escape');
      await new Promise((r) => setTimeout(r, 400));
    }
  }

  // 5 & 6. Interactions List & Detail Drawer
  if (shouldCapture('desk-05-interactions-list.webp') || shouldCapture('desk-06-interactions-detail.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/interactions', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    if (shouldCapture('desk-05-interactions-list.webp')) await snap(page, 'desk-05-interactions-list.webp');

    if (shouldCapture('desk-06-interactions-detail.webp')) {
      const openedDetail = await page.evaluate(() => {
        const btn = document.querySelector('.interaction-row, tbody tr, [class*="interaction-card"], button[title*="Részletek"], .btn-details');
        if (btn) {
          btn.click();
          return true;
        }
        return false;
      });
      if (openedDetail) {
        await new Promise((r) => setTimeout(r, 1500));
        await snap(page, 'desk-06-interactions-detail.webp');
        await page.keyboard.press('Escape');
        await new Promise((r) => setTimeout(r, 500));
      }
    }
  }

  // 7 & 8. Clients List & Profile
  if (shouldCapture('desk-08-clients-list.webp') || shouldCapture('desk-09-client-profile.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/clients', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    if (shouldCapture('desk-08-clients-list.webp')) await snap(page, 'desk-08-clients-list.webp');

    if (shouldCapture('desk-09-client-profile.webp')) {
      const openedClient = await page.evaluate(() => {
        const row = document.querySelector('tbody tr, .client-card, .client-row, [class*="client-item"]');
        if (row) {
          row.click();
          return true;
        }
        return false;
      });
      if (openedClient) {
        await new Promise((r) => setTimeout(r, 1500));
        await snap(page, 'desk-09-client-profile.webp');
      }
    }
  }

  // 9. Kanban Board
  if (shouldCapture('desk-10-kanban-board.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/kanban', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    await snap(page, 'desk-10-kanban-board.webp');
  }

  // 10. Calendar
  if (shouldCapture('desk-11-calendar-week.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/calendar', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    await snap(page, 'desk-11-calendar-week.webp');
  }

  // 11 & 12. Outbound Campaigns & Wizard
  if (shouldCapture('desk-12-outbound-campaigns.webp') || shouldCapture('desk-13-outbound-wizard.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/outbound', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    if (shouldCapture('desk-12-outbound-campaigns.webp')) await snap(page, 'desk-12-outbound-campaigns.webp');

    if (shouldCapture('desk-13-outbound-wizard.webp')) {
      const openedWizard = await page.evaluate(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const newBtn = btns.find((b) => b.textContent && (b.textContent.includes('Új kampány') || b.textContent.includes('Kampány indítása')));
        if (newBtn) {
          newBtn.click();
          return true;
        }
        return false;
      });
      if (openedWizard) {
        await new Promise((r) => setTimeout(r, 1200));
        await snap(page, 'desk-13-outbound-wizard.webp');
        await page.keyboard.press('Escape');
        await new Promise((r) => setTimeout(r, 500));
      }
    }
  }

  // 13. Automatikus értesítések
  if (shouldCapture('desk-14-automatizaciok.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/automatizaciok', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    await snap(page, 'desk-14-automatizaciok.webp');
  }

  // 14. Tudástár — Céginformációk
  if (shouldCapture('desk-15-tudastar-ceginfo.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/settings/basic', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    await snap(page, 'desk-15-tudastar-ceginfo.webp');
  }

  // 15. Tudástár — Szabályok
  if (shouldCapture('desk-16-tudastar-szabalyok.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/settings/szabalyok', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    await snap(page, 'desk-16-tudastar-szabalyok.webp');
  }

  // 16. Beállítások & Csapat
  if (shouldCapture('desk-17-beallitasok-csapat.webp')) {
    await page.goto('https://desk.eaisy.hu/admin/beallitasok', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1800));
    await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('.beallitasok-tab, button'));
      const teamTab = tabs.find((b) => b.textContent && b.textContent.trim().includes('Csapat'));
      if (teamTab) teamTab.click();
    });
    await new Promise((r) => setTimeout(r, 1200));
    await snap(page, 'desk-17-beallitasok-csapat.webp');
  }

  await page.close();

  // ── PART 2: Member (Munkatárs) Session ──
  if (shouldCapture('desk-04-member-dashboard.webp')) {
    const memberContext = await browser.createBrowserContext();
    const mPage = await memberContext.newPage();
    await mPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await mPage.evaluateOnNewDocument(INJECT_MASKING_SCRIPT.replace('__CUSTOM_MASK_RULES__', CUSTOM_MASK_RULES_JSON));

    await mPage.goto('https://desk.eaisy.hu/admin', { waitUntil: 'networkidle2', timeout: 30000 });
    await mPage.waitForSelector('#login-email', { timeout: 10000 });
    await mPage.type('#login-email', process.env.KB_MEMBER_USER || 'member_user');
    const mPwInput = (await mPage.$('#login-password')) || (await mPage.$('input[type="password"]'));
    await mPwInput.type(process.env.KB_MEMBER_PASS || '');
    await mPage.click('button[type="submit"]');
    await new Promise((r) => setTimeout(r, 4500));

    await mPage.goto('https://desk.eaisy.hu/admin/dashboard', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));
    await snap(mPage, 'desk-04-member-dashboard.webp');

    await memberContext.close();
  }
} finally {
  await browser.close();
}
