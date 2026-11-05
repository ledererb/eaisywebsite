import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  Wand2,
  Eye,
  ArrowUpRight,
  Users,
  FileText,
  Sparkles,
  MoveHorizontal,
  Plus,
  Minus,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Layers,
  Rocket,
  Laptop,
  Award,
  AlertTriangle,
  FileQuestion,
  CalendarClock,
  Crosshair,
  LayoutDashboard,
  FileCheck,
  Building2,
  FileSignature,
  BarChart3,
  ShieldCheck,
  Lock,
  UserCheck,
  UserPlus,
  Calendar,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Wallet,
  Target,
  Network,
  BookOpen,
} from "lucide-react";
import imgDemo from "@/imports/demo-img.png";
import { openDemoModal } from "@/app/Root";
import { Seo, SITE_URL, organizationSchema, softwareAppSchema, faqSchema } from "@/app/components/Seo";
import { SectionEyebrow, SectionHeader } from "@/app/components/Section";
import imgBadgeShield from "@/imports/EaisyBooks/badge-shield.png";
import imgBadgeNav from "@/imports/EaisyBooks/badge-nav.png";
import imgBadgeGdpr from "@/imports/EaisyBooks/badge-gdpr.png";

// ── eaisyHR palette ──────────────────────────────────────────────────────────
const C = {
  // primary (mély zsálya-türkiz — eaisyHR márkaszín)
  p50: "#EEF8F7",
  p200: "#98DBD5",
  p400: "#4FA9A2",
  p600: "#1E7871",
  p800: "#124B47",
  p900: "#092C2A",
  // accent (smaragd & meleg borostyán)
  a50: "#ECFDF5",
  a300: "#6EE7B7",
  a500: "#0D9488",
  a700: "#0F766E",
  a900: "#134E4A",
  // shared
  ink: "#264350",
  dark: "#264350",
  bodyText: "rgba(0,0,0,0.55)",
  violet: "#623CEA",
  violetBg: "#F1EAFC",
  amberBg: "#FFF3DE",
  amber: "#D97706",
};

const FONT_MAIN = "font-['Montserrat',sans-serif]";
const FONT_CARD = "font-['Inter',sans-serif]";

const INNER = "w-full max-w-[1530px] mx-auto px-6 lg:px-10"; // → 1450px content
const INNER_CARDS = "w-full max-w-[1434px] mx-auto px-6 lg:px-10"; // → 1354px content

const TEASER_CARD =
  "rounded-2xl ring-1 ring-inset ring-[rgba(30,120,113,0.22)] transition-all duration-300 hover:-translate-y-1";

// ── hero bottom square cards ─────────────────────────────────────────────────
const BOTTOM_CARDS = [
  {
    icon: UserCheck,
    chipBg: C.p50,
    chipColor: C.p600,
    title: "Dolgozói Önkiszolgáló Portál",
    desc: "Digitális jelenléti ív, szabadságigénylés, bérpapírok, Cafeteria és célkitűzések egyetlen felületen",
  },
  {
    icon: Briefcase,
    chipBg: C.violetBg,
    chipColor: C.violet,
    title: "360°-os Személyi Dosszié & Műszakok",
    desc: "Munkaszerződések, műszakbeosztás, orvosi alkalmasság és automatikus eaisyDocs iktatás",
  },
  {
    icon: UserPlus,
    chipBg: C.a50,
    chipColor: C.a500,
    title: "Toborzás, Onboarding & Teljesítmény",
    desc: "Publikus karrieroldal, AI CV-elemzés, beléptetési sablonok, KPI-ok és 9-box értékelés",
  },
];

// ── problems section ─────────────────────────────────────────────────────────
const PROBLEMS: { icon: typeof FileText; title: string; desc: string }[] = [
  {
    icon: FileQuestion,
    title: "Excel-táblákban szétszórt jelenlétek és szabadságok",
    desc: "Papíralapú szabadságos tömbök, külön vezetett jelenléti ívek és e-mailben küldözgetett túlóra-igénylések: hónap végén órák mennek el az adatok összesítésével és a hibák javításával.",
  },
  {
    icon: AlertTriangle,
    title: "Lejáró orvosi alkalmassági és munkavédelmi határidők",
    desc: "Központi figyelmeztetés nélkül könnyen előfordul, hogy egy munkatárs lejárt munkaköri orvosi alkalmasságival vagy hiányzó tűz- és munkavédelmi oktatással kerül műszakbeosztásba — ami súlyos munkaügyi bírságot vonhat maga után.",
  },
  {
    icon: CalendarClock,
    title: "Lassú, manuális szerződéskötés és beléptetés",
    desc: "Új belépőnél a munkaszerződés, az Mt. 46. § szerinti tájékoztató, a munkaköri leírás, a T1041-es adatlap és az eszközátadás külön-külön Word sablonokból történő összemásolása rengeteg adminisztrációval és elütési kockázattal jár.",
  },
  {
    icon: Users,
    title: "Átláthatatlan toborzás és elvesző jelöltek",
    desc: "Az állásportálokról és e-mailben befutó önéletrajzok átolvasása, előszűrése és az interjúkörök követése egységes ATS rendszer nélkül túlterheli a HR-t és a szakmai vezetőket.",
  },
  {
    icon: Wallet,
    title: "Időigényes bérszámfejtési előkészítés és bérpapír-kiküldés",
    desc: "A ledolgozott órák, műszakpótlékok, betegszabadságok és Cafeteria-nyilatkozatok kézi kigyűjtése a könyvelés felé, majd a havi bérjegyzékek egyenkénti szétküldése minden hónapban visszatérő teher.",
  },
  {
    icon: Lock,
    title: "Érzékeny bér- és személyi adatok védelme",
    desc: "A munkabérek, TAJ- és adószámok, fegyelmi ügyek vagy egészségügyi adatok megosztott mappákban való tárolása komoly GDPR- és belső adatbiztonsági kockázatot jelent.",
  },
];

// ── features section: categories + 20 feature cards ─────────────────────────
type FeatureCategoryId = "portal" | "allomany" | "munkaido" | "eletut" | "teljesitmeny";

const FEATURE_CATEGORIES: {
  id: FeatureCategoryId;
  label: string;
  icon: typeof Users;
  color: string;
  soft: string;
  deep: string;
}[] = [
  { id: "portal", label: "Dolgozói Portál & Önkiszolgálás", icon: UserCheck, color: "#1E7871", soft: "rgba(30,120,113,0.16)", deep: "#124B47" },
  { id: "allomany", label: "360° Állomány & Szervezet", icon: Briefcase, color: "#2D8A82", soft: "rgba(45,138,130,0.16)", deep: "#1E7871" },
  { id: "munkaido", label: "Munkaidő, Műszak & Bér", icon: Calendar, color: "#0D9488", soft: "rgba(13,148,136,0.16)", deep: "#0F766E" },
  { id: "eletut", label: "AI Toborzás, On- és Offboarding", icon: Sparkles, color: "#623CEA", soft: "rgba(98,60,234,0.16)", deep: "#3B0764" },
  { id: "teljesitmeny", label: "Teljesítmény, Megfelelőség & Audit", icon: ShieldCheck, color: "#124B47", soft: "rgba(18,75,71,0.14)", deep: "#092C2A" },
];

