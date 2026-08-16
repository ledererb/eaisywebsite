import { useState } from "react";
import { Link } from "react-router";
import { Sparkles, Fingerprint, Rocket } from "lucide-react";
import { openDemoModal } from "@/app/Root";
import { Seo, organizationSchema, websiteSchema } from "@/app/components/Seo";
import Vector from "@/imports/Vector/index";
import imgHero from "@/imports/eaisy-hero-final.webp";
import imgGearsBg from "@/imports/eaisy-gears-bg.webp";
import imgBill from "@/imports/Mobile/b9f75c0a78805e573fd7ba6264690ff7fc119464.webp";
import imgDesk from "@/imports/Mobile/faf98039103ec19a5a8cea4bb3b15bb435e98f27.webp";
import imgCRM from "@/imports/Mobile/0ed95b9c10d6f138aa05178ee56582c704d965a2.webp";
import imgBoost from "@/imports/Mobile/8e5eb0f957911a1b8a542f8c02ebfbed02d9f155.webp";
import imgDocs from "@/imports/Mobile/84645b8a5ef11283d6e6443763bb76a2b8eab618.webp";
import imgHR from "@/imports/Mobile/bfdac52013fd058c16676a0d83a329a0a460bdb9.webp";
import imgBooks from "@/imports/EaisyBooks/ai-tax.webp";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F5F8]" style={{ height: 962 }}>
      {/* full-bleed background image under the header */}
      <div className="absolute inset-0">
        <img
          alt=""
          src={imgHero}
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center translate-y-[44px]"
        />
      </div>

      {/* rectangular overlay: white 50%, 1px #C4C4C4 border (no top edge), 20px rounded bottom corners */}
      <div className="absolute inset-x-0 top-0 px-0 lg:px-10 2xl:px-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1560px] h-[962px] bg-white/50 border border-t-0 border-[#C4C4C4] rounded-b-[20px]" />
      </div>

      {/* ── top row: tagline ── sits below header */}
      <div className="relative w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 pt-36">
        <h1 className="font-['Inter',sans-serif] font-medium text-3xl lg:text-4xl text-black leading-tight max-w-[720px]" style={{ letterSpacing: "-0.03em" }}>
          Megoldások a vállalkozásod problémáira<br />– A pénzügytől a marketingig
        </h1>
      </div>

      {/* ── center block: eaisy logo + CTA buttons ── */}
      <div className="relative flex flex-col items-center w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 pt-14 lg:pt-20">
        <div className="w-full max-w-2xl" style={{ aspectRatio: "718 / 271" }}>
          <Vector />
        </div>
        <div className="flex flex-row gap-4 mt-10">
          <a
            href="#termekek"
            className="inline-flex items-center justify-center px-12 py-3.5 bg-black border border-black text-white rounded-full font-['Inter',sans-serif] font-light text-sm tracking-wide whitespace-nowrap hover:bg-[#1CEEE0]/20 hover:border-[#1CEEE0] hover:text-black hover:font-bold transition-colors"
          >
            FEDEZD FEL
          </a>
          <button
            onClick={openDemoModal}
            className="inline-flex items-center justify-center px-12 py-3.5 bg-white border border-black text-black rounded-full font-['Inter',sans-serif] font-light text-sm tracking-wide whitespace-nowrap hover:bg-[#1CEEE0]/20 hover:border-[#1CEEE0] hover:text-black hover:font-bold transition-colors"
          >
            KÉRJ DEMOT
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Value cards: overlap the hero overlay by 144px and hang below it ──
const VALUE_CARDS = [
  { icon: Sparkles, title: "Több, mint automatizálás", desc: "Az AI nemcsak végrehajt, hanem értelmez, összekapcsol és segíti a döntéseket." },
  { icon: Fingerprint, title: "Stabil alapokon", desc: "A kritikus folyamatokat ember által meghatározott szabályok teszik pontosabbá és kiszámíthatóbbá." },
  { icon: Rocket, title: "Érezhető üzleti előny", desc: "Kevesebb manuális munka, gyorsabb folyamatok és átláthatóbb működés – vállalkozásod minden területén." },
];

