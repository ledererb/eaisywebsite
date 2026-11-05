import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  Wand2,
  Eye,
  ArrowUpRight,
  FolderOpen,
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
  Users,
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
  Bell,
  Search,
  Inbox,
  Archive,
  Sliders,
  Lock,
  Mail,
  ScanLine,
  GitBranch,
  History,
  BookOpen,
} from "lucide-react";
import imgDemo from "@/imports/demo-img.png";
import { openDemoModal } from "@/app/Root";
import { Seo, SITE_URL, organizationSchema, softwareAppSchema, faqSchema } from "@/app/components/Seo";
import { SectionEyebrow, SectionHeader } from "@/app/components/Section";
import imgBadgeShield from "@/imports/EaisyBooks/badge-shield.png";
import imgBadgeNav from "@/imports/EaisyBooks/badge-nav.png";
import imgBadgeGdpr from "@/imports/EaisyBooks/badge-gdpr.png";

// ── eaisyDocs palette ────────────────────────────────────────────────────────
const C = {
  // primary (mély indigókék — eaisyDocs márkaszín)
  p50: "#EEF0FF",
  p200: "#A5B4FC",
  p400: "#4353B5",
  p600: "#232D7B",
  p800: "#151B4D",
  p900: "#0C1033",
  // accent (élénk cián-kék & borostyán)
  a50: "#EFF6FF",
  a300: "#7DD3FC",
  a500: "#0EA5E9",
  a700: "#0369A1",
  a900: "#0C4A6E",
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
  "rounded-2xl ring-1 ring-inset ring-[rgba(35,45,123,0.22)] transition-all duration-300 hover:-translate-y-1";

// ── hero bottom square cards ─────────────────────────────────────────────────
const BOTTOM_CARDS = [
  {
    icon: Inbox,
    chipBg: C.p50,
    chipColor: C.p600,
    title: "Többcsatornás érkeztetés",
    desc: "E-mail (IMAP), eaisyBill számlaátvétel, kötegelt szkenner és kézi érkeztetés egy helyen",
  },
  {
    icon: FolderOpen,
    chipBg: C.violetBg,
    chipColor: C.violet,
    title: "Hézagmentes iktatókönyv",
    desc: "Alszámos ügyiratkezelés, előzmény-összerendelés, szignálás és teljes életciklus-követés",
  },
  {
    icon: Archive,
    chipBg: C.a50,
    chipColor: C.a500,
    title: "Irattár és selejtezés",
    desc: "PDF/A-2b archiválás, megőrzési idők figyelése és hivatalos selejtezési jegyzőkönyvek",
  },
];

// ── problems section ─────────────────────────────────────────────────────────
const PROBLEMS: { icon: typeof FileText; title: string; desc: string }[] = [
  {
    icon: Mail,
    title: "Szétszórt bejövő dokumentumok",
    desc: "Szerződések e-mailben, számlák a számlázóban, hivatalos levelek postán vagy Cégkapun: központi érkeztetés nélkül követhetetlen, mi érkezett be és mi vár még feldolgozásra.",
  },
  {
    icon: FileQuestion,
    title: "Percekig tartó keresgélés",
    desc: "„Melyik mappába mentettük a tavalyi keretszerződés módosítását?” — amikor egy ügyfél, könyvelő vagy hatóság azonnal kér egy iratot, a mappákban és postafiókokban való kutatás rengeteg időt emészt fel.",
  },
  {
    icon: AlertTriangle,
    title: "Kézi adatbevitel és elütések",
    desc: "A küldő partner nevének, adószámának, a hivatkozott számnak és a határidőknek a manuális begépelése lassú, monoton, és minden elütés későbbi visszakeresési hibához vezet.",
  },
  {
    icon: Users,
    title: "Tisztázatlan felelősök és feladatok",
    desc: "Kihez került a bejövő felszólítás? Megválaszoltuk már a hatósági megkeresést? Átlátható szignálás és feladatkövetés nélkül az ügyiratok könnyen elakadnak az osztályok között.",
  },
  {
    icon: CalendarClock,
    title: "Lejáró megőrzési idők és selejtezési káosz",
    desc: "Az irattári tételek eltérő megőrzési idejének fejben tartása és a szabályszerű selejtezési jegyzőkönyvek összeállítása manuálisan hatalmas adminisztratív teher.",
  },
  {
    icon: Lock,
    title: "Jogosultsági és audit kockázatok",
    desc: "Megosztott hálózati mappákban bárki beleolvashat bizalmas iratokba, vagy véletlenül felülírhat egy szerződést — miközben utólag nem bizonyítható, ki és mikor módosította a fájlt.",
  },
];

// ── features section: categories + 18 feature cards ─────────────────────────
type FeatureCategoryId = "erkeztetes" | "dosszie" | "feladat" | "irattar" | "ai";

const FEATURE_CATEGORIES: {
  id: FeatureCategoryId;
  label: string;
  icon: typeof FolderOpen;
  color: string;
  soft: string;
  deep: string;
}[] = [
  { id: "erkeztetes", label: "Érkeztetés és iktatás", icon: Inbox, color: "#4353B5", soft: "rgba(67,83,181,0.18)", deep: "#232D7B" },
  { id: "dosszie", label: "Ügyiratok és életciklus", icon: FolderOpen, color: "#232D7B", soft: "rgba(35,45,123,0.14)", deep: "#151B4D" },
  { id: "feladat", label: "Feladatok és partnerek", icon: Users, color: "#0EA5E9", soft: "rgba(14,165,233,0.16)", deep: "#0369A1" },
  { id: "irattar", label: "Irattár és audit", icon: Archive, color: "#151B4D", soft: "rgba(21,27,77,0.10)", deep: "#0C1033" },
  { id: "ai", label: "AI és keresés", icon: Sparkles, color: "#623CEA", soft: "rgba(98,60,234,0.16)", deep: "#3B0764" },
];

const FEATURES: { cat: FeatureCategoryId; icon: typeof FileText; title: string; desc: string }[] = [
  // érkeztetés és iktatás
  {
    cat: "erkeztetes",
    icon: Inbox,
    title: "Többcsatornás Bejövő sor valós idejű szinkronnal",
    desc: "Postai, személyes, cégkapus, szkennelt és e-mailes küldemények központi fogadása hézagmentes érkeztetőszámmal (pl. E/2026/00001) és SHA-256 integritási lenyomattal. Realtime szinkron és dupla iktatás elleni védelem.",
  },
  {
    cat: "erkeztetes",
    icon: Mail,
    title: "Automatikus IMAP e-mail érkeztetés és PDF/A konverzió",
    desc: "A beérkező e-maileket a rendszer AI spamszűrőn futtatja át, a levél törzséből szabványos PDF/A-2b dokumentumot generál, és a csatolmányokkal együtt automatikusan a Bejövő sorba érkezteti.",
  },
  {
    cat: "erkeztetes",
    icon: ScanLine,
    title: "Kötegelt szkennelés vonalkódos elválasztólappal",
    desc: "Nyomtatható szabványos A4-es eaisyDocs elválasztólap: a tömegesen beszkennelt PDF köteget a rendszer automatikusan szétvágja az elválasztólapok mentén, az elválasztókat eltávolítja, az iratokat pedig külön érkezteti.",
  },
  {
    cat: "erkeztetes",
    icon: FileCheck,
    title: "Közvetlen eaisyBill számlaátvétel és melléklet-szétválasztás",
    desc: "Az eaisyBill-ben keletkezett bejövő és kimenő számlák egyetlen kattintással átvehetők a Bejövő sorba. Ha egy küldeményben több külön ügyhöz tartozó csatolmány érkezik, azok önálló irattá választhatók szét.",
  },
  // ügyiratok és életciklus
  {
    cat: "dosszie",
    icon: FolderOpen,
    title: "Hézagmentes Iktatókönyv és alszámos dossziékezelés",
    desc: "Cégspecifikus előtaggal (pl. DOCS/2026/00001) vezetett iktatókönyv. Egy ügyirat (dosszié) alatt minden összetartozó bejövő, belső és kimenő irat növekvő alszámon (/1, /2, /3) követhető végig.",
  },
  {
    cat: "dosszie",
    icon: History,
    title: "Változathatatlan fájlverzió-kezelés és PDF/A archiválás",
    desc: "Minden feltöltött dokumentumból automatikusan elkészül a hosszú távú megőrzést garantáló PDF/A példány. Módosításkor a korábbi fájl nem íródik felül, hanem új verziószámmal (v2, v3...) és indoklással bővül.",
  },
  {
    cat: "dosszie",
    icon: FileSignature,
    title: "Kimenő válaszlevelek és sablonkezelő",
    desc: "Közvetlenül az ügyiratból generálhatók formázott válaszlevelek dinamikus változókkal, amelyek automatikusan megkapják a következő alszámot, és követhető az expediálási (kiküldési/postázási) állapotuk.",
  },
  {
    cat: "dosszie",
    icon: GitBranch,
    title: "Polimorf kapcsolódások és fizikai helykövetés",
    desc: "Az ügyiratok összekapcsolhatók partnerekkel, számlákkal, szerződésekkel, projektekkel vagy eaisyHR munkavállalói dossziékkal. Papíralapú iratoknál Polc/Doboz koordináta és fizikai kölcsönzési napló is vezethető.",
  },
  // feladatok és partnerek
  {
    cat: "feladat",
    icon: LayoutDashboard,
    title: "Saját feladataim: Kanban, Lista és Naptár nézet",
    desc: "A rád szignált ügyiratok és részfeladatok átlátható kezelése Kanban táblán, listában vagy határidő-naptárban. Elintézés előtt a rendszer automatikusan ellenőrzi, maradt-e nyitott feladat a dossziéban.",
  },
  {
    cat: "feladat",
    icon: CalendarClock,
    title: "Távolléti feladat-delegálás és helyettesítés",
    desc: "Szabadság vagy távollét idejére kijelölhető helyettesítő munkatárs: a helyettesített kolléga ügyiratai és feladatai automatikusan megjelennek a helyettes Vezérlőpultján és feladatlistájában.",
  },
  {
    cat: "feladat",
    icon: Building2,
    title: "Központi Partnertörzs adószám-validációval",
    desc: "Vevők, szállítók, hatóságok és magánszemélyek nyilvántartása belföldi és EU/nemzetközi adószám-ellenőrzéssel, kapcsolattartókkal, eaisyBill szinkronnal és partnerenkénti teljes iratforgalmi idővonallal.",
  },
  // irattár és audit
  {
    cat: "irattar",
    icon: Archive,
    title: "Digitális Irattár, megőrzési idők és selejtezési jegyzőkönyv",
    desc: "Az irattári tételszámok alapján a rendszer automatikusan számolja a megőrzési idő végét, listázza a selejtezhető ügyiratokat, támogatja a vezetői jóváhagyást és nyomtatható hivatalos selejtezési jegyzőkönyvet generál.",
  },
  {
    cat: "irattar",
    icon: ShieldCheck,
    title: "4 szintű biztonsági minősítés és Explicit Megosztás",
    desc: "Nyílt, Belső, Bizalmas és Szigorúan bizalmas minősítési szintek személyre szabott betekintési korláttal. Osztályokon átívelő ügyeknél egyedi, indoklással ellátott Explicit Megosztás adható.",
  },
  {
    cat: "irattar",
    icon: BarChart3,
    title: "Sértetlen Eseménynapló (Audit) és 2FA/MFA védelem",
    desc: "A 335/2005. Korm. rendeletnek és a GDPR-nak megfelelő, visszavonhatatlan (append-only) audit napló minden megtekintésről, letöltésről és módosításról, CSV/PDF exporttal és TOTP kétlépcsős azonosítással.",
  },
  // ai és keresés
  {
    cat: "ai",
    icon: Wand2,
    title: "AI Kitöltés (Hibrid OCR + Gemini Vision)",
    desc: "Egyetlen kattintással kiolvassa a csatolt dokumentumból az ügy tárgyát, a valódi kibocsátó partnert, a belföldi és EU adószámokat, a hivatkozott számot, a határidőt, és javaslatot tesz az irattári tételszámra.",
  },
  {
    cat: "ai",
    icon: Sparkles,
    title: "Intelligens előzmény-felismerés (% bizonyossággal)",
    desc: "Az AI és a szabálymotor összeveti a beérkező iratot a nyitott és lezárt ügyiratokkal (pl. hivatkozott szerződésszám vagy helyesbített számlaszám alapján), és egykattintásos alszámos csatolást ajánl fel.",
  },
  {
    cat: "ai",
    icon: Search,
    title: "Globális hibrid és szemantikus keresőközpont",
    desc: "Postgres teljes szöveges (FTS) és AI szemantikus vektorkeresés egyben: tartalmi jelentés alapján is megtalálja a dokumentumokat. A mentett keresési profilokhoz automatikus in-app értesítési riasztás kapcsolható.",
  },
  {
    cat: "ai",
    icon: Sliders,
    title: "Determinisztikus iktatási szabályok és AI Prompt Könyvtár",
    desc: "Partnerre, kulcsszóra vagy dokumentumtípusra épülő automatikus besorolási szabályok, valamint cégspecifikus egyedi AI prompt utasítások, amelyekkel az AI a vállalat saját iratkezelési logikájára tanítható.",
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
    fill: "#232D7B",
    numColor: "#232D7B",
    benefits: [
      {
        title: "Teljes átláthatóság és határidő-kontroll",
        desc: "A Vezérlőpulton egyetlen pillantással látható a bejövő iratforgalom, a kritikus határidők száma és az egyes szervezeti egységek terhelése — nincs több elveszett vagy elfelejtett hivatalos levél.",
      },
      {
        title: "Jogszabályi és audit megfelelőség",
        desc: "A hézagmentes iktatószámozás, a PDF/A-2b archiválás, a 4 szintű titkosítási minősítés és a visszavonhatatlan eseménynapló garantálja az auditbiztos működést.",
      },
      {
        title: "Többcéges működés egyetlen felületen",
        desc: "Ha több vállalkozást vezetsz, a bal felső cégválasztóval másodpercek alatt válthatsz közöttük, miközben az eaisyBill-ből és az eaisyHR-ből minden adat szinkronban marad.",
      },
      {
        title: "Drasztikusan kevesebb adminisztrációs költség",
        desc: "Az AI-alapú metaadat-kinyerés és az automatikus iktatási szabályok a manuális rögzítési idő töredékére csökkentik az irodai adminisztrációt.",
      },
    ],
  },
  {
    id: "iktato",
    label: "Az iktató és irodavezető",
    fill: "#4353B5",
    numColor: "#4353B5",
    benefits: [
      {
        title: "AI Kitöltés gépelés helyett",
        desc: "Az osztott képernyős iktatópultban bal oldalon látod a dokumentumot, jobb oldalon pedig az AI egy kattintással kitölti a tárgyat, partnert, adószámot és irattári tételt — neked csak jóvá kell hagynod.",
      },
      {
        title: "Kötegelt szkennelés és automatikus szétvágás",
        desc: "Nem kell egyesével szkennelni a napi postát: a vonalkódos elválasztólapokkal egyben beolvasott köteget az eaisyDocs automatikusan önálló iratokra bontja.",
      },
      {
        title: "Automatikus előzmény-összerendelés",
        desc: "A rendszer felismeri, melyik korábbi ügyirathoz tartozik az új beadvány vagy módosító számla, és egyetlen kattintással a megfelelő dosszié következő alszámára iktatja.",
      },
      {
        title: "stresszmentes irattározás és selejtezés",
        desc: "A rendszer automatikusan figyeli a megőrzési időket, összegyűjti a selejtezhető dossziékat, és gombnyomásra előállítja a nyomtatható selejtezési jegyzőkönyvet.",
      },
    ],
  },
  {
    id: "ugyintezo",
    label: "Az ügyintéző csapat",
    fill: "#0EA5E9",
    numColor: "#0EA5E9",
    benefits: [
      {
        title: "Azonnali tartalmi visszakeresés",
        desc: "A hibrid (kulcsszavas + AI szemantikus) keresővel másodpercek alatt előkerül bármelyik szerződés, számla vagy melléklet — még akkor is, ha nem emlékszel a pontos címére.",
      },
      {
        title: "Egyértelmű napi teendők és helyettesítés",
        desc: "A Saját feladataim nézetben (Kanban, Lista, Naptár) mindenki pontosan látja a rá szignált ügyiratokat, szabadság idején pedig a távolléti delegálás biztosítja a zökkenőmentes átadást.",
      },
      {
        title: "Csapatmunka belső megjegyzésekkel",
        desc: "Az ügyiratok mellett @említésekkel és fájlcsatolással zajlik a belső egyeztetés, a sablonos válaszlevelek pedig közvetlenül a dossziéból elkészíthetők.",
      },
      {
        title: "Tiszta verziókövetés felülírás nélkül",
        desc: "Mindenki mindig a legfrissebb dokumentumverzióval (v2, v3...) dolgozik, miközben a korábbi állapotok is bármikor visszanézhetők.",
      },
    ],
  },
];

// ── who-for section: 5 organization types ────────────────────────────────────
const WHO_FOR: { icon: typeof FolderOpen; num: string; title: string; desc: string }[] = [
  {
    icon: TrendingUp,
    num: "01",
    title: "Növekvő KKV-knak és cégcsoportoknak",
    desc: "Ahol a beérkező szerződések, számlák és hivatalos levelek mennyisége elérte azt a szintet, ahol az e-mail fiókok és megosztott mappák már átláthatatlanok — különösen több cég párhuzamos kezelésekor.",
  },
  {
    icon: Layers,
    num: "02",
    title: "Szabályozott, audit-érzékeny szervezeteknek",
    desc: "Ahol jogszabályi vagy iparági előírás a hézagmentes iktatószámozás, a PDF/A archiválás, a szigorú jogosultságkezelés, a megőrzési idők betartása és a teljes körű eseménynaplózás.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Sok szerződéssel és ügyféllel dolgozó cégeknek",
    desc: "Ahol naponta tucatnyi partnerrel zajlik írásos egyeztetés, és kritikus, hogy minden módosítás, melléklet, válaszlevél és jóváhagyási feladat egyetlen közös ügyirat-dossziéban legyen visszakereshető.",
  },
  {
    icon: Laptop,
    num: "04",
    title: "Papírmentes irodára átálló csapatoknak",
    desc: "Ahol a fizikai postát és a papíralapú archívumot szeretnék kötegelt szkenneléssel, hibrid OCR szövegfelismeréssel és fizikai Polc/Doboz helykövetéssel fokozatosan digitalizálni.",
  },
  {
    icon: Award,
    num: "05",
    title: "Az eaisy ökoszisztémát használó vállalkozásoknak",
    desc: "Ahol az eaisyBill számlái és az eaisyHR munkaügyi dokumentumai automatikusan, emberi kéz érintése nélkül érkeztethetők és iktathatók a központi vállalati irattárba.",
  },
];

// ── faq section ──────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Hogyan kerülnek be a dokumentumok az eaisyDocs rendszerébe?",
    a: "Négy úton: (1) automatikus IMAP e-mail szinkronnal, amely a leveleket és csatolmányaikat közvetlenül a Bejövő sorba érkezteti; (2) egykattintásos átvétellel az eaisyBill számlázóból; (3) kötegelt szkenneléssel (vonalkódos elválasztólapokkal vagy hotfolder mappából); illetve (4) kézi feltöltéssel bármilyen fájltípusból.",
  },
  {
    q: "Mit csinál pontosan az AI Kitöltés az iktatás során?",
    a: "A hibrid OCR és a Gemini Vision modell elolvassa a csatolt PDF vagy képfájl tartalmát, kinyeri az ügy tárgyát, a dokumentum valódi kibocsátóját (megkülönböztetve a továbbító e-mail címétől), a belföldi és EU adószámokat, a hivatkozott iratszámot és a határidőt, valamint javaslatot tesz a célszervezetre, az irattári tételszámra és a kapcsolódó előzmény-ügyiratra.",
  },
  {
    q: "Megfelel a rendszer a hazai iratkezelési és GDPR előírásoknak?",
    a: "Igen. Az eaisyDocs hézagmentes érkeztető- és iktatószámozást, SHA-256 fájlintegritás-ellenőrzést, automatikus PDF/A-2b archiválást, változathatatlan verziókövetést, irattári megőrzési idő számítást, hivatalos selejtezési jegyzőkönyvet és visszavonhatatlan (append-only) eseménynaplót biztosít.",
  },
  {
    q: "Hogyan szabályozható, hogy ki melyik iratot láthatja a cégen belül?",
    a: "A rendszer cég-specifikus szerepköröket (Admin, Vezető, Munkavállaló / Iktató / Betekintő), modulonként külön olvasási és írási jogosultságokat, szervezeti egység (osztály) szintű szeparációt és 4 fokozatú biztonsági minősítést (Nyílt, Belső, Bizalmas, Szigorúan bizalmas) alkalmaz. Egyedi ügyekhez külön Explicit Megosztás is adható.",
  },
  {
    q: "Hogyan működik az AI szemantikus kereső?",
    a: "A központi kereső egyszerre használ kulcsszavas Postgres FTS keresést és AI vektorkeresést. Így akkor is megtalálja a keresett dokumentumot, ha nem a pontos szót, hanem a tartalmi jelentést írod be. A gyakori szűrések elmenthetők, és automatikus harang-értesítés (Alert) is kérhető rájuk.",
  },
  {
    q: "Kezelhető több cég is egyetlen fiókkal?",
    a: "Igen. A bal oldalsávban található Cégválasztóval egyetlen kattintással válthatsz a vállalataid között, meglévő cégeidet átveheted az eaisyBill-ből, vagy meghívó kóddal (Share Token) csatlakozhatsz más szervezetekhez.",
  },
  {
    q: "Mennyibe kerül az eaisyDocs és mennyi idő a bevezetése?",
    a: "Az eaisyDocs modulárisan igazodik a vállalkozás méretéhez, a felhasználók számához és a havi iratforgalomhoz. A bevezetés akár néhány óra alatt elvégezhető az eaisyBill-szinkron és az alapértelmezett irattári terv segítségével; az egyedi árajánlatot egy rövid online demó keretében állítjuk össze.",
  },
];

