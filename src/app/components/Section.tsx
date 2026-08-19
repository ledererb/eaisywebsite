import type { ReactNode } from "react";

// ── shared section primitives for the new product landing design system ──────
// Used by eaisyBooks and eaisyBill pages. Colors come in via props/tokens.

const FONT_MAIN = "font-['Montserrat',sans-serif]";
const FONT_CARD = "font-['Inter',sans-serif]";

// eyebrow: colored bar + uppercase label (teal default, orange on dark backgrounds)
export function SectionEyebrow({
  children,
  color = "#3F97AA",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-[3px] h-4 rounded-full" style={{ backgroundColor: color }} />
      <p className={`${FONT_CARD} font-semibold text-[13px] uppercase tracking-[0.2em]`} style={{ color }}>
        {children}
      </p>
    </div>
  );
}

// header: centered eyebrow + Montserrat medium title + light subtitle
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  eyebrowColor,
  dark = "#264350",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  eyebrowColor?: string;
  dark?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <SectionEyebrow color={eyebrowColor}>{eyebrow}</SectionEyebrow>
      <h2
        className={`${FONT_MAIN} mt-5 font-medium text-4xl lg:text-[50px] leading-tight tracking-tight`}
        style={{ color: dark }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`${FONT_MAIN} mt-5 font-light text-base leading-relaxed max-w-[720px]`} style={{ color: dark }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
