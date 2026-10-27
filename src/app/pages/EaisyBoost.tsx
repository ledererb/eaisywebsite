import { useState, useEffect, useRef, type TransitionEvent, type PointerEvent } from "react";
import { Layers, Palette, Users, TrendingUp, Sparkles, Mail, Fingerprint, CalendarDays, CalendarClock, BarChart3, Share2, Clock, ChevronDown, CheckCircle2, Megaphone, Facebook, Instagram, ArrowUpRight, Lightbulb, Upload, Crosshair, Tag, Search, MoveHorizontal, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import imgBigCard from "@/imports/EaisyBoost/big-square-hero.png";
import imgDemo from "@/imports/demo-img.png";
import { openDemoModal } from "@/app/Root";
import { SectionHeader, SectionEyebrow } from "@/app/components/Section";
import { Seo, organizationSchema, softwareAppSchema, faqSchema } from "@/app/components/Seo";

const C = {
  dark: "#3B0764",        // Purple 950
  deep: "#581C87",        // Purple 900
  main: "#7E22CE",        // Purple 700 — brand on light backgrounds
  purple: "#A855F7",      // Purple 500
  accent: "#D8B4FE",      // Purple 300 — soft accent / hover borders
  lightBg: "#FAF5FF",     // Purple 50
  yellow: "#FACC15",      // Yellow 400 — CTA accent
  yellowLight: "#FEF08A", // Yellow 200 — icon/eyebrow accent on dark
  bodyText: "rgba(0,0,0,0.55)",
  ink: "#264350",         // site-wide dark text
};

// design-system shared bits (Bill/Books/Desk conventions)
const FONT_MAIN = "font-['Montserrat',sans-serif]";
const FONT_CARD = "font-['Inter',sans-serif]";
const INNER = "w-full max-w-[1530px] mx-auto px-6 lg:px-10"; // → 1450px content
const INNER_CARDS = "w-full max-w-[1434px] mx-auto px-6 lg:px-10"; // → 1354px content
const TEASER_CARD =
  "rounded-2xl ring-1 ring-inset ring-[rgba(126,34,206,0.22)] transition-all duration-300 hover:-translate-y-1";

const PROBLEMS = [
  { icon: Layers, title: "Szétszórt eszközök", desc: "A posztszövegek, vizuálok és márkaanyagok különböző felületeken készülnek. Az eszközök közötti váltás lassítja és átláthatatlanná teszi a tartalomkészítést." },
  { icon: CalendarClock, title: "Rendszertelen kommunikáció", desc: "Tartalomnaptár és előzetes tervezés nélkül a posztolás alkalmiszerűvé válik. Elmaradhatnak bejegyzések, a fontos témák pedig könnyen kimaradhatnak." },
  { icon: Lightbulb, title: "Kreativitás- és ötlethiány", desc: "Nem könnyű folyamatosan új, érdekes és a márkához illő tartalmakat kitalálni. Sokszor már a következő poszt témájának megtalálása is nehézséget okoz." },
  { icon: Fingerprint, title: "Következetlen márkahang", desc: "A szövegek és vizuálok csatornánként eltérhetnek. Közös márkaprofil nélkül nehéz minden tartalomban ugyanazt a hangvételt és megjelenést követni." },
  { icon: Upload, title: "Körülményes kézi publikálás", desc: "Ugyanazt a tartalmat minden közösségi felületre külön kell feltölteni és beállítani. A kézi közzététel időigényes, a tervezett posztok pedig könnyen elmaradhatnak." },
  { icon: Megaphone, title: "Időigényes hirdetéstervezés", desc: "Egy kampányhoz meg kell határozni a célt, a célközönséget, a költségkeretet és az üzenetet. A megfelelő beállítások összeállítása időt és szakértelmet igényel." },
];

const FEATURES = [
  { num: 1, icon: Search, title: "Weboldal- és márka-audit", desc: "Az eaisyBoost SEO-, marketing-, vizuális és kapcsolati szempontból elemzi a weboldaladat, majd pontszámokkal és fejlesztési javaslatokkal mutatja meg a legfontosabb teendőket." },
  { num: 2, icon: Fingerprint, title: "Brand DNA profil", desc: "A rendszer rögzíti a márkád hangnemét, vizuális karakterét, tartalmi irányait és a posztsablonok fő stílusát. Minden új szöveg és vizuál erre a közös márkaalapra épül." },
  { num: 3, icon: Sparkles, title: "Márkaazonos Quick Post", desc: "Kép, posztszöveg, hashtag és cselekvésre ösztönző üzenet egyetlen gyors folyamatban, a márka saját stílusához igazítva. A saját márkastílusodon belül szöveges, promóciós, lifestyle- vagy fotóközpontú sablonok választhatók. Az AI segít a szöveg és a hozzá illő kép elkészítésében különböző képarányokban. Az eredmény publikálás előtt finomítható." },
  { num: 4, icon: CalendarDays, title: "Social tervezés és publikálás", desc: "Tervezd meg a tartalmakat naptárnézetben, hagyd jóvá az elkészült posztokat, majd időzítsd vagy publikáld őket Facebookra és Instagramra. Az eredményeket közös analitikai felületen követheted." },
  { num: 5, icon: Mail, title: "AI-támogatott e-mail-kampányok", desc: "Egy rövid briefből készíts teljes, formázott e-mail-kampányt. A generált szöveget és a vizuális felépítést küldés előtt szabadon finomíthatod, kódolás nélkül." },
  { num: 6, icon: BarChart3, title: "Célzott küldés és kampánymérés", desc: "Kezeld a feliratkozókat és a célcsoportokat, küldd ki a kampányt azonnal vagy időzítve, majd A/B tesztekkel és részletes statisztikákkal mérd, melyik változat működik jobban." },
];

const BENEFIT_ROLES = [
  {
    id: "marketingvezeto",
    label: "A marketingvezető",
    numColor: "#7E22CE",
    benefits: [
      { title: "Egy platform, átláthatóbb működés", desc: "Az e-mail, a social media és a márka-audit közös rendszerbe kerül, így kevesebb eszközt és folyamatot kell összehangolni." },
      { title: "Gyorsabb kampányindítás", desc: "Az AI felgyorsítja a szöveg- és kreatívkészítést, ezért az ötletből rövidebb idő alatt lesz publikálható kampány." },
      { title: "Következetes márkahang", desc: "A közös márkaprofil minden csatornán ugyanahhoz a hangnemhez és vizuális karakterhez igazítja a tartalmat." },
    ],
  },
  {
    id: "tartalomkeszito",
    label: "A tartalomkészítő",
    numColor: "#7E22CE",
    benefits: [
      { title: "Gyorsabb napi tartalomkészítés", desc: "A márka stílusához előre igazított Quick Post sablonokkal, az AI-szövegekkel és a generált képekkel grafikai előképzettség nélkül is gyorsan készülhetnek egységes, igényes posztok." },
      { title: "Tervezhető tartalomnaptár", desc: "Az előre elkészített és időzített posztokkal a folyamatos jelenlét nem napi kapkodáson múlik." },
      { title: "Egyszerű jóváhagyás", desc: "A generált tartalmak egy helyen ellenőrizhetők, szerkeszthetők és hagyhatók jóvá." },
    ],
  },
  {
    id: "cegvezeto",
    label: "A cégvezető",
    numColor: "#7E22CE",
    benefits: [
      { title: "Egy dashboard, több csatorna", desc: "Az e-mailes és social teljesítmény egy helyen követhető, így gyorsabban látszik, mi hoz eredményt." },
      { title: "Több tartalom ugyanazzal a csapattal", desc: "Az automatizált előkészítés és publikálás csökkenti a manuális munkát, ezért a marketing nagyobb volumenben is kezelhető." },
      { title: "Gyorsabb piacra lépés", desc: "Az új ajánlatokhoz és kampányokhoz szükséges tartalmak napok helyett akár órák alatt előkészíthetők." },
    ],
  },
];

const WHO_FOR = [
  { icon: Users, title: "Ahol nincs külön marketingcsapat", desc: "Az eaisyBoost azoknak is segít rendszeresen és igényesen kommunikálni, akiknek nincs saját szövegírójuk, grafikusuk vagy social media menedzserük." },
  { icon: Clock, title: "Ahol túl sok idő megy el a tartalomgyártásra", desc: "Ha minden poszt és kampány nulláról indul, az AI-generálás és a sablonok jelentősen lerövidítik az előkészítést." },
  { icon: Share2, title: "Ahol több csatornán kell jelen lenni", desc: "Az e-mailes és social feladatok közös rendszerben tervezhetők, így kevesebb az eszközváltás és az adminisztráció." },
  { icon: Palette, title: "Ahol fontos az egységes márkamegjelenés", desc: "A Brand DNA segít abban, hogy a különböző időpontokban és csatornákra készülő tartalmak is ugyanazt a márkát képviseljék." },
  { icon: TrendingUp, title: "Ahol nő a tartalomigény, de a csapat nem", desc: "A folyamatok automatizálásával több kampány és több publikáció kezelhető arányos létszámnövelés nélkül." },
];

const FAQS = [
  { q: "Kell hozzá marketinges vagy grafikai tudás?", a: "Nem. Az eaisyBoost célja, hogy kész sablonokkal és AI-támogatással azok is gyorsan készíthessenek igényes tartalmakat, akik nem marketing- vagy dizájnszakemberek. A generált szövegek publikálás előtt egyszerűen szerkeszthetők." },
  { q: "Automatikusan publikálja az AI által készített tartalmat?", a: "Nem jóváhagyás nélkül. A rendszer előkészíti a tartalmat, de az csak ellenőrzés és jóváhagyás után kerül ki." },
  { q: "Mely közösségi platformokat kezeli?", a: "A jelenlegi működés Facebook- és Instagram-publikálásra, időzítésre és analitikára épül." },
  { q: "Használhatok kész sablonokat a posztokhoz?", a: "Igen. A fő sablonstílus már a márkaprofil kialakításakor létrejön, ezért a Quick Postban nem egymástól független sabloncsaládok közül kell választanod. A saját stílusodon belül választhatsz tartalomtípust — például szöveges, promóciós, lifestyle- vagy fotóközpontú sablont — és képarányt; minden változat következetesen illeszkedik a márkádhoz." },
  { q: "Kezeli az e-mail kampányokat is?", a: "Igen. Készíthetsz AI-generált kampányt, szerkesztheted vizuálisan, időzítheted a kiküldést, A/B tesztet futtathatsz, és követheted a teljesítményét." },
  { q: "Látom egy helyen a kampányeredményeket?", a: "Igen. Az e-mailes és social mutatók közös platformon követhetők, csatornánként és összesítve." },
  { q: "Mennyi idő a bevezetés?", a: "Ez a használt moduloktól, a csatornák összekapcsolásától és a márkaprofil kialakításától függ. Egy rövid igényfelmérés után pontos bevezetési tervet adunk." },
  { q: "Mennyibe kerülnek az eaisy termékek?", a: "Az eaisy termékeket úgy alakítottuk ki, hogy a kisebb és nagyobb vállalkozások eltérő működéséhez, funkcionális igényeihez és adatmennyiségéhez is rugalmasan igazodjanak. Az egyes termékeken belül is csak azokat a modulokat és funkciókat szükséges igénybe venni, amelyekre valóban szükség van. Az árat a választott funkciók, a felhasználási volumen és az integrációs igények egyaránt befolyásolják, ezért minden ügyfelünk számára egyedi ajánlatot készítünk." },
];

const WHO_SHOULD = [
  "Aki rendszeresen szeretne posztolni, de nincs rá elég ideje vagy külön csapata",
  "Aki túl sok külön eszközben kezeli az e-mailes és social feladatokat",
  "Aki gyorsabban szeretne kampányokat és márkaazonos tartalmakat készíteni",
  "Aki előre tervezhető, automatizált publikálást szeretne",
  "Aki több tartalmat készítene a marketingcsapat bővítése nélkül",
];

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-[122px] pb-14 lg:pb-20">
      {/* centered 1615px gradient frame — top edge runs below the navbar, rounded corners */}
      <div className="absolute top-24 bottom-0 lg:top-[110px] left-1/2 -translate-x-1/2 w-full max-w-[1615px] overflow-hidden rounded-[40px]">
        {/* cream → white → light lilac gradient (Boost brand tint, like the other product pages) */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(45deg, #FFFBE6 0%, #FFFEFB 50%, #F1E8F9 100%)" }}
        />
      </div>

      <div className={`relative ${INNER} flex flex-col items-center`}>
        {/* brand logo — rounded pill frame in the brand color */}
        <p
          className={`${FONT_CARD} inline-flex items-center rounded-full px-8 py-3 lg:px-10 lg:py-4 font-extrabold text-3xl lg:text-4xl leading-none`}
          style={{ border: `1px solid ${C.dark}`, color: C.dark }}
        >
          eaisyBoost
        </p>

        {/* main title */}
        <h1
          className={`${FONT_MAIN} mt-[50px] font-medium text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-center`}
          style={{ color: C.ink }}
        >
          A profi social media kezelés többé nem idő és kreativitás kérdése
        </h1>

        {/* subtitle — carries on the H1 sentence */}
        <p className={`${FONT_MAIN} mt-4 lg:mt-5 font-light text-base lg:text-lg leading-relaxed text-center text-black`}>
          az eaisyBoost AI támogatott social media és e-mail marketing platformmal
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

        {/* ── teaser grid: 5-col — big 14 funkció square, automatizált landscape, Quick Post, 3 kis square ── */}
        <div className="mt-[50px] w-full rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-md p-4 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2.5">
            {/* 6 funkció — big square with brand artwork, spans 2 rows */}
            <div
              className="relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-0 flex flex-col"
            >
              <img
                src={imgBigCard}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* inset ring above the image */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(126,34,206,0.25)] pointer-events-none" />
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
                  <p className={`${FONT_MAIN} leading-none tracking-tight text-white`}>
                    <span className="font-semibold text-6xl lg:text-[64px]">6</span>
                    <span className="ml-3 font-semibold text-4xl lg:text-[48px]">funkció</span>
                  </p>
                  <p className={`${FONT_MAIN} font-medium text-2xl lg:text-[28px] leading-snug text-white/90`}>
                    amivel a közösségi média kezelése jelentősen leegyszerűsödik
                  </p>
                </div>
                <a
                  href="#funkciok"
                  className={`${FONT_MAIN} self-start mb-10 lg:mb-24 inline-flex items-center gap-2 px-8 h-[46px] rounded-full font-medium text-base tracking-wider transition-opacity hover:opacity-90`}
                  style={{ backgroundColor: "#F2D253", color: C.dark }}
                >
                  Megnézem
                </a>
              </div>
            </div>

            {/* teljesen automatizált — light landscape */}
            <div className={`${TEASER_CARD} bg-white sm:col-span-2 lg:col-span-2 p-6 flex flex-col gap-5`}>
              <div className="inline-flex items-center gap-2 self-start">
                {[Facebook, Instagram].map((Icon, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E3D2FB" }}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: "#7429C6" }} />
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                  Teljesen automatizált social media kezelés
                </h3>
                <p className={`${FONT_MAIN} text-sm leading-relaxed`} style={{ color: C.bodyText }}>
                  AI-támogatott szöveg- és képgenerálás, a márka vizuális stílusához igazodó Quick Post
                  sablonok, időzítés, valamint Facebook- és Instagram-publikálás egyetlen felületről.
                </p>
              </div>
            </div>

            {/* Quick Post — light square */}
            <div className={`${TEASER_CARD} bg-white p-6 flex flex-col gap-3 lg:aspect-square`}>
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: "#F4D760" }}
              >
                <Sparkles className="w-5 h-5" strokeWidth={1.5} style={{ color: "#5C3A7F" }} />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                Quick Post funkció
              </h3>
              <p className={`${FONT_MAIN} text-[13px] leading-snug`} style={{ color: C.bodyText }}>
                Három lépés az ötlettől a kész posztig: bármely szabványméretben, posztolással együtt.
              </p>
            </div>

            {/* brandhű tartalmak — light square */}
            <div className={`${TEASER_CARD} bg-white p-6 flex flex-col items-center text-center gap-3 lg:aspect-square`}>
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: "#FEF08A" }}
              >
                <Palette className="w-5 h-5" strokeWidth={1.5} style={{ color: "#C08C30" }} />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                Brandhű tartalmak
              </h3>
              <p className={`${FONT_MAIN} text-[13px] leading-snug`} style={{ color: C.bodyText }}>
                Az eaisyBoost megismeri a márkád stílusát, és ehhez igazítja a posztok hangvételét és
                vizuális megjelenését.
              </p>
            </div>

            {/* hirdetéstervezés — light square */}
            <div className={`${TEASER_CARD} bg-white p-6 flex flex-col items-center text-center gap-3 lg:aspect-square`}>
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: "#FEF08A" }}
              >
                <Megaphone className="w-5 h-5" strokeWidth={1.5} style={{ color: "#C08C30" }} />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                Hirdetéstervezés
              </h3>
              <p className={`${FONT_MAIN} text-[13px] leading-snug`} style={{ color: C.bodyText }}>
                Készíts kampánytervet a céljaidhoz, célcsoportodhoz és költségkeretedhez igazítva.
              </p>
            </div>

            {/* social media naptár — light square */}
            <div className={`${TEASER_CARD} bg-white p-6 flex flex-col items-center text-center gap-3 lg:aspect-square`}>
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center"
                style={{ backgroundColor: "#FEF08A" }}
              >
                <CalendarDays className="w-5 h-5" strokeWidth={1.5} style={{ color: "#C08C30" }} />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                Social media naptár
              </h3>
              <p className={`${FONT_MAIN} text-[13px] leading-snug`} style={{ color: C.bodyText }}>
                Tervezd meg előre a tartalmaidat, és lásd egy helyen, mi készül, mi vár jóváhagyásra,
                és mikor jelenik meg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Autoplay teaser: vertical loop of product panels ──
