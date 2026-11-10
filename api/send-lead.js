/**
 * POST /api/send-lead
 * Body: { nev: string, telefon?: string, email?: string, products: string[] }
 * Közvetlen JSON beküldés az eaisyCRM felhős Supabase adatbázisába
 * (public.submit_eaisy_demo_request RPC vagy opcionális EAISY_CRM_API_URL),
 * ahol automatikusan létrejön az Érdeklődő, az Ügylet (a Cikktörzs szoftverekkel összepárosítva)
 * és a szabad rablású visszahívási feladat.
 */

const DEFAULT_SUPABASE_URL = "https://xrzolwuwzuadgzwofoza.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyem9sd3V3enVhZGd6d29mb3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NzE2OTksImV4cCI6MjEwMzM0NzY5OX0.WyM-64lfKICgOLMvl5yVKC5TgLDvS39utOEUk-kHvGs";
const DEFAULT_ORG_ID = "00000000-0000-0000-0000-000000000001";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nev, telefon, email, products } = req.body ?? {};

  if (!nev || typeof nev !== "string" || nev.trim().length < 2) {
    return res.status(400).json({ error: "A név megadása kötelező." });
  }
  if (!telefon && !email) {
    return res
      .status(400)
      .json({ error: "Adj meg legalább egy elérhetőséget (telefon vagy e-mail)." });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return res.status(400).json({ error: "Érvénytelen e-mail cím." });
  }

  const cleanName = nev.trim();
  const cleanPhone = telefon ? String(telefon).trim() : "";
  const cleanEmail = email ? String(email).trim() : "";
  const cleanProducts = Array.isArray(products)
    ? products.map((p) => String(p ?? "").trim()).filter(Boolean)
    : [];

  const organizationId = (process.env.EAISY_CRM_ORG_ID || DEFAULT_ORG_ID).trim();
  const customCrmApiUrl = (process.env.EAISY_CRM_API_URL || "").trim().replace(/\/+$/, "");

  // 1. Ha kifejezetten meg van adva egy egyedi EAISY_CRM_API_URL, először azon próbálkozunk
  if (customCrmApiUrl) {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const webhookSecret = (process.env.EAISY_CRM_WEBHOOK_SECRET || "").trim();
      if (webhookSecret) {
        headers["x-webhook-secret"] = webhookSecret;
      }

      const crmRes = await fetch(`${customCrmApiUrl}/api/public/leads`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          organization_id: organizationId,
          nev: cleanName,
          telefon: cleanPhone,
          email: cleanEmail,
          products: cleanProducts,
        }),
      });

      const data = await crmRes.json().catch(() => ({}));
      if (crmRes.ok) {
        return res.status(200).json({
          ok: true,
          flow_id: data.flow_id,
          client_id: data.client_id,
          matched_products: data.matched_products,
        });
      }
      console.warn("[send-lead] Custom CRM API returned non-OK, falling back to Supabase RPC:", crmRes.status);
    } catch (err) {
      console.warn("[send-lead] Custom CRM API unreachable, falling back to Supabase RPC:", err?.message);
    }
  }

  // 2. Közvetlen írás a felhős Supabase adatbázisba (public.submit_eaisy_demo_request RPC)
  // Így akkor is azonnal megjelenik a lokálisan futtatott eaisyCRM-ben, ha az eaisyCRM nincs Vercelre pusholva.
  const supabaseUrl = (
    process.env.EAISY_SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    DEFAULT_SUPABASE_URL
  )
    .trim()
    .replace(/\/+$/, "");

  const supabaseKey = (
    process.env.EAISY_SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    DEFAULT_SUPABASE_ANON_KEY
  ).trim();

  try {
    const rpcRes = await fetch(`${supabaseUrl}/rest/v1/rpc/submit_eaisy_demo_request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({
        p_org_id: organizationId,
        p_name: cleanName,
        p_phone: cleanPhone || null,
        p_email: cleanEmail || null,
        p_products: cleanProducts,
      }),
    });

    const rpcData = await rpcRes.json().catch(() => ({}));

    if (!rpcRes.ok) {
      console.error("[send-lead] Supabase RPC error:", rpcRes.status, rpcData);
      const errMsg =
        rpcData?.message ||
        rpcData?.error ||
        "A demókérés beküldése nem sikerült. Próbáld újra később.";
      return res.status(rpcRes.status >= 400 && rpcRes.status < 500 ? 400 : 502).json({
        error: errMsg,
      });
    }

    return res.status(200).json({
      ok: true,
      flow_id: rpcData?.flow_id,
      client_id: rpcData?.client_id,
      matched_products: rpcData?.matched_products,
    });
  } catch (err) {
    console.error("[send-lead] Supabase RPC network error:", err);
    return res.status(502).json({
      error: "A kapcsolatfelvétel az eaisyCRM adatbázissal nem sikerült. Próbáld újra később.",
    });
  }
}
