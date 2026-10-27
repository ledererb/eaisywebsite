import { useState, useEffect, useRef, type TransitionEvent, type PointerEvent } from "react";
import { Link } from "react-router";
import { ChevronDown, ChevronLeft, ChevronRight, Plus, Minus, FileText, Calendar, Zap, Database, Clock, TrendingUp, Mail, BarChart3, Briefcase, Calculator, ArrowUpRight, ArrowDownRight, CheckCircle2, AlertCircle, EyeOff, RefreshCw, Users, Landmark, ChartColumn, Scale, Link2, Upload, Sparkles, SlidersHorizontal, MoveHorizontal, Video, Tag, AlarmClock, Repeat, LayoutDashboard, Crosshair, Globe, FileQuestion, ListChecks, Percent, Package, CreditCard, Truck } from "lucide-react";
import imgHeroBg from "@/imports/EaisyBill/hero-background.webp"; // light mint gradient frame bg (transparent rounded corners baked in)
import imgFunctionCardBg from "@/imports/EaisyBill/function-card-bg.webp";
import imgGraphs from "@/imports/EaisyBill/graphs.png";
import imgFeaturesBg from "@/imports/EaisyBillFunkciok/bg-dashboard.webp";
import imgDemo from "@/imports/demo-img.png";
import { openDemoModal } from "@/app/Root";
import { Seo, organizationSchema, softwareAppSchema, faqSchema } from "@/app/components/Seo";
import { SectionHeader, SectionEyebrow } from "@/app/components/Section";
import { useInView } from "@/app/components/useInView";
import EaisybillLogo from "@/imports/EaisybillLogoBrightBackground/index";

const C = {
  dark: "#032D32",     // Teal 900
  teal: "#005757",     // Teal 800
  main: "#0D9488",     // Teal 600 (Main)
  accent: "#6ACCC3",   // Teal 400
  coral: "#EA8767",    // Rose 600 (Accent — warmer palette)
  lightBg: "#E2FBF4",  // Teal 50
  bodyText: "rgba(0,0,0,0.55)",
  // new design-system tokens
  ink: "#264350",      // site-wide dark text
  rose50: "#FBE9E3",   // Rose 50
};

// new design-system shared bits (mirrors the eaisyBooks hero conventions)
const FONT_MAIN = "font-['Montserrat',sans-serif]";
const FONT_CARD = "font-['Inter',sans-serif]";
const INNER = "w-full max-w-[1530px] mx-auto px-6 lg:px-10"; // → 1450px content
// matches the hero teaser cards' width (1450 - 2×48px panel padding)
const INNER_CARDS = "w-full max-w-[1434px] mx-auto px-6 lg:px-10"; // → 1354px content
const TEASER_CARD =
  "rounded-2xl ring-1 ring-inset ring-[rgba(13,148,136,0.3)] transition-all duration-300 hover:-translate-y-1";

const HERO_BOTTOM_CARDS = [
  { icon: ChartColumn, title: "Kontrolling és vezetői riportok", desc: "Profitcenterek, projektek, munkaidő, bérköltség, eszközök és vezetői dashboardok." },
  { icon: Scale, title: "Könyvelés előkészítés", desc: "Kontírozás, főkönyvi besorolás, ÁFA-analitika, mérleg, eredménykimutatás és beszámoló-előkészítés." },
  { icon: Link2, title: "Automatikus párosítás", desc: "Számlák, banki tranzakciók, NAV-adatok, számlaképek és elszámolások összekapcsolása." },
];

// crisp HTML overlay for the graph card (replaces the blurry baked tooltip)
const GRAPH_REPORT = [
  { label: "Bevétel", value: "12 019 000 Ft", color: "#34A853" },
  { label: "Kintlévőségek", value: "24 920 000 Ft", color: "#0D9488" },
  { label: "Kiadás", value: "434 000 Ft", color: "#E0654A" },
  { label: "Követelések", value: "14 778 000 Ft", color: "#D9A441" },
  { label: "Bérek", value: "0 Ft", color: "#8B5CF6" },
  { label: "Cashflow", value: "32 781 000 Ft", color: "#6366F1" },
];

const PROBLEMS: { icon: typeof FileText; title: string; desc: string }[] = [
  { icon: FileText, title: "Hiányzó számlák", desc: "Papíron, e-mailben, egyéb elektronikus csatornákon érkeznek: sokszor követhetetlen, hogy mi hol van, mi lett iktatva, mi vár még feldolgozásra." },
  { icon: AlarmClock, title: "Stresszes ÁFA-bevallás", desc: "Hónapról hónapra kézzel kell összegyűjteni a hiányzó számlákat és banki adatokat, miközben a legfontosabb kérdés sokszor az utolsó pillanatig nyitott: mennyi ÁFA-t kell fizetni?" },
  { icon: Repeat, title: "Időrabló rutinfeladatok", desc: "A számlák másolgatása, iktatása, a banki tranzakciók tételes egyeztetése, a manuális adatbevitel sok időt igényelnek — ahelyett, hogy a vállalkozás növekedésével tudnánk foglalkozni." },
  { icon: Clock, title: "Várakozás a könyvelésre", desc: 'A valós pénzügyi helyzet gyakran csak hónapzárás után derül ki, amikor a számlák és banki adatok végre összeérnek - addig a cég "vakon repül".' },
  { icon: AlertCircle, title: "Manuális kintlévőségkezelés", desc: "Nem mindig látszik pontosan, ki mennyivel és mióta tartozik. A sablonos felszólítások sokszor hatástalanok, miközben a késedelmes befizetések rontják a likviditást." },
  { icon: LayoutDashboard, title: "Az átfogó kép hiánya", desc: "A pénzügyi adatok több rendszerben, Excel-táblában és e-mailben szóródnak szét. Nincs egyetlen közös felület, ahol minden fontos információ összefutna. A döntésekhez gyakran hiányzik az átfogó rálátás." },
];

