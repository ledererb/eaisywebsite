import { useState, useEffect, useRef, type TransitionEvent, type PointerEvent } from "react";
import { Phone, Mail, Calendar, UserX, Clock, BarChart3, Briefcase, Users, Headphones, Headset, Megaphone, MessagesSquare, Mic, CalendarCheck, Tags, CheckCircle2, Inbox, Heart, ChevronDown, ArrowUpRight, Wand2, Monitor, MessageCircle, Instagram, Globe, Zap, ChevronLeft, ChevronRight, BookOpen, UserCheck, History, MoveHorizontal, ListChecks } from "lucide-react";
import imgLogo from "@/imports/EaisyDeskNyito/eaisydesk.png";
import imgFeaturesBg from "@/imports/EaisyDeskNyito/bg-funkciok.webp";
import imgBigCard from "@/imports/EaisyDesk/big-card.webp";
import imgSmallCard from "@/imports/EaisyDesk/small-card.png";
import iconPhone from "@/imports/EaisyDesk/icon-phone.png";
import iconMail from "@/imports/EaisyDesk/icon-mail.png";
import iconMessenger from "@/imports/EaisyDesk/icon-messenger.png";
import iconWhatsapp from "@/imports/EaisyDesk/icon-whatsapp.png";
import iconInstagram from "@/imports/EaisyDesk/icon-instagram.png";

const CHANNEL_ICONS = [iconPhone, iconMail, iconMessenger, iconWhatsapp, iconInstagram];
import { SectionEyebrow, SectionHeader } from "@/app/components/Section";
import { useInView } from "@/app/components/useInView";
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
  { num: "01", title: "A telefon csörög, nincs aki felvegye", desc: "A hívások akkor érkeznek, amikor senki nem tudja fogadni őket — a kihagyott hívás sokszor elveszett érdeklődőt és üzletet jelent." },
  { num: "02", title: "Megkésett válaszok", desc: "Az e-mailekre és üzenetekre órákkal vagy napokkal később érkezik válasz — addigra az ügyfél máshol dönt." },
  { num: "03", title: "Ütköző foglalások, no-show-k", desc: "A kézi időpont-egyeztetés hibalehetőségekkel jár: duplikált foglalások, elmaradt emlékeztetők, meg nem jelent ügyfelek." },
  { num: "04", title: "Az érdeklődők nyom nélkül eltűnnek", desc: "Nem derül ki, ki keresett, milyen ügyben, és kaptunk-e rá választ — az utánkövetés nélküli megkeresések elvesznek." },
  { num: "05", title: "Rutinfeladatokra megy el az idő", desc: "A sablonos kérdések megválaszolása, az időpont-egyeztetés és az adminisztráció elszívja a csapat idejét a valódi ügyek elől." },
  { num: "06", title: "Nem lehet mérni a teljesítményt", desc: "Nincs rálátás arra, hány megkeresés érkezik, milyen csatornákon, és mennyi idő alatt kapnak választ — kontroll nélkül nincs fejlődés sem." },
];
type DeskFeatureCat = "komm" | "aikontroll" | "ugyfel" | "analitika";