const FEATURES: { cat: FeatureCategoryId; icon: typeof FileText; title: string; desc: string }[] = [
  // dolgozói portál & önkiszolgálás
  {
    cat: "portal",
    icon: LayoutDashboard,
    title: "Interaktív Dolgozói Portál és munkaidő-terminál",
    desc: "Személyre szabott nyitófelület egykattintásos munkakezdés/befejezés és szünet-blokkolással, valós idejű szabadságkeret-kijelzéssel, sürgős teendőkkel és közelgő lejáratokkal.",
  },
  {
    cat: "portal",
    icon: CalendarClock,
    title: "Önkiszolgáló szabadságigénylés és jelenlét-korrekció",
    desc: "Alapszabadság, betegszabadság, apasági vagy fizetés nélküli távollét igénylése naptárnézetből, ütközésvizsgálattal. Elfelejtett blokkolás esetén indokolt jelenlét-korrekciós kérelem nyújtható be automatikus PDF igazolással.",
  },
  {
    cat: "portal",
    icon: Wallet,
    title: "Digitális Bérpapírjaim és Cafeteria nyilatkozat",
    desc: "A munkavállalók biztonságos csatornán tekinthetik meg és tölthetik le havi bérjegyzékeiket, valamint az éves keretösszegig önkiszolgáló módon állíthatják össze Cafeteria juttatási csomagjukat.",
  },
  {
    cat: "portal",
    icon: FileSignature,
    title: "Saját dokumentumok és aláírt példány visszatöltése",
    desc: "A dolgozó egy helyen éri el munkaszerződését, munkaköri leírását és igazolásait, az aláírt dokumentumpéldányokat pedig közvetlenül feltöltheti — amelyek változathatatlanul bekerülnek a személyi dossziéjába.",
  },
  // 360° állomány & szervezet
  {
    cat: "allomany",
    icon: Users,
    title: "360°-os Munkavállalói Karton 15 szakmai füllel",
    desc: "Minden munkavállalói adat egyetlen strukturált profilban: személyes és törzsadatok, munkaviszony, munkahely és kiadott eszközök, jelenlét, szabadság, bérpapírok, Cafeteria, képzettségek, tanulmányi szerződések, fegyelmi és kitüntetések.",
  },
  {
    cat: "allomany",
    icon: FileCheck,
    title: "Automatikus munkaszerződés, Mt. 46. § és T1041 generátor",
    desc: "Dinamikus sablonmotorral egyetlen gombnyomással elkészül a hivatalos munkaszerződés, a bérváltozási módosítás, az Mt. 46. § szerinti tájékoztató és a NAV T1041-es bejelentő adatlap.",
  },
  {
    cat: "allomany",
    icon: Network,
    title: "Interaktív Szervezeti Ábra (Org Chart) és Munkaköri Katalógus",
    desc: "Vizuális szervezeti hierarchia osztályokkal, vezetőkkel és létszámadatokkal, valamint központi munkaköri katalógus kompetencia-elvárásokkal, alapbér-sávokkal és kötelező munkaköri feladatokkal.",
  },
  {
    cat: "allomany",
    icon: Building2,
    title: "Közvetlen eaisyDocs Személyi Dosszié és eaisyBooks szinkron",
    desc: "Minden generált vagy feltöltött HR irat automatikusan iktatható a dolgozó eaisyDocs személyi dossziéjába, a munkavállalói törzsadatok pedig egy kattintással szinkronizálhatók az eaisyBooks könyvelési rendszerből.",
  },
  // munkaidő, műszak & bér
  {
    cat: "munkaido",
    icon: Calendar,
    title: "Műszakbeosztás-tervező (Roster) munkajogi védelemmel",
    desc: "Heti és havi vizuális műszaktervező sablonokkal. A rendszer automatikusan ellenőrzi a napi pihenőidőt, a szabadságokat, és blokkolja a beosztást, ha a dolgozó orvosi alkalmasságija lejárt.",
  },
  {
    cat: "munkaido",
    icon: Clock,
    title: "Munka Törvénykönyve (Mt.) munkaidő- és túlóramotor",
    desc: "Éves túlóra-keret figyelése, rendkívüli munkavégzés elszámolása (50%/100% bérpótlék vagy szabadidő-megváltás követése) és év végi bentragadó szabadságok proaktív riasztása.",
  },
  {
    cat: "munkaido",
    icon: Wallet,
    title: "Bérszámfejtési előkészítés és tömeges bérjegyzék-kiadás",
    desc: "Havi bérköltség-áttekintés, jelenléti és pótlékadatok összesítése, bérjegyzékek egyéni vagy ütemezett tömeges generálása és azonnali publikálása a Dolgozói Portálra.",
  },
  {
    cat: "munkaido",
    icon: UserCheck,
    title: "Vezetői Jóváhagyási Központ és helyettesítés",
    desc: "A csapatvezetők egyetlen felületen bírálhatják el a beosztottak szabadság-, túlóra- és jelenlét-korrekciós kérelmeit. Távollét idejére automatikus jóváhagyási helyettes (delegált vezető) állítható be.",
  },
  // ai toborzás, on- és offboarding
  {
    cat: "eletut",
    icon: Wand2,
    title: "3 lépéses AI Álláshirdetés-varázsló és Publikus Karrierportál",
    desc: "A munkaköri paraméterekből az AI másodpercek alatt vonzó álláshirdetést szövegez, amely egy kattintással publikálható a vállalat saját, többcéges `/karrier` oldalára és a belső állásportálra.",
  },
  {
    cat: "eletut",
    icon: Sparkles,
    title: "Jelöltkezelő Kanban (ATS), AI CV-elemzés és Talent Pool",
    desc: "A beérkező önéletrajzokból az AI kinyeri a jelölt adatait, kiszámítja a pozícióhoz való illeszkedési pontszámot, kiszűri a duplikációkat a Talent Poolban, és támogatja a bónuszos dolgozói ajánlási programot.",
  },
  {
    cat: "eletut",
    icon: UserPlus,
    title: "Digitális Onboarding és Pre-Onboarding adatbekérés",
    desc: "Még a belépés napja előtt kiküldhető online adatbekérő űrlap, strukturált beléptetési feladatlista (IT, HR, vezető), eszközátadási jegyzőkönyv és egykattintásos éles állományba aktiválás.",
  },
  {
    cat: "eletut",
    icon: FileText,
    title: "Szabályos Offboarding és törvényi kilépő igazolások",
    desc: "Kilépési ellenőrzőlista, kiadott eszközök tételes visszavétele, munkakör-átadási jegyzőkönyv, a kötelező kilépő igazoláscsomag automatikus generálása és kilépési okok analitikája.",
  },
  // teljesítmény, megfelelőség & audit
  {
    cat: "teljesitmeny",
    icon: Target,
    title: "Teljesítményértékelési ciklusok, KPI-ok és 9-Box Mátrix",
    desc: "Vállalati, osztály- és egyéni KPI célok kaszkádolása, kétlépcsős (önértékelés + vezetői) értékelési folyamat, kompetencia-fókuszú visszajelzés és interaktív 9-box tehetségkalibrációs dashboard.",
  },
  {
    cat: "teljesitmeny",
    icon: GraduationCap,
    title: "Egyéni Fejlődési Terv (IDP) és Tanulmányi Szerződések",
    desc: "Személyre szabott kompetenciafejlesztési célok, mentorálás és képzési mérföldkövek követése, valamint a tanulmányi szerződések támogatási összegeinek és kötelező ledolgozási idejének nyilvántartása.",
  },
  {
    cat: "teljesitmeny",
    icon: HeartPulse,
    title: "Munkaköri orvosi alkalmasság és munkavédelmi mátrix",
    desc: "Az orvosi vizsgálatok, valamint a tűz- és munkavédelmi oktatások érvényességének központi mátrixa automatikus lejárati riasztásokkal és hivatalos oktatási jegyzőkönyvek iktatásával.",
  },
  {
    cat: "teljesitmeny",
    icon: BarChart3,
    title: "Vezetői HR Riportok (KSH, T1041) és Sértetlen Eseménynapló",
    desc: "Létszám-, fluktuáció-, bérköltség- és távolléti kimutatások CSV/XLSX exporttal, KSH adatszolgáltatási segéddel, finomhangolható jogosultsági mátrixszal és visszavonhatatlan HR auditnaplóval.",
  },
];

