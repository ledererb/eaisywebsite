import doc from "@/app/content/eaisy-bill-adatkezeles.json";
import { LegalDocPage } from "@/app/components/LegalDocPage";

export default function EaisyBillAdatkezeles() {
  return (
    <LegalDocPage
      doc={doc}
      seoTitle="Adatkezelési tájékoztató | eaisy"
      seoDescription="Az eaisy szolgáltatáshoz kapcsolódó adatkezelési tájékoztató: az Adatkezelő adatai, az adatkezelések céljai és jogalapjai, az érintetti jogok gyakorlása és az adatbiztonság."
      path="/adatkezelesi-tajekoztato"
    />
  );
}
