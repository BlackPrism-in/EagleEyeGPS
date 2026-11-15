import Image from "next/image";
import { Camera, Check } from "lucide-react";
import type { DashcamBlock } from "@/data/products";
import { Button, Container, Eyebrow } from "./ui";

const channels = [
  { n: "1", label: "Front road" },
  { n: "2", label: "Front + cabin" },
  { n: "3", label: "+ Blind spot" },
  { n: "4", label: "All-around + rear" },
];

/** Sub-Section B: visually separated hardware upgrade card for the 4G dashcam. */
export default function DashcamUpgrade({ block }: { block: DashcamBlock }) {
  return (
    <section className="bg-brand-50/60 py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-brand-500/30 bg-white shadow-[0_30px_60px_-30px_rgba(124,45,18,0.3)]">
          <div className="flex items-center gap-2 border-b border-brand-500/20 bg-brand-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink-950 sm:px-10">
            <Camera className="h-4 w-4" /> Optional Hardware Upgrade
          </div>
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div>
              <Eyebrow>Eagle Eye 4G Dashcam</Eyebrow>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-3xl">
                {block.title}{" "}
                <span className="text-brand-700">(1, 2, 3 &amp; 4 Channel)</span>
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600/80">{block.description}</p>

              <div className="mt-6 grid grid-cols-4 gap-2">
                {channels.map((c) => (
                  <div key={c.n} className="rounded-xl border border-ink-900/10 p-3 text-center">
                    <div className="text-2xl font-extrabold text-ink-900">
                      {c.n}
                      <span className="text-sm text-brand-700">CH</span>
                    </div>
                    <div className="mt-0.5 text-[11px] leading-tight text-ink-600/70">{c.label}</div>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl bg-ink-900">
                <Image
                  src="/images/dashcam-cabin.jpg"
                  alt="Live in-cabin dashcam feed streaming on the Eagle Eye platform"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <ul className="grid gap-4">
                {block.points.map((p) => (
                  <li key={p.title} className="flex gap-4 rounded-2xl bg-ink-900 p-5 text-white">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-bold">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="#quote" variant="dark">
                  Ask for Dashcam Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
