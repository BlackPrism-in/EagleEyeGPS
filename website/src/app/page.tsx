import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Camera,
  Headphones,
  History,
  Layers,
  MapPin,
  Mic,
  PackageCheck,
  Power,
  Radar,
  ShieldCheck,
  Smartphone,
  Video,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import LeadBanner from "@/components/LeadBanner";
import { Button, Container, Eyebrow, RechargeBadge, SectionHeading } from "@/components/ui";
import { productCards } from "@/data/products";
import { industries } from "@/data/solutions";
import { site } from "@/data/site";

const trust = [
  { icon: PackageCheck, title: "100% Turnkey Setup", text: "1-Year Recharge Included" },
  { icon: History, title: "90-Day Route Playback", text: "& Detailed Reports" },
  { icon: Radar, title: "24/7 Real-Time", text: "Live Tracking" },
  { icon: Wrench, title: "Pan-India Installation", text: "& Lifetime Support" },
];

const why = [
  {
    icon: PackageCheck,
    title: "All-in-One Complete Package",
    text: "Device, SIM, software, apps and installation in one price — with 1-year recharge included. No separate hardware, SIM or software bills.",
  },
  {
    icon: Smartphone,
    title: "Unified Web & Mobile Apps",
    text: "Track every vehicle from the Eagle Eye GPS Pro app or the web dashboard — the same data, alerts and reports everywhere.",
  },
  {
    icon: Layers,
    title: "Precision Sensors & Video",
    text: "Add fuel, temperature, AC and door sensors or 1–4 channel 4G dashcams to turn location data into real operational insight.",
  },
  {
    icon: Headphones,
    title: "Local Support & Fast Installation",
    text: "A Siliguri-based team that installs on-site, trains your staff and stays with you with lifetime support.",
  },
];

const steps = [
  { n: "01", title: "Tell us your need", text: "Share your vehicle type and count on call, WhatsApp or the quote form." },
  { n: "02", title: "On-site installation", text: "Our technician installs and configures the device at your location." },
  { n: "03", title: "Get your apps", text: "Log in to the Eagle Eye GPS Pro app and the web platform instantly." },
  { n: "04", title: "Track & get alerts", text: "Live location, alerts and reports start immediately — recharge included." },
];