function HeroValueCards() {
  return (
    <section className="relative z-10 -mt-[144px]">
      {/* gray strip behind the card parts hanging below the hero overlay */}
      <div className="absolute inset-x-0 top-[144px] bottom-0 bg-[#F3F3F4]" aria-hidden="true" />
      <div className="relative w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex justify-center">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          {VALUE_CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="w-[384px] max-w-full h-[260px] bg-white rounded-[24px] border border-[#1CEEE0]/40 shadow-[0_24px_64px_-12px_rgba(12,12,13,0.18)] flex flex-col items-center text-center px-8 pt-9 gap-4"
              >
                <Icon className="w-8 h-8 text-black" strokeWidth={1.5} />
                <h3 className="font-['Inter',sans-serif] font-semibold text-2xl text-black tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-sm leading-relaxed text-black/55">
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

function WhatIsEaisy() {
  return (
    <section id="mi-az-eaisy" className="w-full bg-[#F3F3F4] pt-10 pb-10 lg:pt-16 lg:pb-16 relative">
      <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-10 2xl:px-0 flex justify-center">
        {/* rounded image card: gears background, full-width text, 426px tall on desktop */}
        <div className="relative w-full overflow-hidden rounded-[30px] lg:h-[426px]">
          <img
            alt=""
            src={imgGearsBg}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative flex flex-col justify-center gap-5 w-full h-full px-8 py-14 lg:px-16 lg:py-0">
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
              Könnyebb működés. Nagyobb szabadság.<br />
              <span className="italic text-[#186d98]">It's eaisy.</span>
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-base text-black/55 leading-relaxed">
              Már biztosan használsz valamilyen AI-eszközt a vállalkozásodban. És valószínűleg jól is működik – egy adott területen, egy konkrét problémát megoldva. Az eaisy moduljai és integrációi olyan hiányzó láncszemek a vállalkozásodban, amelyek összekapcsolják és mozgásban tartják meglévő rendszereidet, munkafolyamataidat. A modulok külön-külön is használhatók, együtt pedig egységes, fokozatosan bővíthető cégműködési rendszert alkotnak.
            </p>
            <p className="font-['Inter',sans-serif] font-semibold text-base lg:text-lg text-[#186d98] leading-relaxed">
              Nem az időd kevés. Csak nincsenek olyan rendszereid, amik helyetted dolgoznak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── filter key → product id mapping ─────────────────────────────────────────
const FILTER_TABS = [
  { label: "Minden terület", id: "all" },
  { label: "Pénzügy, kontrolling", id: "bill" },
  { label: "Könyvelés", id: "books" },
  { label: "Ügyfélkommunikáció", id: "desk" },
  { label: "Értékesítés", id: "crm" },
  { label: "Marketing", id: "boost" },
  { label: "Iktatás", id: "docs" },
  { label: "HR", id: "hr" },
] as const;

type FilterId = (typeof FILTER_TABS)[number]["id"];

const PRODUCTS: {
  id: FilterId;
  name: string;
  color: string;
  tagline: string;
  description: string;
  image: string;
  imageRight: boolean;
  link?: string;
  hoverColor?: string;
  hoverTextColor?: string;
}[] = [
  {
    id: "bill",
    name: "eaisyBill",
    color: "#05512a",
    tagline: "A pénzügyei végre egy helyen. Automatikusan. Valós időben.",
    description: "Az eaisyBill egy mesterséges intelligenciával támogatott pénzügyi és kontrolling platform, amely a vállalkozás szétszórt pénzügyi adataiból egységes, naprakész és ellenőrizhető működési képet épít. Segít automatizálni a pénzügyi háttérfolyamatokat, minimálizálja a manuális adminisztrációt, és olyan vezetői rálátást ad, amely alapján a cég nem utólag, hanem menet közben tud dönteni, beavatkozni és tervezni.",
    image: imgBill,
    imageRight: false,
    link: "/eaisy-bill",
    hoverColor: "#F26B77",
  },
  {
    id: "books",
    name: "eaisyBooks",
    color: "#085D6F",
    tagline: "Sokszorozd meg könyvelőirodád kapacitását AI-val.",
    description: "Az eaisyBooks AI-támogatott platform könyvelőirodáknak: portfóliókezelés, bérszámfejtés, TAO/KIVA kalkuláció, AI asszisztens és compliance egy helyen. 18+ funkció fedi le az iroda teljes működését – a demóban a saját példáddal mutatjuk meg.",
    image: imgBooks,
    imageRight: true,
    link: "/eaisy-books",
    hoverColor: "#E58F0E",
  },
  {
    id: "desk",
    name: "eaisyDesk",
    color: "#186d98",
    tagline: "Nem chatbot. Nem egy újabb AI ügyfélszolgálat. Intelligens munkatárs, aki 24/7 dolgozik.",
    description: "Az eaisyDesk egy AI-támogatott, omnichannel ügyfélkommunikációs rendszer, amelyben minden csatornán egy AI asszisztens válaszol az ügyfeleknek. Időpontot foglal, értesítést küld, válaszol hívásokra, social media üzenetekre – és ha kell, azonnal eszkalál élő kollégának. Sőt, kimenő kommunikációt és kampányokat is indít.",
    image: imgDesk,
    imageRight: true,
    link: "/eaisy-desk",
    hoverColor: "#C43284",
  },
  {
    id: "crm",
    name: "eaisyCRM",
    color: "#b70071",
    tagline: "Az érdeklődőtől a visszatérő ügyfélig. Minden kapcsolat egy helyen.",
    description: "Ügyfél- és értékesítéskezelő rendszer, amely egységesen kezeli a kapcsolati adatokat, az érdeklődéseket, az értékesítési lehetőségeket és a kapcsolódó feladatokat. Átlátható értékesítési folyamatot épít, segíti az utánkövetést, automatizálja az ismétlődő teendőket, és megmutatja, mely ügyfelekre vagy lehetőségekre érdemes fókuszálni.",
    image: imgCRM,
    imageRight: false,
  },
  {
    id: "boost",
    name: "eaisyBoost",
    color: "#701ab7",
    tagline: "Következetes social media jelenlét. Posztkészítés pár kattintással. Egyszerűbb hirdetéskezelés.",
    description: "A rendszeres posztoláshoz, a márkához illő, trendi közösségi média tartalmakhoz mostantól csupán egy munkatársa lesz szükséged: az eaisyBoostra. A Quick Post funkcióval néhány lépésben létrehozhatók a különböző felületekre és képarányokra optimalizált posztok (kép és szöveg), a hirdetéskezelési funkciók pedig támogatják a kampányok összeállítását, elindítását és követését.",
    image: imgBoost,
    imageRight: true,
    link: "/eaisy-boost",
    hoverColor: "#FACC15",
    hoverTextColor: "#701ab7",
  },
  {
    id: "docs",
    name: "eaisyDocs",
    color: "#150f87",
    tagline: "Minden dokumentum a helyén. Automatikusan iktatva. Könnyen visszakereshetően.",
    description: "Dokumentumkezelő és iktatási rendszer, amely automatizálja a beérkező dokumentumok érkeztetését, felismerését, kategorizálását és iktatását. A fájlokat a megfelelő ügyhöz, partnerhez vagy folyamathoz kapcsolja, egységes nyilvántartást hoz létre, és gyors visszakeresést biztosít.",
    image: imgDocs,
    imageRight: false,
    hoverColor: "#C9B458",
    hoverTextColor: "#150f87",
  },
  {
    id: "hr",
    name: "eaisyHR",
    color: "#c74c71",
    tagline: "Kevesebb HR-adminisztráció. Átláthatóbb csapatműködés. Több idő az emberekre.",
    description: "Az eaisyHR egy AI-támogatott humánerőforrás-menedzsment rendszer, amely egy helyen segíti a munkavállalói adatok, dokumentumok, szabadságok, munkaidő-nyilvántartások és belső HR-folyamatok kezelését. Automatizálja az ismétlődő adminisztratív feladatokat, támogatja a beléptetési és utánkövetési folyamatokat.",
    image: imgHR,
    imageRight: true,
    hoverColor: "#5C9E8A",
  },
];

function ModulesSection() {
  // Set of active specific filters. Empty = "Minden terület" (show all).
  const [active, setActive] = useState<Set<FilterId>>(new Set());

  function toggleFilter(id: FilterId) {
    if (id === "all") {
      setActive(new Set());
      return;
    }
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const showAll = active.size === 0;

  function isVisible(id: FilterId) {
    return showAll || active.has(id);
  }

  return (
    <section
      id="termekek"
      className="w-full py-20 lg:py-24"
      style={{ background: "linear-gradient(135deg, rgba(210,252,249,0.6) 0%, rgba(255,255,255,1) 100%)" }}
    >
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col gap-12">

        {/* ── header ── */}
        <div className="flex flex-col gap-5 max-w-3xl">
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            Melyik területen lenne szükséged<br />
            <span className="italic text-[#186d98]">több kapacitásra?</span>
          </h2>
        </div>

        {/* ── filter — container-wide ── */}
        <div className="flex flex-col gap-8 w-full">
          {/* filter bar — full container width, black segmented pill control;
              on mobile wraps into a 2-col grid so every option is visible (no hidden scroll) */}
          <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-between gap-1.5 lg:gap-1 p-1.5 rounded-[24px] lg:rounded-full bg-black">
            {FILTER_TABS.map(({ label, id }) => {
              const isActive = id === "all" ? showAll : active.has(id);
              return (
                <button
                  key={id}
                  onClick={() => toggleFilter(id)}
                  className={`${id === "all" ? "basis-full lg:basis-auto" : "basis-[calc(50%-3px)] lg:basis-auto"} lg:flex-1 px-3 lg:px-4 py-2.5 rounded-full border text-[13px] lg:text-sm font-['Inter',sans-serif] tracking-tight transition-all whitespace-nowrap text-center ${
                    isActive
                      ? "bg-white text-black font-bold border-[#1CEEE0]"
                      : "text-white font-normal border-transparent hover:text-[#1CEEE0] hover:border-[#1CEEE0]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* ── product cards: 3 per row, inner (1376px) text container ── */}
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className={`${isVisible(p.id) ? "flex" : "hidden"} flex-col bg-white rounded-[30px] p-5 h-full`}
            >
              {/* image with category pill */}
              <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden shrink-0">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                <span
                  className="absolute top-3 right-3 px-3.5 py-1.5 rounded-full font-['Inter',sans-serif] font-medium text-xs text-white"
                  style={{ backgroundColor: p.color }}
                >
                  {FILTER_TABS.find((t) => t.id === p.id)?.label}
                </span>
              </div>

              {/* content */}
              <div className="flex flex-col gap-4 flex-1 px-3 pt-6 pb-3">
                <h3 className="font-['Inter',sans-serif] font-bold text-2xl tracking-tight text-center" style={{ color: p.color }}>
                  {p.name}
                </h3>
                <p className="font-['Inter',sans-serif] font-semibold text-base text-black leading-relaxed">
                  {p.tagline}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-sm text-black/55 leading-relaxed">
                  {p.description}
                </p>
                {/* CTA pinned to bottom, same style as hero FEDEZD FEL */}
                <div className="mt-auto pt-4 flex justify-center">
                  {p.link ? (
                    <Link
                      to={p.link}
                      className="inline-flex items-center justify-center px-12 py-3.5 bg-black border border-black text-white rounded-full font-['Inter',sans-serif] font-light text-sm tracking-wide whitespace-nowrap hover:bg-[#1CEEE0]/20 hover:border-[#1CEEE0] hover:text-black hover:font-bold transition-colors"
                    >
                      FEDEZD FEL
                    </Link>
                  ) : (
                    <span className="inline-flex items-center justify-center px-12 py-3.5 bg-black/5 border border-black/15 text-black/40 rounded-full font-['Inter',sans-serif] font-medium text-sm tracking-wide whitespace-nowrap cursor-default select-none">
                      HAMAROSAN
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="rolunk" className="w-full bg-white py-20 lg:py-28">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:max-w-xs xl:max-w-sm shrink-0 flex flex-col gap-4">
          <p className="font-['Inter',sans-serif] font-medium text-lg text-[#186d98] tracking-wide uppercase">
            Rólunk
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            A team az{" "}
            <span style={{ color: "#1ceee0" }}>eaisy</span>
            {" "}mögött
          </h2>
        </div>

        <div className="flex-1 font-['Inter',sans-serif] text-base text-black/55 leading-relaxed flex flex-col gap-4">
          <p>
            A Think AI-t 2023-ban alapítottuk Budapesten azzal a céllal, hogy olyan mesterségesintelligencia-alapú megoldásokat fejlesszünk, amelyek nemcsak látványosak, hanem valódi üzleti helyzetekben is megbízhatóan használhatók.
          </p>
          <p>
            A céget hárman indítottuk, három különböző szakmai háttérrel.{" "}
            <strong className="text-black font-bold">Ágó Zoltán</strong> többéves vállalkozói és fejlesztőcég-vezetői tapasztalatot,{" "}
            <strong className="text-black font-bold">Benke Viktor</strong> operatív vezetői szemléletet,{" "}
            <strong className="text-black font-bold">Lederer Balázs</strong> pedig több mint tíz év digitális és reklámügynökségi projektvezetési tapasztalatát hozta a közös munkába. Más területekről érkeztünk, de ugyanazt kerestük: hogyan lehet az AI-ból valóban működő, mérhető üzleti eredményt létrehozni.
          </p>
          <p>
            Ma tízfős, folyamatosan fejlődő csapatként dolgozunk. Fejlesztők, projektmenedzserek és UX-szakemberek építik együtt a megoldásainkat, mert hisszük, hogy egy jó rendszer nem pusztán technológiai kérdés. A használható szoftverhez meg kell érteni az iparágat, a munkafolyamatokat, a felhasználókat és azt az üzleti problémát is, amelyet meg akarunk oldani.
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
      <HeroValueCards />
      <WhatIsEaisy />
      <ModulesSection />
      <AboutSection />
    </>
  );
}
