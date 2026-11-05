import type { ProductKnowledgeBase } from "./types";

export const eaisyHrKb: ProductKnowledgeBase = {
  "slug": "eaisy-hr",
  "name": "eaisyHR",
  "tagline": "AI-támogatott vállalati HR-menedzsment, munkaidő és dolgozói életciklus platform",
  "description": "Teljes körű magyar nyelvű dokumentáció az eaisyHR használatához: Dolgozói Önkiszolgáló Portál (digitális jelenléti ív, szabadságigénylés, bérjegyzékek, Cafeteria, KPI célok, IDP, belső karrier), 360°-os munkavállalói karton és személyi dossziék, szervezeti ábra és munkaköri katalógus, műszakbeosztás, bérszámfejtés, munkaügyi megfelelőség, AI toborzás (ATS), digitális On-/Offboarding, hatósági riportok és sértetlen HR eseménynapló.",
  "productRoute": "/eaisy-hr",
  "appUrl": "https://hr.eaisy.hu",
  "status": "live",
  "version": "2.1",
  "updatedAt": "2026. november",
  "theme": {
    "accent": "#98DBD5",
    "secondary": "#1E7871",
    "dark": "#092C2A",
    "softBg": "#EEF8F7"
  },
  "roles": [
    {
      "role": "admin",
      "label": "HR Adminisztrátor / Vezető / Bérszámfejtő",
      "summary": "Teljes vagy modulszinten delegált hozzáférés a HR Munkaasztalhoz, a 360°-os dolgozói kartonokhoz és szerződésgenerátorokhoz, a műszakbeosztáshoz, a bérszámfejtéshez, a munkaügyi megfelelőségi mátrixokhoz, a vezetői jóváhagyásokhoz, a teljesítményértékeléshez, az ATS toborzáshoz, a be-/kiléptetéshez, a hatósági riportokhoz és a központi HR auditnaplóhoz."
    },
    {
      "role": "member",
      "label": "Munkavállaló (Dolgozói Önkiszolgáló Portál)",
      "summary": "Személyes hozzáférés a Dolgozói Portálhoz: napi munkaidő-terminál (becsekkolás/szünet/kicsekkolás), jelenléti ív és korrekciós kérelmek, szabadság- és túlóra-igénylés, saját személyi iratok és aláírt példányok feltöltése, havi bérpapírok elektronikus átvétele, éves Cafeteria nyilatkozat, egyéni KPI önértékelés, IDP fejlődési terv és belső álláspályázatok / ismerős ajánlása."
    }
  ],
  "categories": [
    {
      "id": "dolgozoi-portal-es-onkiszolgalas",
      "title": "Dolgozói Portál & Önkiszolgálás",
      "description": "Bejelentkezés, modul- és cégváltó, interaktív munkaidő-terminál, jelenléti ív, szabadságigénylés, bérpapírok, Cafeteria, célok, IDP és belső karrier.",
      "icon": "UserCheck"
    },
    {
      "id": "allomany-szervezet-es-muszak",
      "title": "360° Állomány, Szervezet & Műszakbeosztás",
      "description": "HR Munkaasztal, 360°-os dolgozói karton, szerződés- és T1041-generálás, szervezeti ábra, munkaköri katalógus és heti műszaktervező.",
      "icon": "Briefcase"
    },
    {
      "id": "berszamfejtes-megfeleloseg-es-teljesitmeny",
      "title": "Bérszámfejtés, Megfelelőség & Vezetői Nézet",
      "description": "Havi bérjegyzékek előállítása, orvosi és munkavédelmi megfelelőség, vezetői jóváhagyási központ, KPI ciklusok és haranggörbe kalibráció.",
      "icon": "ShieldCheck"
    },
    {
      "id": "toborzas-eletut-es-audit",
      "title": "AI Toborzás, On-/Offboarding, Riportok & Audit",
      "description": "ATS jelöltkezelő Kanban, AI álláshirdetés és CV-elemzés, digitális beléptetés és kiléptetés, NAV T1041/KSH riportok és HR eseménynapló.",
      "icon": "Sparkles"
    }
  ],
  "articles": [
    {
      "slug": "bejelentkezes-dolgozoi-portal-es-profil",
      "title": "Bejelentkezés, Dolgozói Portál Áttekintés és Profilom",
      "subtitle": "Belépés az eaisyHR munkaterületre, modul- és cégváltás, a napi Munkaidő Terminál (blokkolóóra) használata, saját profil és hivatalos dokumentumok kezelése.",
      "categoryId": "dolgozoi-portal-es-onkiszolgalas",
      "readingTimeMinutes": 7,
      "roles": [
        "admin",
        "member"
      ],
      "summary": "Az eaisyHR és az eaisyDocs közös, kétmodulos bejelentkező felületet használ. Belépés után minden munkavállaló eléri a Dolgozói Portált (/hr), ahol másodperces pontosságú Munkaidő Terminállal rögzítheti a napi munkavégzést és szüneteket, áttekintheti szabadságkeretét és megfelelőségi teendőit, a Profilom és Dokumentumaim menüpontokban pedig kezelheti személyes adatait és hivatalos munkaügyi iratait.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-01-login.webp",
          "alt": "eaisyHR bejelentkező képernyő a munkaterület-választó csúszkával és a jobb oldali interaktív funkciószalaggal",
          "caption": "Bejelentkezés (/login?module=hr): a felső csúszkával választható ki az eaisyHR munkaterület, miközben a jobb oldali szalag a főbb HR funkciókat mutatja be."
        },
        {
          "src": "/kb/eaisy-hr/hr-02-portal-overview.webp",
          "alt": "Dolgozói Portál Áttekintés a Munkaidő Terminállal, heti munkaidő-mérleggel és teendőkkel",
          "caption": "Dolgozói Portál — Áttekintés (/hr): interaktív Munkaidő Terminál (becsekkolás, szünet, kicsekkolás), mai időbélyegzések és heti munkaidő-összesítő."
        },
        {
          "src": "/kb/eaisy-hr/hr-03-self-profile.webp",
          "alt": "Profilom oldal az alapadatokkal, orvosi és munkavédelmi érvényességgel és maszkolt különleges adatokkal",
          "caption": "Profilom (/hr/self-service/profile): munkaköri és megfelelőségi alapadatok, valamint a GDPR-védett, maszkolt Különleges Adatok kártya Felfedés gombbal."
        },
        {
          "src": "/kb/eaisy-hr/hr-04-self-documents.webp",
          "alt": "Dokumentumaim oldal a személyi irattárban tárolt szerződésekkel, tájékoztatókkal és aláírt példány feltöltéssel",
          "caption": "Dokumentumaim (/hr/self-service/documents): hivatalos munkaviszony-iratok, eaisyDocs iktatószámok és az Aláírt példány feltöltése funkció."
        }
      ],
      "faqs": [
        {
          "question": "Beleszámít az ebédszünet a napi nettó munkaidőbe?",
          "answer": "Nem. Az „Ebédszünet / Szünet indítása” gomb megnyomásakor a nettó munkaidő számlálója megáll, és a rendszer külön méri a szünetidőt. A „Tervezett befejezés” időpontja automatikusan kitolódik a szünet időtartamával."
        },
        {
          "question": "Módosíthatom-e saját magam a bankszámlaszámomat?",
          "answer": "Igen. A „Profilom” oldalon a „Különleges Adatok” kártyán kattints a „Felfedés” gombra, majd a jobb felső ceruza ikonra. Itt frissítheted a bankszámlaszámodat, TAJ számodat és adóazonosítódat, míg az alapbér adatokat kizárólag a HR módosíthatja."
        }
      ],
      "relatedSlugs": [
        "szabadsag-jelenlet-es-munkaido-onkiszolgalas",
        "berpapirok-celkituzesek-idp-es-belso-karrier"
      ],
      "accessSummary": "Minden aktív munkavállaló és HR felhasználó számára elérhető (/login?module=hr, /hr, /hr/self-service/profile, /hr/self-service/documents).",
      "PermissionMatrix": [
        {
          "feature": "Bejelentkezés, 2FA hitelesítés, Dolgozói Portál és Munkaidő Terminál",
          "admin": true,
          "member": true,
          "note": "Minden aktív munkavállaló saját munkaidő-terminállal és személyes portállal rendelkezik."
        },
        {
          "feature": "Saját profil, maszkolt különleges adatok felfedése és aláírt iratok feltöltése",
          "admin": true,
          "member": true,
          "note": "A saját TAJ/adó/bankszámla módosítható; az alapbért kizárólag a HR szerkesztheti."
        },
        {
          "feature": "HR Munkaasztal, 360°-os dolgozói kartonok és vállalati modulok kezelése",
          "admin": true,
          "member": false,
          "note": "HR Adminisztrátor szerepkörhöz vagy egyedileg delegált modul-jogosultsághoz kötött."
        }
      ],
      "sections": [
        {
          "id": "bejelentkezes-dolgozoi-portal-es-profil-folyamat",
          "title": "1. Bejelentkezés, Dolgozói Portál Áttekintés és Profilom — alapfolyamatok és használat",
          "description": "Az eaisyHR és az eaisyDocs közös, kétmodulos bejelentkező felületet használ. Belépés után minden munkavállaló eléri a Dolgozói Portált (/hr), ahol másodperces pontosságú Munkaidő Terminállal rögzítheti a napi munkavégzést és szüneteket, áttekintheti szabadságkeretét és megfelelőségi teendőit, a Profilom és Dokumentumaim menüpontokban pedig kezelheti személyes adatait és hivatalos munkaügyi iratait.",
          "steps": [
            {
              "title": "Munkaterület kiválasztása és bejelentkezés",
              "description": "Nyisd meg a bejelentkező oldalt (/login), majd a felső „Munkaterület kiválasztása” csúszkán válaszd az „eaisyHR – Munkaügy és jelenlét” opciót. Add meg az e-mail címedet és jelszavadat, majd kattints a „Bejelentkezés” gombra. Bekapcsolt kétlépcsős azonosítás (2FA) esetén a következő képernyőn írd be a hitelesítő alkalmazás 6 jegyű kódját."
            },
            {
              "title": "Modulváltás (eaisyHR ↔ eaisyDocs) és cégválasztás",
              "description": "Ha mindkét rendszerhez van jogosultságod, a bal felső „eaisyHR” logóra kattintva bármikor átválthatsz az eaisyDocs iratkezelőre. Közvetlenül alatta, a Cégválasztó sávban válthatsz a cégcsoport vállalatai között, vagy új céget adhatsz hozzá."
            },
            {
              "title": "Napi munkaidő rögzítése a Munkaidő Terminálon",
              "description": "A Dolgozói Portál „Áttekintés” (/hr) oldalán található „Munkaidő Terminál” kártyán munkakezdéskor kattints a „Munkakezdés rögzítése (Becsekkolás)” gombra. Napközben az „Ebédszünet / Szünet indítása” és „Szünet befejezése és Munka folytatása” gombokkal kezelheted a munkaközi szünetet, a nap végén pedig a „Munkanap befejezése (Kicsekkolás)” gombbal zárhatod le a munkanapot."
            }
          ],
          "uiElements": [
            {
              "label": "Munkaterület kiválasztása (eaisyDocs / eaisyHR)",
              "type": "Kapcsoló",
              "description": "A bejelentkező képernyő tetején található választó, amellyel megadhatod, hogy az iratkezelő vagy a HR munkaterületre szeretnél belépni."
            },
            {
              "label": "Munkaidő Terminál",
              "type": "Interaktív kártya",
              "description": "Másodperces pontosságú digitális blokkolóóra a Dolgozói Portál főoldalán: mutatja a mai nettó munkaidőt, a napi előírást (pl. 08:00:00), a tervezett befejezést, a szünetidőt, a napi egyenleget és a heti (H–P) összesítést."
            },
            {
              "label": "Felfedés / Elrejt (Különleges Adatok)",
              "type": "Gomb",
              "description": "A „Profilom” oldalon feloldja a maszkolt TAJ, adóazonosító, bankszámlaszám és béradatokat. Minden felfedés automatikusan naplózásra kerül a központi Eseménynaplóban."
            },
            {
              "label": "Aláírt példány feltöltése",
              "type": "Gomb és modál",
              "description": "A „Dokumentumaim” oldalon a „Tervezet” jelvényű iratoknál elérhető gomb, amellyel a dolgozó feltöltheti a saját kezűleg vagy elektronikusan aláírt dokumentumpéldányt."
            }
          ]
        },
        {
          "id": "bejelentkezes-dolgozoi-portal-es-profil-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Saját profil és Különleges Adatok ellenőrzése",
              "description": "A „Profilom” (/hr/self-service/profile) oldalon áttekintheted a munkakörödet, a belépésed dátumát, valamint az orvosi alkalmassági és munkavédelmi oktatásod érvényességét. A „Különleges Adatok” kártyán a „Felfedés” gombbal oldhatod fel a maszkolt TAJ szám, adóazonosító, bankszámlaszám és béradatok megjelenítését, a ceruza ikonnal pedig frissítheted saját azonosítóidat és bankszámlaszámodat."
            },
            {
              "title": "Személyi iratok megtekintése és aláírt példány feltöltése",
              "description": "A „Dokumentumaim” (/hr/self-service/documents) menüpontban érheted el a munkaszerződésedet, az Mt. 46. § tájékoztatót, a munkaköri leírásodat és a T1041 adatlapot. A „Tervezet” állapotú iratoknál a „Letöltés” és aláírás után az „Aláírt példány feltöltése” gombbal csatolhatod a beszkennelt dokumentumot (PDF, JPG, PNG, max. 25 MB), amely automatikusan bekerül az eaisyDocs személyi dossziédba."
            }
          ],
          "statusBadges": [
            {
              "label": "Még nincs becsekkolva / Munkakezdésre vár",
              "color": "gray",
              "meaning": "A mai napon még nem indítottál munkaidő-mérést a Munkaidő Terminálon."
            },
            {
              "label": "Becsekkolva / Munkavégzés folyamatban",
              "color": "green",
              "meaning": "A munkaidő-mérés aktív, a rendszer élőben számolja a mai nettó munkaidődet."
            },
            {
              "label": "Ebédszünet folyamatban",
              "color": "amber",
              "meaning": "A munkaidő-mérés szünetel; a szünet ideje külön számlálón fut és nem számít bele a nettó munkaidőbe."
            },
            {
              "label": "Iktatva: HR/ÉÉÉÉ/XXXXXX/X",
              "color": "blue",
              "meaning": "A dokumentum hivatalos eaisyDocs iktatószámmal rendelkezik a személyi dossziéban."
            },
            {
              "label": "Aláírt példány / Tervezet",
              "color": "green",
              "meaning": "Jelzi, hogy a személyi irathoz feltöltésre került-e már a hitelesített, aláírt példány."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "Véletlenül lezárt munkanap újranyitása",
              "text": "Ha ugyanazon a napon véletlenül rákattintottál a „Munkanap befejezése (Kicsekkolás)” gombra, a Munkaidő Terminálon megjelenő „Munka újranyitása / Folytatás ma” gombbal azonnal folytathatod a napi munkaidő-mérést."
            },
            {
              "type": "info",
              "title": "Automatikus irányítás szerepkör alapján",
              "text": "Ha HR Adminisztrátor vagy HR Vezető szerepkörrel lépsz be az eaisyHR-be, a rendszer automatikusan a „HR Munkaasztal” (/hr/admin) oldalra irányít, ahonnan a bal oldalsáv „Dolgozói Portál -> Áttekintés” menüpontjával bármikor átléphetsz a saját dolgozói felületedre."
            },
            {
              "type": "warning",
              "title": "Az aláírt példány feltöltése után a fájl zárolásra kerül",
              "text": "Amikor a „Dokumentumaim” oldalon feltöltöd egy szerződés vagy tájékoztató aláírt példányát, a dokumentum levéltári hitelességgel bekerül a személyi dossziédba, és a dolgozói felületen már nem írható felül. Téves feltöltés esetén a HR osztály tudja cserélni a fájlt."
            }
          ]
        }
      ]
    },
    {
      "slug": "szabadsag-jelenlet-es-munkaido-onkiszolgalas",
      "title": "Szabadság, Jelenlét és Munkaidő Önkiszolgálás",
      "subtitle": "Saját jelenléti naptár és táblázatos ív, szabadságigénylés közvetlenül a naptárból, munkaidő-korrekciós kérelem, túlóra-egyenleg (csúsztatás vs. kifizetés) és helyettesítés.",
      "categoryId": "dolgozoi-portal-es-onkiszolgalas",
      "readingTimeMinutes": 7,
      "roles": [
        "admin",
        "member"
      ],
      "summary": "A Dolgozói Portál Jelenlét (/hr/self-service/time) menüpontjában a munkavállalók egyetlen interaktív naptárban látják a beosztott műszakjaikat, a ténylegesen ledolgozott munkaidőt és a távolléteket. A felületen néhány kattintással igényelhető szabadság, kérhető elmulasztott blokkolás javítása (Időkorrekció), valamint elszámolható a felhalmozott túlóra-egyenleg szabadidőként (csúsztatás) vagy bérkifizetésként.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-05-self-time.webp",
          "alt": "Jelenlét és szabadság önkiszolgáló oldal a havi jelenléti naptárral, túlóra-egyenleggel és kérelmekkel",
          "caption": "Jelenlét (/hr/self-service/time): havi munkaidő- és távolléti KPI-ok, interaktív Beosztás és Jelenléti Naptár, valamint az Új Távollét Kérelem és Időkorrekció kérése gombok."
        }
      ],
      "faqs": [
        {
          "question": "Levonja-e a rendszer a hétvégéket és a munkaszüneti napokat a szabadságkeretemből?",
          "answer": "Nem. A „Távollét Rögzítése” ablak automatikusan kiszűri a hétvégéket és a magyar munkaszüneti napokat, így kizárólag a tényleges munkanapokat vonja le az éves keretedből."
        },
        {
          "question": "Hogyan kérhetek fél napos csúsztatást a túlórámból?",
          "answer": "Kattints a „Túlóra Egyenleg” kártyára, válaszd a „Csúsztatás” fület, add meg a dátumot, majd az „Időtartam” mezőben válaszd a „Fél nap (4h)” vagy az „Egyedi óra” lehetőséget."
        }
      ],
      "relatedSlugs": [
        "bejelentkezes-dolgozoi-portal-es-profil",
        "vezetoi-nezet-jovahagyasok-es-teljesitmenyertekeles"
      ],
      "accessSummary": "Minden aktív munkavállaló számára elérhető a Dolgozói Portál → Jelenlét (/hr/self-service/time) menüpontban.",
      "sections": [
        {
          "id": "szabadsag-jelenlet-es-munkaido-onkiszolgalas-folyamat",
          "title": "1. Szabadság, Jelenlét és Munkaidő Önkiszolgálás — alapfolyamatok és használat",
          "description": "A Dolgozói Portál Jelenlét (/hr/self-service/time) menüpontjában a munkavállalók egyetlen interaktív naptárban látják a beosztott műszakjaikat, a ténylegesen ledolgozott munkaidőt és a távolléteket. A felületen néhány kattintással igényelhető szabadság, kérhető elmulasztott blokkolás javítása (Időkorrekció), valamint elszámolható a felhalmozott túlóra-egyenleg szabadidőként (csúsztatás) vagy bérkifizetésként.",
          "steps": [
            {
              "title": "Jelenléti naptár és Táblázatos ív áttekintése",
              "description": "Nyisd meg a „Jelenlét” (/hr/self-service/time) menüpontot. A felső 4 KPI kártya mutatja a havi „Ledolgozott Órák”, „Munkanapok / Beosztás”, „Távollét” és „Túlóra Egyenleg” értékeket. Alatta a „Naptár nézet” és a „Táblázatos ív” gombokkal válthatsz a vizuális naptár és a napi időbélyegzési lista között."
            },
            {
              "title": "Szabadság és távollét igénylése",
              "description": "Kattints a jobb felső „Új Távollét Kérelem” gombra, vagy jelöld ki a kezdő- és zárónapot közvetlenül a naptárban, majd kattints a „Szabadság / Távollét igénylése erre az időszakra” sávra. Válaszd ki a típust (Rendes szabadság, Csúsztatás, Betegszabadság, Fizetés nélküli vagy Tanulmányi szabadság). A rendszer automatikusan levonja a hétvégéket és ünnepnapokat, ellenőrzi a keretedet, majd a „Kérelem Beküldése” gombbal továbbítja a vezetődnek."
            },
            {
              "title": "Munkaidő-korrekciós kérelem benyújtása",
              "description": "Ha egy korábbi napon elfelejtettél becsekkolni vagy kicsekkolni, kattints az „Időkorrekció kérése” gombra (vagy a Táblázatos ív adott sorában a ceruza ikonra). Válaszd ki a módosítandó múltbeli/mai napot, add meg a valós munkakezdés és munkavége időpontját, töltsd ki a kötelező „Módosítás indoklása *” mezőt, majd kattints a „Kérelem benyújtása” gombra."
            }
          ],
          "uiElements": [
            {
              "label": "Új Távollét Kérelem",
              "type": "Gomb",
              "description": "Megnyitja a „Távollét Rögzítése” ablakot élő munkanap- és szabadságkeret-kalkulációval."
            },
            {
              "label": "Helyettesítés (Vezetői gomb)",
              "type": "Gomb és modál",
              "description": "Vezetők és HR-adminisztrátorok számára megjelenő gomb, amellyel saját szabadságuk idejére jóváhagyó helyettest jelölhetnek ki."
            },
            {
              "label": "Túlóra Egyenleg kártya",
              "type": "Interaktív KPI kártya",
              "description": "Rákattintva megnyitja a „Túlóra Egyenleg és Igénylés” modált a „Csúsztatás” és „Kifizetés” fülekkel."
            },
            {
              "label": "Időkorrekció kérése",
              "type": "Gomb",
              "description": "Múltbeli vagy aznapi hiányzó/pontatlan munkaidő-bélyegzés javítását kezdeményező űrlap kötelező indoklással."
            }
          ]
        },
        {
          "id": "szabadsag-jelenlet-es-munkaido-onkiszolgalas-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Túlóra-egyenleg elszámolása: Csúsztatás vagy Kifizetés",
              "description": "Kattints a „Túlóra Egyenleg” KPI kártyára. Pozitív egyenleg esetén a „Csúsztatás” fülön szabadidőként veheted ki a túlórát („Egész nap (8h)”, „Fél nap (4h)” vagy „Egyedi óra”), a „Kifizetés” fülön pedig pénzbeli megváltást igényelhetsz megadott óraszámra vagy a teljes egyenlegre."
            },
            {
              "title": "Kérelmek követése és hivatalos PDF igazolások letöltése",
              "description": "Az oldal alján található „Saját kérelmeim” táblázatban követheted az összes benyújtott igényedet. Amíg egy kérelem „Folyamatban” státuszú, a „Visszavonás” gombbal törölheted; a „Jóváhagyva” státuszú szabadságokról és időkorrekciókról pedig a „Megtekintés” és „Letöltés” gombokkal hivatalos A4-es PDF igazolást tölthetsz le."
            }
          ],
          "statusBadges": [
            {
              "label": "Folyamatban (Jóváhagyásra vár)",
              "color": "amber",
              "meaning": "A kérelem a közvetlen vezetőd (vagy kijelölt helyettese) elbírálására vár; ebben az állapotban még visszavonható."
            },
            {
              "label": "Jóváhagyva",
              "color": "green",
              "meaning": "A vezető elfogadta a kérelmet, az adatok bekerültek a jelenléti ívbe, és letölthető a PDF igazolás."
            },
            {
              "label": "Elutasítva",
              "color": "red",
              "meaning": "A kérelmet indoklással elutasították; a napok nem kerültek levonásra a keretből."
            },
            {
              "label": "Ledolgozandó (Áthelyezett munkanap)",
              "color": "amber",
              "meaning": "A naptárban az áthelyezett szombati munkanapokat jelöli, amelyek szabadságigényléskor munkanapnak számítanak."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "Időszak kijelölése két kattintással a naptárban",
              "text": "A „Naptár nézetben” kattints a tervezett szabadságod első napjára, majd az utolsó napjára: a naptár felett azonnal megjelenik a „Szabadság / Távollét igénylése erre az időszakra” gomb, amely előre kitölti a dátumokat."
            },
            {
              "type": "info",
              "title": "Automatikus Mt. szabadságkeret-kalkuláció",
              "text": "A rendszer a Munka Törvénykönyve (Mt. 115–120. §) alapján automatikusan számolja a 20 nap alapszabadságot, az életkor szerinti pótszabadságot (1–10 nap), a 16 év alatti gyermekek után járó pótszabadságot (+2/+4/+7 nap) és a megváltozott munkaképességű pótszabadságot (+5 nap)."
            }
          ]
        }
      ]
    },
    {
      "slug": "berpapirok-celkituzesek-idp-es-belso-karrier",
      "title": "Bérpapírok, Cafeteria, Célkitűzések (KPI), Fejlődési Terv (IDP) és Belső Karrier",
      "subtitle": "Havi bérjegyzékek elektronikus átvétele (Mt. 155. §), éves Cafeteria nyilatkozat, negyedéves KPI önértékelés, Egyéni Fejlődési Terv (IDP) és belső álláspályázatok / ismerős ajánlása.",
      "categoryId": "dolgozoi-portal-es-onkiszolgalas",
      "readingTimeMinutes": 8,
      "roles": [
        "admin",
        "member"
      ],
      "summary": "A Dolgozói Portál önkiszolgáló moduljai végigkísérik a munkavállaló javadalmazási és szakmai fejlődési folyamatait: a Bérpapírjaim oldalon elektronikusan nyugtázhatók és letölthetők a havi bérjegyzékek, a Cafeteria felületen összeállítható az éves juttatási csomag, a Célkitűzések és Fejlődési Tervem menüpontokban kezelhetők a KPI-ok és képzések, a Belső Állások alatt pedig pályázhatunk nyitott pozíciókra vagy ajánlhatunk ismerőst sikerdíjért.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-07-self-payroll.webp",
          "alt": "Bérpapírjaim oldal a havi bruttó és nettó munkabér-elszámolással, elektronikus átvétellel és PDF letöltéssel",
          "caption": "Bérpapírjaim (/hr/self-service/payroll): hivatalos havi bérjegyzék (Mt. 155. §), bruttó jövedelemelemek, levonások és kedvezmények részletezése, valamint elektronikus átvételi igazolás."
        },
        {
          "src": "/kb/eaisy-hr/hr-06-self-goals-idp.webp",
          "alt": "Fejlődési Tervem (IDP) oldal az aktív képzési célokkal, mentorral, céges finanszírozással és tanúsítvány-jóváhagyással",
          "caption": "Fejlődési Tervem (/hr/self-service/idp): egyéni fejlesztési célok, képzési költségek, haladási napló és tanúsítványok feltöltése."
        },
        {
          "src": "/kb/eaisy-hr/hr-08-self-career.webp",
          "alt": "Karrier és Ajánlások oldal a belső nyitott pozíciókkal, saját pályázatokkal és 150 000 Ft-os ajánlási sikerdíjjal",
          "caption": "Belső Állások (/hr/self-service/career): kizárólag munkatársaknak meghirdetett belső pozíciók és a bónuszos Ismerős ajánlása program."
        }
      ],
      "faqs": [
        {
          "question": "Mikor fizetik ki az ismerős ajánlásáért járó sikerdíjat?",
          "answer": "Amint az ajánlott jelöltet felveszik, a bónusz „Próbaidő alatt” státuszba kerül. A próbaidő sikeres lezárása után a HR jóváhagyja a kifizetést („Jóváhagyva (Kifizethető)”), és a következő havi bérszámfejtéssel kerül elszámolásra."
        },
        {
          "question": "Módosíthatom-e a beküldött KPI önértékelésemet?",
          "answer": "Igen, amíg a vezetőd nem rögzítette a vezetői bírálatot. Nyisd le a KPI kártyán a „Részletek” panelt, és kattints az „Önértékelés módosítása” gombra."
        }
      ],
      "relatedSlugs": [
        "berszamfejtes-berjegyzekek-es-cafeteria",
        "vezetoi-nezet-jovahagyasok-es-teljesitmenyertekeles",
        "toborzas-ats-karrierportal-es-ai-oneletrajz-elemzes"
      ],
      "accessSummary": "Minden aktív munkavállaló számára elérhető a Dolgozói Portál → Bérpapírjaim, Cafeteria, Célkitűzések, Fejlődési Tervem és Belső Állások menüpontokban.",
      "sections": [
        {
          "id": "berpapirok-celkituzesek-idp-es-belso-karrier-folyamat",
          "title": "1. Bérpapírok, Cafeteria, Célkitűzések (KPI), Fejlődési Terv (IDP) és Belső Karrier — alapfolyamatok és használat",
          "description": "A Dolgozói Portál önkiszolgáló moduljai végigkísérik a munkavállaló javadalmazási és szakmai fejlődési folyamatait: a Bérpapírjaim oldalon elektronikusan nyugtázhatók és letölthetők a havi bérjegyzékek, a Cafeteria felületen összeállítható az éves juttatási csomag, a Célkitűzések és Fejlődési Tervem menüpontokban kezelhetők a KPI-ok és képzések, a Belső Állások alatt pedig pályázhatunk nyitott pozíciókra vagy ajánlhatunk ismerőst sikerdíjért.",
          "steps": [
            {
              "title": "Havi bérjegyzékek megtekintése és elektronikus átvétele (Mt. 155. §)",
              "description": "Nyisd meg a „Bérpapírjaim” (/hr/self-service/payroll) menüpontot, és válaszd ki a hónapot a bal oldali listából. Ellenőrizd a „1. Bruttó Jövedelem Elemek” és „2. Levonások & Kedvezmények” tételeit, majd kattints az „Átvételt igazolom (Mt. 155. §)” -> „Nyugtázom és Átveszem” gombra. A hivatalos A4-es bérpapírt az „Előnézet” vagy „PDF Letöltése” gombbal töltheted le."
            },
            {
              "title": "Éves Cafeteria nyilatkozat összeállítása",
              "description": "Ha a HR éves Cafeteria keretet állított be számodra, a „Cafeteria” (/hr/self-service/benefits) felületen válaszd ki a „Juttatási elem” legördülőből a kívánt juttatást (pl. SZÉP Kártya, Egészségpénztár, Helyi bérlet), add meg a „Kért nettó összeg (Ft)” értéket, majd kattints a „+ Hozzáad” gombra. Amikor elosztottad a keretet, zárd le a „Nyilatkozat Véglegesítése” gombbal."
            },
            {
              "title": "Célkitűzések (KPI) követése és dolgozói önértékelés",
              "description": "A „Célkitűzések” (/hr/self-service/goals) menüpontban látod az aktív értékelési ciklusban kitűzött céljaidat. Amikor egy célon megjelenik a „Te jössz!” („Önértékelésre vár”) jelvény, kattints a „Részletek” gombra, add meg az elért számszerű eredményt és a szöveges önértékelést, majd kattints az „Önértékelés Beküldése a Vezetőnek” gombra."
            }
          ],
          "uiElements": [
            {
              "label": "Átvételt igazolom (Mt. 155. §)",
              "type": "Gomb",
              "description": "Időbélyeggel ellátott elektronikus átvételi visszaigazolást rögzít a havi bérjegyzékhez."
            },
            {
              "label": "5 lépéses KPI folyamatjelző",
              "type": "Folyamatjelző",
              "description": "Vizualizálja a célkitűzés életciklusát: 1. Célkitűzés → 2. Önértékelés → 3. Vezetői értékelés → 4. Megbeszélés → 5. Lezárva."
            },
            {
              "label": "Tanúsítvány feltöltése és leadás (IDP)",
              "type": "Gomb és modál",
              "description": "Az elvégzett képzés oklevelének feltöltése vezetői jóváhagyásra; elfogadás után automatikusan bekerül a dolgozó hivatalos képzettségei közé."
            },
            {
              "label": "Ismerős ajánlása",
              "type": "Gomb és modál",
              "description": "Dolgozói ajánlási űrlap CV feltöltéssel, ajánlói indoklással és GDPR nyilatkozattal."
            }
          ]
        },
        {
          "id": "berpapirok-celkituzesek-idp-es-belso-karrier-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Egyéni Fejlődési Terv (IDP) és tanúsítványok feltöltése",
              "description": "A „Fejlődési Tervem” (/hr/self-service/idp) oldalon kattints az „Elkezdtem a felkészülést” gombra, vezesd a „Haladási napló” bejegyzéseit, a képzés elvégzésekor pedig a „Tanúsítvány feltöltése és leadás” gombbal csatold az oklevelet vezetői jóváhagyásra."
            },
            {
              "title": "Pályázás belső állásokra és ismerős ajánlása sikerdíjért",
              "description": "A „Belső Állások” (/hr/self-service/career) menüpontban egy kattintással pályázhatsz a belsőleg meghirdetett pozíciókra, vagy a jobb felső „Ismerős ajánlása” gombbal beküldheted egy jelölt önéletrajzát konkrét állásra vagy az általános Talent Poolba. A sikeres felvételért és próbaidő-teljesítésért járó fix sikerdíj állapotát a „Saját ajánlásaim” fülön követheted."
            }
          ],
          "statusBadges": [
            {
              "label": "Átvéve / Nyugtázandó",
              "color": "green",
              "meaning": "Jelzi, hogy a havi bérjegyzéket elektronikusan átvetted-e már a Dolgozói Portálon."
            },
            {
              "label": "Te jössz! / Önértékelésre vár",
              "color": "amber",
              "meaning": "A KPI célkitűzés a dolgozói önértékelés kitöltésére és beküldésére vár."
            },
            {
              "label": "Sikeresen teljesítve (IDP)",
              "color": "green",
              "meaning": "A vezető jóváhagyta az IDP célt és a feltöltött tanúsítványt; az oklevél bekerült a hivatalos képzettségek közé."
            },
            {
              "label": "Kiválasztás zajlik / Próbaidő alatt / Jóváhagyva (Kifizethető) / Kifizetve",
              "color": "blue",
              "meaning": "Az ismerős ajánlásáért járó referral bónusz életciklus-állapotai a „Saját ajánlásaim” fülön."
            }
          ],
          "tips": [
            {
              "type": "info",
              "title": "Hiteles elektronikus bérpapír-átvétel",
              "text": "Az „Átvételt igazolom (Mt. 155. §)” gomb megnyomásakor rögzített pontos időbélyeg megjelenik a HR bérszámfejtési táblázatában is, így kiváltja a papíralapú bérjegyzékek aláíratását."
            },
            {
              "type": "tip",
              "title": "Általános ajánlás a Talent Poolba",
              "text": "Ha egy tehetséges ismerősödet ajánlanád, de épp nincs pontosan ráillő nyitott pozíció, az „Ismerős ajánlása” űrlapon válaszd az „Általános ajánlás (Talent pool / Nincs konkrét kiírás)” opciót."
            }
          ]
        }
      ]
    },
    {
      "slug": "allomanykezeles-szemelyi-dossziek-es-szerzodesek",
      "title": "Állománykezelés, 360°-os Személyi Dossziék és Munkaszerződések",
      "subtitle": "HR Munkaasztal, eaisyBooks munkavállalói szinkron, a 11 füles 360°-os dolgozói karton, munkaszerződés / Mt. 46. § / T1041 generálás és eaisyDocs személyi dosszié iktatás.",
      "categoryId": "allomany-szervezet-es-muszak",
      "readingTimeMinutes": 9,
      "roles": [
        "admin"
      ],
      "summary": "A HR Munkaasztal (/hr/admin) a személyügyi adminisztráció központja: egyetlen nézetben egyesíti a teljes dolgozói törzsadatbázist és a proaktív megfelelőségi riasztásokat. Bármely munkatárs adatlapjára kattintva megnyílik a 360°-os Dolgozói Karton (/hr/employee/[id]), ahol 11 szakmai fülön kezelhetők a titkosított személyes és béradatok, a szerződéstörténet, a tanulmányi szerződések, a fegyelmi és kitüntetési okiratok, valamint egyetlen gombnyomással generálható és az eaisyDocs-ba iktatható a hivatalos munkaszerződés és az Mt. 46. § tájékoztató.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-09-admin-directory.webp",
          "alt": "HR Munkaasztal a dolgozói törzsadatbázissal, eaisyBooks import gombbal és teendők/figyelmeztetések listájával",
          "caption": "HR Munkaasztal (/hr/admin): teljes állomány KPI-ok, Importálás eaisyBooks-ból, Dolgozói Törzsadatbázis és a csoportosított Teendők és figyelmeztetések."
        },
        {
          "src": "/kb/eaisy-hr/hr-10-employee-360.webp",
          "alt": "360°-os dolgozói karton a 11 szakmai füllel, személyes adatokkal és AES-256 titkosított HR adatokkal",
          "caption": "360°-os Dolgozói Karton (/hr/employee/[id]): 11 szakmai fül (Személyes adatok, Szakmai háttér, Munkaviszony, Távollét, Jelenlét, Cafeteria, Fejlesztési tervek, Bérpapírok, Bizalmas HR adatok, Hivatalos dokumentumok, Előzmények)."
        }
      ],
      "faqs": [
        {
          "question": "Mi történik a korábbi beosztási adatokkal, ha módosítom a dolgozó munkakörét vagy munkaidejét?",
          "answer": "A „Munkaviszony” fül SCD Type 2 idősoros nyilvántartást vezet: az új beosztás mentésekor a korábbi rekordot automatikusan lezárja az új hatálybalépés előtti nappal, és megőrzi az „Előző és Jövőbeli Beosztások” történetében."
        },
        {
          "question": "Hogyan működik az automatikus Oklevél és Tanulmányi Szerződés PDF generálás?",
          "answer": "Ha a Kitüntetések vagy a Tanulmányi Szerződések (Mt. 229. §) rögzítésekor nem töltesz fel külön fájlt, a rendszer a megadott űrlapadatokból automatikusan előállítja a nyomtatható A4-es okiratot."
        }
      ],
      "relatedSlugs": [
        "szervezeti-felepites-munkakorok-es-muszakbeosztas",
        "onboarding-es-offboarding-munkafolyamatok"
      ],
      "accessSummary": "HR Adminisztrátor, HR Vezető és Állománykezelés olvasási/írási jogosultsággal rendelkező felhasználók számára (/hr/admin, /hr/employee/[id]).",
      "sections": [
        {
          "id": "allomanykezeles-szemelyi-dossziek-es-szerzodesek-folyamat",
          "title": "1. Állománykezelés, 360°-os Személyi Dossziék és Munkaszerződések — alapfolyamatok és használat",
          "description": "A HR Munkaasztal (/hr/admin) a személyügyi adminisztráció központja: egyetlen nézetben egyesíti a teljes dolgozói törzsadatbázist és a proaktív megfelelőségi riasztásokat. Bármely munkatárs adatlapjára kattintva megnyílik a 360°-os Dolgozói Karton (/hr/employee/[id]), ahol 11 szakmai fülön kezelhetők a titkosított személyes és béradatok, a szerződéstörténet, a tanulmányi szerződések, a fegyelmi és kitüntetési okiratok, valamint egyetlen gombnyomással generálható és az eaisyDocs-ba iktatható a hivatalos munkaszerződés és az Mt. 46. § tájékoztató.",
          "steps": [
            {
              "title": "Dolgozók felvétele vagy importálása az eaisyBooks-ból",
              "description": "A „HR Munkaasztal” (/hr/admin) jobb felső sarkában kattints az „Importálás eaisyBooks-ból” gombra a könyvelési rendszerben már rögzített munkavállalók (név, FEOR, munkakör, TAJ, adóazonosító) egykattintásos átvételéhez, vagy válaszd az „Új Dolgozó Felvétele” gombot új munkatárs rögzítéséhez."
            },
            {
              "title": "Teendők és figyelmeztetések proaktív kezelése",
              "description": "A Dolgozói Törzsadatbázis alatt található „Teendők és figyelmeztetések” kártya automatikusan kigyűjti a lejárt vagy 30 napon belül lejáró orvosi alkalmassági vizsgálatokat, a lejáró próbaidőket és határozott idejű szerződéseket, a függő szabadság- és jelenlét-korrekciós kérelmeket, valamint a nyitott be- és kiléptetéseket."
            },
            {
              "title": "Titkosított személyes és béradatok kezelése a 360°-os kartonon",
              "description": "Nyisd meg a dolgozó adatlapját az „Adatlap” gombbal. A „Személyes adatok” fülön a „Titkosított Személyes Adatok” kártya AES-256-GCM titkosítással védi a TAJ számot, adóazonosítót, bankszámlaszámot és a bruttó/nettó bért. A „Felfedés” gombbal oldhatod fel a megjelenítést (amelyet a rendszer a GDPR szabályai szerint naplóz), a „Szerkesztés” gombbal pedig módosíthatod azokat."
            }
          ],
          "uiElements": [
            {
              "label": "Importálás eaisyBooks-ból",
              "type": "Gomb és modál",
              "description": "Szinkronizálja a könyvelési rendszerben szereplő munkavállalói törzsadatokat az eaisyHR-be."
            },
            {
              "label": "Szerződés / Irat Generálása",
              "type": "Gomb és modál",
              "description": "Dinamikus sablonmotor Munkaszerződés, Mt. 46. § tájékoztató, Munkaköri leírás, Bérmódosítás és Titoktartási nyilatkozat (NDA) PDF előállításához."
            },
            {
              "label": "Összes iktatása eaisyDocs-ba",
              "type": "Gomb",
              "description": "Kötegelt iktatási varázsló, amely a dolgozó összes belső HR vázlatát 50 éves megőrzési idővel beiktatja a személyi dossziéba."
            },
            {
              "label": "Előzmények (Változáskövetés / Audit Napló fül)",
              "type": "Fül",
              "description": "A dolgozói karton 11. füle, amely tételesen mutatja a dolgozó adataihoz való hozzáféréseket, a titkosított adatok feloldását és a mezőszintű módosításokat."
            }
          ]
        },
        {
          "id": "allomanykezeles-szemelyi-dossziek-es-szerzodesek-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Munkaszerződés, Mt. 46. § tájékoztató, Bérmódosítás és NDA generálása",
              "description": "Lépj a „Hivatalos dokumentumok” fülre, és kattints a „Szerződés / Irat Generálása” gombra. Választhatsz a „Hivatalos Munkaszerződés (Mt. 42–45. §)” (amely egy lépésben elkészíti az Mt. 46. § szerinti írásbeli tájékoztatót is), a „Hivatalos Munkaköri Leírás”, a „Munkaszerződés-módosítás (Bérmódosítás - Mt. 58. §)” és a „Titoktartási Nyilatkozat (NDA)” sablonok közül."
            },
            {
              "title": "Szakmai háttér, tanulmányi szerződések és fegyelmi ügyek",
              "description": "A „Szakmai háttér” fülön rögzítheted a végzettségeket, előző munkahelyeket és kitüntetéseket (automatikus díszkeretes A4-es Elismerő Oklevél PDF-fel). A „Munkaviszony” fülön kezelheted az SCD Type 2 beosztástörténetet és az Mt. 229. § szerinti Tanulmányi Szerződéseket, a „Bizalmas HR adatok” fülön pedig az orvosi, munkavédelmi és fegyelmi/kártérítési határozatokat."
            },
            {
              "title": "Egyedi vagy kötegelt iktatás az eaisyDocs személyi dossziéba",
              "description": "A „Hivatalos dokumentumok” fülön az „Összes iktatása eaisyDocs-ba” gombbal minden belső HR vázlatot egyetlen lépésben, növekvő alszámmal (HR/ÉÉÉÉ/XXXXXX/1, /2...) és 50 éves megőrzési idővel beiktathatsz a dolgozó központi eaisyDocs személyi dossziéjába."
            }
          ],
          "statusBadges": [
            {
              "label": "Kritikus / Figyelmeztetés / Tájékoztató",
              "color": "red",
              "meaning": "A HR Munkaasztal teendőlistájának prioritási szintjei (pl. lejárt orvosi vizsgálat = Kritikus)."
            },
            {
              "label": "Iktatva: HR/ÉÉÉÉ/XXXXXX/X",
              "color": "green",
              "meaning": "A dokumentum hivatalosan be van iktatva az eaisyDocs személyi dossziéba, és lakat ikonnal védett a törlés ellen."
            },
            {
              "label": "Jogorvoslat (30 nap)",
              "color": "amber",
              "meaning": "Fegyelmi és kártérítési határozatoknál a kézbesítéstől számított 30 napos munkaügyi bírósági keresetindítási határidőt jelzi."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "Automatikus bér- és beosztástörténet frissítés Bérmódosításnál",
              "text": "Amikor a „Szerződés / Irat Generálása” ablakban a „Munkaszerződés-módosítás (Bérmódosítás - Mt. 58. §)” sablont használod, nem kell külön átírnod a dolgozó fizetését: a rendszer a PDF generálásával egy időben frissíti a titkosított alapbért és új idősoros bejegyzést nyit a munkaviszony-történetben."
            },
            {
              "type": "info",
              "title": "50 éves megőrzési idő és törlési védelem",
              "text": "Az eaisyDocs személyi dossziéba iktatott munkaügyi alapiratok automatikusan 50 éves megőrzési időt (nem selejtezhető besorolást) kapnak, és a HR felületen lakat ikonnal védettek a véletlen törlés ellen."
            }
          ]
        }
      ]
    },
    {
      "slug": "szervezeti-felepites-munkakorok-es-muszakbeosztas",
      "title": "Szervezeti Felépítés, Munkaköri Katalógus és Műszakbeosztás",
      "subtitle": "Interaktív Szervezeti Ábra (Org Chart), osztályok és munkaköri profilok verziózott munkaköri leírással, valamint a heti Műszakbeosztás Tervező munkajogi és orvosi védelemmel.",
      "categoryId": "allomany-szervezet-es-muszak",
      "readingTimeMinutes": 8,
      "roles": [
        "admin"
      ],
      "summary": "A Szervezeti Felépítés (/hr/organization) modul vizuális fanézetben (Org Chart) ábrázolja a vállalat hierarchiáját, miközben központi Munkakör-katalógust biztosít FEOR-08 kódokkal, kompetenciákkal, védőeszköz-előírásokkal és verziózott munkaköri leírásokkal. A Műszakbeosztás (/hr/time) modulban a vezetők és HR-esek 7 napos rácsban tervezhetik a heti műszakokat, miközben a rendszer automatikusan ellenőrzi az orvosi alkalmasságot (Mvt. 49. §), a napi 11 órás pihenőidőt (Mt. 104. §) és a heti 48 órás munkaidő-korlátot (Mt. 99. §).",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-11-organization.webp",
          "alt": "Szervezeti Felépítés oldal az interaktív Vállalati Hierarchia fanézettel, szervezeti egységekkel és munkakör-katalógussal",
          "caption": "Szervezeti Felépítés (/hr/organization): interaktív Szervezeti Ábra szintenkénti színkódolással, Szervezeti Egységek, Munkakör-katalógus és Jogosultságkezelő."
        },
        {
          "src": "/kb/eaisy-hr/hr-12-time-roster.webp",
          "alt": "Műszakbeosztás oldal a heti műszaktervező ráccsal, műszaksablonokkal és Előző hét másolása gombbal",
          "caption": "Műszakbeosztás (/hr/time): 7 napos heti műszaktervező mátrix, Szervezeti naptár, Műszaksablonok és egykattintásos Előző hét másolása."
        }
      ],
      "faqs": [
        {
          "question": "Mi történik, ha egy munkakörben új munkaköri leírás verziót (pl. v2) generálok?",
          "answer": "Az adott munkakörben dolgozó munkatársak 360°-os kartonján („Hivatalos dokumentumok” fül) megjelenik egy sárga értesítő sáv, amellyel a HR egy kattintással átveheti az új verziót, a dolgozó pedig a „Profilom” oldalon elektronikusan nyugtázhatja annak megismerését."
        }
      ],
      "relatedSlugs": [
        "allomanykezeles-szemelyi-dossziek-es-szerzodesek",
        "munkaugyi-megfeleloseg-orvosi-es-munkavedelem"
      ],
      "accessSummary": "HR Adminisztrátor, Vezető és Műszakbeosztás modul-jogosultsággal rendelkező felhasználók számára (/hr/organization, /hr/time).",
      "sections": [
        {
          "id": "szervezeti-felepites-munkakorok-es-muszakbeosztas-folyamat",
          "title": "1. Szervezeti Felépítés, Munkaköri Katalógus és Műszakbeosztás — alapfolyamatok és használat",
          "description": "A Szervezeti Felépítés (/hr/organization) modul vizuális fanézetben (Org Chart) ábrázolja a vállalat hierarchiáját, miközben központi Munkakör-katalógust biztosít FEOR-08 kódokkal, kompetenciákkal, védőeszköz-előírásokkal és verziózott munkaköri leírásokkal. A Műszakbeosztás (/hr/time) modulban a vezetők és HR-esek 7 napos rácsban tervezhetik a heti műszakokat, miközben a rendszer automatikusan ellenőrzi az orvosi alkalmasságot (Mvt. 49. §), a napi 11 órás pihenőidőt (Mt. 104. §) és a heti 48 órás munkaidő-korlátot (Mt. 99. §).",
          "steps": [
            {
              "title": "Szervezeti egységek és hierarchia kialakítása",
              "description": "A „Szervezeti Felépítés” (/hr/organization) oldalon a „Szervezeti Egységek” fülön hozz létre új osztályokat, állítsd be a szülő-alárendelt kapcsolatokat, és rendeld hozzá a dolgozókat. A „Szervezeti Ábra” fül azonnal kirajzolja az interaktív, összecsukható vállalati fanézetet."
            },
            {
              "title": "Munkakör-katalógus és verziózott munkaköri leírások kezelése",
              "description": "A „Munkakör-katalógus” fülön rögzítsd a pozíciókat FEOR-08 kóddal, besorolási szinttel, munkavédelmi kockázattal és kötelező orvosi vizsgálati gyakorisággal. A munkakör adatlapján (/hr/job/[id]) a „Munkaköri Leírás Verziók” fülön a „Munkaköri leírás generálása (vX)” gombbal egy kattintással előállíthatod az Mt. 45. § (4) szerinti hivatalos A4-es PDF munkaköri leírást."
            }
          ],
          "uiElements": [
            {
              "label": "Szervezeti Ábra (Vállalati Hierarchia)",
              "type": "Interaktív fanézet",
              "description": "Szintenként színkódolt szervezeti fa, amely egységenként mutatja a létszámot és a hozzárendelt munkatársakat."
            },
            {
              "label": "Munkaköri leírás generálása (vX)",
              "type": "Gomb",
              "description": "A munkakör adatlapján szereplő feladatokból, kompetenciákból és munkavédelmi előírásokból automatikusan verziózott PDF munkaköri leírást generál."
            },
            {
              "label": "Előző hét másolása",
              "type": "Gomb",
              "description": "Átmásolja az előző heti műszakrendet az aktuális hétre, automatikus szabadság- és orvosi alkalmassági szűréssel."
            },
            {
              "label": "Szervezeti naptár (Heti / Havi / Éves)",
              "type": "Naptár nézet",
              "description": "Csapatszintű jelenléti és távolléti áttekintő naptár részlegszűrővel, „Csak távollévők” kapcsolóval és éves hőtérképpel."
            }
          ]
        },
        {
          "id": "szervezeti-felepites-munkakorok-es-muszakbeosztas-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Műszaksablonok testreszabása",
              "description": "A „Műszakbeosztás” (/hr/time) oldal „Műszaksablonok” fülén megtalálod az alapértelmezett Délelőttös (D: 06:00–14:00), Délutános (DU: 14:00–22:00), Éjszakás (É: 22:00–06:00) és Normál irodai (N: 08:00–16:30) sablonokat, vagy az „Új sablon létrehozása” gombbal felvehetsz egyedi munkarendeket."
            },
            {
              "title": "Heti műszakbeosztás tervezése és előző hét másolása",
              "description": "A „Műszakbeosztás Tervező” fülön kattints bármelyik napi cellára a műszaksablon kiválasztásához, vagy használd a jobb felső „Előző hét másolása” gombot. A rendszer automatikusan kihagyja a szabadságon lévő és a lejárt orvosi alkalmasságival rendelkező dolgozók napjait."
            }
          ],
          "statusBadges": [
            {
              "label": "Beosztás letiltva! (Lejárt orvosi alkalmasság)",
              "color": "red",
              "meaning": "Az Mvt. 49. § alapján a dolgozó orvosi alkalmasságija lejárt vagy hiányzik, így a rendszer blokkolja a műszak-hozzárendelést."
            },
            {
              "label": ">48h Mt.! / +Xh túlóra",
              "color": "amber",
              "meaning": "Jelzi, ha a dolgozó heti beosztott óraszáma meghaladja a 40 órát vagy az Mt. 99. § szerinti 48 órás korlátot."
            },
            {
              "label": "Legfrissebb hatályos (vX)",
              "color": "blue",
              "meaning": "A munkaköri katalógusban jelenleg érvényes legmagasabb verziószámú munkaköri leírás PDF."
            }
          ],
          "tips": [
            {
              "type": "warning",
              "title": "Automatikus műszakbeosztás-blokkolás lejárt orvosinál (Mvt. 49. §)",
              "text": "A műszaktervező napra pontosan vizsgálja az orvosi alkalmassági lejáratát: a lejárat napjától kezdve a cellák zárolásra kerülnek, amíg a HR nem rögzít új, „Alkalmas” minősítésű vizsgálatot."
            },
            {
              "type": "info",
              "title": "Napi 11 órás pihenőidő ellenőrzése (Mt. 104. §)",
              "text": "Ha egy dolgozót délutános vagy éjszakás műszak után másnap reggeli műszakra osztasz be, a rendszer mentéskor figyelmeztet, ha a két műszak között nem telik el a kötelező minimum 11 óra pihenőidő."
            }
          ]
        }
      ]
    },
    {
      "slug": "berszamfejtes-berjegyzekek-es-cafeteria",
      "title": "Bérszámfejtés, Havi Bérjegyzékek és Cafeteria Kezelése",
      "subtitle": "Jelenléti, szabadság és túlóra adatok automatikus beszámítása, egyéni bérkorrekciók és adókedvezmények, valamint a havi bérpapírok kötegelt előállítása és közzététele (Mt. 155. §).",
      "categoryId": "berszamfejtes-megfeleloseg-es-teljesitmeny",
      "readingTimeMinutes": 8,
      "roles": [
        "admin"
      ],
      "summary": "A Bérszámfejtés (/hr/payroll) modul élőben összekapcsolja a dolgozói alapbéreket a tárgyhavi jelenléti ívekkel, a jóváhagyott szabadságokkal, a 70%-os betegszabadságokkal, a 150%-os túlórákkal és az éves Cafeteria keretekkel. A HR egyéni bónuszokat és adókedvezményeket (25 év alattiak SZJA-mentessége, családi és személyi kedvezmények) rögzíthet, majd egyetlen kattintással kötegelten előállíthatja és publikálhatja a havi bérjegyzékeket a Dolgozói Portálra.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-13-payroll.webp",
          "alt": "Bérszámfejtés oldal az elszámolt időszakkal, havi bérpapírok kötegelt előállítása gombbal és a dolgozói bértáblázattal",
          "caption": "Bérszámfejtés (/hr/payroll): havi munkabér-elszámolások, adókedvezmények, levonások és az Mt. 155. § szerinti elektronikus átvételi állapotok."
        }
      ],
      "faqs": [
        {
          "question": "Rögzíthetek-e bónuszt vagy családi adókedvezményt még a havi kötegelt bérpapír-generálás előtt?",
          "answer": "Igen. A „Bérpapír Korrekció” ablakban elmentett adatok „Tervezet (Módosítva)” állapotba kerülnek, és a kötegelt előállítás gomb megnyomásakor a rendszer automatikusan ezekkel a paraméterekkel publikálja a bérjegyzéket."
        }
      ],
      "relatedSlugs": [
        "berpapirok-celkituzesek-idp-es-belso-karrier",
        "hr-riportok-analitika-jogosultsagok-es-esemenynaplo"
      ],
      "accessSummary": "HR Adminisztrátor és Bérszámfejtés modul-jogosultsággal rendelkező bérügyintézők és könyvelők számára (/hr/payroll).",
      "sections": [
        {
          "id": "berszamfejtes-berjegyzekek-es-cafeteria-folyamat",
          "title": "1. Bérszámfejtés, Havi Bérjegyzékek és Cafeteria Kezelése — alapfolyamatok és használat",
          "description": "A Bérszámfejtés (/hr/payroll) modul élőben összekapcsolja a dolgozói alapbéreket a tárgyhavi jelenléti ívekkel, a jóváhagyott szabadságokkal, a 70%-os betegszabadságokkal, a 150%-os túlórákkal és az éves Cafeteria keretekkel. A HR egyéni bónuszokat és adókedvezményeket (25 év alattiak SZJA-mentessége, családi és személyi kedvezmények) rögzíthet, majd egyetlen kattintással kötegelten előállíthatja és publikálhatja a havi bérjegyzékeket a Dolgozói Portálra.",
          "steps": [
            {
              "title": "Elszámolt időszak kiválasztása és előzetes kalkuláció ellenőrzése",
              "description": "A „Bérszámfejtés” (/hr/payroll) oldal fejlécében az „Elszámolt Időszak” léptetővel válaszd ki a számfejtendő hónapot. A táblázat valós időben mutatja minden aktív munkavállaló alapbérét, ledolgozott és távolléti napjait, bruttó bérét, levonásait és nettó kifizetendő bérét."
            },
            {
              "title": "Egyéni bérkorrekciók, bónuszok és adókedvezmények rögzítése",
              "description": "Kattints a dolgozó sorában lévő fogaskerék („Bérelemek és kedvezmények szerkesztése”) ikonra. A „Bérpapír Korrekció” ablakban megadhatod a „Teljesítmény bónusz / Jutalom (Ft)” összegét, bekapcsolhatod a „25 év alatti fiatalok SZJA-mentessége” kapcsolót, valamint rögzítheted a családi adókedvezményt, személyi kedvezményt vagy bírósági letiltást, majd kattints az „Újraszámítás és Mentés” gombra."
            }
          ],
          "uiElements": [
            {
              "label": "Havi Bérpapírok Előállítása & Közzététele (Mt. 155. §)",
              "type": "Gomb és modál",
              "description": "Kötegelten legenerálja a tárgyhavi bérjegyzékeket és közzéteszi azokat a Dolgozói Portál „Bérpapírjaim” menüpontjában."
            },
            {
              "label": "Bérpapír Korrekció modál",
              "type": "Modális ablak",
              "description": "Egyéni havi bónusz, 25 év alatti SZJA-mentesség, családi/személyi adókedvezmény és bírósági letiltás beállítása."
            },
            {
              "label": "Bérjegyzék PDF megtekintése / letöltése",
              "type": "Műveleti ikonok",
              "description": "A táblázat „Műveletek” oszlopában soronként megnyitja vagy letölti a nyomtatható A4-es bérjegyzéket."
            }
          ]
        },
        {
          "id": "berszamfejtes-berjegyzekek-es-cafeteria-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Havi bérpapírok kötegelt előállítása és közzététele (Mt. 155. §)",
              "description": "Kattints a jobb felső „Havi Bérpapírok Előállítása & Közzététele (Mt. 155. §)” gombra, majd erősítsd meg az „Előállítás & Közzététel” gombbal. A rendszer minden aktív dolgozóra legenerálja a hivatalos bérjegyzéket (a tárgyhónapot követő hó 10. napjára szóló határidővel) és azonnal elérhetővé teszi a Dolgozói Portálon."
            },
            {
              "title": "Átvételi állapotok követése és Cafeteria adminisztráció",
              "description": "Az „Átvételi Állapot (Mt. 155. §)” oszlopban élőben követheted, melyik munkatárs vette át elektronikusan a bérjegyzékét („Átvéve: ÉÉÉÉ. HH. NN.”). Az éves Cafeteria kereteket és a véglegesített nyilatkozatok eaisyDocs-iktatását a dolgozók 360°-os kartonjának „Cafeteria” fülén kezelheted."
            }
          ],
          "statusBadges": [
            {
              "label": "Átvéve: ÉÉÉÉ. HH. NN.",
              "color": "green",
              "meaning": "A munkavállaló a Dolgozói Portálon elektronikusan nyugtázta a bérjegyzék átvételét."
            },
            {
              "label": "Átvételre vár",
              "color": "amber",
              "meaning": "A bérjegyzék közzétételre került a Dolgozói Portálon, de a dolgozó még nem igazolta vissza."
            },
            {
              "label": "Tervezet (Módosítva)",
              "color": "blue",
              "meaning": "A HR egyéni bérkorrekciót mentett el a dolgozóhoz, amely a kötegelt generáláskor kerül közzétételre."
            },
            {
              "label": "Generálásra vár",
              "color": "gray",
              "meaning": "Az adott hónapra még nem történt meg a kötegelt előállítás; a sor az élő előzetes kalkulációt mutatja."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "Már átvett bérpapírok védelme újrageneráláskor",
              "text": "Ha egy hónapban utólagos korrekció miatt újra rákattintasz a „Havi Bérpapírok Előállítása & Közzététele” gombra, a rendszer a már dolgozó által elektronikusan nyugtázott („Átvéve”) bérjegyzékeket nem írja felül, csak a nyitott tételeket frissíti."
            },
            {
              "type": "info",
              "title": "Automatikus adó- és járulékszámítás",
              "text": "A bérszámfejtő motor automatikusan kezeli a 15% SZJA-t, a 18,5% TB járulékot, a 13% munkáltatói SZOCHO-t, a betegszabadság 70%-os díjazását (Mt. 146. § (4)) és a túlóra 50%-os bérpótlékát."
            }
          ]
        }
      ]
    },
    {
      "slug": "munkaugyi-megfeleloseg-orvosi-es-munkavedelem",
      "title": "Munkaügyi és Munkavédelmi Megfelelőség (Orvosi, Oktatások, Szabadság és Túlóra)",
      "subtitle": "Az Mt. 122–123. § szabadságkiadási szabályok, az Mt. 99. és 135. § munkaidő- és túlórakeretek (250/400 óra), a munkavédelmi/tűzvédelmi oktatások és az orvosi alkalmassági vizsgálatok központi felügyelete.",
      "categoryId": "berszamfejtes-megfeleloseg-es-teljesitmeny",
      "readingTimeMinutes": 8,
      "roles": [
        "admin"
      ],
      "summary": "A Munkaügyi és Munkavédelmi Megfelelőség (/hr/compliance) modul 4 dedikált mátrixban felügyeli a törvényi előírások betartását: ellenőrzi az évi egyszeri 14 napos egybefüggő pihenőidőt és az év végi bent ragadó szabadságokat, figyeli a heti 48 órás és az éves 250/400 órás túlórakeretet, nyilvántartja a munkavédelmi/tűzvédelmi oktatásokat, valamint kezeli a munkaköri orvosi alkalmassági vizsgálatokat (automatikus műszakbeosztás-tiltással lejárt alkalmasság esetén).",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-14-compliance.webp",
          "alt": "Munkaügyi és Munkavédelmi Megfelelőség oldal a 4 szakmai füllel és a 14 napos pihenőidő megfelelőségi mátrixszal",
          "caption": "Munkaügyi és Munkavédelmi Megfelelőség (/hr/compliance): Szabadságkiadás, Munkaidő és túlórakeret, Munkavédelem és Tűzvédelem, valamint Orvosi alkalmasság fülek."
        }
      ],
      "faqs": [
        {
          "question": "Hogyan számolja a rendszer a 14 napos egybefüggő pihenőidőt?",
          "answer": "Az Mt. 122. § (3) szerinti 14 egybefüggő naptári napba a kiírt szabadságnapok mellett a közvetlenül kapcsolódó hétvégék és munkaszüneti napok is beleszámítanak, ha a dolgozónak nincs rájuk műszak beosztva."
        }
      ],
      "relatedSlugs": [
        "szervezeti-felepites-munkakorok-es-muszakbeosztas",
        "allomanykezeles-szemelyi-dossziek-es-szerzodesek"
      ],
      "accessSummary": "HR Adminisztrátor és Munkaügyi Megfelelőség / EHS modul-jogosultsággal rendelkező felhasználók számára (/hr/compliance).",
      "sections": [
        {
          "id": "munkaugyi-megfeleloseg-orvosi-es-munkavedelem-folyamat",
          "title": "1. Munkaügyi és Munkavédelmi Megfelelőség (Orvosi, Oktatások, Szabadság és Túlóra) — alapfolyamatok és használat",
          "description": "A Munkaügyi és Munkavédelmi Megfelelőség (/hr/compliance) modul 4 dedikált mátrixban felügyeli a törvényi előírások betartását: ellenőrzi az évi egyszeri 14 napos egybefüggő pihenőidőt és az év végi bent ragadó szabadságokat, figyeli a heti 48 órás és az éves 250/400 órás túlórakeretet, nyilvántartja a munkavédelmi/tűzvédelmi oktatásokat, valamint kezeli a munkaköri orvosi alkalmassági vizsgálatokat (automatikus műszakbeosztás-tiltással lejárt alkalmasság esetén).",
          "steps": [
            {
              "title": "Szabadságkiadás és 14 napos egybefüggő pihenőidő ellenőrzése (Mt. 122–123. §)",
              "description": "A „Szabadságkiadás” fülön a rendszer automatikusan vizsgálja, hogy a dolgozónak megvan-e az adott évben a kötelező 14 egybefüggő naptári nap pihenőideje (a hétvégéket és ünnepnapokat is beszámítva). Ha a dolgozóval az Mt. 122. § (4) szerinti mentesítő megállapodást kötöttetek, az „Eltérő megállapodás” oszlopban egyetlen kattintással bejelölheted a „Megkötve” jelölőnégyzetet."
            },
            {
              "title": "Munkaidő és éves túlórakeret (250 / 400 óra) felügyelete (Mt. 99. és 135. §)",
              "description": "A „Munkaidő és túlórakeret” fülön követheted a heti 48 órás munkaidő-korlátot és az éves 250 órás alaptúlórakeret telítődését (80%-os figyelmeztetési küszöbbel). Írásbeli önként vállalt túlmunka-megállapodás esetén a „400h Megállapodás” oszlopban aktiválhatod a 400 órás éves keretet."
            }
          ],
          "uiElements": [
            {
              "label": "Eltérő megállapodás (14 napos szabály)",
              "type": "Jelölőnégyzet",
              "description": "A „Szabadságkiadás” fülön rögzíti az Mt. 122. § (4) szerinti írásbeli megállapodást, amellyel a dolgozó mentesül a 14 napos egybefüggő távolléti kötelezettség alól."
            },
            {
              "label": "400h Megállapodás kapcsoló",
              "type": "Jelölőnégyzet",
              "description": "A „Munkaidő és túlórakeret” fülön 250 óráról 400 órára emeli a dolgozó éves túlórakeretét az Mt. 135. § (2) alapján."
            },
            {
              "label": "Jegyzőkönyv Generálása & Iktatás",
              "type": "Gomb",
              "description": "A munkavédelmi oktatás rögzítésekor automatikusan legenerálja a PDF jegyzőkönyvet és beiktatja az eaisyDocs személyi dossziéba."
            },
            {
              "label": "Exportálás (CSV)",
              "type": "Gomb",
              "description": "Mind a négy megfelelőségi fülön elérhető gomb, amely az aktuális megfelelőségi mátrixot Excel-kompatibilis CSV fájlba exportálja."
            }
          ]
        },
        {
          "id": "munkaugyi-megfeleloseg-orvosi-es-munkavedelem-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Munkavédelmi és tűzvédelmi oktatás rögzítése és iktatása (Mvt. 55. §, Ttv. 22. §)",
              "description": "A „Munkavédelem és Tűzvédelem” fülön kattints a dolgozó sorában az „Oktatás pótlása” / „Ismétlő oktatás” / „Új oktatás” gombra. Válaszd ki az oktatás típusát, add meg a dátumot, a lejáratot (+1 év), az oktató nevét és a tematikát, majd kattints a „Jegyzőkönyv Generálása & Iktatás” gombra: a rendszer előállítja az oktatási napló PDF-et és 10 éves megőrzéssel beiktatja a személyi dossziéba."
            },
            {
              "title": "Orvosi alkalmassági vizsgálat rögzítése és műszakblokkolás feloldása (Mvt. 49. §)",
              "description": "Az „Orvosi alkalmasság” fülön kattints a „Vizsgálat pótlása” / „Megújítás” / „Új vizsgálat” gombra. Add meg a vizsgálat típusát, az érvényességet, a minősítést („Alkalmas”, „Feltételekkel alkalmas”, „Nem alkalmas”) és az üzemorvos nevét. Saját fájl hiányában a rendszer automatikusan legenerálja a 33/1998. NM rendelet szerinti hivatalos A4-es orvosi alkalmassági vélemény PDF-et, és feloldja a műszakbeosztási zárolást."
            }
          ],
          "statusBadges": [
            {
              "label": "Érvényes",
              "color": "green",
              "meaning": "Az orvosi alkalmassági vagy munkavédelmi oktatás érvényes, a lejáratig több mint 30 nap van hátra."
            },
            {
              "label": "Hamarosan lejár (X nap)",
              "color": "amber",
              "meaning": "Az érvényesség 30 napon belül lejár; időszakos megújítás szükséges."
            },
            {
              "label": "Lejárt / Nem alkalmas / Hiányzik",
              "color": "red",
              "meaning": "Kritikus megfelelőségi hiányosság; orvosi alkalmasság esetén a műszakbeosztás automatikusan blokkolva van."
            },
            {
              "label": "Teljesítve (X nap) / Megállapodással mentes",
              "color": "green",
              "meaning": "Az Mt. 122. § szerinti 14 napos egybefüggő pihenőidő teljesült vagy megállapodással rendezett."
            }
          ],
          "tips": [
            {
              "type": "info",
              "title": "GDPR egészségügyi adatvédelem munkavédelmi szerepkörnél",
              "text": "A munkavédelmi felelős szerepkörrel rendelkező felhasználók az „Orvosi alkalmasság” fülön látják az érvényességi státuszt és a lejárati dátumot, de a részletes orvosi minősítés és záradék számukra GDPR-okból rejtett."
            },
            {
              "type": "tip",
              "title": "Automatikus 33/1998. NM rendelet szerinti PDF generálás",
              "text": "Ha az orvosi vizsgálat rögzítésekor üresen hagyod a fájlfeltöltő mezőt, az eaisyHR automatikusan előállítja a szabványos „Elsőfokú munkaköri orvosi alkalmassági vélemény” PDF-et."
            }
          ]
        }
      ]
    },
    {
      "slug": "vezetoi-nezet-jovahagyasok-es-teljesitmenyertekeles",
      "title": "Vezetői Nézet, Egységes Jóváhagyási Központ és Teljesítményértékelés (KPI)",
      "subtitle": "Csapatjelenlét, szabadság/túlóra/korrekció kérelmek csoportosított elbírálása, vezetői helyettesítés, 5 lépcsős KPI értékelési ciklusok és Haranggörbe (Bell Curve) kalibráció.",
      "categoryId": "berszamfejtes-megfeleloseg-es-teljesitmeny",
      "readingTimeMinutes": 8,
      "roles": [
        "admin"
      ],
      "summary": "A Vezetői Nézet (/hr/manager) egyetlen munkaasztalon jeleníti meg a közvetlen beosztottak élő jelenlétét, a csapatnaptárt és az Egységes Jóváhagyási Központot, ahol a szabadság-, túlóra- és jelenlét-korrekciós kérelmek akár dolgozónként egyetlen kattintással elbírálhatók. A Teljesítményértékelés (/hr/performance és /hr/performance/dashboard) modulban a vezetők súlyozott KPI célokat tűzhetnek ki, végigvihetik az 5 lépcsős értékelési folyamatot, és interaktív Haranggörbe diagramon kalibrálhatják a prémiumjogosultságokat.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-15-performance.webp",
          "alt": "Teljesítményértékelés oldal az aktív 2026 Q4 értékelési ciklussal, 5 lépcsős KPI folyamatjelzővel és súlyozott célokkal",
          "caption": "Teljesítményértékelés (/hr/performance): aktív értékelési ciklus, Ciklusok kezelése, Új KPI Hozzáadása és az 5 lépcsős értékelési folyamat."
        }
      ],
      "faqs": [
        {
          "question": "Mi a különbség a „Túlóra • Kifizetés” és a „Túlóra • Csúsztatás” jóváhagyása között?",
          "answer": "A „Kifizetés” típusú túlóra-kérelem jóváhagyásakor az óraszám automatikusan átkerül a havi bérszámfejtésbe 50%-os túlórapótlékkal; a „Csúsztatás” jóváhagyása pedig a dolgozó felhasználható szabadidő-egyenlegét növeli."
        }
      ],
      "relatedSlugs": [
        "szabadsag-jelenlet-es-munkaido-onkiszolgalas",
        "berpapirok-celkituzesek-idp-es-belso-karrier"
      ],
      "accessSummary": "Csapatvezetők, osztályvezetők és HR Adminisztrátorok számára a Vezetői nézet (/hr/manager) és Teljesítményértékelés (/hr/performance) modulokban.",
      "sections": [
        {
          "id": "vezetoi-nezet-jovahagyasok-es-teljesitmenyertekeles-folyamat",
          "title": "1. Vezetői Nézet, Egységes Jóváhagyási Központ és Teljesítményértékelés (KPI) — alapfolyamatok és használat",
          "description": "A Vezetői Nézet (/hr/manager) egyetlen munkaasztalon jeleníti meg a közvetlen beosztottak élő jelenlétét, a csapatnaptárt és az Egységes Jóváhagyási Központot, ahol a szabadság-, túlóra- és jelenlét-korrekciós kérelmek akár dolgozónként egyetlen kattintással elbírálhatók. A Teljesítményértékelés (/hr/performance és /hr/performance/dashboard) modulban a vezetők súlyozott KPI célokat tűzhetnek ki, végigvihetik az 5 lépcsős értékelési folyamatot, és interaktív Haranggörbe diagramon kalibrálhatják a prémiumjogosultságokat.",
          "steps": [
            {
              "title": "Beosztotti kérelmek elbírálása a Vezetői Nézetben (/hr/manager)",
              "description": "A „Vezetői Nézet” (/hr/manager) „Jóváhagyások” fülén a rendszer dolgozónként csoportosítva listázza a függőben lévő szabadság-, munkaidő-korrekciós és túlóra-kérelmeket. Kattinthatsz tételesen a „Jóváhagy” vagy „Elutasít” gombra, vagy a csoportfejlécben lévő „Összes jóváhagyása (X)” gombbal egyszerre jóváhagyhatod az adott beosztott összes kérelmét."
            },
            {
              "title": "Csapatnaptár és közvetlen beosztottak jelenlétének követése",
              "description": "A „Csapatnaptár” fülön áttekintheted a részleg szabadságait és ütközéseit, a „Közvetlen beosztottak” fülön pedig élő státusz-szűrőkkel („Becsekkolva”, „Távol (szabadság)”, „Függő kérelem”, „Nincs becsekkolva”) ellenőrizheted a napi munkavégzést."
            },
            {
              "title": "Értékelési ciklusok megnyitása és súlyozott KPI célok kitűzése (/hr/performance)",
              "description": "A „Teljesítményértékelés” (/hr/performance) oldalon a „Ciklusok kezelése” gombbal indíthatsz új értékelési időszakot (pl. 2026 Q4). Ezután az „Új KPI Hozzáadása” gombbal válaszd ki a munkavállalót, add meg a KPI címét, a súlyozást („Normál (1x)”, „Kiemelt (1.5x)”, „Stratégiai (2x)”) és a mérés típusát („Mérföldkő” vagy „Számszerű cél” célértékkel)."
            }
          ],
          "uiElements": [
            {
              "label": "Összes jóváhagyása (X)",
              "type": "Gomb",
              "description": "A Vezetői Nézetben egyetlen kattintással jóváhagyja az adott beosztott összes függőben lévő szabadság-, túlóra- és jelenlét-korrekciós kérelmét."
            },
            {
              "label": "Ciklusok kezelése / Új KPI Hozzáadása",
              "type": "Gombok és modálok",
              "description": "Értékelési időszakok megnyitása/lezárása és új, súlyozott egyéni célkitűzések rögzítése."
            },
            {
              "label": "Értékelés azonnal",
              "type": "Gyorsgomb",
              "description": "Lehetővé teszi a vezetőnek, hogy külön dolgozói önértékelési kör nélkül közvetlenül a 3. lépcsős vezetői értékelésre ugorjon."
            },
            {
              "label": "Teljesítmény Kalibrációs Eloszlás (Haranggörbe)",
              "type": "Interaktív diagram",
              "description": "Kattintható 5-oszlopos eloszlási grafikon a `/hr/performance/dashboard` oldalon, amely szűri a prémium-kalibrációs táblázatot."
            }
          ]
        },
        {
          "id": "vezetoi-nezet-jovahagyasok-es-teljesitmenyertekeles-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "5 lépcsős értékelési folyamat és 1-on-1 megbeszélés rögzítése",
              "description": "Miután a dolgozó beküldte az önértékelését (2. lépés), nyisd le a KPI kártyát, és a „3. Vezetői értékelés” lépésben add meg a teljesülési százalékot és a kötelező szöveges értékelést. A személyes értékelő megbeszélés után a „4. Megbeszélés” lépésben rögzítsd az összefoglalót, majd zárd le a célt a „Célkitűzés Végleges Lezárása és Hitelesítése” gombbal."
            },
            {
              "title": "Vezetői Teljesítmény Riportok és Haranggörbe kalibráció (/hr/performance/dashboard)",
              "description": "Kattints a fejlécben a „Riportok” gombra. Az interaktív „Teljesítmény Kalibrációs Eloszlás (Haranggörbe)” grafikon 5 teljesítménysávba sorolja a dolgozókat, az alatta lévő táblázat pedig automatikusan megmutatja a „Prémiumra jogosult” (>=80%), „Alapbér (Nincs bónusz)” (50–79%) vagy „Fejlesztési terv (PIP)” (<50%) besorolást."
            }
          ],
          "statusBadges": [
            {
              "label": "Becsekkolva / Távol / Kicsekkolt",
              "color": "green",
              "meaning": "A közvetlen beosztott valós idejű mai jelenléti állapota a Vezetői Nézetben."
            },
            {
              "label": "3. Vezetői értékelés / 4. Megbeszélés / 5. Lezárva",
              "color": "amber",
              "meaning": "Az 5 lépcsős KPI értékelési munkafolyamat aktuális szakasza."
            },
            {
              "label": "Prémiumra jogosult / Alapbér / Fejlesztési terv (PIP)",
              "color": "green",
              "meaning": "A dolgozó súlyozott KPI átlagteljesítménye alapján számított javadalmazási és kalibrációs kategória."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "Automatikus figyelmeztetés szabadság előtti helyettes-beállításra",
              "text": "Ha vezetőként 14 napon belül jóváhagyott szabadságod kezdődik, a Vezetői Nézet tetején megjelenik egy figyelmeztető sáv a „Helyettes beállítása” gombbal. A helyettesítési időszak lejártakor a rendszer automatikusan visszaveszi a jogosultságot."
            },
            {
              "type": "info",
              "title": "Súlyozott KPI átlag számítása",
              "text": "Ha egy munkatársnak több KPI célja van, az összesített eredménybe a „Normál (1x)” célok egyszeres, a „Kiemelt (1.5x)” célok másfélszeres, a „Stratégiai (2x)” célok pedig kétszeres súllyal számítanak bele."
            }
          ]
        }
      ]
    },
    {
      "slug": "toborzas-ats-karrierportal-es-ai-oneletrajz-elemzes",
      "title": "Toborzás (ATS), Karrierportál és AI Önéletrajz-elemzés",
      "subtitle": "3 lépéses AI álláshirdetés-varázsló EU 2023/970 bértranszparenciával, publikus „Cégünkről” karrieroldal, 6 oszlopos jelölt Kanban, AI CV-elemzés, Talent Pool és toborzási analitika.",
      "categoryId": "toborzas-eletut-es-audit",
      "readingTimeMinutes": 9,
      "roles": [
        "admin"
      ],
      "summary": "Az eaisyHR Toborzás (/hr/recruitment) modulja teljes értékű ATS (Applicant Tracking System) rendszert nyújt: a 3 lépéses AI varázslóval másodpercek alatt elkészíthetők és publikálhatók az álláshirdetések a vállalat saját nyilvános (/karrier) vagy belső karrieroldalára. A beérkező pályázatokat 6 oszlopos Kanban táblán követhetjük, ahol a Gemini-alapú AI CV-elemző automatikusan kinyeri a kompetenciákat és kiszámítja a relevancia-pontszámot, az „Elfogadva” oszlopba húzott jelöltből pedig automatikusan elindul az Onboarding folyamat.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-16-recruitment-lifecycle.webp",
          "alt": "Toborzás ATS oldal az Álláshirdetések, Cégünkről prezentáció, Kanban Tábla, Talent Pool és Analitika fülekkel",
          "caption": "Toborzás (/hr/recruitment): álláshirdetések kezelése azonnali Aktív / Publikus / Belső kapcsolókkal, AI hirdetésgenerátorral és 5 szakmai füllel."
        }
      ],
      "faqs": [
        {
          "question": "Láthatják-e külső látogatók a „Belső” álláshirdetéseket a nyilvános karrieroldalon?",
          "answer": "Nem. A „Belső” kapcsolóval megjelölt hirdetéseket a szerver kizárólag bejelentkezett, az adott vállalathoz tartozó munkavállalóknak jeleníti meg."
        }
      ],
      "relatedSlugs": [
        "onboarding-es-offboarding-munkafolyamatok",
        "berpapirok-celkituzesek-idp-es-belso-karrier"
      ],
      "accessSummary": "HR Adminisztrátor, Recruiter és Toborzás modul-jogosultsággal rendelkező vezetők számára (/hr/recruitment, /karrier).",
      "sections": [
        {
          "id": "toborzas-ats-karrierportal-es-ai-oneletrajz-elemzes-folyamat",
          "title": "1. Toborzás (ATS), Karrierportál és AI Önéletrajz-elemzés — alapfolyamatok és használat",
          "description": "Az eaisyHR Toborzás (/hr/recruitment) modulja teljes értékű ATS (Applicant Tracking System) rendszert nyújt: a 3 lépéses AI varázslóval másodpercek alatt elkészíthetők és publikálhatók az álláshirdetések a vállalat saját nyilvános (/karrier) vagy belső karrieroldalára. A beérkező pályázatokat 6 oszlopos Kanban táblán követhetjük, ahol a Gemini-alapú AI CV-elemző automatikusan kinyeri a kompetenciákat és kiszámítja a relevancia-pontszámot, az „Elfogadva” oszlopba húzott jelöltből pedig automatikusan elindul az Onboarding folyamat.",
          "steps": [
            {
              "title": "Álláshirdetés létrehozása a 3 lépéses AI varázslóval",
              "description": "Az „Álláshirdetések” fülön kattints az „Új hirdetés feladása” gombra. Az 1. lépésben válaszd a „Generálás AI-val” módot és a belső munkakört; a 2. lépésben állítsd be a munkavégzés módját (Hibrid/Remote/Irodai) és az EU 2023/970 irányelv szerinti bérsávot; a 3. lépésben pedig kattints a „Generálás AI-val most”, majd a „Hirdetés közzététele” gombra."
            },
            {
              "title": "„Cégünkről” vállalati prezentáció és publikus Karrierportál (/karrier)",
              "description": "A „Cégünkről prezentáció” fül 5 lépéses varázslójával (Alapadatok & Küldetés, Kultúra & Juttatások, Fotóvilág, AI szöveggenerálás, Publikálás) látványos munkáltatói márkaoldalt állíthatsz össze. A fejléc „Publikus Karrieroldal megnyitása” gombja közvetlenül a nyilvános `/karrier` oldalra visz, ahol a jelöltek a `KAR-2026-...` azonosítójukkal élőben lekérdezhetik pályázatuk státuszát."
            },
            {
              "title": "Jelöltkezelés a Kanban táblán és AI Önéletrajz-elemzés",
              "description": "A „Kanban Tábla” fülön 6 oszlopban („Új Jelentkező”, „Előszűrt”, „Interjú”, „Ajánlat Adva”, „Elfogadva”, „Elutasítva”) mozgathatod a pályázókat. A jelölt kártyájára kattintva a jobb oldali panelen nyomd meg az „Elemzés futtatása” gombot: az AI kinyeri az önéletrajz adatait, meghatározza a „Relevancia” százalékot (0–100%) és a kulcskompetenciákat."
            }
          ],
          "uiElements": [
            {
              "label": "Aktív / Publikus / Belső kapcsolók",
              "type": "Kapcsolók",
              "description": "Minden álláshirdetés-kártyán egy kattintással szabályozzák, hogy a hirdetés a külső `/karrier` oldalon (`Publikus`) vagy kizárólag a Dolgozói Portálon (`Belső`) jelenjen meg."
            },
            {
              "label": "Elemzés futtatása (AI CV-elemzés)",
              "type": "Gomb",
              "description": "A jelölt adatlapján elindítja a csatolt PDF/Word önéletrajz szövegkinyerését, relevancia-pontozását és kompetencia-elemzését."
            },
            {
              "label": "Biztonságos megtekintés (Önéletrajz)",
              "type": "Gomb",
              "description": "60 másodpercig érvényes, titkosított linken nyitja meg az önéletrajzot, miközben a betekintést rögzíti a Központi Eseménynaplóban."
            },
            {
              "label": "Behívás a pozíció kiválasztási folyamatába",
              "type": "Gomb",
              "description": "A Talent Poolban szereplő jelöltet egyetlen kattintással hozzárendeli egy kiválasztott nyitott álláshirdetés Kanban táblájához."
            }
          ]
        },
        {
          "id": "toborzas-ats-karrierportal-es-ai-oneletrajz-elemzes-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Interjú ütemezése és automatikus Onboarding indítás",
              "description": "Amikor egy jelöltet az „Interjú” oszlopba húzol, felugrik az „Interjú ütemezése” ablak (dátum, időpont, Google Meet/helyszín, automatikus e-mail és opcionális SMS emlékeztető). Sikeres kiválasztás után húzd a kártyát az „Elfogadva” oszlopba: a rendszer automatikusan létrehozza a beléptetési (Onboarding) folyamatot."
            },
            {
              "title": "Talent Pool és Vezetői Toborzási Analitika",
              "description": "A „Talent Pool” fül e-mail cím alapján deduplikálja a több pozícióra vagy spontán jelentkezőket, és figyeli a 180 napos GDPR adatmegőrzési határidőt. Az „Analitika” fülön nyomon követheted a Time-to-Hire átfutási időt, a 7+ napos SLA figyelmeztetéseket és a toborzási csatornák konverzióját."
            }
          ],
          "statusBadges": [
            {
              "label": "Publikus / Belső / Piszkozat",
              "color": "green",
              "meaning": "Az álláshirdetés láthatósági állapota a nyilvános vagy a belső karrierportálon."
            },
            {
              "label": "Relevancia: 75–100% / 50–74% / <50%",
              "color": "green",
              "meaning": "Az AI önéletrajz-elemzés által számított szakmai illeszkedési pontszám."
            },
            {
              "label": "SLA Figyelmeztetés: Azonnali teendő",
              "color": "red",
              "meaning": "Jelzi, ha egy jelölt több mint 7 napja visszajelzés nélkül várakozik „Új” vagy „Előszűrt” státuszban."
            },
            {
              "label": "GDPR 180 napos megőrzési figyelmeztetés",
              "color": "amber",
              "meaning": "150 nap után sárga, 180 nap után piros pajzs figyelmeztet a pályázói adatok GDPR szerinti törlési határidejére."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "EU 2023/970 bértranszparencia és bérigény-összevetés",
              "text": "Ha az álláshirdetésnél megadod a minimum és maximum bruttó alapbér-sávot, a rendszer a jelentkezők bérigénye mellett automatikusan megjeleníti a „Sávon belül”, „Sáv felett” vagy „Sáv alatt” jelvényt."
            },
            {
              "type": "info",
              "title": "EU AI Act megfelelés: az AI csak döntéstámogató eszköz",
              "text": "Az AI CV-elemző soha nem utasít el automatikusan jelöltet: kizárólag összefoglalót és relevancia-pontszámot készít a HR munkatárs döntésének támogatására."
            }
          ]
        }
      ]
    },
    {
      "slug": "onboarding-es-offboarding-munkafolyamatok",
      "title": "Onboarding és Offboarding Munkafolyamatok (Beléptetés és Kiléptetés)",
      "subtitle": "Szerepkör-specifikus beléptetési sablonok, 5 beépített munkajogi dokumentumgenerátor, egykattintásos fiókaktiválás és eaisyDocs dossziényitás, valamint szabályos kiléptetés (Mt. 80. §) és kilépési analitika.",
      "categoryId": "toborzas-eletut-es-audit",
      "readingTimeMinutes": 9,
      "roles": [
        "admin"
      ],
      "summary": "Az Onboarding (/hr/onboarding) és Offboarding (/hr/offboarding) modulok strukturált, részlegek (HR, IT, Bérszámfejtés, EHS, Üzemeltetés, Vezető) között megosztott ellenőrzőlistákkal és beépített munkajogi okiratgenerátorokkal vezetik végig a munkatársak be- és kiléptetését. Fiókaktiváláskor minden belépési irat automatikusan beiktatódik az új dolgozó eaisyDocs Személyi Dossziéjába, kiléptetés lezárásakor pedig elkészül az Mt. 80. § szerinti kilépő igazoláscsomag, a személyi dosszié irattárba kerül, és a rendszer visszavonja a belépési jogosultságot.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-17-onboarding-offboarding.webp",
          "alt": "Onboarding oldal az aktív belépőkkel, 5/5 feladat (100%) előrehaladással, fiókaktiválási státusszal és beléptetés indítása gombbal",
          "caption": "Onboarding (/hr/onboarding): folyamatban lévő és lezárt beléptetések, feladat-előrehaladás követése és a részletező Onboarding profil modál."
        }
      ],
      "faqs": [
        {
          "question": "Mi történik, ha egy távozó dolgozó a cégcsoport egy másik vállalatánál továbbra is aktív munkaviszonyban marad?",
          "answer": "Az Offboarding lezárása ilyenkor kizárólag az adott vállalatnál szünteti meg a HR-jogosultságát, a globális bejelentkezési fiókját nem tiltja le, így a másik cégben zavartalanul tovább dolgozhat."
        }
      ],
      "relatedSlugs": [
        "toborzas-ats-karrierportal-es-ai-oneletrajz-elemzes",
        "allomanykezeles-szemelyi-dossziek-es-szerzodesek"
      ],
      "accessSummary": "HR Adminisztrátor, valamint az Onboarding/Offboarding feladatlistákban érintett IT, EHS, Bérszámfejtés és Vezető szerepkörök számára (/hr/onboarding, /hr/offboarding).",
      "sections": [
        {
          "id": "onboarding-es-offboarding-munkafolyamatok-folyamat",
          "title": "1. Onboarding és Offboarding Munkafolyamatok (Beléptetés és Kiléptetés) — alapfolyamatok és használat",
          "description": "Az Onboarding (/hr/onboarding) és Offboarding (/hr/offboarding) modulok strukturált, részlegek (HR, IT, Bérszámfejtés, EHS, Üzemeltetés, Vezető) között megosztott ellenőrzőlistákkal és beépített munkajogi okiratgenerátorokkal vezetik végig a munkatársak be- és kiléptetését. Fiókaktiváláskor minden belépési irat automatikusan beiktatódik az új dolgozó eaisyDocs Személyi Dossziéjába, kiléptetés lezárásakor pedig elkészül az Mt. 80. § szerinti kilépő igazoláscsomag, a személyi dosszié irattárba kerül, és a rendszer visszavonja a belépési jogosultságot.",
          "steps": [
            {
              "title": "Új beléptetés indítása sablonnal (vagy automatikus átvétel Toborzásból)",
              "description": "Az „Onboarding” (/hr/onboarding) oldalon kattints az „Új beléptetés indítása” gombra (ha a jelöltet a Toborzás Kanban táblán az „Elfogadva” oszlopba húztad, a rekord már automatikusan létrejött). Add meg a nevet, e-mail címet, részleget, munkakört, belépési dátumot, és válassz a 4 feladatsablon közül („Általános irodai munkatárs”, „IT & Szoftverfejlesztő”, „Vezetői / C-Level sablon”, „Fizikai / Operatív munkatárs”)."
            },
            {
              "title": "Az 5 belépési alapdokumentum előkészítése az Onboarding modálban",
              "description": "Kattints a belépő kártyáján a „Részletek és teendők megnyitása” gombra. A feladatok mellett található akciógombokkal közvetlenül a modálon belül elkészítheted: (1) a Munkaszerződést és Mt. 46. § tájékoztatót („Szerződés előkészítése”), (2) a Munkaköri leírást, (3) az Eszközátadási jegyzőkönyvet (Mt. 179. §), (4) a Munkavédelmi oktatási jegyzőkönyvet (Mvt. 55. §) és (5) a NAV T1041 bejelentést („U” típus)."
            },
            {
              "title": "Munkavállalói fiók aktiválása és automatikus eaisyDocs dossziényitás",
              "description": "Amikor az iratok elkészültek, kattints a modál sárga kártyáján a „Fiók aktiválása” gombra. A rendszer létrehozza a dolgozó eaisyHR hozzáférését, kiküldi a belépési e-mailt, titkosítva eltárolja a személyes/béradatokat, és az összes elkészített belépési okiratot egyetlen lépésben beiktatja a dolgozó eaisyDocs Személyi Dossziéjába (50 éves megőrzési idővel)."
            }
          ],
          "uiElements": [
            {
              "label": "Új beléptetés indítása / Feladat Sablon választó",
              "type": "Gomb és modál",
              "description": "Új onboarding folyamat indítása 4 munkakör-specifikus (HR, IT, Bérszámfejtés, EHS) ellenőrzőlista-sablonnal."
            },
            {
              "label": "Fiók aktiválása",
              "type": "Gomb",
              "description": "Élesíti az új belépő eaisyHR fiókját, kiküldi a meghívót és automatikusan beiktatja az előkészített szerződéseket az eaisyDocs Személyi Dossziéba."
            },
            {
              "label": "Igazolások kiadása (Törvényes Kilépő Igazolások – Mt. 80. §)",
              "type": "Panel",
              "description": "Előállítja a munkaviszony megszűnésekor kötelezően kiadandó igazoláscsomagot."
            },
            {
              "label": "Kilépési Interjúk & HR Analytics fül",
              "type": "Fül",
              "description": "Vállalati hangulatindex (1–5 skála), eNPS ajánlási mutató és a távozási okok statisztikai elemzése."
            }
          ]
        },
        {
          "id": "onboarding-es-offboarding-munkafolyamatok-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Kiléptetés (Offboarding) indítása és az 5 leszámolási panel",
              "description": "Az „Offboarding” (/hr/offboarding) oldalon az „Új kilépő hozzáadása” gombbal válaszd ki a dolgozót és a megszűnés módját (pl. Közös megegyezés, Munkavállalói/Munkáltatói felmondás). A kilépő profilmodáljában 5 dedikált panel segíti a leszámolást: „Megszüntetés előkészítése” (Mt. 64–85. §), „Eszközök visszavétele” (Mt. 179. §), „T1041 bejelentés” („T” kijelentés), „Kilépési interjú” és „Igazolások kiadása” (Mt. 80. §)."
            },
            {
              "title": "Kiléptetés lezárása, fióktiltás és Kilépési Interjú Analitika",
              "description": "A „Kiléptetés lezárása” gombra kattintva a rendszer automatikusan legenerálja (ha még nem készült el) az Mt. 80. § szerinti Törvényes Kilépő Igazolást, beiktatja a kilépési iratokat az eaisyDocs Személyi Dossziéba, a dossziét „Irattárban” státuszba helyezi, és letiltja a távozó dolgozó bejelentkezési jogosultságát. A „Kilépési Interjúk & HR Analytics” fülön eNPS és fluktuációs ok-elemzést látsz."
            }
          ],
          "statusBadges": [
            {
              "label": "Fiók aktiválásra vár / Fiók aktív",
              "color": "amber",
              "meaning": "Jelzi, hogy az új belépő megkapta-e már az éles eaisyHR bejelentkezési hozzáférését."
            },
            {
              "label": "Folyamatban / 100% Kész / Lezárva",
              "color": "blue",
              "meaning": "A be- vagy kiléptetési ellenőrzőlista teljesülési állapota."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "Dokumentumok előkészítése a Fiók aktiválása előtt",
              "text": "Érdemes először az Onboarding modálban elkészíteni a Munkaszerződést, a Munkaköri leírást, a T1041 adatlapot és az Oktatási jegyzőkönyvet, és csak ezután rákattintani a „Fiók aktiválása” gombra — így az aktiválás pillanatában minden irat automatikusan bekerül az eaisyDocs Személyi Dossziéba."
            },
            {
              "type": "warning",
              "title": "Mt. 80. § kilépő igazolások és fiókzárolás",
              "text": "A „Kiléptetés lezárása” gomb azonnal inaktiválja a dolgozó vállalati tagságát és archiválja a személyi dossziéját. Téves lezárás esetén a „Lezárt kiléptetések” fülön az „Újranyitás” gombbal visszaállítható a hozzáférés."
            }
          ]
        }
      ]
    },
    {
      "slug": "hr-riportok-analitika-jogosultsagok-es-esemenynaplo",
      "title": "HR Riportok, Hatósági Adatszolgáltatás, Jogosultságok és Eseménynapló",
      "subtitle": "NAV T1041 biztosítotti riport, KSH havi munkaügyi statisztika, bérszámfejtési exportcsomag, bevallás-archívum, 10 modulos jogosultsági mátrix és sértetlen HR eseménynapló.",
      "categoryId": "toborzas-eletut-es-audit",
      "readingTimeMinutes": 8,
      "roles": [
        "admin"
      ],
      "summary": "A Riportok (/hr/reports) modul egyetlen biztonságos adatszolgáltatási központban fogja össze a NAV T1041 bejelentéseket (automatikus hiányosság-érzékeléssel és ÁNYK vágólap-másolással), a KSH havi statisztikai munkaügyi jelentést (KSH-01..KSH-09 mutatókkal), a bérprogramoknak szánt jelenlét- és Cafeteria-exportot, valamint a hatósági Bevallás Archívumot. Az elszámoltathatóságot a Vállalati Modul-hozzáférési Mátrix és a kétfüles Központi Eseménynapló (/hr/audit) garantálja.",
      "screenshots": [
        {
          "src": "/kb/eaisy-hr/hr-18-reports.webp",
          "alt": "HR Riportok oldal a KSH Havi Statisztikai Munkaügyi Jelentéssel, főmutatókkal és Excel exporttal",
          "caption": "Riportok (/hr/reports): NAV T1041, KSH Riport (KSH-01..KSH-09 főmutatók és részlegenkénti bontás), Bérszámfejtés export és Bevallás Archívum."
        },
        {
          "src": "/kb/eaisy-hr/hr-19-audit.webp",
          "alt": "Központi Eseménynapló oldal az append-only GDPR audit bejegyzésekkel, érzékeny adat betekintés számlálóval és Kiküldési Naplóval",
          "caption": "Központi Eseménynapló (/hr/audit): visszavonhatatlan GDPR auditnapló az érzékeny adatok (TAJ, adó, bér) feloldásáról, módosításokról és a kiküldött HR értesítésekről."
        }
      ],
      "faqs": [
        {
          "question": "Hogyan adhatok egy HR-es kollégának hozzáférést a Toborzás modulhoz úgy, hogy a Bérszámfejtést ne lássa?",
          "answer": "A „Szervezeti Felépítés -> Jogosultságkezelő” fülön hagyd a munkatárs alapszerepkörét „Munkavállaló” értéken, és a „Toborzás” oszlopban kapcsold be az Olvasás (szem) és Írás (ceruza) ikonokat, míg a „Bérszámfejtés” oszlopot hagyd kikapcsolva."
        },
        {
          "question": "Hol tudom ellenőrizni, hogy egy pályázó vagy dolgozó megkapta-e a rendszer által küldött e-mailt?",
          "answer": "Nyisd meg a „Központi Eseménynapló” (/hr/audit) oldalon a „Kiküldési Napló” fület, ahol minden e-mail és SMS kézbesítési státusza és pontos tartalma visszanézhető."
        }
      ],
      "relatedSlugs": [
        "berszamfejtes-berjegyzekek-es-cafeteria",
        "allomanykezeles-szemelyi-dossziek-es-szerzodesek"
      ],
      "accessSummary": "HR Adminisztrátor, Cégvezető és Riportok/Audit olvasási jogosultsággal rendelkező felhasználók számára (/hr/reports, /hr/audit).",
      "PermissionMatrix": [
        {
          "feature": "NAV T1041 generálás, KSH havi jelentés és Bérszámfejtési Excel export",
          "admin": true,
          "member": false,
          "note": "Riportok modul olvasási/írási jogosultsággal rendelkező HR és könyvelői felhasználóknak."
        },
        {
          "feature": "Vállalati Modul-hozzáférési Mátrix (10 HR modul R/W delegálása)",
          "admin": true,
          "member": false,
          "note": "Kizárólag Cégvezető / HR Adminisztrátor módosíthatja."
        },
        {
          "feature": "Központi Eseménynapló (GDPR érzékeny adat betekintések) és Kiküldési Napló",
          "admin": true,
          "member": false,
          "note": "Visszavonhatatlan (append-only) auditnapló minden személyes és béradat-hozzáférésről."
        }
      ],
      "sections": [
        {
          "id": "hr-riportok-analitika-jogosultsagok-es-esemenynaplo-folyamat",
          "title": "1. HR Riportok, Hatósági Adatszolgáltatás, Jogosultságok és Eseménynapló — alapfolyamatok és használat",
          "description": "A Riportok (/hr/reports) modul egyetlen biztonságos adatszolgáltatási központban fogja össze a NAV T1041 bejelentéseket (automatikus hiányosság-érzékeléssel és ÁNYK vágólap-másolással), a KSH havi statisztikai munkaügyi jelentést (KSH-01..KSH-09 mutatókkal), a bérprogramoknak szánt jelenlét- és Cafeteria-exportot, valamint a hatósági Bevallás Archívumot. Az elszámoltathatóságot a Vállalati Modul-hozzáférési Mátrix és a kétfüles Központi Eseménynapló (/hr/audit) garantálja.",
          "steps": [
            {
              "title": "NAV T1041 biztosítotti riport és ÁNYK adatszolgáltatás (/hr/reports)",
              "description": "A „Riportok” (/hr/reports) oldal „NAV T1041” fülén a rendszer automatikusan összeveti a tárgyhavi be- és kilépőket a T1041 nyilvántartással, és „Bejelentésre vár” jelvénnyel figyelmeztet a hiányzó tételekre. A „+ Egyéni T1041 Készítése” gombbal új „U” (Új), „T” (Kijelentés) vagy „V” (Változás) adatlapot generálhatsz, az „ÁNYK Vágólapra” gombbal átmásolhatod az adatokat, majd csatolhatod a NAV befogadási nyugtát."
            },
            {
              "title": "KSH havi munkaügyi jelentés és Bérszámfejtési csomag exportálása",
              "description": "Válts a „KSH Riport” fülre a KSH-01..KSH-09 főmutatók (záró és FTE létszám, fluktuáció, norma és teljesített órák, túlóra, szabadság, betegszabadság) és az osztályonkénti bontás megtekintéséhez, majd töltsd le a „KSH Riport Letöltése (Excel)” gombbal. A „Bérszámfejtés” fülön egy kattintással letöltheted a bérprogramok (Nexon, Kulcs-Bér, BaBér) számára előkészített „Bérszámfejtési Export (.xlsx)” és „Cafeteria Részletező (Excel)” fájlokat."
            },
            {
              "title": "Hatósági dokumentumok megőrzése a Bevallás Archívumban",
              "description": "A „Bevallás Archívum” fülön az „Új Bevallás Feltöltése” kártyával archiválhatod és iktathatod a NAV T1041 nyugtákat, a NAV 08-as havi járulékbevallásokat és a KSH jelentéseket (PDF, XML, CSV, XLSX)."
            }
          ],
          "uiElements": [
            {
              "label": "+ Egyéni T1041 Készítése / ÁNYK Vágólapra",
              "type": "Gombok",
              "description": "NAV T1041 biztosítotti bejelentő adatlap generálása (U, T, V típus) és az adatok ÁNYK-kompatibilis vágólapra másolása."
            },
            {
              "label": "KSH Riport Letöltése (Excel) / Bérszámfejtési Export (.xlsx)",
              "type": "Gombok",
              "description": "Hivatalos havi munkaügyi statisztikai és bérfeladási táblázatok exportálása `.xlsx` formátumban."
            },
            {
              "label": "Vállalati Modul-hozzáférési Mátrix (Eye / Pencil / R+ / W+ / Tilt)",
              "type": "Jogosultsági táblázat",
              "description": "10 HR modulonként külön kapcsolható olvasási és írási jogosultságok egyedi delegáláshoz."
            },
            {
              "label": "Eseménynapló / Kiküldési Napló fülek",
              "type": "Fülek",
              "description": "A `/hr/audit` oldalon külön követhető a visszavonhatatlan adat- és műveleti auditnapló, valamint az e-mail/SMS értesítések kézbesítési naplója."
            }
          ]
        },
        {
          "id": "hr-riportok-analitika-jogosultsagok-es-esemenynaplo-reszletek-es-szabalyok",
          "title": "2. Haladó műveletek, státuszjelvények és gyakorlati tudnivalók",
          "description": "Az alábbi lépések, státuszjelvények és szakmai javaslatok segítik a modul napi szintű, jogszabályoknak (Mt., Mvt., GDPR) megfelelő alkalmazását.",
          "steps": [
            {
              "title": "Vállalati Modul-hozzáférési Mátrix finomhangolása (/hr/organization?tab=permissions)",
              "description": "A „Szervezeti Felépítés -> Jogosultságkezelő” fülön minden munkatárshoz beállítható az alapszerepkör („Munkavállaló”, „Vezető”, „Admin”), mellette pedig a 10 szakmai HR modulra külön-külön bekapcsolható a „Megtekintés (Olvasás)” (szem ikon) és az „Írás” (ceruza ikon) jogosultság, vagy használhatók az „R+”, „W+” és „Tilt” gyorsgombok."
            },
            {
              "title": "Központi Eseménynapló és Kiküldési Napló ellenőrzése (/hr/audit)",
              "description": "A „Központi Eseménynapló” (/hr/audit) „Eseménynapló” fülén szűrhetsz időszakra, felhasználóra, művelettípusra és modulra — külön KPI kártya mutatja az „Érzékeny Adat Betekintés” (TAJ, adó, bankszámla, bér feloldások) számát. A „Kiküldési Napló” fülön pedig minden kiküldött HR e-mail és SMS értesítés kézbesítési státusza és teljes tartalma visszanézhető."
            }
          ],
          "statusBadges": [
            {
              "label": "U (Új) / T (Törlés/Kijelentés) / V (Változás)",
              "color": "blue",
              "meaning": "A NAV T1041 biztosítotti bejelentés típusa."
            },
            {
              "label": "Igazolva / Beküldve / Bejelentésre vár",
              "color": "green",
              "meaning": "A T1041 bejelentés hatósági státusza (az „Igazolva” állapothoz csatolt NAV nyugta tartozik)."
            },
            {
              "label": "Szigorú Adatvédelmi Zóna",
              "color": "amber",
              "meaning": "Jelzi, hogy a Riportok és az Eseménynapló felületén végzett minden megtekintés és exportálás GDPR-auditált."
            }
          ],
          "tips": [
            {
              "type": "tip",
              "title": "Gyors „Csak olvasás” jogosultság könyvelőknek és auditoroknak",
              "text": "Ha külső könyvelőnek vagy auditornak szeretnél betekintést adni, a Jogosultságkezelő mátrixban kattints a sor végén található „R+” („Csak olvasás minden modulon”) gyorsgombra, vagy kapcsold be csak a „Bérszámfejtés” és „Riportok” moduloknál a szem ikont."
            },
            {
              "type": "info",
              "title": "10 testreszabható automatikus HR riasztási szabály",
              "text": "A „Beállítások -> Értesítések” (/hr/settings) fülön 10 HR eseményre (pl. lejáró munkaszerződés 30 nappal előtte, próbaidő lejárata 15 nappal előtte, lejáró orvosi vizsgálat, túlórakeret-túllépés) külön-külön bekapcsolhatod a Rendszeren belüli, E-mail és SMS csatornákat."
            }
          ]
        }
      ]
    }
  ]
};
