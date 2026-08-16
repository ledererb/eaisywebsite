import { useState, useRef, useEffect } from "react";
import { Wand2, Eye, ArrowUpRight, Briefcase, Database, Landmark, FileText, Sparkles, MoveHorizontal, Star, ChevronDown } from "lucide-react";
import { openDemoModal } from "@/app/Root";
import { Seo, organizationSchema, softwareAppSchema, faqSchema } from "@/app/components/Seo";
import imgHeroBg from "@/imports/EaisyBooks/hero-background.webp";
import imgProblemBg from "@/imports/EaisyBooks/problem-bg.webp";
import imgFunkcioKarta from "@/imports/EaisyBooks/funkcio-karta.webp";
import imgBadgeShield from "@/imports/EaisyBooks/badge-shield.png";
import imgBadgeNav from "@/imports/EaisyBooks/badge-nav.png";
import imgBadgeGdpr from "@/imports/EaisyBooks/badge-gdpr.png";

// ── eaisyBooks palette ───────────────────────────────────────────────────────
const C = {
  // primary (türkiz-kék)
  p50: "#DAF4F9",
  p200: "#89C4D1",
  p400: "#3F97AA",
  p600: "#085D6F",
  p800: "#032A32",
  p900: "#031A1E",
  // accent (narancssárga)
  a50: "#FFF0D9",
  a300: "#F2BC6B",
  a500: "#E58F0E",
  a700: "#AE6A04",
  a900: "#8A5300",
  // shared
  dark: "#264350", // sötét szövegszín az oldalon
  bodyText: "rgba(0,0,0,0.55)",
  violet: "#701ab7", // eaisyBoost-lila az AI-elemekhez
  violetBg: "#F1EAFC",
};

const FONT_MAIN = "font-['Montserrat',sans-serif]";
const FONT_CARD = "font-['Inter',sans-serif]";

// containers — 1728px design: 1450px inner content (padding included); hero frame is 1615px
const INNER = "w-full max-w-[1530px] mx-auto px-6 lg:px-10"; // → 1450px content

// ── hero teaser cards ────────────────────────────────────────────────────────
const BOTTOM_CARDS = [
  {
    icon: Briefcase,
    chipBg: C.p50,
    chipColor: C.p400,
    title: "Portfólió kezelés",
    desc: "Minden ügyfelet, minden adatot egy helyen kezelhetsz",
  },
  {
    icon: Database,
    chipBg: C.violetBg,
    chipColor: C.violet,
    title: "Bérszámfejtés",
    desc: "Automatizált bérszámfejtés, bevallások és kifizetési jegyzékek",
  },
  {
    icon: Landmark,
    chipBg: C.a50,
    chipColor: C.a500,
    title: "TAO / KIVA",
    desc: "Társasági adó és KIVA kalkuláció, összehasonlítás és bevallás",
  },
];

const CARD_BASE =
  "rounded-2xl shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md";

// ── problems section ─────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    num: "01",
    title: "Növekvő ügyfélkör, egyre több feladat",
    desc: "Több cég, több dolgozó, több bevallás, több határidő — és egyre nehezebb átlátni, hol tart pontosan a munka. A manuális folyamatok lassítanak, hibát termelnek, és elveszik az időt az érdemi könyvelői munkától.",
  },
  {
    num: "02",
    title: "Egy elütés. Rengeteg pluszmunka.",
    desc: "Számlaadatok, jelenléti-ívek, juttatások – minden kézi bevitel hibalehetőség, minden hiba NAV-ellenőrzési kockázat.",
  },
  {
    num: "03",
    title: "A növekedéshez mindig új ember kell",
    desc: "Az ügyfélszám növekedése új kapacitást igényel, ami rövid távon skálázási problémához vezet.",
  },
  {
    num: "04",
    title: "“Ezt még nem küldted el…”",
    desc: "Az ügyfél nem küldte el a számlát, nem töltötte ki a jelenléti ívet, hiányzik egy nyilatkozat. A könyvelő fut az ügyfél után — ahelyett, hogy a rendszer automatikusan bekérné, ami hiányzik.",
  },
  {
    num: "05",
    title: "Adatok szétszórva Excelekben, e-mailekben",
    desc: "A bérszámfejtés az egyik szoftverben, a könyvelés a másikban, a bevallások a harmadikban, a dokumentumok a negyedikben. Nincs egy hely, ahol minden egyben látszik.",
  },
  {
    num: "06",
    title: "A NAV határidők állandó stressze",
    desc: "08E 15 napon belül, 58-as negyedévente, 65-ös havonta, 2608 havonta, KATA félévente. Minden ügyfélnél más-más határidők — és egyetlen elmulasztott határidő késedelmi pótlékot jelent.",
  },
];

