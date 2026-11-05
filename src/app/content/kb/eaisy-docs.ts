import type { ProductKnowledgeBase } from "./types";

export const eaisyDocsKb: ProductKnowledgeBase = {
  slug: "eaisy-docs",
  name: "eaisyDocs",
  tagline: "AI-támogatott dokumentumkezelő, iktatási és digitális irattári rendszer",
  description:
    "Teljes körű magyar nyelvű dokumentáció az eaisyDocs használatához: többszintű érkeztetés (e-mail, kötegelt szkennelés, eaisyBill szinkron), AI metaadat-kinyerés és iktatás, ügyiratok és dossziék életciklusa, partnertörzs, feladatkezelés, távolléti delegálás, négyszem-elvű irattári selejtezés és 335/2005. Korm. rendelet szerinti auditnaplózás.",
  productRoute: "/eaisy-docs",
  appUrl: "https://docs.eaisy.hu",
  status: "live",
  version: "2.1",
  updatedAt: "2026. november",
  theme: {
    accent: "#7DD3FC",
    secondary: "#232D7B",
    dark: "#0C1033",
    softBg: "#EEF0FF",
  },
  roles: [
    {
      role: "admin",
      label: "Adminisztrátor / Vezető / HR Vezető",
      summary:
        "Teljes hozzáférés a szervezeti iratforgalomhoz, a cég- és irattári terv beállításokhoz, az iktatási és AI szabályokhoz, a négyszem-elvű selejtezési jóváhagyásokhoz, a központi auditnaplóhoz, valamint szerepkörtől függően a bizalmas (HR) dossziékhoz.",
    },
    {
      role: "member",
      label: "Munkatárs (Iktató / Ügyintéző / Betekintő)",
      summary:
        "Hozzáférés a bejövő iratok érkeztetéséhez és iktatásához (Iktató szerepkör), a saját és osztályos ügyiratokhoz, a szignált feladatokhoz, a partnertörzshöz, valamint a jogosultsági körbe tartozó irattári tételekhez.",
    },
  ],
  categories: [
    {
      id: "alapok-es-kereses",
      title: "Alapok, Vezérlőpult & Kereső",
      description:
        "Bejelentkezés, kétlépcsős azonosítás (2FA), többcéges munkakörnyezet-váltás, vezetői KPI vezérlőpult és a globális keresőközpont.",
      icon: "LayoutDashboard",
    },
    {
      id: "erkeztetes-es-ugyiratok",
      title: "Érkeztetés, AI Iktatás & Ügyiratok",
      description:
        "Bejövő sor kezelése, e-mail és eaisyBill szinkron, kötegelt szkennelés, osztott képernyős AI iktatópult és az Iktatókönyv életciklusa.",
      icon: "FolderOpen",
    },
    {
      id: "feladatok-es-partnerek",
      title: "Feladatkezelés, Partnertörzs & Szabályok",
      description:
        "Szignált ügyiratok és al-feladatok Kanban/Lista/Naptár nézetben, távolléti helyettesítés, 360°-os partnertörzs, automatikus iktatási szabályok és AI Prompt Könyvtár.",
      icon: "Users",
    },
    {
      id: "irattar-audit-admin",
      title: "Irattár, Selejtezés, Audit & Beállítások",
      description:
        "Megőrzési idők követése, négyszem-elvű selejtezési és levéltári jegyzőkönyvek, visszavonhatatlan eseménynapló és rendszergazdai konfiguráció.",
      icon: "ShieldCheck",
    },
  ],
  articles: [
    // =========================================================================
    // 1. BEJELENTKEZÉS, NAVIGÁCIÓ ÉS VEZÉRLŐPULT
    // =========================================================================
    {
      slug: "bejelentkezes-navigacio-es-vezerlopult",
      title: "Bejelentkezés, Navigáció és Vezérlőpult (Áttekintés)",
      subtitle:
        "Hitelesítés, kétlépcsős azonosítás (2FA), többcéges cégválasztó, interaktív oktatómód és a valós idejű iratforgalmi KPI vezérlőpult.",
      categoryId: "alapok-es-kereses",
      readingTimeMinutes: 6,
      roles: ["admin", "member"],
      accessSummary:
        "Minden aktív felhasználó számára elérhető. A Vezérlőpult mutatói és grafikonjai mindig a bal felső cégválasztóban kiválasztott cégre és a felhasználó jogosultsági szintjére (Admin, Vezető, HR Vezető, Iktató, Munkatárs, Betekintő) szűrve jelennek meg.",
      summary:
        "Az eaisyDocs indítófelülete egyetlen képernyőn fogja össze a szervezet teljes iratforgalmát: a napi érkeztetési volument, a feldolgozásra váró bejövő tételeket, a lejáró határidőket, az AI felismerési pontosságát és a személyes teendőket.",
      PermissionMatrix: [
        {
          feature: "Bejelentkezés, 2FA hitelesítés és profilkezelés",
          admin: true,
          member: true,
          note: "Minden regisztrált felhasználó számára kötelező vagy választható biztonsági réteg.",
        },
        {
          feature: "Többcéges cégválasztó használata",
          admin: true,
          member: true,
          note: "Csak azok a cégek jelennek meg, amelyekhez a felhasználónak aktív tagsága van.",
        },
        {
          feature: "Új cég létrehozása vagy eaisyBill cégimport a cégválasztóból",
          admin: true,
          member: false,
          note: "Cégtulajdonosi vagy Admin jogosultsághoz kötött művelet.",
        },
        {
          feature: "Teljes cég-szintű iratforgalmi KPI-k és statisztikák megtekintése",
          admin: true,
          member: true,
          note: "A bizalmas (HR) dossziék csak Admin és HR Vezető szerepkörrel szerepelnek a részletes listákban.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-01-login.webp",
          alt: "eaisyDocs bejelentkezési felület termékváltóval és funkció-előnézettel",
          caption:
            "A bejelentkezési képernyő bal oldalán az eaisyDocs és eaisyHR modulok interaktív bemutatója, jobb oldalán a biztonságos belépési űrlap található.",
        },
        {
          src: "/kb/eaisy-docs/docs-02-dashboard.webp",
          alt: "eaisyDocs Vezérlőpult (Áttekintés) KPI kártyákkal és iratforgalmi diagramokkal",
          caption:
            "Az Áttekintés (Vezérlőpult) 6 valós idejű KPI kártyával, 6 havi iratforgalmi trenddel és dokumentumtípus-megoszlással.",
        },
        {
          src: "/kb/eaisy-docs/docs-03-dashboard-tasks.webp",
          alt: "eaisyDocs Vezérlőpult alsó szekció: Top 5 Partner, Lejáró határidők és Saját feladataim",
          caption:
            "A vezérlőpult alsó sávja a legnagyobb iratforgalmú partnereket, a kritikus határidőket és a felhasználóra szignált ügyiratokat/feladatokat listázza.",
        },
      ],
      sections: [
        {
          id: "bejelentkezes-es-2fa",
          title: "1. Bejelentkezés, Termékváltó és Kétlépcsős Azonosítás (2FA)",
          description:
            "Az eaisyDocs és az eaisyHR közös hitelesítési kaput használ. A bejelentkezési képernyőn már belépés előtt áttekinthető a modulok funkcionalitása, a belépést pedig iparági szabványú TOTP kétlépcsős azonosítás védi.",
          steps: [
            {
              title: "E-mail cím és jelszó megadása",
              description:
                "Nyisd meg a `/login` oldalt, add meg a vállalati e-mail címedet az **E-mail cím** mezőben és a jelszavadat a **Jelszó** mezőben, majd kattints a **Bejelentkezés** gombra.",
            },
            {
              title: "Kétlépcsős azonosítás (2FA) megerősítése",
              description:
                "Ha a fiókodhoz aktív a 2FA védelem, a rendszer megjeleníti a **Kétlépcsős azonosítás** panelt. Írd be a hitelesítő alkalmazásodban (pl. Google Authenticator, Microsoft Authenticator) megjelenő 6 jegyű **Hitelesítő kód** értéket, majd kattints az **Ellenőrzés** gombra.",
            },
            {
              title: "Elfelejtett jelszó visszaállítása",
              description:
                "Ha nem emlékszel a jelszavadra, kattints a **Elfelejtetted a jelszavad?** hivatkozásra, add meg az e-mail címedet, és a **Visszaállító link küldése** gombbal kérj biztonságos jelszó-megújító hivatkozást.",
            },
          ],
          uiElements: [
            {
              label: "eaisyDocs / eaisyHR termékváltó",
              type: "Fülválasztó",
              description:
                "A bal oldali bemutató panelen vált az iratkezelési (AI Iktatás, Digitális Irattár, Audit & Compliance, E-mail Érkeztetés) és a HR kártyák között.",
            },
            {
              label: "Bejelentkezés",
              type: "Elsődleges gomb",
              description:
                "Elindítja a titkosított munkamenet-hitelesítést, majd átirányít az utoljára használt aktív cég Vezérlőpultjára.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Automatikus munkamenet-védelem",
              text: "A rendszer a Beállítások → Profil alatt megadott inaktivitási idő (alapértelmezetten 30 perc) letelte után automatikusan lezárja a munkamenetet, így megosztott munkaállomásokon is garantált az adatbiztonság.",
            },
          ],
        },
        {
          id: "oldalsav-es-cegvalaszto",
          title: "2. Bal oldali Navigáció, Többcéges Cégválasztó és Felső Sáv",
          description:
            "A bal oldali főmenü biztosítja az azonnali váltást a 8 fő szakmai modul között, míg a cégválasztó lehetővé teszi, hogy cégcsoportok vagy könyvelőirodák egyetlen fiókkal több vállalkozás iratforgalmát is elkülönítve kezeljék.",
          steps: [
            {
              title: "Aktív cég kiválasztása vagy váltása",
              description:
                "Kattints a bal felső sarokban, az eaisyDocs logó alatt található **Cégválasztó** lenyíló gombra. A listában láthatod az összes hozzád rendelt vállalkozást (országkóddal és adószámmal). Kattints a kívánt cégre a munkakörnyezet azonnali átváltásához.",
            },
            {
              title: "Új cég csatlakoztatása vagy eaisyBill import",
              description:
                "A cégválasztó lenyíló alján három gyorsművelet érhető el: **Importálás eaisyBill-ből** (meglévő számlázási cégek átemelése egy kattintással), **Új cég hozzáadása** (új szervezet alapítása), valamint **Csatlakozás kóddal** (64 karakteres meghívókód beváltása).",
            },
            {
              title: "Navigáció a Főmenüben és az Oktatómód indítása",
              description:
                "A **Főmenü** 8 menüpontot tartalmaz: **Áttekintés** (`/`), **Saját feladataim** (`/tasks`), **Bejövő sor** (`/inbox` — élő darabszám-jelvénynyel), **Iktatókönyv** (`/dossiers`), **Irattár** (`/archive`), **Partnerek** (`/partners`), **Szabályok** (`/rules`) és **Eseménynapló** (`/audit`). A felső sávban a **Bemutató** gombra kattintva bármikor elindíthatod a 9 lépéses interaktív felületi túrát.",
            },
          ],
          uiElements: [
            {
              label: "Cégválasztó lenyíló",
              type: "Környezetváltó",
              description:
                "Megjeleníti az aktív vállalkozás nevét és országkódját; kattintásra listázza a cégeket és a cégcsatlakozási műveleteket.",
            },
            {
              label: "Bejövő sor jelvény (Badge)",
              type: "Számláló",
              description:
                "Valós időben mutatja a még nem iktatott, feldolgozásra váró érkeztetett iratok számát az aktív cégnél.",
            },
            {
              label: "Felhasználói kártya & Téma váltása",
              type: "Oldalsáv lábléc",
              description:
                "A bal alsó sarokban mutatja a bejelentkezett felhasználó nevét, e-mail címét, a világos/sötét **Téma váltása** ikont, a **Beállítások** (fogaskerék) gombot és a **Kijelentkezés** ikont.",
            },
          ],
        },
        {
          id: "vezerlopult-kpi-es-modulok",
          title: "3. Vezérlőpult (Áttekintés): KPI Kártyák, Grafikonok és Saját Feladataim",
          description:
            "Az **Áttekintés** oldal 6 kiemelt KPI kártyán és interaktív vizuális blokkokon keresztül nyújt azonnali vezetői és operatív helyzetképet.",
          uiElements: [
            {
              label: "ÖSSZES DOKUMENTUM / MA ÉRKEZETT",
              type: "KPI kártyák",
              description:
                "Az aktív cégnél nyilvántartott összes irat darabszáma (havi növekedési százalékkal), valamint az adott napon beérkezett új küldemények száma.",
            },
            {
              label: "FELDOLGOZÁSRA VÁR / LEJÁRT HATÁRIDŐ",
              type: "Akció KPI kártyák",
              description:
                "Kattintható riasztási kártyák: a **Feldolgozásra vár** közvetlenül a Bejövő sorra (`/inbox`), a **Lejárt határidő** pedig a határidős ügyiratokhoz navigál.",
            },
            {
              label: "AI PONTOSSÁG / ÁTL. FELDOLGOZÁS",
              type: "Hatékonysági KPI kártyák",
              description:
                "Az AI metaadat-kitöltés sikeres felismerési aránya (`%`), valamint az érkeztetéstől az iktatásig eltelt átlagos feldolgozási idő (órában).",
            },
            {
              label: "Iratforgalom (utolsó 6 hónap) & Dokumentumok típus szerint",
              type: "Diagramok",
              description:
                "Havi bontású oszlopdiagram a beérkezett dokumentumok volumenéről, mellette fánkdiagram a típusok (Számlák, Szerződések, HR dokumentumok, Levelezés, Egyéb) arányáról.",
            },
            {
              label: "Top 5 Partner & Lejáró határidők",
              type: "Listablokkok",
              description:
                "A legtöbb iktatott irattal rendelkező partnerek rangsora, valamint a 7 napon belül esedékes vagy már lejárt ügyiratok sürgősségi listája.",
            },
            {
              label: "Saját feladataim (Mind / Ügyiratok / Feladatok)",
              type: "Interaktív widget",
              description:
                "A vezérlőpult alján közvetlenül szűrhetők és megnyithatók a bejelentkezett felhasználóra szignált ügyiratok és al-feladatok.",
            },
          ],
          statusBadges: [
            {
              label: "X napja lejárt",
              color: "Piros (Destructive)",
              meaning: "Az ügyirat vagy feladat határideje már elmúlt, azonnali ügyintézést igényel.",
            },
            {
              label: "Ma jár le / X nap múlva",
              color: "Borostyán (Warning)",
              meaning: "Közelgő határidejű ügyirat (7 napon belüli esedékesség).",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan válthatok két cég között kijelentkezés nélkül?",
          answer:
            "Kattints a bal felső sarokban található Cégválasztó gombra, majd válaszd ki a kívánt vállalkozást. A rendszer sütiben (cookie) rögzíti a választást, és azonnal frissíti a Bejövő sort, az Iktatókönyvet és a statisztikákat.",
        },
        {
          question: "Hol tudom újra elindítani a betanító bemutatót?",
          answer:
            "A felső fejlécsáv jobb oldalán található **Bemutató** gombra kattintva bármikor újraindíthatod az interaktív, 9 lépéses termékbemutatót.",
        },
      ],
      relatedSlugs: [
        "intelligens-kereses-es-szures",
        "erkeztetes-ai-felismeres-es-iktatas",
        "adminisztracio-jogosultsagok-es-beallitasok",
      ],
    },

    // =========================================================================
    // 2. INTELLIGENS KERESÉS ÉS SZŰRÉS
    // =========================================================================
    {
      slug: "intelligens-kereses-es-szures",
      title: "Intelligens Keresés, Globális Keresőközpont és Szűrés",
      subtitle:
        "Villámgyors keresés ügyiratokban, OCR-feldolgozott dokumentumokban és partnerek között, valamint egységes táblázati szűrő- és oszlopkezelés.",
      categoryId: "alapok-es-kereses",
      readingTimeMinutes: 5,
      roles: ["admin", "member"],
      accessSummary:
        "Minden szerepkör számára elérhető. A keresési találatok automatikusan tiszteletben tartják a jogosultsági mátrixot: a bizalmas (HR) minősítésű iratok csak Admin és HR Vezető jogosultsággal jelennek meg a találati listában.",
      summary:
        "Az eaisyDocs többszintű keresőmotorja lehetővé teszi, hogy bármely képernyőről másodpercek alatt megtaláld a keresett ügyiratot, csatolt PDF-et vagy partnert — akár iktatószám-töredék, adószám, tárgyszó vagy tartalmi jelentés alapján.",
      PermissionMatrix: [
        {
          feature: "Globális keresőközpont használata",
          admin: true,
          member: true,
          note: "Egyszerre keres az Ügyiratok, Dokumentumok és Partnerek entitásokban.",
        },
        {
          feature: "Keresés bizalmas (HR) minősítésű dossziékban és iratokban",
          admin: true,
          member: false,
          note: "Kizárólag Admin és HR Vezető szerepkörrel rendelkező felhasználók látják a bizalmas találatokat.",
        },
        {
          feature: "Táblázati szűrők, dátumtartományok és oszlop-láthatóság testreszabása",
          admin: true,
          member: true,
          note: "Minden listázó modulban (Bejövő sor, Iktatókönyv, Partnerek, Irattár, Eseménynapló) egységesen elérhető.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-04-global-search.webp",
          alt: "eaisyDocs Globális Keresőközpont modális ablak élő találatokkal és szűrőkkel",
          caption:
            "A központi keresőablak gépelés közben (valós időben) csoportosítja az Ügyiratok, Dokumentumok és Partnerek találatait, típus- és időszakszűrőkkel.",
        },
      ],
      sections: [
        {
          id: "globalis-kereso-ctrl-k",
          title: "1. Globális Keresőközpont",
          description:
            "A felső fejlécben található **Keresés...** mezőre kattintva bármelyik modulból megnyílik a központi keresőablak.",
          steps: [
            {
              title: "Keresőkifejezés megadása (legalább 2 karakter)",
              description:
                "Kezdj el gépelni a **Keresés dokumentumokban, ügyiratokban, partnerek között...** mezőbe. A rendszer 300 ms késleltetéssel (debounce) élőben lekérdezi a találatokat.",
            },
            {
              title: "Szűkítés dokumentumtípusra és időszakra",
              description:
                "A keresőmező alatti szűrősávban egyetlen kattintással szűkítheted a találatokat **Dokumentumtípus** szerint (**Minden típus**, **Számla**, **Szerződés**, **HR**, **Levelezés**, **Egyéb**), vagy **Időszak** szerint (**Bármikor**, **Elmúlt 7 nap**, **Elmúlt 30 nap**, **Elmúlt 1 év**).",
            },
            {
              title: "Navigáció billentyűzettel vagy egérrel",
              description:
                "A találatok három szekcióra bontva jelennek meg: **Ügyiratok** (iktatószámmal és státusszal), **Dokumentumok** (típussal és érkezési dátummal) és **Partnerek** (adószámmal és székhellyel). A `↑` / `↓` nyilakkal választhatsz, az `Enter` billentyűvel pedig azonnal megnyithatod a kiválasztott adatlapot.",
            },
          ],
          uiElements: [
            {
              label: "Típusszűrő gombok (Minden típus, Számla, Szerződés, HR...)",
              type: "Gyors-szűrő sáv",
              description:
                "Azonnal leszűkíti a keresőablakban megjelenő dokumentum- és ügyirattalálatokat a kiválasztott irattípusra.",
            },
            {
              label: "Időszak választó",
              type: "Lenyíló menü",
              description:
                "Időbeli korlátozást alkalmaz az érkeztetési vagy iktatási dátum alapján.",
            },
          ],
          tips: [
            {
              type: "tip",
              title: "Keresés iktatószám-töredékre és adószámra",
              text: "Nem szükséges a teljes iktatószámot (pl. `SZERZ/2026/00005`) begépelned: elég a sorszámot (`00005`) vagy a partner adószámának első 8 számjegyét beírnod a keresőbe.",
            },
          ],
        },
        {
          id: "tablazati-szurosav-es-oszlopok",
          title: "2. Modul-szintű Táblázati Szűrősáv és Oszlopválasztó",
          description:
            "A Bejövő sor, az Iktatókönyv, a Partnerek, az Irattár és az Eseménynapló egységes táblázati vezérlősávot (**Szűrés** gomb) használ a nagy adatmennyiségek áttekintéséhez.",
          steps: [
            {
              title: "A Szűrés panel lenyitása",
              description:
                "Kattints a táblázat jobb felső sarkában található **Szűrés** gombra. Ha már van aktív szűrő, a gomb mellett megjelenik az aktív szűrőfeltételek száma.",
            },
            {
              title: "Szabadszavas szűrés, dátumtartomány és kategória-chipek",
              description:
                "A lenyíló panelben kombinálhatod a helyi szabadszavas keresőt, a **Dátumtól** – **Dátumig** intervallumot, valamint a modulspecifikus szűrőcsoportokat (pl. Állapot, Biztonsági szint, Felelős beosztás, Csatorna).",
            },
            {
              title: "Oszlopok elrejtése és megjelenítése",
              description:
                "A szűrőpanel alján található **Megjelenített oszlopok** szekcióban egyetlen kattintással ki- vagy bekapcsolhatod az egyes táblázati oszlopokat. A **Szűrők törlése** gomb minden feltételt alaphelyzetbe állít.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi a különbség a felső globális keresőközpont és a táblázatokban található Szűrés között?",
          answer:
            "A felső globális keresőközpont a teljes adatbázisban (ügyiratokban, dokumentumokban és partnerekben egyszerre) keres modulfüggetlenül, míg a táblázati Szűrés gomb az éppen megnyitott lista sorait szűkíti több kombinálható feltétel (dátumtól-dátumig, státusz, felelős) alapján.",
        },
      ],
      relatedSlugs: [
        "bejelentkezes-navigacio-es-vezerlopult",
        "dossziek-ugyiratok-es-eletciklus",
        "partnertorzs-es-ugyfelkapcsolatok",
      ],
    },

    // =========================================================================
    // 3. ÉRKEZTETÉS, AI FELISMERÉS ÉS IKTATÁS
    // =========================================================================
    {
      slug: "erkeztetes-ai-felismeres-es-iktatas",
      title: "Érkeztetés, AI Felismerés és Iktatás (Bejövő sor)",
      subtitle:
        "Többcsatornás iratbefogadás (e-mail, kötegelt szkennelés, eaisyBill szinkron), osztott képernyős előnézet és egykattintásos AI metaadat-kinyerés.",
      categoryId: "erkeztetes-es-ugyiratok",
      readingTimeMinutes: 8,
      roles: ["admin", "member"],
      accessSummary:
        "Az érkeztetés és iktatás végrehajtásához Admin, Vezető, HR Vezető vagy Iktató jogosultság szükséges. Munkatárs és Betekintő szerepkörrel a lista megtekinthető, de iktatási művelet nem végezhető.",
      summary:
        "A **Bejövő sor** (`/inbox`) az eaisyDocs központi érkeztető kapuja. Ide futnak be az IMAP e-mail postafiókból szinkronizált csatolmányok, az eaisyBill-ből átemelt számlák, a kötegelten beszkennelt papíriratok és a manuálisan feltöltött fájlok. Minden beérkező küldemény egyedi érkeztetőszámot (`E/ÉÉÉÉ/SSSSS`) és SHA-256 integritási lenyomatot kap.",
      PermissionMatrix: [
        {
          feature: "Bejövő sor megtekintése és dokumentumok gyorsnézete",
          admin: true,
          member: true,
          note: "Minden jogosult felhasználó megtekintheti az érkeztetett tételeket.",
        },
        {
          feature: "Új érkeztetés, Kötegelt szkennelés, E-mail és eaisyBill szinkron indítása",
          admin: true,
          member: true,
          note: "Admin, Vezető, HR Vezető és Iktató szerepkörrel érhető el.",
        },
        {
          feature: "AI Kitöltés futtatása és Jóváhagyás / Iktatás véglegesítése",
          admin: true,
          member: true,
          note: "Iktatói jogosultsággal új ügyirat nyitható vagy meglévő dossziéhoz csatolható az irat.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-05-inbox-list.webp",
          alt: "eaisyDocs Bejövő sor érkeztetett iratokkal, eaisyBill szinkron sávval és gyorsműveletekkel",
          caption:
            "A Bejövő sor (/inbox) listázza az érkeztetett, még nem iktatott küldeményeket csatorna-jelvénnyel, eaisyBill import sávval és közvetlen Iktatás gombbal.",
        },
        {
          src: "/kb/eaisy-docs/docs-06-inbox-filing.webp",
          alt: "eaisyDocs osztott képernyős iktatópult dokumentum-előnézettel és AI Kitöltés űrlappal",
          caption:
            "Az iktatópult (/inbox/[id]) bal oldalán a dokumentum vizuális előnézete, jobb oldalán az AI Kitöltés gomb és a strukturált metaadat-űrlap látható.",
        },
      ],
      sections: [
        {
          id: "erkeztetesi-csatornak",
          title: "1. Négy Érkeztetési Csatorna a Bejövő Sorban",
          description:
            "A **Bejövő sor** fejlécében található akciógombokkal négy különböző forrásból fogadhatsz dokumentumokat, amelyek azonnal megkapják a sorszámozott `E/2026/...` érkeztetőszámot.",
          steps: [
            {
              title: "Manuális feltöltés (Új érkeztetés)",
              description:
                "Kattints a jobb felső **Új érkeztetés** gombra. A felugró ablakban válaszd ki az **Érkezés csatornája** értéket (`Postai küldemény`, `E-mail melléklet`, `Személyes átvétel` vagy `Hivatali kapu / Cégkapu`), húzd be a PDF/JPG/PNG/DOCX fájlt, majd kattints az **Érkeztetés rögzítése** gombra.",
            },
            {
              title: "Kötegelt szkennelés és automatikus szétválasztás",
              description:
                "Papíralapú iratcsomagok digitalizálásakor kattints a **Kötegelt szkennelés** gombra. Válaszd ki a szétválasztási módot: **Minden fájl külön irat (1 fájl = 1 érkeztetés)**, **Szétválasztás oldalanként (1 oldal = 1 irat)**, vagy **Szétválasztás N oldalanként**, majd indítsd el a kötegelt érkeztetést.",
            },
            {
              title: "E-mail szinkron (IMAP) és Élő szinkron",
              description:
                "Az **E-mail szinkron** gombra kattintva a rendszer azonnal lekérdezi a céghez beállított IMAP postafiók olvasatlan leveleit és mellékleteit. A táblázat feletti zöld **Élő szinkron** jelző mutatja, hogy a háttérfolyamat (5 percenkénti automatikus lekérdezés és Supabase Realtime frissítés) aktív.",
            },
            {
              title: "Importálás eaisyBill-ből",
              description:
                "Ha a cég össze van kapcsolva az eaisyBill számlázó és kontrolling rendszerrel, a lila **Importálás eaisyBill-ből** sáv jelzi az importálható számlák darabszámát. Egyetlen kattintással átemelheted a bejövő és kimenő számlákat melléklettel együtt.",
            },
          ],
          uiElements: [
            {
              label: "Feldolgozásra vár / Nem iktatandó fülek",
              type: "Státuszváltó fülek",
              description:
                "Szétválasztja az iktatásra váró küldeményeket és a reklámlevélként/téves küldeményként **Nem iktatandó** státuszba helyezett tételeket.",
            },
            {
              label: "Szورny / Gyorsnézet (Szem ikon)",
              type: "Gyorsművelet",
              description:
                "Az **Iktatás** gomb melletti szem ikonra kattintva oldalváltás nélkül, felugró előnézeti ablakban ellenőrizheted a csatolt PDF-et.",
            },
          ],
          statusBadges: [
            {
              label: "Email / Postai / Személyes / eaisyBill",
              color: "Kék / Borostyán / Lila / Cián",
              meaning: "Jelzi, hogy a dokumentum melyik érkeztetési csatornán keresztül került a rendszerbe.",
            },
          ],
        },
        {
          id: "ai-kitoltes-es-iktatopult",
          title: "2. Osztott Képernyős Iktatópult és AI Kitöltés",
          description:
            "A Bejövő sor bármelyik tételén az **Iktatás** gombra kattintva megnyílik a kétpaneles iktatópult (`/inbox/[id]`), ahol a dokumentum elolvasása és a metaadatok rögzítése egyetlen képernyőn történik.",
          steps: [
            {
              title: "AI Kitöltés indítása",
              description:
                "Kattints az **Iktatás és Metaadatok** panel fejlécében található **AI Kitöltés** gombra. A mesterséges intelligencia (OCR + nyelvi modell) elemzi a dokumentum tartalmát, és automatikusan kitölti az **Ügy tárgya**, a **Dokumentumtípus**, a **Küldő partner**, az **Adószám**, a **Hivatkozott szám** és a **Megjelölt határidő** mezőket.",
            },
            {
              title: "Partner automatikus azonosítása vagy új partner létrehozása",
              description:
                "Ha az AI által kinyert adószám vagy név már szerepel a Partnertörzsben, megjelenik a zöld **Partner azonosítva** jelvény. Ha új küldőről van szó, a **Küldő partner** mezőben megadott névvel és adószámmal az iktatás pillanatában automatikusan létrejön a partnerrekord.",
            },
            {
              title: "Új ügyirat nyitása vagy Meglévőhöz csatolás",
              description:
                "Válassz az **Új ügyirat nyitása** (új főszámot generál, pl. `SZERZ/2026/00007`, és kötelezővé teszi az **Irattári tételszám** kiválasztását) vagy a **Meglévőhöz csatolás** (alszámos utóiratként, pl. `-2`, `-3` sorszámmal fűzi hozzá egy már futó ügyirathoz) lehetőségek közül.",
            },
            {
              title: "Szervezeti Egység, Felelős és Minősítés megadása",
              description:
                "Válaszd ki a **Szervezeti Egység (Osztály)** értéket, opcionálisan rendelj hozzá **Felelős ügyintéző (Szignálás)** munkatársat, és ha személyügyi vagy védett iratról van szó, kapcsold át a **Dokumentum minősítése** mezőt `Bizalmas (HR / Vezetői)` állásba. Végül kattints a **Jóváhagyás és iktatás** gombra.",
            },
          ],
          uiElements: [
            {
              label: "AI Kitöltés",
              type: "AI műveletgomb",
              description:
                "Automatikusan kinyeri a strukturált metaadatokat, és figyelembe veszi a Szabályok modulban rögzített cég-specifikus AI promptokat és iktatási szabályokat.",
            },
            {
              label: "Jóváhagyás és iktatás",
              type: "Elsődleges gomb",
              description:
                "Véglegesíti az iktatást, legenerálja a hivatalos iktatószámot, PDF/A-konverziót és SHA-256 ellenőrzést végez, majd átirányít az Iktatókönyvbe.",
            },
          ],
          tips: [
            {
              type: "warning",
              title: "Kötelező Irattári Tétel új ügyirat nyitásakor",
              text: "Új ügyirat nyitásához a cégnél legalább egy Irattári Tételnek szerepelnie kell (Beállítások → Rendszergazda → Irattári Terv), mivel ez határozza meg a jogszabályi megőrzési időt.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi történik a reklámlevelekkel vagy tévesen beérkezett e-mailekkel?",
          answer:
            "A Bejövő sorban kattints az adott sor **Nem iktatandó** gombjára. Az irat kikerül az aktív várólistából a Nem iktatandó fülre, ahonnan szükség esetén a **Visszaállítás** gombbal bármikor visszatehető.",
        },
        {
          question: "Hogyan tudok egy beérkezett számlát vagy szerződésmódosítást egy már meglévő dossziéhoz fűzni?",
          answer:
            "Az iktatópultban válaszd a **Meglévőhöz csatolás** opciót, majd a lenyíló keresőben válaszd ki a cél-ügyiratot. Az irat automatikusan a következő szabad alszámot (pl. `SZERZ/2026/00005-2`) kapja.",
        },
      ],
      relatedSlugs: [
        "dossziek-ugyiratok-es-eletciklus",
        "iktatasi-es-ai-szabalyok",
        "partnertorzs-es-ugyfelkapcsolatok",
      ],
    },

    // =========================================================================
    // 4. DOSSZIÉK, ÜGYIRATOK ÉS ÉLETCIKLUS (IKTATÓKÖNYV)
    // =========================================================================
    {
      slug: "dossziek-ugyiratok-es-eletciklus",
      title: "Dossziék, Ügyiratok és Életciklus (Iktatókönyv)",
      subtitle:
        "Az iktatott ügyiratok központi nyilvántartása, szignálás, alszámos iratfűzés, verziókövetés, belső kommentszálak és életciklus-váltások.",
      categoryId: "erkeztetes-es-ugyiratok",
      readingTimeMinutes: 7,
      roles: ["admin", "member"],
      accessSummary:
        "Az Iktatókönyv minden felhasználó számára elérhető, de a Bizalmas minősítésű (pl. HR személyi dossziék) sorokat és fájlokat kizárólag az Admin és a HR Vezető szerepkörrel rendelkező felhasználók nyithatják meg.",
      summary:
        "Az **Iktatókönyv** (`/dossiers`) a szervezet összes iktatott ügyiratának (dossziéjának) hiteles főkönyve. Itt követhető nyomon az ügyiratok teljes életútja az iktatástól az ügyintézésen és al-feladatokon át a lezárásig és az irattárba helyezésig.",
      PermissionMatrix: [
        {
          feature: "Normál minősítésű ügyiratok és csatolt dokumentumok megtekintése",
          admin: true,
          member: true,
          note: "A jogosult modul-hozzáféréssel rendelkező munkatársak számára elérhető.",
        },
        {
          feature: "Bizalmas (HR) dossziék megtekintése és kezelése",
          admin: true,
          member: false,
          note: "Szigorúan Admin és HR Vezető szerepkörre korlátozva (lakat ikonnal jelölve).",
        },
        {
          feature: "Felelős ügyintéző kijelölése / átadása (Szignálás)",
          admin: true,
          member: false,
          note: "Admin, Vezető, HR Vezető és Iktató szerepkörrel végezhető.",
        },
        {
          feature: "Hivatalos Iktatókönyv exportálása (CSV / PDF / ZIP)",
          admin: true,
          member: true,
          note: "Az aktuális szűrésnek megfelelő hiteles kivonat letöltése.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-07-dossiers-list.webp",
          alt: "eaisyDocs Iktatókönyv táblázat iktatószámokkal, Bizalmas jelvényekkel és állapotokkal",
          caption:
            "Az Iktatókönyv (/dossiers) átfogó nyilvántartása iktatószám, tárgy, életciklus-állapot, felelős és határidő oszlopokkal.",
        },
        {
          src: "/kb/eaisy-docs/docs-08-dossier-detail.webp",
          alt: "eaisyDocs Ügyirat adatlap életciklus-váltó gombokkal, csatolt iratokkal és eseménytörténettel",
          caption:
            "Az ügyirat részletes adatlapja (/dossiers/[id]) a csatolt alap- és utóiratokkal, al-feladatokkal, kommentszállal és auditált életciklus-gombokkal.",
        },
      ],
      sections: [
        {
          id: "iktatokonyv-attekintes",
          title: "1. Az Iktatókönyv Táblázat, Gyorsnézet és Exportálás",
          description:
            "Az Iktatókönyvben minden sor egy önálló ügyiratot (dossziét) képvisel, amely alatt egy vagy több alszámos dokumentum (`-1`, `-2`) csoportosul.",
          steps: [
            {
              title: "Gyors dokumentum-előnézet megnyitása",
              description:
                "A **Műveletek** oszlopban található szem ikonra kattintva oldalváltás nélkül megnyithatod az ügyirathoz csatolt PDF dokumentumokat. Ha több melléklet tartozik a dossziéhoz, a szem ikonon lévő számláló mutatja a csatolt fájlok darabszámát.",
            },
            {
              title: "Gyors szignálás közvetlenül a táblázatból",
              description:
                "Kattints a **Felelős** oszlopban látható névre (vagy a *Kiosztatlan* feliratra). Az **Ügyirat szignálása / Felelős kijelölése** ablakban kiválaszthatod az új **Felelős ügyintéző** munkatársat és módosíthatod a **Határidő** értékét.",
            },
            {
              title: "Iktatókönyv exportálása",
              description:
                "A jobb felső **Exportálás** gombra kattintva három formátum közül választhatsz: **CSV Letöltés (Excel)**, **Hivatalos Iktatókönyv (PDF)**, vagy **Teljes csomag dokumentumokkal (ZIP)**.",
            },
          ],
          statusBadges: [
            {
              label: "Iktatva",
              color: "Kék",
              meaning: "Aktív, ügyintézés alatt álló ügyirat.",
            },
            {
              label: "Elintézett",
              color: "Smaragdzöld",
              meaning: "Az érdemi ügyintézés lezárult, az ügyirat irattározásra kész.",
            },
            {
              label: "Irattárban",
              color: "Szürke / Palaszürke",
              meaning: "Az ügyirat bekerült a digitális irattárba, és ketyeg a megőrzési ideje.",
            },
            {
              label: "Selejtezhető / Selejtezett",
              color: "Borostyán / Piros",
              meaning: "A megőrzési idő lejárt (Selejtezhető), vagy a selejtezési jegyzőkönyv alapján már selejtezésre került.",
            },
            {
              label: "Bizalmas",
              color: "Piros keretes lakat",
              meaning: "Védett személyügyi vagy vezetői dosszié; csak Admin és HR Vezető jogosultsággal látható.",
            },
          ],
        },
        {
          id: "ugyirat-adatlap-es-eletciklus",
          title: "2. Ügyirat Adatlap, Verziókezelés, Kapcsolatok és Életciklus-váltás",
          description:
            "Az iktatószámra kattintva megnyílik az ügyirat teljes adatlapja (`/dossiers/[id]`), ahol az ügyintézők együttműködhetnek és végigvihetik az ügyiratot a hivatalos életcikluson.",
          steps: [
            {
              title: "Életciklus-állapot léptetése",
              description:
                "Az adatlap fejlécében található státuszgombokkal léptetheted az ügyiratot: `IKTATVA` állapotban az **Ügyirat lezárása (Elintézett)** gombbal zárhatod le az ügyet (vagy a **Kimenő válasz csatolása** gombbal fűzhetsz hozzá válaszlevelet). `ELINTEZETT` állapotban az **Irattárba helyezés** gomb helyezi át a dossziét az Irattár modulba.",
            },
            {
              title: "Dokumentumok, SHA-256 integritás és új verziók",
              description:
                "A **Dokumentumok az ügyiratban** szekció minden alszámos iratnál megjeleníti a fájlnevet, a méretet, a `PDF/A` jelvényt és a csonkolt `SHA-256` hash-t. Az **Új verzió** gombbal meglévő irathoz tölthetsz fel módosított változatot (a korábbi verziók a **Verziók (X)** lenyílóban megmaradnak).",
            },
            {
              title: "Ügyirat-kapcsolatok, Feladatok és Megjegyzések",
              description:
                "Az adatlapon összekapcsolhatsz egymással összefüggő dossziékat (**Kapcsolat hozzáadása**: `Hivatkozik rá`, `Módosítja / Kiegészíti`, `Előzménye`, `Kapcsolódó ügyirat`), al-feladatokat írhatsz ki kollégáknak a **Feladatok** blokkban, és belső auditált üzeneteket válthatsz a **Megjegyzések és Hozzászólások** falon.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Változtathatatlan (Immutable) Audit Lánc",
              text: "Az ügyirat adatlap jobb alsó részén található Eseménytörténet (Audit) időrendben rögzít minden megtekintést, szignálást, státuszváltást és fájlműveletet.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Újranyitható egy már Elintézett vagy Irattárban lévő ügyirat?",
          answer:
            "Igen, megfelelő jogosultsággal az ügyirat adatlap fejlécében található **Ügyirat újranyitása** (Elintézett státuszból) vagy **Visszanyitás irattárból** (Irattárban státuszból) gombbal az ügyirat visszakerül aktív Iktatva állapotba, és a művelet bekerül az eseménynaplóba.",
        },
      ],
      relatedSlugs: [
        "erkeztetes-ai-felismeres-es-iktatas",
        "feladatkezeles-es-hataridok",
        "irattar-orzesi-idok-es-selejtezes",
      ],
    },

    // =========================================================================
    // 5. FELADATKEZELÉS ÉS HATÁRIDŐK
    // =========================================================================
    {
      slug: "feladatkezeles-es-hataridok",
      title: "Feladatkezelés, Kanban Tábla és Távolléti Delegálás",
      subtitle:
        "Szignált ügyiratok és al-feladatok egységes kezelése Kanban, Lista és Naptár nézetben, valamint automatikus helyettesítés beállítása szabadság idejére.",
      categoryId: "feladatok-es-partnerek",
      readingTimeMinutes: 6,
      roles: ["admin", "member"],
      accessSummary:
        "Minden felhasználó számára elérhető. A modul a bejelentkezett felhasználóra szignált ügyiratokat, a hozzá rendelt al-feladatokat, valamint aktív távolléti megbízás esetén a helyettesített kolléga feladatait jeleníti meg.",
      summary:
        "A **Saját Feladataim** (`/tasks`) modul egyetlen munkafelületen egyesíti a felhasználóra szignált teljes ügyiratokat és az ügyiratokon belül rá kiosztott részfeladatokat — húzd-és-ejtsd (drag-and-drop) Kanban táblával, táblázatos listával és havi határidő-naptárral.",
      PermissionMatrix: [
        {
          feature: "Saját szignált ügyiratok és részfeladatok kezelése (Kanban / Lista / Naptár)",
          admin: true,
          member: true,
          note: "Minden munkatárs szabadon mozgathatja a saját feladatait a státuszoszlopok között.",
        },
        {
          feature: "Távolléti delegálás (helyettesítő munkatárs kijelölése)",
          admin: true,
          member: true,
          note: "Saját távollét rögzítése bármely aktív kolléga javára.",
        },
        {
          feature: "Al-feladatok létrehozása és kiosztása más munkatársaknak",
          admin: true,
          member: true,
          note: "Az ügyirat adatlapon belül részfeladat és határidő rendelhető bármely csapattaghoz.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-09-tasks-kanban.webp",
          alt: "eaisyDocs Saját Feladataim Kanban tábla nézetváltóval és Távolléti delegálás gombbal",
          caption:
            "A Saját Feladataim (/tasks) modul Kanban Tábla nézete a Nyitott, Folyamatban, Kész és Elutasított oszlopokkal, valamint a Távolléti delegálás gyorsgombbal.",
        },
      ],
      sections: [
        {
          id: "kanban-lista-naptar-nezetek",
          title: "1. Kanban Tábla, Lista Nézet és Naptár Nézet",
          description:
            "A jobb felső nézetváltó sávval bármikor válthatsz a három munkaszervezési nézet között.",
          steps: [
            {
              title: "Kanban Tábla használata (Drag & Drop)",
              description:
                "A **Kanban Tábla** négy oszlopba rendezi a teendőket: **Nyitott**, **Folyamatban**, **Kész** és **Elutasított**. A kártyákon látható a típusjelvény (`Ügyirat` vagy `Feladat`), az iktatószám, a tárgy és a határidő. Fogd meg a kártyát, és húzd át a megfelelő oszlopba az állapot azonnali frissítéséhez.",
            },
            {
              title: "Lista Nézet és tömeges áttekintés",
              description:
                "A **Lista Nézet** fülre kattintva táblázatos formában (`Típus`, `Tárgy / Leírás`, `Kapcsolódó Ügyirat`, `Határidő`, `Állapot`, `Művelet`) tekintheted át a teendőket, és a sorvégi legördülő menüvel egyetlen kattintással módosíthatod a státuszt.",
            },
            {
              title: "Naptár Nézet a határidők tervezéséhez",
              description:
                "A **Naptár Nézet** havi lebontásban (`Hét`, `Kedd`, `Sze`, `Csüt`, `Pén`, `Szo`, `Vas`) jeleníti meg a határidős ügyiratokat és feladatokat. A **Mai nap** gombbal azonnal az aktuális napra ugorhatsz.",
            },
          ],
          uiElements: [
            {
              label: "Kanban Tábla / Lista Nézet / Naptár Nézet",
              type: "Nézetváltó gombok",
              description:
                "Azonnal átkapcsolja a munkafelületet a vizuális kártyák, a tömör táblázat és a havi naptár között.",
            },
            {
              label: "Távolléti delegálás gomb",
              type: "Gyorshivatkozás",
              description:
                "A bal felső sarokban található gomb közvetlenül a Beállítások → Profil távolléti helyettesítési szekciójához navigál.",
            },
          ],
        },
        {
          id: "tavolleti-delegalas-folyamata",
          title: "2. Távolléti Feladat-delegálás (Szabadság és Helyettesítés)",
          description:
            "Ha szabadságra mész vagy átmenetileg nem vagy elérhető, kijelölhetsz egy helyettesítő munkatársat, aki a megadott időszakban automatikusan látja és elintézheti a rád szignált ügyiratokat és feladatokat.",
          steps: [
            {
              title: "Helyettesítő és időszak kiválasztása",
              description:
                "Kattints a **Távolléti delegálás** gombra, majd az **Új távolléti megbízás rögzítése** kártyán válaszd ki a **Helyettesítő munkatárs** legördülőből a kollégádat, és add meg az **Időszak kezdete** és **Időszak vége** dátumokat.",
            },
            {
              title: "Megbízás aktiválása és visszavonása",
              description:
                "Kattints a **Megbízás rögzítése** gombra. A megbízás bekerül a **Kijelölt helyettesítőid** listába (`Aktív` vagy `Tervezett` jelvénnyel), ahonnan a **Visszavonás** gombbal bármikor idő előtt megszüntethető.",
            },
          ],
          tips: [
            {
              type: "tip",
              title: "Automatikus jogosultság-öröklés a távollét idejére",
              text: "Amíg a távolléti megbízás Aktív státuszú, a helyettesítő kolléga Saját Feladataim tábláján automatikusan megjelennek a rád szignált ügyiratok is, így egyetlen határidő sem csúszik el szabadság miatt.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi történik, ha egy teljes Ügyiratot húzok át a Kanban táblán a Kész oszlopba?",
          answer:
            "Ha egy Ügyirat típusú kártyát húzol a Kész oszlopba, a rendszer az ügyirat életciklus-állapotát automatikusan Elintézett státuszra váltja, és rögzíti a lezárást az auditnaplóban.",
        },
      ],
      relatedSlugs: [
        "dossziek-ugyiratok-es-eletciklus",
        "adminisztracio-jogosultsagok-es-beallitasok",
      ],
    },

    // =========================================================================
    // 6. PARTNERTÖRZS ÉS ÜGYFÉLKAPCSOLATOK
    // =========================================================================
    {
      slug: "partnertorzs-es-ugyfelkapcsolatok",
      title: "Partnertörzs és 360°-os Ügyfélkapcsolatok",
      subtitle:
        "Vevők, szállítók, hatóságok és magánszemélyek központi nyilvántartása, eaisyBill szinkron és partnerenkénti teljes iratforgalom.",
      categoryId: "feladatok-es-partnerek",
      readingTimeMinutes: 6,
      roles: ["admin", "member"],
      accessSummary:
        "A Partnertörzs minden felhasználó számára megtekinthető. Új partner rögzítése, szerkesztése és az eaisyBill partnerimport Admin, Vezető, HR Vezető és Iktató jogosultsággal végezhető.",
      summary:
        "A **Partnerek** (`/partners`) modul a szervezettel kapcsolatban álló összes cég, hivatal és magánszemély egységes törzsadatbázisa. Az AI iktatópult ebből a törzsből azonosítja automatikusan a beküldőket adószám vagy név alapján, a 360°-os partner adatlapon pedig egyetlen kattintással áttekinthető a partnerhez tartozó összes számla, szerződés és ügyirat.",
      PermissionMatrix: [
        {
          feature: "Partnertörzs keresése, szűrése és 360°-os partner adatlap megtekintése",
          admin: true,
          member: true,
          note: "Minden munkatárs megtekintheti a partnerek elérhetőségeit és iratforgalmát.",
        },
        {
          feature: "Új Partner rögzítése és meglévő partneradatok szerkesztése",
          admin: true,
          member: true,
          note: "Admin, Vezető, HR Vezető és Iktató szerepkörrel elérhető.",
        },
        {
          feature: "Partnertörzs tömeges importálása eaisyBill-ből",
          admin: true,
          member: false,
          note: "Egykattintásos szinkronizáció az összekapcsolt eaisyBill cégből.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-10-partners-list.webp",
          alt: "eaisyDocs Partnerek modul KPI kártyákkal, szerepkör-fülekkel és partnertáblázattal",
          caption:
            "A Partnerek (/partners) modul 4 összefoglaló KPI kártyával, szerepkör szerinti gyorsszűrő fülekkel (Vevők, Szállítók, Hatóságok, Magánszemélyek) és iratforgalmi számlálóval.",
        },
      ],
      sections: [
        {
          id: "partnertorzs-attekintes-es-szures",
          title: "1. Partner KPI-k, Szerepkör-fülek és eaisyBill Szinkron",
          description:
            "A Partnerek oldal tetején 4 KPI kártya (**ÖSSZES PARTNER**, **AKTÍV STÁTUSZÚ**, **VEVŐK / SZÁLLÍTÓK**, **ÉLŐ IRATFORGALOM**) mutatja a partnertörzs állapotát.",
          steps: [
            {
              title: "Szűrés partner-szerepkör és jogi forma szerint",
              description:
                "A táblázat feletti fülekkel egyetlen kattintással szűrhetsz: **Mind**, **Vevők**, **Szállítók**, **Hatóságok**, **Magánszemélyek** és **Inaktívak**. A jobb oldali **Szűrés** gombbal további feltételeket (pl. Cég vs. Magánszemély, iratforgalom megléte) kapcsolhatsz be.",
            },
            {
              title: "Importálás eaisyBill-ből",
              description:
                "Kattints az **Importálás eaisyBill-ből** gombra a számlázórendszerben már rögzített partnerek (név, adószám, EU adószám, székhely, e-mail) automatikus, duplikációmentes átemeléséhez.",
            },
            {
              title: "Új Partner manuális rögzítése",
              description:
                "Kattints az **Új Partner** gombra. Add meg a **Partner neve**, **Jogi forma** (`Cég / Szervezet`, `Magánszemély`, `Hatóság / Közintézmény`), **Szerepkör** (`Szállító`, `Vevő / Ügyfél`, `Szállító és Vevő`, `Hatóság`, `Egyéb`), **Belföldi adószám**, **Külföldi / EU adóazonosító (VAT / TIN)**, **Székhely / Lakcím**, **E-mail cím**, **Telefonszám**, **Kapcsolattartó neve** és **Bankszámlaszám (IBAN)** adatokat, majd kattints az **Új partner mentése** gombra.",
            },
          ],
          uiElements: [
            {
              label: "Forgalom oszlop (X irat)",
              type: "Kattintható számláló",
              description:
                "Megmutatja, hány iktatott dokumentum kapcsolódik az adott partnerhez.",
            },
            {
              label: "Szem ikon (360° Partner adatlap)",
              type: "Műveletgomb",
              description:
                "Megnyitja a partner részletes adatlapját (`/partners/[id]`), ahol az összes kapcsolódó ügyirat, dokumentum és érkeztetett küldemény egy helyen látható.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan kezeli a rendszer a külföldi (EU-s vagy EU-n kívüli) partnereket, akiknek nincs magyar adószámuk?",
          answer:
            "A partner űrlapon és az iktatópultban külön mező áll rendelkezésre a **Külföldi / EU adóazonosító (VAT / TIN)** rögzítésére (pl. `IE...`, `DE...`), így az AI a nemzetközi számlákat és szerződéseket is pontosan párosítja a partnertörzzsel.",
        },
        {
          question: "Törölhető egy partner, ha már van hozzá iktatott dokumentum?",
          answer:
            "A jogszabályi auditálhatóság miatt az iratforgalommal rendelkező partnereket nem törölni, hanem **Inaktív** státuszba helyezni javasolt a partner szerkesztőablakában.",
        },
      ],
      relatedSlugs: [
        "erkeztetes-ai-felismeres-es-iktatas",
        "iktatasi-es-ai-szabalyok",
      ],
    },

    // =========================================================================
    // 7. IKTATÁSI ÉS AI SZABÁLYOK
    // =========================================================================
    {
      slug: "iktatasi-es-ai-szabalyok",
      title: "Iktatási Szabályok és AI Prompt Könyvtár",
      subtitle:
        "Automatikus partner- és kulcsszó-alapú iktatási szabályok, valamint cégre szabott mesterséges intelligencia instrukciók kezelése.",
      categoryId: "feladatok-es-partnerek",
      readingTimeMinutes: 6,
      roles: ["admin"],
      accessSummary:
        "A Szabályok modul megtekintése és szerkesztése Admin, Vezető és Iktató szerepkörrel érhető el.",
      summary:
        "A **Szabályok** (`/rules`) modulban taníthatod meg az eaisyDocs-nak a vállalkozásod egyedi iratkezelési logikáját. Az **Iktatási Szabályok** fülön determinisztikus hozzárendeléseket (partner vagy szövegminta alapján automatikus osztály, irattári tétel és tárgy-előtag), az **AI Prompt Könyvtár** fülön pedig természetes nyelvű AI utasításokat hozhatsz létre.",
      PermissionMatrix: [
        {
          feature: "Iktatási szabályok létrehozása, szerkesztése és ki-/bekapcsolása",
          admin: true,
          member: false,
          note: "Admin, Vezető és Iktató jogosultsággal kezelhető.",
        },
        {
          feature: "Cégcsoport-szintű (Minden cégemre érvényes) szabályok publikálása",
          admin: true,
          member: false,
          note: "Lehetővé teszi, hogy egyetlen szabály a felhasználó összes cégében automatikusan fusson.",
        },
        {
          feature: "AI Prompt Könyvtár sablonok aktiválása és egyedi promptok írása",
          admin: true,
          member: false,
          note: "Közvetlenül befolyásolja az AI Kitöltés működését az iktatópultban.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-11-rules-filing.webp",
          alt: "eaisyDocs Iktatási és Könyvelési Szabályok modul szabálykártyákkal és AI Prompt Könyvtár füllel",
          caption:
            "A Szabályok (/rules) modulban kártyás nézetben áttekinthetők az aktív iktatási szabályok (illeszkedési minta, célosztály, irattári tétel, előtag) és az AI Prompt Könyvtár.",
        },
      ],
      sections: [
        {
          id: "automatikus-iktatasi-szabalyok",
          title: "1. Számla- és Iratiktatási Szabályok Létrehozása",
          description:
            "Az iktatási szabályok biztosítják, hogy a visszatérő dokumentumok (pl. havi távközlési számlák, bérleti szerződések, munkaügyi iratok) mindig ugyanabba a szervezeti egységbe és irattári tételszám alá kerüljenek.",
          steps: [
            {
              title: "Új iktatási szabály megnyitása",
              description:
                "A **Szabályok** (`/rules`) oldalon kattints a jobb felső **Új iktatási szabály** gombra.",
            },
            {
              title: "Hatókör és Illeszkedési feltételek megadása",
              description:
                "Add meg a **Szabály megnevezése** értéket (pl. *Telekom számlák és előfizetések*), és válaszd ki a **Hatókör** beállítást (**Csak az aktív cégre** vagy **Minden cégemre (cégcsoport szintű)**). Ezután állítsd be a **Partner (opcionális)**, a **Szöveg / kulcsszó minta** és az **Illeszkedés típusa** (`Tartalmazza (contains)`, `Ezzel kezdődik (starts_with)`, `Pontos egyezés (exact)` vagy `Reguláris kifejezés (regex)`) mezőket.",
            },
            {
              title: "Automatikus hozzárendelések (Célosztály, Irattári tétel, Előtag)",
              description:
                "Válaszd ki, hogy találat esetén melyik **Célosztály (Szervezeti egység)**, **Irattári tétel** (pl. `1.1 - Általános adminisztráció`), **Dokumentumtípus** (`Számla`, `Szerződés`, `HR dokumentum`, `Levelezés`, `Egyéb`) és milyen **Ügyirat tárgy előtag** (pl. `[Távközlés]`) kerüljön automatikusan kitöltésre.",
            },
          ],
          uiElements: [
            {
              label: "Aktív / Kikapcsolva jelvény és kapcsoló",
              type: "Állapotkapcsoló",
              description:
                "A szabálykártyákon a pipa ikonnal bármelyik szabály ideiglenesen kikapcsolható anélkül, hogy törölnéd.",
            },
            {
              label: "Prioritás (1 = legmagasabb)",
              type: "Sorrend-beállítás",
              description:
                "Ha egy dokumentumra több szabály is illeszkedik, az alacsonyabb prioritásszámú (magasabb rangú) szabály érvényesül.",
            },
          ],
        },
        {
          id: "ai-prompt-konyvtar",
          title: "2. AI Prompt Könyvtár és Előre Beépített Sablonok",
          description:
            "Az **AI Prompt Könyvtár** fülre kattintva természetes nyelvű instrukciókkal egészítheted ki az AI dokumentumfelismerő motorját.",
          steps: [
            {
              title: "Beépített sablon hozzáadása egy kattintással",
              description:
                "A **Gyors sablonok** sávban három kész mintát találsz: **Közüzemi számlák részletes tárgyképzése**, **Szerződések lejárati és felmondási fókusza**, valamint **Hatósági / NAV küldemények kiemelése**. Kattints a kívánt sablonra az azonnali szerkesztéshez és mentéshez.",
            },
            {
              title: "Egyedi AI szabály szövegezése",
              description:
                "Az **Új AI prompt szabály** gombra kattintva megadhatod az **Alkalmazási kör (Dokumentumtípus)** értéket (`Minden dokumentumtípus (Globális)` vagy specifikus irattípus), és az **Utasítás az AI számára (Prompt)** mezőben pontosan leírhatod, hogyan képezze a tárgyat vagy mely adatokat emelje ki az összefoglalóba.",
            },
          ],
          tips: [
            {
              type: "tip",
              title: "Kombináld a determinisztikus szabályokat és az AI promptokat!",
              text: "Az Iktatási Szabályok garantálják a 100%-ig fix osztály- és irattári tételszám-besorolást, míg az AI Prompt Könyvtár gondoskodik arról, hogy az ügyirat tárgya (pl. fogyasztási időszak, mérőállás, szerződésszám) mindig egységes formátumú legyen.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi történik, ha egy szabályt 'Minden cégemre (cégcsoport szintű)' hatókörrel mentek el?",
          answer:
            "A szabály `Global` jelvényt kap, és minden olyan cégben automatikusan lefut az iktatás során, amelyhez rendelkezel jogosultsággal — így könyvelőirodáknak vagy cégcsoportoknak elég egyszer felépíteniük a szabványos szabályrendszert.",
        },
      ],
      relatedSlugs: [
        "erkeztetes-ai-felismeres-es-iktatas",
        "adminisztracio-jogosultsagok-es-beallitasok",
      ],
    },

    // =========================================================================
    // 8. IRATTÁR, ŐRZÉSI IDŐK ÉS SELEJTEZÉS
    // =========================================================================
    {
      slug: "irattar-orzesi-idok-es-selejtezes",
      title: "Digitális Irattár, Megőrzési Idők és Négyszem-elvű Selejtezés",
      subtitle:
        "Lezárt ügyiratok megőrzési idejének automatikus követése, selejtezési javaslatok generálása, vezetői jóváhagyás és hiteles selejtezési jegyzőkönyvek.",
      categoryId: "irattar-audit-admin",
      readingTimeMinutes: 7,
      roles: ["admin", "member"],
      accessSummary:
        "Az Irattár áttekintése minden jogosult felhasználó számára elérhető. Selejtezési javaslat összeállításához Iktató/Vezető/Admin, a selejtezés végleges jóváhagyásához pedig Vezető vagy Admin jogosultság (és szigorú négyszem-elv esetén a felterjesztőtől eltérő személy) szükséges.",
      summary:
        "Az **Irattár és Selejtezés** (`/archive`) modul biztosítja, hogy a lezárt ügyiratok pontosan az Irattári Tervben előírt jogszabályi megőrzési ideig (pl. számviteli bizonylatoknál 8 évig) maradjanak megőrzés alatt, a határidő lejártakor pedig auditált, jegyzőkönyvezett folyamaton keresztül kerüljenek selejtezésre vagy levéltári átadásra.",
      PermissionMatrix: [
        {
          feature: "Irattárban lévő ügyiratok és megőrzési idők megtekintése",
          admin: true,
          member: true,
          note: "Átlátható visszaszámlálás a megőrzési idő végéig.",
        },
        {
          feature: "Lejárt ügyiratok szűrése és Felterjesztés Selejtezésre",
          admin: true,
          member: true,
          note: "Iktató, Vezető és Admin szerepkörrel indítható selejtezési eljárás.",
        },
        {
          feature: "Selejtezés Jóváhagyása és Végrehajtása / Elutasítás",
          admin: true,
          member: false,
          note: "Kizárólag Admin és Vezető szerepkörrel. Bekapcsolt szigorú négyszem-elv esetén a felterjesztő nem hagyhatja jóvá a saját javaslatát.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-12-archive.webp",
          alt: "eaisyDocs Irattár és Selejtezés modul KPI kártyákkal és irattározott ügyiratokkal",
          caption:
            "Az Irattár és Selejtezés (/archive) modul 4 állapot-KPI kártyával és a négy munkafolyamat-füllel (Javaslatok, Jóváhagyandó, Irattárban, Selejtezett & Jegyzőkönyvek).",
        },
      ],
      sections: [
        {
          id: "irattar-kpi-es-fulek",
          title: "1. Irattári KPI Kártyák és a Négy Selejtezési Munkafül",
          description:
            "Az oldal tetején lévő 4 KPI kártya (**IRATTÁRBAN LÉVŐ**, **SELEJTEZÉSI JAVASLAT**, **JÓVÁHAGYANDÓ TÉTEL**, **SELEJTEZETT IRAT**) élőben mutatja a digitális irattár állományát.",
          steps: [
            {
              title: "1. fül: Javaslatok (Lejárt megőrzési idejű ügyiratok felkutatása)",
              description:
                "A **Javaslatok** fülön válaszd ki a **Fordulónap (eddig lejárt ügyiratok)** dátumát (pl. **Mai nap** vagy **Előző év vége**), vagy kattints a **Lejárt generálás** gombra. Jelöld be a lejárt tételeket, majd kattints a **Felterjesztés Selejtezésre (X)** gombra, és add meg a jegyzőkönyv sorszámát (pl. `JZK/2026/001`).",
            },
            {
              title: "2. fül: Jóváhagyandó (Négyszem-elvű vezetői ellenőrzés)",
              description:
                "A felterjesztett tételek átkerülnek a **Jóváhagyandó** fülre (`Jóváhagyásra vár` jelvénnyel). Itt a jogosult vezető ellenőrzi a listát, majd a **Selejtezés Jóváhagyása és Végrehajtása (X)** gombbal véglegesíti a selejtezést, vagy az **Elutasítás (Vissza az irattárba)** gombbal visszaküldi azokat.",
            },
            {
              title: "3. és 4. fül: Irattárban & Selejtezett és Jegyzőkönyvek",
              description:
                "Az **Irattárban** fülön követheted az összes aktív megőrzés alatt álló dossziét (és szükség esetén a **Visszanyitás** gombbal újranyithatod őket). A **Selejtezett & Jegyzőkönyvek** fülön pedig bármikor letöltheted a hivatalos **Selejtezési Jegyzőkönyv** és **Levéltári Átadási Jegyzőkönyv** dokumentumokat (`TXT` és `Nyomtatható PDF` formátumban).",
            },
          ],
          statusBadges: [
            {
              label: "Selejtezhető",
              color: "Piros",
              meaning: "Az irattári tétel selejtezhető minősítésű, és a megőrzési ideje lejárt.",
            },
            {
              label: "Levéltárba adandó",
              color: "Kék",
              meaning: "Maradandó értékű (nem selejtezhető) ügyirat, amelyet a megőrzési idő lejártával levéltári átadásra kell kijelölni.",
            },
          ],
          tips: [
            {
              type: "warning",
              title: "Szigorú Négyszem-elv (335/2005. Korm. rendelet megfelelőség)",
              text: "Ha a Rendszergazda fülön be van kapcsolva a 'Szigorú négyszem-elv megkövetelése selejtezéskor' opció, a selejtezési javaslatot összeállító felhasználó még Admin jogosultsággal sem hagyhatja jóvá a saját felterjesztését — ahhoz egy második vezetői/admin jóváhagyó szükséges.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi alapján számolja ki a rendszer egy ügyirat Megőrzés Vége dátumát?",
          answer:
            "Az iktatáskor kiválasztott Irattári Tétel megőrzési idejét (pl. 8 év) adja hozzá az ügyirat lezárásának / iktatásának évéhez. Ha az irattári tétel 'Nem selejtezhető (Örök megőrzés)', a Megőrzés Vége oszlopban a 'Nem selejtezhető' felirat jelenik meg.",
        },
      ],
      relatedSlugs: [
        "dossziek-ugyiratok-es-eletciklus",
        "vezetoi-kimutatasok-es-audit-naplo",
        "adminisztracio-jogosultsagok-es-beallitasok",
      ],
    },

    // =========================================================================
    // 9. VEZETŐI KIMUTATÁSOK ÉS AUDIT NAPLÓ
    // =========================================================================
    {
      slug: "vezetoi-kimutatasok-es-audit-naplo",
      title: "Központi Eseménynapló (Audit) és Kiküldési Napló",
      subtitle:
        "Visszavonhatatlan (append-only) biztonsági eseménynapló, bizalmas iratbetekintések követése, JSON diff összehasonlítás és kimenő e-mail napló.",
      categoryId: "irattar-audit-admin",
      readingTimeMinutes: 6,
      roles: ["admin"],
      accessSummary:
        "A Központi Eseménynapló (/audit) kizárólag Admin, Vezető és HR Vezető szerepkörrel rendelkező felhasználók számára érhető el.",
      summary:
        "A **Központi Eseménynapló** (`/audit`) minden rendszereseményt, iratérkeztetést, iktatást, bizalmas dokumentum-megtekintést és törzsadat-módosítást módosíthatatlan (append-only) formában rögzít, teljesítve a 335/2005. Korm. rendelet és a GDPR elszámoltathatósági követelményeit.",
      PermissionMatrix: [
        {
          feature: "Rendszernapló (Audit) és Kiküldési Napló megtekintése",
          admin: true,
          member: false,
          note: "Admin, Vezető és HR Vezető jogosultsággal érhető el.",
        },
        {
          feature: "Audit rekordok részletes (Régi vs. Új érték JSON) vizsgálata",
          admin: true,
          member: false,
          note: "Minden módosításnál mezőszinten látható az előtte/utána állapot.",
        },
        {
          feature: "Teljes auditnapló CSV exportálása külső könyvvizsgálathoz vagy hatósági ellenőrzéshez",
          admin: true,
          member: false,
          note: "UTF-8 BOM kódolású, Excel-kompatibilis audit kivonat.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-13-audit-log.webp",
          alt: "eaisyDocs Központi Eseménynapló (Audit) KPI kártyákkal, időszakszűrővel és részletes eseménytáblázattal",
          caption:
            "A Központi Eseménynapló (/audit) 4 biztonsági KPI kártyával, Rendszernapló / Kiküldési Napló fülekkel és visszavonhatatlan eseménysorokkal.",
        },
      ],
      sections: [
        {
          id: "rendszernaplo-es-kpi-k",
          title: "1. Rendszernapló (Audit), Időszakszűrők és CSV Export",
          description:
            "Az Eseménynapló tetején 4 biztonsági mutató (**ÖSSZES AUDIT ESEMÉNY**, **IRAT BETEKINTÉS & LETÖLTÉS**, **IKTATÁSOK & MÓDOSÍTÁSOK**, **KÖZREMŰKÖDŐ FELHASZNÁLÓK**) foglalja össze a szervezet aktivitását.",
          steps: [
            {
              title: "Szűrés időszakra, művelettípusra és modulra",
              description:
                "Használd a gyors időszakgombokat (**Mind**, **Ma**, **Elmúlt 7 nap**, **Elmúlt 30 nap**), vagy nyisd le a **Szűrés** panelt, ahol konkrét műveletre (`Létrehozás`, `Módosítás`, `Törlés`, `Iktatás`, `Megtekintés`, `Letöltés`, `Állapotváltás`, `Szignálás`) és modulra (`Ügyiratok`, `Iratok`, `Fájlok`, `Partnerek`, `Szabályok`) is szűrhetsz.",
            },
            {
              title: "Esemény részletek (Régi érték vs. Új érték) megtekintése",
              description:
                "Kattints bármelyik audit sor jobb szélén található **Megnyitás** gombra. Az **Audit Esemény Részletei** ablakban láthatod az egyedi eseményazonosítót, a végrehajtó felhasználó e-mail címét és szerepkörét, valamint egymás mellett a **Régi érték (Előtte)** és az **Új érték (Utána)** adatstruktúrát.",
            },
            {
              title: "Kiküldési Napló ellenőrzése",
              description:
                "Válts a **Kiküldési Napló** fülre a rendszerből kiküldött e-mailek és értesítések (`Kézbesítve`, `Folyamatban`, `Sikertelen`) nyomon követéséhez.",
            },
          ],
          statusBadges: [
            {
              label: "Megtekintés / Letöltés",
              color: "Cián / Kék",
              meaning: "Rögzíti, hogy melyik felhasználó és mikor nyitotta meg vagy töltötte le a dokumentumot.",
            },
            {
              label: "Iktatás / Létrehozás",
              color: "Smaragdzöld",
              meaning: "Új irat érkeztetése, iktatása vagy új törzsadat létrehozása.",
            },
            {
              label: "Módosítás / Állapotváltás / Szignálás",
              color: "Borostyán / Lila",
              meaning: "Metaadat-változás, ügyirat-státusz léptetése vagy felelős ügyintéző módosítása.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Törölhet vagy módosíthat egy Rendszergazda bejegyzéseket a Központi Eseménynaplóban?",
          answer:
            "Nem. Az adatbázis-szintű szabályozás (append-only audit log) garantálja, hogy a naplóbejegyzések utólag semmilyen szerepkörrel nem módosíthatók és nem törölhetők.",
        },
      ],
      relatedSlugs: [
        "irattar-orzesi-idok-es-selejtezes",
        "adminisztracio-jogosultsagok-es-beallitasok",
      ],
    },

    // =========================================================================
    // 10. ADMINISZTRÁCIÓ, JOGOSULTSÁGOK ÉS BEÁLLÍTÁSOK
    // =========================================================================
    {
      slug: "adminisztracio-jogosultsagok-es-beallitasok",
      title: "Adminisztráció, Jogosultságok, Cégadatok és Irattári Terv (Beállítások)",
      subtitle:
        "Felhasználói profil, 2FA biztonság, cégadatok, meghívókódok, szervezeti egységek, IMAP/Brevo integráció, Irattári Terv és granuláris jogosultsági mátrix.",
      categoryId: "irattar-audit-admin",
      readingTimeMinutes: 8,
      roles: ["admin", "member"],
      accessSummary:
        "A Profil és az Értesítések fülek minden felhasználó számára elérhetők. A Cég, a Szervezeti Egységek és a Rendszergazda fülek konfigurálása Admin / Cégtulajdonos jogosultsághoz kötött.",
      summary:
        "A **Beállítások** (`/settings`) modul 5 áttekinthető fülön (**Profil**, **Cég**, **Szervezeti Egységek**, **Értesítések**, **Rendszergazda**) fogja össze a személyes biztonsági beállításokat és a vállalati iratkezelési alapinfrastruktúrát.",
      PermissionMatrix: [
        {
          feature: "Saját Profil, Jelszó, Munkamenet-időtúllépés, 2FA és Értesítések kezelése",
          admin: true,
          member: true,
          note: "Minden felhasználó saját maga állíthatja be.",
        },
        {
          feature: "Cégadatok, Iktatószám-előtag, Meghívókód és Csapattagok kezelése",
          admin: true,
          member: false,
          note: "Cégtulajdonos és Admin jogosultsággal szerkeszthető.",
        },
        {
          feature: "Szervezeti Egységek (Osztályok) felépítése",
          admin: true,
          member: false,
          note: "Meghatározza az iktatáskor választható célosztályokat.",
        },
        {
          feature: "IMAP/Brevo hitelesítés, Négyszem-elv, Irattári Terv és Felhasználói Jogosultsági Mátrix",
          admin: true,
          member: false,
          note: "A Rendszergazda fülön érhető el Admin jogosultsággal.",
        },
      ],
      screenshots: [
        {
          src: "/kb/eaisy-docs/docs-14-settings-profile.webp",
          alt: "eaisyDocs Beállítások modul Profil, Biztonság (2FA, munkamenet) és Távolléti delegálás szekciókkal",
          caption:
            "A Beállítások (/settings) modul 5 navigációs füllel (Profil, Cég, Szervezeti Egységek, Értesítések, Rendszergazda), 2FA védelemmel és hivatalos IT Biztonsági Szabályzattal.",
        },
      ],
      sections: [
        {
          id: "profil-es-ertesitesek",
          title: "1. Profil, Biztonság (2FA) és Értesítési Preferenciák",
          description:
            "A **Profil** és az **Értesítések** füleken minden munkatárs testreszabhatja a saját fiókját.",
          steps: [
            {
              title: "Személyes adatok, munkamenet-időtúllépés és 2FA beállítása",
              description:
                "A **Profil** fülön módosíthatod a nevedet, pozíciódat, telefonszámodat és profilképedet. A **Biztonság** kártyán kiválaszthatod az automatikus kijelentkezési időt (**5 perc**, **15 perc**, **30 perc**, **60 perc**), és a **Kétlépcsős azonosítás → Bekapcsolás** gombbal QR-kóddal aktiválhatod a 2FA védelmet.",
            },
            {
              title: "IT Biztonsági Szabályzat és Iratkezelési Szabályzat letöltése",
              description:
                "A Profil fül alján található **Hivatalos Dokumentációk** kártyán bármikor megtekintheted és nyomtatható PDF-ben letöltheted a szervezet hatályos **IT Biztonsági Szabályzat** és **Iratkezelési Szabályzat** dokumentumait.",
            },
            {
              title: "Értesítések testreszabása",
              description:
                "Az **Értesítések** fülön külön kapcsolókkal szabályozhatod az e-mailes és rendszeren belüli riasztásokat (**E-mail értesítések**, **Határidő figyelmeztetések**, **Új beérkező iratok**, **Rendszer üzenetek**).",
            },
          ],
        },
        {
          id: "ceg-es-szervezeti-egysegek",
          title: "2. Cégadatok, Meghívókódok és Szervezeti Egységek",
          description:
            "A **Cég** és a **Szervezeti Egységek** füleken építhető fel a vállalkozás törzsadata és belső osztálystruktúrája.",
          steps: [
            {
              title: "Cégadatok és Iktatószám előtag beállítása",
              description:
                "A **Cég** fülön adhatod meg a cég nevét, adószámát, székhelyét, cégjegyzékszámát és az **Iktatószám előtag** értéket (pl. `OPT` → `OPT/2026/00001`).",
            },
            {
              title: "Munkatársak meghívása 64 karakteres Meghívókóddal",
              description:
                "A **Meghívókód** kártyán másold ki a cég biztonsági tokenjét (vagy generálj újat az **Új kód generálása** gombbal). A kollégák ezzel a kóddal tudnak csatlakozni a céghez, majd a **Csapattagok** táblázatban állíthatod be a szerepkörüket.",
            },
            {
              title: "Szervezeti Egységek (Osztályok) rögzítése",
              description:
                "A **Szervezeti Egységek** fülön hozhatod létre a vállalat osztályait (pl. *Pénzügy*, *HR*, *Jogi osztály*, *IT*) egyedi **Rövidítés / Kód** értékkel.",
            },
          ],
        },
        {
          id: "rendszergazda-irattari-terv-es-jogosultsagok",
          title: "3. Rendszergazda Fül: IMAP/Brevo, Irattári Terv és 6 Szintű Jogosultsági Mátrix",
          description:
            "A **Rendszergazda** fül tartalmazza a cég-szintű technikai és megfelelőségi vezérlőket.",
          steps: [
            {
              title: "Beérkező E-mail (IMAP) és Kimenő Értesítések (Brevo) konfigurálása",
              description:
                "A **Hitelesítő adatok** szekcióban kapcsold be a **Beérkező e-mail csatorna engedélyezése ennél a cégnél** opciót, add meg az **IMAP kiszolgáló**, **Port**, **Felhasználónév** és **IMAP jelszó** értékeket, majd ellenőrizd a beállítást a **Kapcsolat tesztelése** gombbal.",
            },
            {
              title: "Irattári Terv (Tételszámok és Megőrzési Idők) kezelése",
              description:
                "Az **Irattári Terv** kártyán az **Új tétel** gombbal veheted fel a hivatalos irattári tételeket (**Tételszám**, pl. `1.1`, **Megnevezés**, **Megőrzési idő (év)** és **Selejtezhető a megőrzési idő lejártával** jelölőnégyzet).",
            },
            {
              title: "Felhasználók és Szerepkörök (6 előre definiált profil + modul-szintű finomhangolás)",
              description:
                "A **Felhasználók és Szerepkörök** táblázatban minden munkatárshoz hozzárendelheted a 6 szakmai szerepkör egyikét: **Admin** (teljes hozzáférés), **Vezető** (minden modul olvasása/írása a bizalmas HR dossziék kivételével), **HR Vezető** (hozzáférés a Bizalmas minősítésű HR dossziékhoz is), **Iktató** (érkeztetés, iktatás, partnerek és szabályok kezelése), **Munkatárs** (saját osztály ügyiratai és saját feladatok), vagy **Betekintő** (csak olvasási jog). A **Modulok** gombra kattintva felhasználónként egyedileg is felülbírálhatod a 8 modul olvasási (`Megtekintés`) és írási (`Szerkesztés`) jogosultságait.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Modul-szintű Olvasás / Írás (R/W) mátrix",
              text: "Ha egy munkatársnak alapvetően Munkatárs szerepköre van, de szeretnéd, hogy a Partnertörzset is szerkeszthesse, a Modulok gombbal a szerepkör megváltoztatása nélkül is adhatsz neki Szerkesztés jogot a Partnerek modulra.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Ki láthatja a 'Bizalmas' minősítéssel iktatott személyügyi vagy vezetői iratokat?",
          answer:
            "A Bizalmas minősítésű iratokat és dossziékat kizárólag az **Admin** és a **HR Vezető** szerepkörrel rendelkező felhasználók érhetik el — más szerepkörök számára a fájlok és az előnézetek zárolva maradnak.",
        },
        {
          question: "Hogyan tudom érvényteleníteni a régi meghívókódot, ha egy munkatárs távozik a cégtől?",
          answer:
            "A Beállítások → Cég fülön kattints a Meghívókód melletti **Új kód generálása** gombra. Ezzel a korábbi meghívókód azonnal érvényét veszti.",
        },
      ],
      relatedSlugs: [
        "bejelentkezes-navigacio-es-vezerlopult",
        "irattar-orzesi-idok-es-selejtezes",
        "vezetoi-kimutatasok-es-audit-naplo",
      ],
    },
  ],
};
