import { useState, useEffect, useRef, type TransitionEvent, type PointerEvent } from "react";
import { Phone, Mail, Calendar, UserX, Clock, BarChart3, Briefcase, Users, Headphones, Headset, Megaphone, MessagesSquare, Mic, CalendarCheck, Tags, CheckCircle2, Inbox, Heart, ChevronDown, ArrowUpRight, Wand2, Monitor, MessageCircle, Instagram } from "lucide-react";
import imgLogo from "@/imports/EaisyDeskNyito/eaisydesk.png";
import imgBigCard from "@/imports/EaisyDesk/big-card.webp";
import imgSmallCard from "@/imports/EaisyDesk/small-card.png";
import { SectionEyebrow } from "@/app/components/Section";
import imgFeaturesBg from "@/imports/EaisyDeskNyito/bg-funkciok.webp";
import { openDemoModal } from "@/app/Root";
import { Seo, organizationSchema, softwareAppSchema, faqSchema } from "@/app/components/Seo";

const C = {
  dark: "#082432",       // Cyan 900
  deep: "#0F4E71",       // Cyan 800→900 blend
  main: "#186D98",       // Cyan 800 — brand on light backgrounds
  cyan: "#1CEEE0",       // Cyan 600 — bright accent on dark
  accent: "#90FFF8",     // Cyan 400 — soft accent
  magenta: "#C43284",    // Magenta 600 — CTA
  magentaDeep: "#A2005B",// Magenta 800 — eyebrow text
  magentaLight: "#E57EB8", // Magenta 400 — icon accent on dark
  lightBg: "#DFFFFD",    // Cyan 50
  bodyText: "rgba(0,0,0,0.55)",
  ink: "#264350",        // site-wide dark text
};

// design-system shared bits (Bill/Books conventions)
const FONT_MAIN = "font-['Montserrat',sans-serif]";
const FONT_CARD = "font-['Inter',sans-serif]";
const INNER = "w-full max-w-[1530px] mx-auto px-6 lg:px-10"; // → 1450px content
const INNER_CARDS = "w-full max-w-[1434px] mx-auto px-6 lg:px-10"; // → 1354px content
const TEASER_CARD =
  "rounded-2xl ring-1 ring-inset ring-[rgba(24,109,152,0.25)] transition-all duration-300 hover:-translate-y-1";

const PROBLEMS = [
  { icon: Phone, title: "A telefon csörög, nincs aki felvegye", desc: "A hívások akkor érkeznek, amikor senki nem tudja fogadni őket — a kihagyott hívás sokszor elveszett érdeklődőt és üzletet jelent." },
  { icon: Mail, title: "Megkésett válaszok", desc: "Az e-mailekre és üzenetekre órákkal vagy napokkal később érkezik válasz — addigra az ügyfél máshol dönt." },
  { icon: Calendar, title: "Ütköző foglalások, no-show-k", desc: "A kézi időpont-egyeztetés hibalehetőségekkel jár: duplikált foglalások, elmaradt emlékeztetők, meg nem jelent ügyfelek." },
  { icon: UserX, title: "Az érdeklődők nyom nélkül eltűnnek", desc: "Nem derül ki, ki keresett, milyen ügyben, és kaptunk-e rá választ — az utánkövetés nélküli megkeresések elvesznek." },
  { icon: Clock, title: "Rutinfeladatokra megy el az idő", desc: "A sablonos kérdések megválaszolása, az időpont-egyeztetés és az adminisztráció elszívja a csapat idejét a valódi ügyek elől." },
  { icon: BarChart3, title: "Nem lehet mérni a teljesítményt", desc: "Nincs rálátás arra, hány megkeresés érkezik, milyen csatornákon, és mennyi idő alatt kapnak választ — kontroll nélkül nincs fejlődés sem." },
];

const FEATURES = [
  { num: 1, title: "360 fokos interakciókezelés", desc: "Az eaisyDesk 5 csatornán fogadja és válaszolja meg az ügyfélmegkereséseket — telefonon, e-mailben, Messengeren, Instagramon és WhatsAppon — a nap 24 órájában. Kimenő kommunikáció e-mailben, telefonon és SMS-ben is indítható." },
  { num: 2, title: "Minden ügy egy kezelőfelületen", desc: "A bejövő és kimenő interakciók egy átlátható felületen követhetők: mindig látszik, ki keresett, milyen ügyben, kapott-e választ, és van-e további teendő." },
  { num: 3, title: "Természetes, emberi hang — több nyelven", desc: "A voice agent hangja nem gépies, hanem teljesen természetes — bármilyen nyelven elérhető. A hang és a stílus az adott üzlet profiljához és márkájához igazítható." },
  { num: 4, title: "Cégre szabott tudásbázis", desc: "Nem általános, sablonos válaszokból dolgozik, hanem a cég működésére felkészített tudásanyagból — amit az első beállítás lépéseként töltünk fel, és bármikor rugalmasan módosítható." },
  { num: 5, title: "Automatikus értesítések és kampányvarázsló", desc: "Automatikus értesítések biztosítják, hogy ne maradjon el fontos tájékoztatás. A kampányvarázslóval célzott üzenetek indíthatók — ajánlatkövetésre, kedvezményekre vagy ügyfél-reaktiválásra (e-mail, telefon, SMS)." },
  { num: 6, title: "Érdeklődéskezelés és címkézés", desc: "Automatikusan felismeri és címkézi az érdeklődőket és ügyfeleket (pl. inaktív, potenciális vásárló), így mindig látszik, kivel érdemes foglalkozni, és hol van üzleti lehetőség." },
  { num: 7, title: "AI gyorsaság, emberi kontrollal", desc: "Az eaisyDesk tudja, mikor válaszolhat önállóan, mikor kell jóváhagyást kérni, és mikor kell élő kollégának átadni az ügyet — a teljes előzménnyel együtt." },
  { num: 8, title: "Analitika és riportok", desc: "Láthatóvá teszi, milyen csatornákon érkeznek a megkeresések, hol akad el a folyamat, milyen ügytípusok ismétlődnek, és min érdemes javítani a hatékonyabb működés érdekében." },
];