function Donut90() {
  const R = 50;
  const CIRC = 2 * Math.PI * R;
  return (
    <div className="relative">
      <svg viewBox="0 0 120 120" className="w-24 h-24 lg:w-[110px] lg:h-[110px]">
        <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(67,83,181,0.22)" strokeWidth="15" />
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke={C.p600}
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray={`${CIRC * 0.9} ${CIRC}`}
          transform="rotate(-108 60 60)"
        />
      </svg>
      <p
        className={`${FONT_MAIN} absolute inset-0 flex items-center justify-center font-extrabold text-2xl`}
        style={{ color: C.p600 }}
      >
        90<span className="text-sm font-bold align-top">%</span>
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
            background: "linear-gradient(135deg, #EEF2FF 0%, #F8FAFC 48%, #E0F2FE 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(35,45,123,0.085) 1.2px, transparent 1.2px)",
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
          eaisyDocs
        </p>

        {/* main title */}
        <h1
          className={`${FONT_MAIN} mt-[50px] font-medium text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-center`}
          style={{ color: C.ink }}
        >
          Automatizáld a vállalati iratkezelést és iktatást AI-val
        </h1>

        {/* subtitle */}
        <p className={`${FONT_MAIN} mt-4 lg:mt-5 font-light text-base lg:text-lg leading-relaxed text-center text-black`}>
          az eaisyDocs AI támogatott dokumentumkezelő és iktatási platformmal
        </p>

        {/* CTAs */}
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-4">
          <a
            href="#problemak"
            className={`${FONT_MAIN} inline-flex items-center justify-center w-[130px] h-[45px] rounded-xl bg-[#030213] font-normal text-base text-white transition-colors hover:bg-[#186D98]`}
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
                AI Kitöltés & OCR
              </h3>
              <p className={`${FONT_MAIN} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                Automatikus tárgy-, partner-, adószám- és előzmény-felismerés a csatolt PDF vagy szkennelt iratból.
              </p>
            </div>

            {/* left column bottom square */}
            <div
              className={`${TEASER_CARD} px-5 py-5 sm:col-span-1 lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:aspect-square flex flex-col`}
              style={{ background: "linear-gradient(180deg, #EEF2FF 0%, #C7D2FE 100%)" }}
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: "#E0E7FF" }}
              >
                <Eye className="w-5 h-5" strokeWidth={1.5} style={{ color: C.p600 }} />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center">
                <p className={`${FONT_MAIN} font-bold text-4xl leading-none`} style={{ color: C.dark }}>
                  360°
                </p>
                <p className={`${FONT_MAIN} mt-1 font-medium text-lg leading-tight`} style={{ color: C.dark }}>
                  ügyirat- és életciklus-áttekintés
                </p>
              </div>
            </div>

            {/* tall center card: 18 funkció */}
            <a
              href="#funkciok"
              className={`${TEASER_CARD} group relative overflow-hidden sm:col-span-1 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 min-h-[280px] lg:min-h-0 block`}
              style={{
                background: "linear-gradient(165deg, #DBEAFE 0%, #EEF2FF 52%, #E0E7FF 100%)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(35,45,123,0.22)] pointer-events-none" />
              <div className="relative h-full flex flex-col gap-5 px-5 py-5">
                <div
                  className="ml-auto w-11 h-11 rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(67,83,181,0.22)" }}
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} style={{ color: C.dark }} />
                </div>
                <div>
                  <p
                    className={`${FONT_MAIN} font-semibold text-6xl lg:text-[64px] leading-none tracking-tight`}
                    style={{ color: C.dark }}
                  >
                    18
                  </p>
                  <p
                    className={`${FONT_MAIN} font-semibold text-4xl lg:text-[48px] leading-none tracking-tight`}
                    style={{ color: C.dark }}
                  >
                    funkció
                  </p>
                </div>
                <p className={`${FONT_MAIN} font-medium text-2xl lg:text-[28px] leading-snug`} style={{ color: C.dark }}>
                  ami lefedi a teljes vállalati iratkezelést.
                </p>
              </div>
            </a>

            {/* donut card: 90% időfelszabadítás */}
            <div
              className={`${TEASER_CARD} sm:col-span-1 lg:col-span-1 lg:col-start-5 lg:row-start-1 lg:aspect-square px-5 py-5 flex flex-col items-center justify-center gap-3`}
              style={{ background: "linear-gradient(160deg, #EEF0FF 0%, #F8FAFC 100%)" }}
            >
              <p className={`${FONT_MAIN} font-medium text-base`} style={{ color: C.dark }}>
                Akár
              </p>
              <Donut90 />
              <p className={`${FONT_MAIN} font-medium text-base`} style={{ color: C.dark }}>
                gyorsabb iktatás
              </p>
            </div>

            {/* AI-támogatott compliance */}
            <div
              className={`${TEASER_CARD} bg-white sm:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-1 px-5 py-5 flex flex-col items-start gap-5`}
            >
              <div className="inline-flex items-center gap-2.5 rounded-full bg-black/[0.05] px-3.5 py-2">
                <img src={imgBadgeShield} alt="Adatbiztonság" className="h-8 w-8" loading="lazy" decoding="async" />
                <img src={imgBadgeNav} alt="Jogszabályi megfelelés" className="h-8 w-8" loading="lazy" decoding="async" />
                <img src={imgBadgeGdpr} alt="GDPR" className="h-8 w-8" loading="lazy" decoding="async" />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-tight`} style={{ color: C.dark }}>
                Hiteles archiválás és auditbiztos működés
              </h3>
              <p className={`${FONT_MAIN} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                Automatikus PDF/A-2b konverzió, SHA-256 integritásvédelem, 4 szintű biztonsági minősítés és
                visszavonhatatlan eseménynapló (335/2005. Korm. rendelet & GDPR).
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
        style={{ background: "radial-gradient(circle, rgba(67,83,181,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow color={C.p400}>A probléma</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} mt-5 font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.dark }}
          >
            Amikor az iratok kezelése több időt visz el, mint maga az érdemi munka
          </h2>
          <p className={`${FONT_MAIN} mt-5 font-light text-lg leading-relaxed max-w-[760px]`} style={{ color: C.dark }}>
            A bejövő szerződések, számlák és hivatalos levelek manuális érkeztetése, átnevezgetése és keresgélése
            észrevétlenül lassítja le a teljes szervezetet.
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
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.10), transparent 70%)" }}
      />

      <div className={`${INNER_CARDS} flex flex-col items-center text-center gap-6`}>
        <SectionEyebrow color={C.p400}>A mi megoldásunk</SectionEyebrow>
        <h2
          className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight max-w-[1100px]`}
          style={{ color: C.dark }}
        >
          eaisyDocs:
          <br />
          Automatikus érkeztetés. Intelligens iktatás. Azonnali <span style={{ color: C.p600 }}>visszakeresés.</span>
        </h2>
        <p className={`${FONT_MAIN} font-light text-base leading-relaxed max-w-[960px]`} style={{ color: C.dark }}>
          Az eaisyDocs egy mesterséges intelligenciával támogatott vállalati dokumentumkezelő és iktatási rendszer.
          Összekapcsolja a beérkező csatornákat (IMAP e-mail, eaisyBill számlák, kötegelt szkenner), hibrid OCR és
          Gemini Vision segítségével automatikusan kinyeri a metaadatokat, felismeri az előzményeket, és végigkíséri az
          ügyiratokat a szignálástól a feladatkezelésen át a szabványos PDF/A-2b irattározásig és selejtezésig.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#funkciok"
            className={`${FONT_MAIN} inline-flex items-center justify-center px-8 h-[50px] rounded-full font-medium text-base transition-colors hover:bg-[#4353B5]/10`}
            style={{ border: `1px solid ${C.p400}`, color: C.p600 }}
          >
            Teljes funkciólista
          </a>
          <Link
            to="/tudasbazis/eaisy-docs"
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
        : "bg-white border-black/10 font-medium hover:border-[#4353B5]/60 hover:shadow-sm"
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
        style={{ background: "radial-gradient(circle, rgba(67,83,181,0.12), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Funkciók - Teljes áttekintés"
          title={<>Hogyan <span style={{ color: C.p600 }}>automatizál</span> az eaisyDocs?</>}
          subtitle="Minden, ami a korszerű vállalati iratkezeléshez szükséges: a többcsatornás érkeztetéstől és AI-iktatástól a selejtezési jegyzőkönyvekig."
          titleClass="text-4xl lg:text-[40px]"
        />

        {/* filter chips */}
        <div className="mt-14 lg:mt-20 w-full max-w-[1100px] mx-auto flex flex-wrap items-center justify-center gap-3">
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
                style={{ border: "1px solid rgba(67,83,181,0.35)" }}
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
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#4353B5]/10"
            style={{ border: "1px solid rgba(67,83,181,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p400 }} />
          </button>
          <button
            onClick={() => page(1)}
            aria-label="Következő funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#4353B5]/10"
            style={{ border: "1px solid rgba(67,83,181,0.5)" }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p400 }} />
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
            background: "linear-gradient(90deg, rgba(67,83,181,0.13) 0%, rgba(14,165,233,0.06) 55%, rgba(14,165,233,0) 100%)",
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
              Minden szervezet iratforgalma más. Mutasd meg, nálatok milyen dokumentumok érkeznek be naponta, és
              élőben bemutatjuk, hogyan érkezteti, ismeri fel és iktatja őket az eaisyDocs.
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
                to="/tudasbazis/eaisy-docs"
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
            <span style={{ color: C.p600 }}> értékelni fogja</span>
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed`} style={{ color: C.dark }}>
            Másra van szüksége a cégvezetőnek, az iktatást végző irodavezetőnek és a szakmai ügyintézőnek. Az
            eaisyDocs minden szerepkörnek célzott eszközöket és jogosultságokat ad.
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
        style={{ borderColor: "rgba(67,83,181,0.35)" }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "#232D7B" }}
        />
        <span className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 bg-[#4353B5] group-hover:bg-[#0C1033]">
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
        style={{ background: "radial-gradient(circle, rgba(67,83,181,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Kinek való?"
          eyebrowColor={C.p400}
          title="Kik számára jelent megoldást az eaisyDocs?"
          subtitle="Öt vállalati helyzet, ahol az automatizált érkeztetés és a strukturált ügyiratkezelés azonnal mérhető időt és biztonságot hoz."
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
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#4353B5]/10"
            style={{ border: "1px solid rgba(67,83,181,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p400 }} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Következő helyzetek"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#4353B5]/10"
            style={{ border: "1px solid rgba(67,83,181,0.5)" }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} style={{ color: C.p400 }} />
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
        style={{ background: "radial-gradient(circle, rgba(67,83,181,0.10), transparent 70%)" }}
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
            Válaszok a leggyakrabban felmerülő kérdésekre — az érkeztetéstől és AI-felismeréstől a jogszabályi
            megfelelésig.
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
  "Bemutatjuk a többcsatornás Bejövő sort és az eaisyBill / IMAP szinkront",
  "Élőben kipróbáljuk az osztott képernyős AI Kitöltést és előzmény-felismerést",
  "Végigkövetjük egy ügyirat életciklusát a szignálástól a PDF/A irattározásig",
  "Megmutatjuk az AI szemantikus keresőt és a selejtezési jegyzőkönyvet",
  "Megbeszéljük a bevezetés menetét és a cégre szabott árazást",
];

const DEMO_REASONS = [
  "Ha szeretnéd megszüntetni a dokumentumok utáni keresgélést",
  "Ha túl sok idő megy el a bejövő iratok kézi iktatásával",
  "Ha fontos az átlátható felelőskijelölés és határidő-követés",
  "Ha auditbiztos, PDF/A-alapú digitális irattárat szeretnél",
];

function ContactSection() {
  return (
    <section id="demo" className="w-full pt-16 lg:pt-20 pb-16 lg:pb-20" style={{ backgroundColor: C.p900 }}>
      <div className={INNER}>
        <div
          className="relative overflow-hidden rounded-[28px] px-8 py-12 lg:px-16 lg:py-14"
          style={{ border: "1px solid rgba(165,180,252,0.3)" }}
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
                Megmutatjuk, hogyan működik az eaisyDocs a te vállalkozásodban — a saját dokumentumtípusaidon és
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
                A demó ingyenes és nem általános termékbemutató — a te irodád iratkezelési kihívásaira fókuszálunk.
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
                    style={{ border: "1px solid rgba(165,180,252,0.4)" }}
                  >
                    {reason}
                  </span>
                ))}
              </div>
              <button
                onClick={openDemoModal}
                className={`${FONT_MAIN} mt-2 inline-flex items-center justify-center px-9 h-[54px] rounded-full font-semibold text-sm tracking-wider text-white transition-opacity hover:opacity-90`}
                style={{ backgroundColor: C.a500 }}
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

export default function EaisyDocs() {
  return (
    <div>
      <Seo
        title="eaisyDocs – AI-támogatott dokumentumkezelő és iktatási rendszer | eaisy"
        description="Az eaisyDocs automatizálja a beérkező dokumentumok érkeztetését, AI OCR felismerését, kategorizálását, alszámos iktatását és PDF/A irattározását — másodpercek alatti szemantikus visszakereséssel."
        path="/eaisy-docs"
        ogImage={`${SITE_URL}/og-image-eaisydocs.jpg`}
        jsonLd={[
          organizationSchema(),
          softwareAppSchema({
            name: "eaisyDocs",
            description:
              "AI-támogatott dokumentumkezelő és iktatási rendszer: többcsatornás érkeztetés, AI OCR felismerés, alszámos iktatókönyv, PDF/A irattározás és szemantikus kereső.",
            path: "/eaisy-docs",
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