// ── shared section eyebrow: bar + uppercase label (teal default, orange on dark) ──
function SectionEyebrow({ children, color = C.p400 }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-[3px] h-4 rounded-full" style={{ backgroundColor: color }} />
      <p
        className={`${FONT_CARD} font-semibold text-[13px] uppercase tracking-[0.2em]`}
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

// ── shared section header: eyebrow + Montserrat title + subtitle ─────────────
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2
        className={`${FONT_MAIN} mt-5 font-medium text-4xl lg:text-[50px] leading-tight tracking-tight`}
        style={{ color: C.dark }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${FONT_MAIN} mt-5 font-light text-base leading-relaxed max-w-[720px]`}
          style={{ color: C.dark }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── features section: categories + 18 feature cards ─────────────────────────
type FeatureCategoryId = "iroda" | "ber" | "adozas" | "dok" | "ai";

const FEATURE_CATEGORIES: { id: FeatureCategoryId; label: string; icon: typeof Briefcase; color: string }[] = [
  { id: "iroda", label: "Iroda és ügyfelek", icon: Briefcase, color: "#89C4D1" },
  { id: "ber", label: "Bérszámfejtés", icon: Database, color: "#3F97AA" },
  { id: "adozas", label: "Adózás és bevallások", icon: Landmark, color: "#085D6F" },
  { id: "dok", label: "Dokumentumok és riportok", icon: FileText, color: "#032A32" },
  { id: "ai", label: "AI és automatizáció", icon: Sparkles, color: "#E58F0E" },
];

const FEATURES: { cat: FeatureCategoryId; title: string; desc: string }[] = [
  // iroda és ügyfelek
  { cat: "iroda", title: "Irodai dashboard és ügyfél-portfólió", desc: "Az összes ügyfél egyetlen felületen, három nézetben (rács, lista, kanban), felelős-hozzárendeléssel. KPI-kártyák, havi trend, kolléga-statisztika, automatizmus-analitika. Parancs-paletta a gyors navigációhoz. Minden ügyfél státusza egy pillantás alatt áttekinthető." },
  { cat: "iroda", title: "Szerepkör-alapú hozzáférés", desc: "Négy szerepkör (iroda admin, senior könyvelő, junior könyvelő, asszisztens), finomhangolható jogosultsági mátrixszal. Jóváhagyási sor a juniorok által készített anyagokhoz. Teljes körű audit napló: minden adatmódosítás, bejelentkezés és beküldés naplózva." },
  { cat: "iroda", title: "Új ügyfél felvétele varázsló", desc: "Meghívókód-alapú kapcsolódás, cégkeresés adószám alapján, kommunikációs csatornák beállítása. Automatikus bekérő a hiányzó dokumentumokhoz, NAV szinkronizálás bekapcsolása. A kezdeti adatgyűjtéstől az aktív ügyfélig — vezetett folyamat." },
  { cat: "iroda", title: "Ügyfélkártya és ügyfélportál", desc: "Részletes ügyfélprofil (cégadatok, számlák, bérszámfejtés, riportok, beállítások). Külön ügyfélportál, ahol a cégvezető valós időben látja a saját anyagait — számlákat, bérjegyzékeket, bevallásokat." },
  // bérszámfejtés
  { cat: "ber", title: "Teljes körű bérszámfejtés – 8 lépéses varázsló", desc: "Adatbekérés (automatikus email az ügyfélnek), dolgozói adatok, munkaidő-adatok (CSV/Excel import vagy kézi rögzítés), juttatások/cafeteria, előleg-keret kijelölés, bérkomponensek, járulékok, levonások, élő jegyzék. Összesítő és bérjegyzék egy gombnyomással." },
  { cat: "ber", title: "Dolgozókezelés – teljes életciklus", desc: "Beléptetés lépésről lépésre varázslóval, tömeges import (CSV/Excel sablonnal), részletes dolgozói kártya (bértörténet, szabadság-nyilvántartás, cafeteria, letiltások, nyilatkozatok), jogviszony-módosítás, kiléptetési varázsló. Minden, ami a dolgozók adminisztrációjához kell." },
  { cat: "ber", title: "Nyilatkozat-modul", desc: "Családi kedvezmény, általános nyilatkozatok, törvényi érvényesítési sorrend (Szja tv.) beépített megjelenítéssel. Aktív, lejárt és visszavont nyilatkozatok áttekintése, havi megtakarítás-összesítő, archívum típus/év/státusz szűrőkkel." },
  { cat: "ber", title: "Évzárási segéd", desc: "Bérszámfejtési éves zárás teendői, határidők, haladás-sáv. Az összes év végi feladat egyetlen felületen — várakozik/folyamatban státuszokkal. Nincs több kapkodás az év végén." },
  // adózás és bevallások
  { cat: "adozas", title: "EV modul – egyéni vállalkozók", desc: "Portfólió-dashboard, pénztárkönyv (egyszeres könyvitel), NAV import AI-kategorizálással. 11 féle kötelező nyilvántartás (Szt. 160–165. §), adóforma-összehasonlító (átalányadó / VSZJA / KATA), évihatár-figyelő, teljes körű EV-bevallások (SZJA, TB, KATA, HIPA, ÁFA), előtét- és naptárkezelés." },
  { cat: "adozas", title: "TAO modul – társasági adózók", desc: "TAO portfólió, adóalany-státusz wizard (Tao tv. 2. § döntési fája), üzleti év és fordulónap kezelés, TAO vs KIVA összehasonlító, KIVA-kalkulátor, beszámolási rezsim választó (Szt. vs IFRS), devizás adófizetés, Pillar Two-érintettség jelölés, évzárási varázsló, TAO-zárási kalendárium." },
  { cat: "adozas", title: "Bevallások és határidők", desc: "08E biztosítotti bejelentés, 2608 TB-járulékbevallás (a számfejtés után automatikusan generálódik), bevallás-workflow: PDF feltöltés → AVDH-aláírás → beküldés → nyugta letöltése. Adónaptár ügyfelenként határidőkkel, automatikus emlékeztetőkkel." },
  { cat: "adozas", title: "Egyéb szervezetformák", desc: "Civilek (egyesület/alapítvány), társasházak – külön nyilvántartás, havi közös költség, határidő-követés, alapok kezelése, egyéb szervezetek. Egyszerűsített éves beszámoló (Szt. 96–98. §)." },
  // dokumentumok és riportok
  { cat: "dok", title: "Dokumentum-előállítás", desc: "Bérjegyzék-generálás (Mt. 155. § szerinti kötelező tartalommal), magyar/angol nyelven. E-bérjegyzék portál (titkosított hozzáférés, státusz-követés). Utalási lista SEPA XML exporttal. Dokumentum-központ: minden kimenő állomány egy helyen." },
  { cat: "dok", title: "Hiányzó számlák gyűjtése", desc: "Prioritás szerinti kezelés (kritikus/közepes/alacsony), bekérés előzmények nyomon követésével, automatikus adatbekérő email-generálás (előre kitöltött eaisyBooks-állandós levél), ügyfél-bontású nézet és exportálható riport." },
  { cat: "dok", title: "Riport katalógus és egyedi riportok", desc: "Előre definiált riportok előzménynaplóval, riport-küldés emailben az ügyfélnek. Egyedi riport-készítő: oszlopválasztó, szűrők, egyedi mezőválogatás. Bérszámfejtési riportok." },
  { cat: "dok", title: "Compliance és integráció", desc: "Meghatalmazás-kezelés (Aír. 17. §), Cégkapu / KÜNY-tárhely integráció (IDÁP, KAÜ azonosító, automatikus nyugta-feldolgozás). GDPR modul: érintetti kérelmek, adatmegőrzési idők, automatikus törlés, adatfeldolgozói szerződések kezelése." },
  // ai és automatizáció
  { cat: "ai", title: "AI anomália-riport és AI asszisztens", desc: "Kritikus/figyelmeztetés/információ súlyozású automatikus hibadetektálás. AI asszisztens: kedvezmény-optimalizáló, anomália-detektor, jogszabály-kereső — beszélgetés-előzményekkel." },
  { cat: "ai", title: "Értesítési központ", desc: "Portfólió-szintű riasztások (kritikus/figyelmeztetés/tájékoztató): NAV-határidő visszaszámlálással, értékhatár-figyelmeztetések (KATA keret, átalány bevételi határ, ÁFA alanyi mentesség határ). Az iroda azonnal látja, hol kell beavatkozni." },
];

// ── benefits section: per-audience columns ───────────────────────────────────
const AUDIENCES: {
  prefix: string;
  label: string;
  headerBg: string;
  accent: string;
  benefits: { title: string; desc: string }[];
}[] = [
  {
    prefix: "AZ",
    label: "IRODAVEZETŐNEK",
    headerBg: "#89C4D1",
    accent: "#3F97AA",
    benefits: [
      { title: "Teljes portfólió-áttekintés", desc: "Minden ügyfél státusza, minden kolléga terhelése, minden határidő egyetlen dashboardon. Nincs több „hol tartunk?” körkérdés." },
      { title: "Skálázható növekedés", desc: "Sokkal több ügyfél ugyanazzal a csapattal. A növekedés nem jár arányos létszámbővítéssel — a fix költségek nem növekednek, csak a bevétel." },
      { title: "Kockázatcsökkentés", desc: "Automatikus határidő-követés, beépített jogszabályi validáció, audit napló. Kevesebb bírság, kisebb NAV-ellenőrzési kockázat." },
      { title: "Ügyfélmegtartás", desc: "Valós idejű ügyfélportál, átlátható folyamatok, proaktív kommunikáció. Az ügyfél, aki látja a saját pénzügyeit, nem vált könyvelőt." },
    ],
  },
  {
    prefix: "A",
    label: "SENIOR KÖNYVELŐNEK",
    headerBg: "#3F97AA",
    accent: "#032A32",
    benefits: [
      { title: "Jóváhagyás, nem adatrögzítés", desc: "A rendszer kontíroz, számol, könyvel. A senior könyvelő ellenőriz és jóváhagy — a szakértelmére koncentrál, nem az adatbevitelre." },
      { title: "Villámgyors hónapzárás", desc: "A bérszámfejtési varázsló, az automatikus járulékszámítás és a bevallás-generálás a havi ciklust napokról órákra rövidíti." },
      { title: "Teljes körű EV és TAO kezelés", desc: "Minden adózási forma egy felületen. Pénztárkönyv, kalkulátorok, értékhatár-figyelők — nincs több külön Excel a speciális ügyfeleknek." },
      { title: "Nyomon követhető folyamatok", desc: "A jóváhagyási sor és az audit napló biztosítja, hogy minden lépés dokumentált és visszakövethető." },
    ],
  },
  {
    prefix: "AZ",
    label: "ÜGYFÉLNEK (cégvezető)",
    headerBg: "#032A32",
    accent: "#032A32",
    benefits: [
      { title: "Valós idejű rálátás", desc: "Az ügyfélportálon keresztül a cégvezető bármikor látja a számláit, a bérjegyzékeit, a bevallásai állapotát. Nem kell várni a havi zárásra." },
      { title: "Kevesebb adminisztráció", desc: "Automatikus adatbekérők, dokumentum-feltöltési lehetőség, online nyilatkozattétel. Az ügyfélnek kevesebb időt kell töltenie az adminisztrációval." },
      { title: "Nincs meglepetés", desc: "Határidő-emlékeztetők, értékhatár-figyelmeztetések, automatikus értesítések. Az ügyfél mindig tudja, mi történik a pénzügyeivel." },
      { title: "Digitális, modern élmény", desc: "Az ügyfélportál mobilbarát, az e-bérjegyzék titkosított, a dokumentumok egy helyen elérhetők. XXI. századi elvárásoknak megfelelő kiszolgálás." },
    ],
  },
];

// ── who-for section: 5 office types, 3+2 grid ───────────────────────────────
const WHO_FOR = [
  {
    num: "01",
    title: "Növekvő könyvelőirodáknak",
    desc: "Ahol az ügyfélszám elérte azt a szintet, ahol a manuális követés már nem működik. Ha az iroda 20, 50 vagy 100+ ügyfelet kezel, a portfólió-áttekintés és az automatizált munkafolyamatok már nem kényelmi funkciók — hanem versenyképességi feltételek.",
  },
  {
    num: "02",
    title: "Teljes körű szolgáltatást nyújtó irodáknak",
    desc: "Ahol a könyvelés mellett bérszámfejtés, EV ügyintézés, TAO tervezés és bevallás-kezelés is zajlik. Az eaisyBooks minden ügyféltípust és adózási formát egyetlen platformon kezel — nincs szükség több külön szoftverre.",
  },
  {
    num: "03",
    title: "Skálázási problémával küzdő irodáknak",
    desc: "Ahol minden új ügyfél új kolléga felvételét jelentené — de erre nincs kapacitás vagy keret. Az automatizálás lehetővé teszi, hogy a meglévő csapat sokkal több ügyfelet szolgáljon ki.",
  },
  {
    num: "04",
    title: "Digitalizációra nyitott irodáknak",
    desc: "Ahol az irodavezető vagy a senior kollégák látják, hogy a papír-Excel-email háromszög nem tartható fenn hosszú távon. Az eaisyBooks a digitális transzformáció teljes eszköztárát adja — a NAV-szinkrontól az e-bérjegyzékig.",
  },
  {
    num: "05",
    title: "Minőségi ügyfélkiszolgálást célzó irodáknak",
    desc: "Ahol nemcsak a kötelező bevallásokat akarják határidőre beadni, hanem valódi tanácsadói kapcsolatot építeni az ügyfelekkel. Az eaisyBooks felszabadítja a kapacitást a magasabb értékű munkára — adótanácsadásra, üzleti tervezésre, személyes konzultációra.",
  },
];

// ── faq section ──────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Kiknek készült az eaisyBooks?",
    a: "Az eaisyBooks könyvelőirodák napi működését támogatja. Egyetlen rendszerben teszi átláthatóvá az ügyfelek, feladatok, dokumentumok, határidők, bevallások és bérszámfejtési folyamatok kezelését – kisebb és nagyobb ügyfélportfólió esetén is.",
  },
  {
    q: "Milyen ügyféltípusok kezelhetők a rendszerben?",
    a: "Az eaisyBooks egyéni vállalkozók, társas vállalkozások, civil szervezetek, alapítványok és társasházak kezelésére is felkészült. A funkciók és munkafolyamatok igazodnak az egyes szervezeti formák eltérő könyvelési, adózási és adminisztrációs sajátosságaihoz.",
  },
  {
    q: "Kiváltja az eaisyBooks a jelenlegi könyvelőprogramunkat?",
    a: "Igen. Az eaisyBooks teljes értékű könyvelőirodai rendszerként mindazokat az alapvető funkciókat biztosítja, amelyek a hazai könyvelőprogramokban elérhetők, miközben az iroda teljes működését is egy közös felületen fogja össze. A váltás és az adatátadás pontos folyamatát minden esetben az iroda jelenlegi rendszereihez igazítjuk.",
  },
  {
    q: "Összekapcsolható a meglévő rendszereinkkel?",
    a: "Igen, az eaisyBooks külső rendszerekkel és adatforrásokkal is összekapcsolható. A pontos integrációs lehetőségeket a használt szoftverek, az elérhető kapcsolódási pontok és az iroda egyedi folyamatai alapján határozzuk meg.",
  },
  {
    q: "Mennyi idő alatt vezethető be?",
    a: "A bevezetés ideje az iroda méretétől, az ügyfélállománytól, a választott funkcióktól és az integrációs igényektől függ. Az indulás előtt felmérjük a jelenlegi működést, majd ennek alapján alakítjuk ki a bevezetés és az adatátadás lépéseit.",
  },
  {
    q: "Biztonságban vannak az ügyfél- és pénzügyi adatok?",
    a: "Az adatbiztonság az eaisyBooks működésének alapja. A szerepkör-alapú hozzáférések, a szabályozható jogosultságok és a naplózott műveletek biztosítják, hogy minden felhasználó csak a munkájához szükséges adatokhoz és funkciókhoz férjen hozzá.",
  },
  {
    q: "Mennyibe kerül az eaisyBooks?",
    a: "Az eaisyBooks modulárisan igazítható az iroda méretéhez, ügyfélszámához és működéséhez, így csak azokért a funkciókért kell fizetni, amelyekre valóban szükség van. Az árat a választott modulok, a felhasználói és adatmennyiség, valamint az integrációs igények alapján, egyedi ajánlatban határozzuk meg.",
  },
];

// ── shared in-view hook for scroll-triggered entrance animations ────────────
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-32 pb-14 lg:pt-40 lg:pb-20">
      {/* centered 1615px gradient frame with rounded bottom corners */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1615px] overflow-hidden rounded-b-[40px]">
        <img
          src={imgHeroBg}
          alt=""
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* top fade: the gradient (and dot grid) dissolves into white */}
        <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-white via-white/65 to-transparent pointer-events-none" />
      </div>

      <div className={`relative ${INNER} flex flex-col items-center`}>
        {/* brand title */}
        <p
          className={`${FONT_CARD} font-extrabold text-4xl lg:text-[48px] leading-none`}
          style={{ color: C.a500 }}
        >
          eaisyBooks
        </p>

        {/* main title */}
        <h1
          className={`${FONT_MAIN} mt-7 font-medium text-4xl lg:text-[56px] leading-[1.2] tracking-tight text-center`}
          style={{ color: C.dark }}
        >
          Sokszorozd meg könyvelőirodád
          <br className="hidden lg:block" /> kapacitását AI-val
        </h1>

        {/* CTAs */}
        <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#problemak"
            className={`${FONT_MAIN} inline-flex items-center justify-center px-9 h-[46px] rounded-full bg-white font-semibold text-sm tracking-wider transition-opacity hover:opacity-80`}
            style={{ border: `1px solid ${C.dark}`, color: C.dark }}
          >
            Fedezd fel
          </a>
          <button
            onClick={openDemoModal}
            className={`${FONT_MAIN} inline-flex items-center justify-center px-9 h-[46px] rounded-full font-semibold text-sm tracking-wider text-white transition-opacity hover:opacity-90`}
            style={{ backgroundColor: C.a500 }}
          >
            Kérj demot
          </button>
        </div>

        {/* ── teaser bento grid ── */}
        <div className="mt-14 lg:mt-20 w-full rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-md p-4 lg:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* left stack: AI asszisztens + 360° */}
            <div className="sm:col-span-1 lg:col-span-3 lg:row-span-2 flex flex-col gap-4 lg:gap-5">
              <div className={`${CARD_BASE} bg-white p-6 flex-1 flex flex-col items-start gap-3`}>
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                  style={{ backgroundColor: C.violetBg }}
                >
                  <Wand2 className="w-5 h-5" strokeWidth={1.5} style={{ color: C.violet }} />
                </div>
                <h3 className={`${FONT_CARD} font-medium text-lg`} style={{ color: C.dark }}>
                  AI asszisztens
                </h3>
                <p className={`${FONT_CARD} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                  Kérdezz a jogszabályokról, kedvezményekről, vagy kérj elemzést a bérszámfejtési
                  adatokról.
                </p>
              </div>

              <div
                className={`${CARD_BASE} p-6 flex-1 flex flex-col items-start justify-center gap-1.5`}
                style={{ background: "linear-gradient(180deg, #FFF3DE 0%, #F7DCA8 100%)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-2"
                  style={{ backgroundColor: "#FBE3BE" }}
                >
                  <Eye className="w-5 h-5" strokeWidth={1.5} style={{ color: C.a700 }} />
                </div>
                <p className={`${FONT_CARD} font-bold text-3xl leading-none`} style={{ color: C.dark }}>
                  360°
                </p>
                <p className={`${FONT_CARD} font-medium text-lg leading-snug`} style={{ color: C.dark }}>
                  valós idejű áttekintés
                </p>
              </div>
            </div>

            {/* tall center card: 18+ funkció → feature list anchor */}
            <a
              href="#funkciok"
              className={`${CARD_BASE} group relative overflow-hidden sm:col-span-1 lg:col-span-3 lg:row-span-2 min-h-[280px] lg:min-h-0 block`}
            >
              <img
                src={imgFunkcioKarta}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="relative h-full flex flex-col p-6">
                <div className="ml-auto -mt-1 -mr-1 w-9 h-9 rounded-[10px] bg-white/90 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} style={{ color: C.dark }} />
                </div>
                <div className="mt-2">
                  <p
                    className={`${FONT_CARD} font-extrabold text-5xl leading-none tracking-tight`}
                    style={{ color: C.dark }}
                  >
                    18+
                  </p>
                  <p className={`${FONT_CARD} mt-3 font-bold text-xl leading-snug`} style={{ color: C.dark }}>
                    funkció,
                  </p>
                  <p className={`${FONT_CARD} font-medium text-xl leading-snug`} style={{ color: C.dark }}>
                    ami lefedi az iroda teljes működését.
                  </p>
                </div>
              </div>
            </a>

            {/* 90% időfelszabadítás */}
            <div
              className={`${CARD_BASE} sm:col-span-1 lg:col-span-3 p-6 flex flex-col justify-center gap-1 border-0`}
              style={{ background: `linear-gradient(135deg, ${C.a300} 0%, ${C.p400} 100%)` }}
            >
              <p className={`${FONT_CARD} font-medium text-base text-white/90`}>Akár</p>
              <p className={`${FONT_CARD} font-extrabold text-5xl leading-none text-white tracking-tight`}>
                90%
              </p>
              <p className={`${FONT_CARD} font-medium text-base text-white/90`}>időfelszabadítás</p>
            </div>

            {/* AI-támogatott compliance */}
            <div className={`${CARD_BASE} bg-white sm:col-span-1 lg:col-span-3 p-6 flex flex-col items-start gap-3`}>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-black/[0.05] px-3.5 py-2">
                <img src={imgBadgeShield} alt="Adatbiztonság" className="h-8 w-8" loading="lazy" decoding="async" />
                <img src={imgBadgeNav} alt="NAV" className="h-8 w-8" loading="lazy" decoding="async" />
                <img src={imgBadgeGdpr} alt="GDPR" className="h-8 w-8" loading="lazy" decoding="async" />
              </div>
              <h3 className={`${FONT_CARD} font-medium text-lg leading-tight`} style={{ color: C.dark }}>
                AI-támogatott compliance
              </h3>
              <p className={`${FONT_CARD} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                Anomália-detektálás, adóoptimalizálási javaslatok, jogszabálykövetés, automatikus
                határidő-figyelmeztetés
              </p>
            </div>

            {/* bottom row: 3 white feature cards — négyzetesebb arány, kisebb gap */}
            <div className="sm:col-span-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BOTTOM_CARDS.map(({ icon: Icon, chipBg, chipColor, title, desc }) => (
                <div
                  key={title}
                  className={`${CARD_BASE} bg-white p-5 flex flex-col items-center text-center gap-2`}
                >
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-1"
                    style={{ backgroundColor: chipBg }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: chipColor }} />
                  </div>
                  <h3 className={`${FONT_CARD} font-medium text-base`} style={{ color: C.dark }}>
                    {title}
                  </h3>
                  <p className={`${FONT_CARD} text-[13px] leading-relaxed`} style={{ color: C.bodyText }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  const { ref: gridRef, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <section id="problemak" className="relative w-full overflow-hidden bg-white py-20 lg:py-24">
      {/* orange radial glow behind the cards */}
      <img
        src={imgProblemBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <div className={`relative ${INNER} flex flex-col`}>
        <SectionHeader
          eyebrow="A probléma"
          title="6 ismerős probléma"
          subtitle="A legtöbb időt nem maga a könyvelés viszi el, hanem minden, ami körülötte történik. Mindennapos problémák, amelyek észrevétlenül fogják vissza az iroda működését."
        />

        <div
          ref={gridRef}
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full"
        >
          {PROBLEMS.map(({ num, title, desc }, i) => {
            // entrance: per row, side cards fly in from both sides, middle from below
            const row = Math.floor(i / 3);
            const col = i % 3;
            const delay = row * 140 + col * 70;
            const hidden =
              col === 0
                ? "translateX(-48px)"
                : col === 2
                  ? "translateX(48px)"
                  : "translateY(32px)";
            return (
              <div
                key={num}
                className={`${CARD_BASE} bg-white p-7 flex flex-col gap-4`}
                style={{
                  border: "1px solid rgba(137,196,209,0.6)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : hidden,
                  transition: `opacity 0.5s ease ${delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
                }}
              >
              <p className={`${FONT_MAIN} font-bold text-xl leading-none`} style={{ color: C.a500 }}>
                {num}
              </p>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.dark }}>
                {title}
              </h3>
              <p className={`${FONT_MAIN} font-light text-sm leading-relaxed`} style={{ color: C.dark }}>
                {desc}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="megoldas" className="w-full bg-white pb-20 lg:pb-24">
      <div className={INNER}>
        <div
          className="relative overflow-hidden rounded-[32px] px-6 py-16 lg:px-12 lg:py-20"
          style={{ background: "linear-gradient(105deg, #F9E3BC 0%, #DAF4F9 100%)" }}
        >
          {/* dot grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(8,93,111,0.10) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative flex flex-col items-center text-center gap-5">
            <SectionEyebrow>A mi megoldásunk</SectionEyebrow>
            <p
              className={`${FONT_CARD} font-extrabold text-4xl lg:text-[40px] leading-none`}
              style={{ color: C.a500 }}
            >
              eaisyBooks
            </p>
            <h2
              className={`${FONT_MAIN} font-medium text-2xl lg:text-[32px] leading-snug tracking-tight max-w-[820px]`}
              style={{ color: C.dark }}
            >
              Az AI-támogatott szoftver, ami a teljes könyvelési folyamatot egy felületen kezeli.
            </h2>
          </div>
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

  const visible = filter === "all" ? FEATURES : FEATURES.filter((f) => f.cat === filter);
  const countOf = (cat: FeatureCategoryId) => FEATURES.filter((f) => f.cat === cat).length;

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
  }, [filter]);

  // mouse drag-to-scroll with pointer capture + momentum glide (touch uses native scrolling)
  const DRAG_RATIO = 1.4; // sensitivity multiplier
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
      // smoothed cursor velocity, px per ~16ms frame
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
    let v = -drag.current.v * DRAG_RATIO; // scrollLeft moves opposite to the cursor
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
        ? "border-transparent text-white font-semibold shadow-md"
        : "bg-white border-black/10 font-medium hover:border-[#3F97AA]/60 hover:shadow-sm"
    }`;

  return (
    <section id="funkciok" ref={sectionRef} className="relative w-full overflow-hidden bg-white pb-20 lg:pb-24">
      <style>{`
        @keyframes features-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes swipe-hint-wiggle { 0%, 100% { transform: translateX(-7px); } 50% { transform: translateX(7px); } }
        @media (prefers-reduced-motion: reduce) { .swipe-hint-anim { animation: none !important; } }
      `}</style>

      {/* orange radial glow behind the content */}
      <img
        src={imgProblemBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <div className={`relative ${INNER} flex flex-col`}>
        <SectionHeader
          eyebrow="Funkciók - Teljes áttekintés"
          title="Hogyan segít az eaisyBooks?"
          subtitle="Minden, ami egy könyvelőiroda működését könnyebbé teszi: az ügyfélkezeléstől a bérszámfejtésen át a bevallásokig – egy összekapcsolt rendszerben."
        />

        {/* filter chips */}
        <div className="mt-14 lg:mt-20 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => { setFilter("all"); setToastVisible(false); }}
            className={chipCls(filter === "all")}
            style={filter === "all" ? { backgroundColor: C.p400 } : undefined}
          >
            Összes{" "}
            <span className="font-bold" style={{ color: filter === "all" ? "rgba(255,255,255,0.9)" : C.a500 }}>
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
                style={active ? { backgroundColor: C.p400 } : undefined}
              >
                <Icon
                  className="w-4 h-4"
                  strokeWidth={1.75}
                  style={{ color: active ? "rgba(255,255,255,0.9)" : C.p400 }}
                />
                <span style={{ color: active ? "white" : C.dark }}>{label}</span>
                <span className="font-bold" style={{ color: active ? "rgba(255,255,255,0.9)" : C.a500 }}>
                  {countOf(id)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* horizontally scrollable card carousel — inner 1450px container for slim 4:5 cards */}
      <div className={`relative ${INNER} mt-8 lg:mt-10`}>
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
            {visible.map(({ cat, title, desc }) => {
              const category = FEATURE_CATEGORIES.find((c) => c.id === cat)!;
              const CatIcon = category.icon;
              return (
                <div
                  key={title}
                  className="snap-start shrink-0 grow-0 basis-[85%] sm:basis-[calc(50%_-_12px)] lg:basis-[calc((100%_-_72px)/_4)] lg:min-h-[426px] bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 lg:p-10 flex flex-col items-center text-center gap-7"
                  style={{ border: "1px solid rgba(63,151,170,0.4)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: category.color }}
                  >
                    <CatIcon className="w-6 h-6" strokeWidth={1.75} style={{ color: "white" }} />
                  </div>
                  <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.dark }}>
                    {title}
                  </h3>
                  <p className={`${FONT_MAIN} font-light text-[13px] leading-[1.75]`} style={{ color: C.dark }}>
                    {desc}
                  </p>
                </div>
              );
            })}
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
                <MoveHorizontal className="w-7 h-7" strokeWidth={2} style={{ color: C.a500 }} />
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
      <div className={INNER}>
        <div
          className="relative overflow-hidden rounded-[32px] px-8 py-14 lg:px-16 lg:py-18"
          style={{ background: "linear-gradient(105deg, #F9E3BC 0%, #DAF4F9 100%)" }}
        >
          {/* dot grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(8,93,111,0.10) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            <div className="flex flex-col items-start gap-6 max-w-[660px] lg:w-1/2">
              <SectionEyebrow>Nézd meg működés közben</SectionEyebrow>
              <p
                className={`${FONT_MAIN} font-light text-base lg:text-lg leading-relaxed`}
                style={{ color: C.dark }}
              >
                Minden vállalkozás más. Mondd el, nálad milyen helyzetek okoznak problémát, és
                megmutatjuk, hogyan segítene az eaisyBooks a te folyamataidban – demóban, a saját
                példáddal.
              </p>
            </div>
            {/* CTA centered within the right half of the strip */}
            <div className="flex-1 flex justify-center">
              <button
                onClick={openDemoModal}
                className={`${FONT_MAIN} shrink-0 inline-flex items-center justify-center px-10 h-[60px] lg:px-12 lg:h-[68px] rounded-full font-semibold text-sm lg:text-base tracking-[0.15em] uppercase text-white transition-opacity hover:opacity-90`}
                style={{ backgroundColor: C.a500 }}
              >
                Kérj demot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref: gridRef, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section id="elonyok" className="w-full bg-white pb-20 lg:pb-24">
      <div className={`${INNER} flex flex-col`}>
        <SectionHeader
          eyebrow="Előnyök"
          title="Előnyök, személyre szabva"
          subtitle="Nem egyforma a munka, ha vezetsz, ha könyvelsz, vagy ha a saját vállalkozásod pénzügyeit kell látnod. Az eaisyBooks mindhárom szereplőnek a saját feladatához igazított előnyöket ad."
        />

        <div ref={gridRef} className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {AUDIENCES.map(({ prefix, label, headerBg, accent, benefits }, colIdx) => {
            // entrance: per column, boxes slide in from the top row by row
            const enter = (rowIdx: number): React.CSSProperties => {
              const delay = colIdx * 90 + rowIdx * 130;
              return {
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(-32px)",
                transition: `opacity 0.5s ease ${delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
              };
            };
            return (
              <div key={label} className="flex flex-col gap-4 lg:gap-5">
                {/* audience header bar */}
                <div
                  className="rounded-[20px] px-6 py-6 lg:py-7 flex flex-col items-center gap-1.5 text-center"
                  style={{ backgroundColor: headerBg, ...enter(0) }}
                >
                  <p className={`${FONT_MAIN} font-light text-xs lg:text-sm tracking-[0.25em] uppercase text-white/75`}>
                    {prefix}
                  </p>
                  <p className={`${FONT_MAIN} font-medium text-xl lg:text-2xl tracking-wide uppercase text-white`}>
                    {label}
                  </p>
                </div>

                {/* benefit cards — equal height across the whole grid */}
                {benefits.map(({ title, desc }, rowIdx) => (
                  <div
                    key={title}
                    className={`${CARD_BASE} bg-white p-6 flex-1 flex flex-col gap-3`}
                    style={{ border: "1px solid rgba(137,196,209,0.6)", ...enter(rowIdx + 1) }}
                  >
                    <div className="flex items-start gap-2.5">
                      <Star
                        className="w-4 h-4 mt-1 shrink-0"
                        fill="currentColor"
                        strokeWidth={0}
                        style={{ color: accent }}
                      />
                      <h3
                        className={`${FONT_MAIN} font-medium text-base lg:text-lg leading-snug`}
                        style={{ color: accent }}
                      >
                        {title}
                      </h3>
                    </div>
                    <p className={`${FONT_MAIN} font-light text-sm leading-relaxed`} style={{ color: C.dark }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhoForSection() {
  const spotRef = useRef<HTMLDivElement>(null);

  // cursor-following radial gradient spot (soft teal glow)
  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = spotRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.opacity = "1";
    el.style.background = `radial-gradient(300px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(63,151,170,0.16), transparent 70%)`;
  }
  function onMouseLeave() {
    if (spotRef.current) spotRef.current.style.opacity = "0";
  }

  return (
    <section
      id="kinek-valo"
      className="relative w-full overflow-hidden bg-white py-20 lg:py-24"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* centered 1615px frame — hero background mirrored horizontally */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1615px] overflow-hidden rounded-b-[40px]">
        <img
          src={imgHeroBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center -scale-x-100"
        />
        {/* top fade: the gradient dissolves into white */}
        <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-white via-white/65 to-transparent pointer-events-none" />
        {/* cursor-following faint radial spot */}
        <div
          ref={spotRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{ opacity: 0 }}
        />
      </div>

      <div className={`relative ${INNER} flex flex-col`}>
        <SectionHeader
          eyebrow="Kinek való"
          title="Kinek való az eaisyBooks?"
          subtitle="Öt irodatípus, ahol az eaisyBooks nem extra, hanem azonnali segítség — a növekvő portfóliótól a digitális átállásig."
        />

        {/* 3+2 grid: 6-col track, cards span 2, second row offset by one column */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6 w-full">
          {WHO_FOR.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className={`${CARD_BASE} bg-white/75 backdrop-blur-sm p-7 flex flex-col lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
              style={{ border: "1px solid rgba(137,196,209,0.6)" }}
            >
              <p className={`${FONT_MAIN} font-bold text-xl leading-none`} style={{ color: C.a500 }}>
                {num}
              </p>
              <h3
                className={`${FONT_MAIN} mt-10 font-medium text-lg leading-snug`}
                style={{ color: C.dark }}
              >
                {title}
              </h3>
              <p className={`${FONT_MAIN} mt-4 font-light text-sm leading-relaxed`} style={{ color: C.dark }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="bg-white rounded-2xl px-6 mb-4 break-inside-avoid cursor-pointer transition-all duration-300 hover:shadow-sm hover:bg-[#DAF4F9]/40"
      style={{ border: open ? "1px solid rgba(63,151,170,0.6)" : "1px solid rgba(137,196,209,0.6)" }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4 py-5">
        <p className={`${FONT_MAIN} font-medium text-base leading-snug`} style={{ color: C.dark }}>
          {q}
        </p>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
          style={{ backgroundColor: open ? C.p400 : C.p50 }}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform duration-300"
            style={{ color: open ? "white" : C.p400, transform: open ? "rotate(180deg)" : "none" }}
          />
        </div>
      </div>
      {/* smooth height animation via grid-rows */}
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className={`${FONT_MAIN} pb-5 font-light text-[13px] leading-relaxed`} style={{ color: C.dark }}>
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="gyik" className="w-full bg-white py-20 lg:py-24">
      <div className={`${INNER} flex flex-col`}>
        <SectionHeader eyebrow="GYIK" title="Kérdések, amiket fel szoktak tenni" />
        <div className="mt-12 lg:mt-16 w-full max-w-[1200px] mx-auto columns-1 lg:columns-2 gap-4">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── closing contact section: dark panel with demo offer ──────────────────────
const DEMO_STEPS = [
  "Bemutatjuk az eaisyBooks portfólió-kezelését és dashboardját",
  "Végigvezetünk a bérszámfejtési varázslón és a bevallás-automatizáláson",
  "Az EV és TAO modulok működését valós példákon mutatjuk be",
  "Felteheted a kérdéseidet",
  "Megbeszéljük a bevezetés menetét és a személyre szabott árazást",
];

const DEMO_REASONS = [
  "Ha cégvezetőként tisztán szeretnéd látni az irodád működését",
  "Ha növekedni szeretnél",
  "Ha több időt szeretnél fordítani a szakmai munkára",
  "Ha fontos számodra az ügyfélélmény",
];

function ContactSection() {
  return (
    <section id="demo" className="w-full bg-white pb-20 lg:pb-24">
      <div className={INNER}>
        <div
          className="relative overflow-hidden rounded-[32px] px-8 py-14 lg:px-16 lg:py-16"
          style={{ background: `linear-gradient(135deg, #07323E 0%, #0A4553 45%, ${C.p400} 110%)` }}
        >
          {/* dot grid overlay — white dots on dark */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* left: demo offer */}
            <div className="flex flex-col items-start gap-6 lg:w-[55%]">
              <SectionEyebrow color={C.a500}>Következő lépés</SectionEyebrow>
              <h2
                className={`${FONT_MAIN} font-medium text-4xl lg:text-[44px] leading-[1.15] tracking-tight`}
                style={{ color: C.a500 }}
              >
                Nézd meg
                <br />
                működés közben!
              </h2>
              <p className={`${FONT_MAIN} font-light text-[15px] leading-relaxed text-white/80`}>
                Megmutatjuk, hogyan működik az eaisyBooks a te irodádban — a saját ügyfeleiden, a
                saját folyamataidban.
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
                A demó ingyenes és nem általános termékbemutató — a te irodád kihívásaira
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
                {DEMO_REASONS.map((reason) => (
                  <span
                    key={reason}
                    className={`${FONT_MAIN} inline-flex items-center px-5 py-2.5 rounded-full font-light text-[13px] text-white/90`}
                    style={{ border: "1px solid rgba(137,196,209,0.45)" }}
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

export default function EaisyBooks() {
  return (
    <div>
      <Seo
        title="eaisyBooks – AI platform könyvelőirodáknak | eaisy"
        description="Az eaisyBooks AI-támogatott platform könyvelőirodáknak: portfóliókezelés, bérszámfejtés, TAO/KIVA kalkuláció, AI asszisztens és AI-támogatott compliance – sokszorozd meg irodád kapacitását."
        path="/eaisy-books"
        jsonLd={[
          organizationSchema(),
          softwareAppSchema({
            name: "eaisyBooks",
            description:
              "AI-támogatott platform könyvelőirodáknak: portfóliókezelés, bérszámfejtés, TAO/KIVA kalkuláció, AI asszisztens és compliance egy helyen.",
            path: "/eaisy-books",
          }),
          faqSchema(FAQS),
        ]}
      />
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <FeaturesSection />
      <DemoCtaStrip />
      <BenefitsSection />
      <WhoForSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
