import { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  Search,
  BookOpen,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Layers,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { KNOWLEDGE_BASES, searchAllKnowledgeBases } from "../content/kb";

const UPCOMING_PRODUCTS = [
  { name: "eaisyCRM", desc: "Értékesítési csővezeték és ügyfélkapcsolat-kezelés", accent: "#FFB224" },
  { name: "eaisyDocs", desc: "AI-alapú szerződés- és dokumentumkezelés", accent: "#623CEA" },
  { name: "eaisyHR", desc: "Szabadságolás, jelenléti ív és csapatmenedzsment", accent: "#FF5C5C" },
  { name: "eaisyWork", desc: "Projekt-, feladat- és munkaidő-nyilvántartás", accent: "#00C4B4" },
];

export function KnowledgeBaseHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductFilter, setSelectedProductFilter] = useState<string>("all");

  const searchResults = useMemo(() => {
    const raw = searchAllKnowledgeBases(searchQuery);
    if (selectedProductFilter === "all") return raw;
    return raw.filter((r) => r.product.slug === selectedProductFilter);
  }, [searchQuery, selectedProductFilter]);

  const totalArticlesCount = useMemo(
    () => KNOWLEDGE_BASES.reduce((sum, kb) => sum + kb.articles.length, 0),
    []
  );

  const totalScreenshotsCount = useMemo(
    () =>
      KNOWLEDGE_BASES.reduce(
        (sum, kb) =>
          sum + kb.articles.reduce((aSum, art) => aSum + (art.screenshots?.length || 0), 0),
        0
      ),
    []
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-['Inter',sans-serif] text-[#111827]">
      <Seo
        title="Tudásbázis & Dokumentáció — eaisy Szoftvercsalád"
        description="Részletes, képernyőképekkel illusztrált magyar nyelvű útmutatók az eaisyDesk, eaisyBill, eaisyBooks és eaisyBoost szoftverek minden funkciójához."
        path="/tudasbazis"
      />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-[#082432] pt-32 pb-20 lg:pt-36 lg:pb-24 text-white">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[960px] h-[420px] rounded-full opacity-25 blur-[130px]"
          style={{
            background: "linear-gradient(90deg, #1CEEE0 0%, #1BB3F5 50%, #16F27F 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-[#1CEEE0] mb-6">
            <BookOpen className="w-4 h-4" />
            <span>eaisy Tudásbázis & Felhasználói Kézikönyv</span>
          </div>

          <h1 className="font-['Montserrat',sans-serif] text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold tracking-[-0.03em] leading-[1.12] max-w-[880px] mx-auto">
            Minden funkció, lépésről lépésre dokumentálva.
          </h1>
          <p className="mt-5 text-[16px] sm:text-[18px] text-white/75 max-w-[700px] mx-auto leading-[1.6]">
            Részletes útmutatók az eaisy ökoszisztéma szoftvereihez — Adminisztrátoroknak és Munkatársaknak egyaránt.
          </p>

          {/* Search Bar */}
          <div className="mt-9 max-w-[720px] mx-auto">
            <div className="relative flex items-center rounded-2xl bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-[#1CEEE0]">
              <Search className="w-5 h-5 text-gray-400 ml-3.5 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Keress funkcióra, gombra vagy munkafolyamatra (pl. időpontfoglalás, Kanban, AI piszkozat, NAV, Telnyx)..."
                className="w-full bg-transparent py-2.5 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mr-2 rounded-lg px-2.5 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100"
                >
                  Törlés
                </button>
              )}
            </div>

            {/* Quick topic pills */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[13px]">
              <span className="text-white/55 mr-1">Népszerű témák:</span>
              {[
                { label: "AI válaszpiszkozatok", q: "piszkozat" },
                { label: "Naptár & No-show", q: "No show" },
                { label: "Érdeklődőkezelés (Kanban)", q: "Kanban" },
                { label: "Duplikált ügyfelek összevonása", q: "Összevonás" },
                { label: "Foglalási szabályok", q: "Szolgáltatáskatalógus" },
                { label: "Telnyx telefónia", q: "Telnyx" },
              ].map((pill) => (
                <button
                  key={pill.label}
                  type="button"
                  onClick={() => setSearchQuery(pill.q)}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/85 hover:bg-white/15 hover:border-[#1CEEE0]/50 transition-colors"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-[13px] text-white/80">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1CEEE0]" />
              <span>
                <strong className="text-white">{KNOWLEDGE_BASES.length} élő szoftver</strong> tudásbázisa
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#16F27F]" />
              <span>
                <strong className="text-white">{totalArticlesCount} részletes fejezet</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1BB3F5]" />
              <span>
                <strong className="text-white">{totalScreenshotsCount} anonimizált</strong> nagyfelbontású képernyőkép
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE SEARCH RESULTS (IF QUERY ACTIVE) ── */}
      {searchQuery.trim() !== "" && (
        <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
              <div>
                <h2 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-gray-900">
                  Keresési találatok: „{searchQuery}” ({searchResults.length})
                </h2>
                <p className="text-[13px] text-gray-500 mt-0.5">
                  Kattints bármelyik cikkre a teljes, képernyőképes leírás megnyitásához.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedProductFilter("all")}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    selectedProductFilter === "all"
                      ? "bg-[#082432] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Összes ({searchAllKnowledgeBases(searchQuery).length})
                </button>
                {KNOWLEDGE_BASES.map((kb) => (
                  <button
                    key={kb.slug}
                    type="button"
                    onClick={() => setSelectedProductFilter(kb.slug)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                      selectedProductFilter === kb.slug
                        ? "bg-[#082432] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {kb.name}
                  </button>
                ))}
              </div>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-12 text-center">
                <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-[15px] font-medium text-gray-700">
                  Nem találtunk pontos egyezést erre a kifejezésre.
                </p>
                <p className="text-[13px] text-gray-500 mt-1">
                  Próbálj rövidebb kulcsszót (pl. „naptár”, „szabály”, „kampány”, „számla”) vagy böngéssz a lenti szoftverkártyák között!
                </p>
              </div>
            ) : (
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map(({ product, article, matchedIn }) => (
                  <Link
                    key={`${product.slug}-${article.slug}`}
                    to={`/tudasbazis/${product.slug}/${article.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-gray-200 p-5 hover:border-gray-900 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                          style={{
                            backgroundColor: product.theme.softBg,
                            color: product.theme.secondary,
                          }}
                        >
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: product.theme.accent }}
                          />
                          {product.name}
                        </span>
                        <span className="text-[11px] font-medium text-gray-400">
                          Találat helye: {matchedIn}
                        </span>
                      </div>
                      <h3 className="font-['Montserrat',sans-serif] text-[16px] font-bold text-gray-900 group-hover:text-[#186D98] transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] text-gray-600 line-clamp-2 leading-relaxed">
                        {article.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[12px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {article.readingTimeMinutes} perc olvasás
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-gray-900 group-hover:translate-x-0.5 transition-transform">
                        Megnyitás <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── PRODUCT KNOWLEDGE BASE CARDS ── */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#186D98]">
              Szoftverenkénti kézikönyvek
            </span>
            <h2 className="mt-1 font-['Montserrat',sans-serif] text-[28px] sm:text-[34px] font-extrabold tracking-[-0.02em] text-gray-900">
              Válaszd ki a szoftvert
            </h2>
          </div>
          <p className="text-[14px] text-gray-600 max-w-[440px]">
            Minden szoftver saját kategóriarendszerrel, szerepkör-szűrővel (Admin / Munkatárs) és nagyítható képernyőképekkel rendelkezik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {KNOWLEDGE_BASES.map((kb) => {
            const screenshotCount = kb.articles.reduce(
              (acc, a) => acc + (a.screenshots?.length || 0),
              0
            );
            return (
              <div
                key={kb.slug}
                className="flex flex-col justify-between rounded-[24px] bg-white border border-gray-200 p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)] transition-all"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center font-['Montserrat',sans-serif] font-extrabold text-[17px]"
                        style={{
                          backgroundColor: kb.theme.dark,
                          color: kb.theme.accent,
                        }}
                      >
                        {kb.name.replace("eaisy", "")[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-['Montserrat',sans-serif] text-[22px] font-extrabold text-gray-900">
                            {kb.name}
                          </h3>
                          <span
                            className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                            style={{
                              backgroundColor: kb.theme.softBg,
                              color: kb.theme.secondary,
                            }}
                          >
                            v{kb.version}
                          </span>
                        </div>
                        <p className="text-[12px] text-gray-500">
                          Frissítve: {kb.updatedAt} · {kb.articles.length} fejezet
                          {screenshotCount > 0 ? ` · ${screenshotCount} képernyőkép` : ""}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/tudasbazis/${kb.slug}`}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold transition-transform hover:scale-[1.02]"
                      style={{
                        backgroundColor: kb.theme.accent,
                        color: kb.theme.dark,
                      }}
                    >
                      Kézikönyv <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-[14.5px] text-gray-600 leading-[1.6] mb-6">
                    {kb.description}
                  </p>

                  {/* Categories & Featured Articles */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-400">
                      Fejezetek a tudásbázisban ({kb.articles.length})
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {kb.articles.slice(0, 6).map((article) => (
                        <Link
                          key={article.slug}
                          to={`/tudasbazis/${kb.slug}/${article.slug}`}
                          className="group flex items-center justify-between gap-2 rounded-xl border border-gray-100 bg-gray-50/70 px-3.5 py-2.5 text-[13px] font-medium text-gray-800 hover:bg-white hover:border-gray-300 hover:shadow-xs transition-all"
                        >
                          <span className="truncate">{article.title}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                    {kb.articles.length > 6 && (
                      <div className="pt-1">
                        <Link
                          to={`/tudasbazis/${kb.slug}`}
                          className="inline-flex items-center gap-1 text-[13px] font-semibold hover:underline"
                          style={{ color: kb.theme.secondary }}
                        >
                          + további {kb.articles.length - 6} fejezet megtekintése ({kb.name})
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer meta */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-[12px] text-gray-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Szerepkör-bontás: Admin & Munkatárs</span>
                  </div>
                  <Link
                    to={kb.productRoute}
                    className="font-medium text-gray-600 hover:text-gray-900 underline underline-offset-4"
                  >
                    Termékoldal megnyitása →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── UPCOMING PRODUCTS IN ECOSYSTEM ── */}
        <div className="mt-14 rounded-[24px] border border-gray-200 bg-white p-7 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#186D98]" /> Egységes Tudásbázis Architektúra
              </span>
              <h3 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-gray-900 mt-1">
                Érkező eaisy szoftverek dokumentációja
              </h3>
            </div>
            <span className="text-[13px] text-gray-500">
              A tudásbázis-motor automatikusan bővül az új modulok megjelenésekor.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UPCOMING_PRODUCTS.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/60 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-['Montserrat',sans-serif] text-[16px] font-extrabold text-gray-900">
                      {item.name}
                    </span>
                    <span className="rounded-full bg-gray-200/80 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
                      Hamarosan
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12.5px] text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
