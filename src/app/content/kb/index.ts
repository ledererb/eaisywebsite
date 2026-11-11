import type { ProductKnowledgeBase, KbArticle } from "./types";
import { eaisyDeskKb } from "./eaisy-desk";
import { eaisyDocsKb } from "./eaisy-docs";
import { eaisyHrKb } from "./eaisy-hr";
import { eaisyBooksKb } from "./eaisy-books";

export { eaisyBooksKb };

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
  eaisyDocsKb,
  eaisyHrKb,
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