const FEATURES = [
  { num: 1, icon: RefreshCw, cat: "beerk", title: "NAV Online Számla szinkron", desc: "A bejövő és kimenő számlák automatikusan, valós időben beérkeznek a NAV Online Számla rendszeréből. Nem kell kézzel feltölteni — minden számla azonnal a rendszerben van." },
  { num: 2, icon: Globe, cat: "beerk", title: "Idegen nyelvű és devizás számlák feldolgozása", desc: "MNB árfolyamon, automatikus árfolyamkülönbség-vezetéssel. A külföldi szállítóktól érkező számlák sem jelentenek problémát." },
  { num: 3, icon: Sparkles, cat: "beerk", title: "AI dokumentumkivonat", desc: "E-mailben küldött vagy feltöltött számlákból a mesterséges intelligencia strukturált adatot készít — kinyeri a számlafejet csakúgy, mint az összes számlán szereplő tételt, az összegeket, az ÁFÁ-t. Működik magyar és idegen nyelvű, forintos és devizás számlákkal egyaránt, sőt kézzel írt számlák esetében is." },
  { num: 4, icon: FileQuestion, cat: "beerk", title: "Hiányzó számlaképbegyűjtés", desc: "Automatikusan azonosítja, ha egy NAV-ból betöltött számlához nem érkezett meg a számlakép (PDF), és e-mailben automatikusan bekéri azt. A hiányzó számákat jelzi, és emailen, manuálisan, vagy akár fotózva (HEIC, HEIF formátumban is) is fel lehet tölteni a rendszerbe. A beérkezett képet a számlához rendeli és iktatja." },
  { num: 5, icon: Landmark, cat: "beerk", title: "Bankintegráció", desc: "A banki tranzakciók háromféle módon érkezhetnek az eaisyBill-be: PSD2 banki aggregátoron keresztül automatikusan, e-mail alapú banki értesítőkből, vagy manuális feltöltéssel. Több bank, több számla kezelhető párhuzamosan." },
  { num: 6, icon: Link2, cat: "ai", title: "Intelligens összekötés", desc: "Intelligensen és önállóan köti össze a NAV számlaadatokat a számlaképekkel, és a számlákat a banki tranzakciókkal. A korábbi kontírozási döntésekből tanul, és automatikusan örökíti a szabályokat — nincs hosszadalmas betanítás." },
  { num: 7, icon: Zap, cat: "ai", title: "Automatikus kontírozás", desc: "Minden számlatétel automatikusan a megfelelő főkönyvi szám alá kerül. A kontírozási szabályok a cég saját számlatükre szerint működnek, több számlatükör-változat is kezelhető párhuzamosan." },
  { num: 8, icon: ListChecks, cat: "penzugy", title: "Utalási listák", desc: "A beérkezett szállítói számlákból és a rögzített bérekből automatikusan utalási listákat generál. A listák tartalmazzák a kedvezményezetteket, összegeket, határidőket — másodpercek alatt, kézi összeállítás nélkül." },
  { num: 9, icon: Percent, cat: "penzugy", title: "ÁFA analitika", desc: "Kezeli a különböző ÁFA kategóriákat, összesíti a fizetendő és levonható ÁFA összeget, így valós idejű ÁFA fizetési kötelezettséget láthatunk. A beérkezett szállítói számlákból és a rögzített bérekből automatikusan utalási listákat generál, amelyek tartalmazzák a kedvezményezetteket, összegeket, határidőket — másodpercek alatt, kézi összeállítás nélkül." },
  { num: 10, icon: Clock, cat: "penzugy", title: "Kintlévőség-kezelés", desc: "Korfa kategóriák (30/60/90+ nap), csoportos felszólító e-mailek, partnerenként mentett e-mail címekkel. Az eaisyBill figyelmeztet, mielőtt a pénz bent ragadna — a felszólítások naplózottak, visszakövethetők." },
  { num: 11, icon: Tag, cat: "penzugy", title: "Költségkategória azonosítás", desc: "Az eaisyBill automatikusan kategorizálja a költségeket - például anyagköltség, bérleti díj, marketing, IT- vagy bankköltség szerint. Valós idejű áttekintést ad a költségszerkezetről — így könnyen követhető, mire megy el a pénz, kategóriánként." },
  { num: 12, icon: Crosshair, cat: "kontrolling", title: "Profitcenter azonosítás", desc: "Automatikusan projektekhez, üzletágakhoz vagy partnerekhez rendeli a bevételeket és költségeket. A profitcenter kimutatás megmutatja, melyik projekt vagy üzletág mennyire nyereséges — nem kell külön Excelben számolgatni." },
  { num: 13, icon: Package, cat: "kontrolling", title: "Tárgyi eszköz nyilvántartó", desc: "A tárgyi eszközök nyilvántartása egy kattintással a kapcsolódó számlatételekből indítható. Automatikus értékcsökkenés-számítás a számviteli törvény szerint, eszközkartonok és leltárív generálása — nincs szükség külön nyilvántartó rendszerre." },
  { num: 14, icon: Users, cat: "kontrolling", title: "AI béradó-asszisztens", desc: "Az eaisyBill a 2026-os magyar szabályozás szerint támogatja a bérkalkulációt, beleértve a minimálbérre, garantált bérminimumra, SZJA-ra, TB-re és SZOCHO-ra vonatkozó számításokat. A működés GDPR-megfelelő: személyes adatok nem hagyják el a rendszert." },
  { num: 15, icon: CreditCard, cat: "ai", title: "SZÉP kártya feldolgozás", desc: "Az eaisyBill dedikált felületen kezeli a SZÉP Kártyás tranzakciókat: automatikusan összepárosítja a tételeket a kapcsolódó elszámolásokkal, majd a beállított pénzügyi logika szerint kontírozza őket. Így nincs szükség a banki kivonatokkal történő ismétlődő, kézi egyeztetésre." },
  { num: 16, icon: Truck, cat: "ai", title: "Futárszolgálati elszámolások", desc: "Az eaisyBill automatikusan feldolgozza a GLS, MPL, Mixpack, Fáma, Foxpost és DPD riportokat, majd összeveti a csomagszámokat és az összegeket a kapcsolódó számlákkal. Így könnyebben ellenőrizhető, hogy a teljesítések és elszámolások rendben vannak-e, és eltérés esetén a reklamációhoz szükséges adatok is gyorsan visszakereshetők." },
  { num: 17, icon: Calendar, cat: "kontrolling", title: "Munkaidő-nyilvántartó", desc: "A Mt. 152. § szerinti jelenléti ív, naprakész munkaidő-kimutatás, azonnali visszajelzés a rögzítésről. Nincs több papíralapú jelenléti ív. Hangvezérlésű munkaidő nyilvántartás." },
  { num: 18, icon: TrendingUp, cat: "ai", title: "AI eszkalációs rendszer", desc: "Automatikusan priorizálja a figyelmet igénylő elemeket, és csak azokat a kérdéses tételeket emeli ki, amelyek valóban humán döntést igényelnek. A rutinszerű egyeztetéseket automatikusan rendezi — neked csak a valódi kivételekkel kell foglalkozni." },
];

