import type { ProductKnowledgeBase } from "./types";

export const eaisyBooksKb: ProductKnowledgeBase = {
  slug: "eaisy-books",
  name: "eaisyBooks",
  tagline:
    "AI-támogatott könyvelőirodai portfólió, kettős könyvvitel, NAV Online Számla & eÁFA, bérszámfejtés és OBR éves beszámoló platform",
  description:
    "Teljes körű magyar nyelvű szakmai kézikönyv az eaisyBooks és eaisyBill integrált számviteli és pénzügyi ökoszisztémához: könyvelőirodai ügyfélportfólió, négyszem-elvű jóváhagyás, NAV Online Számla 3.0 és Cégkapu integráció, AI OCR bizonylatfeldolgozás, bejövő/kimenő számlaláncok, előlegek és pályázatok, kötegelt Kontírozás Varázsló, Posted-Only főkönyv, bank és házipénztár, devizás átértékelés, 2665/65M/A60/eÁFA bevallások, tárgyi eszköz és készletanalitika, teljes körű bérszámfejtés (2608), valamint TAO, KIVA, HIPA, egyéni vállalkozói könyvelés, évzárás és OBR e-beszámoló.",
  productRoute: "/eaisy-books",
  appUrl: "https://books.eaisy.hu",
  status: "live",
  version: "2.4",
  updatedAt: "2026. november",
  theme: {
    accent: "#89C4D1",
    secondary: "#085D6F",
    dark: "#032A32",
    softBg: "#EFFAFC",
  },
  roles: [
    {
      role: "admin",
      label: "Iroda Adminisztrátor / Senior Könyvelő / Cégvezető",
      summary:
        "Teljes hozzáférés a könyvelőirodai ügyfélportfólióhoz, új cégek és üzleti évek nyitásához, a jogosultságkezelő mátrixhoz, a négyszem-elvű jóváhagyási sorhoz, az időszak-zároláshoz és feloldáshoz, a 2665/2608/TAO/KIVA/HIPA bevallások véglegesítéséhez, az évzáráshoz, az OBR e-beszámolóhoz és a módosíthatatlan auditnaplóhoz.",
    },
    {
      role: "member",
      label: "Könyvelő / Asszisztens / Bérszámfejtő / Ügyfél",
      summary:
        "Hozzáférés a hozzárendelt ügyfélcégek számla- és dokumentumfeltöltéséhez, az AI OCR előkontírozáshoz, a Kontírozás Varázslóhoz, a bank- és házipénztár-rögzítéshez, a hiányzó bizonylatok egyeztetéséhez, valamint szerepkörtől függően a bérszámfejtési munkaterülethez vagy az ügyfélkapu olvasói nézethez.",
    },
  ],
  categories: [
    {
      id: "alapok-torzsadatok-es-ocr",
      title: "Alapbeállítások, Partnertörzs & AI Bizonylatfeldolgozás",
      description:
        "Bejelentkezés, könyvelőirodai ügyfélportfólió, cégbeállítás varázsló, üzleti évek, négyszem-elvű jóváhagyás, audit és GDPR, partnertörzs, NAV Online Számla 3.0, Cégkapu és AI OCR dokumentumfeldolgozás.",
      icon: "ScanLine",
    },
    {
      id: "szamlak-elolegek-es-projektek",
      title: "Számlák, Előlegek, Részszámlák & Pályázatok",
      description:
        "Bejövő és kimenő számlák négy dátuma, speciális ÁFA-esetek, AAM keretfigyelés, módosító és sztornó számlaláncok, kétirányú hiányzó számla radar, díjbekérők, előleg-felosztó varázsló, garanciális visszatartás és pályázati támogatások.",
      icon: "FileText",
    },
    {
      id: "fokonyv-penzugyek-es-eszkozok",
      title: "Főkönyv, Bank, Pénztár, Deviza, Tárgyi Eszköz & Készlet",
      description:
        "Kötegelt Kontírozás Varázsló, naplók, Posted-Only főkönyv, folyószámla korosítás, controlling dimenziók, időbeli elhatárolások, saját tőke és osztalék, banki párosítás, házipénztár, MNB/EKB deviza-átértékelés, hitelek/lízingek, tárgyi eszköz ÉCS és készletanalitika.",
      icon: "Landmark",
    },
    {
      id: "adozas-berszamfejtes-es-beszamolo",
      title: "ÁFA (2665/eÁFA), Bérszámfejtés (2608), TAO/KIVA/HIPA & Évzárás",
      description:
        "ÁFA-kód mátrix, 2665 bevallás, 65M és A60 összesítők, NAV eÁFA egyeztetés, önellenőrzés, teljes körű bérszámfejtés, adókedvezmény-nyilatkozatok, 2608 bevallás és főkönyvi bérfeladás, TAO, KIVA, HIPA, egyéni vállalkozók, évzárás és OBR éves beszámoló.",
      icon: "Calculator",
    },
  ],
  articles: [
    // =========================================================================
    // 1. FEJEZET — ELSŐ LÉPÉSEK, CÉGBEÁLLÍTÁS, ÜZLETI ÉVEK ÉS JOGOSULTSÁGOK
    // =========================================================================
    {
      slug: "alapbeallitasok-cegek-uzleti-evek-es-jogosultsagok",
      title: "1. Első lépések, Cégbeállítás, Üzleti Évek és Jogosultságok",
      subtitle:
        "Biztonságos bejelentkezés (2FA), eaisyBill / eaisyBooks nézetváltás, könyvelőirodai ügyfélportfólió, 6 lépéses Cégbeállítás varázsló, eltérő üzleti évek, négyszem-elvű jóváhagyás, jogosultsági mátrix, auditnapló és 8 éves számviteli megőrzés.",
      categoryId: "alapok-torzsadatok-es-ocr",
      readingTimeMinutes: 9,
      roles: ["admin", "member"],
      accessSummary:
        "Bejelentkezés (/login), eaisyBooks Ügyfélportfólió (/eaisybooks/dashboard), Törzsadatok → Cégbeállítás varázsló, Jóváhagyási sor, Jogosultságkezelő, Audit napló és Iratkezelés / GDPR (C04).",
      summary:
        "Az eaisyBooks és eaisyBill közös platformon kapcsolja össze a vállalkozások napi pénzügyi ügyvitelét a könyvelőirodai portfóliókezeléssel. A rendszer cégenként szigorúan elszigetelt adatbázist, naptári és eltérő üzleti évek párhuzamos kezelését, szerepkör-alapú jogosultsági mátrixot, négyszem-elvű jóváhagyást, módosíthatatlan auditnaplót és a Számviteli törvény szerinti 8–20 éves törlésvédelmet biztosít.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-01-login-screen.webp",
          alt: "eaisyBill és eaisyBooks közös bejelentkezési felület kétfaktoros hitelesítési támogatással",
          caption:
            "Bejelentkezési felület: biztonságos belépés munkahelyi e-mail címmel, jelszóval és kétfaktoros hitelesítéssel (2FA).",
        },
        {
          src: "/kb/eaisy-books/books-02-eaisybooks-portfolio.webp",
          alt: "Könyvelőirodai Ügyfélportfólió és Irodai Áttekintés a zárási státuszokkal és hiányzó számlákkal",
          caption:
            "Ügyfélportfólió & Irodai Áttekintés: valós idejű rálátás a kezelt ügyfélcégek havi zárási készültségére, a kritikus elmaradásokra és a hiányzó számlákra.",
        },
        {
          src: "/kb/eaisy-books/books-03-company-setup.webp",
          alt: "Cégbeállítás varázsló és Üzleti év kiválasztása modális ablak",
          caption:
            "Cégbeállítás varázsló és Üzleti év választó: 6 lépéses vezetett beállítás az adószámtól és számlatükörtől a nyitómérleg-átvételig.",
        },
        {
          src: "/kb/eaisy-books/books-04-approval-queue.webp",
          alt: "Négy-szem elvű jóváhagyó rendszer és várólista",
          caption:
            "Jóváhagyási sor (Négy-szem elv): a könyvelő vagy asszisztens által előkészített tételek és bevallások vezetői ellenőrzése és véglegesítése.",
        },
        {
          src: "/kb/eaisy-books/books-05-permission-matrix.webp",
          alt: "Jogosultságkezelő mátrix a szerepkörök és modul-hozzáférések beállításával",
          caption:
            "Jogosultságkezelő: az Iroda Admin, Senior Könyvelő, Könyvelő, Asszisztens és Bérszámfejtő jogosultságok granullált kiosztása.",
        },
        {
          src: "/kb/eaisy-books/books-06-audit-log.webp",
          alt: "Rendszerszintű módosíthatatlan ellenőrzési (audit) napló",
          caption:
            "Rendszerszintű Audit Napló: minden kritikus műveletet időbélyeggel, felhasználóval, régi és új értékkel visszavonhatatlanul rögzít.",
        },
        {
          src: "/kb/eaisy-books/books-07-data-retention-gdpr.webp",
          alt: "Iratkezelés, Megőrzés és GDPR központ a 8 éves számviteli törlésvédelemmel",
          caption:
            "Iratkezelés, Megőrzés és GDPR (C04): háromszintű adatmegőrzési motor a 8 éves számviteli és 20 éves tárgyi eszköz ÁFA megőrzési védelemmel.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Ügyfélportfólió megtekintése, új ügyfélcég felvétele és számlatükör klónozás",
          admin: true,
          member: false,
          note: "Munkatársak kizárólag a hozzájuk rendelt ügyfélcégek adatait látják.",
        },
        {
          feature: "Bizonylatok előkészítése, kontírozás, bank- és pénztárrögzítés",
          admin: true,
          member: true,
          note: "Bekapcsolt négy-szem elv esetén a munkatársi rögzítés a Jóváhagyási sorba kerül.",
        },
        {
          feature: "Négy-szem elvű tételek és bevallások jóváhagyása, időszak-zárolás",
          admin: true,
          member: false,
          note: "Senior könyvelő vagy Iroda adminisztrátor jogosultsághoz kötött.",
        },
        {
          feature: "Főkönyvileg lezárt időszak feloldása kötelező indoklással",
          admin: true,
          member: false,
          note: "Minden feloldás indoklással együtt bekerül a módosíthatatlan Audit naplóba.",
        },
        {
          feature: "Jogosultságkezelő mátrix, Audit napló és GDPR megőrzési futamok kezelése",
          admin: true,
          member: false,
          note: "Iroda adminisztrátor szerepkörhöz kötött.",
        },
      ],
      sections: [
        {
          id: "bejelentkezes-portfolio-es-cegbeallitas",
          title: "1. Bejelentkezés, Könyvelőirodai Portfólió és 6 lépéses Cégbeállítás",
          description:
            "A bal felső sarokban található **eaisyBill / eaisyBooks** nézetváltóval egyetlen kattintással válthatsz az ügyfélszintű pénzügyi-könyvelési munkaterület és a könyvelőirodai **Ügyfélportfólió** között.",
          steps: [
            {
              title: "Bejelentkezés és kétlépcsős azonosítás (2FA)",
              description:
                "Nyisd meg a bejelentkezési képernyőt, add meg a munkahelyi e-mail címedet és jelszavadat, majd kattints a **Bejelentkezés** gombra. Ha az irodai szabályzat vagy a munkakör (pl. irodavezető, senior könyvelő) megköveteli a 2FA-t, írd be a hitelesítő alkalmazás 6 jegyű kódját. Munkatárs kiléptetésekor az élő munkamenet azonnal lezárul.",
            },
            {
              title: "Könyvelőirodai portfólió és munkaszüneti napos adónaptár áttekintése",
              description:
                "Az **Ügyfélportfólió & Irodai Áttekintés** felületen kártyás vagy táblázatos nézetben láthatod az összes kezelt vállalkozás adózási formáját (`TAO / KIVA`, `EV & Egyéni`, `Bérszámfejtés`), a havi zárási készültséget (%), a feldolgozatlan és hiányzó számlák számát. Az **Adónaptár & Határidők** modul automatikusan áthelyezi a hétvégére vagy ünnepnapra eső bevallási határidőket a következő munkanapra.",
            },
            {
              title: "Új cég felvétele, számlatükör és nyitómérleg átvétele",
              description:
                "Kattints az **+ Új ügyfél** gombra (vagy nyisd meg a **Törzsadatok → Cégbeállítás varázsló** oldalt), és haladj végig a 6 lépésen: **1. Cég alapadatok** (adószám CDV-ellenőrzéssel, EU-s adószám, cégjegyzékszám, könyvvezetés pénzneme HUF/EUR), **2. Számlatükör és naplók** (mintaszámlatükör klónozás vagy egyedi számlatükör import mérlegsor-megfeleltetéssel), **3. ÁFA-beállítások** (havi/negyedéves/éves, pénzforgalmi ÁFA, AAM keretfigyelés), **4. Deviza és árfolyam-forrás**, **5. Projektek és költségkategóriák**, **6. Csapat és véglegesítés**.",
            },
            {
              title: "Nyitómérleg átvétele korábbi könyvelőprogramból (Törzsadatok → Évnyitás)",
              description:
                "Korábbi programból történő átálláskor a rendszer ellenőrzi a **Nyitó Tartozik = Követel** egyezőséget és a vevő/szállító folyószámla-analitika főkönyvi egyezését, valamint automatikusan felismeri a magyar számformátumokat (`1 234 567,89`) és ékezetes karaktereket (`ő`, `ű`).",
            },
          ],
          uiElements: [
            {
              label: "eaisyBill / eaisyBooks nézetváltó",
              type: "Kapcsoló",
              description:
                "A bal oldalsáv tetején található váltógomb az ügyfélszintű pénzügyi/könyvelési nézet és a könyvelőirodai Ügyfélportfólió között.",
            },
            {
              label: "Üzleti év és Időszakválasztó",
              type: "Felső vezérlősáv",
              description:
                "A felső sávban kiválasztható az üzleti év (naptári vagy eltérő üzleti év, pl. április 1. – március 31., illetve tört előtársasági év) és a vizsgált időszak.",
            },
            {
              label: "+ Új ügyfél / Cégbeállítás varázsló",
              type: "Varázsló",
              description:
                "6 lépéses vezetett felület a cégadatok, számlatükör, ÁFA-státusz, deviza-árfolyamforrás, projektek és jogosultságok beállításához.",
            },
          ],
        },
        {
          id: "uzleti-evek-jogosultsagok-negyszem-elv-es-audit",
          title: "2. Időszak-státuszok, Négy-szem elvű jóváhagyás, Audit és 8 éves megőrzés",
          description:
            "A rendszer szigorú jogosultsági és időszak-zárolási szabályokkal védi a már bevallott ÁFA-időszakokat és a lezárt főkönyvet.",
          steps: [
            {
              title: "Jogosultságok kiosztása és személyes béradatok védelme",
              description:
                "A **Jogosultságkezelő** mátrixban munkatársanként állíthatod be az **Iroda Admin**, **Senior Könyvelő**, **Könyvelő**, **Asszisztens** vagy **Bérszámfejtő** szerepkört. A személyes béradatok a könyvelők elől elzárhatók, így azokat kizárólag a kijelölt bérszámfejtő kezelheti.",
            },
            {
              title: "Négy-szem elvű jóváhagyás és párhuzamos szerkesztés védelme",
              description:
                "Ha egy ügyfélnél vagy művelettípusnál aktív a **négy-szem elv**, a könyvelő által előkészített tétel vagy bevallás a **Jóváhagyási sorba** kerül, és csak egy második, jogosult vezető jóváhagyása után válik véglegessé. Ha két munkatárs egyszerre szerkesztene egy bizonylatot, a rendszer mentéskor ütközésvédelemmel megakadályozza a csendes felülírást.",
            },
            {
              title: "Audit napló és 8–20 éves számviteli törlésvédelem ellenőrzése",
              description:
                "Az **Audit napló** minden véglegesítést, sztornót, időszak-feloldást és jogosultságváltozást régi/új értékkel rögzít. Az **Iratkezelés, Megőrzés és GDPR (C04)** központban a 8 éves számviteli (és tárgyi eszköz ÁFA-figyelésnél 20 éves) megőrzési időn belül a könyvelt bizonylatok törlése fizikailag blokkolt.",
            },
          ],
          statusBadges: [
            {
              label: "Nyitott időszak",
              color: "green",
              meaning:
                "Szabad bizonylatrögzítés, kontírozás és banki párosítás engedélyezett az adott hónapban.",
            },
            {
              label: "ÁFA-lezárt (bevallott)",
              color: "amber",
              meaning:
                "A bevallott időszak ÁFA-analitikája zárolt; utólagos számla rögzítésekor a rendszer felajánlja a tárgyidőszaki levonást vagy az önellenőrzést.",
            },
            {
              label: "Főkönyvileg lezárt",
              color: "red",
              meaning:
                "Új könyvelés tiltott; feloldást kizárólag jogosult vezető végezhet kötelező, auditnaplózott indoklással.",
            },
            {
              label: "KRITIKUS / FELDOLGOZANDÓ / RENDBEN",
              color: "blue",
              meaning:
                "Az Ügyfélportfólió kártyáin jelzi az ügyfélcég havi zárási készültségét és a zárást blokkoló tételek számát.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Csak analitikus főkönyvi számlákra engedélyezett a könyvelés",
              text: "A számlatükörben kizárólag a legalsó szintű analitikus számlákra könyvelhető tétel; a gyűjtőszámlák egyenlege automatikusan az alszámlák összegeként képződik. Használaton kívüli számla inaktiválható a korábbi egyenleg megőrzésével.",
            },
            {
              type: "warning",
              title: "Minden főkönyvi számlához kötelező mérleg- és eredménykimutatás-sor",
              text: "Ha egy újonnan felvett főkönyvi számlához nem rendeltél mérleg- vagy eredménykimutatás-sort, a rendszer beszámolókészítés előtt figyelmeztet, így egyetlen egyenleg sem maradhat ki a mérlegből.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan kezeli a rendszer a naptári évtől eltérő üzleti évet (pl. április 1. – március 31.)?",
          answer:
            "A főkönyvi zárás, az értékcsökkenés és az éves beszámoló az eltérő üzleti év fordulónapjához igazodik, miközben a havi vagy negyedéves ÁFA-bevallások párhuzamosan követik a naptári időszakokat anélkül, hogy a két időrend összekeveredne.",
        },
        {
          question: "Kiolvaszthatók-e a rögzített NAV Online Számla technikai kulcsok a felületen?",
          answer:
            "Nem. A NAV Online Számla technikai felhasználó jelszava, XML aláíró- és cserekulcsa titkosítva tárolódik; sem a képernyőn, sem a letöltött kimutatásokban vagy auditnaplókban nem olvasható ki.",
        },
      ],
      relatedSlugs: [
        "partnertorzs-nav-online-szamla-cegkapu-es-ai-ocr",
        "fokonyvi-konyveles-kontirozas-varazslo-koltseghelyek-elhatarolasok",
      ],
    },

    // =========================================================================
    // 2. FEJEZET — PARTNERTÖRZS, CÉGKAPU, NAV ONLINE SZÁMLA ÉS AI OCR
    // =========================================================================
    {
      slug: "partnertorzs-nav-online-szamla-cegkapu-es-ai-ocr",
      title: "2. Partnertörzs, Cégkapu, NAV Online Számla és AI Bizonylatfeldolgozás",
      subtitle:
        "Egységes vevő–szállító partnertörzs, belföldi és VIES adószám-ellenőrzés, duplikáció-összevonás és jogutódlás varázsló, NAV Online Számla 3.0 és Cégkapu integráció, valamint AI OCR dokumentumfeldolgozás háromoldalú egyeztetéssel.",
      categoryId: "alapok-torzsadatok-es-ocr",
      readingTimeMinutes: 8,
      roles: ["admin", "member"],
      accessSummary:
        "Áttekintés → Partnertörzs (/partners), Rendszer → Integrációk (NAV Online Számla 3.0), Cégkapu / KÜNY-tárhely és Bizonylatfeltöltés (/upload).",
      summary:
        "Az eaisyBooks egyetlen egységes partnertörzsben tartja nyilván a vevőket és szállítókat, automatikusan ellenőrzi a magyar adószámok CDV-számjegyét és az EU-s VIES érvényességet, valós időben szinkronizál a NAV Online Számla 3.0 rendszerrel, a PDF/fotó bizonylatokat pedig AI OCR motorral és háromoldalú (PDF vs. NAV XML vs. e-mail) egyeztetéssel dolgozza fel.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-08-partners-master.webp",
          alt: "Partnertörzs jóváhagyásra váró új partnerekkel, duplikációkereséssel, jogutódlás varázslóval és Top 10 rangsorral",
          caption:
            "Partnertörzs: egységes vevő- és szállítónyitvántartás, jóváhagyásra váró új partnerek várólistája, duplikációszűrés és Jogutódlás rögzítése.",
        },
        {
          src: "/kb/eaisy-books/books-09-nav-integrations.webp",
          alt: "Integrációk oldal a NAV Online Számla 3.0 technikai felhasználó és banki kapcsolatok állapotával",
          caption:
            "Integrációk és NAV Online Számla 3.0: technikai felhasználó állapota, automatikus számlaszinkron és banki PSD2/fájlkapcsolatok.",
        },
        {
          src: "/kb/eaisy-books/books-10-cegkapu-representation.webp",
          alt: "Cégkapu és KÜNY-tárhely hivatalos állami tárhely és képviseleti meghatalmazások felülete",
          caption:
            "Cégkapu / KÜNY-tárhely: hivatalos állami tárhely, EKEIDR küldemények és könyvelői képviseleti jogosultságok áttekintése.",
        },
        {
          src: "/kb/eaisy-books/books-11-document-upload-ocr.webp",
          alt: "Dokumentumfeltöltés és AI OCR automatikus bizonylatfeldolgozó felület",
          caption:
            "Bizonylatfeltöltés & AI OCR: több számlát tartalmazó PDF-ek automatikus szétválasztása, díjbekérő-szűrés és háromoldalú NAV-egyeztetés.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Partnertörzs megtekintése, új partner rögzítése és VIES/NAV adószám-lekérdezés",
          admin: true,
          member: true,
          note: "Számlafeldolgozásból érkező új partnerek könyvelői jóváhagyási várólistára kerülnek.",
        },
        {
          feature: "Partner-duplikációk összevonása és Jogutódlás varázsló futtatása",
          admin: true,
          member: false,
          note: "A nyitott folyószámla-tételek átvezetése auditnaplózott vezetői művelet.",
        },
        {
          feature: "NAV Online Számla 3.0 technikai kulcsok és Cégkapu képviselet beállítása",
          admin: true,
          member: false,
          note: "Adminisztrátori vagy senior könyvelői jogosultsághoz kötött.",
        },
        {
          feature: "Bizonylatok feltöltése (Drag & Drop / e-mail) és AI előkontírozás ellenőrzése",
          admin: true,
          member: true,
          note: "Eltérés-karantén feloldását könyvelő végezheti el.",
        },
      ],
      sections: [
        {
          id: "partnertorzs-adoszam-duplikacio-es-jogutodlas",
          title: "1. Partnertörzs, adószám-validáció, összevonás és jogutódlás",
          description:
            "Ha egy vállalkozás egyszerre vevő és szállító is, nem kell kétszer felvenni: a rendszer egyetlen partnerkártyán tartja nyilván mindkét irányú folyószámláját és a kompenzálási lehetőséget.",
          steps: [
            {
              title: "Új partner felvétele és számlából érkező partnerek jóváhagyása",
              description:
                "A **Partnertörzs** oldalon a **Jóváhagyásra váró új partnerek** sávban egyetlen kattintással ellenőrizheted és véglegesítheted a számlafeldolgozásból érkezett új szállítókat és vevőket, vagy az **+ Új partner hozzáadása** gombbal rögzíthetsz új partnert.",
            },
            {
              title: "Belföldi, csoportos és EU-s (VIES) adószámok automatikus ellenőrzése",
              description:
                "A rendszer a magyar adószámot `12345678-2-42` formátumra hozza és ellenőrzi a 8. (CDV) számjegyet. Csoportos ÁFA-alanyoknál (`4`-es és `5`-ös áfakód) tárolja a tag egyedi adószámát és a csoportazonosítót (a 65M jelentésbe a csoportazonosító kerül). EU-s partnereknél lekérdezi és a **teljesítés napjához kötve megőrzi** a VIES-igazolást.",
            },
            {
              title: "Duplikációk keresése és Jogutódlás rögzítése",
              description:
                "A **Duplikációk keresése** gombbal kiszűrheted és összevonhatod a hasonló néven rögzített partnereket. Beolvadás, összeolvadás vagy kiválás esetén a **Jogutódlás rögzítése** varázsló egyetlen naplózott lépéssel átvezeti a jogelőd nyitott folyószámla-tételeit a jogutódra a történeti számlák megőrzésével.",
            },
          ],
          uiElements: [
            {
              label: "Jóváhagyásra váró (Partnertörzs)",
              type: "Várólista gomb",
              description:
                "Megnyitja a NAV-szinkronból vagy AI OCR számlafeldolgozásból érkezett új partnerek könyvelői jóváhagyó ablakát.",
            },
            {
              label: "Duplikációk keresése",
              type: "Műveleti gomb",
              description:
                "Azonos 8 jegyű törzsszám vagy hasonló cégnév alapján felkínálja a duplikált partnerkártyák összevonását.",
            },
            {
              label: "Jogutódlás rögzítése",
              type: "Varázsló gomb",
              description:
                "Jogelőd–jogutód folyószámla-átvezetés a történeti bizonylatok visszakereshetőségének megőrzésével.",
            },
          ],
        },
        {
          id: "nav-szinkron-cegkapu-es-ai-ocr-haromoldalu-egyeztetes",
          title: "2. NAV Online Számla 3.0, Cégkapu és AI OCR háromoldalú egyeztetés",
          description:
            "Az AI OCR motor és a NAV Online Számla szinkron közösen biztosítja, hogy egyetlen számla se maradjon ki, és hibás vagy díjbekérő dokumentum se kerüljön a főkönyvbe.",
          steps: [
            {
              title: "NAV Online Számla 3.0 szinkron és technikai érvénytelenítések követése",
              description:
                "Az **Integrációk** menüpontban aktivált NAV-kapcsolat darabszámra és összegre egyezően tölti le a kimenő és bejövő számlákat, és a **keltezés / teljesítés dátuma** (nem a NAV-beküldés technikai ideje) alapján sorolja őket időszakba. Ha egy már lekönyvelt számlát utólag technikailag érvénytelenítenek a NAV-ban, a rendszer figyelmeztetést tesz a tételre, de lezárt időszakot soha nem ír felül csendben.",
            },
            {
              title: "PDF/kép bizonylatok feltöltése és több számlás PDF-ek szétválasztása",
              description:
                "A **Bizonylatfeltöltés** oldalon feltöltött többszámlás PDF-eket az AI oldalszinten automatikusan külön bizonylatokra bontja, a többoldalas számlák tételsorait pedig egyesíti. A **díjbekérőket, proforma számlákat és szállítóleveleket** automatikusan kiszűri, így azok nem könyvelődhetnek ÁFA-bizonylatként.",
            },
            {
              title: "Háromoldalú egyeztetés és eltérés-karantén feloldása",
              description:
                "Ha a feltöltött PDF számlaképen más összeg vagy dátum szerepel, mint a NAV Online Számla XML-ben, a tétel automatikusan **eltérés-karanténba** kerül, ahol a könyvelő kiválasztja a hiteles forrást. A jóváhagyott kontírozási módosításokat a rendszer tanuló szabályként elmenti a következő számlákhoz.",
            },
          ],
          statusBadges: [
            {
              label: "Törölt / Felfüggesztett adószám",
              color: "red",
              meaning:
                "A szállító adószáma a NAV-nál felfüggesztett vagy törölt; a rendszer figyelmeztet az ÁFA-levonási jog kockázatára.",
            },
            {
              label: "VIES Érvényes (Teljesítés napján)",
              color: "green",
              meaning:
                "A közösségi partner EU-s adószáma a teljesítés napján érvényes volt; az igazolás időbélyeggel mentve.",
            },
            {
              label: "Eltérés-karantén (PDF ≠ NAV)",
              color: "amber",
              meaning:
                "A számlakép és a NAV Online Számla adatai között eltérés van; könyvelői döntésre vár.",
            },
          ],
          tips: [
            {
              type: "warning",
              title: "Kitalált adatok tilalma (Zero Hallucination)",
              text: "Az AI OCR felismerő soha nem talál ki hiányzó összeget vagy adószámot: gyenge minőségű fotó vagy kézzel írt számla esetén a bizonytalan mezőt üresen hagyja és kiemeli kézi könyvelői ellenőrzésre.",
            },
            {
              type: "tip",
              title: "ÁFA-kód változás azonos törzsszám mellett (pl. AAM 1 → ÁFA 2)",
              text: "Ha egy partner alanyi adómentesből (1-es áfakód) általános szabályok szerint adózóvá (2-es áfakód) válik, a rendszer a 8 jegyű törzsszám alapján felismeri a partnert, nem hoz létre duplikátumot, és a korábbi számlákon megőrzi a kibocsátáskori adószámot.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan kezeli a rendszer a devizás számlák NAV Online Számla adatait?",
          answer:
            "Devizás számláknál a rendszer a számlán és a NAV-ban szereplő forintosított ÁFA-összeget veszi alapul (nem számolja újra csendben eltérő árfolyamon), ugyanakkor a kirívó — például eurónál 250–500 Ft sávon kívüli — árfolyamot gyanús tételként megjelöli.",
        },
        {
          question: "Rögzíthető-e adószám nélküli magánszemély vevő vagy külföldi partner?",
          answer:
            "Igen. Harmadik országbeli partnereknél a rendszer nem kényszeríti ki a magyar adószám-formátumot, a magánszemély vevők pedig adószám nélkül (vagy gyűjtő Magánszemélyek partnerre) könyvelhetők, és automatikusan kimaradnak a 65M és A60 jelentésekből.",
        },
      ],
      relatedSlugs: [
        "alapbeallitasok-cegek-uzleti-evek-es-jogosultsagok",
        "bejovo-es-kimeno-szamlak-modosito-lancok-hianylista",
      ],
    },

    // =========================================================================
    // 3. FEJEZET — BEJÖVŐ ÉS KIMENŐ SZÁMLÁK, MÓDOSÍTÓ LÁNCOK ÉS HIÁNYZÓ SZÁMLÁK
    // =========================================================================
    {
      slug: "bejovo-es-kimeno-szamlak-modosito-lancok-hianylista",
      title: "3. Bejövő és Kimenő Számlák, Módosító Láncok és Hiányzó Számlák",
      subtitle:
        "A bizonylatok négy dátumának számviteli és ÁFA-szerepe, korlátozott ÁFA-levonások (reprezentáció, telefon 70/30%, személygépkocsi 50%), AAM 20M Ft-os keretfigyelés, módosító/sztornó számlaláncok és kétirányú hiányzó számla radar.",
      categoryId: "szamlak-elolegek-es-projektek",
      readingTimeMinutes: 9,
      roles: ["admin", "member"],
      accessSummary:
        "Pénzügyek → Számlák (/invoices) és eaisyBooks → Hiányzó számlák (/eaisybooks/missing-invoices).",
      summary:
        "Az eaisyBooks minden bizonylaton négy önálló dátumot (Számla kelte, Teljesítés dátuma, Fizetési határidő, ÁFA-teljesítés / birtokba jutás dátuma) kezel, automatizálja a részben levonható ÁFA-kulcsokat és a 20 millió Ft-os alanyi adómentes keretfigyelést, láncolva követi a módosító és sztornó számlákat, a Hiányzó számlák radarral pedig összeveti a NAV-adatokat és a banki terheléseket a feltöltött számlaképekkel.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-12-invoices-inbound-list.webp",
          alt: "Bejövő és kimenő számlák listája a négy dátummal, könyvelési státuszokkal és szűrőkkel",
          caption:
            "Pénzügyek → Számlák: bejövő és kimenő bizonylatok egységes táblázata a négy dátummal, ÁFA- és főkönyvi státusszal.",
        },
        {
          src: "/kb/eaisy-books/books-13-missing-invoices-radar.webp",
          alt: "Hiányzó számlák és kétirányú bizonylat-egyeztető lista a NAV és banki hiányokkal",
          caption:
            "Hiányzó számlák radar: kétirányú egyeztetés a NAV-ban szereplő, de számlakép nélküli, illetve a bankban terhelt, de bizonylathiányos tételekről.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Bejövő és kimenő számlák megtekintése, szűrése és négy dátum beállítása",
          admin: true,
          member: true,
          note: "Az 5 éves adómegállapítási elévülési időn túli ÁFA-levonást a rendszer blokkolja.",
        },
        {
          feature: "Módosító és sztornó számlaláncok összekapcsolása",
          admin: true,
          member: true,
          note: "Lezárt üzleti évet érintő módosításnál vezetői döntési pont (önellenőrzés vs. tárgyév) aktiválódik.",
        },
        {
          feature: "Hiányzó számlák lista megtekintése és hiánypótlási értesítő kiküldése az ügyfélnek",
          admin: true,
          member: true,
          note: "Az ügyfélkapu nézetben az ügyfél közvetlenül feltöltheti a hiányzó bizonylatokat.",
        },
      ],
      sections: [
        {
          id: "negy-datum-es-speciális-bejovo-kimeno-szamlak",
          title: "1. A bizonylatok négy dátuma, speciális ÁFA-levonások és AAM keretfigyelés",
          description:
            "A magyar számviteli és ÁFA-szabályok pontos követéséhez a rendszer külön választja el a főkönyvi eredményidőszakot meghatározó **Teljesítés dátumát** és az ÁFA-bevallási időszakot meghatározó **ÁFA-teljesítés / birtokba jutás dátumát**.",
          steps: [
            {
              title: "Késve beérkező bejövő számla könyvelése önellenőrzés nélkül",
              description:
                "Ha egy előző havi teljesítésű bejövő számla a bevallás után érkezik meg, a **Teljesítés dátuma** mezővel a költséget az eredeti teljesítési hónapra könyvelheted, míg az **ÁFA-teljesítés / birtokba jutás dátuma** mezővel a levonható ÁFA-t önellenőrzés nélkül eltolhatod a kézhezvétel időszakára (2 éven belül, 5 éves elévülési védelemmel).",
            },
            {
              title: "Korlátozottan levonható ÁFA (telefon 70/30%, személyautó 50%, reprezentáció) kezelése",
              description:
                "Válaszd ki a megfelelő költségsablont: **telefonszámlánál** a rendszer 70% levonható és 30% nem levonható részre bont; **személygépkocsi szervizszámlánál** alkalmazza az **50%-os átalány-levonást**; **éttermi vendéglátás / reprezentáció** jelölésekor pedig letiltja az ÁFA-levonást és előkészíti az `1,18 × (15% SZJA + 13% SZOCHO) = 33,04%` munkáltatói közteher elszámolását.",
            },
            {
              title: "Alanyi adómentes (AAM) 20 000 000 Ft-os keret és időszakos elszámolás (58. §) figyelése",
              description:
                "AAM státuszú vállalkozásnál a rendszer göngyölítve figyeli az éves **20 000 000 Ft-os** keretet (év közben induló cégnél napra arányosítva, a tárgyi eszköz értékesítést kiszűrve), és az átlépő számlánál azonnal figyelmeztet. Időszakos elszámolású (58. §) számláknál ellenőrzi az időszak végét követő **60. napos** korlátot is.",
            },
          ],
          uiElements: [
            {
              label: "Teljesítés dátuma vs. ÁFA-teljesítés dátuma",
              type: "Dátummező pár",
              description:
                "A Teljesítés dátuma a főkönyvi eredményidőszakot, az ÁFA-teljesítés dátuma pedig a 2665-ös ÁFA-bevallási időszakot határozza meg.",
            },
            {
              label: "Közvetített szolgáltatás kapcsoló",
              type: "Jelölő és összerendelő",
              description:
                "Összekapcsolja a bejövő és a továbbszámlázott kimenő tételt a HIPA adóalap-csökkentés jogszabályi alátámasztásához.",
            },
          ],
        },
        {
          id: "modosito-szamlalancok-es-hianyzo-szamlak-radar",
          title: "2. Módosító/sztornó számlaláncok és Kétirányú hiányzó számlák egyeztetése",
          description:
            "A módosító, jóváíró és sztornó számlák feldolgozását lánckövetés és árfolyamvédelem biztosítja, a Hiányzó számlák modul pedig két irányból védi a könyvelés teljességét.",
          steps: [
            {
              title: "Módosító és sztornó számlaláncok ellenőrzése",
              description:
                "Nyisd meg a módosított számlát az **Egyesített láncnézetben**, ahol az alapbizonylat és minden módosítása (1. módosító, 2. módosító / sztornó) lépésenként látható. Devizás számla módosításakor a rendszer az ÁFA-korrekciót a jogszabály szerint **az eredeti számla árfolyamán** számolja.",
            },
            {
              title: "Kétirányú hiányzó számlák egyeztetése évzárás és ÁFA-zárás előtt",
              description:
                "Az **eaisyBooks → Hiányzó számlák** oldalon ellenőrizd mindkét kategóriát: **(1) NAV-ban szerepel, de számlakép hiányzik** (előkönyvelhető „bizonylat hiányzik” jelzéssel), valamint **(2) Banki vagy kártyás terhelés megtörtént, de számla még nem érkezett** (céges bankkártyás és külföldi SaaS vásárlások). Küldd ki az automatikus hiánylistát az ügyfélnek.",
            },
          ],
          statusBadges: [
            {
              label: "Bizonylat hiányzik (NAV adat alapján)",
              color: "amber",
              meaning:
                "A számla a NAV Online Számla szinkronból bekerült, de az eredeti számlakép / dokumentum még nem lett feltöltve.",
            },
            {
              label: "Banki terhelés számla nélkül",
              color: "red",
              meaning:
                "A bankszámlán vagy céges kártyán megtörtént a levonás, de a kapcsolódó költségszámla még hiányzik.",
            },
            {
              label: "Módosítási lánc (Sztornózott / Helyesbített)",
              color: "blue",
              meaning:
                "A bizonylathoz egy vagy több módosító / sztornó számla kapcsolódik; a lánc végső egyenlege összesítve látható.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Duplikációszűrés adószám + számlasorszám párral",
              text: "A rendszer a kibocsátó adószáma és a számlasorszám együttesével szűr: ugyanannak a számlának a másodszori feltöltését összevonja az eredetivel, de két különböző szállító véletlenül azonos sorszámú számláját nem jelzi tévesen duplikátumnak.",
            },
            {
              type: "warning",
              title: "Pénzforgalmi ÁFA-s szállító számlája",
              text: "Pénzforgalmi ÁFA-s szállítótól befogadott számlánál a levonható ÁFA csak a tényleges kifizetés (vagy kompenzálás) napján és arányában nyílik meg.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan kezeli a rendszer a nyugtát és az egyszerűsített (készpénzes) számlát?",
          answer:
            "A nyugta ÁFA-levonásra nem jogosít, így kizárólag bruttó költségként könyvelhető. Az egyszerűsített számlánál a felülről számított ÁFA-tartalmat (pl. 27% esetén 21,26%-os kulccsal) a rendszer automatikusan visszaszámolja nettóra és levonható ÁFA-ra.",
        },
        {
          question: "Mi történik, ha egy már kifizetett számlát sztornóznak?",
          answer:
            "Kifizetett számla sztornózásakor a partner-folyószámlán túlfizetés keletkezik, amelyre a rendszer automatikusan felajánlja a visszautalás párosítását vagy a következő számlába történő beszámítást.",
        },
      ],
      relatedSlugs: [
        "partnertorzs-nav-online-szamla-cegkapu-es-ai-ocr",
        "elolegek-reszszamlak-garancialis-visszatartas-palyazatok",
      ],
    },

    // =========================================================================
    // 4. FEJEZET — ELŐLEGEK, RÉSZSZÁMLÁK, GARANCIÁLIS VISSZATARTÁS ÉS PÁLYÁZATOK
    // =========================================================================
    {
      slug: "elolegek-reszszamlak-garancialis-visszatartas-palyazatok",
      title: "4. Előlegek, Részszámlák, Garanciális Visszatartás és Pályázatok",
      subtitle:
        "Díjbekérő, előlegszámla (353/453) és végszámla-beszámítás teljes életciklusa, Előleg-felosztó varázsló, meghiúsult előleg visszafizetése, építőipari fordított adózású részszámlák, 5–10%-os garanciális visszatartás és GINOP/DIMOP/RRF pályázati elszámolás.",
      categoryId: "szamlak-elolegek-es-projektek",
      readingTimeMinutes: 8,
      roles: ["admin", "member"],
      accessSummary:
        "Pénzügyek → Előlegek & Díjbekérők (/advances) és Áttekintés → Pályázatok & Támogatási Előlegek (/projects).",
      summary:
        "Az eaisyBooks szerződésenként és partnerenként követi a díjbekérőket, az adott (353) és kapott (453) előlegeket, valamint a végszámla-beszámításokat. Támogatja a több előleg részszámlákra történő felosztását, a devizás előlegek bekerülési árfolyamon való visszavezetését, az építőipari garanciális visszatartások külön esedékességre bontását, valamint a fejlesztési támogatások értékcsökkenéssel arányos halasztott bevétel (PIE) feloldását.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-14-advances-management.webp",
          alt: "Előlegek, díjbekérők és végszámla-beszámítás nyilvántartó felülete",
          caption:
            "Pénzügyek → Előlegek & Díjbekérők: adott (353) és kapott (453) előlegek, fel nem használt előlegmaradványok és az Előleg-felosztó varázsló.",
        },
        {
          src: "/kb/eaisy-books/books-15-projects-and-grants.webp",
          alt: "Pályázatok és támogatási előlegek műszerfala a halasztott bevétel és ÉCS összekapcsolásával",
          caption:
            "Pályázatok & Támogatási Előlegek: támogatási intenzitás, elszámolható költségek, támogatási előlegek és az eszköz-amortizációval szinkronizált PIE feloldás.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Díjbekérők, előlegszámlák és végszámla-beszámítások rögzítése",
          admin: true,
          member: true,
          note: "Az Előleg-felosztó varázsló forintra és devizára pontosan követi a maradványt.",
        },
        {
          feature: "Garanciális visszatartás (5–10%) leválasztása külön jótállási esedékességgel",
          admin: true,
          member: true,
          note: "Megakadályozza, hogy a visszatartott rész tévesen lejárt kintlévőségként jelenjen meg.",
        },
        {
          feature: "Pályázati projektek és fejlesztési támogatás – tárgyi eszköz összerendelés",
          admin: true,
          member: false,
          note: "Vezető könyvelői / adminisztrátori beállítás.",
        },
      ],
      sections: [
        {
          id: "dijbekero-elolegszamla-vegszamla-es-garancialis-visszatartas",
          title: "1. Díjbekérő → Előlegszámla (353/453) → Végszámla és Garanciális visszatartás",
          description:
            "A díjbekérő (proforma) nem keletkeztet főkönyvi és ÁFA-hatást; az ÁFA az előleg jóváírásának/terhelésének napján az előlegszámlával keletkezik, végszámlázáskor pedig csak a különbözet után fizetendő vagy levonható.",
          steps: [
            {
              title: "Előlegszámla rögzítése és összekapcsolása a banki utalással",
              description:
                "A **Pénzügyek → Előlegek & Díjbekérők** felületen a kifizetett díjbekérőhöz kapcsold hozzá a beérkezett vagy kiállított előlegszámlát. A rendszer a kapott előleget a **453**, az adott előleget a **353** főkönyvi számlára könyveli.",
            },
            {
              title: "Végszámla beszámítása az Előleg-felosztó varázslóval",
              description:
                "A rész- vagy végszámla rögzítésekor indítsd el az **Előleg-felosztó varázslót**, és válaszd ki a beszámítani kívánt előleg(ek)et. Devizás előlegnél az előleggel fedezett rész ÁFA-ja az előleg árfolyamán, a különbözet pedig a végszámla teljesítési árfolyamán számítódik, miközben a 65M jelentésen automatikusan kitöltődnek az előleg-végszámla többletadatok.",
            },
            {
              title: "Építőipari fordított adózás és garanciális visszatartás (5–10%) kezelése",
              description:
                "Belföldi fordított adózású (Áfa tv. 142. §) építőipari előleg nem keletkeztet ÁFA-fizetést. Végszámlázáskor a **Garanciális visszatartás felosztása** funkcióval bontsd a számla fizetendő összegét két nyitott folyószámla-tételre: az azonnal esedékes **95%-os** számlarészre és a jótállási idő végén esedékes **5%-os** garanciális visszatartásra.",
            },
          ],
          uiElements: [
            {
              label: "Előleg-felosztó varázsló",
              type: "Varázsló",
              description:
                "Egy vagy több előlegszámla részbeni vagy teljes beszámítása egymást követő részszámlákba és a végszámlába.",
            },
            {
              label: "Meghiúsult előleg visszafizetése",
              type: "Munkafolyamat gomb",
              description:
                "Meghiúsult ügyletnél összekapcsolja az előleget érvénytelenítő módosító számlát és a banki visszautalást.",
            },
          ],
        },
        {
          id: "palyazatok-mukodesi-es-fejlesztesi-tamogatasok",
          title: "2. Pályázatok, működési és fejlesztési (eszközbeszerzési) támogatások",
          description:
            "Az **Áttekintés → Pályázatok & Támogatási Előlegek** műszerfal a GINOP, DIMOP, RRF és MÁK pályázatok számviteli elszámolását automatizálja.",
          steps: [
            {
              title: "Támogatási előleg és működési támogatás könyvelése",
              description:
                "A folyósított támogatási előleget a rendszer kötelezettségként (nem bevételként) rögzíti projektszintű elkülönítéssel. A működési (költségkompenzációs) támogatást a felmerült elszámolható költségekkel arányosan egyéb bevételként számolja el.",
            },
            {
              title: "Fejlesztési támogatás összekapcsolása a tárgyi eszköz értékcsökkenésével",
              description:
                "Eszközbeszerzési támogatásnál a rendszer az egyéb bevétellel egyidejűleg **halasztott bevételt (passzív időbeli elhatárolást, 483)** képez, összekapcsolja azt a megvalósult tárgyi eszközzel, és a halasztott bevételt **az eszköz értékcsökkenésével azonos ütemben és arányban** oldja fel.",
            },
          ],
          statusBadges: [
            {
              label: "Felhasználható előlegmaradvány",
              color: "green",
              meaning:
                "Pénzügyileg rendezett, előlegszámlával alátámasztott összeg, amely rész- vagy végszámlába beszámítható.",
            },
            {
              label: "PIE (483) — ÉCS-hez kötött feloldás",
              color: "blue",
              meaning:
                "A fejlesztési támogatás halasztott bevétele automatikusan a kapcsolt tárgyi eszköz amortizációjával arányosan oldódik fel.",
            },
          ],
          tips: [
            {
              type: "warning",
              title: "Teljesítés napján vagy utána fizetett összeg nem előleg",
              text: "Ha a kifizetés már az ügylet teljesítésének napján vagy azt követően történik, a rendszer figyelmeztet, hogy az összeg nem előleg, hanem normál számlakiegyenlítés.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Duplázódhat-e az ÁFA, ha az előleg és a végszámla ugyanarra a hónapra esik?",
          answer:
            "Nem. Azonos hónapban történő előlegfizetés és végszámlázás esetén az előlegszámla és a végszámla előleg-levonó sora kioltja egymást, a 453/353 előlegszámla egyenlege nullázódik, és pontosan az ügylet egyszeres ÁFA-ja kerül a bevallásba.",
        },
      ],
      relatedSlugs: [
        "bejovo-es-kimeno-szamlak-modosito-lancok-hianylista",
        "fokonyvi-konyveles-kontirozas-varazslo-koltseghelyek-elhatarolasok",
      ],
    },

    // =========================================================================
    // 5. FEJEZET — FŐKÖNYVI KÖNYVELÉS, KONTÍROZÓ VARÁZSLÓ, DIMENZIÓK ÉS ELHATÁROLÁSOK
    // =========================================================================
    {
      slug: "fokonyvi-konyveles-kontirozas-varazslo-koltseghelyek-elhatarolasok",
      title: "5. Főkönyvi Könyvelés, Kontírozó Varázsló, Költséghelyek és Elhatárolások",
      subtitle:
        "Billentyűzettel vezérelhető kötegelt Kontírozás Varázsló, többlábú T/K szerkesztő, Naplók, Posted-Only főkönyvi kivonat, folyószámla korosítás, 5–6–7 controlling gyűjtők, időbeli elhatárolások (39/48), értékvesztés és saját tőke / osztalék műszerfal.",
      categoryId: "fokonyv-penzugyek-es-eszkozok",
      readingTimeMinutes: 10,
      roles: ["admin", "member"],
      accessSummary:
        "Könyvelés → Kontírozás Varázsló, Naplók, Főkönyv, Vevő/Szállító analitika (Folyószámla), Controlling gyűjtők, Időbeli Elhatárolások és Saját Tőke & Osztalék.",
      summary:
        "Az eaisyBooks Posted-Only főkönyvi motorja garantálja a Tartozik = Követel hármas egyezőséget (Nyitó, Forgalom, Záró) és a hézagmentes naplósorszámozást. A Kontírozás Varázslóval nagy tömegű számla könyvelhető gyorsbillentyűkkel, a Controlling gyűjtők maradékkezeléssel osztják fel a költségeket, az Időbeli Elhatárolások és a Saját Tőke műszerfal pedig automatizálja az összemérés elvét és a Ptk. szerinti tőkevédelmet.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-16-posting-wizard.webp",
          alt: "Kontírozás Varázsló kötegelt nézet AI előkontírozási javaslatokkal és T/K szerkesztővel",
          caption:
            "Kontírozás Varázsló: kötegelt számlakontírozás billentyűzet-vezérléssel (Szóköz, Ctrl+Enter) és többlábú Tartozik/Követel szerkesztővel.",
        },
        {
          src: "/kb/eaisy-books/books-17-journals-register.webp",
          alt: "Könyvelési Naplók és hézagmentes bizonylatsorszám-nyilvántartás",
          caption:
            "Könyvelési Naplók: vevő, szállító, bank, pénztár és vegyes naplók forgalma hézagmentes sorszámozással.",
        },
        {
          src: "/kb/eaisy-books/books-18-general-ledger.webp",
          alt: "Főkönyvi kivonat, számlatükör és kartonok a Posted-Only Főkönyvi Kernel védelmével",
          caption:
            "Főkönyv: hierarchikus főkönyvi kivonat, kartonok, naplófőkönyv és kétlépcsős Drill-Down a bizonylatképig.",
        },
        {
          src: "/kb/eaisy-books/books-19-subledger-open-items.webp",
          alt: "Vevő és szállító folyószámla analitika, nyitott tételek és korosítási lista",
          caption:
            "Folyószámla & Nyitott tételek: partnerenkénti folyószámla-egyenleg, lejárati korosítás (0–30, 31–60, 61–90, 90+ nap) és főkönyvi egyezőség.",
        },
        {
          src: "/kb/eaisy-books/books-20-controlling-dimensions.webp",
          alt: "Controlling gyűjtők, költséghelyek, projektek és gépjármű dimenziók beállítása",
          caption:
            "Controlling gyűjtők: költséghely, projekt és gépjármű dimenziók, kötelező gyűjtőszabályok és százalékos felosztási kulcsok.",
        },
        {
          src: "/kb/eaisy-books/books-21-accruals-provisions.webp",
          alt: "Időbeli Elhatárolások és Eredményhatás Műszerfal az aktív (39) és passzív (48) elhatárolásokkal",
          caption:
            "Időbeli Elhatárolások & Eredményhatás Műszerfal: aktív (391–393) és passzív (481–483) elhatárolások ütemezett feloldással.",
        },
        {
          src: "/kb/eaisy-books/books-22-equity-register.webp",
          alt: "Saját Tőke és Osztalék Vezetői Műszerfal a Ptk. 3:189. § tőkevédelemmel és SZOCHO-sapka számítással",
          caption:
            "Saját Tőke & Osztalék Vezetői Műszerfal: tőkeszerkezet, Ptk. tőkevesztés-riasztás, lekötött tartalékok és osztalék SZJA/SZOCHO kalkulátor.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Kötegelt kontírozás a Kontírozás Varázslóban és vegyes bizonylat rögzítése",
          admin: true,
          member: true,
          note: "Kiegyensúlyozatlan (T ≠ K) tétel nem véglegesíthető.",
        },
        {
          feature: "Véglegesített főkönyvi tétel sztornózása és javító újrakönyvelése",
          admin: true,
          member: true,
          note: "Véglegesített tétel soha nem törölhető; javítása kizárólag hivatkozott sztornó tétellel történik.",
        },
        {
          feature: "Időbeli elhatárolások, céltartalékok és értékvesztés elszámolása",
          admin: true,
          member: true,
          note: "A rendszer automatikusan megjelöli a kapcsolódó TAO-alap módosító hatást.",
        },
        {
          feature: "Saját tőke műveletek, pótbefizetés és osztalékfizetési korlátok jóváhagyása",
          admin: true,
          member: false,
          note: "Senior könyvelő / Iroda adminisztrátor jogosultsághoz kötött.",
        },
      ],
      sections: [
        {
          id: "kontirozas-varazslo-naplok-es-fokonyvi-egyezoseg",
          title: "1. Kontírozás Varázsló, Naplók, Főkönyvi kivonat és Folyószámla",
          description:
            "A **Posted-Only Főkönyvi Kernel** biztosítja, hogy a főkönyvi kivonatban kizárólag kiegyensúlyozott (`Tartozik = Követel`), hézagmentes sorszámú tételek szerepelhetnek.",
          steps: [
            {
              title: "Kötegelt kontírozás a Kontírozás Varázslóval",
              description:
                "Nyisd meg a **Könyvelés → Kontírozás Varázsló** felületet. Válthatsz az egyszerű számlanézet és a részletes, **Kétoszlopos T/K nézet** (sokszoros vegyes tétel, több ÁFA-kulcs, több költséghely) között. Használd a **Szóköz** billentyűt a kijelöléshez és a **Ctrl + Enter** kombinációt a köteg véglegesítéséhez.",
            },
            {
              title: "Főkönyvi kivonat, Kartonok és Kétlépcsős Drill-Down ellenőrzése",
              description:
                "A **Könyvelés → Főkönyv** oldalon ellenőrizd a *Nyitó T = K*, *Forgalom T = K* és *Záró T = K* egyezőséget. Bármelyik főkönyvi sorra kattintva két lépésben lefúrhatsz a kartontételig és az eredeti számlaképig. Véglegesített tétel javítását a **Sztornó** gombbal indíthatod.",
            },
            {
              title: "Controlling gyűjtők és maradékkezeléses százalékos felosztás",
              description:
                "A **Controlling gyűjtők** felületen költséghelyre, projektre és gépjárműre bonthatod az 5–8-as számlaosztályok tételeit. Százalékos felosztásnál (pl. `100 001 Ft` elosztása `33,33% – 33,33% – 33,34%` arányban) a rendszer automatikusan elhelyezi az 1 Ft-os kerekítési maradékot.",
            },
          ],
          uiElements: [
            {
              label: "Kontírozás varázsló (Kötegelt nézet)",
              type: "Munkaterület",
              description:
                "Gyorsbillentyűkkel vezérelhető előkontírozó és többlábú T/K szerkesztő.",
            },
            {
              label: "Vegyes bizonylat / Audit XML / AI Besorolás",
              type: "Főkönyvi eszköztár",
              description:
                "Kézi vegyes naplótétel rögzítése, hatósági Audit XML export és a főkönyvi számok mérlegsor-besorolásának ellenőrzése.",
            },
          ],
        },
        {
          id: "idobeli-elhatarolasok-ertekvesztes-es-sajat-toke",
          title: "2. Időbeli elhatárolások (39/48), értékvesztés és Saját tőke / Osztalék",
          description:
            "Az összemérés elvének érvényesítését és a Ptk. szerinti tőkevédelmet dedikált vezetői műszerfalak támogatják.",
          steps: [
            {
              title: "Aktív (39) és passzív (48) időbeli elhatárolások ütemezése",
              description:
                "Az **Időbeli Elhatárolások** műszerfalon rögzítsd az előre kifizetett éves díjakat (aktív elhatárolás, havi automatikus feloldással) vagy a tárgyévet terhelő, de csak következő évben számlázott költségeket (passzív elhatárolás decemberre, automatikus feloldással a januári számla beérkezésekor).",
            },
            {
              title: "Követelések értékvesztése és behajthatatlan követelés ÁFA-visszaigénylése",
              description:
                "A folyószámla korosítási lista alapján számold el az értékvesztést (TAO-alap módosító jelzéssel). Behajthatatlan követelés leírásakor a beépített ellenőrzőlista végigvezet az Áfa tv. szerinti utólagos adóalap-csökkentés feltételein.",
            },
            {
              title: "Saját tőke védelem, pótbefizetés és osztalék SZOCHO-sapka számítás",
              description:
                "A **Saját Tőke & Osztalék** műszerfal figyelmeztet, ha a saját tőke a Ptk. 3:189. § szerinti küszöb alá csökken. Osztalék jóváhagyásakor magánszemély tulajdonosoknál automatikusan kiszámítja a 15% SZJA-t és a **minimálbér 24-szereséig (SZOCHO-felsőhatárig)** terjedő 13% SZOCHO-t.",
            },
          ],
          statusBadges: [
            {
              label: "Posted-Only Főkönyvi Kernel (KONYVELT)",
              color: "green",
              meaning:
                "Garantálja, hogy a főkönyvi kivonatban csak kiegyensúlyozott (T = K) és véglegesített tételek szerepelnek.",
            },
            {
              label: "Ptk. 3:189. § Tőkevédelmi Riasztás",
              color: "amber",
              meaning:
                "Jelzi, ha a saját tőke a jegyzett tőke jogszabályi aránya alá csökkent és tulajdonosi intézkedés szükséges.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "5-ös és 6–7-es számlaosztályok párhuzamos használata",
              text: "Másodlagos költséghely- és önköltség-könyvelés esetén az átvezetési számlák biztosítják, hogy az eredménykimutatásban a költségek soha ne duplázódjanak meg.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi történik a múltbeli hónapokkal, ha módosítok egy könyvelési szabályt vagy sablont?",
          answer:
            "A könyvelési szabály vagy sablon módosítása kizárólag a jövőbeli generált tételekre hat; a már lekönyvelt hónapok tételeit a rendszer érintetlenül hagyja.",
        },
      ],
      relatedSlugs: [
        "elolegek-reszszamlak-garancialis-visszatartas-palyazatok",
        "bank-hazipenztar-deviza-es-finanszirozas",
      ],
    },

    // =========================================================================
    // 6. FEJEZET — BANK, HÁZIPÉNZTÁR, DEVIZA ÉS FINANSZÍROZÁS
    // =========================================================================
    {
      slug: "bank-hazipenztar-deviza-es-finanszirozas",
      title: "6. Bank, Házipénztár, Deviza és Finanszírozás",
      subtitle:
        "Bankkivonat-beolvasás és automatikus számlapárosítás, POS/Stripe/Barion kifizetések felbontása, faktoring és kompenzálás, negatív egyenleg ellen védett házipénztár és 1,5M Ft-os készpénzkorlát, MNB/EKB devizaárfolyamok, FIFO/átlagár kivezetés, év végi átértékelés és hitelek/lízingek.",
      categoryId: "fokonyv-penzugyek-es-eszkozok",
      readingTimeMinutes: 9,
      roles: ["admin", "member"],
      accessSummary:
        "Pénzügyek → Tranzakciók (/transactions), Házipénztár (/petty-cash), Árfolyamok (/exchange-rates), Hitelek & Lízingek és Adott kölcsönök.",
      summary:
        "Az eaisyBooks pénzforgalmi modulja ellenőrzi a bankkivonatok nyitó/záró egyenlegének főkönyvi (384) egyezését, intelligensen párosítja a csoportos utalásokat, részfizetéseket és kártyaelfogadói elszámolásokat, megakadályozza a negatív házipénztár-egyenleget és figyeli a havi 1,5 millió Ft-os készpénzfizetési korlátot, valamint kezeli a devizás FIFO/csúszó átlagárfolyamos kivezetést, az év végi átértékelést és a lízing-/hiteltörlesztéseket.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-23-bank-transactions.webp",
          alt: "Banki tranzakciók és automatikus számlapárosítás felülete",
          caption:
            "Pénzügyek → Tranzakciók: bankkivonatok és élő banki szinkron tételek párosítása vevő- és szállítószámlákkal.",
        },
        {
          src: "/kb/eaisy-books/books-24-petty-cash-register.webp",
          alt: "Házipénztár, bevételi és kiadási pénztárbizonylatok és napi zárlat",
          caption:
            "Pénzügyek → Házipénztár: forint- és devizapénztárak, hézagmentes bevételi/kiadási pénztárbizonylatok és negatív egyenleg védelem.",
        },
        {
          src: "/kb/eaisy-books/books-25-exchange-rates-fx.webp",
          alt: "Devizaárfolyamok, MNB és EKB árfolyamforrás-beállítások és deviza-átértékelés",
          caption:
            "Árfolyamok & Devizakezelés: napi MNB/EKB árfolyamszinkron, FIFO vagy csúszó átlagárfolyam beállítás és év végi átértékelés.",
        },
        {
          src: "/kb/eaisy-books/books-26-financing-loans-leasing.webp",
          alt: "Hitelek, lízingek és nyújtott/kapott kölcsönök törlesztési nyilvántartása",
          caption:
            "Hitelek & Lízingek: törlesztési ütemtervek automatikus tőke–kamat bontása, év végi rövid lejáratú átsorolás és kapcsolt piaci kamat figyelmeztetés.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Bankkivonatok feltöltése, számlapárosítás és házipénztár-bizonylatok rögzítése",
          admin: true,
          member: true,
          note: "A rendszer visszadátumozott kiadásnál is megakadályozza a negatív napi pénztáregyenleget.",
        },
        {
          feature: "Deviza értékelési mód (FIFO vs. csúszó átlagár) és év végi deviza-átértékelés",
          admin: true,
          member: false,
          note: "A számviteli politikában rögzített értékelési szabályokhoz kötött.",
        },
        {
          feature: "Hitelek, pénzügyi lízingek és tagi kölcsönök szerződéses rögzítése",
          admin: true,
          member: true,
          note: "Kapcsolt vállalkozásnak nyújtott kamatmentes kölcsönnél TAO-figyelmeztetés jelenik meg.",
        },
      ],
      sections: [
        {
          id: "bankkivonat-parositas-pos-faktoring-es-hazipenztar",
          title: "1. Bankkivonat-párosítás, kártyaelfogadók (POS/Stripe/Barion) és Házipénztár",
          description:
            "A rendszer a mindennapi utalásokon túl a csoportos fizetéseket, a közvetítőbanki SHA jutalékokat, a kártyaelfogadói elszámolásokat és a kompenzációkat is kezeli.",
          steps: [
            {
              title: "Bankkivonat beolvasása, 384-es egyenlegkontroll és számlapárosítás",
              description:
                "A **Pénzügyek → Tranzakciók** oldalon a kivonat beolvasásakor a rendszer ellenőrzi a nyitó és záró egyenleg egyezését a **384**-es főkönyvi számlával. Támogatja az *egy utalás több számlára* és *több részfizetés egy számlára* eseteket, valamint a nemzetközi utalásból levont SHA bankköltség automatikus lekönyvelését.",
            },
            {
              title: "POS terminál, Stripe, Barion és SimplePay összevont kifizetések felbontása",
              description:
                "Az elfogadótól érkező nettó kifizetést a rendszer tranzakciónként felbontja: a bruttó kártyás forgalom lezárja a vevői követeléseket a technikai átvezetési számlán keresztül, a levont jutalék pedig automatikusan pénzügyi szolgáltatási díjra könyvelődik.",
            },
            {
              title: "Házipénztár, 1,5M Ft-os készpénzkorlát és online pénztárgép napi zárás",
              description:
                "A **Pénzügyek → Házipénztár** modul időrendben vizsgálja a napi egyenleget (megtiltva a negatív pénztáregyenleget), partnerenként és szerződésenként figyeli a havi **1,5 millió Ft-os készpénzfizetési korlátot**, az online pénztárgép napi zárásból pedig automatikusan levonja a nyugta helyett kiállított ÁFA-s számlákat a duplikáció elkerülésére.",
            },
          ],
          uiElements: [
            {
              label: "Pénztárzárás / Pénztárközi átvezetés (389)",
              type: "Műveleti gombok",
              description:
                "Napi pénztárzárlat készítése és a pénztár–bank vagy saját bankszámlák közötti mozgások könyvelése a 389-es átvezetési számlán.",
            },
          ],
        },
        {
          id: "deviza-arfolyamok-ev-vegi-atertekeles-es-hitelek",
          title: "2. Devizás könyvelés (MNB/EKB), év végi átértékelés és Hitelek / Lízingek",
          description:
            "A rendszer párhuzamosan kezeli az ÁFA-árfolyamot és a könyvviteli árfolyamot, valamint automatizálja a finanszírozási szerződések tőke–kamat bontását.",
          steps: [
            {
              title: "Devizabank/devizapénztár kivezetése (FIFO / csúszó átlagár) és év végi átértékelés",
              description:
                "Az **Árfolyamok** oldalon cégenként állítható be az MNB, EKB vagy banki árfolyamforrás (hétvégi teljesítésnél automatikusan az utolsó közzétett munkanapi árfolyammal). A devizakivezetés a választott **FIFO** vagy **csúszó átlagárfolyam** szerint számítja a realizált árfolyamnyereséget/veszteséget (`976` / `876`), év végén pedig mérlegfordulónapi árfolyamon átértékeli a nyitott devizás tételeket.",
            },
            {
              title: "Hiteltörlesztés, pénzügyi lízing és tagi kölcsönök kezelése",
              description:
                "A **Hitelek & Lízingek** felületen a havi törlesztés automatikusan **tőketörlesztésre** és **kamatráfordításra** bomlik; év végén a következő üzleti évben esedékes tőkerész rövid lejáratú kötelezettséggé sorolódik át.",
            },
          ],
          statusBadges: [
            {
              label: "389 Átvezetési számla — Úton lévő pénz",
              color: "blue",
              meaning:
                "December 31-én elindított, de csak januárban jóváírt saját számlás átvezetés mérlegképes nyilvántartása.",
            },
            {
              label: "1,5M Ft készpénzkorlát figyelmeztetés",
              color: "amber",
              meaning:
                "Jelzi, ha egy belföldi pénzforgalmi számlanyitásra kötelezett partnerrel a havi készpénzes kifizetés megközelíti az 1,5 millió Ft-os határt.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Euróban könyvelő magyar vállalkozás",
              text: "Eurós könyvvezetésű magyar vállalkozásnál a főkönyv euróban fut, miközben a magyar ÁFA-analitika és a 2665-ös bevallás párhuzamosan, jogszabály szerinti árfolyamon forintban is elkészül.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan jelenik meg a mérlegben a negatív év végi bankszámla-egyenleg (folyószámlahitel)?",
          answer:
            "Mérlegkészítéskor a negatív év végi bankegyenleg nem negatív pénzeszközként, hanem a Számviteli törvény előírásának megfelelően rövid lejáratú hitelkötelezettségként sorolódik be.",
        },
      ],
      relatedSlugs: [
        "fokonyvi-konyveles-kontirozas-varazslo-koltseghelyek-elhatarolasok",
        "afa-analitika-2665-bevalllas-65m-a60-es-eafa-egyeztetes",
      ],
    },

    // =========================================================================
    // 7. FEJEZET — ÁFA-ANALITIKA, 2665 BEVALLÁS, 65M, A60 ÉS eÁFA EGYEZTETÉS
    // =========================================================================
    {
      slug: "afa-analitika-2665-bevalllas-65m-a60-es-eafa-egyeztetes",
      title: "7. ÁFA-analitika, 2665 Bevallás, 65M, A60, Nemzetközi ÁFA és eÁFA Egyeztetés",
      subtitle:
        "ÁFA-kódok törzse, levonási hányados (arányosítás felfelé kerekítéssel), tárgyi eszközök 60/240 hónapos ÁFA-figyelése, EU és 3. országbeli ÁFA-szabályok, 2665 bevallás, 65M és A60 XML előállítás, 466/467→468 technikai átvezetés, NAV eÁFA egyeztetés és önellenőrzés.",
      categoryId: "adozas-berszamfejtes-es-beszamolo",
      readingTimeMinutes: 10,
      roles: ["admin", "member"],
      accessSummary:
        "Adózás → ÁFA Kódok Törzse, ÁFA Bevallás (2665 / 65M / A60), Adószámla- és eÁFA-egyeztetés, valamint Önellenőrzések.",
      summary:
        "Az eaisyBooks ÁFA-motorja közvetlenül összeköti az ügylettípusokat a 2665-ös bevallási sorokkal, a 65M belföldi összesítő jelentéssel és az A60 közösségi nyilatkozattal. Kezeli a vegyes tevékenység levonási arányosítását, az ingó (60 hó) és ingatlan (240 hó) tárgyi eszközök többéves ÁFA-korrekcióját, a NAV eÁFA kiajánlás számlaszintű összevetését, valamint a jegybanki alapkamattal számolt önellenőrzési pótlékot és digitális jegyzőkönyvet.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-27-vat-codes-matrix.webp",
          alt: "ÁFA kódok törzse és 2665 / 65M / A60 bevallási sor-leképezés",
          caption:
            "Adózás → ÁFA Kódok Törzse: belföldi, fordított adózású, közösségi (EU) és harmadik országbeli ÁFA-kódok bevallási leképezése.",
        },
        {
          src: "/kb/eaisy-books/books-28-vat-return-2665.webp",
          alt: "2665 ÁFA-bevallás, 65M összesítő jelentés és ÁNYK / eÁFA XML előállítás",
          caption:
            "2665 ÁFA-bevallás & Gyűjtőkódos Analitika: 466/467 főkönyvi egyezőség-vizsgálat, ezres kerekítés, 65M lapok, A60 és XML export.",
        },
        {
          src: "/kb/eaisy-books/books-29-tax-reconciliation-eafa.webp",
          alt: "NAV adószámla- és eÁFA-tervezet számlaszintű egyeztetése",
          caption:
            "Adószámla- & eÁFA-egyeztetés: a könyvelt ÁFA-analitika és a NAV eÁFA tervezet / adófolyószámla összevetése 4 eltérési kategóriában.",
        },
        {
          src: "/kb/eaisy-books/books-30-tax-revisions-self-audit.webp",
          alt: "Önellenőrzések, pótlékszámítás és digitális önellenőrzési jegyzőkönyvek",
          caption:
            "Önellenőrzések: lezárt időszakok korrekciója, MNB alapkamat-alapú önellenőrzési pótlékszámítás és kötelező digitális jegyzőkönyv.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "ÁFA-analitika, 65M lapok, A60 nyilatkozat és eÁFA-egyeztetés előkészítése",
          admin: true,
          member: true,
          note: "A rendszer ellenőrzi az ÁFA-analitika és a 466/467 főkönyvi számlák egyezését.",
        },
        {
          feature: "2665 ÁFA-bevallás véglegesítése, 466/467 → 468 átvezetés és időszak-zárolás",
          admin: true,
          member: false,
          note: "Senior könyvelő / Adminisztrátor jogosultsághoz (vagy négy-szem elvű jóváhagyáshoz) kötött.",
        },
        {
          feature: "Önellenőrzés indítása és önellenőrzési jegyzőkönyv véglegesítése",
          admin: true,
          member: false,
          note: "Lezárt ÁFA-időszakot érintő korrekciót csak jogosult vezető véglegesíthet.",
        },
      ],
      sections: [
        {
          id: "afa-kodok-aranyositas-nemzetkozi-afa-es-2665",
          title: "1. ÁFA-kódok, arányosítás, 60/240 hónapos figyelés, EU/import ÁFA és 2665 bevallás",
          description:
            "A rendszer minden belföldi és nemzetközi ÁFA-jogcímet automatikusan a megfelelő bevallási sorokra (2665, 65M, A60, OSS) irányít.",
          steps: [
            {
              title: "Levonási hányados (arányosítás) és 60 / 240 hónapos tárgyi eszköz ÁFA-figyelés",
              description:
                "Adóköteles és tárgyi adómentes tevékenység együttes végzésekor a nem tételesen elkülöníthető beszerzések ÁFA-ját a rendszer automatikusan arányosítja, a levonási hányadost pedig jogszabály szerint **felfelé kerekíti egész százalékra** (pl. `79,1% → 80%`). Ingó tárgyi eszközöknél **60 hónapig**, ingatlanoknál **240 hónapig** követi a használati arányt és számítja az éves utolsó bevallási korrekciót.",
            },
            {
              title: "Közösségi (EU), háromszögügyleti, 3. országbeli és OSS távértékesítési szabályok",
              description:
                "Közösségi termékbeszerzésnél és EU szolgáltatás-igénybevételnél 27% fizetendő és levonható ÁFA + **A60** sor képződik. Adómentes közösségi értékesítésnél (`KBAET`) ellenőrzi az érvényes VIES-számot és a CMR/fuvarokmány meglétét. A harmadik országbeli szolgáltatások automatikusan kimaradnak az A60-ból, az évi 10 000 EUR feletti EU lakossági távértékesítés pedig külön **OSS-analitikába** kerül.",
            },
            {
              title: "2665 bevallás, 65M, A60 összeállítása és 466/467 → 468 átvezetés",
              description:
                "Az **ÁFA Bevallás** oldalon ellenőrizd a `466` / `467` főkönyvi egyezést, majd állítsd elő az ezresre kerekített 2665-ös bevallást és a 65M partnerenkénti lapokat. Véglegesítéskor a rendszer automatikusan lekönyveli a `466 / 467 → 468` ÁFA-technikai átvezetést (kerekítési különbözettel együtt) és zárolja az ÁFA-időszakot.",
            },
          ],
          uiElements: [
            {
              label: "ÁNYK / eÁFA XML export (2665, 65M, A60)",
              type: "Export gomb",
              description:
                "Közvetlenül beküldhető hatósági XML csomag előállítása az ÁFA-bevalláshoz és az összesítő nyilatkozatokhoz.",
            },
          ],
        },
        {
          id: "nav-eafa-egyeztetes-adoszamla-es-onellenorzes",
          title: "2. NAV eÁFA tervezet egyeztetése, Adófolyószámla és Önellenőrzések",
          description:
            "Az **Adószámla-egyeztetés** és **Önellenőrzések** felületek zárják le a bevallási kontrollkört.",
          steps: [
            {
              title: "NAV eÁFA tervezet számlaszintű összevetése",
              description:
                "A NAV-tól letöltött eÁFA kiajánlást a rendszer számlaszinten összeveti a könyvelt ÁFA-analitikával, és négy kategóriában (*Egyező*, *Csak könyvelésben szereplő*, *Csak NAV-ban szereplő*, *Összegszerűen eltérő*) listázza a tételeket.",
            },
            {
              title: "Önellenőrzés, MNB alapkamat-alapú pótlék és digitális jegyzőkönyv",
              description:
                "Lezárt ÁFA-időszakot érintő hiba esetén az **Önellenőrzések** modul elkészíti az önellenőrző bevallást a különbözetre, az MNB jegybanki alapkamat-történet alapján kiszámítja az **önellenőrzési pótlékot**, és előállítja a kötelező digitális önellenőrzési jegyzőkönyvet.",
            },
          ],
          statusBadges: [
            {
              label: "466 / 467 Főkönyvi Egyezés: PASS",
              color: "green",
              meaning:
                "Az ÁFA-analitika forintra megegyezik a 466 (levonható) és 467 (fizetendő) főkönyvi számlák egyenlegével.",
            },
            {
              label: "Jogalap nélkül áthárított EU ÁFA",
              color: "red",
              meaning:
                "Magyar adószámmal nem rendelkező EU-s szállító tévesen magyar ÁFA-t tüntetett fel; a rendszer blokkolja a levonást.",
            },
          ],
          tips: [
            {
              type: "tip",
              title: "Eltérő ÁFA és A60 gyakoriság kezelése",
              text: "Negyedéves ÁFA-bevalló vállalkozásnál is beállítható havi A60 közösségi összesítő nyilatkozati gyakoriság, az időszakok teljes egyezőség-ellenőrzésével.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Mi történik a negatív (visszaigényelhető) ÁFA-egyenleggel, ha következő időszakra visszük át?",
          answer:
            "Ha negatív egyenlegnél a visszaigénylés helyett a „következő időszakra átvihető követelés” opciót választod, az összeg automatikusan áthúzódik a következő bevallási időszak nyitó csökkentő tételébe.",
        },
      ],
      relatedSlugs: [
        "bank-hazipenztar-deviza-es-finanszirozas",
        "tao-kiva-hipa-egyeni-vallalkozok-evzaras-es-obr-beszamolo",
      ],
    },

    // =========================================================================
    // 8. FEJEZET — TÁRGYI ESZKÖZÖK ÉS KÉSZLETNYILVÁNTARTÁS
    // =========================================================================
    {
      slug: "targyi-eszkozok-ertekcsokkenes-es-keszletnyilvantartas",
      title: "8. Tárgyi Eszközök, Értékcsökkenés és Készletnyilvántartás",
      subtitle:
        "Beruházások gyűjtése és aktiválása (161), 200 000 Ft alatti kis értékű eszközök, naptári napra pontos párhuzamos Számviteli és TAO értékcsökkenés, felújítás, terven felüli ÉCS, selejtezés, valamint folyamatos (FIFO/átlagár) és időszakos készlet- és göngyölegnyilvántartás.",
      categoryId: "fokonyv-penzugyek-es-eszkozok",
      readingTimeMinutes: 7,
      roles: ["admin", "member"],
      accessSummary:
        "Könyvelés / Törzsadatok → Tárgyi Eszköz Nyilvántartó (/fixed-assets) és Könyvelés → Készletanalitika (/inventory).",
      summary:
        "Az eaisyBooks befektetett eszköz és készlet modulja folyamatos, az 1-es és 2-es főkönyvi számlaosztállyal egyeztetett analitikát vezet. A tárgyi eszközöknél naptári napra pontosan (szökőévben 366 nappal) számítja a párhuzamos számviteli és társasági adó szerinti értékcsökkenést, a készleteknél pedig támogatja mind a folyamatos (FIFO / csúszó átlagár + ELÁBÉ 814), mind az év végi leltáralapú elszámolást és a betétdíjas göngyölegeket.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-31-fixed-assets-depreciation.webp",
          alt: "Tárgyi eszköz nyilvántartó és párhuzamos számviteli / TAO értékcsökkenési kartonok",
          caption:
            "Tárgyi Eszköz Nyilvántartó: beruházás aktiválása (161), párhuzamos Számviteli és TAO ÉCS kartonok, felújítás és selejtezés.",
        },
        {
          src: "/kb/eaisy-books/books-32-inventory-subledger.webp",
          alt: "Készletanalitika, FIFO és csúszó átlagáras ELÁBÉ számítás és göngyölegnyilvántartás",
          caption:
            "Készletanalitika & Göngyölegnyilvántartás: folyamatos mennyiségi-értékbeli készletvezetés, év végi leltár és betétdíjas csomagolóeszközök.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Beruházási számlák gyűjtése (161), eszköz aktiválása és havi ÉCS könyvelése",
          admin: true,
          member: true,
          note: "200 001 Ft bekerülési értéktől a rendszer automatikusan terv szerinti leírásra irányít.",
        },
        {
          feature: "Terven felüli értékcsökkenés, selejtezés és készlet-értékvesztés elszámolása",
          admin: true,
          member: true,
          note: "Selejtezési jegyzőkönyv csatolásával és TAO-alap módosító jelzéssel.",
        },
      ],
      sections: [
        {
          id: "targyi-eszkozok-aktivalas-szamviteli-es-tao-ecs",
          title: "1. Tárgyi eszközök aktiválása (161), párhuzamos Számviteli/TAO ÉCS és kivezetés",
          description:
            "Egyetlen beruházási projektre több beszerzési, szállítási, vám- és üzembehelyezési számla gyűjthető (személygépkocsinál a le nem vonható ÁFA-t is a bekerülési értékbe emelve).",
          steps: [
            {
              title: "Üzembe helyezés (aktiválás) és 200 000 Ft-os kis értékű eszköz határ",
              description:
                "A **Tárgyi Eszköz Nyilvántartó** oldalon az **+ Új eszköz felvétele** gombbal aktiváld a beruházást (a `161`-es számla egyenlege kifut). `200 000 Ft` egyedi bekerülési érték alatt választható az egyösszegű ÉCS; `200 001 Ft`-tól a rendszer terv szerinti leírást ír elő, a telek/földterület pedig `0 Ft` ÉCS-vel fut.",
            },
            {
              title: "Naptári napra pontos számviteli és TAO értékcsökkenés futtatása",
              description:
                "A rendszer naptári napra pontosan (pl. `720 000 × 292 / 365 = 576 000 Ft`, szökőévben `366` nappal) számítja a lineáris ÉCS-t a maradványérték védelmével, párhuzamosan vezeti a **Számviteli** és a **TAO** értékcsökkenést, és az eltérést automatikusan átadja a társaságiadó-kalkulációnak.",
            },
            {
              title: "Felújítás, költséghely-áthelyezés, értékesítés és selejtezés",
              description:
                "Felújításnál növeli a bekerülési értéket és előretekintve újraszámolja az ÉCS-t (a lezárt múltbeli időszakokat érintetlenül hagyva). Hónap közbeni költséghely-váltásnál naparányosan megosztja a havi ÉCS-t, selejtezéskor/értékesítéskor pedig kivezeti a bruttó értéket és a halmozott ÉCS-t.",
            },
          ],
          uiElements: [
            {
              label: "+ Új eszköz felvétele / Számlafelosztás (N:1 / 1:N)",
              type: "Eszköztár gombok",
              description:
                "Több beruházási számla összevonása egy tárgyi eszközre (N:1), vagy egy számla szétbontása több egyedi eszközre (1:N).",
            },
          ],
        },
        {
          id: "keszletanalitika-fifo-elabe-es-gongyoleg",
          title: "2. Készletanalitika (FIFO / csúszó átlagár), ELÁBÉ (814) és Göngyöleg",
          description:
            "A **Készletanalitika** egyaránt kiszolgálja a folyamatos év közbeni készletvezetést és az év végi leltáralapú elszámolást.",
          steps: [
            {
              title: "Folyamatos készletvezetés, év végi leltár és göngyöleg kezelése",
              description:
                "Áruértékesítéskor a rendszer a választott **FIFO** vagy **csúszó átlagár** szerint automatikusan könyveli az **ELÁBÉ (814)** tételt. A visszaváltható raklapok, rekeszek és palackok külön **göngyöleg-analitikán** futnak, így nem torzítják a nettó árbevételt; összköltség eljárásnál pedig a saját termelésű készletek állományváltozása (`581`) előjelhelyesen képződik.",
            },
          ],
          statusBadges: [
            {
              label: "1. Számlaosztály – Analitika Egyezés",
              color: "green",
              meaning:
                "Az eszköznyilvántartó bruttó és halmozott ÉCS egyenlege forintra egyezik az 1-es főkönyvi számlaosztállyal.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Saját fejlesztésű szoftver aktiválása (114 / 582)",
              text: "Saját előállítású szoftver aktiválásakor az eszköz az aktivált saját teljesítmények (582) számlával szemben kerül állományba (114).",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan kezeli a rendszer a többkomponensű eszköz részleges kivezetését?",
          answer:
            "Részleges kivezetéskor a rendszer arányosan bontja meg a bruttó értéket és a halmozott értékcsökkenést, a megmaradó eszközrész amortizációja pedig zavartalanul folytatódik.",
        },
      ],
      relatedSlugs: [
        "fokonyvi-konyveles-kontirozas-varazslo-koltseghelyek-elhatarolasok",
        "tao-kiva-hipa-egyeni-vallalkozok-evzaras-es-obr-beszamolo",
      ],
    },

    // =========================================================================
    // 9. FEJEZET — BÉRSZÁMFEJTÉS, JUTTATÁSOK, MUNKAIDŐ, 2608 ÉS BÉRFELADÁS
    // =========================================================================
    {
      slug: "berszamfejtes-juttatasok-munkaido-2608-es-berfeladas",
      title: "9. Bérszámfejtés, Juttatások, Munkaidő, Bevallások (2608) és Bérfeladás",
      subtitle:
        "Bérszámfejtési irányítópult, személytörzs (adó/TAJ CDV, minimálbér/bérminimum védelem, T1041/08E), SZJA- és családi járulékkedvezmények sorrendje, munkaidő és bérpótlékok, SZÉP-kártya, végrehajtói letiltások, EFO és megbízás, 2608-as havi bevallás és főkönyvi bérfeladás.",
      categoryId: "adozas-berszamfejtes-es-beszamolo",
      readingTimeMinutes: 10,
      roles: ["admin", "member"],
      accessSummary:
        "eaisyBooks → Bérszámfejtés (/eaisybooks/payroll), Személytörzs (Foglalkoztatottak), Adóelőleg-nyilatkozatok, 2608-as havi bevallás és Könyvelés → Bérek / járulékok (Főkönyvi bérfeladás).",
      summary:
        "Az eaisyBooks beépített bérszámfejtési munkaterülete lefedi a teljes magyar bér- és TB-folyamatot: a dolgozók beléptetését (T1041/08E) és minimálbér/bérminimum kontrollját, az adó- és járulékkedvezmények (NÉTAK, 25/30 év alattiak, családi kedvezmény, SZOCHO-kedvezmények) törvényi sorrendjét, a bérpótlékokat és táppénzt, a SZÉP-kártyát és végrehajtói letiltásokat (33%/50%), a havi 2608A/2608M bevallást, valamint a költséghelyenkénti főkönyvi bérfeladást (54, 56 / 462, 463, 471, 479).",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-33-payroll-dashboard.webp",
          alt: "Bérszámfejtési irányítópult a havi számfejtési ciklusokkal, létszámmal és nettó bérkifizetéssel",
          caption:
            "eaisyBooks → Bérszámfejtés irányítópult: aktuális havi számfejtési ciklus állapota, foglalkoztatotti létszám és bevallási határidők.",
        },
        {
          src: "/kb/eaisy-books/books-34-payroll-employees.webp",
          alt: "Személytörzs (Foglalkoztatottak) a jogviszonyokkal, alapbérekkel és T1041 státusszal",
          caption:
            "Személytörzs (Foglalkoztatottak): adóazonosító és TAJ CDV-ellenőrzés, FEOR garantált bérminimum kontroll és jogviszonyok.",
        },
        {
          src: "/kb/eaisy-books/books-35-payroll-declarations.webp",
          alt: "Adó- és járulékkedvezmény nyilatkozatok kezelése",
          caption:
            "Adó- és járulékkedvezmény nyilatkozatok: NÉTAK, 25/30 év alattiak, első házasok, személyi és családi adó-/járulékkedvezmények.",
        },
        {
          src: "/kb/eaisy-books/books-36-payroll-filing-2608.webp",
          alt: "NAV 2608-as havi adó- és járulékbevallás (A-lap és M-lapok) összeállítása",
          caption:
            "2608-as havi bevallás: dolgozónkénti 2608M és összesítő 2608A lapok generálása, ellenőrzése és ÁNYK XML exportja.",
        },
        {
          src: "/kb/eaisy-books/books-37-salaries-gl-posting.webp",
          alt: "Főkönyvi bérfeladás és járulék-egyeztetés az 54, 56 és 462, 463, 471, 479 számlákra",
          caption:
            "Főkönyvi bérfeladás & Járulék-egyeztetés: költséghelyenkénti, forintra kiegyensúlyozott bér- és közteher-feladás a főkönyvbe.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "Személytörzs, adóelőleg-nyilatkozatok, havi bérszámfejtés és 2608-as bevallás kezelése",
          admin: true,
          member: true,
          note: "Csak Bérszámfejtő vagy Adminisztrátor jogosultsággal érhető el; a személyes béradatok a könyvelők elől elzárhatók.",
        },
        {
          feature: "Összesített főkönyvi bérfeladás (54, 56 / 462, 463, 471, 479) könyvelése",
          admin: true,
          member: true,
          note: "A könyvelő az összesített, költséghelyenkénti főkönyvi bérfeladást egyéni béradatok nélkül is lekönyvelheti.",
        },
      ],
      sections: [
        {
          id: "szemelytorzs-adokedvezmenyek-munkaido-es-juttatasok",
          title: "1. Személytörzs (T1041), adókedvezmény-sorrend, munkaidő és juttatások / letiltások",
          description:
            "A rendszer mentéskor ellenőrzi az adóazonosító jelet, a TAJ-számot és a FEOR szerinti minimálbér / garantált bérminimum szabályokat.",
          steps: [
            {
              title: "Dolgozó beléptetése, minimálbér/bérminimum védelem és T1041 (08E) bejelentés",
              description:
                "A **Személytörzs (Foglalkoztatottak)** oldalon az **Új dolgozó felvétele** varázsló ellenőrzi az adóazonosító jelből számított születési dátumot, a TAJ CDV-számjegyet, az érvényes minimálbért (`322 800 Ft`) és a szakképzettséget igénylő FEOR-munkaköröknél a garantált bérminimumot (`373 200 Ft`), majd előkészíti a **T1041 / 08E** bejelentést.",
            },
            {
              title: "Adó- és járulékkedvezmények törvényi sorrendje és SZOCHO-kedvezmények",
              description:
                "Az **Adóelőleg-nyilatkozatok** felületen rögzített kedvezményeket (NÉTAK / többgyermekes anyák, 25 év alatti fiatalok és 30 év alatti anyák — a betöltés hónapjában utoljára érvényesítve —, személyi, első házasok és családi kedvezmény) a program a törvényi sorrendben érvényesíti, a fel nem használt családi kedvezményt pedig automatikusan átvezeti a 18,5%-os TB-járulékra (**családi járulékkedvezmény**).",
            },
            {
              title: "Munkaidő, bérpótlékok, SZÉP-kártya, végrehajtói letiltások (33%/50%) és EFO/megbízás",
              description:
                "A számfejtés kezeli a bérpótlékokat (174-es osztószámmal, napi 11 órás pihenőidő és évi 250 órás túlóra-korlát figyeléssel), a 15 munkanapos betegszabadságot (70%) és táppénzt, a SZÉP-kártya 28%-os (keret felett 33,04%-os) terhét, a bírósági letiltásokat (**33%/50% plafon**, gyermektartásdíj elsőbbséggel és levonásmentes bérminimum védelemmel), valamint a megbízási (minimálbér 30%-os TB-küszöb) és EFO (5/15/90 napos korlát) jogviszonyokat.",
            },
          ],
          uiElements: [
            {
              label: "Számfejtés indítása / Adóelőleg-nyilatkozatok",
              type: "Műveleti gombok",
              description:
                "Havi számfejtési ciklus futtatása és a dolgozói SZJA/járulékkedvezmény-nyilatkozatok nyilvántartása.",
            },
          ],
        },
        {
          id: "havi-zaras-2608-bevalllas-kileptetes-es-berfeladas",
          title: "2. Havi bérzárás, NAV 2608-as bevallás, kiléptetés, M30 és főkönyvi bérfeladás",
          description:
            "A jóváhagyott bérszámfejtésből egyetlen kattintással előállnak a bérjegyzékek, a banki utalási csomag, a 2608-as bevallás és a főkönyvi bérfeladás.",
          steps: [
            {
              title: "NAV 2608A / 2608M havi bevallás és kilépő igazoláscsomag összeállítása",
              description:
                "A **2608-as havi bevallás** felületen generáld le a dolgozónkénti M-lapokat és az összesítő A-lapot (25 fő felett rehabilitációs hozzájárulás kalkulációval). Kiléptetéskor a rendszer kiszámítja a szabadságmegváltást és a végkielégítést, és egy kattintással előállítja a teljes kilépő igazoláscsomagot.",
            },
            {
              title: "Költséghelyenkénti főkönyvi bérfeladás (54, 56 / 462, 463, 471, 479)",
              description:
                "A **Könyvelés → Bérek / járulékok** oldalon a rendszer költséghelyenkénti bontásban, forintra kiegyensúlyozva feladja a bérköltséget (`54`), a SZOCHO-t (`56`), az SZJA-t (`462`), a TB-járulékot (`463`), a nettó bért (`471`) és a letiltásokat/levonásokat (`479`) a főkönyvbe.",
            },
          ],
          statusBadges: [
            {
              label: "Minimálbér / Garantált bérminimum: OK",
              color: "green",
              meaning:
                "A dolgozó alapbére (részmunkaidőben időarányosan) eléri a FEOR-munkakörhöz tartozó törvényi bérminimumot.",
            },
            {
              label: "2608A / 2608M — Főkönyvvel egyeztetve",
              color: "blue",
              meaning:
                "A havi járulékbevallás adatai forintra egyeznek a 462, 463 és 471 főkönyvi bérfeladási számlákkal.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "25 és 30 év alattiak kedvezményének automatikus kivezetése",
              text: "A 25. illetve 30. életév betöltésének hónapjában a kedvezmény még utoljára érvényesül, a következő hónaptól pedig a rendszer automatikusan kivezeti, megelőzve a jogosulatlan adóelőleg-levonási hiányt.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Hogyan kezeli a rendszer a visszamenőleges béremelést vagy lezárt bérhónap javítását?",
          answer:
            "Lezárt bérhónapot a rendszer nem ír felül csendben: visszamenőleges korrekció esetén elkészíti a 08-as önellenőrzést / helyesbítést és a különbözeti bérfeladást.",
        },
      ],
      relatedSlugs: [
        "fokonyvi-konyveles-kontirozas-varazslo-koltseghelyek-elhatarolasok",
        "tao-kiva-hipa-egyeni-vallalkozok-evzaras-es-obr-beszamolo",
      ],
    },

    // =========================================================================
    // 10. FEJEZET — TAO, KIVA, HIPA, EGYÉNI VÁLLALKOZÓK, ÉVZÁRÁS ÉS OBR BESZÁMOLÓ
    // =========================================================================
    {
      slug: "tao-kiva-hipa-egyeni-vallalkozok-evzaras-es-obr-beszamolo",
      title: "10. Társasági Adó, KIVA, HIPA, Egyéni Vállalkozók, Évzárás és OBR Beszámoló",
      subtitle:
        "TAO adóalap-módosító tételek, veszteségelhatárolás 50%-os korlátja és jövedelemminimum, KIVA kalkulátor és TAO–KIVA összehasonlító, HIPA sávos ELÁBÉ-korlát és telephelyi megosztás, átalányadózó/KATA egyéni vállalkozók, évzárási ellenőrzőlista, egyenlegközlők, Mérleg, Eredménykimutatás (3 oszlopos hibajavítással) és OBR e-beszámoló.",
      categoryId: "adozas-berszamfejtes-es-beszamolo",
      readingTimeMinutes: 11,
      roles: ["admin", "member"],
      accessSummary:
        "eaisyBooks → Társasági Adó, KIVA Kalkulátor, HIPA, Egyéni Vállalkozás, Számviteli Évzárás, valamint Könyvelés → Mérleg, Eredménykimutatás és Éves beszámoló (OBR).",
      summary:
        "Az eaisyBooks záró modulcsoportja egész évben naprakészen számítja a társasági adót (TAO), a kisvállalati adót (KIVA) és a helyi iparűzési adót (HIPA), dedikált munkaterületet biztosít az átalányadózó és KATA egyéni vállalkozóknak, év végén pedig tételes zárási ellenőrzőlistával, partner egyenlegközlő levelekkel, automatikus évzáró–évnyitó (491/492/493) tételekkel és közvetlenül beküldhető OBR e-beszámolóval zárja az üzleti évet.",
      screenshots: [
        {
          src: "/kb/eaisy-books/books-38-tao-main-overview.webp",
          alt: "Társasági adó (TAO) áttekintés, adóalap-módosító tételek és jövedelemminimum kalkuláció",
          caption:
            "Társasági adó (TAO): adóalap-növelő és -csökkentő tételek automatikus gyűjtése, 50%-os veszteségkorlát és 2%-os jövedelemminimum.",
        },
        {
          src: "/kb/eaisy-books/books-39-kiva-calculator.webp",
          alt: "KIVA alátámasztó analitika, kalkulátor és TAO–KIVA adónem-összehasonlító",
          caption:
            "KIVA Alátámasztó Analitika & Kalkulátor: személyi jellegű kifizetések, pénztár- és tőkeműveletek 10%-os KIVA-alapja és TAO összehasonlítás.",
        },
        {
          src: "/kb/eaisy-books/books-40-hipa-local-tax.webp",
          alt: "Helyi iparűzési adó (HIPA) kalkuláció, sávos ELÁBÉ-korlát és telephelyi adóalap-megosztás",
          caption:
            "Helyi Iparűzési Adó (HIPA): normál és egyszerűsített (sávos / KIVA 1,2×) adóalap, sávos ELÁBÉ+közvetített korlát és önkormányzati megosztás.",
        },
        {
          src: "/kb/eaisy-books/books-41-ev-sole-proprietor.webp",
          alt: "Egyéni vállalkozói irányítópult átalányadó (40/80/90%) és KATA keretfigyeléssel",
          caption:
            "Egyéni Vállalkozás munkaterület: átalányadó (40/80/90% költséghányad, adómentes keret, göngyölítéses TB/SZOCHO) és KATA pénztárkönyv.",
        },
        {
          src: "/kb/eaisy-books/books-42-year-end-closing.webp",
          alt: "Számviteli évzárási munkafolyamat, zárlati ellenőrzőlista és egyenlegközlő levelek",
          caption:
            "Számviteli Évzárás: zárlati ellenőrzőlista, analitika–főkönyv egyezés, partner egyenlegközlő PDF-ek és 492/493/491 záró-nyitó automatizmus.",
        },
        {
          src: "/kb/eaisy-books/books-43-balance-sheet.webp",
          alt: "Számviteli Mérleg kimutatás az ellentétes előjelű folyószámlák automatikus átsorolásával",
          caption:
            "Könyvelés → Mérleg: Sztv. szerinti eszköz–forrás mérleg, túlfizetések automatikus átsorolása és jelentős hiba esetén 3 oszlopos nézet.",
        },
        {
          src: "/kb/eaisy-books/books-44-profit-and-loss.webp",
          alt: "Eredménykimutatás összköltség és forgalmi költség eljárással",
          caption:
            "Könyvelés → Eredménykimutatás: Sztv. 'A' (összköltség) és forgalmi költség eljárású eredménykimutatás soronkénti főkönyvi lefúrással.",
        },
        {
          src: "/kb/eaisy-books/books-45-annual-report-obr.webp",
          alt: "Éves beszámoló, kiegészítő melléklet, ellenőrzőlista és OBR e-beszámoló közzététel",
          caption:
            "Éves beszámoló & OBR közzététel: Mérleg, Eredménykimutatás, Kiegészítő melléklet és közvetlenül beküldhető OBR csomag.",
        },
      ],
      PermissionMatrix: [
        {
          feature: "TAO, KIVA, HIPA kalkulációk és Egyéni vállalkozói keretek előkészítése",
          admin: true,
          member: true,
          note: "A főkönyvi és bérszámfejtési adatokból valós időben frissül.",
        },
        {
          feature: "Partner egyenlegközlő levelek generálása és zárlati ellenőrzőlista futtatása",
          admin: true,
          member: true,
          note: "Forint és eredeti devizanem szerinti tételes számlalistával.",
        },
        {
          feature: "Számviteli évzárás véglegesítése (492/493), évnyitás (491) és OBR e-beszámoló export",
          admin: true,
          member: false,
          note: "Senior könyvelő / Iroda adminisztrátor jogosultsághoz kötött.",
        },
      ],
      sections: [
        {
          id: "tao-kiva-hipa-es-egyeni-vallalkozok",
          title: "1. TAO, KIVA, HIPA kalkulátorok és Egyéni vállalkozók (Átalányadó / KATA)",
          description:
            "A nyereség- és helyi adók moduljai közvetlenül a főkönyvből, az eszköznyilvántartóból és a bérszámfejtésből gyűjtik az adóalap-módosító tételeket.",
          steps: [
            {
              title: "TAO adóalap-módosítók, 50%-os veszteségkorlát és KIVA összehasonlítás",
              description:
                "A **Társasági adó (TAO)** modul automatikusan összegyűjti a növelő (számviteli ÉCS, bírság, céltartalék képzés, értékvesztés) és csökkentő (TAO ÉCS, céltartalék feloldás, fejlesztési tartalék) tételeket, érvényesíti az elhatárolt veszteség **50%-os korlátját** és ellenőrzi a **2%-os jövedelem-(nyereség-)minimumot**. A **KIVA Kalkulátor** 10%-os kulccsal számolja a KIVA-alapot, és összehasonlítja a TAO-terheléssel.",
            },
            {
              title: "HIPA sávos ELÁBÉ + közvetített szolgáltatás korlát és telephelyi megosztás",
              description:
                "A **HIPA** modul a nettó árbevételből levonja az anyagköltséget és az 500M Ft feletti sávokban jogszabály szerint korlátozott ELÁBÉ + igazolt közvetített szolgáltatásokat (vagy összehasonlítja a kisvállalkozói tételes és a KIVA 1,2× alappal), több önkormányzat esetén pedig megosztja az adóalapot.",
            },
            {
              title: "Átalányadózó (40/80/90%) és KATA egyéni vállalkozók kezelése",
              description:
                "Az **Egyéni Vállalkozás** munkaterület folyamatosan figyeli az átalányadózók éves adómentes jövedelemkeretét (éves minimálbér fele) és a negyedéves **göngyölítéses TB- és SZOCHO-alapot**, KATA-s vállalkozóknál pedig az éves bevételi értékhatárt és a kifizetőtől származó számlákat.",
            },
          ],
          uiElements: [
            {
              label: "Főkönyvből Frissítés / TAO összehasonlítás (KIVA)",
              type: "Műveleti gombok",
              description:
                "A főkönyvi és bérfeladási számlák egyenlegének beemelése és a TAO vs. KIVA adóelőny számszerű összevetése.",
            },
          ],
        },
        {
          id: "evzaras-egyenlegkozlok-merleg-eredmenykimutatas-es-obr",
          title: "2. Évzárás, egyenlegközlők, Mérleg, Eredménykimutatás (3 oszlopos) és OBR",
          description:
            "Az **Évzárás** és **Éves beszámoló** munkafolyamat garantálja, hogy csak 100%-osan egyező analitikákból készülhessen el a beszámoló.",
          steps: [
            {
              title: "Zárási ellenőrzőlista, partner egyenlegközlő levelek és két nyitott év kezelése",
              description:
                "A **Számviteli Évzárás** oldalon futtasd le a zárlati ellenőrzőlistát (ÉCS, deviza-átértékelés, elhatárolások, hiányzó számlák, analitika–főkönyv egyezés), majd generáld le a partnerenkénti PDF egyenlegközlő leveleket. Amíg az előző év beszámolója készül, az új üzleti év előzetes nyitó egyenlegekkel párhuzamosan könyvelhető.",
            },
            {
              title: "Mérleg, Eredménykimutatás, háromoszlopos hibajavítás és OBR e-beszámoló",
              description:
                "A **Mérleg** automatikusan átsorolja az ellentétes előjelű folyószámla-egyenlegeket (vevői/szállítói túlfizetéseket), jelentős összegű előző évi hiba esetén pedig a Mérleg és az **Eredménykimutatás** is átvált **háromoszlopos nézetre** (*Előző év · Lezárt év(ek) módosításai · Tárgyév*). Az **Éves beszámoló** oldalon egy kattintással előállítható a beküldhető **OBR csomag** és a könyvvizsgálói adatexport.",
            },
          ],
          statusBadges: [
            {
              label: "Analitika–Főkönyv Egyezés: 100%",
              color: "green",
              meaning:
                "A vevő, szállító, tárgyi eszköz és készlet analitika forintra megegyezik a főkönyvi kivonattal; az évzárás indítható.",
            },
            {
              label: "OBR e-Beszámoló beküldésre kész",
              color: "blue",
              meaning:
                "Az Eszköz = Forrás mérlegegyezőség, az eredménykimutatás és a kiegészítő melléklet validációja sikeres.",
            },
          ],
          tips: [
            {
              type: "info",
              title: "Automatikus eredménytartalék-átvezetés (419 → 414) évnyitáskor",
              text: "Az új üzleti év nyitásakor (491) a rendszer automatikusan elkészíti az előző évi adózott eredmény (419) eredménytartalékba (414) történő átvezetését is.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "Könyvelhetek-e már a januári (új évi) időszakra, amíg az előző évi beszámoló még nincs lezárva?",
          answer:
            "Igen! Az eaisyBooks támogatja két párhuzamosan nyitott üzleti év kezelését: az új év előzetes nyitó egyenlegekkel folyamatosan könyvelhető, az előző év végleges zárásakor pedig a nyitótételek naplózottan frissíthetők.",
        },
      ],
      relatedSlugs: [
        "afa-analitika-2665-bevalllas-65m-a60-es-eafa-egyeztetes",
        "berszamfejtes-juttatasok-munkaido-2608-es-berfeladas",
      ],
    },
  ],
};
