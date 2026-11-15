"use client";

import { useState } from "react";
import { Bus, Check, MonitorSmartphone, Smartphone, Users } from "lucide-react";
import type { Tier } from "@/data/schoolbus";

const audienceIcon = (a: string) =>
  a.includes("Parent") ? Users : a.includes("Driver") ? Bus : MonitorSmartphone;

/** Interactive tabs for SmartBus Lite vs SmartBus Premium. */
export default function SmartBusTiers({ tiers }: { tiers: Tier[] }) {
  const [active, setActive] = useState(tiers[0].id);
  const tier = tiers.find((t) => t.id === active)!;

  return (
    <div>
      <div role="tablist" aria-label="SmartBus plans" className="mx-auto grid max-w-2xl grid-cols-2 gap-2 rounded-full bg-ink-900 p-1.5">
        {tiers.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setActive(t.id)}
            className={`rounded-full px-4 py-3 text-sm font-bold transition-colors sm:text-base ${
              active === t.id ? "bg-brand-500 text-ink-950" : "text-white/70 hover:text-white"
            }`}
          >
            {t.name}
            <span className="ml-2 hidden text-xs font-semibold opacity-70 sm:inline">
              {t.id === "lite" ? "Tier 1" : "Tier 2"}
            </span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${tier.id}`} aria-labelledby={`tab-${tier.id}`} className="mt-10">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
            {tier.name} — <span className="text-brand-700">{tier.subtitle}</span>
          </h3>
          <p className="mt-3 text-ink-600/80">{tier.tagline}</p>
          {tier.note && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-800 ring-1 ring-brand-500/30">
              <Check className="h-4 w-4" /> {tier.note}
            </p>
          )}
        </div>

        <div className={`mt-10 grid gap-5 ${tier.groups.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {tier.groups.map((g, gi) => {
            const Icon = audienceIcon(g.audience);
            return (
              <div
                key={g.audience}
                className={`flex flex-col rounded-3xl border p-6 sm:p-7 ${
                  gi === 0 ? "border-ink-900 bg-ink-900 text-white" : "border-ink-900/10 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      gi === 0 ? "bg-brand-500 text-ink-950" : "bg-brand-50 text-brand-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-60">{gi + 1}.</p>
                    <h4 className="font-bold leading-tight">{g.audience}</h4>
                  </div>
                </div>
                <p
                  className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    gi === 0 ? "bg-white/10 text-brand-300" : "bg-ink-900/5 text-ink-700"
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" /> {g.platform}
                </p>
                <ul className="mt-6 space-y-5">
                  {g.features.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <Check
                        className={`mt-0.5 h-5 w-5 shrink-0 ${gi === 0 ? "text-brand-400" : "text-brand-600"}`}
                        strokeWidth={3}
                      />
                      <div>
                        <p className="text-sm font-bold">{f.title}</p>
                        <p className={`mt-1 text-sm leading-relaxed ${gi === 0 ? "text-white/65" : "text-ink-600/80"}`}>
                          {f.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