// Előnyök — szerepválasztós (Desk-struktúra, Bill brand colors)
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
    fill: "#EA8767",
    numColor: "#EA8767",
    benefits: [
      { title: "Valós idejű rálátás", desc: "Az ügyfélportálon keresztül a cégvezető bármikor látja a számláit, a bérjegyzékeit, a bevallásai állapotát. Nem kell várni a havi zárásra." },
      { title: "Digitális, modern élmény", desc: "Az ügyfélportál mobilbarát, az e-bérjegyzék titkosított, a dokumentumok egy helyen elérhetők. XXI. századi elvárásoknak megfelelő kiszolgálás." },
      { title: "Kevesebb adminisztráció", desc: "Automatikus adatbekérők, dokumentum-feltöltési lehetőség, online nyilatkozattétel. Az ügyfélnek kevesebb időt kell töltenie az adminisztrációval." },
    ],
  },
  {
    id: "konyvelo",
    label: "A könyvelő",
    fill: "#0D9488",
    numColor: "#0D9488",
    benefits: [
      { title: "Villámgyors hónapzárás", desc: "Az eaisyBill összeköti és kontírozza a tételeket, a könyvelőnek csak ellenőriznie kell, nem pedig adatot rögzítenie." },
      { title: "Kevesebb egyeztetés", desc: "A rendezett, ellenőrizhető pénzügyi adatok szükségtelenné teszik az ismétlődő egyeztetéseket." },
      { title: "Pontosabb adatok", desc: "NAV-szinkron és AI validáció miatt kevesebb hiba, kevesebb utólagos javítás." },
    ],
  },
  {
    id: "penzugyi",
    label: "A pénzügyi vezető",
    fill: "#005757",
    numColor: "#005757",
    benefits: [
      { title: "Valós idejű kontroll", desc: "Bármikor látszik a likviditás, a kintlévőségek állapota." },
      { title: "Mérhető megtakarítás", desc: "Lényegesen kevesebb adminisztratív kör - ez időben és költségben is mérhető megtakarítást jelent." },
      { title: "NAV megfelelés - automatikusan", desc: "Magyar jogszabályi formátumok — a Számviteli törvénynek mindenben megfelel." },
    ],
  },
];

const WHO_FOR = [
  { icon: FileText, num: "01", title: "Ahol sok a számla", desc: "Havi több tucat vagy több száz bejövő számla, több bank, több partner. A kézi követés már nem működik hatékonyan. Az eaisyBill automatikusan rendszerezi, iktatja és kontírozza őket." },
  { icon: EyeOff, num: "02", title: "Ahol a pénzügy nem átlátható", desc: "A cégvezető / pénzügyes nem tudja pontosan, hol tart a vállalkozás, mert az adatok több rendszerben, Excelben, e-mailben szétszórva vannak. Az eaisyBill egy felületen mutat mindent." },
  { icon: Calculator, num: "03", title: "Ahol a könyvelés a szűk keresztmetszet", desc: "A hagyományos könyvelés havi zárást ad, de a cégnek heti vagy napi rálátásra van szüksége. Az eaisyBill valós idejű kontrollt ad a pénzügyek felett — a könyvelés mellett, nem helyette." },
  { icon: RefreshCw, num: "04", title: "Ahol a rutinfeladatok elszívják a kapacitást", desc: "A csapat a számlák másolgatásával, banki egyeztetéssel és adatbevitellel tölti az idejét, ahelyett hogy a pénzügyi elemzéssel és a növekedés támogatásával foglalkozna. Az eaisyBill automatizálja a rutint." },
  { icon: TrendingUp, num: "05", title: "Skálázási problémával küzdő cégeknek", desc: "A cég nő, de a pénzügyi folyamatok nem skálázódnak vele együtt. Minden új ügyfél vagy partner több kézi adminisztrációt jelent. Az eaisyBill használatával a skálázódás nem jár arányos létszámnövekedéssel - épp ellenkezőleg!" },
];

const FAQS = [
  { q: "Kiváltja az eaisyBill a könyvelőt?", a: "Nem — és nem is ez a célja. A rutinmunkát (iktatás, kontírozás, egyeztetés, bevallás-összeállítás) automatizálja, így a könyvelő a kivételekre, tanácsadásra és ellenőrzésre tud koncentrálni. A platform a könyvelő munkáját egészíti ki." },
  { q: "Milyen számlákat dolgoz fel?", a: "Minden típusút: NAV Online Számlából szinkronizált magyar áfás számlákat, e-mailben érkező PDF-eket, feltöltött dokumentumokat, idegen nyelvű és devizás számlákat. MNB hivatalos árfolyamon számol." },
  { q: "Megfelel a NAV előírásainak?", a: "Igen — a rendszer a Számviteli törvénynek mindenben megfelel. A 2665-ös ÁFA-űrlapot, az A-típusú beszámolót, az eÁFA és ONYA formátumokat natívan kezeli. Magyar szabályozásra épített." },
  { q: "Mennyi idő a bevezetés?", a: "A rendszer betanítás nélkül működik — a kontírozási szabályok öröklődnek, nem kell minden számlát egyenként megtanítani. Az első ÁFA-bevallás gyakran már az első hónap végén leadható." },
  { q: "Mi van, ha a könyvelőm nem akar platformot váltani?", a: "A platform nem a könyvelő ellen dolgozik — a rutinfeladatok alól szabadítja fel. A kontírozási javaslatokat a könyvelő bármikor felülbírálhatja, és a szakértelmére koncentrálhat." },
  { q: "Biztonságban vannak az adataim?", a: "Igen. A rendszer felhőalapú, biztonsági mentésekkel. Sorszintű hozzáférés-kezelés biztosítja, hogy mindenki csak a saját adataihoz fér hozzá." },
  { q: "Skálázódik a cégemmel?", a: "Igen — ez az egyik fő előnye. A platform ugyanazzal a csapattal 30–50%-kal több ügyfél vagy tranzakció kiszolgálását teszi lehetővé. A növekedés nem jár arányos létszámbővítéssel." },
  { q: "Mennyibe kerülnek az eaisy termékek?", a: "Az eaisy termékeket úgy alakítottuk ki, hogy a kisebb és nagyobb vállalkozások eltérő működéséhez, funkcionális igényeihez és adatmennyiségéhez is rugalmasan igazodjanak. Az egyes termékeken belül is csak azokat a modulokat és funkciókat szükséges igénybe venni, amelyekre valóban szükség van. Az árat a választott funkciók, a felhasználási volumen és az integrációs igények egyaránt befolyásolják, ezért minden ügyfelünk számára egyedi ajánlatot készítünk." },
];

const WHO_SHOULD = [
  "Aki csökkenteni szeretné a kézi pénzügyi adminisztrációt",
  "Aki túl sok időt tölt számlák, banki tételek és kintlévőségek egyeztetésével",
  "Aki valós időben szeretné látni, hol áll a cég pénzügyileg",
  "Aki gyorsabb, rendezettebb havi zárást szeretne",
  "Aki Excel helyett kontrolláltabb pénzügyi működést keres",
];


