import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Eye, HeartHandshake, MapPin, PackageCheck, Target, Wrench } from "lucide-react";
import LeadBanner from "@/components/LeadBanner";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Eagle Eye GPS is a brand of Omesh Automation, Siliguri — delivering turnkey GPS tracking, video telematics and fleet products with 1-year recharge, installation and lifetime support.",
};

const values = [
  {
    icon: PackageCheck,
    title: "Complete solutions, one price",
    text: "Hardware, SIM, software and apps delivered together with 1-year recharge included — never split into confusing separate charges.",
  },
  {
    icon: Wrench,
    title: "We install, you track",
    text: "Our own technicians install and configure every device on-site, so your tracking works from day one.",
  },
  {
    icon: HeartHandshake,
    title: "Support for life",
    text: "Lifetime support from a local team you can call, WhatsApp or visit — not a faceless helpline.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <nav className="flex items-center gap-1 text-xs text-white/50" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-brand-400">About Us</span>
            </nav>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
              The eagle&apos;s eye on everything that <span className="text-brand-400">moves</span>.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Eagle Eye GPS is the telematics brand of <strong className="text-white">Omesh Automation</strong>,
              headquartered in Siliguri, West Bengal. We help families, businesses and schools see, secure and manage
              their vehicles through smart GPS tracking, 4G video telematics and purpose-built fleet software.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-brand-400" /> {site.address.line1}, {site.address.line2}
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/app-phones.png"
              alt="Eagle Eye GPS Pro mobile app screens"
              width={768}
              height={432}
              className="w-full mix-blend-lighten"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-brand-50 p-8 sm:p-10">
            <Target className="h-10 w-10 text-brand-700" />
            <h2 className="mt-5 text-2xl font-extrabold text-ink-900">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-ink-600/80">
              To make professional-grade vehicle tracking simple and affordable — by delivering every product as a
              complete, ready-to-use solution with recharge, apps, installation and support included.
            </p>
          </div>
          <div className="rounded-[2rem] bg-ink-900 p-8 text-white sm:p-10">
            <Eye className="h-10 w-10 text-brand-400" />
            <h2 className="mt-5 text-2xl font-extrabold">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-white/70">
              To be the most trusted telematics partner for families, fleets and schools across India — where every
              journey is visible, every vehicle is secure and every student gets home safe.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-grid-light bg-brand-50/40 py-20 sm:py-24">
        <Container>
          <SectionHeading center eyebrow="How we work" title="What makes Eagle Eye different" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-7 ring-1 ring-ink-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600/80">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid items-center gap-8 rounded-[2rem] bg-white p-6 ring-1 ring-ink-900/5 sm:p-10 lg:grid-cols-2">
            <div>
              <Eyebrow>What we deliver</Eyebrow>
              <ul className="mt-5 space-y-3 text-ink-800">
                {[
                  "Personal vehicle GPS tracking for cars & bikes",
                  "Advance fleet management with fuel & temperature sensors",
                  "SmartBus Lite & Premium school bus tracking",
                  "1, 2, 3 & 4-channel 4G dashcams with live video",
                  "AIS-140 certified trackers for compliance",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src="/images/school-buses.jpg" alt="Fleet of school buses" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <LeadBanner />
    </>
  );
}
