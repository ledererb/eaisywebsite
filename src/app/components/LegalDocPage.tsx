import type { ReactNode } from "react";
import { P, UL } from "./LegalLayout";
import { Seo } from "./Seo";

export type DocBlock = { type: string; text?: string; items?: string[] };
export type DocSection = { id: string; heading: string; blocks: DocBlock[] };
export type LegalDoc = {
  title: string;
  subtitle?: string;
  meta?: string[];
  sections: DocSection[];
};

function Block({ block }: { block: DocBlock }) {
  if (block.type === "ul") {
    return (
      <UL>
        {(block.items ?? []).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </UL>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="font-['Inter',sans-serif] font-semibold text-base text-black tracking-tight mt-2">
        {block.text}
      </h3>
    );
  }
  return <P>{block.text}</P>;
}

/**
 * Renders a legal document (ÁSZF, adatkezelési tájékoztató) from a structured
 * JSON file generated from the source Word documents. Shared visual language
 * with LegalLayout.
 */
export function LegalDocPage({
  doc,
  seoTitle,
  seoDescription,
  path,
}: {
  doc: LegalDoc;
  seoTitle: string;
  seoDescription: string;
  path: string;
}) {
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} path={path} />
      <article className="w-full max-w-[820px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <header className="flex flex-col gap-3 mb-12 pb-8 border-b border-black/10">
          <h1 className="font-['Inter',sans-serif] font-bold text-3xl lg:text-4xl text-black tracking-tight leading-tight">
            {doc.title}
          </h1>
          {(doc.meta ?? []).map((m) => (
            <p key={m} className="font-['Inter',sans-serif] text-sm text-black/45">
              {m}
            </p>
          ))}
        </header>

        <div className="flex flex-col gap-10">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="flex flex-col gap-4 scroll-mt-32">
              <h2 className="font-['Inter',sans-serif] font-bold text-xl lg:text-2xl text-black tracking-tight">
                {section.heading}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-black/10 flex flex-col gap-2">
          <a
            href="mailto:hello@thinkai.hu"
            className="font-['Inter',sans-serif] text-sm text-[#186d98] font-semibold hover:underline"
          >
            hello@thinkai.hu
          </a>
          <p className="font-['Inter',sans-serif] text-xs text-black/40">
            © 2024 THINK AI Kft. — 1111 Budapest, Lágymányosi utca 12. Fsz. 2. ajtó
          </p>
        </footer>
      </article>
    </>
  );
}