function Donut90() {
  const R = 50;
  const CIRC = 2 * Math.PI * R;
  return (
    <div className="relative">
      <svg viewBox="0 0 120 120" className="w-24 h-24 lg:w-[110px] lg:h-[110px]">
        <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(234,135,103,0.28)" strokeWidth="15" />
        <circle
          cx="60" cy="60" r={R} fill="none" stroke={C.teal} strokeWidth="15" strokeLinecap="round"
          strokeDasharray={`${CIRC * 0.9} ${CIRC}`} transform="rotate(-108 60 60)"
        />
      </svg>
      <p
        className={`${FONT_MAIN} absolute inset-0 flex items-center justify-center font-extrabold text-2xl`}
        style={{ color: C.teal }}
      >
        90<span className="text-sm font-bold align-top">%</span>
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-[122px] pb-14 lg:pb-20">
      {/* centered 1615px gradient frame (mirrored) — top edge runs below the navbar */}
      <div className="absolute top-24 bottom-0 lg:top-[110px] left-1/2 -translate-x-1/2 w-full max-w-[1615px] overflow-hidden rounded-[40px]">
        <img
          src={imgHeroBg}
          alt=""
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* soft top fade */}
        <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" />
      </div>

      <div className={`relative ${INNER} flex flex-col items-center`}>
        {/* brand logo — rounded pill frame in the main color */}
        <p
          className={`${FONT_CARD} inline-flex items-center rounded-full px-8 py-3 lg:px-10 lg:py-4 font-extrabold text-3xl lg:text-4xl leading-none`}
          style={{ border: `1px solid ${C.main}`, color: C.main }}
        >
          eaisyBill
        </p>

        {/* main title */}
        <h1
          className={`${FONT_MAIN} mt-[50px] font-medium text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-center`}
          style={{ color: C.ink }}
        >
          Tartsd kézben vállalkozásod pénzügyeit
        </h1>

        {/* subtitle — carries on the H1 sentence */}
        <p className={`${FONT_MAIN} mt-4 lg:mt-5 font-light text-base lg:text-lg leading-relaxed text-center text-black`}>
          az eaisyBill AI támogatott pénzügyi és kontrolling platformmal
        </p>

        {/* CTAs */}
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-4">
          <a
            href="#problemak"
            className={`${FONT_MAIN} inline-flex items-center justify-center w-[130px] h-[45px] rounded-xl bg-[#030213] font-normal text-base text-white transition-colors hover:bg-[#374151]`}
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

        {/* ── teaser grid: 5-col — tall 2×2 card, graph landscape, donut square, 3 squares ── */}
        <div className="mt-[50px] w-full rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-md p-4 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2.5">
            {/* tall card: 18 funkció on dotty dark teal bg */}
            <div className={`${TEASER_CARD} group relative overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-0 flex flex-col`}>
              <img
                src={imgFunctionCardBg}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.04]"
              />
              {/* inset ring above the image so the hairline edge stays clean */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(13,148,136,0.3)] pointer-events-none" />
              <div className="relative h-full flex flex-col px-5 py-5 lg:px-7 lg:py-7">
                <a
                  href="#funkciok"
                  aria-label="Funkciók"
                  className="ml-auto w-11 h-11 rounded-[10px] bg-white/90 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} style={{ color: C.dark }} />
                </a>
                {/* title + desc centered between the chip and the bottom-anchored CTA */}
                <div className="flex-1 flex flex-col items-start justify-center gap-9">
                  <p className={`${FONT_MAIN} text-white leading-none tracking-tight`}>
                    <span className="font-semibold text-6xl lg:text-[64px]">18</span>
                    <span className="ml-3 font-semibold text-4xl lg:text-[48px]">funkció</span>
                  </p>
                  <p className={`${FONT_MAIN} font-medium text-2xl lg:text-[28px] leading-snug text-white/90`}>
                    ami lefedi a vállalkozásod teljes pénzügyi működését.
                  </p>
                </div>
                <a
                  href="#funkciok"
                  className={`${FONT_MAIN} self-start mb-10 lg:mb-24 inline-flex items-center justify-center px-8 h-[46px] rounded-full font-medium text-base tracking-wider text-white transition-opacity hover:opacity-90`}
                  style={{ backgroundColor: C.coral }}
                >
                  Megnézem
                </a>
              </div>
            </div>

            {/* graph card: software chart with real-looking data */}
            <div className={`${TEASER_CARD} relative overflow-hidden bg-white sm:col-span-2 lg:col-span-2 min-h-[240px] lg:min-h-0`}>
              <img
                src={imgGraphs}
                alt="Cash-flow grafikon augusztusi adatokkal"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.04]"
              />
              {/* inset ring above the image so the card frame stays visible */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(13,148,136,0.3)] pointer-events-none" />
              {/* crisp HTML report overlay covering the blurry baked tooltip */}
              <div className="absolute right-[2px] top-[10%] rounded-xl border border-[#CFE7E2] bg-white px-3 py-2.5 shadow-[0_4px_14px_rgba(3,45,50,0.10)]">
                <p className={`${FONT_MAIN} font-semibold text-xs leading-tight`} style={{ color: C.ink }}>
                  augusztus
                </p>
                <div className="mt-1.5 flex flex-col">
                  {GRAPH_REPORT.map(({ label, value, color }) => (
                    <p
                      key={label}
                      className={`${FONT_MAIN} font-medium text-[11px] leading-[1.65] whitespace-nowrap`}
                      style={{ color }}
                    >
                      {label}: {value}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative flex items-start gap-3 px-5 py-5">
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.rose50 }}
                >
                  <Database className="w-5 h-5" strokeWidth={1.5} style={{ color: C.coral }} />
                </div>
                <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug max-w-[250px]`} style={{ color: C.ink }}>
                  A pénzügyeid végre egy helyen. Automatikusan. Valós időben.
                </h3>
              </div>
            </div>

            {/* donut card: 90% időfelszabadítás */}
            <div
              className={`${TEASER_CARD} sm:col-span-1 lg:aspect-square px-5 py-5 flex flex-col items-center justify-center gap-3`}
              style={{ background: "linear-gradient(160deg, #FBE9E3 0%, #FDF3EC 100%)" }}
            >
              <p className={`${FONT_MAIN} font-medium text-base`} style={{ color: C.ink }}>
                Akár
              </p>
              <Donut90 />
              <p className={`${FONT_MAIN} font-medium text-base`} style={{ color: C.ink }}>
                időfelszabadítás
              </p>
            </div>

            {/* bottom row: 3 white square feature cards */}
            {HERO_BOTTOM_CARDS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className={`${TEASER_CARD} bg-white sm:col-span-1 lg:aspect-square px-5 py-5 flex flex-col items-center text-center gap-5`}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                  style={{ backgroundColor: C.rose50 }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.coral }} />
                </div>
                <h3 className={`${FONT_MAIN} font-medium text-base`} style={{ color: C.ink }}>
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

// ── Autoplay teaser: vertical loop of product panels (like the demo login page) ──
const TEASER_BARS = [38, 52, 44, 62, 48, 70, 56, 66, 50, 60, 74, 58];

function TeaserHeader({ icon: Icon, label, alert = false }: { icon: typeof BarChart3; label: string; alert?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: alert ? "rgba(252,210,205,0.5)" : C.lightBg }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: alert ? C.coral : C.main }} strokeWidth={2} />
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-black/60">{label}</p>
    </div>
  );
}

function TeaserCarousel() {
  const panelCls = "bg-white rounded-xl border border-black/5 shadow-[0_2px_10px_rgba(3,45,50,0.08)] p-4 flex flex-col gap-3";

  const panels = [
    // 1 — Dashboard overview
    <div key="dashboard" className={panelCls}>
      <TeaserHeader icon={BarChart3} label="Pénzügyi áttekintés" />
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-black/50">Bevétel</p>
            <ArrowUpRight className="w-3 h-3" style={{ color: C.main }} strokeWidth={2} />
          </div>
          <p className="text-base font-bold text-black leading-none">2,4M Ft</p>
          <p className="text-[9px] font-semibold" style={{ color: C.main }}>+12.5%</p>
        </div>
        <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-black/50">Kiadás</p>
            <ArrowDownRight className="w-3 h-3" style={{ color: C.coral }} strokeWidth={2} />
          </div>
          <p className="text-base font-bold text-black leading-none">890K Ft</p>
          <p className="text-[9px] font-semibold" style={{ color: C.coral }}>-3.2%</p>
        </div>
      </div>
      <div className="rounded-lg border border-black/5 p-2.5">
        <p className="text-[10px] font-semibold text-black mb-1.5">Havi áttekintés</p>
        <div className="flex items-end gap-1 h-12">
          {TEASER_BARS.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: "linear-gradient(to top, #005757, #6ACCC3)" }} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FileText className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-semibold text-black truncate flex-1">
          INV-2026-0142 <span className="font-normal text-black/50">TechCorp Kft. — 1 250 000 Ft</span>
        </p>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#E2FBF4]" style={{ color: C.teal }}>Fizetve</span>
      </div>
    </div>,

    // 2 — Payroll
    <div key="payroll" className={panelCls}>
      <TeaserHeader icon={Users} label="Bérösszesítő — 2026. március" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { name: "Kovács Anna", amount: "485 000 Ft" },
          { name: "Nagy Péter", amount: "512 000 Ft" },
          { name: "Szabó Eszter", amount: "580 000 Ft" },
        ].map((r) => (
          <div key={r.name} className="flex items-center justify-between py-1.5">
            <p className="text-[10px] font-medium text-black">{r.name}</p>
            <p className="text-[10px] text-black/50">{r.amount}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-black/10">
        <p className="text-[10px] font-semibold text-black">Összesen (nettó)</p>
        <p className="text-[11px] font-bold" style={{ color: C.teal }}>1 577 000 Ft</p>
      </div>
    </div>,

    // 3 — Bank matching
    <div key="bank" className={panelCls}>
      <TeaserHeader icon={Landmark} label="Banki egyeztetés" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { bank: "K&H 10200812-32145698", inv: "INV-2026-0142" },
          { bank: "OTP 11773312-01234567", inv: "INV-2026-0143" },
          { bank: "Wise EUR 2 800.00", inv: "INV-2026-0150" },
        ].map((r) => (
          <div key={r.bank} className="flex items-center gap-2 py-1.5">
            <p className="text-[10px] text-black/55 flex-1 truncate">{r.bank}</p>
            <p className="text-[10px] font-semibold text-black">{r.inv}</p>
            <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
          </div>
        ))}
      </div>
    </div>,

    // 4 — Overdue receivables
    <div key="alerts" className={panelCls}>
      <TeaserHeader icon={AlertCircle} label="Kintlévőség-kezelés" alert />
      <div className="flex items-center gap-2">
        <p className="text-[10px] font-semibold text-black flex-1">Lejárt kintlévőségek</p>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#FCD2CD]/50" style={{ color: "#95333C" }}>Figyelmeztetés</span>
      </div>
      <div className="flex items-center gap-2">
        <FileText className="w-3 h-3 shrink-0" style={{ color: C.coral }} strokeWidth={2} />
        <p className="text-[10px] font-semibold text-black truncate flex-1">
          INV-2026-0034 <span className="font-normal text-black/50">Delta Trade Kft. — 860 000 Ft</span>
        </p>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#FCD2CD]/50" style={{ color: "#95333C" }}>Lejárt</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(226,251,244,0.6)" }}>
        <Mail className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.teal }}>1. fizetési felszólító email elküldve</p>
      </div>
    </div>,

    // 5 — Quick invoicing
    <div key="invoicing" className={panelCls}>
      <TeaserHeader icon={Zap} label="Gyors számlázás partnereknek" />
      <div className="flex items-center gap-2">
        <p className="text-[10px] text-black/50">Adószám</p>
        <p className="text-[10px] font-semibold text-black">12345678-2-41</p>
      </div>
      <div className="rounded-lg border border-black/5 px-2.5 py-2 flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold text-black truncate">Alfa Kereskedelmi Kft.</p>
          <p className="text-[9px] text-black/45">Partner adatai lekérve a hivatalos cégadatbázisból</p>
        </div>
        <span className="text-[8px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#E2FBF4]" style={{ color: C.teal }}>AI</span>
      </div>
    </div>,
  ];

  return (
    <div className="relative w-full h-[440px] lg:h-[520px] overflow-hidden">
      <style>{`
        @keyframes teaser-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .teaser-track { animation: teaser-scroll 36s linear infinite; }
        .teaser-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .teaser-track { animation: none; }
        }
      `}</style>

      {/* looping track — panels duplicated 2x for a seamless loop */}
      <div className="teaser-track flex flex-col">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-col" aria-hidden={copy === 1}>
            {panels.map((p) => (
              <div key={`${copy}-${p.key}`} className="pb-4">{p}</div>
            ))}
          </div>
        ))}
      </div>

      {/* white fades above and under the teaser */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </div>
  );
}

function SolutionSection() {
  return (
    <section id="megoldas" className="relative w-full bg-white pt-14 lg:pt-20 pb-20 lg:pb-24 overflow-hidden">
      {/* faint teal halo — below the eyebrow, at the title */}
      <div
        className="absolute left-[14%] top-[6%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.10), transparent 70%)" }}
      />

      {/* same container as the problems section */}
      <div className={INNER_CARDS}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* left: eyebrow, title, paragraphs, CTA */}
          <div className="flex flex-col justify-center gap-7 lg:w-[46%]">
            <SectionEyebrow color={C.main}>A mi megoldásunk</SectionEyebrow>
            <h2
              className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
              style={{ color: C.ink }}
            >
              eaisyBill:
              <br />
              Nem több adat. Jobb <span style={{ color: C.coral }}>összkép.</span>
            </h2>
            <p className={`${FONT_MAIN} font-light text-base leading-relaxed`} style={{ color: C.ink }}>
              Az eaisyBill egy AI-támogatott pénzügyi és kontrolling platform, amely a vállalkozás
              szétszórt pénzügyi adataiból egységes, naprakész és ellenőrizhető működési képet épít.
            </p>
            <p className={`${FONT_MAIN} font-light text-base leading-relaxed`} style={{ color: C.ink }}>
              Nem számlázóprogram. Nem csak iktatórendszer. Egy teljes körű pénzügyi automatizációs
              platform, amely a rutinmunkát kiváltja, a kontrollt pedig a cégvezető kezébe adja.
            </p>
            <a
              href="#funkciok"
              className={`${FONT_MAIN} self-start inline-flex items-center justify-center px-8 h-[50px] rounded-full font-medium text-base transition-colors hover:bg-[#EA8767]/10`}
              style={{ border: `1px solid ${C.coral}`, color: C.coral }}
            >
              Teljes funkciólista
            </a>
          </div>

          {/* right: the moving teaser — its light UI panels work on the white background */}
          <div className="flex-1 min-w-0">
            <TeaserCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="problemak" className="relative w-full overflow-hidden bg-white py-20 lg:py-24">
      {/* faint coral halo behind the cards (brand color) */}
      <div
        className="absolute left-1/2 top-[58%] w-[640px] h-[640px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(234,135,103,0.12), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        {/* header — identical rhythm on every product page */}
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow color={C.main}>A probléma</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} mt-5 font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.ink }}
          >
            Amikor a pénzügyek kinövik az Excelt
          </h2>
          <p className={`${FONT_MAIN} mt-5 font-light text-lg leading-relaxed max-w-[720px]`} style={{ color: C.ink }}>
            Ahogy nő a cég, úgy bonyolódnak a pénzügyek: több számla, több bank, több partner — és
            egyre nehezebb átlátni, pontosan hol tart a vállalkozás.
          </p>
        </div>

        {/* 6 problem cards — fixed height = the tallest card across pages */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          {PROBLEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-black/5 p-6 lg:p-7 flex flex-col gap-4 lg:h-[272px]"
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: C.lightBg }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.main }} />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className={`${FONT_MAIN} font-semibold text-2xl leading-snug`} style={{ color: C.ink }}>
                  {title}
                </h3>
                <p className={`${FONT_MAIN} font-light text-xs leading-relaxed`} style={{ color: C.ink }}>
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

