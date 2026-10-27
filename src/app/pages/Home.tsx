import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Sparkles, Fingerprint, Rocket, FileText, BookOpen, Headset, Layers, Users, User, Megaphone, Puzzle, ArrowRight, Target, Link2, ThumbsUp, MoveDiagonal, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { Seo, organizationSchema, websiteSchema } from "@/app/components/Seo";
import imgHeroBg from "@/imports/Home/hero-bg.png";
import imgLogo from "@/imports/Home/eaisy-logo.png";
import imgSky from "@/imports/Home/sky-bg.png";
import imgEaisyIcon from "@/imports/Home/eaisy-icon.png";
import imgBill from "@/imports/Mobile/b9f75c0a78805e573fd7ba6264690ff7fc119464.webp";
import imgDesk from "@/imports/Mobile/faf98039103ec19a5a8cea4bb3b15bb435e98f27.webp";
import imgCRM from "@/imports/Mobile/0ed95b9c10d6f138aa05178ee56582c704d965a2.webp";
import imgBoost from "@/imports/Mobile/8e5eb0f957911a1b8a542f8c02ebfbed02d9f155.webp";
import imgDocs from "@/imports/Mobile/84645b8a5ef11283d6e6443763bb76a2b8eab618.webp";
import imgHR from "@/imports/Mobile/bfdac52013fd058c16676a0d83a329a0a460bdb9.webp";
import imgBooks from "@/imports/EaisyBooks/ai-tax.webp";

// home palette per the new design
const HC = {
  title: "#406D83",   // hero title + subtitle
  icon: "#22C5C8",    // card icons / accents
  cardTitle: "#264350",
  text: "#406D83",
  ink: "#264350",
};

const FONT_MAIN = "font-['Montserrat',sans-serif]";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* full-bleed sky background with the flying elephant */}
      <img
        src={imgHeroBg}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="relative w-full max-w-[1376px] mx-auto px-6 lg:px-10 pt-[197px]">
        {/* title + translucent wordmark on one aligned column */}
        <div className="w-full max-w-[716px] mx-auto">
          <h1
            className={`${FONT_MAIN} font-medium text-3xl lg:text-[32px] leading-[40px] tracking-tight max-w-[420px]`}
            style={{ color: HC.title }}
          >
            Könnyebb működés. Nagyobb szabadság.
          </h1>
          <img
            src={imgLogo}
            alt="eaisy"
            className="w-full max-w-[716px] h-auto mt-1 select-none pointer-events-none"
          />
        </div>

        <p
          className={`${FONT_MAIN} mx-auto mt-5 max-w-[780px] text-center font-normal text-base leading-relaxed`}
          style={{ color: HC.text }}
        >
          Hozd ki a legtöbbet vállalkozásodból az eaisy AI-támogatott szoftvereivel. Intelligens
          automatizáció, amely egyszerűbbé teszi a működést, magasabb szintre emeli az
          ügyfélélményt, és a növekedéssel együtt skálázódik.
        </p>
      </div>

      {/* value cards on the clouds */}
      <div className="relative mt-16 pb-16">
        <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-5 justify-center items-stretch">
          {VALUE_CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="w-full md:w-[400px] bg-white/70 border border-black/10 rounded-[16px] shadow-[0_10px_30px_-12px_rgba(38,67,83,0.18)] backdrop-blur-[2px] px-8 py-8 flex flex-col items-center text-center gap-4"
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: HC.icon }} />
                <h3 className={`${FONT_MAIN} font-semibold text-[17px] tracking-tight leading-snug`} style={{ color: HC.cardTitle }}>
                  {c.title}
                </h3>
                <p className={`${FONT_MAIN} font-normal text-[13px] leading-relaxed`} style={{ color: HC.text }}>
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── value cards: three pillars under the hero ──
const VALUE_CARDS = [
  { icon: Sparkles, title: "Megoldások A-Z-ig", desc: "Pénzügy, marketing, ügyfélkezelés, értékesítés, HR és dokumentumok – válaszd azt, amire épp szükséged van." },
  { icon: Fingerprint, title: "Hibrid működés", desc: "Az AI rugalmasságát stabil, szabályalapú működéssel kombináljuk. Okos, mégis kiszámítható." },
  { icon: Rocket, title: "Érezhető üzleti előny", desc: "Kevesebb manuális munka, gyorsabb folyamatok és több idő arra, ami igazán előrébb visz." },
];

