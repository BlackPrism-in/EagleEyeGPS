import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { whatsappLink } from "@/data/site";
import { Button, Container, RechargeBadge, WhatsAppIcon } from "./ui";

export default function ProductHero({
  pageTitle,
  headline,
  subHeadline,
  badge,
  image,
  imageAlt,
  imageClassName = "object-cover",
  extra,
}: {
  pageTitle: string;
  headline: string;
  subHeadline: string;
  badge: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  extra?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        <div>
          <nav className="flex items-center gap-1 text-xs text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>Products</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-400">{pageTitle}</span>
          </nav>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-brand-400">{pageTitle}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{subHeadline}</p>
          <div className="mt-6">
            <RechargeBadge light>{badge}</RechargeBadge>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#quote">Get Free Quote</Button>
            <Button href={whatsappLink(`Hi Eagle Eye GPS, I'm interested in the ${pageTitle}.`)} variant="whatsapp">
              <WhatsAppIcon /> WhatsApp Us
            </Button>
          </div>
          {extra}
        </div>
        <div className="relative">
          <div className="absolute inset-6 rounded-[2rem] bg-brand-500/30 blur-2xl" aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink-800 ring-1 ring-white/10">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className={imageClassName} />
          </div>
        </div>
      </Container>
    </section>
  );
}
