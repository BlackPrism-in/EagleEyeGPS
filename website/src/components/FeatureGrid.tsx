import type { Feature } from "@/data/products";
import Reveal from "./Reveal";
import { Container, SectionHeading } from "./ui";

/** Sub-Section A: 2-column icon grid of core software / tracking features. */
export default function FeatureGrid({
  title,
  intro,
  features,
}: {
  title: string;
  intro?: string;
  features: Feature[];
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Software & Tracking" title={title} intro={intro} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 80}>
              <div className="group flex h-full gap-5 rounded-2xl border border-ink-900/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-[0_18px_40px_-20px_rgba(13,17,23,0.35)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600/80">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