const TEASER_BARS = [38, 52, 44, 62, 48, 70, 56, 66, 50, 60, 74, 58];

function TeaserHeader({ icon: Icon, label }: { icon: typeof BarChart3; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: C.lightBg }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: C.main }} strokeWidth={2} />
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-black/60">{label}</p>
    </div>
  );
}

function TeaserCarousel() {
  const panelCls = "bg-white rounded-xl border border-black/5 shadow-[0_2px_10px_rgba(59,7,100,0.10)] p-4 flex flex-col gap-3";

  const panels = [
    // 1 — Quick Post generálás
    <div key="quickpost" className={panelCls}>
      <TeaserHeader icon={Sparkles} label="Quick Post — generálás" />
      <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-1.5">
        <p className="text-[10px] font-medium text-black">„Őszi akció: 20% kedvezmény minden csomagra — csak ezen a héten!"</p>
        <div className="flex flex-wrap gap-1.5">
          {["Szöveges", "Promóciós", "1:1"].map((t) => (
            <span key={t} className="text-[9px] font-semibold px-2 py-1 rounded-full border" style={{ borderColor: C.main, color: C.main }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>Brand DNA szerint</span>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "rgba(250,204,21,0.3)", color: C.deep }}>Jóváhagyásra vár</span>
      </div>
    </div>,

    // 2 — Email kampány
    <div key="email" className={panelCls}>
      <TeaserHeader icon={Mail} label="E-mail kampány" />
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-semibold text-black truncate flex-1">
          Kampány időzítve <span className="font-normal text-black/50">— holnap 9:00</span>
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(250,245,255,0.9)" }}>
        <BarChart3 className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.main }}>A/B teszt fut — 2 változat</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: "rgba(250,245,255,0.9)" }}>
        <Users className="w-3 h-3 shrink-0" style={{ color: C.main }} strokeWidth={2} />
        <p className="text-[10px] font-medium" style={{ color: C.main }}>1 240 célzott feliratkozó</p>
      </div>
    </div>,

    // 3 — Brand DNA
    <div key="branddna" className={panelCls}>
      <TeaserHeader icon={Fingerprint} label="Brand DNA profil" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { k: "Hangnem", v: "barátságos, szakértő" },
          { k: "Vizuális karakter", v: "letisztult, lila hangsúly" },
          { k: "Sablonstílus", v: "fotóközpontú" },
        ].map((r) => (
          <div key={r.k} className="flex items-center gap-2 py-1.5">
            <p className="text-[10px] font-semibold text-black w-[88px] shrink-0">{r.k}</p>
            <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>,

    // 4 — Social naptár
    <div key="calendar" className={panelCls}>
      <TeaserHeader icon={CalendarDays} label="Social naptár" />
      <div className="flex flex-col divide-y divide-black/5">
        {[
          { when: "Kedd 10:00", what: "Instagram poszt — termékbemutató" },
          { when: "Csütörtök 17:30", what: "Facebook poszt — őszi akció" },
          { when: "Péntek 9:00", what: "Instagram story — kulisszatitkok" },
        ].map((r) => (
          <div key={r.when} className="flex items-center gap-2 py-1.5">
            <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0" style={{ backgroundColor: "rgba(250,204,21,0.3)", color: C.deep }}>{r.when}</span>
            <p className="text-[10px] font-medium text-black truncate flex-1">{r.what}</p>
          </div>
        ))}
      </div>
    </div>,

    // 5 — Analitika
    <div key="analytics" className={panelCls}>
      <TeaserHeader icon={BarChart3} label="Analitika — összesítve" />
      <div className="rounded-lg border border-black/5 p-2.5 flex flex-col gap-1.5">
        <p className="text-[10px] font-medium text-black">Elérés az elmúlt 30 napban</p>
        <div className="flex items-end gap-1 h-8">
          {TEASER_BARS.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: "linear-gradient(to top, #7E22CE, #FACC15)" }} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: C.lightBg, color: C.main }}>E-mail + social egy felületen</span>
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

