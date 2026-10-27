---
name: eaisy-kb-generator
description: Automatikus, szubagens-alapú Tudásbázis (Knowledge Base) generáló munkafolyamat („Eaisy KB Factory”) az eaisy szoftvercsalád bármely tagjához. Használd mindig, amikor a felhasználó megad egy GitHub repót (és opcionálisan egy élő/staging URL-t + teszt belépési adatokat), hogy elkészüljön vagy frissüljön az adott szoftver funkciónkénti, anonimizált képernyőképekkel támogatott magyar nyelvű dokumentációja a /tudasbazis felületen.
---

# Eaisy KB Factory — Szubagens-alapú Tudásbázis Generáló Munkafolyamat

Ez a skill biztosítja, hogy bármely eaisy szoftverhez (`eaisyDesk`, `eaisyBill`, `eaisyBooks`, `eaisyBoost`, `eaisyDocs`, `eaisyCRM`, `eaisyHR`, `eaisyWork`) **100%-os kód-lefedettségű, 0% PII-szivárgású**, nagyfelbontású (`.webp`) képernyőképekkel támogatott magyar nyelvű dokumentáció készüljön a `/tudasbazis/:productSlug` útvonalak alatt.

---

## 5 lépéses kötelező munkafolyamat

### 1. lépés — Forráskód klónozása & Útvonaltérkép (Reconnaissance)
1. Klónozd a megadott GitHub repót (és a kért branchet) a beszélgetés `scratch/` könyvtárába.
2. Térképezd fel a router fájlt (`App.tsx` / `routes.ts`), az oldalkomponenseket (`src/pages/**`), a modális ablakokat (`src/components/**`) és a szerepkör-ellenőrzéseket (`Admin` vs. `Member`).
3. Ha van élő/staging URL, futtasd le az API-felderítést, hogy kigyűjtsd az összes maszkolandó valós bérlői nevet, címet, e-mailt, telefonszámot és munkatársnevet.

### 2. lépés — Párhuzamos modul-elemzés (`kb_module_analyst` szubagensek)
Indíts párhuzamosan 3–4 `kb_module_analyst` szubagenst modulcsoportonként. Minden szubagens feladata:
- Kiolvasni a pontos magyar UI-feliratokat, gombszövegeket, űrlapmezőket, placeholder szövegeket, üres állapotokat és toast üzeneteket a forráskódból.
- Dokumentálni a jogosultsági különbségeket (`Admin` vs. `Munkatárs`).
- Leírni a lépésről lépésre munkafolyamatokat, a felületi elemek szótárát (`uiElements`), a státuszjelvényeket (`statusBadges`) és a gyakori kérdéseket (`faqs`).

### 3. lépés — On-the-fly API + DOM maszkolás és Puppeteer képernyőkép-készítés
Készíts (vagy adaptáld a `scripts/kb-capture-desk.mjs` mintájára) egy Puppeteer szkriptet (`scripts/kb-capture-<product>.mjs`), amely:
1. `2880×1800` (1440×900 `@2x` Retina) felbontásban megnyitja a szoftvert.
2. `page.evaluateOnNewDocument(INJECT_MASKING_SCRIPT)` segítségével **még a React renderelés előtt** eltéríti a `window.fetch` hívásokat:
   - Minden valós ügyfélnevet, hívónevet (`participant`, `client_name`, `caller_name`, `sender_name`), e-mailt, telefonszámot, naplórészletet (`diary_fragment`, `transcript_turns`) és kampánycímet egységes magyar demó-perszónákra cserél:
     - Cég: `OptiMed Egészségközpont Kft.` / `OptiMed Klinika`
     - Cím: `1052 Budapest, Deák Ferenc utca 12.`
     - Ügyfelek: `Kovács Anna`, `Nagy Péter`, `Szabó Eszter`, `Tóth Balázs`, `Varga Zsófia`, `Horváth Máté`, `Kiss Nóra`, `Molnár Dávid` (`@pelda.hu`, `+36 30 555 ...`)
     - Munkatársak: `Dr. Kovács Márton`, `Dr. Szabó Eszter`, `Dr. Horváth Dániel`, `Dr. Tóth Gábor`, `Dr. Kiss Bence`, `Molnár Réka` (`@optimed-demo.hu`)
3. A `window.__sanitizeEaisyDom()` függvénnyel minden képernyőkép előtt átfésüli a szöveges DOM-csomópontokat (`TreeWalker`), az `<input>` / `<textarea>` `.value` értékeket és az avatar monogramokat.
4. `sharp` segítségével `quality: 90` `.webp` formátumba menti a képeket a `public/kb/<product-slug>/` mappába.

### 4. lépés — Vision QA & PII Audit (`kb_vision_auditor` szubagens)
Minden elkészült `.webp` képernyőképet vizsgáltass át a `kb_vision_auditor` szubagenssel (`read_file` képmegtekintéssel):
- **Kritikus szabály:** Ha bármelyik képen akár 1 db valódi ügyfélnév, orvosnév, bérlői cím vagy rosszul megnyitott fül látható (`FAIL`), frissítsd a maszkoló szkriptet, és `ONLY_FILES=...` környezeti változóval generáld újra az érintett képeket, majd ellenőriztesd újra, amíg **100% PASS** nem lesz.

### 5. lépés — Publikálás a Tudásbázis adatmodellbe és Build-ellenőrzés
1. Írd meg vagy frissítsd a `src/app/content/kb/<product-slug>.ts` fájlt a `ProductKnowledgeBase` típus (`src/app/content/kb/types.ts`) szerint.
2. Regisztráld a szoftvert a `src/app/content/kb/index.ts` `KNOWLEDGE_BASES` tömbjében és a `scripts/prerender.mjs` `ROUTES` listájában.
3. Futtasd a `npm run build` parancsot a teljes Vite + Prerender ellenőrzéshez.