function FeaturesSection() {
  const [filter, setFilter] = useState<BillFeatureCat | "all">("all");
  const [toastVisible, setToastVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, lastX: 0, lastT: 0, v: 0, raf: 0 });

  // cards sorted by the category-chip order, so same-category (same-color) cards are grouped
  const catOrder = FEATURE_CATEGORIES.map((c) => c.id);
  const sorted = [...FEATURES].sort((a, b) => catOrder.indexOf(a.cat) - catOrder.indexOf(b.cat));
  const visible = filter === "all" ? sorted : sorted.filter((f) => f.cat === filter);
  const countOf = (cat: BillFeatureCat) => FEATURES.filter((f) => f.cat === cat).length;

  // swipe hint toast: show once when the section scrolls into view
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

  // auto-dismiss the toast after a few seconds
  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 4500);
    return () => clearTimeout(t);
  }, [toastVisible]);

  // back to the start whenever the filter changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0 });
    updateArrows();
  }, [filter]);

  // chevron paging state
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }
  useEffect(() => {
    updateArrows();
  }, []);
  function page(dir: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    stopMomentum();
    // loop: past the end -> back to the start; before the start -> to the end
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

  // mouse drag-to-scroll with pointer capture + momentum glide (touch uses native scrolling)
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
        : "bg-white border-black/10 font-medium hover:border-[#0D9488]/60 hover:shadow-sm"
    }`;

  return (
    <section id="funkciok" ref={sectionRef} className="relative w-full overflow-hidden bg-white pb-20 lg:pb-24">
      <style>{`
        @keyframes features-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes swipe-hint-wiggle { 0%, 100% { transform: translateX(-7px); } 50% { transform: translateX(7px); } }
        @media (prefers-reduced-motion: reduce) { .swipe-hint-anim { animation: none !important; } }
      `}</style>

      {/* faint coral halo on the right side */}
      <div
        className="absolute left-[84%] top-[32%] w-[560px] h-[560px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(234,135,103,0.13), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Funkciók - Teljes áttekintés"
          eyebrowColor={C.main}
          title={
            <>
              Kevesebb táblázat. Kevesebb <br className="hidden lg:block" />
              egyeztetés. Több <span style={{ color: C.coral }}>kontroll.</span>
            </>
          }
          subtitle="A számlák beérkezésétől a kontírozáson át a vezetői riportokig — 18 funkció egy összekapcsolt rendszerben, hogy a pénzügyek végre maguktól menjenek."
          titleClass="text-4xl lg:text-[40px]"
        />

        {/* filter chips — two rows (3 + 2) */}
        <div className="mt-14 lg:mt-20 w-full max-w-[960px] mx-auto flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => { setFilter("all"); setToastVisible(false); }}
            className={chipCls(filter === "all")}
            style={filter === "all" ? { backgroundColor: C.coral } : undefined}
          >
            Összes{" "}
            <span className="font-semibold" style={{ color: filter === "all" ? "rgba(255,255,255,0.9)" : C.coral }}>
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
                style={active ? { backgroundColor: C.coral } : undefined}
              >
                <Icon
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  style={{ color: active ? "rgba(255,255,255,0.9)" : C.main }}
                />
                <span className="font-medium" style={{ color: active ? "white" : C.ink }}>{label}</span>
                <span className="font-semibold" style={{ color: active ? "rgba(255,255,255,0.9)" : C.coral }}>
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
          onScroll={() => { setToastVisible(false); updateArrows(); }}
          className={`flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-proximity pb-2 select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden ${
            visible.length < 4 ? "lg:justify-center" : ""
          }`}
          style={{ scrollbarWidth: "none", animation: "features-fade-in 0.4s ease both" }}
        >
          {visible.map(({ num, icon: FeatIcon, cat, title, desc }) => {
            const category = FEATURE_CATEGORIES.find((c) => c.id === cat)!;
            const CatIcon = category.icon;
            return (
              <div
                key={num}
                className="snap-start shrink-0 grow-0 basis-[85%] sm:basis-[calc(50%_-_12px)] lg:basis-[calc((100%_-_72px)/_4)] lg:min-h-[458px] relative overflow-hidden bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 lg:p-10 flex flex-col items-center text-center gap-6"
                style={{ border: "1px solid rgba(13,148,136,0.4)" }}
              >
                {/* category label — icon + text, 12px light, no frame */}
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
                <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                  {title}
                </h3>
                <p className={`${FONT_MAIN} font-light text-[11.5px] leading-[1.7]`} style={{ color: C.ink }}>
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
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#0D9488]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(13,148,136,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.main }} />
          </button>
          <button
            onClick={() => page(1)}
            aria-label="Következő funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#0D9488]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(13,148,136,0.5)" }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} style={{ color: C.main }} />
          </button>
        </div>

        {/* swipe hint toast — appears once, auto-dismisses */}
        <div
          aria-hidden
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none transition-all duration-500 ${
            toastVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-white border border-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.18)] flex items-center justify-center">
            <div className="swipe-hint-anim" style={{ animation: "swipe-hint-wiggle 1.6s ease-in-out infinite" }}>
              <MoveHorizontal className="w-7 h-7" strokeWidth={2} style={{ color: C.coral }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type BillFeatureCat = "beerk" | "ai" | "penzugy" | "kontrolling";

const FEATURE_CATEGORIES: { id: BillFeatureCat; label: string; icon: typeof Upload; color: string; soft: string; deep: string }[] = [
  { id: "beerk", label: "Adatok és dokumentumok beérkezése", icon: Upload, color: "#6ACCC3", soft: "rgba(106,204,195,0.22)", deep: "#005757" },
  { id: "ai", label: "AI feldolgozás, kontírozás", icon: Sparkles, color: "#0D9488", soft: "rgba(13,148,136,0.15)", deep: "#005757" },
  { id: "penzugy", label: "Pénzügyi működés", icon: Database, color: "#005757", soft: "rgba(0,87,87,0.12)", deep: "#032D32" },
  { id: "kontrolling", label: "Kontrolling és erőforráskép", icon: SlidersHorizontal, color: "#EA8767", soft: "rgba(234,135,103,0.18)", deep: "#A64829" },
];

function BenefitsSection() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section
      id="elonyok"
      className="relative w-full overflow-hidden bg-white py-16 lg:py-20"
    >
      <style>{`@keyframes benefits-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <div className={`relative ${INNER_CARDS} flex flex-col lg:flex-row gap-12 lg:gap-16`}>
        {/* left: eyebrow, title, paragraph */}
        <div className="flex flex-col justify-center gap-6 lg:w-[40%]">
          <SectionEyebrow color={C.main}>Előnyök</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.ink }}
          >
            Amiért minden szereplő
            <br className="hidden lg:block" />
            <span style={{ color: C.coral }}> értékelni fogja</span>
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed`} style={{ color: C.ink }}>
            Nem egyforma a munka, ha céget vezetsz, könyvelsz, vagy ha a vállalkozás pénzügyeit
            kezeled. Az eaisyBill mindhárom szereplőnek a saját feladatához igazított előnyöket ad.
          </p>
        </div>

        {/* right: small role chips top-right + numbered points */}
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

          <div key={role.id} className="flex flex-col gap-9 lg:gap-10 min-h-[300px]" style={{ animation: "benefits-fade-in 0.4s ease both" }}>
            {role.benefits.map(({ title, desc }, i) => (
              <div key={title} className="flex items-start gap-5">
                <span
                  className={`${FONT_MAIN} font-medium text-4xl lg:text-5xl leading-none shrink-0`}
                  style={{ color: role.numColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className={`${FONT_MAIN} font-semibold text-base`} style={{ color: C.ink }}>
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
        style={{ borderColor: "rgba(13,148,136,0.3)" }}
      >
        {/* dark layer fades in on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "#439288" }}
        />
        <span
          className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 bg-[#6FB3AB] group-hover:bg-[#235556]"
        >
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
      {/* faint accent halo on the right side */}
      <div
        className="absolute left-[84%] top-[35%] w-[560px] h-[560px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(234,135,103,0.13), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Kinek való?"
          eyebrowColor={C.main}
          title="Kik számára jelent megoldást az eaisyBill?"
          subtitle="Öt helyzet, amikor az eaisyBill nem extra, hanem azonnali segítség — a növekvő portfóliótól a digitális átállásig."
          titleClass="text-4xl lg:text-[40px]"
        />

        {/* desktop: 3-card carousel, dark highlighted middle card */}
        <div
          key={first}
          className="mt-12 lg:mt-16 hidden lg:flex items-stretch gap-6"
          style={{ animation: `${dir === 1 ? "who-slide-right" : "who-slide-left"} 0.45s cubic-bezier(0.22,1,0.36,1) both` }}
        >
          {WHO_FOR.slice(first, first + PER_VIEW).map((item, i) => (
            <WhoCard key={item.num} item={item} index={first + i + 1} />
          ))}
        </div>

        {/* mobile: stacked list (light cards) */}
        <div className="mt-12 flex flex-col gap-5 lg:hidden">
          {WHO_FOR.map((item, i) => (
            <WhoCard key={item.num} item={item} index={i + 1} />
          ))}
        </div>

        {/* chevron paging */}
        <div className="mt-10 hidden lg:flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Előző helyzetek"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#0D9488]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(13,148,136,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.main }} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Következő helyzetek"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#0D9488]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(13,148,136,0.5)" }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} style={{ color: C.main }} />
          </button>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  // accordion — only one question open at a time; opening another auto-closes the previous
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="gyik" className="relative w-full bg-white pb-20 lg:pb-24 overflow-hidden">
      {/* faint HALO halo behind the left text */}
      <div
        className="absolute left-[12%] top-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col lg:flex-row gap-12 lg:gap-16`}>
        {/* left: eyebrow, title, subtitle */}
        <div className="flex flex-col gap-6 lg:w-[38%]">
          <SectionEyebrow color={C.main}>GYIK</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.ink }}
          >
            Amit meg szoktak <span style={{ color: C.coral }}>kérdezni</span>
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed`} style={{ color: C.ink }}>
            Válaszok a leggyakrabban felmerülő kérdésekre — a bevezetéstől a NAV-megfelelésig és az árazásig.
          </p>
        </div>

        {/* right: single-column accordion */}
        <div className="flex-1 flex flex-col">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                >
                  <span className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                    {f.q}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={
                      open
                        ? { border: `1px solid ${C.coral}`, color: C.coral }
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
                {/* smooth height animation via grid-rows */}
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

// closing contact section — eaisyBooks-style dark panel with demo offer
const BILL_DEMO_STEPS = [
  "Bemutatjuk a NAV-szinkront, az AI dokumentumkivonatot és az automatikus kontírozást",
  "Végigvisszük a bankintegrációt és a banki tranzakciók párosítását",
  "Megmutatjuk a valós idejű ÁFA- és cash-flow kimutatásokat",
  "Felteheted a kérdéseidet",
  "Megbeszéljük a bevezetés menetét és a személyre szabott árazást",
];

const BILL_DEMO_REASONS = [
  "Ha heti szinten kellene követned a számlákat",
  "Ha a hónapzárás mindig kapkodással jár",
  "Ha az ÁFA-bevallás előtt mindig kell vadászni a hiányzó számlákra",
  "Ha fontos, hogy minden pénzügyi adat egy helyen legyen",
];

function CtaSection() {
  return (
    <section id="demo" className="w-full pt-16 lg:pt-20 pb-16 lg:pb-20" style={{ backgroundColor: "#102C31" }}>
      <div className={INNER_CARDS}>
        <div
          className="relative overflow-hidden rounded-[28px] px-8 py-12 lg:px-16 lg:py-14"
          style={{ border: "1px solid rgba(150,210,200,0.35)" }}
        >
          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* left: demo offer */}
            <div className="flex flex-col items-start gap-6 lg:w-[55%]">
              <SectionEyebrow color="#8FD3C9">Következő lépés</SectionEyebrow>
              <h2
                className={`${FONT_MAIN} font-medium text-4xl lg:text-[44px] leading-[1.15] tracking-tight`}
                style={{ color: "#8FD3C9" }}
              >
                Nézd meg
                <br />
                működés közben!
              </h2>
              <p className={`${FONT_MAIN} font-light text-base leading-relaxed text-white/80`}>
                Megmutatjuk, hogyan működik az eaisyBill a te cégednél — a saját számláidon, a saját
                folyamataidban.
              </p>
              <p className={`${FONT_MAIN} font-medium text-sm text-white/90 mt-2`}>
                Mi történik a demó során?
              </p>
              <ul className="flex flex-col gap-2.5">
                {BILL_DEMO_STEPS.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-[5px] h-[5px] rounded-full mt-[7px] shrink-0" style={{ backgroundColor: C.accent }} />
                    <span className={`${FONT_MAIN} font-light text-sm leading-relaxed text-white/75`}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${FONT_MAIN} font-medium text-sm leading-relaxed text-white mt-2`}>
                A demó ingyenes és nem általános termékbemutató — a te céged kihívásaira
                fókuszálunk.
              </p>
            </div>

            {/* right: when to ask + CTA */}
            <div className="flex flex-col items-start gap-7 lg:flex-1 lg:pt-14">
              <h3 className={`${FONT_MAIN} font-medium text-2xl lg:text-[28px] leading-snug text-white`}>
                Mikor érdemes
                <br />
                demót kérni?
              </h3>
              <div className="flex flex-col items-start gap-3">
                {BILL_DEMO_REASONS.map((reason) => (
                  <span
                    key={reason}
                    className={`${FONT_MAIN} inline-flex items-center px-5 py-2.5 rounded-full font-light text-[13px] text-white/90`}
                    style={{ border: "1px solid rgba(106,204,195,0.45)" }}
                  >
                    {reason}
                  </span>
                ))}
              </div>
              <button
                onClick={openDemoModal}
                className={`${FONT_MAIN} mt-2 inline-flex items-center justify-center px-9 h-[54px] rounded-full font-medium text-sm tracking-wider text-white transition-opacity hover:opacity-90`}
                style={{ backgroundColor: C.coral }}
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