function ProblemsSection() {
  return (
    <section id="problemak" className="relative w-full overflow-hidden bg-white py-20 lg:py-24">
      {/* faint purple halo behind the cards (brand color) */}
      <div
        className="absolute left-1/2 top-[58%] w-[640px] h-[640px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(126,34,206,0.12), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        {/* header — identical rhythm on every product page */}
        <SectionHeader
          eyebrow="A probléma"
          eyebrowColor={C.main}
          title="Amikor a közösségi médiára nem jut idő"
          titleClass="text-4xl lg:text-[40px]"
          subtitle="A legtöbb vállalkozás nem azért marad le, mert nincs mondanivalója — hanem mert nincs ideje minden csatornán következetesen jelen lenni."
        />

        {/* 6 problem cards — fixed height = the tallest card across pages */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          {PROBLEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-black/5 p-6 lg:p-7 flex flex-col gap-4 lg:h-[272px]"
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#FEF08A" }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: C.dark }} />
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

function SolutionSection() {
  return (
    <section id="megoldas" className="relative w-full bg-white pt-14 lg:pt-20 pb-20 lg:pb-24 overflow-hidden">
      {/* faint purple halo — below the eyebrow, at the title */}
      <div
        className="absolute left-[14%] top-[6%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(126,34,206,0.10), transparent 70%)" }}
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
              eaisyBoost:
              <br />
              Az ötlettől a publikálásig. Posztolás <span style={{ color: C.main }}>egyszerűen.</span>
            </h2>
            <p className={`${FONT_MAIN} font-light text-base leading-relaxed`} style={{ color: C.ink }}>
              Az eaisyBoost egy AI-támogatott marketingplatform, amellyel egyedi posztokat, előre
              felépített heti vagy havi tartalomnaptárat, illetve egy konkrét cél köré szervezett
              teljes social media kampányt tervezhetsz. Az eaisyBoost először megismeri a márkádat:
              felismeri annak vizuális világát, kommunikációs stílusát és fő üzeneteit, és minden
              elkészített social media tartalmat ezekhez igazít.
            </p>
            <a
              href="#funkciok"
              className={`${FONT_MAIN} self-start inline-flex items-center justify-center px-8 h-[50px] rounded-full font-medium text-base transition-colors hover:bg-[#7E22CE]/10`}
              style={{ border: `1px solid ${C.main}`, color: C.main }}
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

function DemoCtaStrip() {
  return (
    <section className="w-full bg-white pb-20 lg:pb-24">
      <div className={INNER_CARDS}>
        <div
          className="relative overflow-hidden rounded-[24px] flex flex-col lg:flex-row"
          style={{ background: "linear-gradient(90deg, rgba(126,34,206,0.13) 0%, rgba(126,34,206,0.05) 55%, rgba(126,34,206,0) 100%)" }}
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
            <SectionEyebrow color={C.main}>Demo</SectionEyebrow>
            <h2
              className={`${FONT_MAIN} font-medium text-4xl lg:text-[36px] leading-tight tracking-tight`}
              style={{ color: C.ink }}
            >
              Ne csak elképzeld.
              <br />
              Nézd meg <span style={{ color: C.main }}>élőben.</span>
            </h2>
            <p className={`${FONT_MAIN} font-light text-base leading-relaxed`} style={{ color: C.ink }}>
              Minden vállalkozás más. Mondd el, nálad milyen helyzetek okoznak problémát, és
              megmutatjuk, hogyan segítene az eaisyBoost a te folyamataidban – demóban, a saját
              példáddal.
            </p>
            <button
              onClick={openDemoModal}
              className={`${FONT_MAIN} mt-2 inline-flex items-center justify-center px-8 h-[46px] rounded-full font-medium text-sm tracking-wider text-white transition-opacity hover:opacity-90`}
              style={{ backgroundColor: C.main }}
            >
              Időpontot foglalok
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const N = FEATURES.length;
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, lastX: 0, lastT: 0, v: 0, raf: 0 });
  const [toastVisible, setToastVisible] = useState(false);

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

  return (
    <section id="funkciok" ref={sectionRef} className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <style>{`
        @keyframes feat-slide-right { from { opacity: 0; transform: translateX(56px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes swipe-hint-wiggle { 0%, 100% { transform: translateX(-7px); } 50% { transform: translateX(7px); } }
        @media (prefers-reduced-motion: reduce) { .swipe-hint-anim { animation: none !important; } }
      `}</style>

      {/* faint purple halo on the right side */}
      <div
        className="absolute left-[84%] top-[32%] w-[560px] h-[560px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(126,34,206,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Funkciók - Teljes áttekintés"
          eyebrowColor={C.main}
          title={
            <>
              Következetes jelenlét, kevesebb munkával, a márkád hangján.{" "}
              <span style={{ color: C.main }}>Minden csatornán.</span>
            </>
          }
          subtitle="Minden, ami a közösségi média jelenléteidet gördülékennyé teszi: az ötlettől a posztok elkészítésén és időzítésén át a kimenő kampányokig."
          titleClass="text-4xl lg:text-[40px]"
        />
      </div>

      {/* horizontally scrollable card carousel */}
      <div className={`relative ${INNER_CARDS} mt-12 lg:mt-16`}>
        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onScroll={() => { setToastVisible(false); updateArrows(); }}
          className={`flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-proximity pb-2 select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden ${
            N < 4 ? "lg:justify-center" : ""
          }`}
          style={{ scrollbarWidth: "none", animation: "feat-slide-right 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="snap-start shrink-0 grow-0 basis-[85%] sm:basis-[calc(50%_-_12px)] lg:basis-[calc((100%_-_72px)/_4)] lg:min-h-[501px] relative overflow-hidden bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 p-8 lg:p-10 flex flex-col items-center text-center gap-6"
              style={{ border: "1px solid rgba(126,34,206,0.4)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#FEF08A" }}
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: C.dark }} />
              </div>
              <h3 className={`${FONT_MAIN} font-medium text-lg leading-snug`} style={{ color: C.ink }}>
                {title}
              </h3>
              <p className={`${FONT_MAIN} font-light text-[13px] leading-[1.7]`} style={{ color: C.ink }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* chevron paging */}
        <div className="mt-10 hidden lg:flex items-center justify-center gap-4">
          <button
            onClick={() => page(-1)}
            aria-label="Előző funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#7E22CE]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(126,34,206,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.main }} />
          </button>
          <button
            onClick={() => page(1)}
            aria-label="Következő funkciók"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#7E22CE]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(126,34,206,0.5)" }}
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
              <MoveHorizontal className="w-7 h-7" strokeWidth={2} style={{ color: C.main }} />
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
      <div className={`relative ${INNER_CARDS} flex flex-col lg:flex-row gap-12 lg:gap-16`}>
        {/* left: eyebrow, title, paragraph */}
        <div className="flex flex-col justify-center gap-6 lg:w-[40%]">
          <SectionEyebrow color={C.main}>Előnyök</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.ink }}
          >
            Amiért az egész csapat
            <br className="hidden lg:block" />
            <span style={{ color: C.main }}> szeretni</span> fogja
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed`} style={{ color: C.ink }}>
            Ugyanaz a platform - más előny minden szerepkörben. Nézd meg, mit ad az eaisyBoost a
            marketingvezetőnek, a tartalomkészítőnek és a cégvezetőnek.
          </p>
        </div>

        {/* right: small role chips top-right + numbered points */}
        <div className="flex-1 flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-wrap items-center justify-start gap-2">
            {BENEFIT_ROLES.map((r, i) => {
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

          <div key={role.id} className="flex flex-col gap-9 lg:gap-10 min-h-[338px]" style={{ animation: "benefits-fade-in 0.4s ease both" }}>
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
        style={{ borderColor: "rgba(126,34,206,0.3)" }}
      >
        {/* dark layer fades in on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "#7E22CE" }}
        />
        <span className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 bg-[#C9A6EA] group-hover:bg-[#2E0850]">
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
        style={{ background: "radial-gradient(circle, rgba(126,34,206,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col`}>
        <SectionHeader
          eyebrow="Kinek való?"
          eyebrowColor={C.main}
          title="Kik számára jelent megoldást az eaisyBoost?"
          subtitle="Ahol a marketingnek működnie kell — nagy csapat nélkül is"
          titleClass="text-4xl lg:text-[40px]"
        />

        {/* desktop: 3-card carousel, hover-highlighted cards */}
        <div
          key={first}
          className="mt-12 lg:mt-16 hidden lg:flex items-stretch gap-6"
          style={{ animation: `${dir === 1 ? "who-slide-right" : "who-slide-left"} 0.45s cubic-bezier(0.22,1,0.36,1) both` }}
        >
          {WHO_FOR.slice(first, first + PER_VIEW).map((item, i) => (
            <WhoCard key={item.title} item={item} index={first + i + 1} />
          ))}
        </div>

        {/* mobile: stacked list (light cards) */}
        <div className="mt-12 flex flex-col gap-5 lg:hidden">
          {WHO_FOR.map((item, i) => (
            <WhoCard key={item.title} item={item} index={i + 1} />
          ))}
        </div>

        {/* chevron paging */}
        <div className="mt-10 hidden lg:flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Előző helyzetek"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#7E22CE]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(126,34,206,0.5)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: C.main }} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Következő helyzetek"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-[#7E22CE]/10 disabled:opacity-30 disabled:pointer-events-none"
            style={{ border: "1px solid rgba(126,34,206,0.5)" }}
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
    <section id="gyik" className="relative w-full bg-white py-16 lg:py-20 overflow-hidden">
      {/* faint purple halo behind the left text */}
      <div
        className="absolute left-[12%] top-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(126,34,206,0.10), transparent 70%)" }}
      />

      <div className={`relative ${INNER_CARDS} flex flex-col lg:flex-row gap-12 lg:gap-16`}>
        {/* left: eyebrow, title, subtitle */}
        <div className="flex flex-col gap-6 lg:w-[38%]">
          <SectionEyebrow color={C.main}>GYIK</SectionEyebrow>
          <h2
            className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: C.ink }}
          >
            Kérdések, amiket fel
            <br className="hidden lg:block" />
            szoktak <span style={{ color: C.main }}>tenni</span>
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed`} style={{ color: C.ink }}>
            Válaszok a leggyakrabban felmerülő kérdésekre — a sablonoktól és a publikálástól a
            kampányokig és az árazásig.
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
                        ? { border: `1px solid ${C.main}`, color: C.main }
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

// closing dark purple band with demo offer — continues into the footer
const BOOST_DEMO_STEPS = [
  "Bemutatjuk, hogyan készít az eaisyBoost márkaazonos posztokat és tartalomnaptárat",
  "Megmutatjuk a Quick Post funkciót és a jóváhagyási folyamatot",
  "Átnézzük az e-mail kampányok tervezését, küldését és mérését",
  "Felteheted a kérdéseidet",
  "Megbeszéljük a bevezetés menetét és a személyre szabott árazást",
];

function CtaSection() {
  return (
    <section id="demo" className="w-full pt-16 lg:pt-20 pb-16 lg:pb-20" style={{ backgroundColor: C.dark }}>
      <div className={INNER_CARDS}>
        <div
          className="relative overflow-hidden rounded-[28px] px-8 py-12 lg:px-16 lg:py-14"
          style={{ border: "1px solid rgba(216,180,254,0.35)" }}
        >
          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* left: demo offer */}
            <div className="flex flex-col items-start gap-6 lg:w-[55%]">
              <SectionEyebrow color={C.accent}>Következő lépés</SectionEyebrow>
              <h2
                className={`${FONT_MAIN} font-medium text-4xl lg:text-[44px] leading-[1.15] tracking-tight`}
                style={{ color: C.accent }}
              >
                Nézd meg működés közben!
              </h2>
              <p className={`${FONT_MAIN} font-light text-base leading-relaxed text-white/80`}>
                Kérj demót, és megmutatjuk, hogyan segít az eaisyBoost gyorsabban elkészíteni,
                egységesen kezelni és egyszerűbben publikálni az e-mailes és social tartalmaidat —
                egyetlen, AI-támogatott platformon.
              </p>
              <p className={`${FONT_MAIN} font-medium text-sm text-white/90 mt-2`}>
                Mi történik a demó során?
              </p>
              <ul className="flex flex-col gap-2.5">
                {BOOST_DEMO_STEPS.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-[5px] h-[5px] rounded-full mt-[7px] shrink-0" style={{ backgroundColor: C.accent }} />
                    <span className={`${FONT_MAIN} font-light text-sm leading-relaxed text-white/75`}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${FONT_MAIN} font-medium text-sm leading-relaxed text-white mt-2`}>
                eaisyBoost — AI-támogatott marketingplatform, amely összefogja a tartalomkészítést, a
                kampányokat és a márkád következetes megjelenését.
              </p>
            </div>

            {/* right: who should check it out + CTA */}
            <div className="flex flex-col items-start gap-7 lg:flex-1 lg:pt-14">
              <h3 className={`${FONT_MAIN} font-medium text-2xl lg:text-[28px] leading-snug text-white`}>
                Kinek érdemes
                <br />
                megnéznie?
              </h3>
              <div className="flex flex-col items-start gap-3">
                {WHO_SHOULD.map((reason) => (
                  <span
                    key={reason}
                    className={`${FONT_MAIN} inline-flex items-center px-5 py-2.5 rounded-full font-light text-[13px] text-white/90`}
                    style={{ border: "1px solid rgba(216,180,254,0.45)" }}
                  >
                    {reason}
                  </span>
                ))}
              </div>
              <button
                onClick={openDemoModal}
                className={`${FONT_MAIN} mt-2 inline-flex items-center justify-center px-9 h-[54px] rounded-full font-medium text-sm tracking-wider transition-opacity hover:opacity-90`}
                style={{ backgroundColor: C.yellow, color: C.dark }}
              >
                KÉRJ DEMOT
              </button>
            </div>
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
      className={`fixed bottom-6 right-6 z-50 px-8 py-3.5 rounded-full font-['Inter',sans-serif] font-extrabold text-sm tracking-widest shadow-[0_8px_30px_rgba(250,204,21,0.45)] hover:opacity-90 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: C.yellow, color: C.dark }}
    >
      KÉRJ DEMÓT
    </button>
  );
}

export default function EaisyBoost() {
  return (
    <div>
      <Seo
        title="eaisyBoost – AI social media és e-mail marketing | eaisy"
        description="Az eaisyBoost AI marketingeszköz: social media kezelés, e-mail kampányok, márka-audit és analitika egy platformon – nagy marketingcsapat nélkül is működő marketing."
        path="/eaisy-boost"
        jsonLd={[
          organizationSchema(),
          softwareAppSchema({
            name: "eaisyBoost",
            description: "AI-támogatott marketing platform: social media kezelés, e-mail kampányok és márkaépítés egy helyen.",
            path: "/eaisy-boost",
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