const DESK_FEATURE_CATS: { id: DeskFeatureCat; label: string; icon: typeof MessagesSquare; color: string; soft: string; deep: string }[] = [
  { id: "komm", label: "Bejövő- és kimenő kommunikáció", icon: MessagesSquare, color: "#186D98", soft: "rgba(24,109,152,0.12)", deep: "#186D98" },
  { id: "aikontroll", label: "AI & kontroll", icon: Zap, color: "#0F4E71", soft: "rgba(15,78,113,0.12)", deep: "#0F4E71" },
  { id: "ugyfel", label: "Ügyfélkezelés", icon: Users, color: "#C43284", soft: "rgba(196,50,132,0.12)", deep: "#A2005B" },
  { id: "analitika", label: "Analitika", icon: BarChart3, color: "#082432", soft: "rgba(8,36,50,0.10)", deep: "#082432" },
];
const DESK_FEATURES: { cat: DeskFeatureCat; icon: typeof MessagesSquare; title: string; desc: string }[] = [
  { cat: "komm", icon: MessagesSquare, title: "360 fokos interakciókezelés", desc: "Az eaisyDesk 5 csatornán fogad és válaszol meg ügyfélmegkereséseket — telefonon, e-mailben, Messengeren, Instagramon és WhatsAppon - a nap 24 órájában. Emellett 3 csatornán kimenő kommunikáció is indítható: e-mailben, telefonon és SMS-ben." },
  { cat: "komm", icon: Globe, title: "Többnyelvű kommunikáció", desc: "A kommunikáció nyelvileg is illeszthető az adott ügyfélkörhöz: ez különösen fontos azoknál a szolgáltatóknál, ahol a gyors és magabiztos idegen nyelvű kommunikáció közvetlenül hat az ügyfélszerzésre." },
  { cat: "komm", icon: Headset, title: "Természetes hang", desc: "Az eaisyDesk telefonos kommunikációja nem gépies, hanem természetes és könnyen érthető, mindig udvarias és türelmes. A kommunikáció stílusa (pl. professzionális, barátságos) — az adott üzlet profiljához és márkájához igazítható." },
  { cat: "komm", icon: CalendarCheck, title: "Automatikus értesítések", desc: "Időpont-visszaigazolások, emlékeztetők, módosítás, lemondás visszaigazolása, utánkövető üzenetek - a napi működés fontos, ismétlődő kommunikációs helyzeteit az eaisyDesk önállóan kezeli, így segít abban, hogy a fontos ügyfélértesítések ne maradjanak el." },
  { cat: "komm", icon: Megaphone, title: "Kampányvarázsló funkció", desc: "Az eaisyDesk kampányvarázslójával néhány lépésben indíthatsz célzott kimenő ügyfélkommunikációs kampányokat. Válaszd ki a megszólítani kívánt ügyfélkört, add meg az üzenet célját, és a rendszer segít megírni, kiküldeni és követni a kommunikációt." },
  { cat: "aikontroll", icon: BookOpen, title: "Cégre szabott tudásbázis", desc: "Az eaisyDesk nem általános, sablonos válaszokból dolgozik, hanem teljesen az adott cég működésére felkészített tudásbázisból. A felhasználói setup első lépéseként az eaisyDesk kezelőfelületén feltöltjük a szolgáltatóra jellemző tudást és működési logikát." },
  { cat: "aikontroll", icon: UserCheck, title: "Human-in-the-loop", desc: "Az eaisyDesk az írásos válaszokat igény szerint emberi jóváhagyáshoz köti. Így ha az ügyfél szeretné, a gyorsaság mellett a kontroll is megmarad: a kiküldés előtt minden üzenet ellenőrizhető." },
  { cat: "aikontroll", icon: History, title: "Átadás előzményekkel", desc: "Az eaisyDesk tudja, mikor válaszolhat önállóan, mikor kell jóváhagyást kérni, és mikor kell élő kollégának átadni az ügyet — az előzményekkel együtt. Az AI-eszközöknél ez kiemelten fontos szempont: nem hallucinál, hanem ismeri a kompetenciahatárait." },
  { cat: "aikontroll", icon: Clock, title: "24/7 működés", desc: "Rá mindig lehet számítani: a megkereséseket nyitvatartási időn kívül is fogadja, nem jár le a munkaideje és nem megy szabadságra. Ha pedig egy ügy emberi döntést igényel, azt rendszerezve és előkészítve adja tovább." },
  { cat: "ugyfel", icon: Inbox, title: "Omnichannel kommunikáció", desc: "A rendszer egységes ügyféltörténetbe rendezi az interakciókat, ezért akkor is folytatható a kommunikáció, ha az ügyfél másik csatornán tér vissza. Így a csapat mindig ugyanabból a kontextusból dolgozik, az ügyfélnek pedig nem kell újra elmondania, hol tartott az ügy." },
  { cat: "ugyfel", icon: ListChecks, title: "Intelligens ügykezelés", desc: "Az eaisyDesk a beérkező megkereséseket nem egyszerű üzenetként tárolja, hanem automatikusan ügyekké rendezi. Az ügyhöz státuszt, ügytípust, prioritást és szükséges teendőket rendel, így azonnal látszik, hol tart a folyamat, mi a következő lépés, és mely esetek igényelnek gyors beavatkozást." },
  { cat: "ugyfel", icon: Tags, title: "Érdeklődőkezelés", desc: "Automatikusan felismeri az értékesítési szempontból fontos megkereséseket, és a megfelelő címkékkel rendszerezi őket. Így a valódi vásárlási potenciállal rendelkező érdeklődők nem vesznek el a napi kommunikációban, könnyebben szegmentálhatók, célzottabban szólíthatók meg, és az értékesítési utánkövetés is átláthatóbbá válik." },
  { cat: "ugyfel", icon: Monitor, title: "Átlátható kezelőfelület", desc: "Nincs több széttartó kommunikáció és folyamatos váltogatás az e-mail, telefon, Messenger, Instagram vagy WhatsApp között. Az eaisyDesk egy közös felületre rendezi a bejövő és kimenő interakciókat, így minden ügyfélkapcsolat egy helyen követhető." },
  { cat: "analitika", icon: BarChart3, title: "Analitika és riportok", desc: "Az eaisyDesk nemcsak kezeli a megkereséseket, hanem mérhetővé is teszi őket. Láthatóvá válik, milyen csatornákon mi érkezik, miből lesz foglalás, hol akad el a folyamat, és mely területeken érdemes finomhangolni a működést." },
];
// Előnyök — szerepválasztós (A csapat / Az ügyfelek / A cégvezető)
const BENEFIT_ROLES = [
  {
    id: "csapat",
    label: "A csapat",
    fill: "#C43284",
    numColor: "#C43284",
    benefits: [
      { title: "Kisebb terhelés", desc: "Az eaisyDesk leveszi a csapat válláról az ismétlődő ügyfélkommunikáció jelentős részét, így a kollégák több időt fordíthatnak azokra az ügyekre, ahol valóban emberi figyelem kell." },
      { title: "Marketingmunka - egyszerűbben", desc: "Nem kell külön marketingkapacitás minden egyes ügyfélaktiváló üzenethez. Az eaisyDesk segít célzott kommunikációt készíteni és kiküldeni, így a meglévő ügyfélkör is könnyebben megszólítható." },
      { title: "Minden egy átlátható felületen", desc: "Nem kell több csatorna és felület között váltogatni. A megkeresések, ügyek, státuszok és teendők egy közös kezelőfelületen követhetők. Így a napi munka átláthatóbb és gyorsabb." },
    ],
  },
  {
    id: "ugyfelek",
    label: "Az ügyfelek",
    fill: "#1CEEE0",
    numColor: "#1CEEE0",
    benefits: [
      { title: "Villámgyors reakcióidő", desc: "Az ügyfeleknek nem kell órákat vagy akár napokat várniuk a válaszra. Az eaisyDesk a megkeresésekre azonnal reagál, és csak akkor von be kollégát, amikor valóban szükséges." },
      { title: "Jobb ügyfélélmény", desc: "Az ügyfél ugyanazt a gyors, következetes és személyre szabott kommunikációt kapja több csatornán is. Nem kell újra és újra elmondania, mi történt korábban, a kommunikáció ott folytatódik, ahol abbamaradt." },
      { title: "Pontos és kiszámítható tájékoztatás", desc: "A visszajelzések, emlékeztetők és fontos értesítések nem maradnak el a napi leterheltség miatt. Az automatizált kommunikáció gondoskodik róla, hogy a megfelelő információ a megfelelő időben jusson el az ügyfélhez." },
    ],
  },
  {
    id: "cegvezeto",
    label: "A cégvezető",
    fill: "#2C6E91",
    numColor: "#2C6E91",
    benefits: [
      { title: "Nincs több elveszett megkeresés", desc: "Az érdeklődők nem tűnnek el inboxokban és social media üzenetekben. Az eaisyDesk rendszerezi és követhető ügyekké alakítja őket, így segít abban, hogy az érdeklődők ne vesszenek el, hanem követhetően haladjanak a konverzió felé." },
      { title: "Jobban hasznosított adatbázis", desc: "Az ügyfélkommunikációból keletkező információ nem csak eltárolódik. Az eaisyDesk segít felismerni az érdeklődőket, szegmentálni az ügyfélkört és célzott utánkövetéseket vagy kampányokat indítani." },
      { title: "Nagyobb üzleti kontroll", desc: "Nem érzésekből kell megítélni, hogyan működik az ügyfélkezelés. A riportok és státuszadatok megmutatják, mennyi megkeresés érkezik, hol akadnak el az ügyek, milyen gyors a reakcióidő és mely területeken van szükség beavatkozásra." },
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
              className="relative overflow-hidden rounded-2xl p-6 flex flex-col items-start gap-4"
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
                  Célzott üzenetek pár kattintással - ajánlatkövetés, kedvezmények, vagy meglévő
                  ügyfelek reaktiválása.
                </p>
              </div>
            </div>

            {/* 5+3 csatorna — light landscape */}
            <div className={`${TEASER_CARD} bg-white sm:col-span-2 lg:col-span-2 p-6 flex flex-col gap-5`}>
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-black/[0.04] px-3.5 py-2">
                {CHANNEL_ICONS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
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
            <div className={`${TEASER_CARD} bg-white sm:col-span-2 lg:col-span-2 lg:h-full p-6 flex flex-col gap-3.5`}>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.lightBg }}
                >
                  <Monitor className="w-5 h-5" strokeWidth={1.5} style={{ color: C.main }} />
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
                  <div key={r.ch} className="grid grid-cols-[16px_70px_60px_120px_56px_1fr] items-center gap-x-2 py-1.5 text-[11px]">
                    <r.icon className="w-3.5 h-3.5 justify-self-center" style={{ color: C.main }} strokeWidth={1.5} />
                    <span className={`${FONT_CARD} font-semibold`} style={{ color: C.ink }}>{r.ch}</span>
                    <span className={`${FONT_CARD} text-black/45`}>{r.topic}</span>
                    <span className={`${FONT_CARD} text-black/45`}>{r.status}</span>
                    <span
                      className={`${FONT_CARD} px-2 py-0.5 rounded-full font-semibold text-[10px] text-center whitespace-nowrap`}
                      style={{ backgroundColor: r.pillBg, color: r.pillColor }}
                    >
                      {r.pill}
                    </span>
                    <span className={`${FONT_CARD} text-black/40 hidden xl:inline`}>{r.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* érdeklődőkezelés — light square (row 2) */}
            <div className={`${TEASER_CARD} bg-white p-6 flex flex-col gap-3`}>
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
  const { ref: gridRef, inView } = useInView<HTMLDivElement>(0.15);
  const spotRef = useRef<HTMLDivElement>(null);

  // cyan spot follows the cursor (parallax); magenta one is a static decoration on the left
  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = spotRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(calc(-50% + ${dx * 0.18}px), calc(-50% + ${dy * 0.18}px))`;
  }
  function onMouseLeave() {
    if (spotRef.current) spotRef.current.style.transform = "translate(-50%, -50%)";
  }

  return (
    <section
      id="problemak"
      className="relative w-full overflow-hidden bg-white py-16 lg:py-20"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* decorative spots — magenta fixed on the left, cyan drifting with the cursor */}
      <div
        className="absolute left-[22%] top-1/2 w-[560px] h-[560px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(196,50,132,0.10), transparent 70%)" }}
      />
      <div
        ref={spotRef}
        className="absolute left-2/3 top-1/2 w-[520px] h-[520px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{ background: "radial-gradient(circle, rgba(144,255,248,0.35) 0%, rgba(28,238,224,0.18) 45%, transparent 72%)", transform: "translate(-50%, -50%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="A hagyományos ügyfélszolgálati működés korlátai"
          eyebrowColor={C.main}
          title={<>6 ismerős <span style={{ color: C.magenta }}>probléma</span></>}
          subtitle="Ma már az ügyfelek úgy és akkor veszik fel a kapcsolatot a szolgáltatókkal, ahogy nekik kényelmes: Telefonon, e-mailben, social media felületeken vagy WhatsAppon. Bármely napszakban, nyitvatartási időn kívül is."
        />

        {/* 6 numbered cards — fly in per row from both sides on scroll */}
        <div
          ref={gridRef}
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full"
        >
          {PROBLEMS.map(({ num, title, desc }, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const delay = row * 140 + col * 70;
            const hidden =
              col === 0 ? "translateX(-48px)" : col === 2 ? "translateX(48px)" : "translateY(32px)";
            return (
              <div
                key={num}
                className="rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-white p-7 flex flex-col gap-4"
                style={{
                  border: "1px solid rgba(24,109,152,0.25)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : hidden,
                  transition: `opacity 0.5s ease ${delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
                }}
              >
                <p className={`${FONT_MAIN} font-bold text-xl leading-none`} style={{ color: C.magenta }}>
                  {num}
                </p>
                <h3 className={`${FONT_MAIN} mt-6 font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                  {title}
                </h3>
                <p className={`${FONT_MAIN} font-light text-[13px] leading-[1.7]`} style={{ color: C.ink }}>
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
    <section id="megoldas" className="w-full bg-white py-16 lg:py-20 relative overflow-hidden">
      <div className={INNER_CARDS}>
        <div
          className="relative overflow-hidden rounded-[32px]"
          style={{ background: "linear-gradient(120deg, #082432 0%, #0A2C40 60%, #0F4E71 130%)" }}
        >
          {/* sparse dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1.4px, transparent 1.4px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-12 lg:px-16 lg:py-20">
            {/* left: eyebrow, brand, body, taglines */}
            <div className="flex flex-col items-start gap-6">
              <SectionEyebrow color={C.magentaLight}>A mi megoldásunk</SectionEyebrow>
              <p
                className={`${FONT_CARD} font-extrabold text-5xl lg:text-[64px] leading-none`}
                style={{ color: C.cyan }}
              >
                eaisyDesk
              </p>
              <p className={`${FONT_MAIN} font-light text-lg leading-relaxed text-white/90`}>
                Az eaisyDesk egy AI-támogatott, omnichannel ügyfélkommunikációs rendszer, amelyben
                minden csatornán egy AI asszisztens válaszol az ügyfeleknek. Időpontot foglal,
                értesítést küld, válaszol hívásokra, social media üzenetekre — és ha kell, azonnal
                eszkalál élő kollégának. Sőt, kimenő kommunikációt és kampányokat is indít.
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <p className={`${FONT_CARD} text-base leading-snug`} style={{ color: C.accent }}>
                  Nem chatbot. Nem csak AI ügyfélszolgálat.
                </p>
                <p className={`${FONT_CARD} font-semibold text-base leading-snug`} style={{ color: C.cyan }}>
                  Valódi, intelligens munkatárs — aki 24/7 dolgozik.
                </p>
              </div>
            </div>

            {/* right: bordered call card with CTA (útvonal később) */}
            <div
              className="rounded-[24px] flex flex-col items-center justify-center text-center gap-7 px-8 py-12"
              style={{ border: "1px solid rgba(28,238,224,0.4)" }}
            >
              <span
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: C.cyan }}
              >
                <Mic className="w-8 h-8" strokeWidth={1.5} style={{ color: C.dark }} />
              </span>
              <p className={`${FONT_CARD} font-light text-lg leading-relaxed text-white/90 max-w-[400px]`}>
                Beszélj élőben az eaisyDesk telefonos AI-asszisztensével. A demó kedvéért most egy
                fogászati rendelő recepcióját bíztuk rá.
              </p>
              <button
                className={`${FONT_CARD} mt-2 inline-flex items-center justify-center px-8 h-[46px] rounded-full font-semibold text-sm tracking-widest uppercase text-white cursor-pointer`}
                style={{ backgroundColor: C.magenta }}
              >
                Próbáld ki
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const PER_VIEW = 4;
  const N = DESK_FEATURES.length;
  const [filter, setFilter] = useState<DeskFeatureCat | "all">("all");
  const [first, setFirst] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [toastVisible, setToastVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, lastX: 0, lastT: 0, v: 0, raf: 0 });

  const visible = filter === "all" ? DESK_FEATURES : DESK_FEATURES.filter((f) => f.cat === filter);
  const visibleCount = visible.length;
  const countOf = (cat: DeskFeatureCat) => DESK_FEATURES.filter((f) => f.cat === cat).length;
  const maxFirst = Math.max(0, visibleCount - PER_VIEW);
  function go(delta: 1 | -1) {
    setDir(delta);
    setFirst((v) => Math.max(0, Math.min(maxFirst, v + delta)));
  }

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
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
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
        : "bg-white border-black/10 font-medium hover:border-[#186D98]/60 hover:shadow-sm"
    }`;

  function FeatureCard({ cat, icon: Icon, title, desc }: { cat: DeskFeatureCat; icon: typeof MessagesSquare; title: string; desc: string }) {
    const category = DESK_FEATURE_CATS.find((c) => c.id === cat)!;
    return (
      <div
        className="snap-start shrink-0 grow-0 basis-[85%] sm:basis-[calc(50%_-_12px)] lg:basis-[calc((100%_-_72px)/_4)] lg:min-h-[501px] relative overflow-hidden rounded-[20px] p-8 lg:p-10 flex flex-col items-center text-center gap-6"
        style={{ border: "1px solid rgba(24,109,152,0.3)", backgroundColor: "rgba(255,255,255,0.75)" }}
      >
        {/* category pill */}
        <span
          className={`${FONT_MAIN} inline-flex items-center px-3.5 py-1.5 rounded-full font-medium text-[11px] leading-none whitespace-nowrap`}
          style={{ backgroundColor: category.soft, color: category.deep }}
        >
          {category.label}
        </span>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: category.color }}
        >
          <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "white" }} />
        </div>
        <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
          {title}
        </h3>
        <p className={`${FONT_MAIN} font-light text-[13px] leading-[1.7]`} style={{ color: C.ink }}>
          {desc}
        </p>
        {/* fine bottom gradient in the category color */}
        <div
          className="absolute inset-x-0 bottom-0 h-[38%] pointer-events-none"
          style={{ background: `linear-gradient(to top, ${category.soft}, transparent)` }}
        />
      </div>
    );
  }

  return (
    <section id="funkciok" ref={sectionRef} className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <style>{`
        @keyframes feat-slide-right { from { opacity: 0; transform: translateX(56px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes feat-slide-left { from { opacity: 0; transform: translateX(-56px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes swipe-hint-wiggle { 0%, 100% { transform: translateX(-7px); } 50% { transform: translateX(7px); } }
        @media (prefers-reduced-motion: reduce) { .swipe-hint-anim { animation: none !important; } }
      `}</style>

      {/* static teal + rose spots */}
      <div
        className="absolute left-[24%] top-[30%] w-[520px] h-[520px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(196,50,132,0.08), transparent 70%)" }}
      />
      <div
        className="absolute left-[78%] top-[70%] w-[520px] h-[520px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(28,238,224,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Funkciók - Teljes áttekintés"
          eyebrowColor={C.main}
          title={
            <>
              Nincs több elveszett megkeresés. Minden csatorna, minden ügyfél -{" "}
              <span style={{ color: C.magenta }}>egy rendszerben.</span>
            </>
          }
          subtitle="Minden, ami az ügyfélkommunikációt gördülékenyebbé teszi: a bejövő megkeresésektől és időpontfoglalástól az érdeklődőkezelésen át a kimenő kampányokig."
        />

        {/* filter chips — two rows */}
        <div className="mt-14 lg:mt-20 w-full max-w-[900px] mx-auto flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => { setFilter("all"); setFirst(0); setToastVisible(false); }}
            className={chipCls(filter === "all")}
            style={filter === "all" ? { backgroundColor: C.magenta } : undefined}
          >
            Összes{" "}
            <span className="font-semibold" style={{ color: filter === "all" ? "rgba(255,255,255,0.9)" : C.magenta }}>
              {N}
            </span>
          </button>
          {DESK_FEATURE_CATS.map(({ id, label, icon: Icon }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                onClick={() => { setFilter(id); setFirst(0); setToastVisible(false); }}
                className={chipCls(active)}
                style={active ? { backgroundColor: C.magenta } : undefined}
              >
                <Icon
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  style={{ color: active ? "rgba(255,255,255,0.9)" : C.main }}
                />
                <span className="font-light" style={{ color: active ? "white" : C.ink }}>{label}</span>
                <span className="font-semibold" style={{ color: active ? "rgba(255,255,255,0.9)" : C.magenta }}>
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
            visibleCount < PER_VIEW ? "lg:justify-center" : ""
          }`}
          style={{ scrollbarWidth: "none", animation: "feat-slide-right 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {visible.map(({ cat, icon: Icon, title, desc }) => (
            <FeatureCard key={title} cat={cat} icon={Icon} title={title} desc={desc} />
          ))}
        </div>

        {/* chevron paging */}
        <div className="mt-10 hidden lg:flex items-center justify-center gap-4">
          <button
            onClick={() => page(-1)}
            disabled={first === 0}
            aria-label="Előző funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#1CEEE0]/15 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(24,109,152,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.main }} />
          </button>
          <button
            onClick={() => page(1)}
            disabled={first >= maxFirst}
            aria-label="Következő funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#1CEEE0]/15 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(24,109,152,0.5)" }}
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
              <MoveHorizontal className="w-7 h-7" strokeWidth={2} style={{ color: C.magenta }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// demo request stopper — dark teal gradient strip between features and benefits
function DemoCtaStrip() {
  return (
    <section className="w-full bg-white pb-20 lg:pb-24">
      <div className={INNER_CARDS}>
        <div
          className="relative overflow-hidden rounded-[30px]"
          style={{
            background:
              "radial-gradient(circle at 92% 40%, rgba(229,126,184,0.25) 0%, rgba(196,50,132,0.12) 30%, transparent 55%), linear-gradient(100deg, #082432 0%, #0A2C40 60%, #0F4E71 100%)",
          }}
        >
          {/* dense small dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1.2px, transparent 1.2px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative px-8 py-14 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
            {/* left: eyebrow, title, description */}
            <div className="flex flex-col items-start gap-6 max-w-[640px] lg:w-1/2">
              <SectionEyebrow color={C.magentaLight}>Demo</SectionEyebrow>
              <h2
                className={`${FONT_MAIN} font-medium text-4xl lg:text-[50px] leading-[1.1] tracking-tight text-white`}
              >
                Ne csak elképzeld.
                <br />
                Nézd meg <span style={{ color: C.magentaLight }}>élőben.</span>
              </h2>
              <p className={`${FONT_MAIN} font-light text-base leading-relaxed text-white/80`}>
                Minden vállalkozás más. Mondd el, nálad milyen helyzetek okoznak problémát, és
                megmutatjuk, hogyan segítene az eaisyDesk a te folyamataidban – demóban, a saját
                példáddal.
              </p>
            </div>

            {/* right half: CTA + meta pills, centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5 lg:py-6">
              <button
                onClick={openDemoModal}
                className={`${FONT_CARD} inline-flex items-center justify-center px-10 h-[54px] rounded-full font-medium text-xl tracking-[0.2em] text-white transition-opacity hover:opacity-90`}
                style={{ backgroundColor: C.magenta }}
              >
                Kérj demot
              </button>
              <div className="flex items-center gap-5">
                {[
                  { icon: Clock, label: "30-60 perc" },
                  { icon: Headset, label: "Google Meet" },
                  { icon: Tags, label: "Ingyenes" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className={`${FONT_CARD} inline-flex items-center gap-1.5 text-[13px] text-white/80`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: "white" }} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const [active, setActive] = useState(0);
  const role = BENEFIT_ROLES[active];

  return (
    <section
      id="elonyok"
      className="relative w-full overflow-hidden bg-white py-16 lg:py-20"
    >
      <style>{`@keyframes benefits-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      {/* soft teal glow top-right */}
      <div
        className="absolute right-[8%] top-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(28,238,224,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Előnyök"
          eyebrowColor={C.main}
          title={
            <>
              Amiért minden szereplő <br className="hidden lg:block" />
              <span style={{ color: C.magenta }}>értékelni</span> fogja
            </>
          }
          subtitle="Ugyanaz a platform — más eredmény minden szerepkörben. Nézd meg, mit kap tőle a csapat, az ügyfeleid és a vezetés."
        />

        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-10">
          {/* left: role chips */}
          <div className="flex flex-col items-center justify-center gap-3 lg:w-[34%]">
            {BENEFIT_ROLES.map((r, i) => {
              const isActive = i === active;
              return (
                <button
                  key={r.id}
                  onClick={() => setActive(i)}
                  className={`${FONT_MAIN} w-full max-w-[260px] h-[75px] rounded-full uppercase tracking-wide text-sm transition-all duration-300 cursor-pointer ${
                    isActive ? "font-bold" : "font-light"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: r.fill, color: r.id === "ugyfelek" ? C.dark : "white" }
                      : { backgroundColor: "white", border: "1px solid rgba(13,109,138,0.45)", color: C.ink }
                  }
                >
                  {r.label}
                </button>
              );
            })}
          </div>

          {/* right: numbered benefits of the selected role */}
          <div key={role.id} className="flex-1 flex flex-col gap-7" style={{ animation: "benefits-fade-in 0.4s ease both" }}>
            {role.benefits.map(({ title, desc }, i) => (
              <div key={title} className="flex items-stretch gap-4">
                <span className="w-[2px] rounded-full shrink-0" style={{ backgroundColor: role.numColor }} />
                <span
                  className={`${FONT_MAIN} font-semibold text-3xl leading-none shrink-0 self-center`}
                  style={{ color: role.numColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className={`${FONT_MAIN} font-semibold text-xl`} style={{ color: C.ink }}>
                    {title}
                  </h3>
                  <p className={`${FONT_MAIN} font-light text-sm leading-relaxed`} style={{ color: C.bodyText }}>
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
  return (
    <section id="kinek-valo" className="w-full py-16 lg:py-20" style={{ backgroundColor: "#F3F3F4" }}>
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
    <section id="gyik" className="w-full bg-white py-16 lg:py-20">
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
      <DemoCtaStrip />
      <BenefitsSection />
      <WhoForSection />
      <FaqSection />
      <CtaSection />
      <StickyDemoCta />
    </div>
  );
}
