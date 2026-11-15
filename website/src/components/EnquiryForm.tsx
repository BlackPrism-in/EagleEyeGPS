"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { navProducts, whatsappLink } from "@/data/site";

const productOptions = [
  ...navProducts.map((p) => p.title),
  "4G Dashcam (1/2/3/4-Channel)",
  "Not sure — need advice",
];

const vehicleCounts = ["1", "2 – 5", "6 – 20", "21 – 50", "51 – 100", "100+"];

type Errors = Partial<Record<"name" | "phone" | "product" | "count", string>>;

/**
 * 4-field fast quote form (Name, Phone/WhatsApp, Product Needed, Vehicle Count).
 * Submitting opens WhatsApp with a pre-filled enquiry to the Eagle Eye sales number,
 * so no backend is needed. Swap `handleSubmit` for an API call if a CRM is added later.
 */
export default function EnquiryForm({
  defaultProduct,
  dark,
  compact,
}: {
  defaultProduct?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").replace(/[^\d+]/g, "");
    const product = String(fd.get("product") ?? "");
    const count = String(fd.get("count") ?? "");

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid 10-digit mobile number";
    if (!product) next.product = "Select a product";
    if (!count) next.count = "Select vehicle count";
    setErrors(next);
    if (Object.keys(next).length) return;

    const msg = [
      "Hi Eagle Eye GPS, I'd like a free quote.",
      `Name: ${name}`,
      `Phone/WhatsApp: ${phone}`,
      `Product: ${product}`,
      `Vehicles: ${count}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const label = `mb-1.5 block text-xs font-semibold uppercase tracking-wider ${dark ? "text-white/60" : "text-ink-600/70"}`;
  const field = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 ${
    dark ? "border-white/15 bg-white/5 text-white placeholder:text-white/40" : "border-ink-900/15 bg-white text-ink-900 placeholder:text-ink-600/50"
  }`;
  const err = `mt-1 text-xs ${dark ? "text-red-400" : "text-red-600"}`;

  if (sent) {
    return (
      <div className={`flex flex-col items-center rounded-2xl p-8 text-center ${dark ? "text-white" : "text-ink-900"}`}>
        <CheckCircle2 className="h-12 w-12 text-brand-500" />
        <p className="mt-4 text-lg font-bold">Thanks! Your enquiry is ready on WhatsApp.</p>
        <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-ink-600/70"}`}>
          Just hit send in WhatsApp and our team will get back to you shortly.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-5 text-sm font-semibold text-brand-600 underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"}`}>
      <div>
        <label htmlFor="eq-name" className={label}>
          Name
        </label>
        <input id="eq-name" name="name" autoComplete="name" placeholder="Your full name" className={field} />
        {errors.name && <p className={err}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="eq-phone" className={label}>
          Phone / WhatsApp
        </label>
        <input
          id="eq-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className={field}
        />
        {errors.phone && <p className={err}>{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="eq-product" className={label}>
          Product Needed
        </label>
        <select id="eq-product" name="product" defaultValue={defaultProduct ?? ""} className={field}>
          <option value="" disabled>
            Select a product
          </option>
          {productOptions.map((p) => (
            <option key={p} value={p} className="text-ink-900">
              {p}
            </option>
          ))}
        </select>
        {errors.product && <p className={err}>{errors.product}</p>}
      </div>
      <div>
        <label htmlFor="eq-count" className={label}>
          Vehicle Count
        </label>
        <select id="eq-count" name="count" defaultValue="" className={field}>
          <option value="" disabled>
            How many vehicles?
          </option>
          {vehicleCounts.map((c) => (
            <option key={c} value={c} className="text-ink-900">
              {c}
            </option>
          ))}
        </select>
        {errors.count && <p className={err}>{errors.count}</p>}
      </div>
      <div className={compact ? "sm:col-span-2 lg:col-span-4" : "sm:col-span-2"}>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-ink-950 transition-colors hover:bg-brand-400"
        >
          <Send className="h-4 w-4" /> Get My Free Quote
        </button>
        <p className={`mt-3 text-center text-xs ${dark ? "text-white/50" : "text-ink-600/60"}`}>
          Your enquiry opens in WhatsApp — we usually reply within working hours.
        </p>
      </div>
    </form>
  );
}
