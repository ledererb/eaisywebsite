# Eaisy Brand Architecture & UI Kit

This document defines the brand architecture, visual identity, and UI tokens for the **eaisy** umbrella brand and its sub-brands (**eaisyBill**, **eaisyDesk**, **eaisyBoost**). It serves as the source of truth for the design system.

---

## Brand Architecture

1. **eaisy (Umbrella Brand)**:
   - Owns the complete shared component system, including typography scale, navigation structure, buttons, inputs, spacing, border radii, shadows, responsive behavior, and interaction states.
   - Sub-brands must not introduce separate component systems; they only theme these shared components using product-specific semantic color tokens.
2. **Sub-Brands**:
   - Each product is themed with specific primary and secondary/accent palettes. All button and layout structures remain shared.

---

## 1. eaisy (Umbrella Brand) Shared Tokens

### Color Palette

#### Primary and Neutrals
- **White**: `#FFFFFF` (Used for page/card backgrounds, dialog panels, and light buttons)
- **Page Bg**: `#F8F5F8` (Approved light purple-grey page background)
- **Black 55%**: `rgba(0, 0, 0, 0.55)` (Secondary text color, labels, and helper copy)
- **Black 75%**: `rgba(0, 0, 0, 0.75)` (Sub-headings, captions)
- **Black**: `#000000` (Primary body text, page titles, and headings)

#### Accents
- **Light Teal**: `#D2FCF9` (Light highlights)
- **Teal**: `#1CEEE0` (Main bright cyan accent, active/focused border states)
- **Deep Blue**: `#186D98` (Primary corporate blue, communication elements)

#### Gradient
- **Primary Gradient**: `linear-gradient(135deg, #1CEEE0 0%, #186D98 100%)`

### Spacing, Radii & Shadows
- **Base Padding**: `24px` (`p-6`) and `32px` (`p-8`)
- **Outer Page Padding**: `24px` (`px-6`) on mobile, `40px` (`lg:px-10`) on desktop
- **Border Radii**:
  - Modal Panels: `24px` (`rounded-3xl`)
  - Cards: `16px` (`rounded-2xl`)
  - Buttons / Navigation Pills: `30px` / `rounded-full`
  - Inputs / Action items: `12px` (`rounded-xl`)
  - Icon Wrapper: `8px` (`rounded-lg`)
- **Shadows**:
  - Modals / Dropdowns: `shadow-2xl`
  - Cards: `shadow-sm`
  - Navigation Pill: `shadow-[0px_0.5px_2.9px_0px_rgba(0,0,0,0.25)]`

### Typography Scale
- **H1 / Page Title**: `60px` (`3.75rem`), `Inter` Bold, line-height `1.0`
- **H2 / Section Title**: `36px` (`2.25rem`), `Inter` Bold, line-height `1.2`
- **H3 / Card Title**: `18px` (`1.125rem`), `Inter` Semibold, line-height `1.5`
- **Eyebrow**: `14px` (`0.875rem`) or `18px` (`1.125rem`), `Montserrat` Medium, uppercase, tracking-wider
- **Hero & Section Subtitle**: `18px` (`1.125rem`), `Montserrat` Light, relaxed line-height — one shared size for the hero subtitle and every section subtitle (szekció alcím) on the product landing pages; mobile: `16px`
- **Caption**: `18px` (`1.125rem`), `Montserrat` Medium, line-height `1.5`
- **Body**: `14px` (`0.875rem`) or `16px` (`1.0rem`), `Inter` Normal, line-height `1.5`
- **Button, Badge**: `14px` (`0.875rem`), `Montserrat` Medium, uppercase

### Shared Component System

#### Pill-Shaped Buttons (30px Radius / `rounded-full`)

##### Primary Dark Button
- **Default**: Background `#030213`, Text `#FFFFFF`
- **Hover**: Background `#186D98` (Deep Blue), Text `#FFFFFF`
- **Disabled**: Background `#CBCED4`, Text `#FFFFFF` (Opacity 50%)

##### Outlined Dark Button
- **Default**: Border `#030213` (1px solid), Text `#030213`, Background transparent
- **Hover**: Background `#1CEEE0` (Teal), Border `#1CEEE0`, Text `#030213`
- **Disabled**: Border `#CBCED4`, Text `#CBCED4`

#### Inputs & Forms
- **Default Field**: Border `rgba(0,0,0,0.12)` (1px solid), Background `#F8F8F8`, Text `#000000`, Placeholder `rgba(0,0,0,0.35)`
- **Active / Focused Field**: Border `#1CEEE0` (Teal), Background `#FFFFFF`
- **Error Field**: Border `#F26B77` (Rose), Background `#F8F8F8`, Text `#D4183D`
- **Disabled Field**: Background `#F3F3F5`, Text `rgba(0,0,0,0.35)`