// ── benefits section: role tabs ──────────────────────────────────────────────
const ROLES: {
  id: string;
  label: string;
  fill: string;
  numColor: string;
  benefits: { title: string; desc: string }[];
}[] = [
  {
    id: "cegvezeto",
    label: "A cégvezető",
    fill: "#1E7871",
    numColor: "#1E7871",
    benefits: [
      {
        title: "Valós idejű rálátás a létszámra és bérköltségre",
        desc: "Egyetlen vezetői felületen követheted az aktív létszámot, a fluktuációt, a havi bér- és juttatási költségeket, valamint az egyes szervezeti egységek terhelését — akár több cégre párhuzamosan is.",
      },
      {
        title: "100%-os munkaügyi és GDPR biztonság",
        desc: "A rendszer automatikusan figyeli az Mt. munkaidő- és szabadságszabályokat, a lejáró orvosi alkalmasságikat és a kötelező munkavédelmi oktatásokat, így megelőzhetők a hatósági bírságok.",
      },
      {
        title: "Objektív teljesítménykultúra (KPI & 9-Box)",
        desc: "A vállalati stratégiai célok osztály- és egyéni szintre bonthatók, a 9-box kalibrációs mátrix pedig átláthatóvá teszi, kik a szervezet kulcsemberei és hol van szükség fejlesztésre.",
      },
      {
        title: "Szoros eaisyDocs és eaisyBooks integráció",
        desc: "A személyi dossziék automatikusan a központi irattárba iktatódnak, a munkavállalói és bérszámfejtési adatok pedig kézi átmásolás nélkül kapcsolódnak a könyveléshez.",
      },
    ],
  },
  {
    id: "hr-vezeto",
    label: "A HR vezető és munkaügyes",
    fill: "#2D8A82",
    numColor: "#2D8A82",
    benefits: [
      {
        title: "Gombnyomásra generálható szerződések és T1041",
        desc: "Munkaszerződés, bérváltozási módosítás, Mt. 46. § tájékoztató, munkaköri leírás és kilépő igazoláscsomag másodpercek alatt, elütés nélkül elkészül a dolgozó törzsadataiból.",
      },
      {
        title: "AI-alapú toborzás és strukturált beléptetés",
        desc: "Az AI megírja az álláshirdetést és előszűri a beérkező önéletrajzokat, a kiválasztott jelölt pedig egyetlen kattintással átvezethető a pre-onboarding és beléptetési munkafolyamatba.",
      },
      {
        title: "Automatikus lejáratfigyelés és műszakvédelem",
        desc: "Nem kell többé Excelben követni az orvosi vizsgálatokat, próbaidőket, határozott idejű szerződéseket és oktatásokat — a rendszer időben riaszt, és megakadályozza a szabálytalan műszakbeosztást.",
      },
      {
        title: "KSH, T1041 és vezetői riportok percek alatt",
        desc: "A havi és éves munkaügyi statisztikák, távolléti összesítők és bérköltség-riportok bármikor szűrhetők és azonnal exportálhatók.",
      },
    ],
  },
  {
    id: "munkavallalo",
    label: "A csapatvezető és munkavállaló",
    fill: "#0D9488",
    numColor: "#0D9488",
    benefits: [
      {
        title: "Önkiszolgáló Dolgozói Portál papírok nélkül",
        desc: "A kollégák saját felületükön indíthatják a napi munkaidőt, igényelhetnek szabadságot, tölthetik le bérpapírjaikat és adhatják le Cafeteria-nyilatkozatukat.",
      },
      {
        title: "Egykattintásos vezetői jóváhagyások",
        desc: "A csapatvezetők egyetlen összesített nézetben látják a csapat jelenlétét, és azonnal jóváhagyhatják a szabadság-, túlóra- vagy jelenlét-korrekciós kérelmeket.",
      },
      {
        title: "Átlátható karrierút és egyéni fejlődési terv (IDP)",
        desc: "Minden munkatárs tisztán látja a rá vonatkozó célkitűzéseket (KPI), a tervezett képzéseket, a belső nyitott pozíciókat és az ajánlási bónuszlehetőségeket.",
      },
      {
        title: "Digitális dokumentum-hozzáférés bárhonnan",
        desc: "A saját szerződések, munkaköri leírások és igazolások bármikor visszakereshetők, az aláírt példányok pedig közvetlenül a portálon keresztül feltölthetők.",
      },
    ],
  },
];

// ── who-for section: 5 organization types ────────────────────────────────────
const WHO_FOR: { icon: typeof Users; num: string; title: string; desc: string }[] = [
  {
    icon: TrendingUp,
    num: "01",
    title: "Növekvő KKV-knak (15–250+ fő)",
    desc: "Ahol a létszám növekedésével az Excel-alapú szabadságolás, a kézi jelenléti ívek és a szétszórt munkaszerződések már átláthatatlanná váltak, és szükség van egy egységes HR gerincre.",
  },
  {
    icon: Layers,
    num: "02",
    title: "Több műszakban vagy telephelyen dolgozó cégeknek",
    desc: "Ahol kulcsfontosságú a vizuális műszakbeosztás (Roster), a pihenőidők és túlórák pontos követése, valamint az érvényes orvosi és munkavédelmi alkalmasság automatikus ellenőrzése.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Intenzíven toborzó és bővülő csapatoknak",
    desc: "Ahol folyamatos a felvétel, és az AI álláshirdetés-generátor, a publikus karrieroldal, az AI CV-elemzés és a sablonosított Onboarding hetekkel rövidíti le a beléptetést.",
  },
  {
    icon: Laptop,
    num: "04",
    title: "Hibrid és távmunkában működő szervezeteknek",
    desc: "Ahol a munkavállalók online blokkolnak, digitálisan igényelnek szabadságot, elektronikusan érik el bérpapírjaikat, és strukturált KPI/OKR célok mentén dolgoznak.",
  },
  {
    icon: Award,
    num: "05",
    title: "Többcéges cégcsoportoknak és eaisy-felhasználóknak",
    desc: "Ahol több vállalat HR-folyamatait kell szigorú GDPR-szeparációval egyetlen fiókból irányítani, közvetlen eaisyDocs irattári és eaisyBooks könyvelési kapcsolattal.",
  },
];

