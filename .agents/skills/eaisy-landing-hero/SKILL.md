---
name: eaisy-landing-hero
description: Builds the hero of an eaisy product landing page (eaisyBill, eaisyBooks, eaisyDesk, future eaisy products) according to the established eaisy design system. Use whenever creating a new product landing page or updating a product hero in this repo — even if the user only says "new product page", "hero design", or pastes a Figma screenshot of a hero. Only the brand colors change between products; the structure is always the same.
---

# eaisy product landing — hero design system

The canonical reference implementation is `src/app/pages/EaisyBill.tsx` (its `Hero` function). Other live examples: `EaisyBooks.tsx`, `EaisyDesk.tsx`. **Only brand colors change between products — never invent a new structure.**

## 1. Page tokens (top of the page file)

Each product page defines its brand palette in `const C = { ... }` (keep existing product keys; add `ink: "#264350"`). `#264350` is the site-wide dark text color.

Shared constants (copy the pattern):

```ts
const FONT_MAIN = "font-['Montserrat',sans-serif]";
const FONT_CARD = "font-['Inter',sans-serif]";
const INNER = "w-full max-w-[1530px] mx-auto px-6 lg:px-10"; // → 1450px content
const INNER_CARDS = "w-full max-w-[1434px] mx-auto px-6 lg:px-10"; // → 1354px (teaser cards width)
const TEASER_CARD = "rounded-2xl ring-1 ring-inset ring-[rgba(<brand-rgb>,0.2-0.3)] transition-all duration-300 hover:-translate-y-1";
```

Brand accent mapping (examples): Bill = coral `#EA8767` on teal; Books = orange `#E58F0E` on blue; Desk = magenta `#C43284` on cyan.

## 2. Hero structure (exact rules)

1. **Section**: `relative w-full overflow-hidden bg-white pt-[122px] pb-14 lg:pb-20`, `id="hero"`. (The `pt-[122px]` yields exactly **40px** between the navbar pill's bottom edge and the brand logo pill.)
2. **Background frame**: centered `max-w-[1615px]`, `absolute top-24 bottom-0 lg:top-[110px] left-1/2 -translate-x-1/2`, `overflow-hidden rounded-[40px]`. The frame's top edge runs **below the navbar — never flush with the screen top**.
   - Background = light brand gradient **+ dense CSS dot pattern** (`radial-gradient(rgba(<dark>,0.07-0.10) 1.2px, transparent 1.2px)`, `backgroundSize: "16px 16px"`).
   - Prefer CSS-built backgrounds over baked image assets. If an asset has UI elements baked in (buttons, cards), **rebuild the gradient in CSS** instead of using the image, otherwise real interactive elements would collide with the baked ones.
   - Optional soft top fade: `h-[22%] bg-gradient-to-b from-white/80 via-white/40 to-transparent`.
3. **Brand logo pill**: `<p>` (not a logo image) in a rounded frame — `inline-flex items-center rounded-full px-8 py-3 lg:px-10 lg:py-4`, `border: 1px solid <brand-main>`, Inter **ExtraBold** `text-3xl lg:text-4xl leading-none`, text in the brand main color (Bill `#0D9488`, Books `#085D6F`, Desk `#186D98`).
4. **Main title**: `<h1>` Montserrat **medium** `text-4xl lg:text-[40px] leading-[1.15]`, `#264350`, centered, `mt-[50px]` (exactly 50px from the logo pill), single line where it fits (no forced `<br>` break).
5. **Subtitle** (mandatory): directly below the H1, `mt-4 lg:mt-5`, Montserrat **light** `text-base lg:text-lg leading-relaxed`, black, centered — a lowercase continuation of the H1 sentence: `az eaisyX AI támogatott <terület> platformmal` (e.g. Bill: „az eaisyBill AI támogatott pénzügyi és kontrolling platformmal").
6. **CTAs** (`mt-[30px]` — exactly 30px below the subtitle — two compact buttons, **`w-[130px] h-[45px]`**, **rounded-xl** — squared with slight rounding, Montserrat normal 16px, normal tracking):
   - "Fedezd fel": filled near-black pill `bg-[#030213]`, white text, hover `bg-[#186D98]` → `href="#problemak"`.
   - "Kérj demot": white background, `1px solid rgba(0,0,0,0.2)` border, black text, hover `bg-black/5` → `onClick={openDemoModal}` (imported from `@/app/Root`).

## 3. Teaser panel

Below the CTAs (`mt-14 lg:mt-20`):

- Panel: `mt-[50px]` (exactly 50px below the CTAs), `rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-md p-4 lg:p-12` — the 48px desktop padding matters, the translucent frame must show around the cards.
- Grid: brand-specific bento layout, **10px gaps** (`lg:gap-2.5`). Rows are driven by `aspect-square` squares as direct grid children (never nest square cards in a flex wrapper — direct grid children only, so their aspect drives equal row heights; tall cards use `row-span-2`. All pages use `lg:grid-cols-5` with a strict 2×5 taxonomy: small square = 1 cell, big square = 2×2 (4 cells), landscape/portrait rectangle = 2 cells. Cards may only ever span 1, 2, or 4 cells.
- Cards: `TEASER_CARD` class (hairline **inset** ring — never `border` on image/gradient cards; for image cards put a `pointer-events-none` overlay ring div *above* the `<img>` so the edge stays clean).
- Card padding `p-5`, icon chips `rounded-[10px] w-11 h-11`, icons aligned to the frame (top-left 20/20px or centered), uniform `gap-5` between icon → title → desc.
- Montserrat (FONT_MAIN) everywhere inside the teaser panel; Inter (FONT_CARD) stays only on the brand logo pill.

## 4. Common pitfalls (learned the hard way)

- Percentages in `grid-template-rows` don't resolve the way you'd expect here — drive row heights with `aspect-square` squares as **direct grid children** instead.
- Tailwind arbitrary values with `calc()` need underscores (`basis-[calc((100%_-_72px)/_4)]`).
- Keep the whole-page rules: Montserrat titles (medium) / light body, `#264350` text; inside the hero the teaser cards use Montserrat too — Inter only on the brand logo pill (and in section eyebrows).
- **Subtitles everywhere are 18px**: the hero subtitle AND every section subtitle (szekció alcím) use Montserrat light `text-base lg:text-lg leading-relaxed` — never introduce a larger section-subtitle size.

After building, verify with the dev server (`npm run dev`, port 5175) + screenshot at 1728px, then `npm run build`.
