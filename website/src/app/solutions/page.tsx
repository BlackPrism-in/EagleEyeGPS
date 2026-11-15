import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import LeadBanner from "@/components/LeadBanner";
import Reveal from "@/components/Reveal";
import { Container, RechargeBadge } from "@/components/ui";
import { industries } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Industry-Specific Telematics & GPS Solutions",
  description:
    "GPS tracking, sensor and video surveillance solutions for logistics, cold-chain, construction, mining, emergency fleets, schools and corporate transport.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <Image src="/images/highway.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" aria-hidden />
        <Container className="relative py-20 lg:py-28">
          <nav className="flex items-center gap-1 text-xs text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-400">Solutions</span>
          </nav>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-brand-400">
            Industry-Specific Telematics &amp; GPS Solutions
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Tailored GPS Tracking, Sensor &amp; Video Surveillance Solutions Built for Your Industry
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Every industry faces unique operational, fuel, safety, and compliance challenges. Explore how Eagle Eye
            GPS delivers turnkey, 1-year-recharge-included solutions engineered for your specific fleet and
            workforce.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-brand-500 hover:text-brand-300"
              >
                <ind.icon className="h-4 w-4" /> {ind.title.split(" & ")[0]}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.id}>
              <article
                id={ind.id}
                className="grid scroll-mt-28 gap-6 rounded-[2rem] border border-ink-900/10 p-6 sm:p-10 lg:grid-cols-[auto_1fr_1fr] lg:items-start lg:gap-10"
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
                    <ind.icon className="h-8 w-8" />
                  </span>
                  <span className="text-5xl font-extrabold text-ink-900/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-ink-900">{ind.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-600/80">{ind.text}</p>
                  {ind.href && (
                    <Link
                      href={ind.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
                    >
                      View recommended product <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {ind.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-ink-800">
                      <Check className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={3} /> {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          <div className="pt-6 text-center">
            <RechargeBadge>Every industry solution is turnkey — 1-Year Recharge Included</RechargeBadge>
          </div>
        </Container>
      </section>

      <LeadBanner title="Talk to us about your industry" />
    </>
  );
}