// ── faq section ──────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Milyen modulokat tartalmaz az eaisyHR rendszer?",
    a: "Az eaisyHR 5 szorosan integrált területet fed le: (1) Dolgozói Önkiszolgáló Portál (jelenlét, szabadság, bérpapírok, Cafeteria, célok, IDP, belső karrier); (2) Vezetői munkaasztal (csapatjelenlét, jóváhagyási központ, teljesítményértékelés); (3) HR Munkaasztal (360°-os dolgozói karton, személyi dossziék, szervezeti ábra, műszakbeosztás, bérszámfejtés, munkaügyi megfelelőség, riportok); (4) Dolgozói Életút (ATS toborzás, AI CV-elemzés, Onboarding, Offboarding); valamint (5) Sértetlen HR Eseménynapló és jogosultsági mátrix.",
  },
  {
    q: "Megfelel a rendszer a magyar Munka Törvénykönyve (Mt.) előírásainak?",
    a: "Igen. A rendszer a hazai munkajogi szabályokra épül: automatikusan generálja a munkaszerződést, az Mt. 46. § szerinti tájékoztatót, a munkaköri leírást, a T1041-es bejelentő adatlapot és a törvényi kilépő igazolásokat; emellett figyeli a pihenőidőket, az éves túlóra-keretet, a szabadságkiadási szabályokat és az orvosi alkalmassági lejáratokat.",
  },
  {
    q: "Hogyan segíti a mesterséges intelligencia a toborzást?",
    a: "A 3 lépéses AI Álláshirdetés-varázsló a megadott munkaköri paraméterekből komplett, strukturált álláshirdetést készít. A beérkező pályázatoknál az AI CV-elemző automatikusan kinyeri a jelölt szakmai tapasztalatait, készségeit és elérhetőségeit, majd százalékos illeszkedési pontszámmal és szöveges értékeléssel segíti az előszűrést.",
  },
  {
    q: "Hogyan kapcsolódik az eaisyHR az eaisyDocs és eaisyBooks rendszerekhez?",
    a: "Az eaisyDocs és az eaisyHR közös platformon fut, így a felső modulváltóval egyetlen kattintással válthatsz közöttük. Minden új belépőnek automatikusan nyitható személyi dosszié az eaisyDocs-ban, ahová a szerződések és igazolások hézagmentes iktatószámmal bekerülnek. Az eaisyBooks-ból pedig egy gombnyomással átvehetők a munkavállalói és bérszámfejtési törzsadatok.",
  },
  {
    q: "Kik láthatják a bizalmas bér- és személyi adatokat?",
    a: "Az eaisyHR szigorú, többszintű jogosultságkezelést (Admin, HR Admin, Vezető, Munkavállaló, Betekintő/Auditor) és adatbázis-szintű (RLS) cégizolációt alkalmaz. Az érzékeny személyes és béradatok titkosítva tárolódnak, minden megtekintés és módosítás pedig bekerül a módosíthatatlan HR Eseménynaplóba.",
  },
  {
    q: "Használható a rendszer több cég párhuzamos kezelésére?",
    a: "Igen. Cégcsoportok esetén a bal oldalsávban található Cégválasztóval másodpercek alatt válthatsz a vállalatok között, miközben minden munkavállalói adat, műszakbeosztás, karrieroldal és riport szigorúan cégre szeparált marad.",
  },
  {
    q: "Mennyi időt vesz igénybe az eaisyHR bevezetése?",
    a: "A meglévő munkavállalói törzsadatok importálásával (vagy eaisyBooks szinkronnal) és az előre elkészített szerződés-, onboarding- és műszaksablonokkal a rendszer akár néhány nap alatt élesíthető. Egy 30–60 perces ingyenes online demó keretében a saját folyamataidon mutatjuk be a működését.",
  },
];