// ── "Ismerősen hangzik?" — four everyday situations ──
const HOME_PROBLEMS = [
  { num: "01", title: "Ahogy nő a vállalkozás, egyre több az adat", desc: "Egyre több ügyfél, egyre több feladat, egyre több adat kerül különböző rendszerekbe. Ami kezdetben még működött, idővel munkát, hibákat és elveszett lehetőségeket okoz." },
  { num: "02", title: "Ugyanazt a munkát többször is elvégzik", desc: "Az adatok másolása, ellenőrzése és továbbítása értékes munkaidőt visz el. Sok folyamat minden alkalommal újrakezdődik, pedig automatizálható lenne." },
  { num: "03", title: "Az AI csak részfeladatokat old meg", desc: "Lehet, hogy már használsz AI-t, és lehet, hogy jól is működik egy konkrét területen, de nem látja át a vállalkozás folyamatait és összefüggéseit. Integráció és kontroll nélkül csak egy újabb elszigetelt eszközzé válik." },
  { num: "04", title: "Nincs egységes kép a működésről", desc: "Ha az adatok különböző helyeken vannak, nehéz időben észrevenni az eltéréseket, elakadásokat vagy lehetőségeket. A döntések gyakran hiányos vagy már elavult információkra épülnek." },
];

function IsmerosenHangzik() {
  return (
    <section id="mi-az-eaisy" className="w-full bg-white pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 flex flex-col">
        {/* centered header */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2.5">
            <span className="w-[3px] h-4 rounded-full" style={{ backgroundColor: HC.icon }} />
            <p className={`${FONT_MAIN} font-semibold text-[13px] uppercase tracking-[0.2em]`} style={{ color: HC.icon }}>
              Ismerősen hangzik?
            </p>
          </div>
          <h2
            className={`${FONT_MAIN} font-medium text-4xl lg:text-[40px] leading-tight tracking-tight max-w-[680px]`}
            style={{ color: HC.ink }}
          >
            Nem az idő kevés. A manuális munka <span style={{ color: HC.icon }}>sok.</span>
          </h2>
          <p className={`${FONT_MAIN} font-light text-lg leading-relaxed max-w-[720px]`} style={{ color: HC.text }}>
            A megoldatlan problémák észrevétlenül teszik egyre nehezebbé azt, aminek egyszerűen
            kellene működnie.
          </p>
        </div>

        {/* four numbered cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOME_PROBLEMS.map((p) => (
            <div key={p.num} className="bg-white border border-black/10 rounded-[14px] p-7 flex flex-col gap-4 text-left">
              <span className={`${FONT_MAIN} font-semibold text-[22px] leading-none`} style={{ color: HC.icon }}>
                {p.num}
              </span>
              <h3 className={`${FONT_MAIN} font-semibold text-[17px] leading-snug tracking-tight`} style={{ color: HC.cardTitle }}>
                {p.title}
              </h3>
              <p className={`${FONT_MAIN} font-normal text-[13px] leading-relaxed`} style={{ color: HC.text }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── stats band: teal gradient strip with key numbers ──
const HOME_STATS = [
  { num: "80% +", label: "időfelszabadítás" },
  { num: "7 modul", label: "akár egy rendszerben" },
  { num: "100 %", label: "jogi megfelelőség" },
];

function StatsBand() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10">
        <div
          className="rounded-[24px] px-8 py-14 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10"
          style={{ background: "linear-gradient(90deg, #96DBDE 0%, #72B7B9 100%)" }}
        >
          {HOME_STATS.map((s) => (
            <div key={s.num} className={`${FONT_MAIN} flex flex-col items-center text-center gap-1`}>
              <p className="font-medium text-5xl lg:text-[56px] leading-none text-white">{s.num}</p>
              <p className="font-light text-xl lg:text-2xl text-white/95">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── "Szoftverek" — autoplay spotlight carousel on the sky background ──
const SOFTWARE_CARDS = [
  { icon: Target, title: "Pont azok a modulok, amelyekre szükséged van", desc: "A modulok külön-külön és összekapcsolva is használhatók – pont azokon a területeken, ahol szükséged van automatizálásra vagy folyamataid optimalizálására." },
  { icon: Link2, title: "Összekapcsolható a meglévő eszközeiddel", desc: "Összekapcsolható azokkal a meglévő eszközökkel és rendszerekkel, amelyeket a csapat már most is nap mint nap használ." },
  { icon: ThumbsUp, title: "A saját működésedhez alakítható", desc: "Nem egy merev, dobozos megoldást kapsz. A rendszer a saját működésedhez, szabályaidhoz és céljaidhoz alakítható." },
  { icon: MoveDiagonal, title: "A vállalkozásoddal együtt növekszik", desc: "A rendszer a növekvő feladatmennyiséghez, csapatlétszámhoz és üzleti igényekhez is rugalmasan igazítható." },
  { icon: BarChart3, title: "Érthető adatok, megalapozott döntések", desc: "Kimutatások, dashboardok, amelyek érthetően megmutatják a lényeget, vagy éppen a mély összefüggéseket – nem csak újabb táblázatokat adnak." },
];

const CAROUSEL_SLOT = 380 + 6; // center card width + gap — uniform step between card centers

function SoftwareCarousel() {
  const N = SOFTWARE_CARDS.length;
  const [pos, setPos] = useState(N + 1); // global position in the tripled track (middle copy)
  const [instant, setInstant] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState(0); // half of the viewport width

  // keep the active card centered on resize too
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setCenter(el.clientWidth / 2);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // the highlighted card is derived directly from the track position
  const active = ((pos % N) + N) % N;

  const go = (delta: 1 | -1) =>
    setPos((p) => {
      // normalize into the middle copy first, then take the step
      const snapped = p < N || p >= 2 * N ? N + (((p % N) + N) % N) : p;
      return snapped + delta;
    });

  // after sliding into an outer copy, snap back to the middle copy invisibly
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== "transform") return;
    if (pos < N || pos >= 2 * N) {
      setInstant(true);
      setPos(N + active);
    }
  };

  // re-enable the transition right after the invisible snap
  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  const track = [...SOFTWARE_CARDS, ...SOFTWARE_CARDS, ...SOFTWARE_CARDS];

  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        @media (prefers-reduced-motion: reduce) { .carousel-track { transition: none !important; } }
      `}</style>
      {/* sky background */}
      <img
        src={imgSky}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ transform: "translateZ(0)" }}
      />

      <div className="relative w-full max-w-[1376px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        {/* eaisy app icon */}
        <img src={imgEaisyIcon} alt="eaisy" className="w-[72px] h-[72px] rounded-[16px] shadow-sm" />

        {/* header: title left, paragraph right */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <h2
            className={`${FONT_MAIN} font-medium text-3xl lg:text-[34px] leading-tight tracking-tight max-w-[560px]`}
            style={{ color: HC.ink }}
          >
            Szoftverek, a<br className="hidden lg:block" />
            <span style={{ color: HC.icon }}> működésedre szabva</span>
          </h2>
          <p
            className={`${FONT_MAIN} font-normal text-lg leading-relaxed max-w-[640px] lg:ml-auto`}
            style={{ color: HC.text }}
          >
            Nem neked kell alkalmazkodnod a rendszerhez. Az eaisy moduljai a céged folyamataihoz,
            eszközeihez és növekedési üteméhez igazodnak.
          </p>
        </div>

        {/* carousel — side chevrons (above the fade mask) */}
        <div className="relative mt-16">
          <button
            onClick={() => go(-1)}
            aria-label="Előző"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center bg-white/60 hover:bg-white transition-colors"
            style={{ border: "1px solid rgba(38,67,83,0.45)" }}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} style={{ color: HC.ink }} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Következő"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center bg-white/60 hover:bg-white transition-colors"
            style={{ border: "1px solid rgba(38,67,83,0.45)" }}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} style={{ color: HC.ink }} />
          </button>

          {/* sliding track: 3 copies of the cards, the active card centered;
              the fade mask lives on this wrapper only, the chevrons stay in front of it */}
          <div ref={viewportRef} className="relative" style={{
            maskImage: "linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent)",
          }}>
          <div
            className="carousel-track flex gap-1.5 items-start w-max"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${center - 190 - pos * CAROUSEL_SLOT}px)`,
              transition: instant ? "none" : "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
              willChange: "transform",
            }}
          >
            {track.map((c, idx) => {
              const Icon = c.icon;
              const isCenter = idx === pos;
              const offset = Math.abs(idx - pos);
              const show = offset <= 1;
              return (
                <div key={idx} className={`shrink-0 w-[380px] ${show ? "" : "invisible"}`}>
                  <div
                    className={`${FONT_MAIN} w-full h-[500px] ${
                      isCenter ? "bg-white/60" : "bg-[#E9EEF3]/85 opacity-60"
                    } shadow-[0_16px_40px_-18px_rgba(38,67,83,0.25)] rounded-[20px] px-12 pt-12 flex flex-col items-center transition-[background-color,opacity] duration-[450ms]`}
                  >
                    <Icon className="w-[118px] h-[118px] text-white shrink-0" strokeWidth={2} />
                    <h3 className="mt-[35px] w-full text-left font-semibold text-[17px] leading-snug tracking-tight" style={{ color: HC.cardTitle }}>
                      {c.title}
                    </h3>
                    <p className="mt-4 w-full text-left font-normal text-sm leading-relaxed" style={{ color: HC.text }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── solutions: compact product cards, sticky heading on the left ──
const SOLUTIONS = [
  { id: "bill", name: "eaisyBill", tag: "Pénzügy, kontrolling", color: "#2E9EA6", icon: FileText,
    desc: "A vállalkozás szétszórt pénzügyi adataiból egységes és naprakész működési képet épít. Automatizálja a pénzügyi háttérfolyamatokat és csökkenti a manuális adminisztrációt.",
    link: "/eaisy-bill" },
  { id: "books", name: "eaisyBooks", tag: "Könyvelés", color: "#E58F0E", icon: BookOpen,
    desc: "AI-támogatott platform könyvelőirodáknak: portfóliókezelés, bérszámfejtés, TAO/KIVA kalkuláció, AI asszisztens és compliance egy helyen.",
    link: "/eaisy-books" },
  { id: "desk", name: "eaisyDesk", tag: "Ügyfélkommunikáció", color: "#186D98", icon: Headset,
    desc: "Omnichannel ügyfélkommunikációs rendszer, amely 5 csatornán kezeli az ügyfelek megkereséseit: időpontot foglal, értesítést küld, válaszol hívásokra és social media üzenetekre, sőt kimenő kommunikációt is indít.",
    link: "/eaisy-desk" },
  { id: "docs", name: "eaisyDocs", tag: "Dokumentumkezelés", color: "#232D7B", icon: Layers,
    desc: "Dokumentumkezelő és iktatási rendszer, amely automatizálja a beérkező dokumentumok érkeztetését, felismerését, kategorizálását és iktatását — gyors visszakereséssel." },
  { id: "crm", name: "eaisyCRM", tag: "Értékesítés, CRM", color: "#6CCC34", icon: Users,
    desc: "Ügyfél- és értékesítéskezelő rendszer, amely átláthatóan kezeli a kapcsolati adatokat, az érdeklődéseket és a lehetőségeket, segíti az utánkövetést, automatizálja az ismétlődő teendőket, és megmutatja, hova érdemes fókuszálni." },
  { id: "hr", name: "eaisyHR", tag: "HR", color: "#4FA9A2", icon: User,
    desc: "AI-támogatott humánerőforrás-menedzsment rendszer, amely egy helyen segíti a munkavállalói adatok, dokumentumok, szabadságok, munkaidő-nyilvántartások és belső HR-folyamatok kezelését." },
  { id: "boost", name: "eaisyBoost", tag: "Social media kezelés", color: "#701ab7", icon: Megaphone,
    desc: "AI-támogatott social media marketing: márkaazonos posztok, tartalomnaptár, Facebook- és Instagram-publikálás, e-mail kampányok és hirdetéskezelés egy platformon.",
    link: "/eaisy-boost" },
  { id: "work", name: "eaisyWork", tag: "Feladatkezelés", color: "#3A3F45", icon: Puzzle,
    desc: "AI-támogatott munkaszervezési modul csapatoknak — feladatok, kapacitás és folyamatok egy felületen. Részletek hamarosan." },
];

function SolutionsSection() {
  return (
    <section id="termekek" className="w-full bg-white py-16 lg:py-20">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* sticky heading */}
        <div className="lg:w-[36%]">
          <div className="lg:sticky lg:top-32 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="w-[3px] h-4 rounded-full" style={{ backgroundColor: HC.icon }} />
              <p className={`${FONT_MAIN} font-semibold text-[13px] uppercase tracking-[0.2em]`} style={{ color: HC.icon }}>
                Megoldásaink
              </p>
            </div>
            <h2
              className={`${FONT_MAIN} font-medium text-3xl lg:text-[34px] leading-tight tracking-tight`}
              style={{ color: HC.ink }}
            >
              Melyik területen lesz szükséged több{" "}
              <span className="italic" style={{ color: HC.icon }}>kapacitásra?</span>
            </h2>
          </div>
        </div>

        {/* card grid */}
        <div className="flex-1 grid sm:grid-cols-2 gap-5 items-stretch">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="bg-white border border-black/10 rounded-[16px] p-6 flex flex-col gap-4">
                <span
                  className={`${FONT_MAIN} self-start inline-flex items-center px-3 py-1 rounded-full text-white text-[11px] font-semibold`}
                  style={{ backgroundColor: s.color }}
                >
                  {s.tag}
                </span>
                <div className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5" strokeWidth={1.75} style={{ color: s.color }} />
                  <h3 className={`${FONT_MAIN} font-semibold text-lg tracking-tight`} style={{ color: HC.ink }}>
                    {s.name}
                  </h3>
                </div>
                <p className={`${FONT_MAIN} text-[13px] leading-relaxed`} style={{ color: HC.text }}>
                  {s.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-black/5">
                  {s.link ? (
                    <Link
                      to={s.link}
                      className={`${FONT_MAIN} inline-flex items-center gap-1.5 font-semibold text-sm transition-all hover:gap-2.5`}
                      style={{ color: HC.ink }}
                    >
                      Tudj meg többet <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </Link>
                  ) : (
                    <span className={`${FONT_MAIN} font-semibold text-sm text-black/40`}>Hamarosan</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="rolunk" className="w-full bg-white py-20 lg:py-24">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* left: eyebrow + title */}
        <div className="lg:max-w-xs shrink-0 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <span className="w-[3px] h-4 rounded-full" style={{ backgroundColor: HC.icon }} />
            <p className={`${FONT_MAIN} font-semibold text-[13px] uppercase tracking-[0.2em]`} style={{ color: HC.icon }}>
              Rólunk
            </p>
          </div>
          <h2
            className={`${FONT_MAIN} font-medium text-3xl lg:text-[40px] leading-tight tracking-tight`}
            style={{ color: HC.ink }}
          >
            A team az <span style={{ color: HC.icon }}>eaisy</span> mögött
          </h2>
        </div>

        {/* right: paragraphs */}
        <div
          className={`flex-1 ${FONT_MAIN} font-normal text-base leading-relaxed flex flex-col gap-4`}
          style={{ color: HC.text }}
        >
          <p>
            A Think AI-t 2023-ban alapítottuk Budapesten azzal a céllal, hogy olyan
            mesterségesintelligencia-alapú megoldásokat fejlesszünk, amelyek nemcsak látványosak,
            hanem valódi üzleti helyzetekben is megbízhatóan használhatók.
          </p>
          <p>
            A céget hárman indítottuk, három különböző szakmai háttérrel.{" "}
            <strong className="font-semibold" style={{ color: HC.cardTitle }}>Ágó Zoltán</strong> többéves
            vállalkozói és fejlesztőcég-vezetői tapasztalatot,{" "}
            <strong className="font-semibold" style={{ color: HC.cardTitle }}>Benke Viktor</strong> operatív
            vezetői szemléletet,{" "}
            <strong className="font-semibold" style={{ color: HC.cardTitle }}>Lederer Balázs</strong> pedig
            több mint tíz év digitális és reklámügynökségi projektvezetési tapasztalatát hozta a közös
            munkába. Más területekről érkeztünk, de ugyanazt kerestük: hogyan lehet az AI-ból valóban
            működő, mérhető üzleti eredményt létrehozni.
          </p>
          <p>
            Ma tízfős, folyamatosan fejlődő csapatként dolgozunk. Fejlesztők, projektmenedzserek és
            UX-szakemberek építik együtt a megoldásainkat, mert hisszük, hogy egy jó rendszer nem
            pusztán technológiai kérdés. A használható szoftverhez meg kell érteni az iparágat, a
            munkafolyamatokat, a felhasználókat és azt az üzleti problémát is, amelyet meg akarunk oldani.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="eaisy – AI-támogatott üzleti megoldások KKV-knak"
        description="AI-támogatott szoftverek kis- és középvállalkozásoknak – a pénzügytől az ügyfélszolgálaton át a marketingig. Ismerd meg az eaisyBill, eaisyDesk és eaisyBoost megoldásokat!"
        path="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />
      <Hero />
      <IsmerosenHangzik />
      <StatsBand />
      <SolutionsSection />
      <SoftwareCarousel />
      <AboutSection />
    </>
  );
}