#### Navigation Pill
- **Light Theme Pill**: Background `rgba(0,0,0,0.05)`, Backdrop Blur `8px`, Padding-left/right `24px`, Padding-top/bottom `10px`, `rounded-full` (40px). Items: `Montserrat` Medium, `text-sm`, color `rgba(0,0,0,0.55)`, hover color `black`.
- **Dark Theme Pill**: Background `rgba(0,0,0,0.88)`, `rounded-2xl` (16px). Active item: Background `rgba(255,255,255,0.1)`, color `#BBFAF6`. Inactive item: color `rgba(255,255,255,0.55)`, hover color `rgba(255,255,255,0.9)`.

#### Base Card vs. Numbered Card

##### Base Card
- **Background**: `#FFFFFF`
- **Border**: `1px solid rgba(0,0,0,0.05)`
- **Border Radius**: `16px` (`rounded-2xl`)
- **Shadow**: `shadow-sm`
- **Padding**: `24px` (`p-6`) to `32px` (`p-8`)

##### Numbered Card
- **Base Inherits**: Inherits all styles of the **Base Card**.
- **Badge/Serial Indicator**: Added at the top/left of the card. Text is `Inter` Extra Bold, `text-5xl`, colored in `#1CEEE0` (Teal) with `30%` opacity.

---

## 2. eaisyBill (Product Theme)

### Color Palette

#### Primary Brand (Teal)
- **50**: `#E2FBF4` (Used for highlights and light backgrounds)
- **400**: `#6ACCC3` (Used for accent borders, price elements, and subtle texts)
- **600 (Main)**: `#0D9488` (Primary brand color for text titles)
- **800**: `#005757` (Deep brand color, dark CTA buttons)
- **900**: `#032D32` (Very dark brand color, backgrounds)

#### Accent Secondary (Rose)
- **50**: `#FCD2CD` (Muted rose highlight)
- **400**: `#FFA8A8` (Light rose borders)
- **600 (Accent)**: `#F26B77` (Primary Accent for CTA buttons, active state highlights)
- **800**: `#95333C` (Deep rose elements)
- **900**: `#1D040B` (Very dark rose)

### Visual Treatments
- **Light Treatment**: Background `#E2FBF4` (Teal 50), text headings `#032D32` (Teal 900), accents/CTAs `#F26B77` (Rose 600).
- **Dark Treatment**: Background `#032D32` (Teal 900), text `#FFFFFF`, accent `#6ACCC3` (Teal 400).

---

## 3. eaisyDesk (Product Theme)

### Color Palette

#### Primary Brand (Cyan)
- **50**: `#DFFFFD` (Light brand background)
- **400**: `#90FFF8` (Light cyan borders)
- **600 (Main)**: `#1CEEE0` (Bright cyan brand identifier)
- **800**: `#186D98` (Deep blue-teal)
- **900**: `#082432` (Very dark blue layout/footer)

#### Accent Secondary (Magenta)
- **50**: `#FFF1F9` (Light magenta highlight)
- **400**: `#E57EB8` (Light magenta border)
- **600 (Accent)**: `#C43284` (Accent elements)
- **800**: `#A2005B` (Deep magenta)
- **900**: `#23002B` (Very dark purple/magenta)

### Visual Treatments
- **Light Treatment**: Background `#DFFFFD` (Cyan 50), headings `#186D98` (Cyan 800), accents/CTAs `#186D98` (Cyan 800) or magenta accents.
- **Dark Treatment**: Background `#082432` (Cyan 900), text `#FFFFFF`, accents `#1CEEE0` (Cyan 600).

---

## 4. eaisyBoost (Product Theme)

### Color Palette

#### Primary Brand (Purple)
- **50**: `#FAF5FF` (Light purple background)
- **300**: `#D8B4FE` (Accent light purple)
- **500**: `#AB55F7` (Medium purple borders)
- **700 (Main)**: `#7E22CE` (Brand purple headings)
- **900**: `#581C87` (Deep purple)
- **950**: `#3B0764` (Very dark purple background/layout)

#### Accent Secondary (Yellow)
- **100**: `#FEF9C3` (Light yellow background)
- **200**: `#FEF08A` (Light yellow highlight)
- **300**: `#FDE047` (Yellow accent)
- **400 (Accent)**: `#FACC15` (Bright gold accent, CTAs/badges)
- **600**: `#CA8A04` (Darker gold)
- **950**: `#422006` (Deep brown)

### Visual Treatments
- **Light Treatment**: Background `#FAF5FF` (Purple 50), headings `#7E22CE` (Purple 700), secondary accents yellow.
- **Dark Treatment**: Background `#3B0764` (Purple 950), text `#FFFFFF`, accent `#D8B4FE` (Purple 300).
