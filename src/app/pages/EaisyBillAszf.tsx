import doc from "@/app/content/eaisy-bill-aszf.json";
import { LegalDocPage } from "@/app/components/LegalDocPage";

export default function EaisyBillAszf() {
  return (
    <LegalDocPage
      doc={doc}
      seoTitle="ÁSZF – Általános Szerződési Feltételek | eaisy"
      seoDescription="Az eaisy szolgáltatás általános szerződési feltételei: a Szolgáltatás igénybevételének feltételei, a Felhasználók kötelezettségei, díjfizetés, adatvédelem és a modulokra vonatkozó különös rendelkezések."
      path="/aszf"
    />
  );
}