export default function Home() {
  return (
    <>
      {/* BLOCK 1 — HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />
        <Container className="relative grid items-center gap-10 pb-16 pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-24 lg:pt-20">
          <div>
            <RechargeBadge light>Complete Turnkey GPS &amp; Telematics Products — 1-Year Recharge Included</RechargeBadge>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.3rem]">
              Smart GPS Tracking, <span className="text-brand-400">Video Telematics</span> &amp; Fleet Products for
              Vehicles, Schools &amp; Enterprises
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              From personal cars and commercial fleets to school buses and AIS-140 compliance—monitor everything in
              real time through the Eagle Eye GPS web and mobile platforms with zero hidden charges.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#quote">
                Request a Demo / Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#products" variant="ghost-light">
                Explore Products
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-400" /> No hidden charges
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400" /> Siliguri · Pan-India
              </span>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                <Headphones className="h-4 w-4 text-brand-400" /> {site.phone}
              </a>
            </div>
          </div>

          {/* Right visual: web dashboard + mobile app + hardware */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Image
              src="/images/devices-mockup.png"
              alt="Eagle Eye GPS web dashboard and mobile apps"
              width={612}
              height={366}
              priority
              className="relative w-full mix-blend-lighten"
            />
            <div className="absolute -bottom-14 right-2 w-24 animate-float mix-blend-lighten sm:w-32">
              <Image
                src="/images/gps-device.png"
                alt="Eagle Eye 4G GPS tracking device"
                width={480}
                height={480}
              />
            </div>
            {/* Floating alert chips */}
            <div className="absolute -top-2 right-0 hidden rounded-xl bg-white px-3 py-2 text-ink-900 shadow-2xl sm:block">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-ink-600/60">
                <BellRing className="h-3 w-3 text-brand-600" /> Eagle Eye GPS Pro · now
              </p>
              <p className="text-xs font-bold">Ignition ON — WB 76C 0925</p>
            </div>
            <div className="absolute -top-4 left-4 hidden rounded-xl bg-white px-3 py-2 text-ink-900 shadow-2xl sm:block">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-ink-600/60">
                <Power className="h-3 w-3 text-red-500" /> Engine Immobilized
              </p>
              <p className="text-xs font-bold">Vehicle secured remotely</p>
            </div>
          </div>
        </Container>
      </section>

      {/* BLOCK 2 — TRUST STRIP */}
      <section className="relative z-10 -mt-px bg-brand-500">
        <Container>
          <ul className="grid grid-cols-2 divide-ink-950/10 lg:grid-cols-4 lg:divide-x">
            {trust.map((t) => (
              <li key={t.title} className="flex items-center gap-3 px-2 py-5 sm:px-6 sm:py-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-950 text-brand-400">
                  <t.icon className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-extrabold text-ink-950 sm:text-base">{t.title}</span>
                  <span className="block text-xs font-medium text-ink-950/70 sm:text-sm">{t.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* BLOCK 3 — PRODUCTS GRID */}
      <section id="products" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Products"
              title="Complete tracking products — not just devices"
              intro="Every Eagle Eye product is an all-in-one solution: hardware, apps, installation and 1-year recharge included."
            />
            <Button href="#quote" variant="outline" className="shrink-0">
              Not sure? Get advice
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {productCards.map((p, i) => (
              <Reveal
                key={p.href}
                delay={i * 60}
                className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  href={p.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white transition-all hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-[0_24px_50px_-24px_rgba(13,17,23,0.4)]"
                >
                  <div className={`relative overflow-hidden bg-black ${i < 2 ? "h-56" : "h-48"}`}>
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        p.image.endsWith(".png") ? "object-contain p-4" : "object-cover"
                      }`}
                    />
                    <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                      <p.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600/80">{p.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                      View Product
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BLOCK 4 — DASHCAM SPOTLIGHT */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-500/10 to-transparent" aria-hidden />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow light>New · 4G Video Telematics</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Eagle Eye <span className="text-brand-400">4G Multi-Channel</span> Dashcams
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              See the road and the cabin — live. Available in 1, 2, 3 &amp; 4-channel configurations with live video
              streaming, live voice monitoring and a complete GPS tracking suite built in.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Video, t: "Live road & cabin video", d: "Stream from the app or web portal" },
                { icon: Mic, t: "Live voice monitoring", d: "Hear in-cabin audio in real time" },
                { icon: Camera, t: "1 · 2 · 3 · 4 channels", d: "Front, cabin, cargo & rear views" },
                { icon: MapPin, t: "Built-in GPS suite", d: "No separate tracker needed" },
              ].map((x) => (
                <li key={x.t} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <x.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <span>
                    <span className="block text-sm font-bold">{x.t}</span>
                    <span className="block text-xs text-white/60">{x.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/products/advance-fleet-management">Dashcams for Fleets</Button>
              <Button href="/products/personal-vehicle-tracking" variant="ghost-light">
                Dashcams for Cars
              </Button>
            </div>
          </div>
          <div className="relative grid grid-cols-5 grid-rows-2 gap-3">
            <div className="relative col-span-5 aspect-video overflow-hidden rounded-3xl ring-1 ring-white/10 sm:col-span-3 sm:row-span-2 sm:aspect-auto">
              <Image src="/images/dashcam-cabin.jpg" alt="Live in-cabin camera feed" fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
            </div>
            <div className="relative col-span-5 aspect-video overflow-hidden rounded-3xl ring-1 ring-white/10 sm:col-span-2">
              <Image src="/images/dashcam-adas.jpg" alt="Front road camera with collision warning" fill sizes="(min-width:1024px) 20vw, 100vw" className="object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">CH 1 · Road</span>
            </div>
            <div className="relative col-span-5 flex aspect-video flex-col justify-center rounded-3xl bg-brand-500 p-5 text-ink-950 sm:col-span-2">
              <p className="text-4xl font-extrabold">4G</p>
              <p className="mt-1 text-sm font-semibold leading-snug">Live streaming without Wi-Fi — on mobile &amp; web</p>
            </div>
          </div>
        </Container>
      </section>

      {/* BLOCK 5 — WHY CHOOSE */}
      <section className="bg-grid-light bg-brand-50/40 py-20 sm:py-28">
        <Container>
          <SectionHeading
            center
            eyebrow="Why Eagle Eye GPS"
            title="One partner, one price, everything included"
            intro="We don't sell you a device and leave. You get a complete, working tracking solution — set up and supported by our own team."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-[0_10px_30px_-18px_rgba(13,17,23,0.3)] ring-1 ring-ink-900/5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
                    <w.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-ink-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600/80">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-20 rounded-[2rem] bg-ink-900 p-6 text-white sm:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <h3 className="text-2xl font-extrabold tracking-tight">Up and running in 4 simple steps</h3>
              <Link href="#quote" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-400 hover:text-brand-300">
                Start with step 1 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="relative border-t border-white/15 pt-5">
                  <span className="absolute -top-px left-0 h-0.5 w-12 bg-brand-500" />
                  <span className="text-sm font-bold text-brand-400">{s.n}</span>
                  <p className="mt-2 font-bold">{s.title}</p>
                  <p className="mt-1 text-sm text-white/60">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* BLOCK 6 — INDUSTRIES PREVIEW */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Solutions by Industry"
              title="Built for the way your industry moves"
              intro="Fuel, temperature, safety and compliance needs differ by industry. Our solutions are configured for yours."
            />
            <Button href="/solutions" variant="dark" className="shrink-0">
              Explore All Industry Solutions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((ind, i) => (
              <Reveal key={ind.id} delay={(i % 3) * 70}>
                <Link
                  href={`/solutions#${ind.id}`}
                  className="group flex h-full items-start gap-5 rounded-3xl border border-ink-900/10 p-6 transition-colors hover:border-ink-900 hover:bg-ink-900"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                    <ind.icon className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block text-base font-bold text-ink-900 group-hover:text-white">{ind.title}</span>
                    <span className="mt-1 block text-sm text-ink-600/80 group-hover:text-white/60">{ind.short}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BLOCK 7 — LEAD CAPTURE */}
      <LeadBanner />
    </>
  );
}
