import { useState, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router";
import {
  Search,
  ChevronRight,
  Clock,
  Shield,
  Users,
  ZoomIn,
  X,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Lightbulb,
  Info,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Layers,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { getKnowledgeBaseBySlug, KNOWLEDGE_BASES } from "../content/kb";
import type { KbRole, KbScreenshot } from "../content/kb/types";

/**
 * Helper to render simple inline markdown (**bold** and `code`) cleanly
 */
function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-gray-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-[12.5px] font-medium text-[#082432] border border-gray-200/80"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function KnowledgeBaseProduct() {
  const { productSlug, articleSlug } = useParams<{
    productSlug: string;
    articleSlug?: string;
  }>();

  const product = useMemo(
    () => (productSlug ? getKnowledgeBaseBySlug(productSlug) : undefined),
    [productSlug]
  );

  const [sidebarQuery, setSidebarQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | KbRole>("all");
  const [lightboxImage, setLightboxImage] = useState<KbScreenshot | null>(null);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  if (!product) {
    return <Navigate to="/tudasbazis" replace />;
  }

  const filteredArticles = useMemo(() => {
    const q = sidebarQuery.trim().toLowerCase();
    return product.articles.filter((art) => {
      if (roleFilter !== "all" && !art.roles.includes(roleFilter)) {
        return false;
      }
      if (!q) return true;
      return (
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.sections.some(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q)
        )
      );
    });
  }, [product, sidebarQuery, roleFilter]);

  const activeArticle = useMemo(() => {
    if (!articleSlug) return null;
    return product.articles.find((a) => a.slug === articleSlug) || null;
  }, [product, articleSlug]);

  if (articleSlug && !activeArticle) {
    return <Navigate to={`/tudasbazis/${product.slug}`} replace />;
  }

  const activeIndex = activeArticle
    ? product.articles.findIndex((a) => a.slug === activeArticle.slug)
    : -1;
  const prevArticle =
    activeIndex > 0 ? product.articles[activeIndex - 1] : null;
  const nextArticle =
    activeIndex >= 0 && activeIndex < product.articles.length - 1
      ? product.articles[activeIndex + 1]
      : null;

  const activeCategory = activeArticle
    ? product.categories.find((c) => c.id === activeArticle.categoryId)
    : null;

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-['Inter',sans-serif] text-[#111827]">
      <Seo
        title={
          activeArticle
            ? `${activeArticle.title} — ${product.name} Tudásbázis`
            : `${product.name} Tudásbázis & Kézikönyv — eaisy`
        }
        description={
          activeArticle ? activeArticle.subtitle : product.description
        }
        path={
          activeArticle
            ? `/tudasbazis/${product.slug}/${activeArticle.slug}`
            : `/tudasbazis/${product.slug}`
        }
      />

      {/* ── PRODUCT TOP BANNER ── */}
      <section
        className="pt-28 pb-10 text-white relative overflow-hidden"
        style={{ backgroundColor: product.theme.dark }}
      >
        <div
          className="pointer-events-none absolute -top-32 right-10 w-[520px] h-[260px] rounded-full opacity-20 blur-[110px]"
          style={{ backgroundColor: product.theme.accent }}
        />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/65 mb-4"
          >
            <Link to="/tudasbazis" className="hover:text-white transition-colors">
              Tudásbázis
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link
              to={`/tudasbazis/${product.slug}`}
              className={`hover:text-white transition-colors ${
                !activeArticle ? "text-white font-semibold" : ""
              }`}
            >
              {product.name}
            </Link>
            {activeCategory && (
              <>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                <span>{activeCategory.title}</span>
              </>
            )}
            {activeArticle && (
              <>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                <span className="text-white font-semibold truncate max-w-[320px]">
                  {activeArticle.title}
                </span>
              </>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] font-extrabold tracking-[-0.02em]">
                  {product.name} Tudásbázis
                </h1>
                <span
                  className="rounded-full px-3 py-1 text-[12px] font-bold"
                  style={{
                    backgroundColor: product.theme.accent,
                    color: product.theme.dark,
                  }}
                >
                  v{product.version} · {product.articles.length} fejezet
                </span>
              </div>
              <p className="mt-2 text-[15px] text-white/75 max-w-[720px]">
                {product.tagline}
              </p>
            </div>

            {/* Product switcher + product page link */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1 rounded-full bg-white/10 p-1">
                {KNOWLEDGE_BASES.map((kb) => (
                  <Link
                    key={kb.slug}
                    to={`/tudasbazis/${kb.slug}`}
                    className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all ${
                      kb.slug === product.slug
                        ? "bg-white text-gray-900 shadow-xs"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {kb.name}
                  </Link>
                ))}
              </div>
              <Link
                to={product.productRoute}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-[12px] font-semibold text-white hover:bg-white/15 transition-colors"
              >
                <span>Termékoldal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR: SEARCH, ROLE FILTER, CATEGORIES & ARTICLES */}
          <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 space-y-5">
            <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-xs">
              {/* In-product search */}
              <div className="relative flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 focus-within:bg-white focus-within:border-gray-900 transition-colors">
                <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                <input
                  type="text"
                  value={sidebarQuery}
                  onChange={(e) => setSidebarQuery(e.target.value)}
                  placeholder={`Keresés (${product.name})...`}
                  className="w-full bg-transparent text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
                {sidebarQuery && (
                  <button
                    type="button"
                    onClick={() => setSidebarQuery("")}
                    className="text-[11px] text-gray-400 hover:text-gray-700"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Role Filter */}
              <div className="mt-3">
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-gray-400 mb-1.5">
                  Szűrés szerepkörre
                </div>
                <div className="grid grid-cols-3 gap-1 rounded-xl bg-gray-100 p-1 text-[11.5px] font-semibold">
                  <button
                    type="button"
                    onClick={() => setRoleFilter("all")}
                    className={`rounded-lg py-1.5 transition-colors ${
                      roleFilter === "all"
                        ? "bg-white text-gray-900 shadow-2xs"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Mind ({product.articles.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setRoleFilter("admin")}
                    className={`rounded-lg py-1.5 transition-colors ${
                      roleFilter === "admin"
                        ? "bg-white text-gray-900 shadow-2xs"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => setRoleFilter("member")}
                    className={`rounded-lg py-1.5 transition-colors ${
                      roleFilter === "member"
                        ? "bg-white text-gray-900 shadow-2xs"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Munkatárs
                  </button>
                </div>
              </div>

              {/* Category Tree */}
              <div className="mt-5 space-y-5">
                {product.categories.map((cat) => {
                  const catArticles = filteredArticles.filter(
                    (a) => a.categoryId === cat.id
                  );
                  if (catArticles.length === 0) return null;
                  return (
                    <div key={cat.id}>
                      <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-gray-400 px-2 mb-1.5">
                        {cat.title}
                      </div>
                      <div className="space-y-1">
                        {catArticles.map((art) => {
                          const isCurrent = activeArticle?.slug === art.slug;
                          return (
                            <Link
                              key={art.slug}
                              to={`/tudasbazis/${product.slug}/${art.slug}`}
                              className={`block rounded-xl px-3 py-2 text-[13px] leading-snug transition-all ${
                                isCurrent
                                  ? "font-bold shadow-2xs"
                                  : "font-medium text-gray-700 hover:bg-gray-100/80"
                              }`}
                              style={
                                isCurrent
                                  ? {
                                      backgroundColor: product.theme.softBg,
                                      color: product.theme.dark,
                                      borderLeft: `3px solid ${product.theme.secondary}`,
                                    }
                                  : undefined
                              }
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span>{art.title}</span>
                                {art.roles.length === 1 &&
                                  art.roles[0] === "admin" && (
                                    <span className="shrink-0 rounded bg-gray-200/80 px-1.5 py-0.5 text-[9.5px] font-bold uppercase text-gray-600">
                                      Admin
                                    </span>
                                  )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN AREA: PRODUCT OVERVIEW OR ARTICLE VIEW */}
          <main className="lg:col-span-8 xl:col-span-9">
            {!activeArticle ? (
              /* ── PRODUCT OVERVIEW MODE ── */
              <div className="space-y-8">
                {/* Roles overview card */}
                <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-xs">
                  <h2 className="font-['Montserrat',sans-serif] text-[22px] font-extrabold text-gray-900">
                    Üdvözlünk az {product.name} dokumentációjában!
                  </h2>
                  <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.roles.map((r) => (
                      <div
                        key={r.role}
                        className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4"
                      >
                        <div className="flex items-center gap-2 font-['Montserrat',sans-serif] text-[14px] font-bold text-gray-900">
                          {r.role === "admin" ? (
                            <Shield
                              className="w-4 h-4"
                              style={{ color: product.theme.secondary }}
                            />
                          ) : (
                            <Users
                              className="w-4 h-4"
                              style={{ color: product.theme.secondary }}
                            />
                          )}
                          <span>{r.label}</span>
                        </div>
                        <p className="mt-1.5 text-[13px] text-gray-600 leading-relaxed">
                          {r.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories with full article cards */}
                {product.categories.map((cat) => {
                  const catArticles = filteredArticles.filter(
                    (a) => a.categoryId === cat.id
                  );
                  if (catArticles.length === 0) return null;
                  return (
                    <div key={cat.id} className="space-y-4">
                      <div>
                        <h3 className="font-['Montserrat',sans-serif] text-[20px] font-extrabold text-gray-900">
                          {cat.title}
                        </h3>
                        <p className="text-[13.5px] text-gray-500">
                          {cat.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {catArticles.map((art) => (
                          <Link
                            key={art.slug}
                            to={`/tudasbazis/${product.slug}/${art.slug}`}
                            className="group flex flex-col justify-between rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-900 hover:shadow-md transition-all"
                          >
                            <div>
                              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                                {art.roles.includes("admin") && (
                                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                                    Adminisztrátor
                                  </span>
                                )}
                                {art.roles.includes("member") && (
                                  <span
                                    className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                                    style={{
                                      backgroundColor: product.theme.softBg,
                                      color: product.theme.secondary,
                                    }}
                                  >
                                    Munkatárs
                                  </span>
                                )}
                                {art.screenshots && art.screenshots.length > 0 && (
                                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                                    {art.screenshots.length} képernyőkép
                                  </span>
                                )}
                              </div>

                              <h4 className="font-['Montserrat',sans-serif] text-[17px] font-bold text-gray-900 group-hover:text-[#186D98] transition-colors">
                                {art.title}
                              </h4>
                              <p className="mt-2 text-[13.5px] text-gray-600 leading-relaxed line-clamp-3">
                                {art.subtitle}
                              </p>
                            </div>

                            <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[12px] text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />{" "}
                                {art.readingTimeMinutes} perc olvasás
                              </span>
                              <span className="inline-flex items-center gap-1 font-bold text-gray-900 group-hover:translate-x-0.5 transition-transform">
                                Fejezet megnyitása{" "}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* ── DETAILED ARTICLE READER MODE ── */
              <article className="space-y-8">
                {/* Article Header Card */}
                <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-9 shadow-xs">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {activeCategory && (
                      <span
                        className="rounded-full px-3 py-1 text-[11.5px] font-bold"
                        style={{
                          backgroundColor: product.theme.softBg,
                          color: product.theme.secondary,
                        }}
                      >
                        {activeCategory.title}
                      </span>
                    )}
                    {activeArticle.roles.includes("admin") && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11.5px] font-semibold text-slate-700">
                        <Shield className="w-3 h-3" /> Adminisztrátor
                      </span>
                    )}
                    {activeArticle.roles.includes("member") && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11.5px] font-semibold text-emerald-700">
                        <Users className="w-3 h-3" /> Munkatárs (Recepciós)
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-[12px] text-gray-400 ml-auto">
                      <Clock className="w-3.5 h-3.5" />{" "}
                      {activeArticle.readingTimeMinutes} perc olvasás
                    </span>
                  </div>

                  <h2 className="font-['Montserrat',sans-serif] text-[26px] sm:text-[34px] font-extrabold tracking-[-0.02em] text-gray-900 leading-[1.18]">
                    {activeArticle.title}
                  </h2>
                  <p className="mt-3 text-[16px] text-gray-600 leading-[1.6]">
                    {activeArticle.subtitle}
                  </p>

                  {/* Access & Summary Box */}
                  <div
                    className="mt-6 rounded-2xl p-5 border"
                    style={{
                      backgroundColor: product.theme.softBg,
                      borderColor: `${product.theme.accent}55`,
                    }}
                  >
                    <div className="text-[12px] font-bold uppercase tracking-[0.06em] text-gray-700 mb-1">
                      Elérés a rendszerben: {activeArticle.accessSummary}
                    </div>
                    <p className="text-[14px] text-gray-800 leading-relaxed">
                      {activeArticle.summary}
                    </p>
                  </div>

                  {/* Quick Jump Table of Contents */}
                  {activeArticle.sections.length > 1 && (
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-400 mb-2.5">
                        Tartalomjegyzék ebben a fejezetben
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeArticle.sections.map((sec) => (
                          <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-[12.5px] font-medium text-gray-700 hover:bg-white hover:border-gray-900 transition-colors"
                          >
                            <span>{sec.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Screenshots Gallery */}
                {activeArticle.screenshots &&
                  activeArticle.screenshots.length > 0 && (
                    <div className="space-y-5">
                      {activeArticle.screenshots.map((shot, idx) => (
                        <figure
                          key={idx}
                          className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-xs"
                        >
                          <div
                            className="relative group cursor-zoom-in bg-gray-900/5 overflow-hidden"
                            onClick={() => setLightboxImage(shot)}
                          >
                            <img
                              src={shot.src}
                              alt={shot.alt}
                              loading={idx === 0 ? "eager" : "lazy"}
                              className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.01]"
                            />
                            <button
                              type="button"
                              onClick={() => setLightboxImage(shot)}
                              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-gray-900/80 backdrop-blur-xs px-3.5 py-1.5 text-[12px] font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                              <span>Kattints a teljes képernyős nagyításhoz</span>
                            </button>
                          </div>
                          <figcaption className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 text-[13px] text-gray-600 flex items-center justify-between gap-4">
                            <span>{shot.caption}</span>
                            <span className="shrink-0 text-[11px] font-semibold text-gray-400">
                              Anonimizált demó nézet
                            </span>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}

                {/* Permission Matrix Table (if present) */}
                {activeArticle.PermissionMatrix &&
                  activeArticle.PermissionMatrix.length > 0 && (
                    <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-xs">
                      <h3 className="font-['Montserrat',sans-serif] text-[19px] font-extrabold text-gray-900 mb-2">
                        Jogosultsági mátrix (Adminisztrátor vs. Munkatárs)
                      </h3>
                      <p className="text-[13.5px] text-gray-500 mb-5">
                        Az alábbi táblázat összefoglalja, hogy az egyes funkciók mely szerepkörrel érhetők el.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-[13.5px]">
                          <thead>
                            <tr className="border-b border-gray-200 text-[11.5px] font-bold uppercase tracking-wider text-gray-400">
                              <th className="py-3 pr-4">Funkció / Modul</th>
                              <th className="py-3 px-4 text-center">Admin</th>
                              <th className="py-3 px-4 text-center">Munkatárs</th>
                              <th className="py-3 pl-4">Megjegyzés</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {activeArticle.PermissionMatrix.map((row, idx) => (
                              <tr key={idx} className="hover:bg-gray-50/70">
                                <td className="py-3 pr-4 font-semibold text-gray-900">
                                  {row.feature}
                                </td>
                                <td className="py-3 px-4 text-center">
                                  {row.admin ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                                  )}
                                </td>
                                <td className="py-3 px-4 text-center">
                                  {row.member ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                                  )}
                                </td>
                                <td className="py-3 pl-4 text-gray-600">
                                  {row.note || "—"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                {/* Detailed Sections */}
                {activeArticle.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6"
                  >
                    <div>
                      <h3 className="font-['Montserrat',sans-serif] text-[21px] font-extrabold text-gray-900">
                        {section.title}
                      </h3>
                      <p className="mt-2.5 text-[14.5px] text-gray-600 leading-[1.65]">
                        <FormattedText text={section.description} />
                      </p>
                    </div>

                    {/* Step-by-step workflow */}
                    {section.steps && section.steps.length > 0 && (
                      <div className="space-y-3.5">
                        <div className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-gray-400">
                          Munkafolyamat lépésről lépésre
                        </div>
                        <div className="space-y-3">
                          {section.steps.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5"
                            >
                              <div
                                className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center font-['Montserrat',sans-serif] text-[13px] font-extrabold"
                                style={{
                                  backgroundColor: product.theme.dark,
                                  color: product.theme.accent,
                                }}
                              >
                                {sIdx + 1}
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-['Montserrat',sans-serif] text-[15px] font-bold text-gray-900">
                                  {step.title}
                                </h4>
                                <p className="text-[13.5px] text-gray-600 leading-[1.65] whitespace-pre-line">
                                  <FormattedText text={step.description} />
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* UI Elements Reference Table */}
                    {section.uiElements && section.uiElements.length > 0 && (
                      <div className="space-y-2.5">
                        <div className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-gray-400">
                          Felületi elemek, mezők és gombok szótára
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200">
                          <table className="w-full text-left border-collapse text-[13.5px]">
                            <thead>
                              <tr className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                                <th className="py-2.5 px-4">Mező / Gomb felirata</th>
                                <th className="py-2.5 px-4">Típus</th>
                                <th className="py-2.5 px-4">Működés és leírás</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {section.uiElements.map((ui, uIdx) => (
                                <tr key={uIdx} className="hover:bg-gray-50/60">
                                  <td className="py-2.5 px-4 font-semibold text-gray-900 whitespace-nowrap">
                                    {ui.label}
                                  </td>
                                  <td className="py-2.5 px-4 whitespace-nowrap">
                                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11.5px] font-medium text-gray-600">
                                      {ui.type}
                                    </span>
                                  </td>
                                  <td className="py-2.5 px-4 text-gray-600 leading-relaxed">
                                    <FormattedText text={ui.description} />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Status Badges Dictionary */}
                    {section.statusBadges && section.statusBadges.length > 0 && (
                      <div className="space-y-2.5">
                        <div className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-gray-400">
                          Státuszjelvények és színkódok jelentése
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {section.statusBadges.map((badge, bIdx) => (
                            <div
                              key={bIdx}
                              className="rounded-2xl border border-gray-200 p-3.5 flex flex-col justify-between gap-1.5"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-bold text-[13.5px] text-gray-900">
                                  {badge.label}
                                </span>
                                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-600">
                                  {badge.color}
                                </span>
                              </div>
                              <p className="text-[12.5px] text-gray-600 leading-relaxed">
                                {badge.meaning}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Callout Tips */}
                    {section.tips && section.tips.length > 0 && (
                      <div className="space-y-3">
                        {section.tips.map((tip, tIdx) => {
                          const isWarn = tip.type === "warning";
                          const isTip = tip.type === "tip";
                          return (
                            <div
                              key={tIdx}
                              className={`flex gap-3.5 rounded-2xl border p-4 ${
                                isWarn
                                  ? "border-amber-200 bg-amber-50/70 text-amber-950"
                                  : isTip
                                  ? "border-emerald-200 bg-emerald-50/60 text-emerald-950"
                                  : "border-sky-200 bg-sky-50/60 text-sky-950"
                              }`}
                            >
                              {isWarn ? (
                                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                              ) : isTip ? (
                                <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                              ) : (
                                <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                              )}
                              <div className="text-[13.5px] leading-relaxed">
                                <div className="font-bold mb-0.5">{tip.title}</div>
                                <p className="opacity-90">{tip.text}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                ))}

                {/* Article FAQs */}
                {activeArticle.faqs && activeArticle.faqs.length > 0 && (
                  <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <HelpCircle
                        className="w-5 h-5"
                        style={{ color: product.theme.secondary }}
                      />
                      <h3 className="font-['Montserrat',sans-serif] text-[20px] font-extrabold text-gray-900">
                        Gyakori kérdések ehhez a modulhoz
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {activeArticle.faqs.map((faq, fIdx) => {
                        const isOpen = openFaqIdx === fIdx;
                        return (
                          <div key={fIdx} className="py-3.5">
                            <button
                              type="button"
                              onClick={() =>
                                setOpenFaqIdx(isOpen ? null : fIdx)
                              }
                              className="w-full flex items-center justify-between gap-4 text-left font-['Montserrat',sans-serif] text-[15px] font-bold text-gray-900 hover:text-[#186D98] transition-colors"
                            >
                              <span>{faq.question}</span>
                              <ChevronRight
                                className={`w-4 h-4 shrink-0 text-gray-400 transition-transform ${
                                  isOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <p className="mt-2.5 text-[14px] text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Prev / Next Navigation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {prevArticle ? (
                    <Link
                      to={`/tudasbazis/${product.slug}/${prevArticle.slug}`}
                      className="group flex flex-col justify-between rounded-2xl bg-white border border-gray-200 p-5 hover:border-gray-900 transition-all"
                    >
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-gray-400 group-hover:text-gray-700">
                        <ArrowLeft className="w-3.5 h-3.5" /> Előző fejezet
                      </span>
                      <span className="mt-1.5 font-['Montserrat',sans-serif] text-[15px] font-bold text-gray-900">
                        {prevArticle.title}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextArticle ? (
                    <Link
                      to={`/tudasbazis/${product.slug}/${nextArticle.slug}`}
                      className="group flex flex-col justify-between items-end text-right rounded-2xl bg-white border border-gray-200 p-5 hover:border-gray-900 transition-all"
                    >
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-gray-400 group-hover:text-gray-700">
                        Következő fejezet <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="mt-1.5 font-['Montserrat',sans-serif] text-[15px] font-bold text-gray-900">
                        {nextArticle.title}
                      </span>
                    </Link>
                  ) : (
                    <Link
                      to={`/tudasbazis/${product.slug}`}
                      className="group flex flex-col justify-between items-end text-right rounded-2xl bg-white border border-gray-200 p-5 hover:border-gray-900 transition-all"
                    >
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-gray-400">
                        Vissza az áttekintéshez <BookOpen className="w-3.5 h-3.5" />
                      </span>
                      <span className="mt-1.5 font-['Montserrat',sans-serif] text-[15px] font-bold text-gray-900">
                        {product.name} összes fejezete
                      </span>
                    </Link>
                  )}
                </div>
              </article>
            )}
          </main>
        </div>
      </div>

      {/* ── FULLSCREEN SCREENSHOT LIGHTBOX ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-[1360px] w-full max-h-[92vh] flex flex-col rounded-2xl bg-gray-950 border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 bg-gray-900 border-b border-white/10 text-white">
              <span className="text-[13px] font-medium truncate">
                {lightboxImage.caption}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="rounded-lg p-1.5 text-white/70 hover:text-white hover:bg-white/10"
                aria-label="Bezárás"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto p-2 sm:p-4 bg-gray-950 flex items-center justify-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[80vh] w-auto h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
