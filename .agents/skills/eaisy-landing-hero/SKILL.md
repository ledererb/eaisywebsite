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

1. **Section**: `relative w-full overflow-hidden bg-white pt-36 pb-14 lg:pt-44 lg:pb-20`, `id="hero"`.
2. **Background frame**: centered `max-w-[1615px]`, `absolute top-24 bottom-0 lg:top-[110px] left-1/2 -translate-x-1/2`, `overflow-hidden rounded-[40px]`. The frame's top edge runs **below the navbar — never flush with the screen top**.
   - Background = light brand gradient **+ dense CSS dot pattern** (`radial-gradient(rgba(<dark>,0.07-0.10) 1.2px, transparent 1.2px)`, `backgroundSize: "16px 16px"`).
   - Prefer CSS-built backgrounds over baked image assets. If an asset has UI elements baked in (buttons, cards), **rebuild the gradient in CSS** instead of using the image, otherwise real interactive elements would collide with the baked ones.
   - Optional soft top fade: `h-[22%] bg-gradient-to-b from-white/80 via-white/40 to-transparent`.
3. **Brand name**: `<p>` (not a logo image), Inter **ExtraBold** `text-5xl lg:text-[64px] leading-none`, in the brand color.
4. **Main title**: `<h1>` Montserrat **medium** `text-4xl lg:text-[60px] leading-[1.1]`, `#264350`, centered, `mt-6`, optional `<br className="hidden lg:block" />` for the two-line break.
5. **CTAs** (`mt-12 lg:mt-16`, two pills, `h-[54px]`, `px-10`):
   - Font: **Inter Medium 20px, `tracking-[0.2em]`** (both buttons).
   - "Fedezd fel": white pill, `1px solid` dark (`#264350` or brand-dark) border+text → `href="#problemak"`.
   - "Kérj demot": filled with the **product accent color**, white text → `onClick={openDemoModal}` (imported from `@/app/Root`).

## 3. Teaser panel

Below the CTAs (`mt-14 lg:mt-20`):

- Panel: `rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-md p-4 lg:p-12` — the 48px desktop padding matters, the translucent frame must show around the cards.
- Grid: brand-specific bento layout, **10px gaps** (`lg:gap-2.5`). Rows are driven by `aspect-square` squares as direct grid children (never nest square cards in a flex wrapper — direct grid children only, so their aspect drives equal row heights; tall cards use `row-span-2`, e.g. Books' `lg:grid-cols-10`, Bill/Desk `lg:grid-cols-5`. See existing pages for layout variants.
- Cards: `TEASER_CARD` class (hairline **inset** ring — never `border` on image/gradient cards; for image cards put a `pointer-events-none` overlay ring div *above* the `<img>` so the edge stays clean).
- Card padding `p-5`, icon chips `rounded-[10px] w-11 h-11`, icons aligned to the frame (top-left 20/20px or centered), uniform `gap-5` between icon → title → desc.
- Inter inside cards (they represent the software UI); Montserrat only for titles/body elsewhere.

## 4. Common pitfalls (learned the hard way)

- Percentages in `grid-template-rows` don't resolve the way you'd expect here — drive row heights with `aspect-square` squares as **direct grid children** instead.
- Tailwind arbitrary values with `calc()` need underscores (`basis-[calc((100%_-_72px)/_4)]`).
- Keep the whole-page rules: Montserrat titles (medium) / light body, `#264350` text, Inter only in hero cards and eyebrows (they represent the software UI).

After building, verify with the dev server (`npm run dev`, port 5175) + screenshot at 1728px, then `npm run build`.