function StickyDemoCta() {
  const [heroInView, setHeroInView] = useState(true);
  const [demoInView, setDemoInView] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target.id === "hero") setHeroInView(e.isIntersecting);
          if (e.target.id === "demo") setDemoInView(e.isIntersecting);
          if (e.target.id === "kapcsolat") setFooterInView(e.isIntersecting);
        });
      },
      { threshold: 0.12 }
    );
    ["hero", "demo", "kapcsolat"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const visible = !heroInView && !demoInView && !footerInView;

  return (
    <button
      onClick={openDemoModal}
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-50 px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest text-white shadow-[0_8px_30px_rgba(242,107,119,0.45)] hover:opacity-90 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: C.coral }}
    >
      KÉRJ DEMOT
    </button>
  );
}

// demo request stopper — dotty teal gradient strip between features and benefits
function DemoCtaStrip() {
  return (
    <section className="w-full bg-white pb-20 lg:pb-24">
      <div className={INNER_CARDS}>
        <div
          className="relative overflow-hidden rounded-[24px] flex flex-col lg:flex-row"
          style={{ background: "linear-gradient(90deg, rgba(13,148,136,0.13) 0%, rgba(13,148,136,0.05) 55%, rgba(13,148,136,0) 100%)" }}
        >
          {/* left: demo photo + transparent white meta bar at its bottom */}
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
                  style={{ color: C.ink }}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* right: eyebrow, title, description, CTA */}
          <div className="flex-1 flex flex-col items-start justify-center gap-6 px-8 py-10 lg:px-14 lg:py-16">
            <SectionEyebrow color={C.coral}>Demo</SectionEyebrow>
            <h2
              className={`${FONT_MAIN} font-medium text-4xl lg:text-[36px] leading-tight tracking-tight`}
              style={{ color: C.ink }}
            >
              Ne csak elképzeld.
              <br />
              Nézd meg <span style={{ color: C.coral }}>élőben.</span>
            </h2>
            <p className={`${FONT_MAIN} font-light text-base leading-relaxed`} style={{ color: C.ink }}>
              Minden vállalkozás más. Mondd el, nálad milyen helyzetek okoznak problémát, és
              megmutatjuk, hogyan segítene az eaisyBill a te folyamataidban – demóban, a saját
              példáddal.
            </p>
            <button
              onClick={openDemoModal}
              className={`${FONT_MAIN} mt-2 inline-flex items-center justify-center px-8 h-[46px] rounded-full font-medium text-sm tracking-wider text-white transition-opacity hover:opacity-90`}
              style={{ backgroundColor: C.coral }}
            >
              Időpontot foglalok
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EaisyBill() {
  return (
    <div>
      <Seo
        title="eaisyBill – AI pénzügyi és kontrolling platform | eaisy"
        description="Az eaisyBill AI-támogatott pénzügyi platform: automatikus számlafeldolgozás, kontírozás, NAV-szinkron, átlátható cégadatok és valós idejű pénzügyi kontroll egy helyen."
        path="/eaisy-bill"
        jsonLd={[
          organizationSchema(),
          softwareAppSchema({
            name: "eaisyBill",
            description: "AI-támogatott pénzügyi és kontrolling platform: automatikus számlafeldolgozás, kontírozás, NAV-szinkron és valós idejű pénzügyi kontroll.",
            path: "/eaisy-bill",
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
      <CtaSection />
      <StickyDemoCta />
    </div>
  );
}
