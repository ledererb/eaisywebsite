import type { ProductKnowledgeBase } from "./types";

export const eaisyDeskKb: ProductKnowledgeBase = {
  slug: "eaisy-desk",
  name: "eaisyDesk",
  tagline: "Mesterséges intelligenciával támogatott többcsatornás ügyfélszolgálat, recepció és időpontfoglaló rendszer.",
  description:
    "Az eaisyDesk egységes felületen kezeli a telefonos (Voice Agent), e-mailes, webchat és közösségi média (Facebook Messenger, Instagram, Viber, WhatsApp) megkereséseket. Automatikusan válaszol a céges tudástár alapján, időpontot foglal a naptárba, piszkozatokat készít a humán jóváhagyást igénylő ügyekhez, és nyomon követi az értékesítési utánkövetést.",
  productRoute: "/eaisy-desk",
  appUrl: "https://desk.eaisy.hu/admin",
  status: "live",
  version: "2.4 (rebuild)",
  updatedAt: "2026. október",
  theme: {
    accent: "#1CEEE0",
    secondary: "#186D98",
    dark: "#082432",
    softBg: "#EFFCFD",
  },
  roles: [
    {
      role: "admin",
      label: "Adminisztrátor (Admin)",
      summary:
        "Teljes hozzáférés a rendszer minden moduljához: vezetői Analitika, AI Tudástár (Céginformációk, Szabályok), Kampányindítás és -ütemezés, Automatikus értesítések, Csapatkezelés, Hitelesítő adatok (API integrációk) és Telefónia.",
    },
    {
      role: "member",
      label: "Munkatárs (Recepciós / Ügyintéző)",
      summary:
        "Operatív napi munkavégzésre optimalizált hozzáférés: saját Munkatársi Dashboard (teendőlisták), Interakciós napló és piszkozat-jóváhagyás, Ügyfelek 360°-os adatlapja, Érdeklődőkezelés (Kanban), Naptár és Kampánytervezetek készítése.",
    },
  ],
  categories: [
    {
      id: "alapok",
      title: "Alapok & Áttekintés",
      description: "Bejelentkezés, jogosultsági szintek, globális kereső, munkatársi teendők és vezetői analitika.",
      icon: "LayoutDashboard",
    },
    {
      id: "ugyfelkozpont",
      title: "Ügyfélközpont",
      description: "Bejövő hívások, e-mailek és chatek kezelése, 360°-os ügyfélprofilok, értékesítési Kanban és naptár.",
      icon: "Users",
    },
    {
      id: "kimeno",
      title: "Kimenő kommunikáció",
      description: "Célzott e-mail és SMS kampányok AI szövegvarázslóval, valamint eseményvezérelt automatikus értesítések.",
      icon: "Send",
    },
    {
      id: "tudastar-es-beallitasok",
      title: "AI Tudástár & Beállítások",
      description: "Az AI asszisztens betanítása (nyitvatartás, árlista, GYIK, foglalási szabályok), csapat, biztonság és integrációk.",
      icon: "Sliders",
    },
  ],
  articles: [
    // ─────────────────────────────────────────────────────────────────────────
    // 1. BEJELENTKEZÉS, NAVIGÁCIÓ ÉS JOGOSULTSÁGOK
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "bejelentkezes-navigacio-jogosultsagok",
      title: "Bejelentkezés, navigáció és jogosultságok",
      subtitle: "Hogyan lépj be az eaisyDesk felületére, hogyan működik a gyorskereső (Ctrl+K), az értesítési központ és a szerepkör-alapú menürendszer.",
      categoryId: "alapok",
      readingTimeMinutes: 5,
      roles: ["admin", "member"],
      accessSummary: "Minden regisztrált felhasználó számára elérhető a /admin útvonalon.",
      summary:
        "Az eaisyDesk webes adminisztrációs felülete a jogosultsági szintnek (Admin vagy Munkatárs) megfelelően építi fel a bal oldali navigációs sávot, és globális gyorskeresővel (Ctrl+K / ⌘K), valós idejű értesítési központtal, valamint automatikus inaktivitási védelemmel támogatja a biztonságos napi munkát.",
      PermissionMatrix: [
        { feature: "Munkatársi Dashboard (/admin/dashboard)", admin: true, member: true, note: "Az oldalsávban Munkatárs nézetben az elsődleges nyitóoldal" },
        { feature: "Vezetői Analitika (/admin/analytics)", admin: true, member: false, note: "Csak Adminisztrátorok számára látható" },
        { feature: "Interakciós napló, Ügyfelek, Érdeklődőkezelés, Naptár", admin: true, member: true, note: "Tömeges törlés és Kanban-oszlopkezelés csak Adminnak" },
        { feature: "Kampányok létrehozása (Tervezet)", admin: true, member: true, note: "Munkatárs tervezetet készíthet; éles indítás és ütemezés Admin-jogosultság" },
        { feature: "Automatikus értesítések (/admin/automatizaciok)", admin: true, member: false, note: "Időpont-visszaigazoló és emlékeztető sablonok kapcsolása" },
        { feature: "AI Tudástár: Céginformációk & Szabályok", admin: true, member: false, note: "Az AI asszisztens tudásbázisának és szabályainak szerkesztése" },
        { feature: "Beállítások: Profil és Biztonság", admin: true, member: true, note: "Saját név, profilkép, jelszó, munkamenet-időkorlát, GDPR export" },
        { feature: "Beállítások: Csapat, eaisyDesk, Hitelesítő adatok, Telefónia", admin: true, member: false, note: "Rendszerszintű konfiguráció és API kulcsok" },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-01-login.webp",
          alt: "eaisyDesk bejelentkezési felület és interaktív funkció-bemutató",
          caption: "Az eaisyDesk bejelentkezési képernyője: bal oldalon a hitelesítési űrlap, jobb oldalon az élő rendszerképességeket bemutató 4 lépéses interaktív kártyasor.",
        },
        {
          src: "/kb/eaisy-desk/desk-18-command-palette.webp",
          alt: "Globális gyorskereső (Command Palette) megnyitva",
          caption: "A Ctrl+K (Mac-en ⌘K) billentyűkombinációval bármelyik képernyőről megnyitható gyorskereső azonnal keres az oldalak, ügyfelek és interakciók között.",
        },
      ],
      sections: [
        {
          id: "bejelentkezes-es-jelszo-visszaallitas",
          title: "Bejelentkezés és elfelejtett jelszó visszaállítása",
          description:
            "A rendszerbe való belépéshez nyisd meg a böngészőben a vállalati eaisyDesk címet (alapértelmezetten `/admin`). A bejelentkezés után az Adminisztrátorok az **Analitika** oldalra, a Munkatársak pedig a napi operatív **Dashboard** felületre érkeznek.",
          steps: [
            {
              title: "Felhasználónév és jelszó megadása",
              description:
                "Írd be a kapott felhasználónevet a **Felhasználónév** mezőbe, majd a jelszót a **Jelszó** mezőbe. A jobb oldali szem ikonnal ellenőrizheted a beírt karaktereket, majd kattints a **Bejelentkezés** gombra.",
            },
            {
              title: "Elfelejtett jelszó igénylése",
              description:
                "Ha nem emlékszel a jelszavadra, kattints az **Elfelejtetted a jelszavad?** linkre. Add meg a fiókodhoz tartozó e-mail-címet a **Regisztrált email cím** mezőben, majd válaszd a **Visszaállító link küldése** gombot. A rendszer 1 óráig érvényes visszaállító linket küld.",
            },
            {
              title: "Új jelszó beállítása",
              description:
                "Az e-mailben kapott linkre kattintva add meg az **Új jelszó** (minimum 8 karakter) és az **Új jelszó megerősítése** mezőket, majd kattints a **Jelszó mentése** gombra.",
            },
          ],
          uiElements: [
            { label: "Felhasználónév", type: "Beviteli mező", description: "A felhasználó egyedi azonosítója (pl. kovacs.anna)." },
            { label: "Jelszó", type: "Beviteli mező", description: "Titkosított jelszómező, láthatóság-kapcsolóval." },
            { label: "Bejelentkezés", type: "Elsődleges gomb", description: "Hitelesíti a felhasználót és betölti a szerepkörnek megfelelő kezdőoldalt." },
            { label: "Elfelejtetted a jelszavad?", type: "Hivatkozás", description: "Átvált a jelszó-visszaállító űrlapra." },
          ],
        },
        {
          id: "oldalsav-gyorskereso-es-ertesitesek",
          title: "Oldalsáv, Gyorskereső (Ctrl+K) és Értesítési központ",
          description:
            "A bal oldali navigációs sáv (Sidebar) négy logikai csoportba rendezi a funkciókat: **Áttekintés**, **Ügyfélközpont**, **Kimenő kommunikáció** és **Tudástár**. A fejléc és az oldalsáv alja minden képernyőn azonnali elérést biztosít a legfontosabb globális eszközökhöz.",
          steps: [
            {
              title: "Globális gyorskereső (Command Palette) használata",
              description:
                "Nyomd le a `Ctrl+K` (Mac-en `⌘K`) billentyűkombinációt. A felugró keresőmezőben (`Keresés: ügyfél, interakció, oldal...`) már 2 leütött karakter után élőben megjelennek a találatok három kategóriában: **Oldalak**, **Ügyfelek** és **Interakciók**. A `↑`/`↓` nyilakkal lépegethetsz, az `Enter` billentyűvel pedig azonnal az adott elemre ugorhatsz.",
            },
            {
              title: "Értesítési központ (Notification Center)",
              description:
                "A felső sávban található harang ikon jelzi az olvasatlan rendszereseményeket (pl. új sürgős ügy, jóváhagyásra váró AI-piszkozat, foglalási esemény). Kattintásra megnyílik a legutóbbi értesítések listája; az **Összes olvasottnak jelölése** gombbal egyetlen kattintással nullázhatod a jelzőszámot.",
            },
            {
              title: "Témaváltás (Világos / Sötét mód) és Oldalsáv összecsukása",
              description:
                "Az oldalsáv alján lévő **Sötét mód** / **Világos mód** kapcsolóval bármikor válthatsz a két megjelenési téma között. Az **Összecsukás** gombbal kompakt ikon-sávvá keskenyítheted a menüt, hogy a táblázatoknak és a Kanban táblának több hely maradjon.",
            },
          ],
          tips: [
            {
              type: "tip",
              title: "Automatikus kijelentkezés inaktivitás esetén",
              text: "A rendszer az egészségügyi és üzleti adatok védelme érdekében figyeli a tétlenséget. A lejárat előtt 60 másodperccel figyelmeztető ablak jelenik meg („Munkamenet hamarosan lejár”), ahol a „Folytatom a munkát” gombbal meghosszabbíthatod a munkamenetet. Az időkorlát (5, 15, 30 vagy 60 perc) a Beállítások → Biztonság fülön szabható személyre.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Miért nem látom az Analitika vagy a Tudástár menüpontokat?",
          answer:
            "Ezek a modulok Adminisztrátori jogosultsághoz kötöttek. Ha Munkatárs (member) szerepkörrel léptél be, a rendszer az operatív napi munkavégzéshez szükséges modulokat (Dashboard, Interakciós napló, Ügyfelek, Érdeklődőkezelés, Naptár, Kampányok) jeleníti meg. Jogosultság-módosítást a cég Adminisztrátora tud végezni a Beállítások → Csapat fülön.",
        },
        {
          question: "Hogyan tudok a leggyorsabban rákeresni egy ügyfélre telefonszám vagy e-mail alapján?",
          answer:
            "Bármelyik oldalon állsz, nyomd le a Ctrl+K (vagy ⌘K) kombinációt, és kezdd el gépelni az ügyfél nevét, e-mail-címét vagy telefonszámát. A találatra nyomott Enter azonnal megnyitja az ügyfél adatlapját.",
        },
      ],
      relatedSlugs: ["munkatarsi-dashboard-napi-teendok", "vezetoi-analitika-es-riportok", "rendszerbeallitasok-csapat-biztonsag-telefonia"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 2. MUNKATÁRSI DASHBOARD ÉS NAPI TEENDŐK
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "munkatarsi-dashboard-napi-teendok",
      title: "Munkatársi Dashboard és napi teendők",
      subtitle: "A recepciós és ügyfélszolgálati munkatársak napi parancsnoki központja: sürgős ügyek, nyitott feladatok, mai időpontok és egykattintásos lezárás.",
      categoryId: "alapok",
      readingTimeMinutes: 5,
      roles: ["admin", "member"],
      accessSummary: "Munkatársaknak az oldalsáv első menüpontja (Dashboard); Adminoknak a /admin/dashboard címen érhető el.",
      summary:
        "A Munkatársi Dashboard kifejezetten a recepciós és ügyfélszolgálati csapat napi munkafolyamatára épül: egyetlen képernyőn összegzi a mai érkező ügyfeleket, a sürgős beavatkozást igénylő megkereséseket, a nyitott teendőket és a nap folyamán már elvégzett feladatokat.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-04-member-dashboard.webp",
          alt: "Munkatársi Dashboard a napi KPI kártyákkal és teendőtáblázatokkal",
          caption: "A Munkatársi Dashboard: napszaknak megfelelő üdvözlés, 4 élő KPI kártya (köztük a lenyitható Mai időpontok panel) és a háromszintű feladatlista.",
        },
      ],
      sections: [
        {
          id: "kpi-kartyak-es-mai-idopontok",
          title: "Napi összefoglaló kártyák és a Mai időpontok gyorsnézet",
          description:
            "Az oldal tetején a napszaknak megfelelő személyre szabott üdvözlés (`Jó reggelt`, `Szép napot` vagy `Jó estét`) és az aktuális dátum alatt 4 mutatókártya ad azonnali helyzetképet.",
          uiElements: [
            { label: "Nyitott teendők", type: "KPI kártya", description: "Az összes jelenleg lezáratlan (AI által átadott vagy kézi) feladat száma, külön kiemelve ebből a sürgős tételeket." },
            { label: "Sürgős teendők", type: "KPI kártya", description: "Az azonnali humán beavatkozást igénylő (pl. panasz, sürgős orvosi/üzleti eset, elakadt hívás) ügyek száma." },
            { label: "Mai időpontok", type: "Lenyitható KPI kártya", description: "Az aznapra rögzített naptári foglalások száma. Rákattintva közvetlenül a kártyák alatt lenyílik a napi előjegyzési lista." },
            { label: "Ma elvégzett", type: "KPI kártya", description: "A mai napon a csapat által sikeresen lezárt feladatok száma." },
          ],
          steps: [
            {
              title: "Mai időpontok gyors megtekintése oldalváltás nélkül",
              description:
                "Kattints a **Mai időpontok** kártyára (`Kattints a listához` / `Kattints a bezáráshoz`). A lenyíló panelben időrendben látod az aznapi érkezőket (időpont, ügyfél neve, szolgáltatás, időtartam és felelős munkatárs). Ha a teljes naptárra van szükséged, kattints a panel fejlécében a **Teljes naptár →** hivatkozásra.",
            },
          ],
        },
        {
          id: "teendotablazatok-es-elintezes",
          title: "Sürgős, Nyitott és Ma elvégzett teendők kezelése",
          description:
            "A Dashboard három külön szekcióba rendezi a feladatokat: **Sürgős teendők** (piros kiemeléssel legfelül), **Nyitott teendők**, valamint **Ma elvégzett**. A táblázatokban az AI által felismert teendők és az ügyfélprofilokon kézzel rögzített feladatok közös listában szerepelnek.",
          steps: [
            {
              title: "Ügy részleteinek vagy ügyfélprofilnak a megnyitása",
              description:
                "Kattints a táblázat bármelyik sorára: ha a teendő egy bejövő híváshoz, e-mailhez vagy chathez tartozik, megnyílik a jobb oldali **Interakció részletei** panel (ahol meghallgathatod a hívást vagy jóváhagyhatod az AI válaszpiszkozatát). Ha kézi teendőről van szó, a rendszer közvetlenül az ügyfél 360°-os adatlapjára navigál.",
            },
            {
              title: "Teendő megjelölése elvégzettként",
              description:
                "Ha egy feladatot elintéztél (pl. visszahívtad az ügyfelet), kattints a sor jobb szélén, az **Elvégezve** oszlopban található jelölőnégyzetre. A tétel azonnal átkerül a **Ma elvégzett** szekcióba, és a nyitott számláló csökken.",
            },
          ],
          uiElements: [
            { label: "Időpont", type: "Táblázatoszlop", description: "A megkeresés vagy kézi teendő beérkezési ideje (óra:perc és dátum)." },
            { label: "Csatorna", type: "Táblázatoszlop", description: "A kommunikációs csatorna ikonja és neve (Telefon, E-mail, Webchat, Messenger, Instagram, Viber, WhatsApp)." },
            { label: "Ügyfél", type: "Táblázatoszlop", description: "Az ügyfél neve (vagy ismeretlen hívó esetén a telefonszáma)." },
            { label: "Ügyfélstátusz", type: "Státusz badge", description: "Új ügyfél (türkiz) vagy Visszatérő ügyfél (sötétkék) jelvény." },
            { label: "Téma / AI összefoglaló", type: "Táblázatoszlop", description: "Az AI által felismert kategória és a konkrét teendő rövid leírása." },
            { label: "Felelős", type: "Táblázatoszlop", description: "Az ügyfélhez vagy feladathoz rendelt munkatárs neve." },
            { label: "Elvégezve", type: "Jelölőnégyzet", description: "Egykattintásos lezárás / újranyitás." },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi történik, ha véletlenül kipipálok egy még nem elintézett feladatot?",
          answer:
            "Semmi nem vész el: görgess le a Dashboard alján található „Ma elvégzett” táblázathoz, és kattints újra a sor jobb szélén lévő pipára. A feladat azonnal visszakerül a Nyitott (vagy Sürgős) teendők közé.",
        },
      ],
      relatedSlugs: ["interakcios-naplo-es-ai-piszkozatok", "ugyfelek-360-profil-es-duplikaciok", "naptar-es-idopontfoglalasok"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 3. VEZETŐI ANALITIKA ÉS RIPORTOK
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "vezetoi-analitika-es-riportok",
      title: "Vezetői Analitika és teljesítményriportok",
      subtitle: "Megkeresések időbeli alakulása, csatornamegoszlás, foglalási tölcsér, átadási okok, kritikus ügyek és AI finomhangolási javaslatok.",
      categoryId: "alapok",
      readingTimeMinutes: 6,
      roles: ["admin"],
      accessSummary: "Áttekintés → Analitika (/admin/analytics) — Csak Adminisztrátorok számára elérhető.",
      summary:
        "Az Analitika modul valós idejű vezetői áttekintést nyújt az ügyfélszolgálat és az AI asszisztens teljesítményéről: megmutatja az önállóan (humán beavatkozás nélkül) lezárt ügyek arányát, a csúcsidőszakokat, a legtöbb munkát adó kérdéstípusokat, a foglalási konverziót és a tudástár bővítésére vonatkozó AI-javaslatokat.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-02-analytics-overview.webp",
          alt: "Vezetői Analitika felső szűrősáv, 6 KPI kártya és időbeli trenddiagram",
          caption: "Az Analitika nyitóképernyője: telephely-, csatorna- és időszakszűrők, 6 kiemelt KPI kártya előző időszaki összehasonlítással, valamint a napi/órás megkeresési grafikon.",
        },
        {
          src: "/kb/eaisy-desk/desk-03-analytics-funnel.webp",
          alt: "Foglalási tölcsér, Átadási okok, Kritikus ügyek és AI finomhangolási javaslatok",
          caption: "Az Analitika alsó szekciói: 4 lépcsős foglalási tölcsér, átadási okok megoszlása, 5 kritikus ügy kártya és egykattintásos AI finomhangolási javaslatok.",
        },
      ],
      sections: [
        {
          id: "szurok-es-kpi-mutatok",
          title: "Globális szűrősáv és a 6 fő teljesítménymutató (KPI)",
          description:
            "Az oldal tetején található szűrősávval telephelyre, kommunikációs csatornára és időszakra (`Ma`, `Utolsó 7 nap`, `Utolsó 30 nap`, `Utolsó 90 nap` vagy `Egyéni időszak`) szűkítheted a kimutatásokat. A **Szűrés alkalmazása** gomb megnyomásakor minden kártya és diagram az adott szegmensre frissül, és százalékos eltéréssel (`vs előző időszak`) mutatja a trendet.",
          uiElements: [
            { label: "Összes megkeresés", type: "KPI kártya", description: "A kiválasztott időszakban beérkezett összes interakció száma, külön bontva az új és visszatérő ügyfeleket." },
            { label: "AI által lezárt", type: "KPI kártya", description: "Azon ügyek száma és százalékos aránya, amelyeket az eaisyDesk emberi beavatkozás nélkül, önállóan megoldott." },
            { label: "Munkatársnak átadva", type: "KPI kártya", description: "Emberi jóváhagyásra vagy visszahívásra továbbított ügyek száma (normál és sürgős bontásban)." },
            { label: "Időpontfoglalások", type: "KPI kártya", description: "A sikeresen rögzített új időpontok száma, valamint a módosítások és lemondások darabszáma." },
            { label: "Átl. válaszidő (e-mail)", type: "KPI kártya", description: "Az e-mailes megkeresésekre adott átlagos válaszidő másodpercben vagy percben." },
            { label: "Átl. hívásidő", type: "KPI kártya", description: "A telefonos (Voice Agent) beszélgetések átlagos időtartama és az összesített hívásperc." },
          ],
        },
        {
          id: "diagramok-es-foglalasi-tolcser",
          title: "Időbeli trendek, Csatornamegoszlás és Foglalási tölcsér",
          description:
            "A vizuális diagramok segítségével pontosan láthatod, mely napokon és órákban érkezik a legtöbb megkeresés, és hol morzsolódnak le az időpontot kereső ügyfelek.",
          steps: [
            {
              title: "Napi és Órás bontás, valamint Csatorna szerinti rétegzés",
              description:
                "A **Megkeresések időbeli alakulása** kártyán a **Napi** és **Órás** gombokkal válthatsz a hosszútávú trend és a napi csúcsidőszakok (00:00–23:00) között. Kapcsold be a **Csatorna szerinti bontás** jelölőnégyzetet, ha külön színnel szeretnéd látni a Telefon, E-mail, Webchat és Social csatornák arányát.",
            },
            {
              title: "Top kérdéstípusok és Átadási okok elemzése",
              description:
                "A **Top kérdéstípusok / témák** sávdiagram megmutatja, milyen témákban (pl. időpontfoglalás, árlista, nyitvatartás) keresik legtöbbször a céget, és témánként mekkora az AI önálló megoldási aránya. Mellette az **Átadási okok** diagram részletezi, miért kért az AI emberi segítséget (pl. egyedi szabály, hiányzó adat, összetett panasz).",
            },
            {
              title: "Foglalási tölcsér vizsgálata",
              description:
                "A **Foglalási tölcsér** 4 lépésben méri a konverziót: `1. Foglalási szándék` → `2. Szabad időpont felajánlva` → `3. Időpont megerősítve` → `4. Megjelent az időponton`. Mellette külön kártyák mutatják a teljes **Foglalási konverzió** és a **No-show arány** értékét.",
            },
          ],
        },
        {
          id: "kritikus-ugyek-es-finomhangolasi-javaslatok",
          title: "Kritikus ügyek áttekintése és AI Finomhangolási javaslatok",
          description:
            "Az Analitika nemcsak múltbeli számokat mutat, hanem aktívan segíti a rendszer fejlesztését is.",
          steps: [
            {
              title: "Kritikus ügyek megnyitása",
              description:
                "A **Kritikus ügyek** sáv 5 csempéje (`Sürgős nyitott`, `Elakadt beszélgetés`, `Panasz / eszkaláció`, `Lejárt teendő`, `Sikertelen foglalás`) kattintásra felugró listában mutatja az érintett ügyfeleket, ahonnan egyetlen kattintással az Interakciós naplóba ugorhatsz.",
            },
            {
              title: "Finomhangolási javaslatok végrehajtása",
              description:
                "A **Finomhangolási javaslatok** táblázatban az AI összegyűjti azokat a visszatérő kérdéseket, amelyekre még nem talált választ a Tudástárban (pl. hiányzó szolgáltatásár vagy GYIK), és megbecsüli a várható hatást (`kb. -X átadás / hó`). A sor végén lévő műveleti gombbal (`GYIK megnyitása →`, `Szabályok →`, `Árlista →`) közvetlenül a megfelelő beállító oldalra ugorhatsz.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mit jelent az „AI által lezárt” mutató pontosan?",
          answer:
            "Azt a százalékos arányt mutatja, amikor a bejövő hívást, e-mailt vagy chatüzenetet az eaisyDesk teljes egészében megválaszolta vagy az időpontot lefoglalta anélkül, hogy emberi jóváhagyást vagy recepciós visszahívást kellett volna kérnie.",
        },
      ],
      relatedSlugs: ["ai-tudastar-ceg-es-szolgaltatasinformaciok", "ugykezelesi-es-foglalasi-szabalyok"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 4. INTERAKCIÓS NAPLÓ ÉS AI PISZKOZAT-JÓVÁHAGYÁS
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "interakcios-naplo-es-ai-piszkozatok",
      title: "Interakciós napló, hangfelvételek és AI válaszpiszkozatok",
      subtitle: "Minden telefonhívás, e-mail és chatbeszélgetés egyetlen naplóban: mondatszintű hanglejátszás, átirat és AI által előkészített válaszok szerkesztése/kiküldése.",
      categoryId: "ugyfelkozpont",
      readingTimeMinutes: 7,
      roles: ["admin", "member"],
      accessSummary: "Ügyfélközpont → Interakciós napló (/admin/interactions) — Admin és Munkatárs számára egyaránt elérhető.",
      summary:
        "Az Interakciós napló az eaisyDesk központi kommunikációs munkafelülete. Minden beszélgetés (session) egyetlen sorként jelenik meg, részletes AI-összefoglalóval. Sorra kattintva a jobb oldali részletező panelen meghallgathatod a telefonhívás hangfelvételét (mondatra kattintva az adott másodpercre ugorva), elolvashatod a teljes üzenetváltást, és egyetlen kattintással jóváhagyhatod vagy szerkesztheted az AI által előkészített válaszpiszkozatot.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-05-interactions-list.webp",
          alt: "Interakciós napló táblázat napi KPI szűrőkkel és csatorna-jelvényekkel",
          caption: "Az Interakciós napló: felül az aznapi Lezárt / Nyitott / Sürgős gyorsszűrő kártyák, alatta a kereshető, oszlopokra szabható interakciós táblázat.",
        },
        {
          src: "/kb/eaisy-desk/desk-06-interactions-detail.webp",
          alt: "Interakció részletei jobb oldali panel hanglejátszóval, átirattal és AI piszkozattal",
          caption: "A jobb oldali Interakció részletei panel: felül az ügyfél és a hívás metaadatai, középen az AI összefoglaló, a sötét témájú hanglejátszó és a mondatszintű átirat.",
        },
      ],
      sections: [
        {
          id: "naplo-szurese-es-oszlopok",
          title: "Gyors státuszszűrés, keresés és oszlopok testreszabása",
          description:
            "A napló tetején lévő **Mai nap** kártyasor három kattintható csempéje (**Lezárt**, **Nyitott**, **Sürgős**) azonnali szűrőként működik. A táblázat feletti eszköztárral bármilyen múltbeli beszélgetést másodpercek alatt visszakereshetsz.",
          steps: [
            {
              title: "Kombinált szűrés a Szűrés panellel",
              description:
                "Kattints a jobb felső **Szűrés** gombra. A lenyíló panelben kombinálhatod a **Státusz** (`Összes`, `Nyitott`, `Lezárt`, `Sürgős`), a **Csatorna** (`Telefon`, `E-mail`, `Chat`, `Viber`, `Messenger`, `Instagram`, `WhatsApp`), a **Kimenet** (`Időpontfoglalás`, `Időpontmódosítás`, `Időpontlemondás`, `Tájékoztatás`, `Átadva munkatársnak`) és az **Időszak** feltételeket. A **Szűrők törlése** gomb alaphelyzetbe állítja a listát.",
            },
            {
              title: "Táblázatoszlopok ki- és bekapcsolása",
              description:
                "Az **Oszlopok** gombra kattintva egyedileg pipálhatod ki vagy rejtheted el a megjelenített mezőket (`Időpont`, `Státusz`, `Csatorna`, `Ügyfél`, `Ügyfélstátusz`, `Téma`, `AI összefoglaló`, `Kimenet`). A beállítás a böngésződben automatikusan megmarad.",
            },
          ],
          statusBadges: [
            { label: "Lezárt", color: "Zöld", meaning: "Az ügyet az AI önállóan megválaszolta, vagy egy munkatárs már elintézte és lezárta." },
            { label: "Nyitott", color: "Sárga / Borostyán", meaning: "Munkatársi intézkedésre (pl. AI válaszpiszkozat jóváhagyására vagy visszahívásra) vár." },
            { label: "Sürgős", color: "Piros", meaning: "Az AI sürgős kulcsszót, panaszt vagy azonnali beavatkozást igénylő kérést érzékelt." },
          ],
        },
        {
          id: "reszletezo-panel-es-hanglejatszas",
          title: "Interakció részletei panel, hanglejátszó és mondatszintű ugrás",
          description:
            "A táblázat bármelyik sorára kattintva jobbról beúszik az **Interakció részletei** panel. A fejlécben található `↑` (`Előző interakció`) és `↓` (`Következő interakció`) gombokkal a panel bezárása nélkül lépegethetsz végig a napi ügyeken.",
          steps: [
            {
              title: "Telefonhívás visszahallgatása és ugrás egy adott mondatra",
              description:
                "Telefonos interakcióknál a panel megjeleníti a beépített hanglejátszót (sebességváltóval: `1×`, `1.25×`, `1.5×`, `2×`). A **Beszélgetés** szekcióban a teljes dialógus buborékos formában olvasható: ha bármelyik buborékban a **Lejátszás innen (p:mp)** gombra kattintasz, a hangfelvétel pontosan ahhoz a mondathoz ugrik és elindul.",
            },
            {
              title: "Ugrás az ügyfél 360°-os adatlapjára",
              description:
                "A panel felső metaadat-rácsában az **Ügyfél** mező mellett kattints a **Profil megnyitása →** hivatkozásra, ha meg szeretnéd nézni az ügyfél korábbi időpontjait, címkéit vagy megjegyzéseit.",
            },
          ],
        },
        {
          id: "ai-valaszpiszkozat-szerkesztese-es-kuldese",
          title: "AI által javasolt válasz szerkesztése és kiküldése",
          description:
            "Amikor egy írásos megkeresés (e-mail vagy chat) a szabályok szerint emberi jóváhagyást igényel, az eaisyDesk előre megírja a válaszpiszkozatot a Tudástár alapján, és a részletező panel alján lévő **AI által javasolt válasz** kártyán kínálja fel.",
          steps: [
            {
              title: "Piszkozat ellenőrzése vagy módosítása",
              description:
                "Olvasd át az előkészített szöveget. Ha módosítani szeretnél rajta, kattints a **Szerkesztés** gombra: e-mail esetén formázó eszköztárral (`Félkövér`, `Dőlt`, `Aláhúzott`, `Felsorolás`) ellátott szerkesztő, chat esetén szövegdoboz nyílik meg. A **Mégse** gombbal elvetheted a módosítást, a **Mentés** gombbal pedig eltárolhatod az új szöveget.",
            },
            {
              title: "Válasz azonnali kiküldése az ügyfélnek",
              description:
                "Kattints a türkiz **Küldés** gombra. A rendszer az eredeti csatornán (e-mailben vagy az adott chatplatformon) azonnal elküldi a választ az ügyfélnek, és az interakció státuszát automatikusan **Lezárt** állapotra állítja.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Kézi újranyitás és lezárás",
              text: "A részletező panel jobb felső sarkában lévő „Megjelölés elintézettként” (vagy lezárt ügynél „Újranyitás”) gombbal akkor is megváltoztathatod egy ügy státuszát, ha telefonon vagy személyesen intézted el a kérést.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Törölhetek egyszerre több teszt- vagy spam interakciót?",
          answer:
            "Igen, Adminisztrátori jogosultsággal a táblázat bal szélén megjelennek a jelölőnégyzetek. A kijelölés után a képernyő alján felugró sávban a „Kijelöltek törlése” gombbal egyszerre törölheted a kiválasztott tételeket.",
        },
      ],
      relatedSlugs: ["munkatarsi-dashboard-napi-teendok", "ugyfelek-360-profil-es-duplikaciok", "ugykezelesi-es-foglalasi-szabalyok"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 5. ÜGYFELEK (360° PROFIL, CÍMKÉK ÉS DUPLIKÁCIÓK ÖSSZEVONÁSA)
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "ugyfelek-360-profil-es-duplikaciok",
      title: "Ügyfelek kezelése, 360°-os profil és duplikációk összevonása",
      subtitle: "Teljes ügyféltörténet egyetlen adatlapon: időpontok, értékesítési címkék, kézi teendők, változási napló és duplikált profilok intelligens egyesítése.",
      categoryId: "ugyfelkozpont",
      readingTimeMinutes: 7,
      roles: ["admin", "member"],
      accessSummary: "Ügyfélközpont → Ügyfelek (/admin/clients) — Admin és Munkatárs számára egyaránt elérhető.",
      summary:
        "Az Ügyfelek modul automatikusan építi a vállalkozás CRM-adatbázisát minden bejövő hívásból, e-mailből, chatből és naptári foglalásból. A 360°-os ügyfélprofilon egy helyen érhető el az ügyfél összes korábbi és jövőbeli időpontja, kommunikációs előzménye, értékesítési címkéje, belső megjegyzése és az esetleges duplikált adatlapok összevonása.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-08-clients-list.webp",
          alt: "Ügyfelek listaoldal státusz KPI kártyákkal, keresővel és címkékkel",
          caption: "Az Ügyfelek áttekintő táblázata: felül az Összes, Új, Visszatérő és Inaktív ügyfelek száma, alatta a kereshető és szűrhető ügyféllista.",
        },
        {
          src: "/kb/eaisy-desk/desk-09-client-profile.webp",
          alt: "360 fokos ügyfélprofil az időpontokkal, címkékkel, megjegyzéssel és interakciókkal",
          caption: "A 360°-os ügyfélprofil: bal oldalon az alapadatok és az időpont-előzmények, jobb oldalon az értékesítési címkék és az automatikusan mentődő megjegyzésmező.",
        },
      ],
      sections: [
        {
          id: "ugyfellista-es-uj-ugyfel-felvetele",
          title: "Ügyféllista szűrése és új ügyfél kézi rögzítése",
          description:
            "A felső 4 KPI kártya (**Összes ügyfél**, **Új ügyfelek**, **Visszatérő ügyfelek**, **Inaktív ügyfelek**) kattintásra azonnal szűri a táblázatot. A **Szűrés** gombbal ezen felül konkrét címkére (pl. `VIP`, `árkérdés`) vagy regisztrációs időszakra is szűkíthetsz.",
          steps: [
            {
              title: "Új ügyfél kézi létrehozása",
              description:
                "Kattints a jobb felső **+ Új ügyfél** gombra. A felugró ablakban add meg a **Név** (kötelező), **Email**, **Telefonszám**, **Státusz** (`Új ügyfél`, `Visszatérő`, `Inaktív`) és **Címkék** mezőket, majd kattints a **Mentés** gombra.",
            },
            {
              title: "Közvetlen kampányindítás kijelölt ügyfeleknek",
              description:
                "Jelöld be a táblázat bal szélén lévő négyzetekkel a célzni kívánt ügyfeleket, majd az alul megjelenő műveleti sávban kattints a **Kampány indítása (X ügyfél)** gombra — a rendszer azonnal megnyitja a Kampányvarázslót az előre kiválasztott címzettekkel.",
            },
          ],
          statusBadges: [
            { label: "Új ügyfél", color: "Türkiz", meaning: "Még legfeljebb 1 múltbeli időponttal rendelkező vagy újonnan bekerült érdeklődő." },
            { label: "Visszatérő ügyfél", color: "Sötétkék (Navy)", meaning: "Legalább 2 lezajlott időponttal rendelkező törzsügyfél." },
            { label: "Inaktív", color: "Szürke", meaning: "Hosszabb ideje nem jelentkező vagy manuálisan inaktívnak jelölt ügyfél." },
          ],
        },
        {
          id: "360-ugyfelprofil-es-cimkek",
          title: "A 360°-os ügyfélprofil, Értékesítési címkék és Kézi teendők",
          description:
            "Egy ügyfél sorára kattintva megnyílik a részletes adatlap. A felső műveleti sávban szerkesztheted az alapadatokat (**Profil szerkesztése**), megtekintheted az auditnaplót (**Változási napló**), egy kattintással felveheted az ügyfelet a Kanban táblára (**Felvétel Érdeklődőkezelésbe**), vagy kizárhatod az automatikus AI-feldolgozásból (**Felvétel kizárt feladók közé**).",
          steps: [
            {
              title: "Címkék hozzáadása és automatikus Kanban-szinkron",
              description:
                "A **Címkék** kártyán kattints a **+ Címke** gombra. Ha az alábbi 7 értékesítési címke valamelyikét rendeled az ügyfélhez (`árkérdés`, `kampánylead`, `ajánlatkérés`, `spot`, `törölt időpont`, `no-show`, `VIP`), a rendszer az ügyfelet automatikusan elhelyezi az **Érdeklődőkezelés (Kanban)** tábla `UTÁNKÖVETÉS` oszlopába is!",
            },
            {
              title: "Belső megjegyzés és Kézi teendő rögzítése",
              description:
                "A **Megjegyzés** szövegdobozba írt információk gépelés közben automatikusan mentődnek (`Mentve`). Ha visszahívási vagy adminisztratív feladatot szeretnél rögzíteni a profilhoz, a **Nyitott teendők és interakciók** kártya fejlécében kattints a **+ Kézi teendő** gombra, írd be a feladatot és nyomd meg a **Hozzáadás** gombot.",
            },
          ],
        },
        {
          id: "duplikaciok-osszevonasa",
          title: "Duplikált ügyfélprofilok felismerése és összevonása",
          description:
            "Ha ugyanaz az ügyfél korábban más névváltozattal, telefonról és e-mailről is jelentkezett, az adatlap tetején sárga figyelmeztető sáv jelenik meg: `Lehetséges duplikáció: X másik profillal egyezik telefon, e-mail vagy név alapján.`",
          steps: [
            {
              title: "Az Összevonás… varázsló megnyitása",
              description:
                "Kattints a figyelmeztető sáv jobb oldalán lévő **Összevonás…** gombra. A felugró **Duplikált profilok összevonása** ablak egymás mellett mutatja az aktuális (elsődleges) profilt és a talált egyezéseket.",
            },
            {
              title: "Mezők kiválasztása és egyesítés",
              description:
                "Rádiógombokkal válaszd ki, hogy a **Név**, **E-mail**, **Telefonszám**, **Felelős** és **Ügyfélstátusz** mezők közül melyik profil értéke maradjon meg. A címkék, megjegyzések, interakciók és naptári események **mindkét profilból maradéktalanul megőrződnek** és átkerülnek az elsődleges profilra. Végül kattints a **Profilok összevonása** gombra.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hol látom, hogy ki és mikor módosította egy ügyfél telefonszámát vagy címkéit?",
          answer:
            "Az ügyfél adatlapjának jobb felső sarkában kattints a „Változási napló” gombra. Az időrendi napló pontosan rögzíti a módosító felhasználót (vagy az AI rendszert), a módosított mezőt, valamint a régi és az új értéket.",
        },
      ],
      relatedSlugs: ["erdeklodokezeles-kanban-folyamat", "interakcios-naplo-es-ai-piszkozatok"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 6. ÉRDEKLŐDŐKEZELÉS (KANBAN)
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "erdeklodokezeles-kanban-folyamat",
      title: "Érdeklődőkezelés (Kanban tábla)",
      subtitle: "Vizuális értékesítési és utánkövetési csővezeték: automatikusan bekerülő érdeklődők, drag-and-drop fázisváltás és testreszabható oszlopok.",
      categoryId: "ugyfelkozpont",
      readingTimeMinutes: 5,
      roles: ["admin", "member"],
      accessSummary: "Ügyfélközpont → Érdeklődőkezelés (/admin/kanban) — Kártyák mozgatása mindenkinek, oszlopok szerkesztése Adminnak.",
      summary:
        "Az Érdeklődőkezelés (Kanban) modul biztosítja, hogy egyetlen árkérdés, lemondott időpont vagy megnemjelenés (no-show) se vesszen el. A rendszer automatikusan az első (`UTÁNKÖVETÉS`) oszlopba gyűjti az utánkövetésre váró ügyfeleket, akiket a csapat fogd-és-vidd (drag-and-drop) módszerrel kísérhet végig az időpontfoglalásig.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-10-kanban-board.webp",
          alt: "Érdeklődőkezelés Kanban tábla az UTÁNKÖVETÉS automatikus oszloppal és ügyfélkártyákkal",
          caption: "Az Érdeklődőkezelés Kanban tábla: bal szélen a védett UTÁNKÖVETÉS (Automatikus) oszlop, mellette az egyedi értékesítési fázisok és a sürgősség szerint rendezett kártyák.",
        },
      ],
      sections: [
        {
          id: "automatikus-bekerules-es-kartyak",
          title: "Hogyan kerülnek az ügyfelek a Kanban táblára?",
          description:
            "A bal szélső **UTÁNKÖVETÉS** oszlop (`Automatikus` jelvénnyel) a rendszer gyűjtőpontja. Egy ügyfél három módon kerülhet ide:",
          steps: [
            {
              title: "1. Automatikusan értékesítési címke vagy AI-esemény alapján",
              description:
                "Ha az ügyfél `árkérdés`, `ajánlatkérés`, `kampánylead`, `spot`, `törölt időpont`, `no-show` vagy `VIP` címkét kap, vagy a Naptárban egy múltbeli időpontját `No show`-ra állítják, automatikusan megjelenik az **UTÁNKÖVETÉS** oszlopban.",
            },
            {
              title: "2. Kézzel az ügyfélprofilról",
              description:
                "Bármelyik ügyfél 360°-os adatlapján a felső sávban található **Felvétel Érdeklődőkezelésbe** gombbal egyetlen kattintással felveheted a kártyáját.",
            },
            {
              title: "3. Kártyák mozgatása és rendezése",
              description:
                "Fogd meg az ügyfélkártyát az egérrel, és húzd át a megfelelő fázisoszlopba (pl. `Kapcsolatfelvétel megtörtént`, `Ajánlat kiküldve`, `Időpont lefoglalva`). Minden oszlopon belül a **Sürgős** jelzésű kártyák automatikusan a lista legtetejére rendeződnek. Kártyára kattintva közvetlenül az ügyfél 360°-os adatlapja nyílik meg.",
            },
          ],
        },
        {
          id: "oszlopok-testreszabasa",
          title: "Oszlopok hozzáadása, átnevezése és törlése (Admin)",
          description:
            "Az első (`UTÁNKÖVETÉS`) oszlop rendszervédett, de mellette az Adminisztrátorok tetszőleges számú saját fázisoszlopot alakíthatnak ki a cég értékesítési folyamatához.",
          steps: [
            {
              title: "Új oszlop létrehozása",
              description:
                "Kattints a jobb felső **+ Oszlop hozzáadása** gombra, add meg a fázis nevét az **Oszlop neve** mezőben, majd kattints a **Létrehozás** gombra.",
            },
            {
              title: "Oszlop átnevezése vagy törlése",
              description:
                "Kattints az egyedi oszlop fejlécének jobb szélén lévő hárompontos (`⋯`) menüre, és válaszd az **Átnevezés** vagy a **Törlés** parancsot. Ha olyan oszlopot törölsz, amelyben még vannak ügyfélkártyák, a rendszer nem törli az ügyfeleket, hanem biztonságosan visszamozgatja őket az első **UTÁNKÖVETÉS** oszlopba.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan tudok levenni egy ügyfelet a Kanban tábláról, ha már lezárult az értékesítés?",
          answer:
            "Vidd az egeret az ügyfélkártya jobb felső sarkába, és kattints a megjelenő „×” (Eltávolítás a tábláról) ikonra. Ez csak a Kanban-folyamatból veszi ki a kártyát, az ügyfél profilja és adatai természetesen megmaradnak az Ügyfelek modulban.",
        },
      ],
      relatedSlugs: ["ugyfelek-360-profil-es-duplikaciok", "naptar-es-idopontfoglalasok"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 7. NAPTÁR ÉS IDŐPONTFOGLALÁSOK
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "naptar-es-idopontfoglalasok",
      title: "Naptár, előjegyzések és No-show követés",
      subtitle: "Napi, heti, havi és listanézet: AI és kézi időpontfoglalások kezelése, függő foglalások jelölése és múltbeli megjelenés (Megjelent / No show) rögzítése.",
      categoryId: "ugyfelkozpont",
      readingTimeMinutes: 6,
      roles: ["admin", "member"],
      accessSummary: "Ügyfélközpont → Naptár (/admin/calendar) — Admin és Munkatárs számára egyaránt teljes funkcionalitással elérhető.",
      summary:
        "A Naptár modulban valós időben jelennek meg az eaisyDesk AI asszisztens által rögzített és a recepció által kézzel felvitt előjegyzések. Támogatja a Nap / Hét / Hónap rácsnézetet és a táblázatos Listanézetet, automatikusan kezeli a szolgáltatáskatalógushoz rendelt időtartamokat és felelős munkatársakat, valamint lehetővé teszi a múltbeli időpontok Megjelent / No show státuszának naplózását.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-11-calendar-week.webp",
          alt: "Naptár heti nézet az időpontkártyákkal és a felső navigációs eszköztárral",
          caption: "A Naptár heti rácsnézete (07:00–21:00): felül a listanézet-váltó, a dátumnavigáció, a Nap / Hét / Hónap választó és az Időpont hozzáadása gomb.",
        },
      ],
      sections: [
        {
          id: "naptar-nezetek-es-navigacio",
          title: "Naptárnézetek (Nap, Hét, Hónap) és Listanézet",
          description:
            "A felső eszköztáron a **Nap**, **Hét** és **Hónap** gombokkal válthatsz a vizuális időrácsok között (07:00-tól 21:00-ig, európai/budapesti időzóna szerint). A **Ma** gomb bármelyik nézetből azonnal a mai nap napi nézetére ugrik.",
          steps: [
            {
              title: "Gyors áttekintés egérrámutatással (Tooltip)",
              description:
                "Heti nézetben vidd az egeret bármelyik naptári kártya fölé: a felugró infókártyán azonnal látod a pontos kezdési időt, az időtartamot (percben), a szolgáltatás nevét, az ügyfél nevét és az **Ellátó munkatárs** nevét.",
            },
            {
              title: "Átváltás táblázatos Listanézetre és No-show rögzítése",
              description:
                "Kattints a bal felső sarokban lévő lista ikonra (`Listanézet`). A táblázatban minden időpont külön sorban látható (`Időpont`, `Időpont státusza`, `Ügyfél`, `Ügyfélstátusz`, `Esemény`, `Időtartam`, `Munkatárs`). Múltbeli eseményeknél az **Időpont státusza** oszlopban válaszd ki a **Megjelent** vagy a **No show** opciót — `No show` választásakor a rendszer automatikusan felveszi az ügyfelet az Érdeklődőkezelés (Kanban) utánkövetési listájára!",
            },
          ],
          statusBadges: [
            { label: "Foglalt", color: "Sötétkék (Navy)", meaning: "Megerősített, jövőbeli előjegyzés." },
            { label: "Függőben / függőben", color: "Sárga / Borostyán", meaning: "24 órás fenntartással rögzített, visszajelzésre vagy jóváhagyásra váró időpont." },
            { label: "Megjelent", color: "Zöld", meaning: "Lezajlott múltbeli időpont, amelyen az ügyfél megjelent." },
            { label: "No show", color: "Piros", meaning: "Az ügyfél nem jelent meg a lefoglalt időponton (automatikusan átkerül az Érdeklődőkezelésbe)." },
          ],
        },
        {
          id: "uj-idopont-rogzitese-es-szerkesztese",
          title: "Új időpont felvétele és meglévő előjegyzés módosítása",
          description:
            "Kattints a jobb felső **+ Időpont hozzáadása** gombra új foglalás rögzítéséhez, vagy kattints bármelyik meglévő naptári kártyára a szerkesztéshez.",
          steps: [
            {
              title: "Ügyfél és munkatárs kiválasztása",
              description:
                "Töltsd ki az **Ügyfél neve** (kötelező), **Email** és **Telefon** mezőket, majd a **Munkatárs** legördülőből válaszd ki az ellátó kollégát (a lista automatikusan a Szolgáltatáskatalógusban megadott munkatársakból épül fel).",
            },
            {
              title: "Szolgáltatás és automatikus időtartam",
              description:
                "A **Szolgáltatás** legördülőből válaszd ki a kívánt tételt — a rendszer automatikusan beállítja a szolgáltatáshoz tartozó alapértelmezett **Időtartam** értéket (15, 30, 45, 60, 90 vagy 120 perc), amelyet szükség esetén felülbírálhatsz. Ha egyedi eseményt rögzítesz, válaszd az **Egyéni** opciót, és írd be az **Egyéni szolgáltatás** nevét.",
            },
            {
              title: "Mentés vagy Időpont törlése",
              description:
                "Add meg a **Dátum** és **Időpont** mezőket, opcionálisan írj megjegyzést, majd kattints a **Létrehozás** (szerkesztéskor **Mentés**) gombra. Meglévő esemény módosításakor a bal alsó **Időpont törlése** gombbal törölheted az előjegyzést.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Automatikus néveltérés-ellenőrzés",
              text: "Ha egy meglévő e-mail-címhez vagy telefonszámhoz a korábban tárolttól eltérő nevet írsz be (pl. elgépelés vagy hozzátartozó foglalása miatt), a rendszer figyelmeztető üzenetet jelenít meg, és a foglalást biztonságosan a meglévő ügyfélprofilhoz kapcsolja.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan tudom megnézni egy naptárban szereplő ügyfél teljes profilját?",
          answer:
            "Listanézetben kattints közvetlenül az esemény sorára, és a rendszer azonnal megnyitja a hozzá tartozó 360°-os ügyféladatlapot.",
        },
      ],
      relatedSlugs: ["ugykezelesi-es-foglalasi-szabalyok", "automatikus-ertesitesek-idopont-emailek"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 8. KAMPÁNYOK ÉS AI SZÖVEGVARÁZSLÓ
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "kimeno-kampanyok-es-ai-szovegvarazslo",
      title: "Kimenő kampányok és AI szövegvarázsló",
      subtitle: "Célzott e-mail és SMS kampányok összeállítása 3 lépésben: szűrhető célcsoport-kijelölés, AI szöveggenerálás, SMS szegmensszámláló és ütemezett kiküldés.",
      categoryId: "kimeno",
      readingTimeMinutes: 6,
      roles: ["admin", "member"],
      accessSummary: "Kimenő kommunikáció → Kampányok (/admin/outbound) — Tervezetet mindenki készíthet; indítás és ütemezés Admin-jogosultság.",
      summary:
        "A Kampányok modul lehetővé teszi, hogy az ügyfélbázis egy pontosan szűrt szegmensének (pl. inaktív ügyfeleknek, VIP címkéseknek vagy árkérdezőknek) személyre szabott e-mail vagy SMS kampányt küldj. A 3 lépéses Kampányvarázsló beépített AI szövegíróval, Rich Text szerkesztővel és valós idejű SMS-szegmenskalkulátorral segíti az üzenet összeállítását.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-12-outbound-campaigns.webp",
          alt: "Kampányok áttekintő oldal státusz-szűrő chipekkel és kampánykártyákkal",
          caption: "A Kampányok áttekintő nézete: szűrhető státusz-chipek (Összes, Tervezet, Aktív, Ütemezett, Lezárt), kártya/lista nézetváltó és a részletes kampánykártyák.",
        },
        {
          src: "/kb/eaisy-desk/desk-13-outbound-wizard.webp",
          alt: "3 lépéses Új kampány varázsló a célcsoport-szűrőkkel és ügyfél-kijelölővel",
          caption: "Az Új kampány varázsló 1. lépése: célcsoport szűrése ügyfélstátusz és értékesítési címkék alapján, vagy egyedi ügyfél-kijelöléssel.",
        },
      ],
      sections: [
        {
          id: "kampanyvarazslo-3-lepesben",
          title: "Új kampány létrehozása a 3 lépéses varázslóval",
          description:
            "Kattints a jobb felső **+ Új kampány** gombra a varázsló elindításához.",
          steps: [
            {
              title: "1. lépés — Célcsoport kiválasztása",
              description:
                "Válaszd ki a címzetteket **Ügyfélstátusz alapján** (`Új ügyfél`, `Visszatérő`, `Inaktív`) és/vagy **Címkék alapján** (`árkérdés`, `kampánylead`, `ajánlatkérés`, `spot`, `törölt időpont`, `no-show`, `VIP`). Az **Egyedi ügyfél-kijelölés** lenyitásával név, e-mail vagy telefon alapján egyesével is hozzáadhatsz vagy kivehetsz címzetteket. Kattints a **Tovább** gombra.",
            },
            {
              title: "2. lépés — Kampány beállításai (Név és Csatorna)",
              description:
                "Adj egy beszédes nevet a **Kampány neve** mezőben (pl. *Tavaszi kontroll emlékeztető*), majd válaszd ki a **Kommunikációs csatornák** közül az **E-Mail** és/vagy **SMS** opciót. Kattints a **Tovább** gombra.",
            },
            {
              title: "3. lépés — Kampányüzenet megírása vagy generálása AI szövegvarázslóval",
              description:
                "Választhatsz a **Saját szöveg** (Rich Text formázóval) és az **AI szövegvarázsló** mód között. Az AI módban válaszd ki a stílust (`Hivatalos`, `Barátságos`, `Promóciós`, `Személyes`), írd le röviden a kampány célját, és kattints a **Generálás** gombra — az AI elkészíti az **Üzenet tárgya** és a formázott üzenettörzs szövegét. Végül kattints a **Kampány létrehozása** gombra.",
            },
          ],
          tips: [
            {
              type: "tip",
              title: "Beépített SMS szegmens-számláló",
              text: "Ha a 2. lépésben az SMS csatornát is kiválasztottad, a szövegszerkesztő alatt élőben látod a karakterek számát, a kódolást (GSM7) és az SMS-szegmensek számát (153 karakter / szegmens). A rendszer küldéskor automatikusan optimalizálja a magyar ékezeteket, hogy a kampány a lehető legkevesebb SMS-szegmensből menjen ki.",
            },
          ],
        },
        {
          id: "kampany-inditasa-utemezese-es-kovetese",
          title: "Kampány indítása, ütemezése és eredmények követése",
          description:
            "Az elkészült kampány először **Tervezet** (`Vázlat`) státuszba kerül, így biztonságosan ellenőrizhető a kiküldés előtt.",
          steps: [
            {
              title: "Azonnali indítás vagy időzített ütemezés (Admin)",
              description:
                "Kattints a kampánykártyán (vagy a kártyára kattintva megnyíló részletező panelen) az **Indítás** gombra az azonnali kiküldéshez, vagy válaszd a hárompontos (`⋯`) menüből az **Ütemezés** parancsot. A **Kampány ütemezése** ablakban add meg a pontos **Dátum és időpont** értéket, amikor a rendszernek automatikusan el kell indítania a küldést.",
            },
            {
              title: "Folyamatban lévő kampány megállítása vagy lezárása",
              description:
                "Aktív kampánynál a menüből bármikor választhatod a **Szüneteltetés** (`Megállítva`) vagy a végleges **Lezárás** (`Befejezett`) műveletet. A kampányok teljesítményét (kiküldött, megválaszolt, időpontot foglalt arány) az **Analitika → Kampányteljesítmény** táblázatban is nyomon követheted.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Munkatárs (recepciós) jogosultsággal el tudok indítani egy kampányt?",
          answer:
            "Munkatársként teljes körűen összeállíthatod a célcsoportot és megírhatod a kampányt (Tervezetként elmentve), azonban a tényleges kiküldés (Indítás) és az Ütemezés biztonsági okokból Adminisztrátori jóváhagyáshoz kötött.",
        },
      ],
      relatedSlugs: ["ugyfelek-360-profil-es-duplikaciok", "automatikus-ertesitesek-idopont-emailek"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 9. AUTOMATIKUS ÉRTESÍTÉSEK (IDŐPONT E-MAILEK)
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "automatikus-ertesitesek-idopont-emailek",
      title: "Automatikus értesítések (Időpont e-mailek)",
      subtitle: "Időpont-visszaigazolás, 24 órás emlékeztető, módosítás és lemondás automatikus e-mailjeinek (.ics naptárcsatolmánnyal) engedélyezése és áttekintése.",
      categoryId: "kimeno",
      readingTimeMinutes: 4,
      roles: ["admin"],
      accessSummary: "Kimenő kommunikáció → Értesítések (/admin/automatizaciok) — Csak Adminisztrátorok számára elérhető.",
      summary:
        "Az Automatikus értesítések modulban 4 eseményvezérelt e-mail sablon működését szabályozhatod egyetlen kapcsolóval. A rendszer minden időpontfoglaláskor, módosításkor, lemondáskor, valamint az időpont előtt 24 órával automatikusan kiküldi a megfelelő értesítést az ügyfélnek, naptárba importálható (.ics) csatolmánnyal együtt.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-14-automatizaciok.webp",
          alt: "Automatikus értesítések oldal a 4 időpont-sablonnal és dinamikus változó chipekkel",
          caption: "Az Automatikus értesítések felülete: sablononként egyedileg kapcsolható Engedélyezve váltógomb, előnézeti tárgysor és a dinamikus {{változó}} tokenekkel ellátott levéltörzs.",
        },
      ],
      sections: [
        {
          id: "negy-beepitett-ertesitesi-sablon",
          title: "A 4 eseményvezérelt időpont-értesítés",
          description:
            "Minden sablon kártyájának jobb felső sarkában található egy **Engedélyezve** kapcsoló. A kapcsoló átbillentésekor a rendszer azonnal menti az állapotot (`Értesítés engedélyezve.` / `Értesítés letiltva.`).",
          uiElements: [
            {
              label: "Időpont visszaigazolása",
              type: "Eseményvezérelt sablon",
              description: "Új időpont rögzítésekor azonnal kiküldésre kerül az ügyfélnek, `.ics` naptárfájllal csatolva.",
            },
            {
              label: "Időpont emlékeztető",
              type: "Időzített sablon",
              description: "24 órával a lefoglalt időpont kezdete előtt automatikusan kiküldött emlékeztető e-mail (drasztikusan csökkenti a No-show arányt).",
            },
            {
              label: "Időpont módosításának visszaigazolása",
              type: "Eseményvezérelt sablon",
              description: "Meglévő időpont átütemezésekor küldött értesítés a frissített `.ics` naptármelléklettel.",
            },
            {
              label: "Időpont lemondása",
              type: "Eseményvezérelt sablon",
              description: "Időpont törlésekor vagy lemondásakor kiküldött hivatalos visszaigazolás.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Dinamikus változók automatikus behelyettesítése",
              text: "A sablonokban látható kék kiemelésű tokeneket (pl. {{ügyfél_neve}}, {{szolgáltatás}}, {{időpont}}, {{munkatárs}}, {{cég_neve}}, {{cím}}) a rendszer küldéskor automatikusan a Naptárban és a Céginformációkban szereplő valós adatokkal tölti fel.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Milyen feladó névvel és e-mail-címmel mennek ki ezek az automatikus értesítések?",
          answer:
            "A Beállítások → eaisyDesk beállítások fül „E-mail feladó beállítások” szekciójában megadott Feladó neve és Feladó e-mail értékekkel, és ha ott beállítottál automatikus titkos másolatot (BCC), a rendszer ezekről is küld másolatot a CRM-archívumodnak.",
        },
      ],
      relatedSlugs: ["naptar-es-idopontfoglalasok", "rendszerbeallitasok-csapat-biztonsag-telefonia"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 10. AI TUDÁSTÁR: CÉG- ÉS SZOLGÁLTATÁSINFORMÁCIÓK
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "ai-tudastar-ceg-es-szolgaltatasinformaciok",
      title: "AI Tudástár: Cég- és szolgáltatásinformációk",
      subtitle: "Az AI asszisztens tudásbázisának felépítése: cégadatok, telephelyek, szolgáltatásleírás, nyitvatartás, Excel-alapú árlista, kedvezmények és GYIK.",
      categoryId: "tudastar-es-beallitasok",
      readingTimeMinutes: 7,
      roles: ["admin"],
      accessSummary: "Tudástár → Céginformációk (/admin/settings/basic) — Csak Adminisztrátorok számára elérhető.",
      summary:
        "A Cég- és szolgáltatásinformációk oldal az eaisyDesk AI asszisztensének elsődleges tudásforrása. Minden itt megadott adatot — a telephelyek címétől és parkolási információitól kezdve a nyitvatartáson és az árlistán át a Gyakori kérdésekig (GYIK) — az AI valós időben használ a telefonos és írásos ügyfélkérdések pontos megválaszolására.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-15-tudastar-ceginfo.webp",
          alt: "Cég- és szolgáltatásinformációk oldal a 6 szekciós gyorsnavigációval és telephelykezelővel",
          caption: "A Cég- és szolgáltatásinformációk felülete: felül a 6 szekció közötti gyorsugró sáv, alatta a Cégadatok, Telephelyek és Nyitvatartás kártyák.",
        },
      ],
      sections: [
        {
          id: "cegadatok-telephelyek-nyitvatartas",
          title: "1–3. Cégadatok, Telephelyek, Szolgáltatás leírása és Nyitvatartás",
          description:
            "Az oldal tetején lévő 6 gyorsnavigációs gombbal (`Cégadatok`, `Szolgáltatás leírása`, `Nyitvatartás`, `Árak`, `Kedvezmények`, `Gyakori kérdések (GYIK)`) azonnal a kívánt szekcióhoz ugorhatsz.",
          steps: [
            {
              title: "Cégadatok és Telephelyek megadása",
              description:
                "Töltsd ki a **Cég neve**, **Iparág / szakterület**, **Központi telefonszám**, **Központi e-mail** és **Weboldal** mezőket. A **Telephelyek** blokkban a **+ Telephely hozzáadása** gombbal több rendelő vagy iroda adatait is felveheted (`Telephely neve`, `Típus`, `Irányítószám`, `Város`, `Utca, házszám`, `Emelet / ajtó`, valamint a `Megközelítés, parkolás, tömegközlekedés` leírása).",
            },
            {
              title: "Szolgáltatás leírása és bemutatkozás",
              description:
                "A **Szolgáltatás leírása** szövegmezőben foglald össze, mivel foglalkozik a cég, kiknek szól a szolgáltatás, és mi a fő erősségetek — az AI ebből merít, amikor egy új érdeklődő általános tájékoztatást kér.",
            },
            {
              title: "Heti Nyitvatartás és szünnapok",
              description:
                "A **Nyitvatartás** szekcióban napokra lebontva (`Hétfő`–`Vasárnap`) állíthatod be a nyitási és zárási időpontokat, vagy a **Zárva** jelölőnégyzettel megjelölheted a pihenőnapokat. A **Különleges nyitvatartás / megjegyzés** mezőben rögzítheted az ünnepi rendet vagy az ebédszünetet.",
            },
          ],
        },
        {
          id: "arlista-kedvezmenyek-es-gyik",
          title: "4–6. Árlista (Excel importtal), Kedvezmények és Gyakori kérdések (GYIK)",
          description:
            "A strukturált árlista és a GYIK-párok biztosítják, hogy az AI soha ne találjon ki árakat vagy feltételeket, hanem pontosan a hivatalos listádból idézzen.",
          steps: [
            {
              title: "Árak felvitele táblázatban vagy Excel (.xlsx / .csv) feltöltéssel",
              description:
                "Az **Árak** kártyán kattints a **Sablon letöltése** gombra a minta-táblázat beszerzéséhez, majd az **Excel feltöltése** gombbal töltsd fel a kész árlistát — vagy szerkeszd a tételeket közvetlenül a felületen a **+ Tétel hozzáadása** gombbal (`Szolgáltatás / termék`, `Kategória`, `Ár`, `Pénznem`, `Megjegyzés`). Az **Összes törlése** gombbal teljesen lecserélheted a táblázatot.",
            },
            {
              title: "Kedvezmények és akciók rögzítése",
              description:
                "A **Kedvezmények** szekcióban a **+ Kedvezmény hozzáadása** gombbal vehetsz fel aktuális promóciókat (`Kedvezmény megnevezése`, `Mérték / típus`, `Érvényesség / feltételek`).",
            },
            {
              title: "Gyakori kérdések (GYIK) és mentés",
              description:
                "A **Gyakori kérdések (GYIK)** szekcióban a **+ Kérdés hozzáadása** gombbal adj meg minél több tipikus ügyfélkérdést és a rájuk adandó pontos választ (`Kérdés`, `Válasz`). Amikor végeztél, kattints a jobb alsó **Változások mentése** gombra — a módosítások azonnal aktiválódnak az AI asszisztensben.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Milyen gyorsan tanulja meg az AI a módosított árakat vagy az új GYIK-kérdéseket?",
          answer:
            "A „Változások mentése” gombra kattintás után azonnal: a következő másodpercben beérkező telefonhívásnál és üzenetnél az eaisyDesk már a frissített adatokat használja.",
        },
      ],
      relatedSlugs: ["ugykezelesi-es-foglalasi-szabalyok", "vezetoi-analitika-es-riportok"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 11. ÜGYKEZELÉSI ÉS FOGLALÁSI SZABÁLYOK
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "ugykezelesi-es-foglalasi-szabalyok",
      title: "AI Tudástár: Ügykezelési és foglalási szabályok",
      subtitle: "Mikor válaszoljon önállóan az AI, és mikor kérjen emberi jóváhagyást? Szolgáltatáskatalógus, egyedi korlátozó szabályok és 4-féle foglalási mód.",
      categoryId: "tudastar-es-beallitasok",
      readingTimeMinutes: 7,
      roles: ["admin"],
      accessSummary: "Tudástár → Szabályok (/admin/settings/szabalyok) — Csak Adminisztrátorok számára elérhető.",
      summary:
        "Az Ügykezelési és foglalási szabályok oldalon határozhatod meg az AI asszisztens önállóságának határait: beállíthatod, hogy az írásos megkereséseket automatikusan megválaszolja-e vagy piszkozatként jóváhagyásra küldje, felveheted az egyedi korlátozó szabályokat, összeállíthatod a foglalható Szolgáltatáskatalógust, és 4 különböző működési mód közül választhatsz az időpontfoglalások kezelésére.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-16-tudastar-szabalyok.webp",
          alt: "Ügykezelési és foglalási szabályok oldal az alapértelmezett szabályokkal és az írásos kommunikáció beállításaival",
          caption: "Az Ügykezelési és foglalási szabályok oldal: a 6 beépített alapértelmezett biztonsági szabály, az írásos kommunikáció önállósági módjai és az egyedi szabályok.",
        },
      ],
      sections: [
        {
          id: "alapertelmezett-es-iranyitasi-szabalyok",
          title: "Alapértelmezett biztonsági szabályok, Írásos kommunikáció és Egyedi korlátozások",
          description:
            "Az eaisyDesk 6 beépített alapértelmezett biztonsági szabállyal (pl. *Sürgős vagy kritikus esetek azonnali továbbítása*, *Panasz vagy elégedetlenség kezelése*, *Tudástáron kívüli kérdések átadása*) védi az üzletmenetet. Ezek felett teljes szabadsággal konfigurálhatod az írásos válaszadást és a saját üzleti szabályaidat.",
          steps: [
            {
              title: "Írásos kommunikáció beállításai (E-mail és Chat)",
              description:
                "Válassz a két működési mód közül:\n1. **Automatikus válasz minden írásos megkeresésre, ha a válasz szerepel a tudástárban** (az AI önállóan válaszol, és csak akkor kér segítséget, ha egy szabály tiltja vagy nincs meg az adat).\n2. **Minden írásos válasz kiküldése előtt munkatársi jóváhagyás szükséges** (minden e-mailről és chatről piszkozat készül az Interakciós naplóban).",
            },
            {
              title: "Egyedi korlátozó szabályok felvétele",
              description:
                "Az **Egyedi korlátozó szabályok** kártyán kattints a **+ Szabály hozzáadása** gombra. Megadhatod, hogy egy adott ügyféltípus vagy kulcsszó esetén (pl. *Garanciális reklamáció*, *VIP partner*, *Műtéti konzultáció*) az AI milyen műveletet végezzen (pl. mindig adja át munkatársnak és jelölje sürgősnek).",
            },
          ],
        },
        {
          id: "szolgaltataskatalogus-es-foglalasi-modok",
          title: "Szolgáltatáskatalógus, Időpontkezelési módok és Új ügyfelek szabályai",
          description:
            "Az oldal alsó három szekciója vezérli, hogy az AI hogyan és milyen szolgáltatásokra foglalhat időpontot a Naptárba.",
          steps: [
            {
              title: "Szolgáltatáskatalógus összeállítása",
              description:
                "A **Szolgáltatáskatalógus** táblázatban a **+ Szolgáltatás hozzáadása** gombbal vedd fel a foglalható szolgáltatásokat: add meg a **Szolgáltatás neve**, az **Időtartam (perc)**, a **Pufferidő (perc)** (két időpont közötti kötelező szünet) és az ellátó **Munkatárs** mezőket, valamint válaszd ki, hogy az adott szolgáltatás foglalható-e önállóan az AI által.",
            },
            {
              title: "Időponttal kapcsolatos ügyek kezelése (4 mód)",
              description:
                "Válaszd ki a cég munkarendjéhez illő foglalási módot:\n- **Teljesen automatikus időpontkezelés**: az AI azonnal véglegesíti a foglalást, módosítást és lemondást.\n- **Függő foglalás munkatársi jóváhagyással (24 órás fenntartás)**: az AI lefoglalja a helyet `függőben` státusszal, amit a recepció hagy jóvá.\n- **Csak időpont-egyeztetés és visszahívás kérése**: az AI felméri az igényt, de a konkrét időpontot munkatárs adja ki.\n- **Időpontkezelés letiltása**: az AI nem kezel időpontokat.",
            },
            {
              title: "Új ügyfelek kezelése és Mentés",
              description:
                "Az **Új ügyfelek kezelése** szekcióban külön szabályozhatod, hogy az első alkalommal jelentkező ügyfelek is foglalhatnak-e automatikusan, vagy náluk kötelező-e az előzetes munkatársi jóváhagyás / első konzultációs szolgáltatás. Végül kattints a **Minden szabály mentése** gombra.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi a különbség a Céginformációk alatti Árlista és a Szabályok alatti Szolgáltatáskatalógus között?",
          answer:
            "Az Árlista (Céginformációk) az ügyfelek tájékoztatására szolgál, amikor árakról érdeklődnek (akár több száz tétellel). A Szolgáltatáskatalógus (Szabályok) pedig kifejezetten a Naptárban foglalható időponttípusokat, azok időtartamát (perc), pufferidejét és a hozzájuk rendelt munkatársakat határozza meg.",
        },
      ],
      relatedSlugs: ["ai-tudastar-ceg-es-szolgaltatasinformaciok", "naptar-es-idopontfoglalasok", "interakcios-naplo-es-ai-piszkozatok"],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 12. RENDSZERBEÁLLÍTÁSOK: PROFIL, CSAPAT, BIZTONSÁG, INTEGRÁCIÓK ÉS TELEFÓNIA
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "rendszerbeallitasok-csapat-biztonsag-telefonia",
      title: "Beállítások: Profil, Csapat, eaisyDesk, Biztonság, Integrációk és Telefónia",
      subtitle: "A 7 füles Beállítások központ teljes útmutatója: felhasználók kezelése, AI hang és üdvözlőszöveg, kizárt feladók, GDPR, API kulcsok, élő hangteszt és Telnyx telefónia.",
      categoryId: "tudastar-es-beallitasok",
      readingTimeMinutes: 8,
      roles: ["admin", "member"],
      accessSummary: "Beállítások (/admin/beallitasok) — A Profil és Biztonság fül mindenkinek, a további 5 fül Adminisztrátoroknak érhető el.",
      summary:
        "A Beállítások oldal 7 áttekinthető fülre osztva biztosítja a személyes profil, a csapattagok és jogosultságok, az eaisyDesk kommunikációs stílusának és hangjának, a munkamenet-biztonságnak és GDPR-funkcióknak, a külső csatorna-integrációknak (Google Calendar, Gmail, Messenger, Instagram, Viber, WhatsApp), a böngészős hangasszisztens-tesztnek és a Telnyx telefonközpontnak a kezelését.",
      screenshots: [
        {
          src: "/kb/eaisy-desk/desk-17-beallitasok-csapat.webp",
          alt: "Beállítások oldal a 7 füles navigációs sávval és a Csapat kezelőpanellel",
          caption: "A Beállítások központ 7 füle (Profil, Csapat, eaisyDesk beállítások, Biztonság, Hitelesítő adatok, Hangasszisztens teszt, Telefónia) és a csapattagok kezelése.",
        },
      ],
      sections: [
        {
          id: "profil-es-csapat-kezelese",
          title: "1–2. Profil és Csapat (Felhasználók és szerepkörök) kezelése",
          description:
            "A **Profil** fül minden felhasználó számára elérhető, míg a **Csapat** fülön az Adminisztrátorok vehetnek fel új kollégákat és módosíthatják a jogosultságokat.",
          steps: [
            {
              title: "Saját profil és profilkép beállítása (Profil fül)",
              description:
                "A **Profil** fülön kattints a **Fénykép feltöltése** gombra saját avatar megadásához (JPG, PNG vagy WebP, max. 10 MB, beépített körkivágóval), majd töltsd ki a **Teljes név**, **Pozíció** és **Cég neve** mezőket, és kattints a **Profil mentése** gombra.",
            },
            {
              title: "Új munkatárs vagy adminisztrátor meghívása (Csapat fül)",
              description:
                "A **Csapat** fül alján kattints az **Új felhasználó hozzáadása** gombra. Add meg a **Teljes név**, **Felhasználónév**, **Email cím** és **Jelszó** (min. 8 karakter) mezőket, válaszd ki a **Szerepkör** kártyát (**Munkatárs** — *Recepciós munka — ügyfelek, naptár, teendők* vagy **Admin** — *Teljes hozzáférés*), majd kattints a **Létrehozás** gombra.",
            },
          ],
        },
        {
          id: "eaisydesk-beallitasok-hang-email-kizart-feladok",
          title: "3. eaisyDesk beállítások: Nyelv, Hang (Voice Agent), E-mail feladó és Kizárt feladók",
          description:
            "Az **eaisyDesk beállítások** fülön szabhatod személyre az AI asszisztens megjelenését, hangját és e-mailes viselkedését.",
          steps: [
            {
              title: "Alapértelmezett nyelv, stílus, hangkarakter és üdvözlőszöveg",
              description:
                "A **Kommunikáció beállításai** kártyán válaszd ki az **Alapértelmezett nyelv** (`Magyar`, `Angol`, `Német`) és a **Kommunikációs stílus** (`Professzionális, segítőkész`, `Barátságos, közvetlen`, `Formális, távolságtartó`, `Tömör, lényegretörő`) értékeit. Válassz a három magyar **Hangasszisztens hangja (Voice Agent)** profil közül (**GÁBOR** – *Bizalomkeltő, megnyugtató*, **ESZTER** – *Figyelmes, kedves*, **BENCE** – *Fókuszált, magabiztos*), és add meg a hívások elején elhangzó **Üdvözlőszöveg (Voice Agent)** szövegét.",
            },
            {
              title: "E-mail feladó és CRM titkos másolat (BCC)",
              description:
                "Az **E-mail feladó beállítások** blokkban add meg a kimenő levelekben megjelenő **Feladó neve** és **Feladó e-mail** értékeket. Ha külső CRM-et (pl. MiniCRM) is használsz, az **Automatikus titkos másolat (BCC)** mezőben megadott archiváló címre a rendszer minden kiküldött válaszról automatikusan másolatot küld.",
            },
            {
              title: "Kizárt feladók (E-mail-címek és Domainek)",
              description:
                "A **Kizárt feladók** szekcióban megadhatsz olyan **Kizárt e-mail-címek** és **Kizárt domainek** listát (pl. saját belső címeid, hírlevelek, számlázórendszerek), amelyektől érkező leveleket az eaisyDesk figyelmen kívül hagy és nem hoz létre belőlük ügyet.",
            },
          ],
        },
        {
          id: "biztonsag-gdpr-integraciok-es-telefonia",
          title: "4–7. Biztonság & GDPR, Hitelesítő adatok, Hangasszisztens teszt és Telefónia",
          description:
            "A fennmaradó négy fül az adatvédelmet, a külső csatornák összekötését és a telefonos hangasszisztens beüzemelését szolgálja.",
          uiElements: [
            {
              label: "Biztonság fül",
              type: "Beállítófül",
              description: "Jelszó módosítása, Automatikus kijelentkezés inaktivitás után (5 / 15 / 30 / 60 perc), valamint GDPR és Adatvédelem (Személyes adatok exportálása JSON formátumban, Adatkezelési tájékoztató és Fiók törlése).",
            },
            {
              label: "Hitelesítő adatok fül",
              type: "Admin beállítófül",
              description: "Külső csatornák és API kulcsok összekapcsolása, beépített „Kapcsolat tesztelése” gombbal: Google Calendar, Gmail, Facebook Messenger, Instagram, Viber, WhatsApp és E-mail (SMTP/IMAP).",
            },
            {
              label: "Hangasszisztens teszt fül",
              type: "Admin beállítófül",
              description: "Böngészőből, mikrofonnal indítható élő Voice Agent teszt közvetlenül a saját céged Tudástárával (árlista, GYIK, szabályok). A tesztbeszélgetés után a hívás azonnal megjelenik az Interakciós naplóban.",
            },
            {
              label: "Telefónia fül (Telnyx)",
              type: "Admin beállítófül",
              description: "3 lépéses önkiszolgáló varázsló saját Telnyx telefonszám bekötéséhez: 1. Telnyx API kulcs ellenőrzése és mentése → 2. Aktív telefonszám kiválasztása → 3. Telefonbeállítás elvégzése (automatikus LiveKit SIP összekapcsolás).",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan tudom kipróbálni a hangasszisztenst anélkül, hogy felhívnám a rendelő telefonszámát?",
          answer:
            "Nyisd meg a Beállítások → Hangasszisztens teszt fület, engedélyezd a böngészőben a mikrofont, és indítsd el a hívást a beágyazott tesztpanelen. Pontosan ugyanaz az AI ügynök fog válaszolni a céged aktuális tudástára alapján, mint az éles telefonvonalon.",
        },
      ],
      relatedSlugs: ["ai-tudastar-ceg-es-szolgaltatasinformaciok", "ugykezelesi-es-foglalasi-szabalyok", "bejelentkezes-navigacio-jogosultsagok"],
    },
  ],
};
