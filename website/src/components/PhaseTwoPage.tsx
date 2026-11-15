import Image from "next/image";
import { Check } from "lucide-react";
import { whatsappLink } from "@/data/site";
import LeadBanner from "./LeadBanner";
import { Button, Container, RechargeBadge, WhatsAppIcon } from "./ui";

/** Short-form product page used for AIS-140 and Field Employee Tracking until full Phase 2 copy arrives. */
export default function PhaseTwoPage({
  title,
  headline,
  text,
  points,
  image,
  productName,
}: {
  title: string;
  headline: string;
  text: string;
  points: string[];
  image: string;
  productName: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-400">{title}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70">{text}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={3} /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <RechargeBadge light>1-Year Recharge Included · Installation &amp; Lifetime Support</RechargeBadge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#quote">Enquire Now</Button>
              <Button href={whatsappLink(`Hi Eagle Eye GPS, I'd like details on ${productName}.`)} variant="whatsapp">
                <WhatsAppIcon /> WhatsApp Us
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <Image src={image} alt={title} width={480} height={480} className="w-full mix-blend-lighten" priority />
          </div>
        </Container>
      </section>
      <LeadBanner
        title={`Enquire about ${productName}`}
        intro="Share your requirement and our team will send full specifications and pricing directly."
        defaultProduct={productName}
      />
    </>
  );
}