const AUDIENCE_BENEFITS = [
  {
    eyebrow: "Amiért a", role: "Kollégák", sub: "kedvence lesz", icon: Users, gradient: `linear-gradient(135deg, #186D98 0%, #0F4E71 100%)`,
    items: [
      { title: "Kisebb terhelés", desc: "Az ügyfélkommunikáció jelentős része automatizált — a kollégák a fontosabb ügyekre koncentrálhatnak." },
      { title: "Marketing — egyszerűen", desc: "Segít profi üzeneteket készíteni és kiküldeni, külön marketinges kapacitás nélkül is." },
      { title: "Átlátható kezelőfelület", desc: "Könnyen kezelhető, modern felület — minden megkeresés és ügy egy helyen." },
    ],
  },
  {
    eyebrow: "Amiért az", role: "Ügyfeleid", sub: "szeretni fogják", icon: Heart, gradient: `linear-gradient(135deg, #0F4E71 0%, #082432 100%)`,
    items: [
      { title: "Villámgyors reakcióidő", desc: "A válasz percek, sokszor másodpercek alatt érkezik — bármelyik csatornán, bármikor." },
      { title: "Jobb ügyfélélmény", desc: "Gyors, pontos és személyes kommunikáció minden csatornán, a nap 24 órájában." },
      { title: "Pontos tájékoztatás", desc: "Azonnali visszaigazolások, emlékeztető értesítések és naptárfájlok." },
    ],
  },
  {
    eyebrow: "Amiért", role: "Vezetőként", sub: "értékelni fogod", icon: Briefcase, gradient: `linear-gradient(135deg, #082432 0%, #041219 100%)`,
    items: [
      { title: "Nincs több elveszett megkeresés", desc: "Minden megkeresés nyomon követhető és kezelhető — egyik sem vész el." },
      { title: "Jobban hasznosított adatbázis", desc: "Az ügyféladatok strukturáltan, azonnal felhasználhatóan állnak rendelkezésre." },
      { title: "Nagyobb üzleti kontroll", desc: "Valós idejű rálátás az ügyfélkommunikációra és a csapat teljesítményére." },
    ],
  },
];

const WHO_FOR = [
  { icon: Phone, title: "Ahol nagy az ügyfélforgalom", desc: "Sok bejövő hívás, e-mail és social üzenet érkezik párhuzamosan — a kézi kezelés már nem skálázható. Az eaisyDesk minden csatornát egy felületen, a nap 24 órájában kezel." },
  { icon: Users, title: "Ahol kevés az emberi kapacitás", desc: "A csapat nem bírja a megkeresések mennyiségét, a válaszok csúsznak, az érdeklődők elvesznek. Az eaisyDesk leveszi a rutinterhet — a kollégák a valódi ügyekre koncentrálhatnak." },
  { icon: Headset, title: "Ahol nincs ügyfélszolgálat", desc: "Nincs dedikált kolléga, aki fogadná a hívásokat és válaszolna az üzenetekre. Az eaisyDesk profi ügyfélszolgálatot ad — extra létszám és hosszú betanítás nélkül." },
];

const BENEFITS = [
  "24/7 elérhető minden csatornán",
  "Természetes hang — több nyelven",
  "Cégre szabott tudásbázis",
  "AI gyorsaság, emberi kontroll",
];

const WHO_SHOULD = [
  "Aki egy helyen kezelné a telefonos, e-mailes és social megkereséseket",
  "Aki cégre szabott tudásbázis alapján válaszolná meg az ügyfélüzeneteket",
  "Aki természetes hangú AI-asszisztenst szeretne ügyintézésre és időpont-egyeztetésre",
  "Aki nem akar több elveszett érdeklődőt, késő választ vagy elmaradt utánkövetést",
  "Aki kampányokkal és reaktiválással több értéket hozna ki az ügyféladatbázisból",
  "Aki nem sablonos AI-megoldást, hanem cégspecifikus tudásbázissal dolgozó rendszert keres",
];

