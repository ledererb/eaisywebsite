import { useState, useRef, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Plus, X, Check, Home, FileText, Headphones, Megaphone, FolderOpen, ArrowUpRight, Users, Briefcase, LayoutGrid, BookOpen } from "lucide-react";
import svgPaths from "@/imports/Mobile/svg-5uu58tfhk2";

export function EaisyLogo({ dark = false }: { dark?: boolean }) {
  const fill = dark ? "white" : "black";
  return (
    <svg fill="none" viewBox="0 0 80 17" className="h-full w-auto">
      <g>
        <path d={svgPaths.p2dda4500} fill={fill} />
        <path d={svgPaths.p9f13400} fill={fill} />
        <path d={svgPaths.p25a06300} fill={fill} />
        <path d={svgPaths.p23b2ba80} fill={fill} />
        <path d={svgPaths.p32667980} fill={fill} />
        <path d={svgPaths.p3cc48b00} fill={fill} />
        <path d={svgPaths.p3128d200} fill={fill} />
        <path d={svgPaths.p2af52f00} fill={fill} />
        <path d={svgPaths.p1fc6e780} fill={fill} />
        <path d={svgPaths.pb6f800} fill="#1CEEE0" />
      </g>
    </svg>
  );
}

// ── shared event to open the demo modal from anywhere ────────────────────────
export function openDemoModal() {
  window.dispatchEvent(new CustomEvent("open-demo-modal"));
}

const products = [
  { name: "eaisyBill", path: "/eaisy-bill", color: "#05512a", icon: FileText, desc: "AI-támogatott pénzügyi és kontrolling platform" },
  { name: "eaisyBooks", path: "/eaisy-books", color: "#085D6F", icon: BookOpen, desc: "AI platform könyvelőirodáknak" },
  { name: "eaisyDesk", path: "/eaisy-desk", color: "#186d98", icon: Headphones, desc: "Omnichannel AI ügyfélkommunikáció" },
  { name: "eaisyBoost", path: "/eaisy-boost", color: "#701ab7", icon: Megaphone, desc: "Social media és hirdetéskezelés AI-val" },
];

const DEMO_PRODUCTS = ["Mind", "eaisyBill", "eaisyBooks", "eaisyDesk", "eaisyBoost", "eaisyDocs", "eaisyCRM", "eaisyHR"];

// demo modal product metadata — icon + short description, like the nav dropdown
const DEMO_PRODUCT_META: Record<string, { icon: typeof FileText; color: string; desc: string }> = {
  Mind: { icon: LayoutGrid, color: "#000000", desc: "Az összes eaisy megoldás érdekel" },
  eaisyBill: { icon: FileText, color: "#05512a", desc: "AI-támogatott pénzügyi és kontrolling platform" },
  eaisyDesk: { icon: Headphones, color: "#186d98", desc: "Omnichannel AI ügyfélkommunikáció" },
  eaisyBoost: { icon: Megaphone, color: "#701ab7", desc: "Social media és hirdetéskezelés AI-val" },
  eaisyBooks: { icon: BookOpen, color: "#085D6F", desc: "AI platform könyvelőirodáknak" },
  eaisyDocs: { icon: FolderOpen, color: "#150f87", desc: "Automatikus iktatás és dokumentumkezelés" },
  eaisyCRM: { icon: Users, color: "#b70071", desc: "Ügyfél- és értékesítéskezelés egy helyen" },
  eaisyHR: { icon: Briefcase, color: "#c74c71", desc: "AI-támogatott HR-adminisztráció" },
};

function ContactModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({ nev: "", telefon: "", email: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  async function submit() {
    setErrorMsg("");
    if (form.nev.trim().length < 2) {
      setErrorMsg("Kérlek, add meg a nevedet.");
      return;
    }
    if (!form.telefon.trim() && !form.email.trim()) {
      setErrorMsg("Adj meg legalább egy elérhetőséget (telefon vagy e-mail).");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, products: Array.from(selected) }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Ismeretlen hiba");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "A küldés nem sikerült. Próbáld újra!");
    }
  }

  function toggle(product: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (product === "Mind") {
        if (next.has("Mind")) {
          return new Set();
        }
        return new Set(DEMO_PRODUCTS);
      }
      if (next.has(product)) {
        next.delete(product);
        next.delete("Mind");
      } else {
        next.add(product);
        // auto-check "Mind" if all specifics selected
        const specifics = DEMO_PRODUCTS.slice(1);
        if (specifics.every((p) => next.has(p))) next.add("Mind");
      }
      return next;
    });
  }

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-8"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-y-auto">

        {/* header */}
        <div className="flex items-start justify-between gap-4 px-8 pt-8 pb-6 border-b border-black/6 shrink-0">
          <div className="flex flex-col gap-1">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black tracking-tight">
              Melyik eaisy megoldás érdekel?
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-black/50 hover:bg-black/10 hover:text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-8 py-7 flex flex-col gap-8">

          {/* product cards — icon + name + short description, like the nav dropdown */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter',sans-serif] font-medium text-sm text-black/50">
              Jelöld meg, mely szoftverek érdekelnek:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEMO_PRODUCTS.map((p) => {
                const checked = selected.has(p);
                const meta = DEMO_PRODUCT_META[p];
                const Icon = meta.icon;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => toggle(p)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border-2 text-left transition-all duration-200 select-none ${
                      p === "Mind" ? "sm:col-span-2" : ""
                    } ${
                      checked
                        ? "border-black bg-black/[0.03]"
                        : "border-black/10 hover:border-black/25"
                    }`}
                  >
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: meta.color }}
                    >
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                    </span>
                    <span className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className={`font-['Inter',sans-serif] text-sm ${checked ? "font-bold text-black" : "font-semibold text-black"}`}>
                        {p}
                      </span>
                      <span className="font-['Inter',sans-serif] font-normal text-xs text-black/55 leading-snug">
                        {meta.desc}
                      </span>
                    </span>
                    <span
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        checked
                          ? "bg-black border-black"
                          : "border-black/20"
                      }`}
                    >
                      {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* contact fields */}
          <div className="flex flex-col gap-3">
            {[
              { key: "nev", placeholder: "Név", type: "text" },
              { key: "telefon", placeholder: "Telefonszám", type: "tel" },
              { key: "email", placeholder: "Email cím", type: "email" },
            ].map(({ key, placeholder, type }) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                className="w-full px-5 py-3.5 rounded-xl border border-black/12 bg-[#f8f8f8] font-['Inter',sans-serif] text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black/30 focus:bg-white transition-colors"
              />
            ))}
          </div>

          {/* submit — same turquoise hover as the hero CTAs */}
          {status === "success" ? (
            <div className="w-full py-4 bg-[#1CEEE0]/20 border border-[#1CEEE0] text-black rounded-full font-['Inter',sans-serif] font-bold text-sm tracking-wide text-center">
              KÖSZÖNJÜK! HAMAROSAN JELENTKEZÜNK.
            </div>
          ) : (
            <button
              onClick={submit}
              disabled={status === "sending"}
              className="w-full py-4 bg-black border border-black text-white rounded-full font-['Inter',sans-serif] font-light text-sm tracking-wide hover:bg-[#1CEEE0]/20 hover:border-[#1CEEE0] hover:text-black hover:font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "KÜLDÉS..." : "KÉRJ DEMOT"}
            </button>
          )}
          {errorMsg && (
            <p className="font-['Inter',sans-serif] text-xs text-[#F26B77] text-center -mt-2">
              {errorMsg}
            </p>
          )}

          {/* fine print */}
          <div className="flex flex-col gap-3 pt-1 border-t border-black/6">
            <p className="font-['Inter',sans-serif] font-normal text-xs text-black/40 leading-relaxed">
              Elég csak azt az elérhetőségedet megadni, amelyiken szeretnéd, hogy megkeressünk.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-xs text-black/40 leading-relaxed">
              <span className="font-semibold text-black/55">Demo tudnivalók:</span> egy eaisy megoldás bemutatása körülbelül fél–egy órás Google Meet megbeszélést vesz igénybe: ez idő alatt bemutatjuk a szoftver működését és felteheted a kérdéseidet is.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

const PRODUCT_NAV_ITEMS: Record<string, { label: string; href: string }[]> = {
  "/eaisy-bill": [
    { label: "A probléma", href: "#problemak" },
    { label: "A megoldás", href: "#megoldas" },
    { label: "Funkciók", href: "#funkciok" },
    { label: "Előnyök", href: "#elonyok" },
    { label: "GYIK", href: "#gyik" },
  ],
  "/eaisy-desk": [
    { label: "A probléma", href: "#problemak" },
    { label: "A megoldás", href: "#megoldas" },
    { label: "Funkciók", href: "#funkciok" },
    { label: "Előnyök", href: "#elonyok" },
    { label: "GYIK", href: "#gyik" },
  ],
  "/eaisy-boost": [
    { label: "A probléma", href: "#problemak" },
    { label: "A megoldás", href: "#megoldas" },
    { label: "Funkciók", href: "#funkciok" },
    { label: "Előnyök", href: "#elonyok" },
    { label: "GYIK", href: "#gyik" },
  ],
  "/eaisy-books": [
    { label: "A probléma", href: "#problemak" },
    { label: "A megoldás", href: "#megoldas" },
    { label: "Funkciók", href: "#funkciok" },
    { label: "Előnyök", href: "#elonyok" },
    { label: "GYIK", href: "#gyik" },
  ],
};

const UMBRELLA_NAV_ITEMS = [
  { label: "Az eaisy-ről", href: "#mi-az-eaisy" },
  { label: "Termékek", href: "#termekek" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

function SiteHeader({ onDemoOpen }: { onDemoOpen: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const productNav = PRODUCT_NAV_ITEMS[location.pathname];
  const isProductPage = Boolean(productNav);
  const navItems = isProductPage ? productNav : UMBRELLA_NAV_ITEMS;
  const [activeHref, setActiveHref] = useState("");

  // scroll-spy: highlight the nav pill of the section currently in view
  useEffect(() => {
    setActiveHref("");
    const targets = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // navbar accents: cyan selection everywhere (bill home icon → coral, desk → magenta, boost → yellow, books → orange)
  const isBillPage = location.pathname === "/eaisy-bill";
  const isDeskPage = location.pathname === "/eaisy-desk";
  const isBoostPage = location.pathname === "/eaisy-boost";
  const isBooksPage = location.pathname === "/eaisy-books";
  // per-product selection color for nav pills (umbrella stays cyan)
  const navAccent = isBoostPage
    ? "#FACC15"
    : isDeskPage
      ? "#C43284"
      : isBooksPage
        ? "#3F97AA"
        : isBillPage
          ? "#EA8767"
          : "#1CEEE0";
  const accentHover = "hover:bg-[#1CEEE0]/20 hover:border-[#1CEEE0] hover:text-black";

  const navLinkCls = (href: string) =>
    `inline-flex items-center justify-center h-9 px-4 rounded-full border font-['Montserrat',sans-serif] text-sm whitespace-nowrap transition-all duration-200 ${
      activeHref === href
        ? "border-(--nav-accent) bg-(--nav-accent)/20 text-[#264350] font-medium"
        : "border-transparent text-[#264350]/70 font-medium hover:text-[#264350] hover:border-(--nav-accent) hover:bg-(--nav-accent)/20"
    }`;
  const homeIconCls = isBoostPage
    ? "border-black/25 text-black/45 hover:bg-[#FACC15] hover:text-[#3B0764] hover:border-[#3B0764]"
    : `${
        isBooksPage ? "hover:bg-[#E58F0E]" : isDeskPage ? "hover:bg-[#C43284]" : "hover:bg-[#EA8767]"
      } border-black/25 text-black/45 hover:text-white hover:border-white`;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-10 2xl:px-0 py-6">

        {/* Single navbar pill: logo at left edge, nav items clustered, plus icon at right edge */}
        <div
          className="flex items-center justify-between gap-6 rounded-[40px] border border-black/10 bg-white/70 backdrop-blur-md max-w-[860px] mx-auto pl-6 pr-2 py-2"
          style={{ "--nav-accent": navAccent } as React.CSSProperties}
        >

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 h-6">
            <EaisyLogo />
          </Link>

          {/* Nav — home vs product page */}
          {isProductPage ? (
            <nav className="hidden md:flex items-center justify-center gap-1">
              <Link
                to="/"
                className={`flex items-center justify-center w-7 h-7 rounded-full border transition-colors shrink-0 ${homeIconCls}`}
                aria-label="Vissza a főoldalra"
              >
                <Home className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
              <span className="w-px h-4 bg-black/15 shrink-0 mx-3" />
              {productNav.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setActiveHref(href)}
                  className={navLinkCls(href)}
                >
                  {label}
                </a>
              ))}
            </nav>
          ) : (
            <nav className="hidden md:flex items-center justify-center gap-1">
              {UMBRELLA_NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setActiveHref(href)}
                  className={navLinkCls(href)}
                >
                  {label}
                </a>
              ))}
            </nav>
          )}

          {/* Plus icon — product dropdown */}
          <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`w-10 h-10 rounded-full bg-black flex items-center justify-center text-white border border-transparent transition-all hover:scale-105 active:scale-95 ${accentHover}`}
            aria-label="Termékek megnyitása"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 top-16 w-[340px] rounded-3xl border border-black/5 p-3 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)]"
              style={{
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                animation: "menu-pop 0.25s cubic-bezier(0.22,1,0.36,1) both",
                transformOrigin: "top right",
              }}
            >
              <style>{`
                @keyframes menu-pop {
                  from { opacity: 0; transform: translateY(-8px) scale(0.97); }
                  to { opacity: 1; transform: translateY(0) scale(1); }
                }
              `}</style>

              <div className="px-3 pt-2 pb-3 mb-1 border-b border-black/5">
                <p className="text-[10px] font-['Inter',sans-serif] font-medium text-black/40 tracking-widest uppercase">
                  Termékek
                </p>
              </div>

              <div className="flex flex-col gap-1">
                {products.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.name}
                      to={p.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4 px-3 py-3 rounded-2xl hover:bg-black/5 transition-colors group"
                    >
                      <span
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: p.color }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </span>
                      <span className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-['Inter',sans-serif] font-semibold text-sm text-black">
                          {p.name}
                        </span>
                        <span className="font-['Inter',sans-serif] font-normal text-xs text-black/55 leading-snug">
                          {p.desc}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: p.color }}
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 mt-1 border-t border-black/5">
                <button
                  onClick={() => { setMenuOpen(false); onDemoOpen(); }}
                  className="block w-full text-center py-3 bg-black border border-black text-white rounded-full font-['Inter',sans-serif] font-medium text-xs tracking-widest hover:bg-[#1CEEE0]/20 hover:border-[#1CEEE0] hover:text-black hover:font-bold transition-colors"
                >
                  KÉRJ DEMOT
                </button>
              </div>
            </div>
          )}
        </div>
        </div>

      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#031A1E] text-white" id="kapcsolat">
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 py-16 flex flex-col gap-14">

        {/* ── highlighted contact block, centered ── */}
        <div className="flex flex-col items-center text-center gap-5 rounded-[30px] border border-[#1CEEE0]/40 bg-white/5 px-8 py-10 lg:py-12">
          <p className="text-xs font-['Montserrat',sans-serif] font-medium text-[#1CEEE0] uppercase tracking-widest">
            Kapcsolat
          </p>
          <p className="font-['Montserrat',sans-serif] font-medium text-2xl lg:text-3xl tracking-tight">
            Írj nekünk!
          </p>
          <p className="text-sm lg:text-base font-['Montserrat',sans-serif] font-light text-white/60 max-w-md leading-relaxed">
            Kérdésed van az eaisy moduljairól, vagy demót kérnél? Válaszolunk egy munkanapon belül.
          </p>
          <a
            href="mailto:hello@thinkai.hu"
            className="inline-flex items-center justify-center px-12 py-3.5 bg-white border border-white text-black rounded-full font-['Montserrat',sans-serif] font-light text-sm tracking-wide whitespace-nowrap hover:bg-[#1CEEE0]/20 hover:border-[#1CEEE0] hover:text-black hover:font-bold transition-colors"
          >
            hello@thinkai.hu
          </a>
        </div>

        {/* ── columns ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div className="flex flex-col gap-4">
            <div className="h-9">
              <EaisyLogo dark />
            </div>
            <p className="text-base lg:text-lg font-['Montserrat',sans-serif] font-light text-white/60 max-w-xs leading-relaxed">
              The future was yesterday. We are tomorrow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-['Montserrat',sans-serif] font-medium text-white/40 uppercase tracking-widest">
                Navigáció
              </p>
              {["eaisy", "Termékek", "Rólunk"].map((item) => (
                <a key={item} href="#" className="text-sm font-['Montserrat',sans-serif] font-light text-white/77 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-['Montserrat',sans-serif] font-medium text-white/40 uppercase tracking-widest">
                Termékek
              </p>
              {products.map((p) => (
                <Link key={p.name} to={p.path} className="text-sm font-['Montserrat',sans-serif] font-light text-white/77 hover:text-white transition-colors">
                  {p.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs font-['Montserrat',sans-serif] font-light text-white/30">
            © 2024 THINK AI Kft. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs font-['Montserrat',sans-serif] font-light text-white/30 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Adatvédelem / Privacy Policy
            </a>
            <p className="text-xs font-['Montserrat',sans-serif] font-light text-white/30">
              100% GDPR kompatibilis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── product-specific footer (Bill + Books): logo / divider / slogan + 3 columns ──
const FOOTER_PRODUCTS = [
  { name: "eaisyBill", desc: "Pénzügy és kontrolling", path: "/eaisy-bill" },
  { name: "eaisyBooks", desc: "Könyvelés", path: "/eaisy-books" },
  { name: "eaisyDesk", desc: "Ügyfélkommunikáció", path: "/eaisy-desk" },
  { name: "eaisyBoost", desc: "Közösségi média kezelés", path: "/eaisy-boost" },
];

// the ÁSZF and the data-processing notice are shared across products
const ASZF_PATH = "/aszf";
const ADATKEZELES_PATH = "/adatkezelesi-tajekoztato";

const BILL_FOOTER_DOCS = [
  { label: "eaisyBill ÁSZF", path: ASZF_PATH },
  { label: "eaisyBill Adatkezelési tájékoztató", path: ADATKEZELES_PATH },
];

const BOOKS_FOOTER_DOCS = [
  { label: "eaisyBooks ÁSZF", path: ASZF_PATH },
  { label: "eaisyBooks Adatkezelési tájékoztató", path: ADATKEZELES_PATH },
];

function ProductFooter({ bg, docs }: { bg: string; docs: { label: string; path: string }[] }) {
  const colHeadingCls =
    "font-['Montserrat',sans-serif] font-medium text-2xl lg:text-[28px] uppercase tracking-wide text-[#59BEB2]";
  return (
    <footer className="text-white" style={{ backgroundColor: bg }}>
      <div className="w-full max-w-[1376px] mx-auto px-6 lg:px-10 2xl:px-0 pt-16 pb-8 flex flex-col gap-16">

        {/* top: logo — thin divider — slogan */}
        <div className="flex flex-col items-start gap-5">
          <div className="h-9">
            <EaisyLogo dark />
          </div>
          <div className="w-[200px] h-px bg-white/25" />
          <p className="font-['Montserrat',sans-serif] font-light text-xs uppercase tracking-wider text-white/60 max-w-[250px] leading-relaxed">
            The future was yesterday. We are tomorrow.
          </p>
        </div>

        {/* three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

          {/* Kapcsolat */}
          <div className="flex flex-col items-start gap-5">
            <h3 className={colHeadingCls}>Kapcsolat</h3>
            <p className="font-['Montserrat',sans-serif] font-light text-sm lg:text-base text-white/85 leading-relaxed">
              Kérdésed van az eaisy termékekkel kapcsolatban?
              <br />
              Válaszolunk egy munkanapon belül.
            </p>
            <a
              href="mailto:hello@thinkai.hu"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#333333] rounded-full font-['Inter',sans-serif] font-medium text-sm hover:bg-[#1CEEE0]/20 transition-colors"
            >
              hello@thinkai.hu
            </a>
          </div>

          {/* Dokumentáció */}
          <div className="flex flex-col items-start gap-5">
            <h3 className={colHeadingCls}>Dokumentáció</h3>
            <nav className="flex flex-col gap-3">
              {docs.map((d) => (
                <Link
                  key={d.path}
                  to={d.path}
                  className="group inline-flex items-center gap-2 font-['Montserrat',sans-serif] font-light text-sm lg:text-base text-white/85 hover:text-white transition-colors"
                >
                  {d.label}
                  <ArrowUpRight
                    className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    strokeWidth={1.5}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Termékek */}
          <div className="flex flex-col items-start gap-5">
            <h3 className={colHeadingCls}>Termékek</h3>
            <nav className="flex flex-col gap-2.5">
              {FOOTER_PRODUCTS.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  className="font-['Montserrat',sans-serif] font-light text-sm lg:text-base text-white/85 hover:text-white transition-colors"
                >
                  {p.name} - {p.desc}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs font-['Montserrat',sans-serif] font-light text-white/30">
            © 2024 THINK AI Kft. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs font-['Montserrat',sans-serif] font-light text-white/30 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Adatvédelem / Privacy Policy
            </a>
            <p className="text-xs font-['Montserrat',sans-serif] font-light text-white/30">
              100% GDPR kompatibilis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// document subpages render without a site footer (their own article footer carries the contact info)
const NO_FOOTER_PATHS = new Set([ASZF_PATH, ADATKEZELES_PATH]);

// product-specific footers: same structure, per-product background and document labels
const PRODUCT_FOOTERS: Record<string, { bg: string; docs: { label: string; path: string }[] }> = {
  "/eaisy-bill": { bg: "#235556", docs: BILL_FOOTER_DOCS },
  "/eaisy-books": { bg: "#032A32", docs: BOOKS_FOOTER_DOCS },
};

export default function Root() {
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onOpen() { setDemoOpen(true); }
    window.addEventListener("open-demo-modal", onOpen);
    return () => window.removeEventListener("open-demo-modal", onOpen);
  }, []);

  // on page change always land at the top (header + hero); hash links scroll to their section
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F3F3F4]">
      <SiteHeader onDemoOpen={() => setDemoOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      {PRODUCT_FOOTERS[location.pathname] ? (
        <ProductFooter
          bg={PRODUCT_FOOTERS[location.pathname].bg}
          docs={PRODUCT_FOOTERS[location.pathname].docs}
        />
      ) : NO_FOOTER_PATHS.has(location.pathname) ? null : (
        <SiteFooter />
      )}
      {demoOpen && <ContactModal onClose={() => setDemoOpen(false)} />}
    </div>
  );
}
