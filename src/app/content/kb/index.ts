import type { ProductKnowledgeBase, KbArticle } from "./types";
import { eaisyDeskKb } from "./eaisy-desk";

export const eaisyBillKb: ProductKnowledgeBase = {
  slug: "eaisy-bill",
  name: "eaisyBill",
  tagline: "Automatikus számlázás, NAV Online Számla szinkron és intelligens pénzügyi előkészítés.",
  description:
    "Az eaisyBill összeköti az értékesítést a pénzüggyel: pillanatok alatt kiállítja a belföldi és devizás számlákat, díjbekérőket és sztornókat, valós időben szinkronizál a NAV Online Számla 3.0 rendszerrel, és automatikus fizetési emlékeztetőkkel gyorsítja a bevételek beérkezését.",
  productRoute: "/eaisy-bill",
  appUrl: "https://bill.eaisy.hu",
  status: "live",
  version: "1.8",
  updatedAt: "2026. október",
  theme: {
    accent: "#16F27F",
    secondary: "#139D5D",
    dark: "#08321F",
    softBg: "#EFFDF7",
  },
  roles: [
    {
      role: "admin",
      label: "Cégvezető / Pénzügyi Admin",
      summary: "Teljes hozzáférés a számlatömbökhöz, NAV technikai felhasználó beállításához, banki szinkronhoz és könyvelői exporthoz.",
    },
    {
      role: "member",
      label: "Számlázó munkatárs",
      summary: "Díjbekérők és számlák kiállítása, partnertörzs kezelése, fizetési státuszok ellenőrzése.",
    },
  ],
  categories: [
    {
      id: "szamlazas-alapok",
      title: "Számlakiállítás & NAV szinkron",
      description: "Számla, díjbekérő, előleg- és sztornószámla kiállítása, valamint NAV Online Számla 3.0 összekötés.",
      icon: "FileText",
    },
    {
      id: "automatizacio-penzugy",
      title: "Banki párosítás & Automatizáció",
      description: "Ismétlődő számlázás, automatikus fizetési emlékeztetők és bejövő utalások párosítása.",
      icon: "RefreshCw",
    },
  ],
  articles: [
    {
      slug: "szamlakiallitas-dijbekero-es-nav-szinkron",
      title: "Számlakiállítás, díjbekérők és NAV Online Számla összekötés",
      subtitle: "Hogyan állíts ki e-számlát és díjbekérőt másodpercek alatt, és hogyan kösd össze fiókodat a NAV Online Számla 3.0 rendszerrel.",
      categoryId: "szamlazas-alapok",
      readingTimeMinutes: 5,
      roles: ["admin", "member"],
      accessSummary: "Minden eaisyBill felhasználó számára elérhető.",
      summary:
        "Az eaisyBill a számlakiállítás teljes folyamatát automatizálja: a cégadatokat adószám vagy cégnév alapján automatikusan lekéri, a kiállított bizonylatot valós időben beküldi a NAV Online Számla rendszerbe, és PKI-hitelesített e-számlaként továbbítja a vevőnek.",
      sections: [
        {
          id: "nav-online-szamla-osszekotes",
          title: "1. NAV Online Számla 3.0 technikai felhasználó bekötése",
          description:
            "Az első számla kiállítása előtt kapcsold össze az eaisyBill fiókodat a NAV Online Számla rendszerben létrehozott technikai felhasználóval.",
          steps: [
            {
              title: "Technikai felhasználó adatainak rögzítése",
              description:
                "Nyisd meg a **Beállítások → NAV Online Számla** menüpontot, és másold be a NAV portálon generált **Technikai felhasználónév**, **Jelszó**, **XML aláírókulcs** és **XML cserekulcs** mezőket.",
            },
            {
              title: "Kapcsolat tesztelése",
              description:
                "Kattints a **NAV kapcsolat ellenőrzése** gombra. Sikeres teszt esetén a státusz `Élő kapcsolat (NAV 3.0)` jelzésre vált, és minden kiállított számla 2 másodpercen belül automatikusan jelentésre kerül.",
            },
          ],
        },
        {
          id: "uj-szamla-es-dijbekero-kiallitasa",
          title: "2. Új számla, díjbekérő és sztornószámla kiállítása",
          description:
            "A bizonylatkészítő űrlap élő előnézettel és automatikus ÁFA/deviza számítással működik.",
          steps: [
            {
              title: "Partner kiválasztása adószám-alapú automata kitöltéssel",
              description:
                "Kattints az **+ Új bizonylat** gombra, és kezdd el gépelni a vevő nevét vagy adószámát a **Partner** mezőbe. A rendszer a hivatalos cégjegyzékből és a NAV adatbázisból automatikusan kitölti a székhelyet és az adószámot.",
            },
            {
              title: "Tételek, devizanem és ÁFA-kulcs megadása",
              description:
                "Válassz a mentett **Termék / Szolgáltatás törzs** elemeiből, vagy adj meg egyedi tételt. Devizás számla (EUR, USD, GBP, CHF) esetén a rendszer automatikusan lekéri az MNB napi középárfolyamot.",
            },
            {
              title: "Díjbekérő automatikus számlává alakítása",
              description:
                "Ha először **Díjbekérőt** állítasz ki, a banki utalás beérkezésekor (vagy a **Számla kiállítása díjbekérőből** gombra kattintva) az eaisyBill egyetlen kattintással végleges számlát generál és elküldi a vevőnek.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan tudok hibásan kiállított számlát javítani?",
          answer:
            "A már lezárt számlát a jogszabályoknak megfelelően nem lehet felülírni, azonban a bizonylat sorában a „Sztornózás” vagy „Helyesbítő számla” gombra kattintva 1 kattintással elkészítheted a sztornóbizonylatot, majd a „Másolat készítése” gombbal azonnal kiállíthatod a javított számlát.",
        },
      ],
      relatedSlugs: ["ismetlodo-szamlazas-es-fizetesi-emlekeztetok"],
    },
    {
      slug: "ismetlodo-szamlazas-es-fizetesi-emlekeztetok",
      title: "Ismétlődő számlázás, banki párosítás és fizetési emlékeztetők",
      subtitle: "Havidíjas előfizetések automatikus számlázása, késedelmes kintlévőségek követése és könyvelői adatátadás.",
      categoryId: "automatizacio-penzugy",
      readingTimeMinutes: 4,
      roles: ["admin", "member"],
      accessSummary: "Automatizáció és Pénzügy modulok.",
      summary:
        "Az ismétlődő számlázási szabályokkal és a háromlépcsős fizetési emlékeztetőkkel nullára csökkentheted a havi adminisztrációt és a késedelmes fizetéseket.",
      sections: [
        {
          id: "ismetlodo-szamlak-utemezese",
          title: "Ismétlődő (havidíjas) számlák beállítása",
          description:
            "Állandó partnerek vagy előfizetéses szolgáltatások esetén állíts be automatikus számlázási ütemezést.",
          steps: [
            {
              title: "Gyakoriság és küldési mód kiválasztása",
              description:
                "Az **Ismétlődő számlák → + Új szabály** ablakban válaszd ki a partnert, a tételeket és az ütemezést (`Hetente`, `Havonta`, `Negyedévente`, `Évente`), majd kapcsold be az **Automatikus kiküldés e-mailben** opciót.",
            },
            {
              title: "Automatikus fizetési emlékeztetők",
              description:
                "A **Beállítások → Fizetési emlékeztetők** menüpontban beállíthatod, hogy a fizetési határidő lejárta előtt 1 nappal, majd lejárat után 3 és 10 nappal a rendszer udvarias emlékeztető e-mailt küldjön a csatolt számlával.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Átkerülnek a kiállított számláim az eaisyBooks könyvelési rendszerbe?",
          answer:
            "Igen, az eaisyBill és az eaisyBooks natívan össze van kötve: minden kiállított kimenő számla és fizetési státusz-változás valós időben, emberi export-import nélkül megjelenik az eaisyBooks könyvelési modulban.",
        },
      ],
      relatedSlugs: ["szamlakiallitas-dijbekero-es-nav-szinkron"],
    },
  ],
};

export const eaisyBooksKb: ProductKnowledgeBase = {
  slug: "eaisy-books",
  name: "eaisyBooks",
  tagline: "AI-alapú könyvelés-előkészítés, OCR bizonylatfelismerés és valós idejű pénzügyi áttekintés.",
  description:
    "Az eaisyBooks automatikusan összegyűjti és OCR mesterséges intelligenciával feldolgozza a bejövő számlákat, nyugtákat és bankkivonatokat, költséghelyekre sorolja a kiadásokat, előre jelzi az ÁFA-fizetési kötelezettséget, és egyetlen kattintással könyvelő-kész csomagot állít elő.",
  productRoute: "/eaisy-books",
  appUrl: "https://books.eaisy.hu",
  status: "live",
  version: "1.5",
  updatedAt: "2026. október",
  theme: {
    accent: "#1BB3F5",
    secondary: "#137EA8",
    dark: "#082936",
    softBg: "#EFFBFF",
  },
  roles: [
    {
      role: "admin",
      label: "Cégvezető / Könyvelő",
      summary: "Teljes hozzáférés a cash-flow és ÁFA előrejelzésekhez, banki szinkronhoz, jóváhagyási szabályokhoz és könyvelői exporthoz.",
    },
    {
      role: "member",
      label: "Adminisztrátor / Feltöltő",
      summary: "Bejövő számlák és nyugták feltöltése, költségkategóriák és projektek hozzárendelése.",
    },
  ],
  categories: [
    {
      id: "bizonylat-ocr",
      title: "Bejövő számlák & AI OCR",
      description: "Számlák és nyugták automatikus adatfelismerése, e-mailes beküldés és költségkategorizálás.",
      icon: "ScanLine",
    },
    {
      id: "cashflow-konyveles",
      title: "Cash-flow, ÁFA & Könyvelői központ",
      description: "Valós idejű eredménykimutatás, várható ÁFA-egyenleg és könyvelői export.",
      icon: "BarChart3",
    },
  ],
  articles: [
    {
      slug: "bejovo-szamlak-ai-ocr-es-koltsegkategorizalas",
      title: "Bejövő számlák automatikus AI OCR feldolgozása és kategorizálása",
      subtitle: "Hogyan olvassa ki az AI a PDF és fotózott számlák adatait, és hogyan tanulja meg a cég egyedi költséghelyeit.",
      categoryId: "bizonylat-ocr",
      readingTimeMinutes: 5,
      roles: ["admin", "member"],
      accessSummary: "Bejövő bizonylatok modul.",
      summary:
        "Az eaisyBooks megszünteti a kézi adatrögzítést: a NAV Online Számla rendszerből automatikusan lehúzza a belföldi költségszámlákat, a külföldi (pl. Google, Meta, AWS, Adobe) PDF-számlákat és a fotózott blokkokat pedig AI OCR motorral dolgozza fel.",
      sections: [
        {
          id: "szamlak-bekuldese-es-ocr",
          title: "Háromféle automatikus bizonylat-beérkeztetés",
          description:
            "A bejövő bizonylatok egyetlen központi postafiókba érkeznek, ahol az AI azonnal kiolvassa a kibocsátót, az adószámot, a tételeket, az ÁFA-kulcsokat és a fizetési határidőt.",
          steps: [
            {
              title: "1. Automatikus NAV bejövő számla szinkron",
              description:
                "Minden belföldi szállító által a céged adószámára kiállított számla másodperceken belül automatikusan megjelenik a **Bejövő számlák** listában.",
            },
            {
              title: "2. Dedikált beküldő e-mail cím és Drag-and-Drop feltöltés",
              description:
                "A külföldi szoftver- és szolgáltatói számlákat továbbítsd a céged egyedi `@be.eaisybooks.hu` címére, vagy húzd be őket csoportosan a **Bizonylat feltöltése** zónába.",
            },
            {
              title: "3. Költséghely és projekt hozzárendelés",
              description:
                "Az AI a korábbi döntéseid alapján automatikusan felkínálja a **Költségkategória** (pl. *Marketing*, *Szoftver*, *Bérleti díj*, *Alapanyag*) és a **Projekt / Telephely** címkét, amelyet 1 kattintással jóváhagyhatsz.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan jutnak el az ellenőrzött bizonylatok a könyvelőmhöz?",
          answer:
            "A könyvelőd saját meghívott hozzáféréssel közvetlenül beléphet az eaisyBooks Könyvelői központba, vagy a „Könyvelői export” gombbal egyetlen ZIP/XML/CSV csomagban letöltheti az adott hónap összes bizonylatát és kontírozási előkészítését.",
        },
      ],
      relatedSlugs: ["cash-flow-es-afa-elorejelzes"],
    },
    {
      slug: "cash-flow-es-afa-elorejelzes",
      title: "Valós idejű Cash-flow és ÁFA-előrejelzés",
      subtitle: "Lásd előre a hónap végi ÁFA-egyenleget és a várható pénzáramlást még a bevallási határidő előtt.",
      categoryId: "cashflow-konyveles",
      readingTimeMinutes: 4,
      roles: ["admin"],
      accessSummary: "Pénzügyi áttekintés modul (Admin).",
      summary:
        "Az eaisyBooks az eaisyBill kimenő számláit és a beérkezett költségszámlákat összevetve naprakész képet ad a fizetendő/visszaigényelhető ÁFA egyenlegről és a következő 30–90 napos likviditásról.",
      sections: [
        {
          id: "afa-kalkulator-es-likviditas",
          title: "ÁFA-egyenleg és kintlévőség-monitor",
          description:
            "A vezetői műszerfalon bármelyik pillanatban ellenőrizheted az időszaki eredményt.",
          steps: [
            {
              title: "Időszaki ÁFA-mérleg megtekintése",
              description:
                "Az **ÁFA összesítő** kártya valós időben mutatja a fizetendő (kimenő) és a levonható (bejövő) ÁFA különbözetét a választott havi vagy negyedéves bevallási ciklusra.",
            },
          ],
        },
      ],
      faqs: [],
      relatedSlugs: ["bejovo-szamlak-ai-ocr-es-koltsegkategorizalas"],
    },
  ],
};

export const eaisyBoostKb: ProductKnowledgeBase = {
  slug: "eaisy-boost",
  name: "eaisyBoost",
  tagline: "AI-vezérelt marketingkampányok, hirdetésoptimalizálás és automatizált tartalomgyártás.",
  description:
    "Az eaisyBoost összekapcsolja a közösségi média posztgenerálást, a fizetett hirdetéskezelést (Meta, Google Ads) és a konverziómérést: a márkád hangján készít posztokat és vizuális kreatívokat, miközben valós időben méri a kampányok megtérülését.",
  productRoute: "/eaisy-boost",
  appUrl: "https://boost.eaisy.hu",
  status: "live",
  version: "1.4",
  updatedAt: "2026. október",
  theme: {
    accent: "#FA3DF7",
    secondary: "#A61EA4",
    dark: "#320831",
    softBg: "#FFF0FE",
  },
  roles: [
    {
      role: "admin",
      label: "Marketingvezető / Admin",
      summary: "Hirdetési fiókok összekapcsolása, költségkeretek jóváhagyása, márkaidentitás (Brand Kit) beállítása.",
    },
    {
      role: "member",
      label: "Tartalomgyártó / Kampánymenedzser",
      summary: "Posztok, hirdetésszövegek és kreatívok generálása, naptárba ütemezése.",
    },
  ],
  categories: [
    {
      id: "ai-tartalom-hirdetes",
      title: "AI Tartalomgyártás & Kampánykezelés",
      description: "Márkaazonos közösségi média posztok, hirdetésszövegek, ütemezett publikálás és ROAS analitika.",
      icon: "Sparkles",
    },
  ],
  articles: [
    {
      slug: "ai-tartalomnaptar-es-hirdetesoptimalizalas",
      title: "AI Tartalomnaptár, Brand Kit és többcsatornás hirdetésoptimalizálás",
      subtitle: "Hogyan tanítsd be a márkád arculatát, és hogyan generálj egy teljes havi közösségi média és hirdetési tervet percek alatt.",
      categoryId: "ai-tartalom-hirdetes",
      readingTimeMinutes: 5,
      roles: ["admin", "member"],
      accessSummary: "Tartalomnaptár és Kampányok modulok.",
      summary:
        "Az eaisyBoost a vállalkozásod Brand Kitje (színek, betűtípusok, kommunikációs stílus, célcsoport) alapján készít szöveges és vizuális posztokat, valamint automatikusan optimalizálja a hirdetési kereteket a legjobban konvertáló kreatívok javára.",
      sections: [
        {
          id: "brand-kit-es-posztgeneralas",
          title: "1. Márkaidentitás (Brand Kit) és havi tartalomterv generálása",
          description:
            "A Brand Kit egyszeri kitöltése után minden generált poszt és hirdetés illeszkedik a cég hangvételéhez.",
          steps: [
            {
              title: "Brand Kit felépítése",
              description:
                "A **Márkaidentitás** menüpontban add meg a weboldalad URL-jét: az AI automatikusan kinyeri a márkaszíneket, a logót, a fő értékajánlatokat és a hangnemet.",
            },
            {
              title: "Tartalomnaptár és automatikus időzítés",
              description:
                "A **Tartalomnaptár → + AI Kampányterv** gombbal válaszd ki a célplatformokat (Facebook, Instagram, LinkedIn, Google Ads), és hagyd jóvá az elkészült posztokat a kívánt publikálási időpontokra.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Összeköthető az eaisyBoost az eaisyDesk érdeklődőkezelőjével?",
          answer:
            "Igen! A hirdetésekből érkező érdeklődők (kampányleadek) automatikusan bekerülhetnek az eaisyDesk Ügyfelek és Érdeklődőkezelés (Kanban) moduljába, ahol az AI asszisztens azonnal felveszi velük a kapcsolatot.",
        },
      ],
      relatedSlugs: [],
    },
  ],
};

export const KNOWLEDGE_BASES: ProductKnowledgeBase[] = [
  eaisyDeskKb,
  eaisyBillKb,
  eaisyBooksKb,
  eaisyBoostKb,
];

export function getKnowledgeBaseBySlug(slug: string): ProductKnowledgeBase | undefined {
  return KNOWLEDGE_BASES.find((kb) => kb.slug === slug);
}

export interface GlobalSearchResult {
  product: ProductKnowledgeBase;
  article: KbArticle;
  matchedIn: string;
}

export function searchAllKnowledgeBases(query: string): GlobalSearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results: GlobalSearchResult[] = [];

  for (const product of KNOWLEDGE_BASES) {
    for (const article of product.articles) {
      const inTitle = article.title.toLowerCase().includes(q);
      const inSubtitle = article.subtitle.toLowerCase().includes(q);
      const inSummary = article.summary.toLowerCase().includes(q);
      const inSections = article.sections.some(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          (s.steps && s.steps.some((st) => st.title.toLowerCase().includes(q) || st.description.toLowerCase().includes(q))) ||
          (s.uiElements && s.uiElements.some((u) => u.label.toLowerCase().includes(q) || u.description.toLowerCase().includes(q)))
      );
      const inFaq = article.faqs.some(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      );

      if (inTitle || inSubtitle || inSummary || inSections || inFaq) {
        results.push({
          product,
          article,
          matchedIn: inTitle
            ? "Cikk címe"
            : inSubtitle || inSummary
            ? "Összefoglaló"
            : inFaq
            ? "Gyakori kérdések"
            : "Lépésről lépésre útmutató",
        });
      }
    }
  }

  return results;
}