const FAQS = [
  { q: "Milyen kommunikációs csatornákat kezel az eaisyDesk?", a: "Az eaisyDesk egyetlen felületen fogja össze a telefonhívásokat, e-maileket, valamint a Messenger-, Instagram- és WhatsApp-üzeneteket. A beérkező megkereséseket rendszerezi, előzményekhez kapcsolja, és a beállított szabályok alapján kezeli." },
  { q: "Az eaisyDesk önállóan is válaszol az ügyfeleknek?", a: "Igen. A rendszer a vállalkozás saját tudásbázisa és ügykezelési szabályai alapján képes önállóan válaszolni. Meghatározható az is, hogy mely eseteket kezelheti automatikusan, mikor legyen szükség jóváhagyásra, és mely ügyeket adja át munkatársnak." },
  { q: "Kiválthatja az eaisyDesk a teljes ügyfélszolgálatot?", a: "Az eaisyDesk a rutinszerű megkeresések jelentős részét önállóan kezeli, miközben a munkatársak számára átláthatóan előkészíti a személyes figyelmet vagy döntést igénylő ügyeket. Így nem feltétlenül kiváltja, hanem megsokszorozza a meglévő csapat kapacitását." },
  { q: "A meglévő rendszereinkkel is összekapcsolható?", a: "Igen. Az eaisyDesk igény szerint összeköthető többek között naptárakkal, CRM-, ügyviteli és más vállalati rendszerekkel. Az integrációs lehetőségeket minden esetben a jelenlegi működés és a használt szoftverek alapján mérjük fel." },
  { q: "Biztonságban vannak az ügyféladatok?", a: "Az eaisyDesk jogosultsági szintekkel, biztonságos adatkezeléssel és naplózható működéssel támogatja az ügyféladatok védelmét. A munkatársak csak a szerepkörükhöz szükséges adatokhoz és funkciókhoz férnek hozzá." },
  { q: "Mennyibe kerülnek az eaisy termékek?", a: "Az eaisy termékeket úgy alakítottuk ki, hogy a kisebb és nagyobb vállalkozások eltérő működéséhez, funkcionális igényeihez és adatmennyiségéhez is rugalmasan igazodjanak. Az egyes termékeken belül is csak azokat a modulokat és funkciókat szükséges igénybe venni, amelyekre valóban szükség van. Az árat a választott funkciók, a felhasználási volumen és az integrációs igények egyaránt befolyásolják, ezért minden ügyfelünk számára egyedi ajánlatot készítünk." },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className="bg-white rounded-2xl px-6 py-5 cursor-pointer border border-black/5 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:border-[#1CEEE0] transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">{q}</p>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: C.lightBg }}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform"
            style={{ color: C.main, transform: open ? "rotate(180deg)" : "none" }}
          />
        </div>
      </div>
      {open && (
        <p className="font-['Inter',sans-serif] font-normal text-sm pt-3 leading-relaxed" style={{ color: C.bodyText }}>
          {a}
        </p>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-36 pb-14 lg:pt-44 lg:pb-20">
      {/* centered 1615px gradient frame — top edge runs below the navbar, rounded corners */}
      <div className="absolute top-24 bottom-0 lg:top-[110px] left-1/2 -translate-x-1/2 w-full max-w-[1615px] overflow-hidden rounded-[40px]">
        {/* light cyan→pink gradient + dense dots (CSS, like the other product pages) */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, #E8FAF6 0%, #FCFEFF 45%, #FDEDF6 100%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(8,36,50,0.07) 1.2px, transparent 1.2px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className={`relative ${INNER} flex flex-col items-center`}>
        {/* brand title */}
        <p className={`${FONT_CARD} font-extrabold text-5xl lg:text-[64px] leading-none`} style={{ color: C.main }}>
          eaisyDesk
        </p>

        {/* main title */}
        <h1
          className={`${FONT_MAIN} mt-6 font-medium text-4xl lg:text-[60px] leading-[1.1] tracking-tight text-center`}
          style={{ color: C.ink }}
        >
          Ügyfélszolgálat, ami nem áll meg
          <br className="hidden lg:block" /> a hívások fogadásánál.
        </h1>

        {/* CTAs */}
        <div className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#problemak"
            className={`${FONT_CARD} inline-flex items-center justify-center px-10 h-[54px] rounded-full bg-white font-medium text-xl tracking-[0.2em] transition-opacity hover:opacity-80`}
            style={{ border: `1px solid ${C.ink}`, color: C.ink }}
          >
            Fedezd fel
          </a>
          <button
            onClick={openDemoModal}
            className={`${FONT_CARD} inline-flex items-center justify-center px-10 h-[54px] rounded-full font-medium text-xl tracking-[0.2em] text-white transition-opacity hover:opacity-90`}
            style={{ backgroundColor: C.magenta }}
          >
            Kérj demot
          </button>
        </div>

        {/* ── teaser grid: 5-col — dark kampány square, csatorna landscape, dark 360 square, egy felületen, érdeklődőkezelés ── */}
        <div className="mt-14 lg:mt-20 w-full rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-md p-4 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2.5">
            {/* kampányvarázsló — dark square */}
            <div
              className="relative overflow-hidden rounded-2xl lg:aspect-square p-6 flex flex-col items-start gap-4"
              style={{ backgroundColor: C.dark }}
            >
              <img
                src={imgSmallCard}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="relative flex flex-col gap-4">
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                  style={{ backgroundColor: "#F7E3EF" }}
                >
                  <Wand2 className="w-5 h-5" strokeWidth={1.5} style={{ color: C.magenta }} />
                </div>
                <h3 className={`${FONT_CARD} font-semibold text-lg leading-snug text-white`}>
                  Kampányvarázsló funkció
                </h3>
                <p className={`${FONT_CARD} text-[13px] leading-relaxed text-white/75`}>
                  Készíts és küldj célzott üzeneteket pár kattintással — ajánlatkövetésre,
                  kedvezményekre vagy meglévő ügyfelek reaktiválására.
                </p>
              </div>
            </div>

            {/* 5+3 csatorna — light landscape */}
            <div className={`${TEASER_CARD} bg-white sm:col-span-2 lg:col-span-2 p-6 flex flex-col gap-5`}>
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-black/[0.04] px-3.5 py-2">
                {[
                  { icon: Phone, bg: "#25D366" },
                  { icon: Mail, bg: "#1877F2" },
                  { icon: MessageCircle, bg: "#0084FF" },
                  { icon: MessagesSquare, bg: "#25D366" },
                  { icon: Instagram, bg: "linear-gradient(135deg, #F58529 0%, #DD2A7B 55%, #8134AF 100%)" },
                ].map(({ icon: Icon, bg }, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} style={{ color: "white" }} />
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`${FONT_CARD} font-semibold text-xl leading-snug`} style={{ color: C.ink }}>
                  5 bejövő és 3 kimenő csatorna
                </h3>
                <p className={`${FONT_CARD} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                  Az eaisyDesk 5 csatornán fogad és válaszol meg ügyfélmegkereséseket a nap 24
                  órájában. Emellett 3 csatornán kimenő kommunikáció is indítható: e-mailben,
                  telefonon és SMS-ben.
                </p>
              </div>
            </div>

            {/* 360° — dark big square, spans 2 rows */}
            <div
              className="relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-0 flex flex-col"
              style={{ backgroundColor: C.dark }}
            >
              <img
                src={imgBigCard}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* inset ring above the image */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(24,109,152,0.25)] pointer-events-none" />
              <div className="relative flex flex-col gap-4 px-5 py-5 lg:px-7 lg:py-7">
                <div className="ml-auto w-11 h-11 rounded-[10px] bg-white/90 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} style={{ color: C.dark }} />
                </div>
                <p className={`${FONT_CARD} font-extrabold text-6xl lg:text-[84px] leading-none tracking-tight text-white`}>
                  360°
                </p>
                <p className={`${FONT_CARD} font-semibold text-2xl lg:text-[28px] leading-snug text-white`}>
                  AI-támogatott,
                  <br />
                  többcsatornás
                  <br />
                  ügyfélszolgálat
                </p>
                <a
                  href="#problemak"
                  className={`${FONT_CARD} mt-2 inline-flex items-center gap-2 self-start px-6 h-[44px] rounded-full font-semibold text-sm tracking-wider transition-opacity hover:opacity-90`}
                  style={{ backgroundColor: C.cyan, color: C.dark }}
                >
                  <Phone className="w-4 h-4" strokeWidth={2} />
                  PRÓBÁLD KI
                </a>
              </div>
            </div>

            {/* egy felületen — light landscape (row 2) */}
            <div className={`${TEASER_CARD} bg-white sm:col-span-2 lg:col-span-2 p-6 flex flex-col gap-4`}>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.lightBg }}
                >
                  <Monitor className="w-4 h-4" strokeWidth={1.5} style={{ color: C.main }} />
                </div>
                <h3 className={`${FONT_CARD} font-semibold text-lg leading-snug`} style={{ color: C.ink }}>
                  A teljes ügyfélkommunikáció egy felületen
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { n: "3", label: "Sürgős", dot: "#E5484D" },
                  { n: "7", label: "Nyitott", dot: "#F5A623" },
                  { n: "14", label: "Lezárt", dot: "#34A853" },
                ].map(({ n, label, dot }) => (
                  <span
                    key={label}
                    className={`${FONT_CARD} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 text-xs`}
                    style={{ color: C.ink }}
                  >
                    <span className="font-semibold">{n}</span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col divide-y divide-black/5">
                {[
                  { icon: MessageCircle, ch: "Messenger", topic: "Időpont", status: "Időpont módosítva", pill: "Lezárt", pillBg: "#E6F6EC", pillColor: "#34A853", note: "Nincs további teendő" },
                  { icon: MessagesSquare, ch: "WhatsApp", topic: "Egyéb", status: "Válasz előkészítve", pill: "Sürgős", pillBg: "#FDEAEA", pillColor: "#E5484D", note: "Azonnali beavatkozás szükséges" },
                  { icon: Mail, ch: "Email", topic: "Kérés", status: "Ajánlat elküldve", pill: "Nyitott", pillBg: "#FDF4DC", pillColor: "#B7791F", note: "Válasz jóváhagyása szükséges" },
                ].map((r) => (
                  <div key={r.ch} className="flex items-center gap-2.5 py-2 text-[11px]">
                    <r.icon className="w-3.5 h-3.5 shrink-0" style={{ color: C.main }} strokeWidth={1.5} />
                    <span className={`${FONT_CARD} font-semibold w-16`} style={{ color: C.ink }}>{r.ch}</span>
                    <span className={`${FONT_CARD} w-14 text-black/45`}>{r.topic}</span>
                    <span className={`${FONT_CARD} w-28 text-black/45`}>{r.status}</span>
                    <span
                      className={`${FONT_CARD} px-2 py-0.5 rounded-full font-semibold text-[10px] whitespace-nowrap`}
                      style={{ backgroundColor: r.pillBg, color: r.pillColor }}
                    >
                      {r.pill}
                    </span>
                    <span className={`${FONT_CARD} ml-auto text-black/40 hidden xl:inline`}>{r.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* érdeklődőkezelés — light square (row 2) */}
            <div className={`${TEASER_CARD} bg-white lg:aspect-square p-6 flex flex-col gap-3`}>
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: "#F7E3EF" }}
              >
                <Users className="w-5 h-5" strokeWidth={1.5} style={{ color: C.magenta }} />
              </div>
              <h3 className={`${FONT_CARD} font-semibold text-lg leading-snug`} style={{ color: C.ink }}>
                Érdeklődőkezelés
              </h3>
              <p className={`${FONT_CARD} text-[13px] leading-relaxed`} style={{ color: C.bodyText }}>
                Automatikusan felismeri és címkézi az érdeklődőket és ügyfeleket, így mindig
                látszik, kivel érdemes foglalkozni, kit kell utánkövetni, és hol van még üzleti
                lehetőség.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TEASER_BARS = [38, 52, 44, 62, 48, 70, 56, 66, 50, 60, 74, 58];

function TeaserHeader({ icon: Icon, label, alert = false }: { icon: typeof BarChart3; label: string; alert?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: alert ? "rgba(229,126,184,0.25)" : C.lightBg }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: alert ? C.magenta : C.main }} strokeWidth={2} />
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-black/60">{label}</p>
    </div>
  );
}

function TeaserCarousel() {
  const panelCls = "bg-white rounded-xl border border-black/5 shadow-[0_2px_10px_rgba(8,36,50,0.08)] p-4 flex flex-col gap-3";

  const panels = [
    // 1 — Omnichannel inbox
    <div key="inbox" className={panelCls}>
      <TeaserHeader icon={Inbox} label="Bejövő megkeresések" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { icon: Phone, text: "Bejövő hívás — AI asszisztens fogadta" },
          { icon: Mail, text: "E-mail érkezett — válasz elküldve" },
          { icon: MessagesSquare, text: "Messenger üzenet — válasz elküldve" },
        ].map((r) => (
          <div key={r.text} className="flex items-center gap-2 py-1.5">
            <r.icon className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
            <p className="text-[10px] font-medium text-black truncate flex-1">{r.text}</p>
            <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>Megválaszolva</span>
          </div>
        ))}
      </div>
    </div>,

    // 2 — Voice agent live
    <div key="voice" className={panelCls}>
      <TeaserHeader icon={Mic} label="Voice agent — hívás folyamatban" />
      <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-1.5">
        <p className="text-[10px] font-medium text-black">„Jó napot! Miben segíthetek?"</p>
        <div className="flex items-end gap-1 h-8">
          {TEASER_BARS.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: "linear-gradient(to top, #186D98, #1CEEE0)" }} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>Természetes hang · több nyelven</span>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "rgba(229,126,184,0.2)", color: C.magentaDeep }}>Élő</span>
      </div>
    </div>,

    // 3 — Booking
    <div key="booking" className={panelCls}>
      <TeaserHeader icon={CalendarCheck} label="Időpontfoglalás" />
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-semibold text-black truncate flex-1">
          Foglalás rögzítve <span className="font-normal text-black/50">Kovács Anna — ma 14:30</span>
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(223,255,253,0.6)" }}>
        <MessagesSquare className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.main }}>Emlékeztető SMS elküldve</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(223,255,253,0.6)" }}>
        <Mail className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.main }}>Naptárfájl csatolva a visszaigazoláshoz</p>
      </div>
    </div>,

    // 4 — Campaign wizard
    <div key="campaign" className={panelCls}>
      <TeaserHeader icon={Megaphone} label="Kampányvarázsló" />
      <div className="flex items-center gap-2">
        <p className="text-[10px] font-semibold text-black flex-1">Reaktiváló kampány indul</p>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "rgba(229,126,184,0.2)", color: C.magentaDeep }}>128 célzott ügyfél</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {["E-mail", "SMS", "Telefon"].map((ch) => (
          <span key={ch} className="text-[9px] font-semibold px-2 py-1 rounded-full border" style={{ borderColor: C.main, color: C.main }}>{ch}</span>
        ))}
      </div>
    </div>,

    // 5 — Lead tagging
    <div key="tagging" className={panelCls}>
      <TeaserHeader icon={Tags} label="Érdeklődő-címkézés" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { name: "Nagy Péter", tag: "potenciális vásárló", accent: false },
          { name: "Szabó Eszter", tag: "inaktív · utánkövetendő", accent: true },
          { name: "Kiss Bence", tag: "új érdeklődő", accent: false },
        ].map((r) => (
          <div key={r.name} className="flex items-center gap-2 py-1.5">
            <p className="text-[10px] font-medium text-black flex-1 truncate">{r.name}</p>
            <span
              className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
              style={r.accent
                ? { backgroundColor: "rgba(229,126,184,0.2)", color: C.magentaDeep }
                : { backgroundColor: C.lightBg, color: C.main }}
            >
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    </div>,
  ];

  return (
    <div className="relative w-full max-w-[520px] h-[440px] lg:h-[520px] overflow-hidden">
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


function ProblemsSection() {
  useEffect(() => {
    function adjustHeights() {
      const cards = document.querySelectorAll(".problem-card-item");
      if (cards.length === 0) return;

      // Reset heights first to measure natural height
      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = "0px";
      });

      let maxHeight = 0;
      cards.forEach((c) => {
        const h = c.clientHeight;
        if (h > maxHeight) maxHeight = h;
      });

      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = `${maxHeight}px`;
      });
    }

    // Run on mount with a minor timeout to ensure content has rendered, and on resize
    const timer = setTimeout(adjustHeights, 100);
    window.addEventListener("resize", adjustHeights);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", adjustHeights);
    };
  }, []);

  return (
    <section id="problemak" className="w-full py-20 lg:py-24" style={{ backgroundColor: "#F3F3F4" }}>
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-10">

        {/* eyebrow pill + title */}
        <div className="flex flex-col gap-5 w-full">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={{ backgroundColor: "rgba(229,126,184,0.22)", color: C.magentaDeep }}>
            Amikor a megkeresések elvesznek
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl tracking-tight leading-tight text-black">
            Ismerős helyzetek?
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed w-full text-black/55">
            Az ügyfelek minden csatornán keresnek — telefonon, e-mailben, social felületeken. A kézi kezelés már nem bírja a tempót: kihagyott hívások, megkésett válaszok, elveszett érdeklődők. A rutinfeladatok pedig elviszik a csapat idejét a valódi ügyek elől.
          </p>
        </div>

        {/* 6 problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="problem-card-item bg-white rounded-2xl p-6 flex flex-row gap-5 shadow-sm border border-black/5 hover:-translate-y-1 hover:shadow-md hover:border-[#90FFF8] transition-all duration-300 group cursor-pointer h-full"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: C.dark }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.cyan }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-black/55">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* highlighted pullquote — pill shape, stronger magenta border */}
        <div
          className="rounded-full px-10 py-6"
          style={{ backgroundColor: "rgba(229,126,184,0.12)", border: "2px solid rgba(196,50,132,0.45)" }}
        >
          <p className="font-['Inter',sans-serif] font-light text-lg lg:text-xl text-center" style={{ color: C.dark }}>
            A legtöbb cégnél a probléma nem a szándék hiánya, hanem{" "}
            <span className="font-semibold">az elveszett megkeresések.</span>
          </p>
        </div>


      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="megoldas" className="w-full bg-white py-20 lg:py-24 relative overflow-hidden">

      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-16 relative z-10">

        {/* Top block: text on left, teaser on right */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column: Eyebrow, Logo, Paragraphs */}
          <div className="flex-1 flex flex-col items-start gap-6 w-full lg:max-w-[620px]">

            {/* Eyebrow badge */}
            <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={{ backgroundColor: "rgba(229,126,184,0.22)", color: C.magentaDeep }}>
              A mi megoldásunk
            </div>

            {/* Logo */}
            <img src={imgLogo} alt="eaisyDesk" className="w-full max-w-[220px] h-auto" />

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 text-black/55">
              <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed">
                Az eaisyDesk egy újgenerációs, AI-támogatott ügyfélkommunikációs platform, amely minden csatornán — telefonon, e-mailben, Messengeren, Instagramon és WhatsAppon — figyeli és kezeli az ügyfeleidet, a nap 24 órájában.
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed">
                Omnichannel ügyfélszolgálatot, sales-, marketing- és CRM funkciókat, valamint átlátható ügyféladatokat és analitikát ad egy kézbe — cégre szabott tudásbázissal, természetes, emberi hangon, több nyelven is.
              </p>

              {/* Third paragraph with left border */}
              <div
                className="pl-5 py-0.5 border-l-4"
                style={{ borderLeftColor: C.main }}
              >
                <p className="font-['Inter',sans-serif] font-semibold text-base leading-relaxed" style={{ color: C.main }}>
                  Nem chatbot. Nem csak AI ügyfélszolgálat. Valódi, intelligens munkatárs — aki 24/7 dolgozik.
                </p>
              </div>
            </div>

          </div>

          {/* Right column: autoplay teaser (vertical loop, white fades) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <TeaserCarousel />
          </div>

        </div>

        {/* Bottom block: 3 colored cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Card 1 */}
          <div
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#186D98" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#E57EB8] group-hover:scale-110 transition-transform duration-300">
              <Headphones className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                360 fokos, omnichannel ügyfélszolgálat
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                Kezeld az összes beérkező megkeresést — telefont, e-mailt és social üzeneteket — egyetlen, egységes intelligens felületen.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#0F4E71" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#E57EB8] group-hover:scale-110 transition-transform duration-300">
              <Megaphone className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Sales-, marketing- és CRM funkciók
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                Integrált ügyfélkezelés, amely automatizálja az értékesítési folyamatokat és a marketing kampányokat.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-pointer"
            style={{ backgroundColor: "#082432" }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-[#E57EB8] group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-white leading-tight">
                Átlátható ügyféladatok és analitika
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-white/80">
                Valós idejű adatok és mélyreható elemzések a hatékonyabb üzleti döntéshozatalért.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function FeaturesSection() {
  const N = FEATURES.length;
  // Cards rendered 3x so the row loops seamlessly (8, 7... appear left of 1)
  const LOOP = [...FEATURES, ...FEATURES, ...FEATURES];
  const [pos, setPos] = useState(N);
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const swiped = useRef(false);
  const [metrics, setMetrics] = useState({ step: 0, card: 0, view: 0 });

  const active = ((pos % N) + N) % N;

  // Measure card width + gap + viewport width so the active card centers precisely
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || track.children.length < 2) return;
      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      setMetrics({
        step: second.offsetLeft - first.offsetLeft,
        card: first.offsetWidth,
        view: track.parentElement?.offsetWidth ?? window.innerWidth,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Autoplay - pauses on hover / gesture
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setPos((p) => p + 1), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => setPos((p) => p + dir);

  // Jump to feature i using the copy nearest to the current position
  const goTo = (i: number) => setPos((p) => Math.round((p - i) / N) * N + i);

  // After animating into an outer copy, snap back to the middle copy invisibly
  const handleTransitionEnd = (e: TransitionEvent) => {
    if (e.target !== trackRef.current || e.propertyName !== "transform") return;
    if (pos < N || pos >= 2 * N) {
      setInstant(true);
      setPos(N + active);
    }
  };

  // Re-enable the transition right after the invisible snap
  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  // Gesture swipe (touch / pen / mouse) - horizontal; vertical scroll stays free
  const onPointerDown = (e: PointerEvent) => {
    dragStartX.current = e.clientX;
    swiped.current = false;
    setPaused(true);
  };
  const endDrag = (x: number | null) => {
    if (dragStartX.current == null) return;
    if (x != null) {
      const dx = x - dragStartX.current;
      if (Math.abs(dx) > 24) {
        swiped.current = true;
        // longer swipes skip multiple cards — no big mandatory flick needed
        const steps = Math.max(1, Math.round(Math.abs(dx) / (metrics.step || 240)));
        go(dx < 0 ? steps : -steps);
      }
    }
    dragStartX.current = null;
    setPaused(false);
  };

  return (
    <section
      id="funkciok"
      className="w-full py-20 lg:py-24 overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background photo + dark blue overlay */}
      <img
        src={imgFeaturesBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(8,36,50,0.94) 0%, rgba(11,60,86,0.88) 55%, rgba(24,109,152,0.90) 135%)" }}
      />

      <div className="relative z-10">
      {/* Header */}
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col items-start gap-5 mb-12">
        <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={{ backgroundColor: "rgba(196,50,132,0.25)", color: C.magentaLight }}>
          Egy szoftver. Számtalan lehetőség.
        </div>
        <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight max-w-[720px]">
          8 funkció, amitől lényegesen könnyebb lesz kézben tartani az ügyfélkommunikációt
        </h2>
      </div>

      {/* Spotlight carousel: active card centered, neighbours dimmed and peeking */}
      <div
        className="relative"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          touchAction: "pan-y",
        }}
        onPointerDown={onPointerDown}
        onPointerUp={(e) => endDrag(e.clientX)}
        onPointerCancel={() => endDrag(null)}
        onPointerLeave={() => endDrag(null)}
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex gap-3 w-max py-6 ${instant ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{ transform: `translateX(${metrics.view / 2 - (pos * metrics.step + metrics.card / 2)}px)` }}
        >
          {LOOP.map((f, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (swiped.current) {
                  swiped.current = false;
                  return;
                }
                goTo(f.num - 1);
              }}
              aria-current={idx === pos}
              className={`w-[250px] sm:w-[280px] lg:w-[320px] aspect-[4/5] shrink-0 text-left rounded-3xl bg-white p-5 lg:p-6 flex flex-col gap-5 border-[3px] transition-all duration-500 ${
                idx === pos
                  ? "opacity-100 scale-105 shadow-2xl relative z-10 border-[#1CEEE0]"
                  : "opacity-40 scale-95 shadow-md hover:opacity-70 cursor-pointer relative z-0 border-transparent"
              }`}
            >
              <span
                className="font-['Inter',sans-serif] font-extrabold text-6xl leading-none select-none"
                style={{ color: "rgba(196,50,132,0.35)" }}
              >
                {f.num}
              </span>
              <p className="font-['Inter',sans-serif] font-bold text-base lg:text-lg leading-snug text-black">
                {f.title}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-xs lg:text-sm leading-relaxed" style={{ color: C.bodyText }}>
                {f.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Numbered navigation 1-8 (hidden on mobile — swipe gestures take over) */}
      <div className="mt-8 px-6 hidden sm:block">
        <div className="flex flex-wrap justify-center gap-2.5 max-w-[520px] mx-auto">
          {FEATURES.map((f, i) => (
            <button
              key={f.num}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Funkció ${f.num}: ${f.title}`}
              className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full font-['Inter',sans-serif] text-sm transition-all duration-300 ${
                i === active ? "text-white font-semibold scale-125 mx-3" : "text-white/80 font-light ring-1 ring-white/40 hover:bg-white/25"
              }`}
              style={{
                backgroundColor: i === active ? C.magenta : "rgba(255,255,255,0.15)",
              }}
            >
              {f.num}
            </button>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  // equalize card heights across all columns: min-height = tallest card
  useEffect(() => {
    function adjustHeights() {
      const cards = document.querySelectorAll(".benefit-card-item");
      if (cards.length === 0) return;

      // Reset heights first to measure natural height
      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = "0px";
      });

      let maxHeight = 0;
      cards.forEach((c) => {
        const h = c.clientHeight;
        if (h > maxHeight) maxHeight = h;
      });

      cards.forEach((c) => {
        (c as HTMLElement).style.minHeight = `${maxHeight}px`;
      });
    }

    // Run on mount with a minor timeout to ensure content has rendered, and on resize
    const timer = setTimeout(adjustHeights, 100);
    window.addEventListener("resize", adjustHeights);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", adjustHeights);
    };
  }, []);

  return (
    <section
      id="elonyok"
      className="w-full py-20 lg:py-24"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(223,255,253,0.4) 100%)" }}
    >
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-12">

        {/* header — same language as the rest of the page */}
        <div className="flex flex-col items-start gap-5">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={{ backgroundColor: "rgba(229,126,184,0.22)", color: C.magentaDeep }}>
            Előnyök
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Személyre szabott előnyök
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base text-black/55 leading-relaxed max-w-[620px]">
            Ugyanaz a platform — más eredmény minden szerepkörben. Nézd meg, mit kap tőle a csapat, az ügyfeleid és a vezetés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {AUDIENCE_BENEFITS.map((col) => {
            const RoleIcon = col.icon;
            return (
              <div key={col.role} className="flex flex-col gap-4 group">

                {/* role header — blue gradient card, like the Megoldás section */}
                <div
                  className="rounded-2xl p-6 flex items-center gap-4 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300"
                  style={{ background: col.gradient }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#E57EB8]">
                    <RoleIcon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col uppercase">
                    <span className="font-['Inter',sans-serif] font-normal text-[11px] tracking-widest text-white/60">
                      {col.eyebrow}
                    </span>
                    <span className="font-['Inter',sans-serif] font-extrabold text-xl tracking-wide text-white leading-tight">
                      {col.role}
                    </span>
                    <span className="font-['Inter',sans-serif] font-normal text-[11px] tracking-widest text-white/60">
                      {col.sub}
                    </span>
                  </div>
                </div>

                {/* benefit cards — white, interactive, page-consistent */}
                {col.items.map((item) => (
                  <div
                    key={item.title}
                    className="benefit-card-item flex-1 bg-white rounded-2xl p-6 flex flex-col gap-3 border border-[#DFFFFD] shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:border-[#1CEEE0] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-black/55">
                      {item.desc}
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
  return (
    <section id="kinek-valo" className="w-full py-20 lg:py-24" style={{ backgroundColor: "#F3F3F4" }}>
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-12">

        {/* header — eyebrow pill + headline with logo */}
        <div className="flex flex-col items-start gap-5">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={{ backgroundColor: "rgba(229,126,184,0.22)", color: C.magentaDeep }}>
            Kinek való az <span className="normal-case">eaisyDesk</span>?
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Ahol megoldást jelent az
          </h2>
          <img src={imgLogo} alt="eaisyDesk" className="w-full max-w-[240px] h-auto -mt-2" />
        </div>

        {/* 3 interactive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {WHO_FOR.map((w) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="bg-white rounded-2xl p-6 flex flex-col gap-5 border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#90FFF8] transition-all duration-300 group cursor-pointer h-full"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: C.dark }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: "#E57EB8" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-['Inter',sans-serif] font-semibold text-lg text-black tracking-tight leading-tight">
                    {w.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-black/55">
                    {w.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  // accordion — only one question open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="gyik" className="w-full bg-white py-20 lg:py-24">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0">
        {/* light cyan rounded rectangle backdrop */}
        <div
          className="rounded-[32px] px-6 py-10 lg:px-12 lg:py-14 flex flex-col gap-10"
          style={{ backgroundColor: "rgba(223,255,253,0.5)" }}
        >
          <div className="flex flex-col gap-5">
            <div
              className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]"
              style={{ backgroundColor: "rgba(196,50,132,0.12)", color: C.magentaDeep }}
            >
              GYIK
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
              Kérdések, amiket fel szoktak tenni
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="demo" className="w-full py-28 lg:py-36 relative overflow-hidden">
      {/* Background photo + dark blue overlay — same as the Funkciók section */}
      <img
        src={imgFeaturesBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(8,36,50,0.94) 0%, rgba(11,60,86,0.88) 55%, rgba(24,109,152,0.90) 135%)" }}
      />

      <div className="relative z-10 w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-block self-start rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Inter',sans-serif]" style={{ backgroundColor: "rgba(196,50,132,0.25)", color: C.magentaLight }}>
            Következő lépés
          </div>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Kipróbálnád? Megnéznéd?
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base leading-relaxed text-white/65 max-w-md">
            Kérj demót, és megmutatjuk, hogyan kezeli az eaisyDesk a bejövő megkereséseket, hogyan működnek az automatikus értesítések, és hogyan indíthatók célzott ügyfélaktiváló kampányok — élőben, a saját folyamataidon.
          </p>
          <button
            onClick={openDemoModal}
            className="self-start px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: C.magenta }}
          >
            KÉRJ DEMOT
          </button>
          <p className="font-['Inter',sans-serif] font-medium text-xs" style={{ color: C.cyan }}>
            eaisyDesk — az újgenerációs, AI-támogatott platform,<br />
            ami minden ügyfeledre figyel.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <p className="font-['Inter',sans-serif] font-bold text-2xl text-white">
            Kinek érdemes megnéznie?
          </p>
          <div className="flex flex-col gap-2">
            {WHO_SHOULD.map((w) => (
              <div
                key={w}
                className="inline-flex items-center px-4 py-2 rounded-full w-fit"
                style={{ border: `1.5px solid ${C.cyan}` }}
              >
                <span className="font-['Inter',sans-serif] font-medium text-sm" style={{ color: C.cyan }}>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sticky Kérj demót CTA — visible between the hero and the contact section ──
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
      className={`fixed bottom-6 right-6 z-50 px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest text-white shadow-[0_8px_30px_rgba(196,50,132,0.45)] hover:opacity-90 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: C.magenta }}
    >
      KÉRJ DEMOT
    </button>
  );
}

export default function EaisyDesk() {
  return (
    <div>
      <Seo
        title="eaisyDesk – Omnichannel AI ügyfélszolgálat | eaisy"
        description="Az eaisyDesk omnichannel AI ügyfélszolgálat: telefon, e-mail, Messenger, Instagram és WhatsApp egy felületen – automatizált ügykezeléssel, CRM-mel és analitikával."
        path="/eaisy-desk"
        jsonLd={[
          organizationSchema(),
          softwareAppSchema({
            name: "eaisyDesk",
            description: "Omnichannel AI ügyfélkommunikáció: telefon, e-mail és közösségi üzenetek egy felületen, automatizált ügykezeléssel.",
            path: "/eaisy-desk",
          }),
          faqSchema(FAQS),
        ]}
      />
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <WhoForSection />
      <FaqSection />
      <CtaSection />
      <StickyDemoCta />
    </div>
  );
}