function Donut85() {
  const R = 50;
  const CIRC = 2 * Math.PI * R;
  return (
    <div className="relative">
      <svg viewBox="0 0 120 120" className="w-24 h-24 lg:w-[110px] lg:h-[110px]">
        <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(30,120,113,0.22)" strokeWidth="15" />
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke={C.p600}
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray={`${CIRC * 0.85} ${CIRC}`}
          transform="rotate(-108 60 60)"
        />
      </svg>
      <p
        className={`${FONT_MAIN} absolute inset-0 flex items-center justify-center font-extrabold text-2xl`}
        style={{ color: C.p600 }}
      >
        85<span className="text-sm font-bold align-top">%</span>
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-[122px] pb-14 lg:pb-20">
      {/* centered 1615px gradient frame — top edge runs below the navbar */}
      <div className="absolute top-24 bottom-0 lg:top-[110px] left-1/2 -translate-x-1/2 w-full max-w-[1615px] overflow-hidden rounded-[40px]">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #EEF8F7 0%, #F8FAFC 48%, #CCFBF1 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(30,120,113,0.085) 1.2px, transparent 1.2px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" />
      </div>

      <div className={`relative ${INNER} flex flex-col items-center`}>
        {/* brand logo pill */}
        <p
          className={`${FONT_CARD} inline-flex items-center rounded-full px-8 py-3 lg:px-10 lg:py-4 font-extrabold text-3xl lg:text-4xl leading-none`}
          style={{ border: `1px solid ${C.p600}`, color: C.p600 }}
        >
          eaisyHR
        </p>

        {/* main title */}
        <h1
          className={`${FONT_MAIN} mt-[50px] font-medium text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-center`}
          style={{ color: C.ink }}
        >
          Teljes körű, AI-támogatott HR-menedzsment a toborzástól a bérszámfejtésig
        </h1>

        {/* subtitle */}
        <p className={`${FONT_MAIN} mt-4 lg:mt-5 font-light text-base lg:text-lg leading-relaxed text-center text-black`}>
          az eaisyHR vállalati humánerőforrás-, munkaidő- és dolgozói életciklus-kezelő platformmal
        </p>

        {/* CTAs */}
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-4">
          <a
            href="#problemak"
            className={`${FONT_MAIN} inline-flex items-center justify-center w-[130px] h-[45px] rounded-xl bg-[#030213] font-normal text-base text-white transition-colors hover:bg-[#1E7871]`}
          >
            Fedezd fel
          </a>
          <button
            onClick={openDemoModal}
            className={`${FONT_MAIN} inline-flex items-center justify-center w-[130px] h-[45px] rounded-xl bg-white font-normal text-base text-black transition-colors hover:bg-black/5`}
            style={{ border: "1px solid rgba(0,0,0,0.2)" }}
          >
            Kérj demot
          </button>
        </div>

        {/* ── teaser bento grid ── */}
        <div className="mt-[50px] w-full rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-md p-4 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2.5">
            {/* left column top square */}
            <div
              className={`${TEASER_CARD} bg-white px-5 py-5 sm:col-span-1 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:aspect-square flex flex-col items-start gap-5`}
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: C.violetBg }}
              >
                <Wand2 className="w-5 h-5" strokeWidth={1.5} style={{ color: C.violet }} />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg`} style={{ color: C.dark }}>
                AI Toborzás & CV-elemzés
              </h3>
              <p className={`${FONT_MAIN} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                AI álláshirdetés-varázsló, automatikus önéletrajz-kinyerés és jelölt-illeszkedési pontozás egy kattintással.
              </p>
            </div>

            {/* left column bottom square */}
            <div
              className={`${TEASER_CARD} px-5 py-5 sm:col-span-1 lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:aspect-square flex flex-col`}
              style={{ background: "linear-gradient(180deg, #EEF8F7 0%, #98DBD5 100%)" }}
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: "#D5F2EF" }}
              >
                <Eye className="w-5 h-5" strokeWidth={1.5} style={{ color: C.p600 }} />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center">
                <p className={`${FONT_MAIN} font-bold text-4xl leading-none`} style={{ color: C.dark }}>
                  360°
                </p>
                <p className={`${FONT_MAIN} mt-1 font-medium text-lg leading-tight`} style={{ color: C.dark }}>
                  munkavállalói karton és életút
                </p>
              </div>
            </div>

            {/* tall center card: 20 funkció */}
            <a
              href="#funkciok"
              className={`${TEASER_CARD} group relative overflow-hidden sm:col-span-1 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 min-h-[280px] lg:min-h-0 block`}
              style={{
                background: "linear-gradient(165deg, #CCFBF1 0%, #EEF8F7 52%, #D5F2EF 100%)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(30,120,113,0.22)] pointer-events-none" />
              <div className="relative h-full flex flex-col gap-5 px-5 py-5">
                <div
                  className="ml-auto w-11 h-11 rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(30,120,113,0.22)" }}
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} style={{ color: C.dark }} />
                </div>
                <div>
                  <p
                    className={`${FONT_MAIN} font-semibold text-6xl lg:text-[64px] leading-none tracking-tight`}
                    style={{ color: C.dark }}
                  >
                    20
                  </p>
                  <p
                    className={`${FONT_MAIN} font-semibold text-4xl lg:text-[48px] leading-none tracking-tight`}
                    style={{ color: C.dark }}
                  >
                    funkció
                  </p>
                </div>
                <p className={`${FONT_MAIN} font-medium text-2xl lg:text-[28px] leading-snug`} style={{ color: C.dark }}>
                  ami lefedi a teljes vállalati HR-t a belépéstől a kilépésig.
                </p>
              </div>
            </a>

            {/* donut card: 85% kevesebb HR admin */}
            <div
              className={`${TEASER_CARD} sm:col-span-1 lg:col-span-1 lg:col-start-5 lg:row-start-1 lg:aspect-square px-5 py-5 flex flex-col items-center justify-center gap-3`}
              style={{ background: "linear-gradient(160deg, #EEF8F7 0%, #F8FAFC 100%)" }}
            >
              <p className={`${FONT_MAIN} font-medium text-base`} style={{ color: C.dark }}>
                Akár
              </p>
              <Donut85 />
              <p className={`${FONT_MAIN} font-medium text-base text-center`} style={{ color: C.dark }}>
                kevesebb HR adminisztráció
              </p>
            </div>

            {/* Munkaügyi compliance */}
            <div
              className={`${TEASER_CARD} bg-white sm:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-1 px-5 py-5 flex flex-col items-start gap-5`}
            >
              <div className="inline-flex items-center gap-2.5 rounded-full bg-black/[0.05] px-3.5 py-2">
                <img src={imgBadgeShield} alt="Adatbiztonság" className="h-8 w-8" loading="lazy" decoding="async" />
                <img src={imgBadgeNav} alt="Jogszabályi megfelelés" className="h-8 w-8" loading="lazy" decoding="async" />
                <img src={imgBadgeGdpr} alt="GDPR" className="h-8 w-8" loading="lazy" decoding="async" />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-tight`} style={{ color: C.dark }}>
                Munka Törvénykönyve (Mt.), T1041 és GDPR megfelelés
              </h3>
              <p className={`${FONT_MAIN} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                Automatikus munkaszerződés és Mt. 46. § tájékoztató generálás, NAV T1041 adatlap, munkaköri orvosi és
                munkavédelmi mátrix, valamint sértetlen HR eseménynapló.
              </p>
            </div>

            {/* bottom row: 3 white square feature cards */}
            {BOTTOM_CARDS.map(({ icon: Icon, chipBg, chipColor, title, desc }) => (
              <div
                key={title}
                className={`${TEASER_CARD} bg-white sm:col-span-1 lg:col-span-1 lg:aspect-square px-5 py-5 flex flex-col items-center text-center gap-5`}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                  style={{ backgroundColor: chipBg }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: chipColor }} />
                </div>
                <h3 className={`${FONT_MAIN} font-medium text-base`} style={{ color: C.dark }}>
                  {title}
                </h3>
                <p className={`${FONT_MAIN} text-[13px] leading-relaxed`} style={{ color: C.bodyText }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="problemak" className="relative w-full overflow-hidden bg-white py-20 lg:py-24">
      <div
        className="absolute left-1/2 top-[58%] w-[640px] h-[640px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(79,169,162,0.12), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow color={C.p400}>A probléma</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} mt-5 font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.dark }}
          >
            Amikor a HR-adminisztráció elviszi a fókuszt az emberekről
          </h2>
          <p className={`${FONT_MAIN} mt-5 font-light text-lg leading-relaxed max-w-[760px]`} style={{ color: C.dark }}>
            A külön vezetett táblázatok, papíralapú szabadságigénylők, kézzel szerkesztett szerződések és elfelejtett
            alkalmassági határidők felesleges kockázatot és napi szintű túlterheltséget okoznak.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          {PROBLEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-black/5 p-6 lg:p-7 flex flex-col gap-4 lg:h-[272px]"
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: C.p50 }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.p600 }} />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className={`${FONT_MAIN} font-semibold text-2xl leading-snug`} style={{ color: C.dark }}>
                  {title}
                </h3>
                <p className={`${FONT_MAIN} font-light text-xs leading-relaxed`} style={{ color: C.dark }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="megoldas" className="relative w-full bg-white pt-14 lg:pt-20 pb-20 lg:pb-24 overflow-hidden">
      <div
        className="absolute left-[18%] top-[8%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.10), transparent 70%)" }}
      />

      <div className={`${INNER_CARDS} flex flex-col items-center text-center gap-6`}>
        <SectionEyebrow color={C.p400}>A mi megoldásunk</SectionEyebrow>
        <h2
          className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight max-w-[1100px]`}
          style={{ color: C.dark }}
        >
          eaisyHR:
          <br />
          Önkiszolgáló portál. 360°-os állománykezelés. Automatizált <span style={{ color: C.p600 }}>munkaügy.</span>
        </h2>
        <p className={`${FONT_MAIN} font-light text-base leading-relaxed max-w-[960px]`} style={{ color: C.dark }}>
          Az eaisyHR egyetlen felületen kapcsolja össze a munkavállalókat, a csapatvezetőket és a HR-osztályt. Az AI-alapú
          toborzástól és a digitális onboardingtól kezdve a műszakbeosztáson, jelenlét- és szabadságkezelésen át a
          bérjegyzékekig, a teljesítményértékelésig és a hivatalos eaisyDocs személyi dossziékig minden folyamatot
          egységes, jogszabálykövető rendszerbe szervez.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#funkciok"
            className={`${FONT_MAIN} inline-flex items-center justify-center px-8 h-[50px] rounded-full font-medium text-base transition-colors hover:bg-[#1E7871]/10`}
            style={{ border: `1px solid ${C.p400}`, color: C.p600 }}
          >
            Teljes funkciólista
          </a>
          <Link
            to="/tudasbazis/eaisy-hr"
            className={`${FONT_MAIN} inline-flex items-center gap-2 justify-center px-8 h-[50px] rounded-full font-medium text-base text-white transition-opacity hover:opacity-90`}
            style={{ backgroundColor: C.p600 }}
          >
            <BookOpen className="w-4 h-4" />
            Részletes Tudásbázis & Kézikönyv
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [filter, setFilter] = useState<FeatureCategoryId | "all">("all");
  const [toastVisible, setToastVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, lastX: 0, lastT: 0, v: 0, raf: 0 });

  const catOrder = FEATURE_CATEGORIES.map((c) => c.id);
  const sorted = [...FEATURES].sort((a, b) => catOrder.indexOf(a.cat) - catOrder.indexOf(b.cat));
  const visible = filter === "all" ? sorted : sorted.filter((f) => f.cat === filter);
  const countOf = (cat: FeatureCategoryId) => FEATURES.filter((f) => f.cat === cat).length;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setToastVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 4500);
    return () => clearTimeout(t);
  }, [toastVisible]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0 });
  }, [filter]);

  function page(dir: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    stopMomentum();
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0 });
      return;
    }
    if (dir === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth });
      return;
    }
    el.scrollBy({ left: dir * el.clientWidth });
  }

  const DRAG_RATIO = 1.4;
  function stopMomentum() {
    cancelAnimationFrame(drag.current.raf);
  }
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !scrollRef.current) return;
    stopMomentum();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current.active = true;
    drag.current.startX = e.clientX;
    drag.current.scrollLeft = scrollRef.current.scrollLeft;
    drag.current.lastX = e.clientX;
    drag.current.lastT = performance.now();
    drag.current.v = 0;
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current.active || !scrollRef.current) return;
    scrollRef.current.scrollLeft =
      drag.current.scrollLeft - (e.clientX - drag.current.startX) * DRAG_RATIO;
    const now = performance.now();
    const dt = now - drag.current.lastT;
    if (dt > 0) {
      const inst = ((e.clientX - drag.current.lastX) / dt) * 16;
      drag.current.v = drag.current.v * 0.6 + inst * 0.4;
      drag.current.lastX = e.clientX;
      drag.current.lastT = now;
    }
  }
  function endDrag() {
    if (!drag.current.active) return;
    drag.current.active = false;
    const el = scrollRef.current;
    let v = -drag.current.v * DRAG_RATIO;
    if (!el || Math.abs(v) < 0.5) return;
    const step = () => {
      el.scrollLeft += v;
      v *= 0.93;
      if (Math.abs(v) >= 0.5) drag.current.raf = requestAnimationFrame(step);
    };
    drag.current.raf = requestAnimationFrame(step);
  }

  const chipCls = (active: boolean) =>
    `inline-flex items-center gap-2 h-[46px] px-5 rounded-full border ${FONT_MAIN} text-sm whitespace-nowrap transition-all duration-200 ${
      active
        ? "border-transparent text-white font-medium shadow-md"
        : "bg-white border-black/10 font-medium hover:border-[#4FA9A2]/60 hover:shadow-sm"
    }`;

  return (
    <section id="funkciok" ref={sectionRef} className="relative w-full overflow-hidden bg-white pb-20 lg:pb-24">
      <style>{`
        @keyframes features-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes swipe-hint-wiggle { 0%, 100% { transform: translateX(-7px); } 50% { transform: translateX(7px); } }
        @media (prefers-reduced-motion: reduce) { .swipe-hint-anim { animation: none !important; } }
      `}</style>

      <div
        className="absolute left-[84%] top-[32%] w-[560px] h-[560px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(79,169,162,0.12), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Funkciók - Teljes áttekintés"
          title={<>Hogyan <span style={{ color: C.p600 }}>támogat</span> az eaisyHR?</>}
          subtitle="20 szorosan összekapcsolt funkció a dolgozói önkiszolgálástól és a 360°-os személyi dossziéktól az AI toborzásig, műszakbeosztásig és teljesítményértékelésig."
          titleClass="text-4xl lg:text-[40px]"
        />

        {/* filter chips */}
        <div className="mt-14 lg:mt-20 w-full max-w-[1160px] mx-auto flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => { setFilter("all"); setToastVisible(false); }}
            className={chipCls(filter === "all")}
            style={filter === "all" ? { backgroundColor: C.p600 } : undefined}
          >
            Összes{" "}
            <span className="font-semibold" style={{ color: filter === "all" ? "rgba(255,255,255,0.9)" : C.a500 }}>
              {FEATURES.length}
            </span>
          </button>
          {FEATURE_CATEGORIES.map(({ id, label, icon: Icon }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                onClick={() => { setFilter(id); setToastVisible(false); }}
                className={chipCls(active)}
                style={active ? { backgroundColor: C.p600 } : undefined}
              >
                <Icon
                  className="w-4 h-4"
                  strokeWidth={1.75}
                  style={{ color: active ? "rgba(255,255,255,0.9)" : C.p400 }}
                />
                <span className="font-medium" style={{ color: active ? "white" : C.dark }}>{label}</span>
                <span className="font-semibold" style={{ color: active ? "rgba(255,255,255,0.9)" : C.a500 }}>
                  {countOf(id)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* horizontally scrollable card carousel */}
      <div className={`relative ${INNER_CARDS} mt-8 lg:mt-10`}>
        <div
          key={filter}
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onScroll={() => setToastVisible(false)}
          className={`flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-proximity pb-2 select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden ${
            visible.length < 4 ? "lg:justify-center" : ""
          }`}
          style={{ scrollbarWidth: "none", animation: "features-fade-in 0.4s ease both" }}
        >
          {visible.map(({ icon: FeatIcon, cat, title, desc }) => {
            const category = FEATURE_CATEGORIES.find((c) => c.id === cat)!;
            const CatIcon = category.icon;
            return (
              <div
                key={title}
                className="snap-start shrink-0 grow-0 basis-[85%] sm:basis-[calc(50%_-_12px)] lg:basis-[calc((100%_-_72px)/_4)] lg:min-h-[426px] relative overflow-hidden bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 lg:p-10 flex flex-col items-center text-center gap-6"
                style={{ border: "1px solid rgba(30,120,113,0.32)" }}
              >
                <span
                  className={`${FONT_MAIN} inline-flex items-center gap-1.5 font-light text-xs leading-none whitespace-nowrap`}
                  style={{ color: category.color }}
                >
                  <CatIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {category.label}
                </span>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: category.color }}
                >
                  <FeatIcon className="w-6 h-6" strokeWidth={1.75} style={{ color: "white" }} />
                </div>
                <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.dark }}>
                  {title}
                </h3>
                <p className={`${FONT_MAIN} font-light text-[11.5px] leading-[1.7]`} style={{ color: C.dark }}>
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* chevron paging */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => page(-1)}
            aria-label="Előző funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#1E7871]/10"
            style={{ border: "1px solid rgba(30,120,113,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p600 }} />
          </button>
          <button
            onClick={() => page(1)}
            aria-label="Következő funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#1E7871]/10"
            style={{ border: "1px solid rgba(30,120,113,0.5)" }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p600 }} />
          </button>
        </div>

        {/* swipe hint toast */}
        <div
          aria-hidden
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none transition-all duration-500 ${
            toastVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-white border border-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.18)] flex items-center justify-center">
            <div className="swipe-hint-anim" style={{ animation: "swipe-hint-wiggle 1.6s ease-in-out infinite" }}>
              <MoveHorizontal className="w-7 h-7" strokeWidth={2} style={{ color: C.p600 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoCtaStrip() {
  return (
    <section className="w-full bg-white pb-20 lg:pb-24">
      <div className={INNER_CARDS}>
        <div
          className="relative overflow-hidden rounded-[24px] flex flex-col lg:flex-row"
          style={{
            background: "linear-gradient(90deg, rgba(30,120,113,0.13) 0%, rgba(79,169,162,0.06) 55%, rgba(79,169,162,0) 100%)",
          }}
        >
          <div className="relative lg:w-[46%] min-h-[280px] lg:min-h-0">
            <img
              src={imgDemo}
              alt="Demó egy laptop körül"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-6 bg-white/70 backdrop-blur-sm px-6 py-3">
              {[
                { icon: Clock, label: "30-60 perc" },
                { icon: Crosshair, label: "Google Meet" },
                { icon: Tag, label: "Ingyenes" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className={`${FONT_MAIN} inline-flex items-center gap-1.5 text-xs`}
                  style={{ color: C.dark }}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start justify-center gap-6 px-8 py-10 lg:px-14 lg:py-16">
            <SectionEyebrow color={C.p600}>Demo</SectionEyebrow>
            <h2
              className={`${FONT_MAIN} font-medium text-4xl lg:text-[36px] leading-tight tracking-tight`}
              style={{ color: C.dark }}
            >
              Ne csak elképzeld.
              <br />
              Nézd meg <span style={{ color: C.p600 }}>élőben.</span>
            </h2>
            <p className={`${FONT_MAIN} font-light text-base leading-relaxed`} style={{ color: C.dark }}>
              Minden cég HR-folyamata más. Mutasd meg, hogyan zajlik nálatok a beléptetés, a szabadságolás vagy a
              műszakbeosztás, és élőben bemutatjuk, hogyan egyszerűsíti le mindezt az eaisyHR.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={openDemoModal}
                className={`${FONT_MAIN} inline-flex items-center justify-center px-8 h-[46px] rounded-full font-medium text-sm tracking-wider text-white transition-opacity hover:opacity-90`}
                style={{ backgroundColor: C.p600 }}
              >
                Időpontot foglalok
              </button>
              <Link
                to="/tudasbazis/eaisy-hr"
                className={`${FONT_MAIN} inline-flex items-center gap-2 justify-center px-6 h-[46px] rounded-full font-medium text-sm transition-colors hover:bg-black/5`}
                style={{ border: `1px solid ${C.p400}`, color: C.p600 }}
              >
                Képernyőképes Kézikönyv →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section id="elonyok" className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <style>{`@keyframes benefits-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <div className={`relative ${INNER_CARDS} flex flex-col lg:flex-row gap-12 lg:gap-16`}>
        <div className="flex flex-col justify-center gap-6 lg:w-[40%]">
          <SectionEyebrow color={C.p400}>Előnyök</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.dark }}
          >
            Amiért minden szereplő
            <br className="hidden lg:block" />
            <span style={{ color: C.p600 }}> szeretni fogja</span>
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed`} style={{ color: C.dark }}>
            Másra van szüksége a cégvezetőnek, a napi munkaügyet irányító HR-esnek és a szabadságot igénylő
            munkatársnak. Az eaisyHR minden szerepkörnek saját, letisztult munkakörnyezetet biztosít.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-wrap items-center justify-start gap-2">
            {ROLES.map((r, i) => {
              const isActive = i === active;
              return (
                <button
                  key={r.id}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`${FONT_MAIN} inline-flex items-center justify-center px-5 h-10 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                    isActive ? "" : "text-[#264350] hover:opacity-60"
                  }`}
                  style={isActive ? { border: `1px solid ${r.numColor}`, color: r.numColor } : undefined}
                >
                  {r.label}
                </button>
              );
            })}
          </div>

          <div
            key={role.id}
            className="flex flex-col gap-9 lg:gap-10 min-h-[412px]"
            style={{ animation: "benefits-fade-in 0.4s ease both" }}
          >
            {role.benefits.map(({ title, desc }, i) => (
              <div key={title} className="flex items-start gap-5">
                <span
                  className={`${FONT_MAIN} font-medium text-4xl lg:text-5xl leading-none shrink-0`}
                  style={{ color: role.numColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className={`${FONT_MAIN} font-semibold text-base`} style={{ color: C.dark }}>
                    {title}
                  </h3>
                  <p className={`${FONT_MAIN} font-light text-xs leading-relaxed`} style={{ color: C.bodyText }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoForSection() {
  const N = WHO_FOR.length;
  const PER_VIEW = 3;
  const [first, setFirst] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const maxFirst = N - PER_VIEW;

  function go(delta: 1 | -1) {
    setDir(delta);
    const positions = maxFirst + 1;
    setFirst((v) => (v + delta + positions) % positions);
  }

  function WhoCard({ item, index }: { item: (typeof WHO_FOR)[number]; index: number }) {
    return (
      <div
        className="group relative flex-1 rounded-[24px] px-8 py-10 flex flex-col items-center text-center gap-5 bg-white overflow-hidden border transition-all duration-500 hover:shadow-xl"
        style={{ borderColor: "rgba(30,120,113,0.35)" }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "#1E7871" }}
        />
        <span className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 bg-[#4FA9A2] group-hover:bg-[#092C2A]">
          <span className={`${FONT_MAIN} font-semibold text-base text-white`}>{index}</span>
        </span>
        <h3
          className={`${FONT_MAIN} relative font-semibold text-xl leading-snug text-[#264350] group-hover:text-white transition-colors duration-500`}
        >
          {item.title}
        </h3>
        <p
          className={`${FONT_MAIN} relative font-light text-sm leading-relaxed transition-colors duration-500 text-[#264350]/80 group-hover:text-white/85`}
        >
          {item.desc}
        </p>
      </div>
    );
  }

  return (
    <section id="kinek-valo" className="relative w-full bg-white py-16 lg:py-20 overflow-hidden">
      <style>{`
        @keyframes who-slide-right { from { opacity: 0; transform: translateX(56px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes who-slide-left { from { opacity: 0; transform: translateX(-56px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
      <div
        className="absolute left-[84%] top-[35%] w-[560px] h-[560px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(79,169,162,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Kinek való?"
          eyebrowColor={C.p400}
          title="Kik számára jelent megoldást az eaisyHR?"
          subtitle="Öt vállalati élethelyzet, ahol a strukturált HR-folyamatok és a dolgozói önkiszolgálás azonnal mérhető időt és biztonságot hoznak."
          titleClass="text-4xl lg:text-[40px]"
        />

        <div
          key={first}
          className="mt-12 lg:mt-16 hidden lg:flex items-stretch gap-6"
          style={{ animation: `${dir === 1 ? "who-slide-right" : "who-slide-left"} 0.45s cubic-bezier(0.22,1,0.36,1) both` }}
        >
          {WHO_FOR.slice(first, first + PER_VIEW).map((item, i) => (
            <WhoCard key={item.num} item={item} index={first + i + 1} />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 lg:hidden">
          {WHO_FOR.map((item, i) => (
            <WhoCard key={item.num} item={item} index={i + 1} />
          ))}
        </div>

        <div className="mt-10 hidden lg:flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Előző helyzetek"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#1E7871]/10"
            style={{ border: "1px solid rgba(30,120,113,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p600 }} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Következő helyzetek"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#1E7871]/10"
            style={{ border: "1px solid rgba(30,120,113,0.5)" }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p600 }} />
          </button>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="gyik" className="relative w-full bg-white pb-20 lg:pb-24 overflow-hidden">
      <div
        className="absolute left-[12%] top-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,169,162,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col lg:flex-row gap-12 lg:gap-16`}>
        <div className="flex flex-col gap-6 lg:w-[38%]">
          <SectionEyebrow color={C.p400}>GYIK</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.dark }}
          >
            Amit meg szoktak <span style={{ color: C.p600 }}>kérdezni</span>
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed`} style={{ color: C.dark }}>
            Válaszok a leggyakrabban felmerülő kérdésekre — a dolgozói önkiszolgálástól és a magyar munkajogi
            megfeleléstől az eaisyDocs/eaisyBooks integrációig.
          </p>
        </div>

        <div className="flex-1 flex flex-col">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                >
                  <span className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.dark }}>
                    {f.q}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={
                      open
                        ? { border: `1px solid ${C.p600}`, color: C.p600 }
                        : { border: "1px solid rgba(0,0,0,0.25)", color: "rgba(0,0,0,0.45)" }
                    }
                  >
                    {open ? (
                      <Minus className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2} />
                    )}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className={`${FONT_MAIN} pb-6 font-light text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const DEMO_STEPS = [
  "Bemutatjuk a Dolgozói Portált, az online jelenlét-blokkolást és a szabadságigénylést",
  "Áttekintjük a 360°-os munkavállalói kartont és az egykattintásos szerződés/T1041 generálást",
  "Élőben kipróbáljuk az AI álláshirdetés-varázslót, a jelölt Kanbant és az AI CV-elemzést",
  "Megmutatjuk a műszakbeosztót, az orvosi/munkavédelmi mátrixot és a 9-box értékelést",
  "Megbeszéljük a bevezetés menetét és a létszámhoz igazodó árazást",
];

const DEMO_REASONS = [
  "Ha szeretnéd kiváltani az Excel-alapú szabadság- és jelenlét-nyilvántartást",
  "Ha gyorsítani akarod a szerződéskötést és az új belépők onboardingját",
  "Ha biztosítani szeretnéd az orvosi és munkavédelmi határidők betartását",
  "Ha átlátható teljesítményértékelést és vezetői HR riportokat keresel",
];

function ContactSection() {
  return (
    <section id="demo" className="w-full pt-16 lg:pt-20 pb-16 lg:pb-20" style={{ backgroundColor: C.p900 }}>
      <div className={INNER}>
        <div
          className="relative overflow-hidden rounded-[28px] px-8 py-12 lg:px-16 lg:py-14"
          style={{ border: "1px solid rgba(152,219,213,0.3)" }}
        >
          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex flex-col items-start gap-6 lg:w-[55%]">
              <SectionEyebrow color={C.p200}>Következő lépés</SectionEyebrow>
              <h2
                className={`${FONT_MAIN} font-medium text-4xl lg:text-[44px] leading-[1.15] tracking-tight`}
                style={{ color: C.p200 }}
              >
                Nézd meg
                <br />
                működés közben!
              </h2>
              <p className={`${FONT_MAIN} font-light text-base leading-relaxed text-white/80`}>
                Megmutatjuk, hogyan működik az eaisyHR a te szervezetedben — a saját munkaköreiden, műszakrendeden és
                jóváhagyási folyamataidon keresztül.
              </p>
              <p className={`${FONT_MAIN} font-medium text-sm text-white/90 mt-2`}>
                Mi történik a demó során?
              </p>
              <ul className="flex flex-col gap-2.5">
                {DEMO_STEPS.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-[5px] h-[5px] rounded-full mt-[7px] shrink-0" style={{ backgroundColor: C.p200 }} />
                    <span className={`${FONT_MAIN} font-light text-sm leading-relaxed text-white/75`}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${FONT_MAIN} font-medium text-sm leading-relaxed text-white mt-2`}>
                A demó ingyenes és nem általános termékbemutató — a te csapatod HR kihívásaira fókuszálunk.
              </p>
            </div>

            <div className="flex flex-col items-start gap-7 lg:flex-1 lg:pt-14">
              <h3 className={`${FONT_MAIN} font-medium text-2xl lg:text-[28px] leading-snug text-white`}>
                Mikor érdemes
                <br />
                demót kérni?
              </h3>
              <div className="flex flex-col items-start gap-3">
                {DEMO_REASONS.map((reason) => (
                  <span
                    key={reason}
                    className={`${FONT_MAIN} inline-flex items-center px-5 py-2.5 rounded-full font-light text-[13px] text-white/90`}
                    style={{ border: "1px solid rgba(152,219,213,0.4)" }}
                  >
                    {reason}
                  </span>
                ))}
              </div>
              <button
                onClick={openDemoModal}
                className={`${FONT_MAIN} mt-2 inline-flex items-center justify-center px-9 h-[54px] rounded-full font-semibold text-sm tracking-wider text-white transition-opacity hover:opacity-90`}
                style={{ backgroundColor: C.p400 }}
              >
                Szeretném megnézni
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EaisyHr() {
  return (
    <div>
      <Seo
        title="eaisyHR – AI-támogatott HR-menedzsment, munkaidő és dolgozói életút | eaisy"
        description="Az eaisyHR egyetlen platformon egyesíti a Dolgozói Portált, a 360°-os személyi dossziékat, a szabadság- és műszakbeosztást, a bérszámfejtési előkészítést, az AI toborzást és a teljesítményértékelést."
        path="/eaisy-hr"
        ogImage={`${SITE_URL}/og-image-eaisyhr.jpg`}
        jsonLd={[
          organizationSchema(),
          softwareAppSchema({
            name: "eaisyHR",
            description:
              "AI-támogatott vállalati HR-menedzsment rendszer: dolgozói önkiszolgáló portál, 360°-os munkavállalói karton, munkaidő és műszakbeosztás, bérszámfejtés, munkaügyi megfelelőség, ATS toborzás és teljesítményértékelés.",
            path: "/eaisy-hr",
          }),
          faqSchema(FAQS),
        ]}
      />
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <DemoCtaStrip />
      <FeaturesSection />
      <BenefitsSection />
      <WhoForSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
