import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, LogIn, Mail, MapPin, Phone } from "lucide-react";
import LeadBanner from "@/components/LeadBanner";
import { Container, WhatsAppIcon } from "@/components/ui";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call ${site.phone}, WhatsApp or visit Eagle Eye GPS at Champasari More, Siliguri for GPS tracking, dashcams and fleet solutions.`,
};

const cards = [
  { icon: Phone, title: "Call us", value: site.phone, href: site.phoneHref },
  { icon: WhatsAppIcon, title: "WhatsApp", value: site.phone, href: whatsappLink() },
  { icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: LogIn, title: "Client Login", value: "tracking.eagleeyegps.in", href: site.loginUrl },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <Container className="relative py-16 lg:py-20">
          <nav className="flex items-center gap-1 text-xs text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-400">Contact</span>
          </nav>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Let&apos;s talk tracking.</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Call, WhatsApp or drop by our Siliguri office. We&apos;ll recommend the right complete package for your
            vehicles — with 1-year recharge included.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-500"
              >
                <c.icon className="h-6 w-6 text-brand-400" />
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-white/50">{c.title}</p>
                <p className="mt-1 break-words font-semibold group-hover:text-brand-300">{c.value}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <LeadBanner title="Request a free quote" />

      <section className="bg-white pb-24">
        <Container>
          <div className="grid overflow-hidden rounded-[2rem] border border-ink-900/10 lg:grid-cols-[1fr_1.6fr]">
            <div className="p-8 sm:p-10">
              <MapPin className="h-8 w-8 text-brand-600" />
              <h2 className="mt-4 text-2xl font-extrabold text-ink-900">Visit our office</h2>
              <address className="mt-3 not-italic leading-relaxed text-ink-600/80">
                Eagle Eye GPS (Omesh Automation)
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Champasari+More+Siliguri+734003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-700"
              >
                Get Directions
              </a>
            </div>
            <iframe
              title="Eagle Eye GPS office location — Champasari More, Siliguri"
              src="https://www.google.com/maps?q=Champasari+More,+Siliguri,+West+Bengal+734003&output=embed"
              className="h-80 w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
